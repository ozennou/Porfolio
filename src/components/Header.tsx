

export default function Header() {
    return (
        <div className="p-4 flex justify-between items-center">
            <div className="w-1/2 xl:w-1/3 ">
                <img src="/logo.png" alt="logo" width={200}/>
            </div>
            <div className="flex w-1/2 xl:w-2/3 font-bold">
                <div className="hidden justify-end w-5/6 xl:flex">
                    <h1 className="px-5 hover:scale-125 hover:brightness-110 transition-all duration-300 ease-in-out">About</h1>
                    <h1 className="px-5 hover:scale-125 hover:brightness-110 transition-all duration-300 ease-in-out">Tech Stack</h1>
                    <h1 className="px-5 hover:scale-125 hover:brightness-110 transition-all duration-300 ease-in-out">Projects</h1>
                    <h1 className="px-5 hover:scale-125 hover:brightness-110 transition-all duration-300 ease-in-out">Contact</h1>
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