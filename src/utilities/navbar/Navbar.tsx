const Navbar=()=>
{
    return (
        <>
        <div className="container-flex bg-gray-200 flex justify-between align-center px-[40px] py-[20px] ">
            <div className="navbar-header hover:cursor-pointer">
                EMS
            </div>
            
             <nav className="navbar-content ">
                <ul className="flex gap-2 items-center ">
                    <li className="hover:cursor-pointer hover:underline underline-offset-4">
                        Home
                    </li>
                     <li className="hover:cursor-pointer hover:underline underline-offset-4"> 
                        Contact
                    </li>
                     <li className="hover:cursor-pointer hover:underline underline-offset-4">
                        About Us
                    </li>
                    <div className="bg-amber-400 border-1 rounded-full p-1 hover:hover:cursor-pointer">
                S.H
             </div>
                </ul>
                
             </nav>
             
          
        </div>
        </>
    )
}


export default Navbar