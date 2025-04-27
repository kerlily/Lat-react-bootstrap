import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './shared/Home/home'
import Contact from './shared/pages/contact'
import Team from './shared/pages/team'
import Navbar from './shared/Header/navbar'
function App() {
  return(
    <Router>
    <>

      <div className="container">
   
      <Navbar />
    {/* Routes   */}
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
    </Routes>
   

  {/* footer */}
  <div className="container">
  <footer className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item"><Link to="/" className="nav-link px-2 text-body-secondary">Home</Link></li>
      <li className="nav-item"><Link to="/team" className="nav-link px-2 text-body-secondary">Team</Link></li>
      <li className="nav-item"><Link to="/contact" className="nav-link px-2 text-body-secondary">Contact</Link></li>
    </ul>
    <p className="text-center text-body-secondary">© 2025 Muhammad Farhan, Inc</p>
  </footer>
</div>
  </div>  
    </>
  </Router>
  )
}



export default App
