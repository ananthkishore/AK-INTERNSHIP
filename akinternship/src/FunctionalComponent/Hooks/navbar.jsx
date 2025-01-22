import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import { useState } from 'react';
import "../Gallery"

const navbar_day8=()=>{
    // var styling={
    //      color:"black"
    // }

    var [dropdown,ShowDropdown]=useState(false);
    return(
        <header>
            <nav>
            {/* <ol style={{textDecoration:"none"}}> */}
            {/* <ol style={styling}> */}
            <ol>
                <li> <Link to='/navbar' className='link'> Home</Link></li>
                <li><Link  to='/about' className='link'> About</Link></li>
                <li><Link to='/gallery' className='link'>Gallery</Link></li>
                <li><Link to='' className='link'>Contact</Link></li>
                <li><Link to='/use-effect-api' className="link">use-effect-api</Link></li>
                <div>
                    <span onMouseEnter={()=>{ShowDropdown(true)}} >HOOKS</span> 
                    {dropdown && <ul onMouseLeave={()=>{ShowDropdown(false)}}>
                        <li><Link to={'/usestate'} target='_blank'>UseState</Link></li>
                        <li><Link>UseEffect</Link></li>
                    </ul>}
                    <li><Link to='/' className="link" >SignUp</Link></li>
                </div>
                <li><Link to='/login' className='link'>Login</Link></li>
            </ol>
            </nav>
        </header>
    )
}
export default navbar_day8;