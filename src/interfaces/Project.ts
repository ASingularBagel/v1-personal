export default interface Project {
    name: string; 
    description: string; 
    imageUrl: string; 
    githubUrl?: string;
    demoUrl?: string;
    technologies: string | string[];
    status: string; 
    startDate: string; 
    endDate: string; 
}