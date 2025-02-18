const Navbar=()=>
{
    return (
        <>
        <div className="container bg-gray-400 flex justify-between align-center px-[40px] py-[20px]">
            <div className="navbar-header">
                Navbar Header
            </div>
             <nav className="navbar-content">
                <ul className="flex gap-2">
                    <li>
                        Home
                    </li>
                     <li>
                        Contact
                    </li>
                     <li>
                        About Us
                    </li>
                </ul>
             </nav>
        </div>
        </>
    )
}


export default Navbar