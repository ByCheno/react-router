import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <>
            
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse elements-navbar" id="navbarTogglerDemo01">
                    <a className="navbar-brand" href="#">F1 app</a>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            {<Link to="/">Home</Link>}
                        </li>
                        <li className="nav-item">
                            {<Link to="/about">About</Link>}
                        </li>
                        <li className="nav-item">
                            {<Link to="/help">Help</Link>}
                        </li>
                        <li className="nav-item">
                            {<Link to="/login">Login</Link>}
                        </li>
                    </ul>
                </div>
            </nav>
        
        </>
    )
}


export default Navbar;