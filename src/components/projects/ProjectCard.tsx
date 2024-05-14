import dayjs from 'dayjs'; 
import relativeTime from 'dayjs/plugin/relativeTime'

// Interfaces 
import Project from '@interfaces/Project'
import { Link } from 'react-router-dom';

const ProjectCard = ({ project } : { project: Project }) => {
dayjs.extend(relativeTime)
// data type happens not to be the same for redis and mongo 
// array vs string concatenation
    let githubUrls;
    if (project.githubUrl) {
        githubUrls = typeof project.githubUrl === 'string' ? project.githubUrl.split(',') : project.githubUrl;
    }

    let technologies;
    if (project.technologies) {
        technologies = typeof project.technologies === 'string' ? JSON.parse(project.technologies) : project.technologies;
    }
  return (
    <div className='border-2 rounded-lg p-8 mb-10'>
        <div className='flex flex-col'>
            <div className='text-3xl text-center'>
                {project.name}
            </div>
            <div className='mt-10 pb-4 text-center border-b-2'>
                {project.description}
            </div>
            <div className='lg:grid lg:grid-flow-col md:flex md:flex-col mt-4'>
                <div className='lg:col-span-1 text-xxl'>
                    <div className='mb-8'>
                        <p className='mb-2'>Made with:</p> <img src={`https://skillicons.dev/icons?i=${
                        (technologies as Array<string>)
                        .map((tech) => tech.toLowerCase())
                        }`} />
                    </div>
                    <div className='mb-8'>
                        <p>Deployment:</p> <Link to={project?.demoUrl as string} target='_blank'>{project.demoUrl}</Link>
                    </div>
                    <div className='mb-4 flex flex-col'>
                        <p>View repositories:</p>
                        {githubUrls && githubUrls[0] && <Link to={githubUrls[0]} style={{ textDecoration: 'underline'}} target='_blank'>Frontend</Link>}
                        {githubUrls && githubUrls[1] && <Link to={githubUrls[1]} style={{ textDecoration: 'underline', marginBottom: '2rem'}} target='_blank'>Backend</Link>}
                    </div>
                </div>
                <div className='lg:col-span-1'>
                    <p className=''>Status: {project.status}</p> 
                    <p className=''>Start date: {dayjs(project.startDate).format('MM/YYYY')}</p> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard