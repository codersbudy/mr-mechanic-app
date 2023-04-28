import { Link } from "react-router-dom";

function CustomerNavigation(){
    return <>
       <div className="container-fluid border-bottom">
            <nav className="navbar navbar-expand-lg nav ">
                <div className="container-fluid a">
                    <img className="navbar-brand logo" src="./images/logo.png"></img>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse navRight" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item ">
                                <a className="nav-link navOption" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link navOption" to="/cusotmerProfile">My Profile</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/customerBookingHistory" className="nav-link navOption">View History</Link>
                            </li>
                            
                         </ul>
                    </div>
                </div>
            </nav>
        </div>

    </>
}

export default CustomerNavigation;
