import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'MD AADIL HUSSAIN', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'MD AADIL HUSSAIN',
  subtitle: `I'M A SOFTWARE / WEB DEVELOPER`,
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Engineering graduate with 3 years of experience working in Software Development, IT and Service Industry.',
  paragraphTwo:
    'Experienced in JavaScript, Unix Shell Scripting, MySQL. Experienced in Front End Technologies like Angular, React.',
  paragraphThree:
    'Modern Web Stack Enthusiast. Keen to learn new skills and adapt to new technologies',
  resume: 'https://drive.google.com/file/d/1QhIiuKg7IQlqmsjdRQsAiWNVYHQkr0Bv/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'Product Inventory Management System',
    info:
      'The proposed system has provision to view the list of products and allow only the registered and authenticated users to add, edit, delete the products and view the product detail.',
    info2:
      'The user interface to the system has be implemented using Angular. The data about the products is managed in a JSON server. The client application interfaces with the JSON Server through http to retrieve and store data',
    url: '',
    repo: 'https://github.com/mdaadil89/Capstone-Project', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'Simple React Application',
    info:
      'A simple react application wherein we retreive details of robots through an open API end-point ',
    info2:
      'The retreived list is then dispalyed in UI of the Application. This project was made to get familiar with React Library',
    url: '',
    repo: 'https://github.com/mdaadil89/Robofriends', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.jpg',
    title: 'E-Commerce Website',
    info:
      'This was done as part of TopGear Challenge. Developing a full fledged Clothing Web Application in React. Usage of React-Redux library for App State management such as storing cart details, current logged in user details, etc.',
    info2:
      'Application has Integration of Stripe to accept online payments. Firebase is used for Google Sign In, Sign up with email and password and sign In with email and password.',
    url: '',
    repo: 'https://github.com/mdaadil89/crown-clothing', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project4.jpg',
    title: 'Inventory Management using React',
    info:
      'A Capstone Project made during FED React Certification program by Wipro Competency Centre.',
    info2:
      'The proposed system has provision to view the list of products and allow only the registered and authenticated users to add, edit, delete the products and view the product detail.',
    url: '',
    repo: 'https://github.com/mdaadil89/prd-inventory', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'mdaadilhus9@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/aadi8943',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/md-aadil-hussain-32bab6113/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/mdaadil89',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
