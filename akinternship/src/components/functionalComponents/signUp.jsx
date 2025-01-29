import { Link } from "react-router-dom"
import "../../css/signUp.css"
const Signup=()=>{
    return (
    
        <div className="signup">
            <form>
                <div className="input">
                    <label htmlFor="Name">Name</label>
                    <input type="text" name="Name" placeholder="Enter your name" required/>
                </div>
                <div className="input">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" placeholder="Enter your email" required/>
                </div>
                <div className="input">
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" placeholder="Enter your password" required/>
                </div>
                <Link to='/home' className="btn">Submit</Link>
                <Link to='/home' className="btn">Submit</Link>
                <button>submit</button>
                <Link to='/home' className="btn" >Submit</Link>
                <Link to='/login' className="btn">Login?</Link>
            </form>
        </div>
        
    )
}

export default Signup