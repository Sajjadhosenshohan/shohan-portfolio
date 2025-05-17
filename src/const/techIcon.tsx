
// Tech Icon Component
export const TechIcon = ({ name }: { name: string }) => {
  // This is a simplified version - in a real app, you'd import the actual icons
  // or use a more sophisticated approach to map names to icons
  switch (name) {
    case "React":
      return <span className="text-blue-400">⚛️</span>;
    case "Node.js":
      return <span className="text-green-500">🟢</span>;
    case "JavaScript":
      return <span className="text-yellow-400"></span>;
    case "TypeScript":
      return <span className="text-blue-500">TS</span>;
    case "HTML5":
      return <span className="text-orange-500">H5</span>;
    case "CSS3":
      return <span className="text-blue-400">C3</span>;
    case "MongoDB":
      return <span className="text-green-500">M</span>;
    case "PostgreSQL":
      return <span className="text-blue-400">PG</span>;
    case "Firebase":
      return <span className="text-yellow-500">🔥</span>;
    case "AWS":
      return <span className="text-orange-400">AWS</span>;
    case "Next.js":
      return <span className="text-white">N</span>;
    case "Express":
      return <span className="text-gray-400">Ex</span>;
    case "Tailwind CSS":
      return <span className="text-cyan-400">TW</span>;
    case "GitHub":
      return <span className="text-white">GH</span>;
    default:
      return <span>{name.charAt(0)}</span>;
  }
};
