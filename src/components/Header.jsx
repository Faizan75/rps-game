import { Link, NavLink } from "react-router-dom"


function Header(){
  return <>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
   <div className="container d-flex justify-content-center">
    <NavLink to="/" style={({ isActive }) => ({ color: isActive ? 'cyan' : 'white' ,textDecoration:'none',marginRight:'20px'})}>Home</NavLink>
    <NavLink  to="/rule"  style={({ isActive }) => ({ color: isActive ? 'cyan' : 'white',textDecoration:'none',marginRight:'20px' })}>Rule</NavLink> 
    <NavLink  to="/more-games"  style={({ isActive }) => ({ color: isActive ? 'cyan' : 'white',textDecoration:'none'  })}>More Games</NavLink>
  </div>
  </nav>
  </>
}
  export default Header