import { Component, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { catchError, of } from 'rxjs';

interface ChatMessage {
  text: string;
  thinking?: string;
  response?: string;
  isUser: boolean;
  timestamp: Date;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewChecked {
  protected title = 'mcp-frontend';

  @ViewChild('chatMessages') private chatMessagesContainer!: ElementRef;

  messages: ChatMessage[] = [];
  currentMessage: string = '';
  isLoading: boolean = false;

  private readonly API_URL = 'http://localhost:8066';

  constructor(private http: HttpClient) {}

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  sendMessage() {
    if (!this.currentMessage.trim() || this.isLoading) {
      return;
    }

    this.processMessage(this.currentMessage);
  }

  sendSuggestedMessage(message: string) {
    if (this.isLoading) {
      return;
    }
    this.processMessage(message);
  }

  private processMessage(messageText: string) {
    // Add user message
    const userMessage: ChatMessage = {
      text: messageText,
      isUser: true,
      timestamp: new Date()
    };
    this.messages.push(userMessage);

    // Clear input and set loading state
    this.currentMessage = '';
    this.isLoading = true;

    // Send to backend
    this.http.get(`${this.API_URL}/chat`, {
      params: { query: messageText },
      responseType: 'text'
    }).pipe(
      catchError(error => {
        console.error('Error calling AI:', error);
        return of('Sorry, I encountered an error while processing your request. Please make sure the backend server is running.');
      })
    ).subscribe(response => {
      // Parse the response to separate thinking and actual response
      const parsedResponse = this.parseAIResponse(response);

      // Add AI response
      const aiMessage: ChatMessage = {
        text: parsedResponse.fullText,
        thinking: parsedResponse.thinking,
        response: parsedResponse.response,
        isUser: false,
        timestamp: new Date()
      };
      this.messages.push(aiMessage);
      this.isLoading = false;
    });
  }

  private parseAIResponse(response: string): { fullText: string, thinking?: string, response?: string } {
    // Check if response contains <think> tags
    const thinkMatch = response.match(/<think>(.*?)<\/think>/s);

    if (thinkMatch) {
      const thinking = thinkMatch[1].trim();
      const response_part = response.replace(/<think>.*?<\/think>/s, '').trim();

      return {
        fullText: response,
        thinking: thinking,
        response: response_part || 'No response provided.'
      };
    }

    // If no <think> tags, treat the whole response as the main response
    return {
      fullText: response,
      response: response
    };
  }

  private scrollToBottom(): void {
    try {
      if (this.chatMessagesContainer) {
        this.chatMessagesContainer.nativeElement.scrollTop =
          this.chatMessagesContainer.nativeElement.scrollHeight;
      }
    } catch(err) {
      console.error('Error scrolling to bottom:', err);
    }
  }
}
