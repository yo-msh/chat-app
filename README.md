# Chat App

A full-stack real-time chat application built using the MERN stack (MongoDB, Express, React, and Node.js), designed to provide users with a seamless and secure messaging experience.

## Features

- **Real-Time Messaging**: Powered by Socket.io for instant communication between users.
- **JWT Authentication**: Ensures secure login and session management.
- **User Registration & Login**: Users can sign up, log in, and access the chat interface.
- **Private Chats**: Secure one-on-one conversations.
- **Responsive UI**: Fully functional on both desktop and mobile devices.

## Tech Stack

- **Frontend**: React, CSS, HTML
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Real-Time Communication**: Socket.io
- **Authentication**: JWT (JSON Web Token)
- **Deployment**: Hosted on [Render](https://chat-app-prod-lctd.onrender.com)

## Installation

To get a local copy up and running, follow these steps:

### Prerequisites

Make sure you have the following installed:
- **Node.js**: [Download Node.js](https://nodejs.org/)
- **MongoDB**: [Install MongoDB](https://docs.mongodb.com/manual/installation/)

### Clone the Repository

```bash
git clone https://github.com/yo-msh/chat-app.git
cd chat-app
```
### Install Dependencies

```node
cd client
npm install
```
### Configure Environment Variables

```javascript
MONGO_URI=<Your MongoDB URI>
JWT_SECRET=<Your JWT Secret>
SOCKET_URL=<Your Socket.io URL>
```


### Run the Application

To start both the client and server, use the following command:

```javascript
npm run dev
```

The application will be available at http://localhost:3000 (frontend) and the server will run on http://localhost:5000.

Usage
-----

1.  **Register an account** or **log in** using existing credentials.
    
2.  Start a new conversation by searching for a user.
    
3.  Chat in real-time with other users and see their online status.
    
4.  Securely log out when done.
    

### Commands

*   npm run dev: Starts both the client and server in development mode.
    
*   npm start: Starts only the server.
    
*   npm run build: Builds the React app for production.
    

API Endpoints
-------------

### Authentication

*   **POST** /api/users/login: Login a user
    
*   **POST** /api/users/register: Register a new user
    

### Chat

*   **GET** /api/chats: Get all chats
    
*   **POST** /api/chats: Create a new chat
    

Screenshots
-----------

Known Issues
------------

*   **Delayed Message Notifications**: Sometimes message notifications are delayed on slow networks.
    
*   **Message Deletion**: Messages cannot be deleted yet. This is a planned feature.
    
*   **User Status**: Occasionally, user online/offline status may not update in real time if there are connection issues.
    

Roadmap
-------

*   **Message Deletion**: Allow users to delete specific messages from chats.
    
*   **Group Chat**: Enable the creation of chat groups with multiple users.
    
*   **Message Reactions**: Add emojis or reactions to messages.
    
*   **File Sharing**: Allow users to share files and images in chats.
    

Contributing
------------

Contributions are welcome! Follow these steps:

1.  Fork the repository.
    
2.  Create a new branch (git checkout -b feature-branch).
    
3.  Make your changes.
    
4.  Commit your changes (git commit -m 'Add some feature').
    
5.  Push to the branch (git push origin feature-branch).
    
6.  Open a Pull Request.
    

Frequently Asked Questions (FAQ)
--------------------------------

### How can I run the app in production mode?

To run the app in production, you need to build the frontend first and start the server:


### How do I change the port?

The app by default runs on port 3000 for the frontend and 5000 for the backend. To change the port:

*   Update the "start" script in the package.json for the server.
    
*   Modify package.json and .env for custom frontend ports.
    

### Can I deploy this on other platforms like Heroku?

Yes! You can deploy this app on any platform supporting Node.js, like Heroku, Vercel, or DigitalOcean. Just configure the environment variables and MongoDB.

### How do I add additional features to the chat app?

You can fork this repository and work on adding features. Once your feature is complete, open a pull request to contribute back to the project.

License
-------

This project is licensed under the MIT License - see the LICENSE file for details.

Contact
-------

For any questions or suggestions, feel free to contact the author:

*   **GitHub**: [@yo-msh](https://github.com/yo-msh)
    
*   **Project Link**: [Chat App on GitHub](https://github.com/yo-msh/chat-app)
