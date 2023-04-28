import { useSelector } from 'react-redux';
import './profile.css'
import CustomerNavigation from '../Navigation/navigation';
import { Link } from 'react-router-dom';

function CustomerProfile() {


    const {currentCustomer}=useSelector((state)=>state.customer);
    return <>
       <CustomerNavigation/>
        <div className="container-fluid outerContainer">
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

        </div>
    </>
}

export default CustomerProfile;