import {useDispatch, useSelector} from "react-redux";
import SearchBarComponent from "../search";
import "./index.css";
import {Link} from "react-router-dom";
import {useEffect} from "react";
import {getReviewsByUserIDThunk} from "../details/review-thunks";
import {getFollowersByUserIDThunk, getFollowingByUserIDThunk} from "./follows-thunks";
import {logoutThunk, updateProfileThunk} from '../login/user-thunks';
import {updateUserInfo} from '../login/user-reducer';

const ProfileComponent = () => {
    const dispatch = useDispatch();
    const {currentUser} = useSelector((state) => state.users);
    const {followers, following} = useSelector((state) => state.follows);
    const {user_reviews} = useSelector((state) => state.reviews);
    useEffect(() => {
        dispatch(getReviewsByUserIDThunk(currentUser._id));
        dispatch(getFollowersByUserIDThunk(currentUser._id));
        dispatch(getFollowingByUserIDThunk(currentUser._id));
        // dispatch(getFollowersByUserIDThunk(currentUser._id));
    }, []);

    function changeInput(ev) {
        // console.log(updateUserInfo)
        dispatch(updateUserInfo({
            ...currentUser,
            [ev.target.name]: ev.target.value
        }))
    }

    function submitProfile() {
        dispatch(updateProfileThunk(currentUser))
    }
    return (
        <>
        <Header />
        <div className="wd-profile-page">
            <div className="col-auto ms-4" align="center">
                <h2 className="wd-profile-header">Your Athenaeum Profile</h2>
                {/*Example list to show current user fields*/}
                {currentUser &&
                <div>
                    <label htmlFor="firstName" className="form-label mt-3 ">Your First Name:</label>
                    <input onChange={changeInput} name="firstName" type="text" className="form-control w-auto" id="firstName" value={currentUser.firstName}></input>
                    <br/>
                    <label htmlFor="lastName" className="form-label mt-3 ">Your Last Name:</label>
                    <input onChange={changeInput} name="lastName"  type="text" className="form-control w-auto" id="lastName" value={currentUser.lastName}></input>
                    <br/>
                    <label htmlFor="username" className="form-label mt-3 ">Your Username:</label>
                    <input onChange={changeInput} name="username" type="text" className="form-control w-auto" id="username" value={currentUser.username}></input>
                    <br/>
                    {/*<label htmlFor="password" className="form-label mt-3 ">Your Password:</label>*/}
                    {/*<input onChange={changeInput} name="password" type="text" className="form-control w-auto" id="password" value={currentUser.password}></input>*/}
                    {/*<br/>*/}
                    <label htmlFor="phone" className="form-label mt-3 ">Your Phone:</label>
                    <input onChange={changeInput} name="phone" type="text" className="form-control w-auto" id="phone" value={currentUser.phone}></input>
                    <br/>
                    <label htmlFor="email" className="form-label mt-3 ">Your Email:</label>
                    <input onChange={changeInput} name="email" type="text" className="form-control w-auto" id="email" value={currentUser.email}></input>
                    <br/>
                    <label className="form-label mt-3 ">
                        Role:
                        <select name="role" id="" onChange={changeInput} >
                            <option value="READER" defaultChecked={currentUser.role === 'Reader'}>Reader</option>
                            <option value="AUTHOR" defaultChecked={currentUser.role === 'Author'}>Author</option>
                            <option value="MODERATOR" defaultChecked={currentUser.role === 'Moderator'}>Moderator</option>
                        </select>
                    </label>
                    <br/>
                    <br/>
                </div>}
                <button className="wd-logout-button" onClick={submitProfile}>Submit Profile Changes</button>
                <br/><br/>
                <button className="wd-logout-button" onClick={() => dispatch(logoutThunk())}>Logout</button>
                <br/><br/>

                <ul className="list-group wd-reviews-list">
                    <div>You are following:</div>
                    {following && following.map(follow => (
                        <li key={follow._id} className="list-group-item wd-profile-reviews">
                            <div>{follow.followed.username}</div>
                            <Link to={"/profile/" + follow.followed._id} className="wd-review-link">
                                View profile <i className="fa-solid fa-chevron-right"></i>
                            </Link>
                        </li>
                    ))}
                </ul>
                <br/><br/>
                <ul className="list-group wd-reviews-list">
                    <div>Your followers:</div>
                    {followers && followers.map(follow => (
                        <li key={follow._id} className="list-group-item wd-profile-reviews">
                            <div>{follow.follower.username}</div>
                            <Link to={"/profile/" + follow.follower._id} className="wd-review-link">
                                View profile <i className="fa-solid fa-chevron-right"></i>
                            </Link>
                        </li>
                    ))}
                </ul>
                <br/><br/>
                <ul className="list-group wd-reviews-list">
                    <div>Your reviews:</div><br/>
                    {user_reviews && user_reviews.slice(0, 5).map(review => (
                        <li key={review._id} className="list-group-item wd-profile-reviews">
                            <div>{review.reviewText}</div>
                            <Link to={"/details/" + review.workID} className="wd-review-link">
                                Go to review <i className="fa-solid fa-chevron-right"></i>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        </>

    )
}

function Header() {
    const {currentUser} = useSelector((state) => state.users || {});
    const dispatch = useDispatch()
    function loginOut() {
        dispatch(logoutThunk())
    }
    return <div className="row">
        <div className="col-5 d-flex justify-content-start">
            <ul className="nav nav-pills mb-2 mt-2 ms-2">
                <h2 className="nav-item" style={{marginTop:"-11px"}}>
                    <a href="/home" className="nav-link">Athenaeum</a>
                </h2>
                <li className="nav-item">
                    <a href="/home" className="nav-link ">Home</a>
                </li>
                <li className="nav-item">
                    <a href="/search" className="nav-link ">Search</a>
                </li>
                <li className="nav-item">
                    <Link to={"/profile"} style={{textDecoration: "none"}} className="nav-link active">
                        Profile
                    </Link>
                </li>

            </ul>
        </div>
        <div className="col-5 mt-1 wd-searchbar" align="center">
            <SearchBarComponent/>
        </div>
        <div className="col-2">
            <ul className="nav nav-pills mb-2 mt-2 ms-5">
                <li className="nav-item">
                    <a href="/home" className="nav-link" onClick={() => dispatch(logoutThunk())}>Logout</a>
                </li>
            </ul>
        </div>
    </div>
}
export default ProfileComponent;
