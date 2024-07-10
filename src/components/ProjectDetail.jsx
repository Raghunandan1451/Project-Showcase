/* eslint-disable react/prop-types */

// Import necessary components and icons from MUI
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography, List, ListItem, ListItemText, Link } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// Define a functional component named ProjectDetail
const ProjectDetail = ({ project }) => {
  // Use the useNavigate hook to get the navigate function from react-router-dom
  const navigate = useNavigate();

  // Render the JSX for the ProjectDetail component
  return (
    // Use the Box component from MUI and apply some inline styles
    <Box sx={{ padding: '1rem' }}>
      {/* Render a back button */}
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate('/')}
        sx={{ marginBottom: '1rem' }}
      >
        Back
      </Button>
      {/* Render the project title */}
      <Typography variant="h4" component="h2" gutterBottom>
        {project.title}
      </Typography>
      {/* Conditionally render the project URL if it exists */}
      {project.url ? (
        <Typography variant="body2" gutterBottom>
          <strong>URL:</strong>{' '}
          <Link href={project.url} target="_blank" rel="noopener">
            {project.url}
          </Link>
        </Typography>
      ) : null}
      {/* Render the project description */}
      <Typography variant="body1" gutterBottom>
        {project.description}
      </Typography>
      {/* Conditionally render a List component if the project has a list */}
      {(project.list && project.list.length > 0) ? (
        <List sx={{ marginTop: '-0.5rem' }}>
          {/* Map over the project list and render each item in a ListItem */}
          {project.list.map((item, index) => (
            <ListItem key={index}>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      ) : null}
    </Box>
  );
};

// Export the ProjectDetail component as the default export
export default ProjectDetail;
