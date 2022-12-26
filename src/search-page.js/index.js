import SearchComponent from "../search";
import "./index.css";
import {logoutThunk} from "../login/user-thunks";
import {useDispatch, useSelector} from "react-redux";


const LoggedOutSearchPageComponent = () => 

    <div className="container">
        <div className="row d-flex justify-content-between">
            <div className="col-5 d-flex justify-content-start">
                <ul className="nav nav-pills mb-2 mt-2 ms-2">
                    <h2 className="nav-item" style={{marginTop:"-11px"}}>
                        <a href="/home" className="nav-link">Athenaeum</a>
                    </h2>
                    <li className="nav-item">
                        <a href="/home" className="nav-link ">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link active">Search</a>
                    </li>
                    <li className="nav-item">
                        <a href="/profile" className="nav-link">Profile</a>
                    </li>
                </ul>
            </div>
            <div className="col-2">
                <ul className="nav nav-pills mb-2 mt-2 ms-5">
                    <li className="nav-item">
                        <a href="/login" className="nav-link">Login</a>
                    </li>
                    <li className="nav-item">
                        <a href="/register" className="nav-link">Register</a>
                    </li>
                </ul>
            </div>
        </div>
            
        <div className="mt-5 w-75 ms-5" align="center">
            <SearchComponent/>
        </div>
        
    </div>

const LoggedInSearchPageComponent = () => {
    const dispatch = useDispatch();
    const {currentUser} = useSelector((state) => state.users);
    return (
        <div className="container">
            <div className="row d-flex justify-content-between">
                <div className="col-5 d-flex justify-content-start">
                    <ul className="nav nav-pills mb-2 mt-2 ms-2">
                        <h2 className="nav-item" style={{marginTop:"-11px"}}>
                            <a href="/home" className="nav-link">Athenaeum</a>
                        </h2>
                        <li className="nav-item">
                            <a href="/home" className="nav-link ">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="/" className="nav-link active">Search</a>
                        </li>
                        <li className="nav-item">
                            <a href="/profile" className="nav-link">Profile</a>
                        </li>
                    </ul>
                </div>
                <div className="col-2">
                    <ul className="nav nav-pills mb-2 mt-2 ms-5">
                        <li className="nav-item">
                                <a href="/home" className="nav-link" onClick={() => dispatch(logoutThunk())}>Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
                
            <div className="mt-5 w-75 ms-5" align="center">
                <SearchComponent/>
            </div>
            
        </div>
    )
}

const SearchPageComponent = () => {
    const {currentUser} = useSelector((state) => state.users);
    if (currentUser) {
        return <LoggedInSearchPageComponent/>
    } else {
        return <LoggedOutSearchPageComponent/>
    }

}
export default SearchPageComponent;