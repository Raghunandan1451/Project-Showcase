import { Grid } from '@mui/material'; // Importing Grid from Material UI
import ProjectCard from './ProjectCard'; // Importing ProjectCard component

import projects from '../data/projects'; // Importing projects data from data directory

/**
 * ProjectList component renders a grid of ProjectCard components.
 * It maps over the projects array and creates a ProjectCard component for each project.
 * Each ProjectCard component receives the project object as a prop.
 * The Grid component from Material UI is used to create a responsive grid layout.
 * The Grid component is wrapped in a container with a spacing of 2.
 * The sx prop is used to apply a display: flex style to each grid item.
 */
const ProjectList = () => {
  return (
    <Grid container spacing={2}>
      {projects.map((project) => (
        <Grid item xs={12} sm={6} md={4} key={project.id} sx={{display: 'flex'}}>
          <ProjectCard project={project} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProjectList; // Exporting ProjectList component as default

