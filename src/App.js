// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import './App.css';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';

const projects = [
  {
    title: "Project One",
    description: "Description of project one.",
    link: "https://github.com/user/project-one",
  },
  {
    title: "Project Two",
    description: "Description of project two.",
    link: "https://github.com/user/project-two",
  },
  // Add more projects here
];

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <main className="Projects" id="projects"> {/* Add an ID for linking */}
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default App;
