

export default function Header() {
    return (
        <div className="p-4 flex justify-between items-center">
            <div className="w-1/2 ">
                <h1 className="font-extrabold text-2xl">Ozennou</h1>
            </div>
            <div className="flex justify-around w-1/2 font-bold">
                <div className="hidden justify-around w-full xl:flex">
                    <h1>About</h1>
                    <h1>Tech Stack</h1>
                    <h1>Projects</h1>
                    <h1>Contact</h1>
                </div>
                <div className="flex justify-end xl:justify-around w-full xl:w-1/6">
                    <a href="https://github.com/ozennou">
                        <img src="/assets/github.svg" className="px-4" alt=""/>
                    </a>
                    <a href="https://www.linkedin.com/in/ozennou/">
                        <img src="/assets/linkedin.svg" className="px-4" alt="" />
                    </a>
                </div>
            </div>
        </div>
    )
}