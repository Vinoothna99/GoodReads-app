
import {Link, Navigate} from "react-router-dom";
import "./index.css";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {registerThunk} from "../login/user-thunks";

const RegisterComponent = () => {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();
    const [role, setRole] = useState('READER');
    const dispatch = useDispatch();
    const {currentUser, error} = useSelector((state) => state.users);
    // TODO: Add role selection for

    if (currentUser) {
        return (<Navigate to={'/profile'}/>)
    }

    const validFields = () => {
        return true // TODO: Validate fields so the only error possible is duplicate username
    }

    const registerUser = () => {
        if (validFields()) {
            dispatch(registerThunk({firstName, lastName, username, password, phone, email,role}));
        }
    }

    return (
        <div>
            <a href="/home" className="wd-corner-logo">
                <h2 className="wd-register-header mb-3">Athenaeum</h2>
            </a>
            <a href="/login">
                <h5>
                    <i className="fa-solid fa-arrow-left me-2"></i>
                    Back to Login
                </h5>
            </a>
            <div className="wd-register-header mt-2" align="center">
                <h1>Create your Athenaeum Account</h1>
            </div>
            <div align="center">
                {error && <div>{error}</div>}
                {/*TODO: add css*/}
                <label htmlFor="firstName" className="form-label mt-3">First Name</label>
                <input type="text" className="form-control w-25" id="firstName" placeholder="Enter your first name"
                       onChange={(e) => setFirstName(e.target.value)}></input>
                <label htmlFor="lastName" className="form-label mt-3">Last Name</label>
                <input type="text" className="form-control w-25" id="lastName" placeholder="Enter your last name"
                       onChange={(e) => setLastName(e.target.value)}></input>
                <label htmlFor="username" className="form-label mt-3">Username</label>
                <input type="text" className="form-control w-25" id="username" placeholder="Enter your username"
                       onChange={(e) => setUsername(e.target.value)}></input>
                <label htmlFor="password" className="form-label mt-3">Password</label>
                {/*TODO: Change so password is hidden while typing*/}
                <input type="text" className="form-control w-25" id="password" placeholder="Enter your password"
                       onChange={(e) => setPassword(e.target.value)}></input>
                <label htmlFor="phone" className="form-label mt-3">Phone</label>
                <input type="text" className="form-control w-25" id="phone" placeholder="Enter your phone number"
                       onChange={(e) => setPhone(e.target.value)}></input>
                <label htmlFor="email" className="form-label mt-3">Email</label>
                <input type="text" className="form-control w-25 mb-5" id="email" placeholder="Enter your email"
                       onChange={(e) => setEmail(e.target.value)}></input>
                <p>Register as:</p>
                <select defaultValue={"READER"} onChange={event => setRole(event.target.value)}>
                    <option value="AUTHOR">AUTHOR</option>
                    <option value="MODERATOR">MODERATOR</option>
                    <option value="READER">READER</option>
                </select>
                {/* if filled out correctly - created user and goes to logged-in home page */}
                {/* If not filled out correctly - error message to user and stay on register page, don't create user */}
                {/* Change back to /home after testing*/}
                <br/><br/>
                <Link to="/register" className="wd-register-button mt-5" onClick={registerUser}>Register</Link>
                <br/><br/>
            </div>
        </div>
    )
}

export default RegisterComponent;
