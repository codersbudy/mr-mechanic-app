function Booking(){
    return<>
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
        <div className="container mt-3 text-center">
  <h2>Customer Booking History </h2>
  <table className="table m-5">
    <thead>
      <tr>
        <th>S.no</th>
        <th>Shop Name</th>
        <th>Problem</th>
         <th>Contact</th>
         <th>Bill</th>
         <th>Date</th>
         <th>view</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1.</td>
        <td>vickky puncher</td>
        <td>damaged bike</td>
        <td>9696969685</td>
        <td>85858</td>
        <td>02/02/2023</td>
        <td>view</td>
      </tr>
    </tbody>
  </table>
 </div>
 <div>
   <button className="bg-color">Back</button>
 </div>
</>
}
export default Booking;