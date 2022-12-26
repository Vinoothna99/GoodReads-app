import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";

// Guarantee user is logged in before viewing child pages
const ProtectedRoute = ({children}) => {
    const {currentUser} = useSelector((state) => state.users);
    if (currentUser) {
        return children;
    }
    else {
        return <Navigate to={'/login'}/>
    }
}
export default ProtectedRoute