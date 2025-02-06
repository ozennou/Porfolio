import { useState } from 'react'
import Header from './components/Header'
import Icons from './components/Icons'
import ProjectCard from './components/ProjectCard'
import { AnimatedBackground } from 'animated-backgrounds';
import Typewriter from 'typewriter-effect';
// import './App.css'

const projects = [
  {
    image: "/projects/diagram.png",
    title: "DevSecOps-Pipeline",
    desc: '- A learning project designed to understand how to develop a DevSecOps CI/CD pipeline using various technologies and tools such as GitLab CI, Snyk, Trivy, Terrascan, and more.',
    gh_link: "https://gitlab.com/amineozennou/devsecops-pipeline",
    stacks: ['Kubernetes', 'k3s', 'Docker', 'ArgoCD', 'Python', 'RabbitMQ']
  },
  {
    image: "/projects/diagram.png",
    title: "Microservices Architecture",
    desc: '- A project to design and implement a microservices architecture using Spring Boot, Docker, and Kubernetes.',
    gh_link: "https://gitlab.com/amineozennou/microservices-architecture",
    stacks: ['Spring Boot', 'Docker', 'Kubernetes', 'MySQL']
  },
  {
    image: "/projects/diagram.png",
    title: "Data Analysis with Python",
    desc: '- A project that focuses on data cleaning, exploration, and visualization using Python libraries like Pandas and Matplotlib.',
    gh_link: "https://gitlab.com/amineozennou/data-analysis-python",
    stacks: ['Python', 'Pandas', 'Matplotlib', 'Jupyter']
  },
  // You can add more project objects here
];

function App() {
  return (
    <div className="relative min-h-screen">
      {/* <AnimatedBackground 
        animationName="quantumField" 
        blendMode="screen" 
      /> */}
      <div className="relative z-10 min-h-screen w-full  ">
        <div className="flex justify-center">
          <div className="w-full md:w-[70%]  ">
            <Header />
            <div className="py-20">
              <div className="grid grid-cols-1 xl:grid-cols-2 place-items-center">
                <div className="w-60 h-60 md:w-90 md:h-90 rounded-full mx-auto gradient-border overflow-hidden my-10">
                  <img 
                    src="/mozennou.jpeg" 
                    alt="ozennou image"
                    className="w-full h-full object-cover" 
                  />
                </div>
                <p className="font-extrabold text-sm md:text-2xl xl:text-4xl">
                  Hi 👋,
                  <br />
                  My name is
                  <span className="xl:ml-3 bg-gradient-to-r from-[#E70FAA] via-pink-500 to-[#00C0FD] text-transparent bg-clip-text">
                    OZENNOU Mohamed Amine
                  </span>
                  <br />
                  <div className="flex items-center gap-1">
                    I'm <Typewriter options={{
                      strings: [' Software engineer', ' DevOps engineer', ' Backend developer'],
                      autoStart: true,
                      loop: true,
                      delay: 80,
                    }}/>
                  </div>
                </p>
              </div>
            </div>
            <div className=''>
              <div className='grid grid-cols-1 place-items-center'>
                <h1 className='font-extrabold text-xl md:text-4xl py-5'>My Tech Stack</h1>
                <h1 className='font-extralight text-xl md:text-4xl'> Technologies I’ve been working with recently</h1>
              </div>
              <div className='my-20'>
                <Icons />
              </div>
              <div className='grid grid-cols-1 place-items-center'>
                <h1 className='font-extrabold text-xl md:text-4xl py-5'>Projects</h1>
                <h1 className='font-extralight text-xl md:text-4xl'> Things I’ve built so far</h1>
              </div>
              <div className='grid grid-cols-1 place-items-center my-20'>
                {projects.map((project, index) => (
                  <div className={`w-full flex ${index % 2 == 0 ? 'justify-start' : 'justify-end'}`}>
                    <ProjectCard image={project.image} title={project.title} desc={project.desc} gh_link={project.gh_link} stacks={project.stacks} index={index}/>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
