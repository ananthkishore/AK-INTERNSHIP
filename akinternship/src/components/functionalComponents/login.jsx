import { Link } from "react-router-dom"
import "../../css/signUp.css"
const Login=()=>{
    return (
    
        <div className="Signup">
            <form method="post" action="http://localhost:3001/login">
                <div className="input">
                    <label htmlFor="email">Email</label>
                    <input type="Text" name="email" placeholder="enter your email" required/>
                </div>
                <div className="input">
                    <label htmlFor="Password">Password</label>
                    <input type="Text" name="Password" placeholder="Enter your password" required/>
                </div>
                <button>login</button>
                <Link to='/home' className="btn">Login</Link>
            </form>
        </div>
        
    )
}

export default Login