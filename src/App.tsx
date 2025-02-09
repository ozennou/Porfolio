import Footer from './components/Footer';
import Header from './components/Header'
import Icons from './components/Icons'
import ProjectCard from './components/ProjectCard'
import Typewriter from 'typewriter-effect';
// import ReactLoading from 'react-loading';
import { useState, useEffect } from 'react';

const projects = [
  {
    image: "/projects/code-guard.png",
    title: "Code-Guard",
    desc: '- Code-Guard is a project where I apply my skills in Infrastructure as code, Configuration management, building CI/CD pipelines and GitLab\\\
    - This project sets up a self-hosted GitLab-EE on Azure using Terraform for IaC, configures GitLab-EE and Runner with Ansible, and develops a GitHub Actions pipeline to validate, scan for security risks, and manage Terraform and Ansible tasks',
    gh_link: "https://github.com/ozennou/code-guard",
    stacks: ['Azure', 'Ansible', 'GitLab', 'GitHub actions', 'Terraform']
  },
  {
    image: "/projects/ronda.gif",
    title: "Ronda Game",
    desc: '- This project involves the development of a Moroccan card game backend using Django with WebSockets for realtime multiplayer functionality.\\\
    - The backend is deployed on Azure Kubernetes Service, and designing a CI/CD pipeline to automate the build and testing of the backend, the pipeline pushes the built Docker image to Docker Hub and triggers the deployment pipeline in a separate deployment repository.',
    gh_link: "https://github.com/ozennou/ronda-dev",
    stacks: ['React.js', 'Django', 'Kubernetes', 'Azure', 'GitHub Actions',]
  },
  {
    image: "/projects/ping-pong.gif",
    title: "Ping Pong Mania",
    desc: '- Full-stack web application where players can enjoy their time with the multiplayer Ping Pong game\\\
    - In this project, we follow the Scrum methodology, breaking the work into various user stories and estimate the effort required for each user story\\\
    - The tasks involved developing a real-time chat feature using Django WebSockets and implementing the ELK stack for centralized log management across all game components',
    gh_link: "",
    stacks: ['Django', 'Next.js', 'ELK Stack', 'Prometheus', 'Grafana']
  },
  {
    image: "/projects/diagram.png",
    title: "DevSecOps Pipeline",
    desc: '- This project focuses on automating security testing, vulnerability scanning, code quality checks, and infrastructure-as-code (IaC) validation while ensuring continuous delivery with a strong emphasis on security-first practices\\\
    - This project aims to integrate security early in the CI/CD pipeline (Shift-Left Security), automate security testing for applications and infrastructure, and provide hands-on experience with modern DevSecOps tools and practices',
    gh_link: "https://gitlab.com/amineozennou/devsecops-pipeline",
    stacks: ['Azure', 'GitLab', 'Snyk', 'Terraform', 'Trivy', 'Terrascan']
  },
  {
    image: "/projects/orchestrator.png",
    title: "Orchestrator",
    desc: '- Orchestrate a microservices architecture using Kubernetes build on top of K3S cluster, it includes a variety of services, such as databases, servers, and an API gateway, the application images for this project are derived from another project "CRUD-master-py".\\\
    - Through this project, I have gained a thorough understanding of Kubernetes resources, including StatefulSets, services, deployments, Horizontal Pod Autoscalers (HPA), Persistent Volumes (PV), Persistent Volume Claims (PVC), and secrets.',
    gh_link: "https://github.com/ozennou/Orchestrator",
    stacks: ['RabbitMq', 'Flask', 'ArgoCD', 'Kubernetes', 'PostgreSQL']
  },
  {
    image: "/projects/webserv.jpeg",
    title: "WebServ",
    desc: '- Implemented a C++98 compatible HTTP web server from scratch, handles methods like POST, GET, and DELETE, and can serve content based on a specific configuration from a conf file. It delivers static files and dynamic files using CGI and handles multiple client connections concurrently using I/O multiplexing.\\\
    - Build a CI pipeline using GitHub Actions where we compile the server executable, and start a stress test using Siege to test the server\'s availability for multiple concurrent connections.',
    gh_link: "https://github.com/ozennou/webserv-42",
    stacks: ['C++', 'GitHub Actions', 'HTTP/1.1']
  },
];

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleMediaLoad = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    const images = document.querySelectorAll('img');
    let totalImages = images.length;
    let loadedImages = 0;

    // If no images, mark as loaded
    if (totalImages === 0) {
      handleMediaLoad();
      return;
    }

    images.forEach((image) => {
      const checkIfImageLoaded = () => {
        // If image is already loaded (cached), count it as loaded
        if (image.complete) {
          loadedImages += 1;
          if (loadedImages === totalImages) {
            handleMediaLoad();
          }
        } else {
          // Add event listener for non-cached images
          image.onload = () => {
            loadedImages += 1;
            if (loadedImages === totalImages) {
              handleMediaLoad();
            }
          };
        }
      };

      // Trigger the loading check
      checkIfImageLoaded();
    });
  }, []);

  if (isLoading) {
    return (
      <div className='w-full h-screen flex justify-center items-center'>
        {/* <ReactLoading type="balls" color="#0095ff" height={'20%'} width={'20%'} /> */}
      </div>
    )
  }

  return (
    <div className="relative min-h-screen">
      <div className="relative z-10 min-h-screen w-full  ">
        <div className="flex justify-center">
          <div className="w-full md:w-[70%]">
            <Header />
            <div className="pb-6 md:pb-20 xl:py-20">
              <div className="grid grid-cols-1 xl:grid-cols-2 place-items-center">
                <div className="w-60 h-60 md:w-90 md:h-90 rounded-full mx-auto gradient-border overflow-hidden my-10">
                  <img 
                    src="https://cdn.intra.42.fr/users/5273e140d33f263aabc0ebbd03c2fd6a/mozennou.jpg" 
                    alt="ozennou image"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <p className="font-extrabold text-sm sm:text-xl md:text-2xl xl:text-4xl">
                  Hi 👋,
                  <br />
                  My name is
                  <span className="ml-1 xl:ml-3 bg-gradient-to-r from-[#0095ff] via-[#2DC4D9] to-[#5AF2B2] text-transparent bg-clip-text">
                    OZENNOU Mohamed Amine
                  </span>
                  <br />
                  <div className="flex items-center gap-1 xl:gap-1.5">
                    I'm  <Typewriter options={{
                      strings: ['Software engineer', 'DevOps engineer', 'Backend developer'],
                      autoStart: true,
                      loop: true,
                      delay: 80,
                    }}/>
                  </div>
                </p>
              </div>
            </div>
            <div id="About">
              <div className='grid grid-cols-1 place-items-center mb-6 md:mb-16'>
                <h1 className='font-extrabold text-xl md:text-4xl py-5'>About Me</h1>
                <h1 className='font-light text-lg md:text-2xl w-[80%] md:w-2/3 leading-relaxed text-center'>
                  I am a motivated and driven student at 1337 Coding School, deeply passionate about computer science, problem-solving, and DevOps. With a strong focus on continuous learning, I aim to apply my skills to contribute to meaningful projects and evolve alongside the dynamic tech industry.
                </h1>
              </div>
            </div>
            <div id='Stack'>
              <div className='grid grid-cols-1 place-items-center'>
                <h1 className='font-extrabold text-xl md:text-4xl py-5'>My Tech Stack</h1>
                <h1 className='font-extralight text-sm md:text-4xl '> Technologies I’ve been working with recently</h1>
              </div>
              <div className='my-20'>
                <Icons />
              </div>
              <div id='Projects' className='grid grid-cols-1 place-items-center'>
                <h1 className='font-extrabold text-xl md:text-4xl py-5'>Projects</h1>
                <h1 className='font-extralight text-xl md:text-4xl'> Things I’ve built so far</h1>
              </div>
              <div className='grid grid-cols-1 place-items-center '>
                {projects.map((project, index) => (
                  <div className={`w-full flex ${index % 2 == 0 ? 'justify-start' : 'justify-end'}`}>
                    <ProjectCard image={project.image} title={project.title} desc={project.desc} gh_link={project.gh_link} stacks={project.stacks} index={index}/>
                  </div>
                ))}
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
