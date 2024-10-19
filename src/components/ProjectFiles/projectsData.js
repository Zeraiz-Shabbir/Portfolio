// import React, { useRef, useState } from 'react';
// import tinyTask from '../../assets/tiny_task_portfolio.png';
// import budgetBuddy from '../../assets/budget_buddy_portfolio.png';
// import cyberbullying from '../../assets/cyberbullying_portfolio.png';
// import mealMatch from '../../assets/meal_match_portfolio.png';
// import portfolio from '../../assets/personal_portfolio.png';

// // Tiny Task
// import flutterIcon from '../../assets/tiny_task/flutter.svg';
// import dartIcon from '../../assets/tiny_task/dart.svg';
// import firebaseIcon from '../../assets/tiny_task/firebase.svg';
// import androidIcon from '../../assets/tiny_task/android.svg';
// import githubIcon from '../../assets/tiny_task/github.svg';

// // Budget Buddy
// import javaIcon from '../../assets/budget_buddy/java.svg';
// import xmlIcon from '../../assets/budget_buddy/xml.svg';
// import sqliteIcon from '../../assets/budget_buddy/sqlite.svg';
// import androidStudioIcon from '../../assets/budget_buddy/androidstudio.svg';
// import junitIcon from '../../assets/budget_buddy/junit5.svg';
// import materialDesignIcon from '../../assets/budget_buddy/materialdesign.svg';
// import gradleIcon from '../../assets/budget_buddy/gradle.svg';

// // Cyberbullying Detection Model
// import sparkIcon from '../../assets/cyberbullying/apachespark.svg';
// import azureIcon from '../../assets/cyberbullying/azure.svg';
// import databricksIcon from '../../assets/cyberbullying/databricks.svg';
// import kaggleIcon from '../../assets/cyberbullying/kaggle.svg';

// // Meal Match
// import kotlinIcon from '../../assets/meal_match/kotlin.svg';

// // Personal Portfolio
// import awsIcon from '../../assets/portfolio/amazonec2.svg';
// import phpIcon from '../../assets/portfolio/php.svg';
// import phpMyAdminIcon from '../../assets/portfolio/phpmyadmin.svg';
// import wordpressIcon from '../../assets/portfolio/wordpress.svg';
// import javascriptIcon from '../../assets/portfolio/javascript.svg';

// // Project data
// const projects = [
//   {
//     id: 1,
//     title: 'Tiny Task',
//     description: 'Daily task organizer focused on simplicity and efficacy.',
//     image: tinyTask,
//     technologies: [
//       { name: 'Flutter', icon: flutterIcon },
//       { name: 'Dart', icon: dartIcon },
//       { name: 'Firebase', icon: firebaseIcon },
//       { name: 'Android Emulator', icon: androidIcon },
//       { name: 'Github', icon: githubIcon },
//     ],
//   },
//   {
//     id: 2,
//     title: 'Budget Buddy',
//     description: 'Simple financial tracking app for daily income and expense with an option of budgeting.',
//     image: budgetBuddy,
//     technologies: [
//       { name: 'Java', icon: javaIcon },
//       { name: 'XML', icon: xmlIcon },
//       { name: 'SQLite', icon: sqliteIcon },
//       { name: 'Android Studio', icon: androidStudioIcon },
//       { name: 'Android Emulator', icon: androidIcon },
//       { name: 'Gradle', icon: gradleIcon },
//       { name: 'Material Design', icon: materialDesignIcon },
//       { name: 'JUnit5', icon: junitIcon },
//       { name: 'Github', icon: githubIcon },
//     ],
//   },
//   {
//     id: 3,
//     title: 'Cyberbullying Detection Model',
//     description: 'ML Model capable of classifying tweets into six different categories.',
//     image: cyberbullying,
//     technologies: [
//       { name: 'Apache Spark', icon: sparkIcon },
//       { name: 'Azure', icon: azureIcon },
//       { name: 'Databricks', icon: databricksIcon },
//       { name: 'Kaggle', icon: kaggleIcon },
//       { name: 'Github', icon: githubIcon },
//     ],
//   },
//   {
//     id: 4,
//     title: 'Meal Match',
//     description: 'Intuitive meal-planning app designed to help people choose recipes to make based on ingredients on hand.',
//     image: mealMatch,
//     technologies: [
//       { name: 'Kotlin', icon: kotlinIcon },
//       { name: 'XML', icon: xmlIcon },
//       { name: 'Android Studio', icon: androidStudioIcon },
//       { name: 'Android Emulator', icon: androidIcon },
//       { name: 'Gradle', icon: gradleIcon },
//       { name: 'Github', icon: githubIcon },
//     ],
//   },
//   {
//     id: 5,
//     title: 'Personal Portfolio',
//     description: 'Initial portfolio website focused on functionality.',
//     image: portfolio,
//     technologies: [
//       { name: 'JavaScript', icon: javascriptIcon },
//       { name: 'PHPMyAdmin', icon: phpMyAdminIcon },
//       { name: 'PHP', icon: phpIcon },
//       { name: 'WordPress', icon: wordpressIcon },
//       { name: 'AWS EC2', icon: awsIcon },
//     ],
//   },
// ];

// const Projects = () => {
//   const projectsRef = useRef([]);
//   const overlayRef = useRef(null);
//   const projectImageRef = useRef(null);
//   const projectDetailsRef = useRef(null);
//   const [selectedProject, setSelectedProject] = useState(null);

//   const handleProjectClick = (index) => {
//     setSelectedProject(projects[index]);

//     gsap.to(projectsRef.current[index], {
//       duration: 0.5,
//       y: '-100vh',
//       onComplete: () => openProjectScreen(),
//     });
//   };

//   const openProjectScreen = () => {
//     gsap.to(overlayRef.current, {
//       duration: 0.5,
//       opacity: 1,
//       display: 'block',
//       onStart: () => (document.body.style.overflow = 'hidden'),
//       onComplete: slideInProjectDetails,
//     });
//   };

//   const slideInProjectDetails = () => {
//     gsap.fromTo(projectImageRef.current, { y: '-100vh', opacity: 0 }, { y: '100px', opacity: 1, duration: 0.5 });
//     gsap.fromTo(projectDetailsRef.current.querySelector('.project-title'), { x: '100vw' }, { x: '0', duration: 0.5 });
//     gsap.fromTo(projectDetailsRef.current.querySelector('.technologies-used'), { x: '-100vw' }, { x: '0', duration: 0.5 });
//   };

//   const handleBackButtonClick = () => {
//     gsap.to(projectImageRef.current, { y: '-100vh', duration: 0.5, onComplete: closeProjectScreen });
//   };

//   const closeProjectScreen = () => {
//     gsap.to(overlayRef.current, { opacity: 0, display: 'none', onComplete: () => (document.body.style.overflow = '') });
//     setSelectedProject(null); // Reset the selected project
//   };

//   return (
//     <section className="projects-section">
//       <div className="projects-wrapper">
//         <div className="projects-list">
//           {projects.map((project, index) => (
//             <div
//               key={project.id}
//               className="project-item"
//               ref={(el) => (projectsRef.current[index] = el)}
//               onClick={() => handleProjectClick(index)}
//             >
//               <img src={project.image} alt={project.title} className="project-image" />
//             </div>
//           ))}
//         </div>
//       </div>

//       <div ref={overlayRef} className="project-details-overlay" style={{ opacity: 0, display: 'none' }}>
//         {selectedProject && (
//           <div ref={projectDetailsRef}>
//             <img ref={projectImageRef} src={selectedProject.image} alt={selectedProject.title} className="project-image-slide" />
//             <h1 className="project-title">{selectedProject.title}</h1>
//             <p className="project-description">{selectedProject.description}</p>
//             <div className="technologies-used">
//               <h2>Technologies Used</h2>
//               <div className="technology-icons">
//                 {selectedProject.technologies.map((tech, i) => (
//                   <img key={i} src={tech.icon} alt={tech.name} className="tech-icon" />
//                 ))}
//               </div>
//             </div>
//             <div className="back-arrow" onClick={handleBackButtonClick}>
//               &#8592; {/* Back arrow icon */}
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Projects;
