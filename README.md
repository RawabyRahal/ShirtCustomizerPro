# ShirtCustomizerPro

Welcome to ShirtCustomizerPro! This project allows users to customize their shirts with various textures, decals, and colors using an interactive 3D model. Additionally, you can generate custom images from text descriptions using AI.

### Features
- Customizable 3D shirt model
- Interactive color picker
- Texture and decal application
- Real-time updates with smooth UI transitions
- Save and share your custom designs
- AI Image Generation: Generate custom images from text descriptions

### Installation
To run this project locally, follow these steps:

#### Frontend
1. Clone the repository:
   ```sh
   git clone https://github.com/RawabyRahal/ShirtCustomizerPro.git
   cd ShirtCustomizerPro/client

3. Install dependencies:
   ```sh
   npm install
3. Start the frontend server:
   ```sh
   npm run dev
4. Open your web browser and navigate to `http://localhost:5173` to view the app

#### Backend
1. Navigate to the backend directory:
   ```sh
   cd ../server

2. Install dependencies:
   ```sh
   npm install
3. Start the backend server:
   ```sh
   node index 

### Technologies Used

#### Frontend
- React Vite: For building and developing the user interface.
- Three.js: For rendering the 3D model.
- Tailwind CSS: For styling the application.
- @react-three/fiber: For integrating Three.js with React.
- @react-three/drei: For providing useful helpers for Three.js in React.
- @mui/icons-material: For Material Design icons.
- framer-motion: For animations and transitions.
- maath: For mathematical functions used in 3D calculations.
- react-color: For color pickers.
- react-icons: For icon components.
- react-toastify: For toast notifications.
- valtio: For state management.

#### Backend
- Node.js & Express: For creating the server and API endpoints.
- CORS: For handling Cross-Origin Resource Sharing.
- OpenAI API: For generating images from text descriptions.
- Cloudinary: For image uploads and management.
# Backend Technologies
echo -e "\033[1mBackend\033[0m"
print_tech "Node.js" "For running JavaScript on the server." "https://nodejs.org/" "🔧"
print_tech "Express" "For creating the server and API endpoints." "https://expressjs.com/" "🌐"
print_tech "CORS" "For handling Cross-Origin Resource Sharing." "https://www.npmjs.com/package/cors" "🔄"
print_tech "OpenAI API" "For generating images from text descriptions." "https://platform.openai.com/docs" "🤖"
print_tech "Cloudinary" "For image uploads and management." "https://cloudinary.com/" "☁️"
print_tech "Mongoose" "For MongoDB object modeling." "https://mongoosejs.com/" "🔗"
print_tech "dotenv" "For managing environment variables." "https://www.npmjs.com/package/dotenv" "🔐"
print_tech "Nodemon" "For automatically restarting the server during development." "https://nodemon.io/" "🔄"

