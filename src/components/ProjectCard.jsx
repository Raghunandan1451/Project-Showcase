/* eslint-disable react/prop-types */

import { Card, CardContent, CardActions, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

/**
 * ProjectCard component
 * 
 * This component renders a card displaying project details.
 * It receives a 'project' prop containing the project details.
 * 
 * @param {Object} project - The project details.
 * @param {string} project.title - The title of the project.
 * @param {string} project.description - The description of the project.
 * @param {number} project.id - The unique ID of the project.
 * 
 * @returns {JSX.Element} The rendered ProjectCard component.
 */
const ProjectCard = ({ project }) => {
  // Using the 'useNavigate' hook to navigate to the project details page
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        minWidth: '100%',
        marginBottom: '1rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      {/* Displaying the project title */}
      <CardContent>
        <Typography variant="h5" component="div">
          {project.title}
        </Typography>
        {/* Displaying the project description */}
        <Typography variant="body2">
          {project.description}
        </Typography>
      </CardContent>
      {/* Displaying a button to navigate to the project details page */}
      <CardActions>
        <Button size="small" onClick={() => navigate(`/project/${project.id}`)}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
