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
4. #### Open your web browser and navigate to http://localhost:5173 to view the app

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

#### Backend
- Node.js & Express: For creating the server and API endpoints.
- CORS: For handling Cross-Origin Resource Sharing.
- OpenAI API: For generating images from text descriptions.
