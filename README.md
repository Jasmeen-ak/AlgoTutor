# AlgoTutor

An interactive web application designed to help users understand and master fundamental computer science algorithms. AlgoTutor provides a structured learning path with features for problem-solving, note-taking, and progress tracking, making the learning process intuitive and effective.

![AlgoTutor Logo](https://via.placeholder.com/150x80/000000/FFFFFF?text=AlgoTutor) <!-- You can replace this with your actual logo -->

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Installation and Getting Started](#-installation-and-getting-started)
- [Key Dependencies](#-key-dependencies)
- [Project Structure](#-project-structure)
- [Contributing](#-contributing)
- [License](#-license)
- [Author](#-author)

## ✨ Features

- 🧩 **Interactive Problem Solving**: A dedicated environment to practice and solve algorithmic problems.
- 📝 **Integrated Notes**: Take and manage notes directly within the application to consolidate your learning.
- 🎓 **Course Tracking**: Enroll in courses and track your progress as you master new topics.
- 🔐 **User Authentication**: Secure login system to personalize your learning experience.
- 🎨 **Responsive UI**: A clean and modern interface built with Bootstrap, ensuring a great experience on any device.
- 🧭 **Seamless Navigation**: Smooth client-side routing between different sections of the app.

## 🛠️ Tech Stack

This project is built with modern and efficient web technologies:

-   **[React.js](https://reactjs.org/)**: A JavaScript library for building user interfaces.
-   **[React Router DOM](https://reactrouter.com/)**: For handling routing and navigation within the application.
-   **[Bootstrap](https://getbootstrap.com/)**: A powerful front-end framework for responsive design and pre-built UI components.
-   **[FontAwesome](https://fontawesome.com/)** & **[Lucide React](https://lucide.dev/)**: Libraries for including high-quality SVG icons.
-   **HTML5 & CSS3**: The standard building blocks of the web.
-   **JavaScript (ES6+)**: Modern JavaScript features for clean and efficient code.

## 📚 Prerequisites

Before you begin, ensure you have the following installed on your machine:
-   [Node.js](https://nodejs.org/) (v18 or later recommended)
-   [npm](https://www.npmjs.com/) (usually comes with Node.js) or [yarn](https://yarnpkg.com/)

## 🚀 Installation and Getting Started

Follow these steps to get a copy of the project up and running on your local machine for development and testing purposes.

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/Jasmeen-ak/AlgoTutor.git
    ```

2.  **Navigate into the project directory**:
    ```bash
    cd AlgoTutor
    ```

3.  **Install dependencies**:
    This command will install all the necessary packages listed in the `package.json` file, including React, Bootstrap, React Router, and icon libraries.
    ```bash
    npm install
    ```
    or if you use yarn:
    ```bash
    yarn install
    ```

4.  **Start the development server**:
    Run the following command to launch the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
    ```bash
    npm start
    ```
    or with yarn:
    ```bash
    yarn start
    ```
    

## 📦 Key Dependencies

Here are the main dependencies that power AlgoTutor:

-   **`react` & `react-dom`**: The core libraries for building and rendering the user interface.
-   **`react-router-dom`**: Enables declarative routing, allowing users to navigate between different views (e.g., Home, Problem Solving, Notes) without a full page reload.
-   **`bootstrap`**: Provides the grid system, CSS utilities, and pre-styled components.
    -   **CSS**: Imported in `src/App.js` for global styling.
    -   **JavaScript Bundle**: Imported in `src/components/Navbar.js` to enable interactive components like dropdowns and modals.
-   **`@fortawesome/react-fontawesome` & `@fortawesome/free-solid-svg-icons`**: Used to render high-quality icons from the FontAwesome icon set within React components.
-   **`lucide-react`**: An additional icon library available in the project, offering a different style of icons.
-   **`react-scripts`**: The standard build and development script runner from Create React App.

For a complete list, refer to the `package.json` file.

## 📁 Project Structure

A brief overview of the project's `src` folder structure:

```
src/
├── components/               # Reusable UI components
│   ├── EnrolledCourses/     # Component for the user's enrolled courses page
│   ├── Notes/               # Component for the notes page
│   ├── ProblemSolving/      # Component for the problem-solving page
│   ├── Home.jsx             # The main landing page component
│   └── Login.jsx            # The user authentication component
├── App.js                   # The main application component with routing logic
└── index.js                 # The entry point of the React application
```

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 👩‍💻 Author

**Jasmeen Ak**

-   GitHub: [@Jasmeen-ak](https://github.com/Jasmeen-ak)
