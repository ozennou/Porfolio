import { useState, useEffect } from 'react';


export default function Header() {
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [click, setClick] = useState(false)
    const [rotationDegree, setRotationDegree] = useState(0);
    const [exitAnimation, setExitAnimation] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsSmallScreen(window.innerWidth < 1280); 
        };
        checkScreenSize();

        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const handleClick = () => {
        if (rotationDegree == 0) {
            setRotationDegree(-90);
        }
        else {
            setRotationDegree(0);
        }
        if (click) {
            setExitAnimation(true);
            setTimeout(() => setClick(false), 500); // Wait for slideOut animation to finish before hiding
          } else {
            setClick(true);
            setExitAnimation(false);
          }
    }

    if (!isSmallScreen) {
        return (
            <div className="p-4 flex justify-between items-center">
                <a href="/" className='w-1/2 xl:w-1/3 '>
                        <img src="/logo.png" alt="logo" width={200}/>
                </a>
                <div className="flex w-1/2 xl:w-2/3 font-bold">
                    <div className="hidden justify-end w-5/6 xl:flex">
                        <a href="#">
                            <h1 className="px-5 hover:scale-115 hover:brightness-110 transition-all duration-300 ease-in-out p-1">About</h1>
                        </a>
                        <a href="#Stack">
                            <h1 className="px-5 hover:scale-115 hover:brightness-110 transition-all duration-300 ease-in-out p-1">Tech Stack</h1>
                        </a>
                        <a href="#Projects">
                            <h1 className="px-5 hover:scale-115 hover:brightness-110 transition-all duration-300 ease-in-out p-1">Projects</h1>
                        </a>
                        <a href="/resume.pdf" target="_blank">
                            <h1 className="px-5 hover:scale-110 hover:brightness-110 transition-all duration-300 ease-in-out gradient-border2 p-1 rounded-xl">Resume</h1>
                        </a>
                    </div>
                    <div className="flex justify-end  w-full xl:w-1/6">
                        <a href="https://github.com/ozennou">
                            <img src="/assets/github.svg" className="px-4 hover:scale-125 hover:brightness-110 transition-all duration-300 ease-in-out" alt=""/>
                        </a>
                        <a href="https://www.linkedin.com/in/ozennou/">
                            <img src="/assets/linkedin.svg" className="px-4 hover:scale-125 hover:brightness-110 transition-all duration-300 ease-in-out" alt=""/>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <>
        <div className="p-4 flex justify-between items-center">
            <div className="w-1/2 xl:w-1/3 px-4 cursor-pointer" >
                <img src="/assets/more.svg" alt="more" className='transition-transform duration-300 ease-in-out' onClick={handleClick} style={{ transform: `rotate(${rotationDegree}deg)` }} width={35}/>
            </div>
            <div className="w-1/2 xl:w-1/3 ">
                <img src="/logo.png" alt="logo" width={200}/>
            </div>
            <div className="flex w-1/2 xl:w-2/3 font-bold">
                <div className="flex justify-end  w-full xl:w-1/6">
                    <a href="https://github.com/ozennou">
                        <img src="/assets/github.svg" className="px-4 hover:scale-125 hover:brightness-110 transition-all duration-300 ease-in-out" alt=""/>
                    </a>
                    <a href="https://www.linkedin.com/in/ozennou/">
                        <img src="/assets/linkedin.svg" className="px-4 hover:scale-125 hover:brightness-110 transition-all duration-300 ease-in-out" alt=""/>
                    </a>
                </div>
            </div>
        </div>
            { click &&
                <div className={`justify-end w-40 xl:flex z-50 bg-[#363636] mx-2 absolute border-1 ${ !exitAnimation ? 'slide-animation' : 'slide-animation-exit' } p-1 rounded-2xl`}>
                    <a href="#" onClick={handleClick}>
                        <h1 className="px-5 hover:scale-115 hover:brightness-110 transition-all duration-300 ease-in-out p-1">About</h1>
                    </a>
                    <a href="#Stack" onClick={handleClick}>
                        <h1 className="px-5 hover:scale-115 hover:brightness-110 transition-all duration-300 ease-in-out p-1">Tech Stack</h1>
                    </a>
                    <a href="#Projects" onClick={handleClick}>
                        <h1 className="px-5 hover:scale-115 hover:brightness-110 transition-all duration-300 ease-in-out p-1">Projects</h1>
                    </a>
                    <a href="/resume.pdf" target="_blank" onClick={handleClick}>
                        <h1 className="px-5 hover:scale-110 hover:brightness-110 transition-all duration-300 ease-in-out gradient-border2 p-1 rounded-2xl">Resume</h1>
                    </a>
                </div>
            }
        </>
    )
}