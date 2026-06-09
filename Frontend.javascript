// ===============================
// Portfolio Data
// ===============================

const portfolioData = {
  name: "John Doe",
  role: "Full Stack Developer",

  about:
    "I am a passionate developer who builds modern web applications using JavaScript, React, and Node.js.",

  projects: [
    {
      title: "Weather App",
      desc: "Real-time weather using API",
      link: "https://github.com/"
    },
    {
      title: "Todo App",
      desc: "Task management system",
      link: "https://github.com/"
    },
    {
      title: "Portfolio Website",
      desc: "Personal portfolio built with JS",
      link: "https://github.com/"
    }
  ],

  contactEmail: "johndoe@email.com"
};


// ===============================
// NAVBAR
// ===============================

const logo = document.getElementById("logo");
logo.innerText = portfolioData.name;

const navbar = document.getElementById("navbar");

const navItems = ["Home", "About", "Projects", "Contact"];

navItems.forEach(item => {
  const a = document.createElement("a");
  a.innerText = item;
  a.href = "#" + item.toLowerCase();
  navbar.appendChild(a);
});


// ===============================
// HERO SECTION
// ===============================

const hero = document.getElementById("hero");

hero.innerHTML = `
  <div class="hero">
    <h1>Hello, I'm ${portfolioData.name}</h1>
    <h3>${portfolioData.role}</h3>
    <button onclick="scrollToSection('projects')">
      View Projects
    </button>
  </div>
`;


// ===============================
// ABOUT SECTION
// ===============================

document.getElementById("about").innerHTML = `
  <h2>About Me</h2>
  <p>${portfolioData.about}</p>
`;


// ===============================
// PROJECTS SECTION
// ===============================

const projectsSection = document.getElementById("projects");

let projectHTML = "<h2>Projects</h2>";

portfolioData.projects.forEach(project => {
  projectHTML += `
    <div class="project-card">
      <h3>${project.title}</h3>
      <p>${project.desc}</p>
      <a href="${project.link}" target="_blank">View</a>
    </div>
  `;
});

projectsSection.innerHTML = projectHTML;


// ===============================
// CONTACT SECTION
// ===============================

document.getElementById("contact").innerHTML = `
  <h2>Contact</h2>
  <p>Email: ${portfolioData.contactEmail}</p>
  <button onclick="sendMessage()">Send Message</button>
`;


// ===============================
// FOOTER
// ===============================

document.getElementById("footer").innerHTML = `
  <p>© 2026 ${portfolioData.name} Portfolio</p>
`;


// ===============================
// FUNCTIONS
// ===============================

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

function sendMessage() {
  alert("Message sent successfully!");
}
