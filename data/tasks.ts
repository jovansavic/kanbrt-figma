export interface Task {
    id: string;
    title: string;
    description: string;
    status: string;
    person: string;
  }

  const TASKS_FOR_DEV: Task[] = [
    { id: "1", title: "Initial Task", description: "This is the initial task", status: "1", person: "John Doe" },
    { id: "2", title: "Second Task", description: "This is the second task", status: "2", person: "Jane Smith" },
    { id: "3", title: "Review Task", description: "This task is under review", status: "3", person: "Alice Johnson" },
    { id: "4", title: "Completed Task", description: "This task is completed", status: "4", person: "Bob Brown" }
  ];
  const TASKS_FOR_MOCKUP: Task[] = [
    { "id": "1", "title": "Redesign Homepage", "description": "Update the homepage to improve user navigation and aesthetic appeal.", "status": "1", "person": "Alice Johnson" },
    { "id": "2", "title": "Optimize Mobile Interface", "description": "Ensure all web pages are responsive and optimized for mobile devices.", "status": "2", "person": "Mark Lee" },
    { "id": "3", "title": "Improve Form Usability", "description": "Redesign user forms to reduce complexity and enhance user experience.", "status": "3", "person": "Sarah Connors" },
    { "id": "4", "title": "Revamp User Onboarding", "description": "Streamline the onboarding process to enhance user retention rates.", "status": "4", "person": "Gregory Bates" },
    { "id": "5", "title": "Update User Profile Layout", "description": "Modernize the user profile layout to include more personalization options.", "status": "1", "person": "Emily White" },
    { "id": "6", "title": "Redesign Dashboard", "description": "Make the dashboard more intuitive and visually engaging.", "status": "2", "person": "Michael Brown" },
    { "id": "7", "title": "Enhance Notification System", "description": "Develop a more interactive and responsive notification system.", "status": "3", "person": "Chloe Hart" },
    { "id": "8", "title": "Create New Icon Set", "description": "Design a new set of icons that reflects the brand's updated image.", "status": "4", "person": "Brian Green" },
    { "id": "9", "title": "Implement Dark Mode", "description": "Add a dark mode option to improve accessibility and user preference.", "status": "1", "person": "Jessica Fox" },
    { "id": "10", "title": "Revise Color Scheme", "description": "Adjust the color scheme to be more inclusive for colorblind users.", "status": "2", "person": "Howard Wolowitz" },
    { "id": "11", "title": "Accessibility Audit", "description": "Conduct a full accessibility audit and address all compliance issues.", "status": "3", "person": "Rajesh Koothrappali" },
    { "id": "12", "title": "Improve Search Functionality", "description": "Enhance the search engine to support fuzzy matching and filters.", "status": "4", "person": "Penny Hofstadter" },
    { "id": "13", "title": "Upgrade Legacy Interfaces", "description": "Update old interfaces to match the new design standards.", "status": "1", "person": "Sheldon Cooper" },
    { "id": "14", "title": "Optimize Image Assets", "description": "Reduce image sizes and implement better caching for faster load times.", "status": "2", "person": "Leonard Hofstadter" },
    { "id": "15", "title": "Refactor CSS Codebase", "description": "Refactor the CSS codebase for better maintainability and scalability.", "status": "3", "person": "Amy Farrah Fowler" },
    { "id": "16", "title": "Implement SVG Graphics", "description": "Switch to SVG for graphics to enhance scalability and clarity on high-resolution displays.", "status": "4", "person": "Bernadette Rostenkowski" },
    { "id": "17", "title": "User Testing Recruitment", "description": "Recruit users for testing the new features in the development pipeline.", "status": "1", "person": "Leslie Winkle" },
    { "id": "18", "title": "Feedback Loop Setup", "description": "Establish a continuous feedback loop with beta testers.", "status": "2", "person": "Priya Koothrappali" },
    { "id": "19", "title": "Landing Page A/B Testing", "description": "Conduct A/B testing on various landing page designs to determine optimal layout.", "status": "3", "person": "Howard Wolowitz" },
    { "id": "20", "title": "Email Template Redesign", "description": "Update email templates to be more engaging and responsive.", "status": "4", "person": "Stephanie Barnett" },
    { "id": "21", "title": "Component Library Update", "description": "Update the component library to include new UI elements.", "status": "1", "person": "Leonard Hofstadter" },
    { "id": "22", "title": "Integrate Analytics", "description": "Integrate new analytics tools to better track user interactions and engagements.", "status": "2", "person": "Sheldon Cooper" },
    { "id": "23", "title": "Mobile App Prototyping", "description": "Develop prototypes for the new mobile application.", "status": "3", "person": "Rajesh Koothrappali" },
    { "id": "24", "title": "UX Workshop Facilitation", "description": "Facilitate a workshop to ideate on new user experience strategies.", "status": "4", "person": "Penny Hofstadter" }
];

export const tasks: Task[] = TASKS_FOR_DEV;