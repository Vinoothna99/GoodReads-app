import SearchBarComponent from "../search";
import LogoComponent from "./logo";
import "./index.css";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {logoutThunk} from "../login/user-thunks";
import {useEffect} from "react";
import {getReviewsByUserIDThunk, getReviewsThunk} from "../details/review-thunks";
import { getPostsByUserIDThunk, getPostsThunk } from "../details/post-thunks";

// NOT logged in home screen
const LoggedOutHomeComponent = () => {
    const {currentUser} = useSelector((state) => state.users);
    const {recent_reviews} = useSelector((state) => state.reviews);
    const {recent_posts} = useSelector((state) => state.posts);
    console.log(currentUser);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getReviewsThunk());
        dispatch(getPostsThunk());
        // dispatch(getFollowersByUserIDThunk(currentUser._id));
    }, []);
    return (
        <div className="container">
            <div className="row d-flex">
                <div className="col-5 d-flex justify-content-start">
                    <ul className="nav nav-pills mb-2 mt-2">
                        <h2 className="nav-item" style={{marginTop:"-11px"}}>
                            <a href="/home" className="nav-link">Athenaeum</a>
                        </h2>
                        <li className="nav-item">
                            <a href="/home" className="nav-link active">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="/search" className="nav-link ">Search</a>
                        </li>
                        <li className="nav-item nav-link">
                            <Link to={"/profile"} style={{textDecoration: "none"}}>
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
                            <a href="/login" className="nav-link">Login</a>
                        </li>
                        <li className="nav-item">
                            <a href="/register" className="nav-link">Register</a>
                        </li>
                    </ul>
                </div>
            </div>
            <br/><br/>
            <div className="row">
                <div className="col-10" align="center">
                    <h1>Welcome to Athenaeum!</h1>
                    <br/>
                    <h2 className="wd-about-heading" align="left">About</h2>
                    <div className="wd-about-content" align="left">
                        <p>Athenaeum is an online library resource to search for books, authors, and more!
                            <br/>Easily search for works by title, author, or subject.</p>
                    </div>
                    <br/><br/>
                    <a href="/register" className="wd-homepage-link">
                        <h2 className="wd-about-heading" align="left">Create a Profile</h2>
                    </a>
                    <div className="wd-about-content" align="left">
                        <p>Create your own Athenaeum profile to create reviews, as well as customize your own favorites and searches. </p>
                    </div>
                    <br/><br/>
                    <a href="/search" className="wd-homepage-link">
                        <h2 className="wd-about-heading" align="left">Search our Library</h2>
                    </a>
                    <div className="wd-about-content" align="left">
                        <p>Search our online library for your favorite literary works!</p>
                    </div>
                    <br/>
                    <h2 className="wd-about-heading" align="left">Trending Reviews:</h2>
                    <ul className="list-group wd-reviews-list">
                        {recent_reviews && recent_reviews.slice(0, 3).map(review => (
                            <li key={review._id} className="list-group-item wd-profile-reviews">
                                <div>{review.reviewText}</div>
                                <Link to={"/details/" + review.workID} className="wd-review-link">
                                    Go to review <i className="fa-solid fa-chevron-right"></i>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <br/><br/>
                    <h2 className="wd-about-heading" align="left">Trending Discussion Posts:</h2>
                    <ul className="list-group wd-reviews-list">
                        {recent_posts && recent_posts.slice(0, 3).map(post => (
                            <li key={post._id} className="list-group-item wd-profile-reviews">
                                <div>{post.postText}</div>
                                <Link to={"/details/" + post.workID} className="wd-review-link">
                                    Go to post <i className="fa-solid fa-chevron-right"></i>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </div>
    )
}

const ReaderHomeComponent = () => {
    const {currentUser} = useSelector((state) => state.users);
    const {user_reviews} = useSelector((state) => state.reviews);
    const {recent_posts} = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getReviewsByUserIDThunk(currentUser._id));
        dispatch(getPostsThunk());
    }, []);
    console.log(currentUser);
    return (
        <div className="container">
            <div className="row">
                <div className="col-5 d-flex justify-content-start">
                    <ul className="nav nav-pills mb-2 mt-2 ms-2">
                        <h2 className="nav-item" style={{marginTop:"-11px"}}>
                            <a href="/home" className="nav-link">Athenaeum</a>
                        </h2>
                        <li className="nav-item">
                            <a href="/home" className="nav-link active">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="/search" className="nav-link ">Search</a>
                        </li>
                        <li className="nav-item nav-link">
                            <Link to={"/profile"} style={{textDecoration: "none"}}>
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
            <br/><br/>
            <div className="row">
                <div className="col-10" align="center">
                    <h1>Welcome back to Athenaeum, {currentUser.username}!</h1>
                    <br/><br/>
                    <h2 className="wd-about-heading" align="left">See Your Latest Reviews:</h2>
                    <ul className="list-group wd-reviews-list">
                        {/*Slice limits the reviews displayed*/}
                        {user_reviews && user_reviews.slice(0, 5).map(review => (
                            <li key={review._id} className="list-group-item">
                                <div>{review.reviewText}</div>
                                <Link to={"/details/" + review.workID} className="wd-review-link">
                                    Go to review <i class="fa-solid fa-chevron-right"></i>
                                </Link>   
                            </li>
                        ))}
                    </ul>
                    <br/><br/>
                    <h2 className="wd-about-heading" align="left">Trending Discussion Posts:</h2>
                    <ul className="list-group wd-reviews-list">
                        {recent_posts && recent_posts.slice(0, 3).map(post => (
                            <li key={post._id} className="list-group-item wd-profile-reviews">
                                <div>{post.postText}</div>
                                <Link to={"/details/" + post.workID} className="wd-review-link">
                                    Go to post <i className="fa-solid fa-chevron-right"></i>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </div>
    )
}

const AuthorHomeComponent = () => {
    const {currentUser} = useSelector((state) => state.users);
    const {recent_reviews} = useSelector((state) => state.reviews);
    const {user_posts} = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getReviewsThunk());
        dispatch(getPostsByUserIDThunk(currentUser._id));
    }, []);
    console.log(currentUser);
    return (
        <div className="container">
            <div className="row">
                <div className="col-5 d-flex justify-content-start">
                    <ul className="nav nav-pills mb-2 mt-2 ms-2">
                        <h2 className="nav-item" style={{marginTop:"-11px"}}>
                            <a href="/home" className="nav-link">Athenaeum</a>
                        </h2>
                        <li className="nav-item">
                            <a href="/home" className="nav-link active">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="/search" className="nav-link ">Search</a>
                        </li>
                        <li className="nav-item nav-link">
                            <Link to={"/profile"} style={{textDecoration: "none"}}>
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
            <br/><br/>
            <div className="row">
                <div className="col-10" align="center">
                    <h1>Welcome back to Athenaeum, {currentUser.username}!</h1><br/><br/>
                    <h2 className="wd-about-heading" align="left">Trending Reviews:</h2>
                    <ul className="list-group wd-reviews-list">
                        {recent_reviews && recent_reviews.slice(0, 3).map(review => (
                            <li key={review._id} className="list-group-item wd-profile-reviews">
                                <div>{review.reviewText}</div>
                                <Link to={"/details/" + review.workID} className="wd-review-link">
                                    Go to review <i className="fa-solid fa-chevron-right"></i>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <br/><br/>
                    <h2 className="wd-about-heading" align="left">View your recent Discussion Posts:</h2>
                    <ul className="list-group wd-reviews-list">
                        {/*Slice limits the reviews displayed*/}
                        {user_posts && user_posts.slice(0, 5).map(post => (
                            <li key={post._id} className="list-group-item">
                                <div>{post.postText}</div>
                                <Link to={"/details/" + post.workID} className="wd-review-link">
                                    Go to post <i class="fa-solid fa-chevron-right"></i>
                                </Link>   
                            </li>
                        ))}
                    </ul>
                    <br/><br/>
                </div>

            </div>
        </div>
    )
}

const ModeratorHomeComponent = () => {
    const {currentUser} = useSelector((state) => state.users);
    const {recent_reviews} = useSelector((state) => state.reviews);
    const {recent_posts} = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getReviewsThunk());
        dispatch(getPostsThunk());
    }, []);
    console.log(currentUser);
    return (
        <div className="container">
            <div className="row">
                <div className="col-5 d-flex justify-content-start">
                    <ul className="nav nav-pills mb-2 mt-2 ms-2">
                        <h2 className="nav-item" style={{marginTop:"-11px"}}>
                            <a href="/home" className="nav-link">Athenaeum</a>
                        </h2>
                        <li className="nav-item">
                            <a href="/home" className="nav-link active">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="/search" className="nav-link ">Search</a>
                        </li>
                        <li className="nav-item nav-link">
                            <Link to={"/profile"} style={{textDecoration: "none"}}>
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
            <br/><br/>
            <div className="row">
                <div className="col-10" align="center">
                    <h1>Welcome back to Athenaeum, {currentUser.username}!</h1>
                    <br/><br/>
                    <h2 className="wd-about-heading" align="left">Thank you for helping to moderate Athenaeum!</h2>
                    <br/>
                    <p className="wd-about-content" align="left">As a moderator, you have the power to check on our readers' reviews, as well as our authors' discussion posts.</p>
                    <p className="wd-about-content" align="left">If you feel that any reviews are not productive, you may delete them from a book's details page.</p>
                    <br/><br/>
                    <h2 className="wd-about-heading" align="left">Trending Reviews:</h2>
                    <ul className="list-group wd-reviews-list">
                        {recent_reviews && recent_reviews.slice(0, 3).map(review => (
                            <li key={review._id} className="list-group-item wd-profile-reviews">
                                <div>{review.reviewText}</div>
                                <Link to={"/details/" + review.workID} className="wd-review-link">
                                    Go to review <i className="fa-solid fa-chevron-right"></i>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <br/><br/>
                    <h2 className="wd-about-heading" align="left">Trending Discussion Posts:</h2>
                    <ul className="list-group wd-reviews-list">
                        {recent_posts && recent_posts.slice(0, 3).map(post => (
                            <li key={post._id} className="list-group-item wd-profile-reviews">
                                <div>{post.postText}</div>
                                <Link to={"/details/" + post.workID} className="wd-review-link">
                                    Go to post <i className="fa-solid fa-chevron-right"></i>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

const HomeComponent = () => {
    const {currentUser} = useSelector((state) => state.users);
    if (!currentUser) {
        return <LoggedOutHomeComponent/>
    } else if (currentUser.role === 'READER') {
        return <ReaderHomeComponent/>
    } else if (currentUser.role === 'AUTHOR') {
        return <AuthorHomeComponent/>
    } else if (currentUser.role === 'MODERATOR') {
        return <ModeratorHomeComponent/>
    }
}

export default HomeComponent;