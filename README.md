# PromptSphere 🚀

PromptSphere is an AI-powered MERN stack application that allows users to interact with AI through text and image generation. The platform includes user authentication, chat management, credit-based usage, community image sharing, and Stripe payment integration.

## Features

* 🔐 JWT Authentication & Authorization
* 💬 AI Text Chat Generation
* 🎨 AI Image Generation
* 💳 Stripe Payment Gateway Integration
* 💎 Credit-Based Usage System
* 🖼️ Community Image Gallery
* 🌙 Dark / Light Mode Support
* 📱 Responsive UI
* ☁️ ImageKit Integration for Image Storage
* 📚 Chat History Management

## Tech Stack

### Frontend

* React.js
* React Router DOM
* Tailwind CSS
* Axios
* React Hot Toast

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Stripe API
* ImageKit

## Installation

### Clone Repository

```bash
git clone https://github.com/abhishekXsrivastva/promptsphere.git
cd promptsphere
```

### Backend Setup

```bash
cd server
npm install
npm run server
```

Create a `.env` file inside the server directory and add:

```env
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
OPENAI_API_KEY=your_api_key
IMAGEKIT_PUBLIC_KEY=your_public_key
IMAGEKIT_PRIVATE_KEY=your_private_key
IMAGEKIT_URL_ENDPOINT=your_url_endpoint
STRIPE_SECRET_KEY=your_stripe_secret
STRIPE_WEBHOOK_SECRET=your_webhook_secret
CLIENT_URL=http://localhost:5173
```

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

## Project Structure

```bash
PromptSphere/
│
├── client/
│   ├── src/
│   ├── assets/
│   └── components/
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   └── configs/
│
└── README.md
```

## Usage

1. Register/Login to your account.
2. Create a new chat.
3. Generate AI text responses.
4. Generate AI images.
5. Purchase credits through Stripe.
6. Publish generated images to the community gallery.

## Future Enhancements

* Voice Chat Support
* Multiple AI Models
* Prompt Templates Marketplace
* AI Document Analysis
* Real-Time Chat Streaming

## Author

**Abhishek Srivastva**

Built with ❤️ using the MERN Stack.
