import { useState } from 'react'
import Header from './components/Header'
import Icons from './components/Icons'
import ProjectCard from './components/ProjectCard'
import { AnimatedBackground } from 'animated-backgrounds';
import Typewriter from 'typewriter-effect';
// import './App.css'

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
              <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8 place-items-center my-20'>
                    <ProjectCard stack='Kubernetes, k3s, Docker, Docker registry, ArgoCD, Python, RabbitMQ, PostgreSQL, Flask' image="/projects/diagram.png" title="DevSecOps-Pipeline" description='- A learning project designed to understand how to develop a DevSecOps CI/CD
pipeline using various technologies and tools such as GitLab CI,
Snyk, Trivy, Terrascan, and more.'
                      gh_link='https://gitlab.com/amineozennou/devsecops-pipeline' index={0}  
                    />
                    <ProjectCard stack='Kubernetes, k3s, Docker, Docker registry, ArgoCD, Python, RabbitMQ, PostgreSQL, Flask' image="/projects/diagram.png" title="DevSecOps-Pipeline" description='- A learning project designed to understand how to develop a DevSecOps CI/CD
pipeline using various technologies and tools such as GitLab CI,
Snyk, Trivy, Terrascan, and more.'
                      gh_link='https://gitlab.com/amineozennou/devsecops-pipeline' index={0}  
                    />
                    <ProjectCard stack='Kubernetes, k3s, Docker, Docker registry, ArgoCD, Python, RabbitMQ, PostgreSQL, Flask' image="/projects/diagram.png" title="DevSecOps-Pipeline" description='- A learning project designed to understand how to develop a DevSecOps CI/CD
pipeline using various technologies and tools such as GitLab CI,
Snyk, Trivy, Terrascan, and more.'
                      gh_link='https://gitlab.com/amineozennou/devsecops-pipeline' index={0}  
                    />
                    <ProjectCard stack='Kubernetes, k3s, Docker, Docker registry, ArgoCD, Python, RabbitMQ, PostgreSQL, Flask' image="/projects/diagram.png" title="DevSecOps-Pipeline" description='- A learning project designed to understand how to develop a DevSecOps CI/CD
pipeline using various technologies and tools such as GitLab CI,
Snyk, Trivy, Terrascan, and more.'
                      gh_link='https://gitlab.com/amineozennou/devsecops-pipeline' index={0}  
                    />
                    <ProjectCard stack='Kubernetes, k3s, Docker, Docker registry, ArgoCD, Python, RabbitMQ, PostgreSQL, Flask' image="/projects/diagram.png" title="DevSecOps-Pipeline" description='- A learning project designed to understand how to develop a DevSecOps CI/CD
pipeline using various technologies and tools such as GitLab CI,
Snyk, Trivy, Terrascan, and more.'
                      gh_link='https://gitlab.com/amineozennou/devsecops-pipeline' index={0}  
                    />
                    <ProjectCard stack='Kubernetes, k3s, Docker, Docker registry, ArgoCD, Python, RabbitMQ, PostgreSQL, Flask' image="/projects/diagram.png" title="DevSecOps-Pipeline" description='- A learning project designed to understand how to develop a DevSecOps CI/CD
pipeline using various technologies and tools such as GitLab CI,
Snyk, Trivy, Terrascan, and more.'
                      gh_link='https://gitlab.com/amineozennou/devsecops-pipeline' index={0}  
                    />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
