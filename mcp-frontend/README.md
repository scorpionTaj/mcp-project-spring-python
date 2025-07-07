# MCP Frontend

This is an Angular frontend for the MCP (Model Context Protocol) client application.

## Features

- Clean, responsive chat interface
- Real-time communication with Spring Boot backend
- Loading indicators and error handling
- Mobile-friendly design

## Setup and Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   ng serve
   ```

3. **Access the application:**
   Open your browser and navigate to `http://localhost:4200`

## Backend Requirements

Make sure your Spring Boot MCP client is running on `http://localhost:8080` before using the frontend.

## Usage

1. Type your message in the input field
2. Click "Send" or press Enter
3. The AI will respond through the MCP client backend
4. Chat history is displayed in the conversation area

## API Integration

The frontend communicates with the Spring Boot backend via HTTP GET requests to:
- `GET http://localhost:8080/?query=your_message`

## Development

- **Angular CLI:** 20.0.5
- **Node.js:** Required for development
- **TypeScript:** Used for type safety
- **RxJS:** For handling HTTP requests

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
