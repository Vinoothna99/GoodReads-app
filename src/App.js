import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import './App.css';
import HomeComponent from "./home";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import bookSearchReducer from "./search/search-reducer";
import bookDetailsReducer from "./details/details-reducer";
import reviewsReducer from "./details/reviews-reducer";
import usersReducer from "./login/user-reducer"
import followsReducer from "./profile/follows-reducer";
import postsReducer from "./details/posts-reducer";
import DetailsComponent from "./details";
import LoginComponent from "./login";
import ProfileComponent from "./profile";
import RegisterComponent from "./register";
import SearchPageComponent from "./search-page.js";
import SearchResultsComponent from "./search/search-results";
import ProtectedRoute from "./profile/protected-route";
import CurrentUserProfile from "./profile/current-user-profile";
import PublicProfileComponent from "./profile/public-profile-index";

const store = configureStore({
    reducer: {
        books: bookSearchReducer,
        details: bookDetailsReducer,
        reviews: reviewsReducer,
        users: usersReducer,
        follows: followsReducer,
        posts: postsReducer
    }
})

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <CurrentUserProfile>
                    <div className="container">
                        <Routes>
                            <Route index element={<HomeComponent/>}/>
                            <Route path="/home" element={<HomeComponent/>}/>
                            <Route path="/details/:workID" element={<DetailsComponent/>}/>
                            <Route path="/login" element={<LoginComponent/>}/>
                            <Route path="/register" element={<RegisterComponent/>}/>
                            <Route path="/search" element={<SearchPageComponent/>}/>
                            <Route path="/search/:searchQuery" element={<SearchResultsComponent/>}/>
                            <Route path="/profile" element={
                                <ProtectedRoute>
                                    <ProfileComponent/>
                                </ProtectedRoute>
                            }/>

                            <Route path="/profile/:uid" element={<PublicProfileComponent/>}/>

                        </Routes>
                    </div>
                </CurrentUserProfile>

            </BrowserRouter>
        </Provider>
    );
}

export default App;