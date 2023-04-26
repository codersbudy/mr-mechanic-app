function ViewHistory(){
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
                                <a className="nav-link navOption" href="#">My Profile </a>
                            </li>
                          </ul>
                    </div>
                </div>
            </nav>
        </div>  
        <div className="row m-5">
           <div className="col-3 text">
               <p>Shop Name</p>
               <p>Shop Contact Number</p>
               <p>Mechanic Name</p>
               <p>Status</p>
               <p>Problem</p>
               <p>Vehical Number</p>
               <p>Date</p>
            </div>
           <div className="col-3">
               <p>vicky puncher</p>
               <p>9638527417</p>
               <p>abishek sen</p>
               <p>true</p>
               <p>damaged vehical</p>
               <p>96857</p>
                <p>02/03/2023</p>
           </div>
           <div className="col-3 text">
               <p>Shopkeeper Name</p>
               <p>Shop Address</p>
               <p>Mechanic Mobile Number</p>
               <p>Address</p>
               <p>Vehical Name</p>
               <p>Payment Mode</p>
            </div>
            <div className="col-3">
               <p>Ankit</p>
               <p>rajmohlla</p>
               <p>9637894561</p>
               <p>vijay nagar</p>
               <p>2 vehiler</p>
               <p>cmd</p>
           </div>
        </div> 
        <div>
          <button className="bg-color">Back</button>
        </div>  
      </>         
}

export default ViewHistory;