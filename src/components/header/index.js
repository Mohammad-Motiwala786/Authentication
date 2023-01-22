import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
    return (
        <>
            <div className="container">
                <nav className="py-3 d-flex">
                    <Link to="/">Home</Link>
                    <Link to="/quiz">Quiz</Link>
                    <Link to="/todo">ToDo</Link>
                    <Link to="/register">Register</Link>
                    <Link to="/Login">Login</Link>
                </nav>
            </div>
        </>
    )
}
export default Header;