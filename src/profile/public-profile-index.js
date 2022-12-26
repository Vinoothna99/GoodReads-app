import {useDispatch, useSelector} from "react-redux";
import SearchBarComponent from "../search";
import "./index.css";
import {Link} from "react-router-dom";
import {logoutThunk, publicProfileThunk} from "../login/user-thunks";

import {useLocation, useParams} from "react-router";
import {useEffect} from "react";
import {followUserThunk} from "./follows-thunks";

const PublicProfileComponent = () => {
  const {pathname} = useLocation()
  const param = pathname.split('/')
  const uid = param[param.length-1]
  const {publicProfile, currentUser} = useSelector((state) => state.users)
  const dispatch = useDispatch()

  const makeFollow = () => {
    if (currentUser._id !== uid) {
      dispatch(followUserThunk({followed: uid}));
    }
  }

  useEffect(() => {
    dispatch(publicProfileThunk(uid))
    console.log(uid,"\n",publicProfile);
  }, [uid])
  return (
      <div className="wd-profile-page">
        <div className="row">
          <div className="col-6">
            <ul className="nav nav-pills mb-2 mt-2 ms-2">
              <h2 className="nav-item" style={{marginTop:"-11px"}}>
                <a href="/home" className="nav-link">Athenaeum</a>
              </h2>
              <li className="nav-item nav-link">
                <Link to={"/home"} style={{textDecoration: 'none'}}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a href="/search" className="nav-link ">Search</a>
              </li>
              <li className="nav-item">
                <a href="/profile" className="nav-link">Profile</a>
              </li>

            </ul>
          </div>
          <div className="col-5 mt-1 wd-searchbar" align="center">
            <SearchBarComponent/>
          </div>
          <div className="col-2">
            <ul className="nav nav-pills mb-2 mt-2 ms-3">
              <li className="nav-item">
                <a href="/home" className="nav-link" onClick={() => dispatch(logoutThunk())}>Logout</a>
              </li>
            </ul>
          </div>
        </div>

        { publicProfile &&
          <div className="col-auto ms-4" align="center">
            <h2 className="wd-profile-header">{publicProfile.username}'s
              Profile</h2>
            {/*Example list to show current user fields*/}
            {publicProfile &&
                <div>
                  <label htmlFor="firstName" className="form-label mt-3 ">First
                    Name:</label>
                  <input type="text" className="form-control w-auto"
                         id="firstName" value={publicProfile.firstName}></input>
                  <br/>
                  <label htmlFor="lastName" className="form-label mt-3 ">Last
                    Name:</label>
                  <input type="text" className="form-control w-auto"
                         id="lastName" value={publicProfile.lastName}></input>
                  <br/>
                  <label htmlFor="username"
                         className="form-label mt-3 ">Username:</label>
                  <input type="text" className="form-control w-auto"
                         id="username" value={publicProfile.username}></input>
                  <br/>
                  <br/>
                </div>}

            <div>Follow this user to stay up to date on the latest reviews</div>
            <br/>
            {currentUser &&
                <button className="wd-logout-button" onClick={makeFollow}>Follow</button>
            }
            <br/><br/>
            <button className="wd-logout-button"
                    onClick={() => dispatch(logoutThunk())}>Logout
            </button>
            <br/><br/>
          </div>
        }
      </div>
  )
}
export default PublicProfileComponent;