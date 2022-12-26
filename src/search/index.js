import {useState} from "react";
import {Link} from "react-router-dom";

const SearchBarComponent = (query) => {
    const [searchTerm, setSearchTerm] = useState(query.searchTerm ? query.searchTerm : "");
    return (
    <div>
        <ul className="list-group">
            <li className="list-group-item">
                <Link to={"/search/" + searchTerm}>
                    <button
                        className="btn btn-primary float-end"
                    >Search
                    </button>
                </Link>
                <input
                    className="form-control w-75"
                    onChange={(e) => setSearchTerm(e.target.value)}
                    value={searchTerm}
                    placeholder="Search book title, author, etc."/>
            </li>
        </ul>
    </div>
    )}
export default SearchBarComponent;