function Navbar(){

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
                <a className="nav-link navOption" href="#">Features </a>
              </li>
              <li className="nav-item">
                <a className="nav-link navOption" href="#">About</a>
              </li>
              <li className="nav-item ">
                <a className="nav-link navOption dropdown-toggle" href="#"> <i className="fa fa-map-marker"
                    aria-hidden="true"></i> <span id="city">Select City</span></a>
              </li>

            
              <li className="nav-item dropdown ">
                <a className="nav-link navOption  text-light btn btn-info loginBtn" href="#" role="button"
                  data-bs-toggle="dropdown" aria-expanded="false">
                  <span className="dropdown-toggle ">Login</span>
                </a>
                <ul className="dropdown-menu ">
                  <li><a className="dropdown-item" href="#">Customer</a></li>
                  <li><a className="dropdown-item" href="#">Shopkeeper</a></li>
                  <li><a className="dropdown-item" href="#">Mechanic</a></li>
                  <li><a className="dropdown-item" href="#">Admin</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
       </>
}

export default Navbar;