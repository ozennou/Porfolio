import React from 'react';

interface ProjectCardProps {
    image: string;
    title: string;
    description: string;
    gh_link: string;
    index: number;
  }

const ProjectCard: React.FC<ProjectCardProps> = ({image, title, description, gh_link, index}) => {
    if (index % 2 == 0) {
        return (
            <div className='w-60 sm:w-70 lg:w-96 bg-gray-50/60 rounded-4xl overflow-hidden '>
                <div className='m-1 rounded-3xl overflow-hidden'>
                    <img src={image} alt={title} />
                </div>
                <div className='text-black '>
                    <div className='m-10'>
                        <h1 className='font-extrabold text-3xl'>{title}</h1>
                        <div className='whitespace-pre-wrap break-all'>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div>

        </div>
    )
} 


export default ProjectCard;