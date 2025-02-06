import React from 'react';

interface ProjectCardProps {
    image: string;
    title: string;
    description: string;
    gh_link: string;
    stack: string;
    index: number;
  }

const ProjectCard: React.FC<ProjectCardProps> = ({image, title, description, gh_link, stack, index}) => {
    if (index % 2 == 0) {
        return (
            <div className='w-88 bg-[#363636] rounded-3xl overflow-hidden shadow-md shadow-gray-300 hover:shadow-sm'>
                <div className='m-1 rounded-3xl overflow-hidden'>
                    <img src={image} alt={title} />
                </div>
                <div className='text-[#CCCCCC]'>
                    <div className='m-6'>
                        <h1 className='font-extrabold text-3xl pb-5'>{title}</h1>
                        <div className='whitespace-pre-wrap text-lg break-all'>
                            <p>{description}</p>
                        </div>
                        <div className='mt-3'>
                            <span className='text-[16px]'>Tech stack: </span> <span className='text-sm font-light'>{stack}</span>
                        </div>
                        <div className='mt-3'>

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