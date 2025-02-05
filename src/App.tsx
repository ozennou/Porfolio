import { useState } from 'react'
import Header from './components/Header'
import { AnimatedBackground } from 'animated-backgrounds';
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <AnimatedBackground animationName="quantumField" 
       blendMode="screen" />
      <div className='flex justify-center backdrop-blur-lg bg-gray-900/45'>
        <div className='h-screen w-full md:w-[70%]'>
          <Header />
          <div className='py-20 '>
            <div className='grid grid-cols-1 xl:grid-cols-2 place-items-center'>
                <div className='w-60 h-60 md:w-90 md:h-90 rounded-full mx-auto gradient-border overflow-hidden my-10'>
                  <img src="/mozennou.jpeg" alt="ozennou image" />
                </div>
                <p className='font-extrabold text-sm md:text-2xl xl:text-3xl'>
                Hi 👋,
                <br />
                I’m 
                <span className="ml-3 bg-gradient-to-r from-[#E70FAA] via-pink-500 to-[#00C0FD] text-transparent bg-clip-text">
                  OZENNOU Mohamed Amine
                </span>
                <br />
                Full-Stack Developer & DevOps Engineer
                <br />
                Transforming ideas into web experiences
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
