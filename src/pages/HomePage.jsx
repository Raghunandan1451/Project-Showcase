import { Box } from '@mui/material';
import ProjectList from '../components/ProjectList';

const HomePage = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: '1rem' }}>
      <ProjectList />
    </Box>
  );
};

export default HomePage;
