# MCP Project - Spring Boot & Python Integration
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.x-brightgreen.svg)
![Angular](https://img.shields.io/badge/Angular-20.x-red.svg)
![Python](https://img.shields.io/badge/Python-3.x-blue.svg)

A comprehensive Model Context Protocol (MCP) implementation featuring a Spring Boot client, Python server, and Angular frontend. This system demonstrates AI-powered chat functionality with tool integration for stock information, company data, file system operations, and employee management.

**Author**: Tajeddine Bouhrim (Master SDIA)

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Architecture](#architecture)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Development Setup](#development-setup)
- [API Endpoints](#api-endpoints)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction

This project implements the Model Context Protocol (MCP) with a multi-tier architecture:
- **Spring Boot MCP Client**: Handles AI chat requests and tool integration
- **Python MCP Server**: Provides various tools and services
- **Angular Frontend**: Modern chat interface for user interaction
- **Spring Boot MCP Server**: Additional enterprise services

The system demonstrates AI reasoning with tool usage, memory management, and real-time chat capabilities.

## Features

### 🤖 AI Chat Interface
- Interactive chat with AI assistant
- Real-time thinking process visualization
- Memory-aware conversations
- Tool integration for enhanced capabilities

### 🛠️ Available Tools
- **Stock Information**: Real-time stock data retrieval
- **Company Data**: Enterprise information lookup
- **File System Operations**: File management capabilities
- **Employee Information**: HR data management

### 💻 Technical Features
- RESTful API architecture
- CORS-enabled cross-origin requests
- Memory persistence across sessions
- Modern responsive UI design
- Error handling and validation

### 🎨 Frontend Features
- Modern Angular-based chat interface
- Thinking vs Response separation
- Suggested questions for quick start
- Loading animations and transitions
- Mobile-responsive design

## Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Angular       │    │   Spring Boot   │    │   Python MCP    │
│   Frontend      │◄──►│   MCP Client    │◄──►│   Server        │
│   (Port 4200)   │    │   (Port 8066)   │    │   (Port 8899)   │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                                │
                                ▼
                       ┌─────────────────┐
                       │   Spring Boot   │
                       │   MCP Server    │
                       │   (Port 8080)   │
                       └─────────────────┘
```

## Installation

### Prerequisites
- **Java 17** or later
- **Node.js 18** or later
- **Python 3.8** or later
- **Maven** (or use included wrapper)
- **Angular CLI** (`npm install -g @angular/cli`)

### Clone the Repository
```bash
git clone https://github.com/scorpionTaj/mcp-project-spring-python.git
cd mcp-project-spring-python
```

### Backend Setup

#### 1. Start Python MCP Server
```bash
cd mcp-server-python
pip install -r requirements.txt  # if requirements.txt exists
python server.py
```

#### 2. Start Spring Boot MCP Client
```bash
cd mcp-client
./mvnw spring-boot:run
```

#### 3. Start Spring Boot MCP Server (Optional)
```bash
cd mcp-server
./mvnw spring-boot:run
```

### Frontend Setup

#### 4. Start Angular Frontend
```bash
cd mcp-frontend
npm install
ng serve
```

## Usage

### Access the Application
1. **Frontend Interface**: http://localhost:4200
2. **Backend API**: http://localhost:8066
3. **Swagger UI**: http://localhost:8066/swagger-ui.html (if available)

### Basic Chat Flow
1. Open the frontend at http://localhost:4200
2. Use suggested questions or type your own
3. Watch the AI's thinking process and response
4. Explore various tools and capabilities

### Example Queries
- `"Hello, how are you?"` - Basic greeting
- `"What companies do you know about?"` - Company information
- `"Tell me about Apple stock"` - Stock information
- `"List all employees"` - Employee data
- `"What files are available?"` - File system operations

## Technologies Used

### Backend
- **Spring Boot 3.x** - Main framework
- **Spring AI** - AI integration
- **Spring Data JPA** - Database operations
- **H2 Database** - In-memory database
- **Maven** - Build tool
- **Java 17+** - Programming language

### Frontend
- **Angular 20.x** - Frontend framework
- **TypeScript** - Type-safe JavaScript
- **RxJS** - Reactive programming
- **CSS3** - Modern styling
- **HTML5** - Markup

### Python Server
- **Python 3.x** - Programming language
- **FastAPI/Flask** - Web framework (assumed)
- **MCP SDK** - Model Context Protocol

## Project Structure

```
mcp-project-spring-python/
├── mcp-client/                 # Spring Boot MCP Client
│   ├── src/main/java/
│   │   └── ma/tajeddine/mcpclient/
│   │       ├── agents/         # AI agents
│   │       └── controllers/    # REST controllers
│   ├── src/main/resources/
│   │   ├── application.properties
│   │   └── mcp-servers.json
│   └── pom.xml
├── mcp-server/                 # Spring Boot MCP Server
│   ├── src/main/java/
│   └── pom.xml
├── mcp-server-python/          # Python MCP Server
│   ├── server.py
│   ├── main.py
│   └── pyproject.toml
├── mcp-frontend/               # Angular Frontend
│   ├── src/app/
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   └── app.component.css
│   ├── package.json
│   └── angular.json
├── Screenshots/                # Project screenshots
└── README.md
```

## Development Setup

### Configuration Files

#### Application Properties (Spring Boot)
- **Port**: 8066
- **MCP Server URL**: http://localhost:8899
- **Database**: H2 in-memory
- **AI Model**: Qwen3 via Ollama

#### Angular Configuration
- **Development Port**: 4200
- **API Base URL**: http://localhost:8066
- **CORS**: Enabled for development

### Environment Variables
```bash
# Optional: Set API keys if using external services
export CLAUDE_API_KEY=your_api_key_here
export OLLAMA_BASE_URL=http://localhost:10000
```

## API Endpoints

### Main Chat Endpoint
- **GET** `/chat?query={message}` - Send chat message to AI

### Tool Endpoints (via MCP Server)
- Stock information tools
- Company data retrieval
- File system operations
- Employee management

## Screenshots

### MCP Client Console
![MCP Client Console](Screenshots/MCP%20Client%20Console.png)

### Frontend Testing
![Frontend Testing](Screenshots/frontend%20testing.png)

### Frontend File Access
![Frontend File Access](Screenshots/font%20end%20check%20access%20to%20files.png)

### Company Information via Swagger UI
![Company List 1](Screenshots/liste%20des%20entreprises%20avec%20swagger%20UI(1).png)
![Company List 2](Screenshots/liste%20des%20entreprises%20avec%20swagger%20UI(2).png)

### Company Data Examples
![Apple Company Data](Screenshots/Response%20to%20an%20entreprise%20as%20an%20example(Apple).png)
![Maroc Telecom Company Data](Screenshots/Response%20to%20an%20entreprise%20as%20an%20example(Maroc%20Telecom).png)

### Memory and Conversation Features
![Memory Question](Screenshots/apres%20ajoute%20run%20memoire%20question%20euq%20je%20m'apelle%20.png)
![Name Response](Screenshots/il%20ma%20rendu%20mon%20prenom%20apres%20la%20resultat.png)

### API Testing
![Postman Company Test](Screenshots/Postman%20Method%20GetCompanyByNameTest%20.png)
![Postman All Companies](Screenshots/Postman%20Method%20GetAllCompany%20.png)
![Postman Stock Test](Screenshots/Postman%20Method%20GestStockByCompany.png)

### Python MCP Server
![Python MCP Server](Screenshots/testing%20mcp%20python%20server.png)

### Project Files
![Project Files](Screenshots/files%20in%20my%20projects%20using%20my%20mcp.png)

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

- **GitHub**: [@scorpionTaj](https://github.com/scorpionTaj)
- **Email**: bourhimtajeddine@gmail.com
- **LinkedIn**: [Tajeddine Bouhrim](https://linkedin.com/in/tajeddine-bouhrim)

---

⭐ **Star this repository if you find it helpful!**

**Made with ❤️ by Tajeddine Bouhrim - Master SDIA**
