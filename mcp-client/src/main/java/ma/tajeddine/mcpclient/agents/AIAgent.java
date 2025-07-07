package ma.tajeddine.mcpclient.agents;

import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.chat.client.advisor.MessageChatMemoryAdvisor;
import org.springframework.ai.chat.memory.MessageWindowChatMemory;
import org.springframework.ai.tool.ToolCallbackProvider;
import org.springframework.stereotype.Service;

@Service
public class AIAgent {
    private ChatClient chatClient;

    public AIAgent(ChatClient.Builder chatClient, ToolCallbackProvider toolCallbackProvider) {
        this.chatClient = chatClient.
                defaultToolCallbacks(toolCallbackProvider)
                .defaultSystem("Answer The user question using the tools provided by the server. If you don't know the answer, say 'I don't know'.")
                .defaultAdvisors(MessageChatMemoryAdvisor.builder(MessageWindowChatMemory.builder().maxMessages(20).build()).build())
                .build();
    }

    public String askLLM(String query) {
        return chatClient.prompt().user(query).call().content();
    }
}
