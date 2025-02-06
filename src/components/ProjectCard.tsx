import React from 'react';

interface ProjectCardProps {
    image: string;
    title: string;
    desc: string;
    gh_link: string;
    index: number;
    stacks: string[];
  }

const ProjectCard: React.FC<ProjectCardProps> = ({image, title, desc, gh_link, stacks, index}) => {
    console.log(gh_link); 
    // if (index % 2 == 0) {
        return (
            <div className='gradient-border2 m-8 xl:flex justify-center w-280'>
                <div className='w-full'>
                    <div className='relative mx-5 -mt-10 shadow-amber-50 shadow-sm'>
                        <img src={image} alt={title}/>
                    </div>
                    <div className='flex flex-wrap justify-self-stretch my-6 ml-5 overflow-hidden'>
                        {stacks.map((stack, index) => (
                            <div key={index} className='bg-[#191919] rounded-2xl mx-2 my-1'>
                                <p className='py-2 px-4 text-xs xl:text-sm'>{stack}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className='mx-6 xl:m-6 flex-grow'>
                        <h1 className='font-extrabold text-3xl pb-5'>{title}</h1>
                        <div className='whitespace-pre-wrap text-lg break-all'>
                            <p>{desc}</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-end justify-end '>
                        <a className='flex p-5' href={gh_link}>
                            <img src="/assets/github2.svg" alt="github icon" />
                            <p className='text-sm mx-2 font-light underline'>View Code</p>
                        </a>
                    </div>
                </div>
            </div>
        )
    // }
}


export default ProjectCard;