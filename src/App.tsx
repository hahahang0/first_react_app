import Navbar from './utilities/navbar/Navbar.tsx'
import Emp_list from './bodyContent/emp_list.tsx'
import Testinomials from './bodyContent/Testinomials.tsx'
import Footer from './utilities/footer/Footer.tsx'


const App=()=>
{
  return (
    <>
    <div className="container-flex">

     <Navbar/>
    <Emp_list/>
    <Testinomials/>
    <Footer/>
    </div>
    
    </>
  )
}

export default App;