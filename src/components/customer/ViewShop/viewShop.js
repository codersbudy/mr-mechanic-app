import { useSelector } from 'react-redux';
import './viewShop.css'
import CustomerNavigation from '../Navigation/navigation';
import { Link } from 'react-router-dom';

function ViewShop() {

    return <>
       {/* <CustomerNavigation/> */}
        <div className="container-fluid outerContainer">
            <div className='row'>
                <div className='col-2'></div>
                <div className='col-8  outerDiv'>
                    <div className='imageDiv'>
                        <img src="../images/shopDefault.avif" class="img-fluid image" alt="..." />
                    </div>
                    <div className='row p-4'>
                        <div className='col-6' >
                            <div className='row' >
                                <div className='col-md-4 head'>Shop Name</div>
                                <div className='col-md-8 sm-12'>ankit punchur</div>
                            </div>
                        </div>
                        <div className='col-6' >
                            <div className='row'>
                                <div className='col-md-4 head'>Contact</div>
                                <div className='col-md-8 sm-12'>9090909090</div>
                            </div></div>
                    </div>
                    <div className='row p-4' >
                        <div className='col-6' style={{ backgroundColor: "white" }}>
                            <div className='row'>
                                <div className='col-md-4 head'>Address</div>
                                <div className='col-md-8 sm-12'>vijay nager</div>
                            </div>
                        </div>
                        <div className='col-6' style={{ backgroundColor: "white" }}>
                            <div className='row'>
                                <div className='col-md-4 head'>Type</div>
                                <div className='col-md-8 sm-12'>Bike Service</div>
                            </div>
                        </div>
                    </div>
                    <div className='row p-4' >
                        <div className='col-6' style={{ backgroundColor: "white" }}>
                            <div className='row'>
                                <div className='col-md-4 head'>Rating</div>
                                <div className='col-md-8 sm-12'>*****</div>
                            </div>
                        </div>
                        <div className='col-6' style={{ backgroundColor: "white" }}>
                            <div className='row'>
                                <div className='col-md-4 head'>Email</div>
                                <div className='col-md-8 sm-12'>abhi@gmail.</div>
                            </div>
                        </div>
                    </div>
                    <div className='row p-4' >
                        <div className='col-6'>
                            <Link to="/customerEditProfile" className="btn" id="btn">Request</Link>
                        </div>
                        <div className='col-6 backDiv' >
                            <Link to="/customerHome" className="btn back margin-right-2" id="btn" ><i class="fa fa-arrow-left" aria-hidden="true"></i>Back</Link>
                        </div>

                    </div>


                </div>
            </div>

        </div>

        <div>

        </div>
    </>
}

export default ViewShop;