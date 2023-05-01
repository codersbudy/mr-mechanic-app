import { useSelector } from 'react-redux';
import './profile.css'
import CustomerNavigation from '../Navigation/navigation';
import { Link } from 'react-router-dom';

function CustomerProfile() {
    window.alert("inner customer profile");
  let viewProfile = document.getElementById("viewProfile")
        viewProfile.style.visibility = "visible";
    const {currentCustomer}=useSelector((state)=>state.customer);
    return <>
   
       <CustomerNavigation/>
        {/* <div className="container-fluid outerContainer">
            <div className='row'>
                <div className='col-2'></div>
                <div className='col-8  outerDiv'>
                    <div className='imageDiv'>
                        <img src="../images/default.jpg" class="img-fluid image" alt="..." />
                    </div>
                    <div className='row p-4'>
                        <div className='col-6' >
                            <div className='row' >
                                <div className='col-md-4 head'>Name</div>
                                <div className='col-md-8 sm-12'>{currentCustomer.customerName}</div>
                            </div>
                        </div>
                        <div className='col-6' >
                            <div className='row'>
                                <div className='col-md-4 head'>Contact</div>
                                <div className='col-md-8 sm-12'>{currentCustomer.customerContact}</div>
                            </div></div>
                    </div>
                    <div className='row p-4' >
                        <div className='col-6' style={{ backgroundColor: "white" }}>
                            <div className='row'>
                                <div className='col-md-4 head'>Email</div>
                                <div className='col-md-8 sm-12'>{currentCustomer.customerEmail}</div>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='row'>
                            </div></div>

                    </div>
                    <div className='row p-4' >
                        <div className='col-6'>
                            <Link to="/customerEditProfile" className="btn" id="btn"><i class="fa fa-edit"></i>Edit</Link>
                        </div>
                        <div className='col-6 backDiv' >
                            <Link to="/customerHome" className="btn back margin-right-2" id="btn" ><i class="fa fa-arrow-left" aria-hidden="true"></i>Back</Link>
                        </div>

                    </div>


                </div>

            </div>

        </div> */}
          <div className="viewProfile" id="viewProfile">
              <div className="closeBtn" id="closeBtn">
                <i style={{ fontSize: 17 }} className="fa">
                  
                </i>
              </div>
              <div className="text-center">
                <h4>Profile</h4>
                <div className="file">
                  <img
                    id="profileImg"
                    src="./images/customerImg.png"
                    alt="profile photo"
                    className="profileImg"
                  />
                  {/* <img src="/images/customerImg.png" class="hiddenImg" alt=""> */}
                  <input
                    id="file"
                    // onClick={name}
                    onchange="previewFile()"
                    type="file"
                    name="photo"
                    className="userphoto"
                    accept="image/png, image/gif, image/jpeg"
                  />
                </div>
                <div className="nameDiv">
                  <span>Name :</span>
                  <input
                    id="name"
                    type="text"
                    name="username"
                    className="username"
                    readOnly=""
                    defaultValue="Ankit Singh Rajput"
                  />
                  <button
                    className="btn edit"
                    onclick="saveEnable()"
                    id="nameEdit"
                  >
                    <i className="fa fa-pencil fs-5" aria-hidden="true" />
                  </button>
                </div>
                <div className="">
                  <span>Email :</span>
                  <input
                    id="email"
                    type="text"
                    name="email"
                    className="useremail"
                    readOnly=""
                    defaultValue="mr.ankit.singh.81@gmail.com"
                  />
                  <button className="btn edit" id="emailEdit">
                    <i className="fa fa-pencil fs-5" aria-hidden="true" />
                  </button>
                </div>
                <div className="">
                  <span>Contact :</span>
                  <input
                    type="text"
                    name="contact"
                    className="usercontact "
                    readOnly=""
                    defaultValue={8120077176}
                  />
                  <button className=" btn edit">
                    <i
                      className="fa fa-pencil fs-5 contectBtn"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </div>
              <div className="  px-3 mt-3 text-center">
                <button className="btn btn-danger" id="signout">
                  Sign Out
                </button>
                <button className="btn btn-success" id="save" disabled="">
                  Save
                </button>
              </div>
            </div>
    </>
}

export default CustomerProfile;