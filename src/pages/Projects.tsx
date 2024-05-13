import { useEffect } from 'react';
import {motion} from 'framer-motion'

// Components
import Content from '@components/Content';
import Sidebar from '@components/Sidebar';
import ProjectCard from '@components/projects/ProjectCard';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { setLocation } from '@redux/features/location/locationSlice';
import { setBgColor } from '@redux/features/theme/themeSlice';
import { RootState } from '@redux/store';
import { fetchProjectsRedis } from '@redux/features/projects/projectSlice';

const Projects = () => {

  const dispatch = useDispatch();
  const projects = useSelector((state : RootState) => state.project.projects);
  const loading = useSelector((state : RootState) => state.project.loading)
  
  useEffect(() => {
    document.title = "Projects @ Christian";

    dispatch(setLocation('/projects'));
    dispatch(setBgColor('stone-950'));
    dispatch(fetchProjectsRedis());

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [dispatch])
  return (
    <>
        <Sidebar />
        <Content 
        children = {
          <>
            <motion.div 
            children = 
            {
              <>
              { loading  ? (
                <>
                  <div>
                    <p>Loading...</p>
                  </div>
                </>
              ): (
                <>
                {projects?.data?.map((project, index) => (
                  <div key={index}>
                    <ProjectCard project={project} />
                  </div>
                ))}
                </>
              )}
              </>
            }
            />
          </>
        }
        /> 
    </>
  )
}

export default Projects