import {useDispatch} from "react-redux";
import React, {useEffect} from "react";
import {profileThunk, publicProfileThunk} from "../login/user-thunks";

const CurrentUserProfile = ({children}) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(profileThunk())
    }, [])
    return(children)
}
export default CurrentUserProfile