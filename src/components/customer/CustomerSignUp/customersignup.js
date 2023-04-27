function CustomerSignUP(){
return <>
<div className="modal fade" id="customerSignUpModel"
data-bs-backdrop="static"
data-bs-keyboard="false"
tabIndex={-1}
aria-labelledby="staticBackdropLabel"
aria-hidden="true"
>
<div
    className="modal-dialog modal-lg modal-content rounded-0"
    style={{ borderRadius: "100%" }}
>
    <div className="row">
        <div className="col-md-4 col-sm-12 " id="firstside">
            <div style={{ marginTop: "2vw" }}>
                <div className="container-fluid" id="h2" style={{textAlign:"center"}}>
                        Signup
                </div>
            </div>
            <div style={{ marginTop: 200 }}>
                <img
                    src="./images/LoginImage.svg"
                    className="img-fluid"
                    alt="Responsive image"
                />
            </div>
        </div>
        <div className="col-md-8 col-sm-12" style={{ paddingRight: 25 }}>
            <div className="close">
                <button
                    type="button"
                    id="closebutoon"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                />
            </div>
            <form  style={{ padding: "3vw" }}>
                <div className="placeholderdiv">
                    <input
                        className="place"
                        type="text"
                        id="customerName"
                        placeholder="Enter name"
                        // onChange={(event) => setCustomerName(event.target.value)}
                        // onKeyUp={nameHendler}
                    />
                    <div style={{ height: "1vw" }}>
                            
                            {/* {nameErr ? <small style={{ color: "red" }} >Invalid customer name</small> : ""} */}
                        </div>
                </div>
                <div className="placeholderdiv">
                            <input
                                className="place"
                                type="text"
                                required=""
                                id="customerContact"
                                placeholder="Enter contact number"
                                minLength={10}
                                maxLength={10}
                                // onChange={(event) => setContact(event.target.value)}
                                // onKeyUp={contactHendler}
                            />
                            <div style={{ height: "1vw" }}>
                            
                                {/* {contErr ? <small style={{ color: "red" }} >Invalid contact number</small> : ""} */}
                            </div>
                 </div>
              
                <div className="placeholderdiv">
                    <input
                        className="place"
                        type="password"
                        id="customerPassword"
                        placeholder="Enter password"
                        // onKeyUp={passwordHendler}
                        minLength={8}
                        maxLength={16}
                        // onChange={(event) => setPassword(event.target.value)}
                    />
                    <div style={{ height: "1vw" }}>
                            
                            {/* {passErr ? <small style={{ color: "red" }} >Invalid password</small> : ""} */}
                        </div>
                </div>
                <div>
                    <a href="" className="link">
                        <a data-bs-toggle="modal" data-bs-target="#customerModel">Already have an account ?</a>
                    </a>
                </div>
                <div>
                    <button type="submit" className="btn btn" id="signUpBtn" data-bs-toggle="modal" data-bs-target="#customerModel" >
                        Continue
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
</div>
</>
}
export default CustomerSignUP;