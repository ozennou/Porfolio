

export default function Footer() {
    return (
        <div className="w-full border-t-2 mt-10 m-2 p-4 border-[#d6d2d24e] lg:flex justify-between">
            <div>
                <img src="/logo.png" alt="logo" width={150}/>
            </div>
            <div className="lg:flex justify-between font-light">
                <a href="tel:+212634178802" className="underline hover:text-blue-300 m-2 pr-3 flex justify-end">
                    <p>+212634178802</p>
                </a>
                <a href="mailto:mohamedamineozenou@gmail.com" className="underline hover:text-blue-300 m-2 pr-3 flex justify-end">
                    <p>mohamedamineozenou@gmail.com</p>
                </a>
                <div className="flex justify-end  w-full my-4 lg:my-0">
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