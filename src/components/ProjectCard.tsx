import React, { useState, useEffect } from 'react';

interface ProjectCardProps {
    image: string;
    title: string;
    desc: string;
    gh_link: string;
    index: number;
    stacks: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({image, title, desc, gh_link, stacks, index}) => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsSmallScreen(window.innerWidth < 1280); 
        };
        checkScreenSize();

        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const formattedDesc = desc
    .split('\\')
    .map(line => line.trim())
    .join('\n');

    if (index % 2 === 0 || isSmallScreen) {
        return (
            <div className='gradient-border2 mt-30 mx-5 xl:flex justify-center w-280 '>
                <div className='w-full xl:w-3/4 2xl:w-full'>
                    <div className='relative mx-5 -mt-10 '>
                        <img src={image} alt={title} className="w-full h-auto md:hover:scale-102 md:hover:brightness-120 transition-all duration-300 ease-in-out shadow-amber-50 shadow-sm"/>
                    </div>
                    <div className='flex flex-wrap 2xl:flex-nowrap justify-self-stretch my-6 ml-5 overflow-hidden'>
                        {stacks.map((stack, index) => (
                            <div key={index} className='bg-[#191919] rounded-2xl mx-2 my-1'>
                                <p className='py-2 px-4 text-xs'>{stack}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex flex-col w-full'>
                    <div className={`${gh_link == '' ? 'mb-10': ''} mx-6 mb-2 xl:mt-6 flex-grow`}>
                        <h1 className='font-extrabold text-3xl pb-5'>{title}</h1>
                        <div className='whitespace-pre-wrap text-lg break-words'>
                            <p>{formattedDesc}</p>
                        </div>
                    </div>
                    {
                        gh_link != '' &&
                        <div className='flex flex-col items-end'>
                            <a 
                                className='flex justify-center items-center pb-8 pr-6 cursor-pointer z-20 md:hover:opacity-80 transition-opacity duration-200' 
                                target="_blank" 
                                rel="noopener noreferrer"
                                href={gh_link}
                            >
                                <img src="/assets/github2.svg" alt="github icon" className="w-8 h-8" />
                                <p className='text-sm mx-2 font-light underline md:hover:text-blue-400'>View Code</p>
                            </a>
                        </div>
                    }
                </div>
            </div>
        );
    }


    return (
        <div className='gradient-border2 mt-30 mx-5 xl:flex justify-center w-280 '>
            <div className='flex flex-col w-full'>
                <div className={`${gh_link == '' ? 'mb-10': ''} mx-6 mb-2 xl:mt-6 flex-grow`}>
                    <h1 className='font-extrabold text-3xl pb-5'>{title}</h1>
                    <div className='whitespace-pre-wrap text-lg break-words'>
                        <p>{formattedDesc}</p>
                    </div>
                </div>
                {
                    gh_link != '' &&
                    <div className='flex flex-col items-start'>
                        <a 
                            className='flex justify-center items-center pb-8 pl-6 cursor-pointer z-20 md:hover:opacity-80 transition-opacity duration-200' 
                            target="_blank" 
                            rel="noopener noreferrer"
                            href={gh_link}
                        >
                            <img src="/assets/github2.svg" alt="github icon" className="w-8 h-8" />
                            <p className='text-sm mx-2 font-light underline md:hover:text-blue-400'>View Code</p>
                        </a>
                    </div>
                }
            </div>
            <div className='w-full xl:w-3/4 2xl:w-full'>
                <div className='relative mx-5 -mt-10 '>
                    <img src={image} alt={title} className="w-full h-auto md:hover:scale-102 md:hover:brightness-120 transition-all duration-300 ease-in-out shadow-amber-50 shadow-sm"/>
                </div>
                <div className='flex flex-wrap 2xl:flex-nowrap justify-self-stretch my-6 ml-5 overflow-hidden'>
                    {stacks.map((stack, index) => (
                        <div key={index} className='bg-[#191919] rounded-2xl mx-2 my-1'>
                            <p className='py-2 px-4 text-xs'>{stack}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;