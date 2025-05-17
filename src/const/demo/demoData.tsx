import { TechIcon } from "@/const/techIcon";
import { Project } from "@/types/types";
 export  const projectData: Project[] = [
    {
      id: "giftly",
      name: "Giftly - Virtual Gift Store",
      description:
        "A full-stack personalized gift store with live chat, multi-language support, admin dashboard, and review system. Built with React, Node.js, and MongoDB.",
      features: [
        "User authentication and profile management",
        "Real-time chat with customer support",
        "Multi-language support (English, Spanish, French)",
        "Admin dashboard for inventory management",
        "Customer review and rating system",
        "Responsive design for all devices",
      ],
      image: "/giftly.png?height=300&width=500",
      tech: [
        { name: "React", icon: <TechIcon name="React" /> },
        { name: "Node.js", icon: <TechIcon name="Node.js" /> },
        { name: "JavaScript", icon: <TechIcon name="JavaScript" /> },
        { name: "HTML5", icon: <TechIcon name="HTML5" /> },
        { name: "CSS3", icon: <TechIcon name="CSS3" /> },
        { name: "MongoDB", icon: <TechIcon name="MongoDB" /> },
        { name: "GitHub", icon: <TechIcon name="GitHub" /> },
      ],
      githubFrontend: "https://github.com/username/giftly-frontend",
      githubBackend: "https://github.com/username/giftly-backend",
      live: "https://giftly-live.vercel.app",
    },
    {
      id: "taskmaster",
      name: "TaskMaster - Project Management",
      description:
        "A comprehensive project management tool with task tracking, team collaboration, and analytics dashboard. Built with Next.js and Firebase.",
      features: [
        "Drag-and-drop task management",
        "Team collaboration with real-time updates",
        "Project analytics and reporting",
        "File sharing and document management",
        "Calendar integration and deadline reminders",
        "Mobile app for on-the-go management",
      ],
      image: "/giftly.png?height=300&width=500",
      tech: [
        { name: "Next.js", icon: <TechIcon name="Next.js" /> },
        { name: "Firebase", icon: <TechIcon name="Firebase" /> },
        { name: "TypeScript", icon: <TechIcon name="TypeScript" /> },
        { name: "Tailwind CSS", icon: <TechIcon name="Tailwind CSS" /> },
      ],
      githubFrontend: "https://github.com/username/taskmaster",
      live: "https://taskmaster-demo.vercel.app",
    },
    {
      id: "foodie",
      name: "Foodie - Recipe Sharing Platform",
      description:
        "A social platform for food enthusiasts to discover, share, and save recipes. Features include ingredient search, meal planning, and nutritional information.",
      features: [
        "Recipe creation and sharing",
        "Ingredient-based search functionality",
        "Meal planning calendar",
        "Nutritional information calculation",
        "User collections and favorites",
        "Social sharing and commenting",
      ],
      image: "/giftly.png?height=300&width=500",
      tech: [
        { name: "React", icon: <TechIcon name="React" /> },
        { name: "Express", icon: <TechIcon name="Express" /> },
        { name: "PostgreSQL", icon: <TechIcon name="PostgreSQL" /> },
        { name: "AWS", icon: <TechIcon name="AWS" /> },
      ],
      githubFrontend: "https://github.com/username/foodie-frontend",
      githubBackend: "https://github.com/username/foodie-api",
      live: "https://foodie-recipes.vercel.app",
    },
  ];
  