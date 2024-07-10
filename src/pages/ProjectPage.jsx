import { useParams } from 'react-router-dom'; // Import useParams hook from react-router-dom
import ProjectDetail from '../components/ProjectDetail'; // Import ProjectDetail component
import projects from '../data/projects'; // Import projects data

/**
 * ProjectPage component
 * This component renders the detail page for a project based on the project id in the URL.
 * It uses the useParams hook to get the project id from the URL and then finds the corresponding project in the projects data.
 * If the project is found, it renders the ProjectDetail component with the project as a prop.
 * If the project is not found, it renders a message saying "Project not found".
 */
const ProjectPage = () => {
  const { id } = useParams(); // Get the project id from the URL
  const project = projects.find(p => p.id === parseInt(id)); // Find the project in the projects data

  return project ? <ProjectDetail project={project} /> : <div>Project not found</div>;
};

export default ProjectPage;

