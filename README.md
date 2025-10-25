AlgoTutor
An interactive web application designed to help users understand and master fundamental computer science algorithms. AlgoTutor provides a structured learning path with features for problem-solving, note-taking, and progress tracking, making the learning process intuitive and effective.

AlgoTutor Logo <!-- You can replace this with your actual logo -->

📋 Table of Contents
Features
Tech Stack
Prerequisites
Installation and Getting Started
Key Dependencies
Project Structure
Contributing
License
Author
✨ Features
🧩 Interactive Problem Solving: A dedicated environment to practice and solve algorithmic problems.
📝 Integrated Notes: Take and manage notes directly within the application to consolidate your learning.
🎓 Course Tracking: Enroll in courses and track your progress as you master new topics.
🔐 User Authentication: Secure login system to personalize your learning experience.
🎨 Responsive UI: A clean and modern interface built with Bootstrap, ensuring a great experience on any device.
🧭 Seamless Navigation: Smooth client-side routing between different sections of the app.
🛠️ Tech Stack
This project is built with modern and efficient web technologies:

React.js: A JavaScript library for building user interfaces.
React Router DOM: For handling routing and navigation within the application.
Bootstrap: A powerful front-end framework for responsive design and pre-built UI components.
FontAwesome & Lucide React: Libraries for including high-quality SVG icons.
HTML5 & CSS3: The standard building blocks of the web.
JavaScript (ES6+): Modern JavaScript features for clean and efficient code.
📚 Prerequisites
Before you begin, ensure you have the following installed on your machine:

Node.js (v18 or later recommended)
npm (usually comes with Node.js) or yarn
🚀 Installation and Getting Started
Follow these steps to get a copy of the project up and running on your local machine for development and testing purposes.

Clone the repository:
bash

Line Wrapping

Collapse
Copy
1
git clone https://github.com/Jasmeen-ak/AlgoTutor.git
Navigate into the project directory:
bash

Line Wrapping

Collapse
Copy
1
cd AlgoTutor
Install dependencies:
This command will install all the necessary packages listed in the package.json file, including React, Bootstrap, React Router, and icon libraries.
bash

Line Wrapping

Collapse
Copy
1
npm install
or if you use yarn:
bash

Line Wrapping

Collapse
Copy
1
yarn install
Start the development server:
Run the following command to launch the app in development mode. Open http://localhost:3000 to view it in your browser.
bash

Line Wrapping

Collapse
Copy
1
npm start
or with yarn:
bash

Line Wrapping

Collapse
Copy
1
yarn start
⚠️ Troubleshooting
If you encounter "Module not found" errors, it means the dependencies weren't installed correctly. Try the following "clean slate" approach:

Delete the node_modules folder and the lock file:
bash

Line Wrapping

Collapse
Copy
1
2
3
4
5
# For npm users
rm -rf node_modules package-lock.json

# For yarn users
rm -rf node_modules yarn.lock
Clear the npm cache:
bash

Line Wrapping

Collapse
Copy
1
npm cache clean --force
Re-install all dependencies:
bash

Line Wrapping

Collapse
Copy
1
npm install
Start the server again:
bash

Line Wrapping

Collapse
Copy
1
npm start
📦 Key Dependencies
Here are the main dependencies that power AlgoTutor:

react & react-dom: The core libraries for building and rendering the user interface.
react-router-dom: Enables declarative routing, allowing users to navigate between different views (e.g., Home, Problem Solving, Notes) without a full page reload.
bootstrap: Provides the grid system, CSS utilities, and pre-styled components.
CSS: Imported in src/App.js for global styling.
JavaScript Bundle: Imported in src/components/Navbar.js to enable interactive components like dropdowns and modals.
@fortawesome/react-fontawesome & @fortawesome/free-solid-svg-icons: Used to render high-quality icons from the FontAwesome icon set within React components.
lucide-react: An additional icon library available in the project, offering a different style of icons.
react-scripts: The standard build and development script runner from Create React App.
For a complete list, refer to the package.json file.

📁 Project Structure
A brief overview of the project's src folder structure:


Line Wrapping

Collapse
Copy
1
2
3
4
5
6
7
8
9
src/
├── components/               # Reusable UI components
│   ├── EnrolledCourses/     # Component for the user's enrolled courses page
│   ├── Notes/               # Component for the notes page
│   ├── ProblemSolving/      # Component for the problem-solving page
│   ├── Home.jsx             # The main landing page component
│   └── Login.jsx            # The user authentication component
├── App.js                   # The main application component with routing logic
└── index.js                 # The entry point of the React application
🤝 Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

Fork the Project
Create your Feature Branch (git checkout -b feature/AmazingFeature)
Commit your Changes (git commit -m 'Add some AmazingFeature')
Push to the Branch (git push origin feature/AmazingFeature)
Open a Pull Request
📄 License
Distributed under the MIT License. See LICENSE for more information.

👩‍💻 Author
Jasmeen Ak

GitHub: @Jasmeen-ak
