import { useState } from "react";
import { useSelector } from "react-redux"

export default function ShopkeeperNav({ flag,setFlag,shopkeeper }) {
    const shops = useSelector(state => state.shopkeeper.shops);
    const changeSidebar = ()=>{
       let sidebar = document.getElementById("sidebar");
       let sidebar_wrapper = document.getElementById("sidebar-wrapper");
       sidebar_wrapper.classList.toggle('myToggle');
       sidebar.classList.toggle('myToggle');
      
       flag?setFlag(false):setFlag(true);
    }


    return <>
        <nav id="my-nav" className="navbar navbar-expand-lg main-navbar shop-nav">
            <form className="form-inline mr-auto">
                <ul className="navbar-nav mr-3">
                    <li>
                        <a  data-toggle="sidebar" onClick={changeSidebar} className="nav-link nav-link-lg">
                            <i className="fas fa-bars" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            data-toggle="search"
                            className="nav-link nav-link-lg d-sm-none"
                        >
                            <i className="fas fa-search" />
                        </a>
                    </li>
                </ul>
                <div className="search-element">
                    <input
                        className="form-control"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        data-width={250}
                    />
                    <button className="btn" type="submit">
                        <i className="fas fa-search" />
                    </button>
                    <div className="search-backdrop" />
                </div>
            </form>
            <ul className="navbar-nav navbar-right">
                <li className="dropdown dropdown-list-toggle">
                    <a
                        href="#"
                        data-toggle="dropdown"
                        className="nav-link nav-link-lg message-toggle beep"
                    >
                        <abbr title="My Shops"><i className="far fa-store" /></abbr>
                        
                    </a>
                    
                    <div className="dropdown-menu dropdown-list dropdown-menu-right">
                        <div className="dropdown-header">
                            My Shops
                            <div className="float-right">
                                <a href="#">+ Add new shop</a>
                            </div>
                        </div>
                        <div className="dropdown-list-content dropdown-list-message">
                            {
                                shops.map(shop => {
                                    return <>
                                        <a href="#" className="dropdown-item dropdown-item-unread my-shop">
                                            <div className="dropdown-item-avatar">
                                                <img
                                                    alt="image"
                                                    src={shop.photo}
                                                    className="bg-dark"
                                                />
                                            </div>
                                            <div className="dropdown-item-desc">
                                                <b>{shop.shopName.toUpperCase()}</b>
                                                <p><i className="far fa-phone" /> {shop.contact}</p>
                                            </div>
                                        </a>
                                    </>
                                })
                            }

                        </div>
                    </div>
                </li>
                <li className="dropdown dropdown-list-toggle">
                    <a
                        href="#"
                        data-toggle="dropdown"
                        className="nav-link notification-toggle nav-link-lg beep"
                    >
                        <i className="far fa-bell" />
                    </a>
                    <div className="dropdown-menu dropdown-list dropdown-menu-right">
                        <div className="dropdown-header">
                            Notifications
                            <div className="float-right">
                                <a href="#">Mark All As Read</a>
                            </div>
                        </div>
                        <div className="dropdown-list-content dropdown-list-icons">
                            <a href="#" className="dropdown-item dropdown-item-unread">
                                <div className="dropdown-item-icon bg-primary text-white">
                                    <i className="fas fa-code" />
                                </div>
                                <div className="dropdown-item-desc">
                                    Template update is available now!
                                    <div className="time text-primary">2 Min Ago</div>
                                </div>
                            </a>
                            <a href="#" className="dropdown-item">
                                <div className="dropdown-item-icon bg-info text-white">
                                    <i className="far fa-user" />
                                </div>
                                <div className="dropdown-item-desc">
                                    <b>You</b> and <b>Dedik Sugiharto</b> are now friends
                                    <div className="time">10 Hours Ago</div>
                                </div>
                            </a>
                            <a href="#" className="dropdown-item">
                                <div className="dropdown-item-icon bg-success text-white">
                                    <i className="fas fa-check" />
                                </div>
                                <div className="dropdown-item-desc">
                                    <b>Kusnaedi</b> has moved task <b>Fix bug header</b> to{" "}
                                    <b>Done</b>
                                    <div className="time">12 Hours Ago</div>
                                </div>
                            </a>
                            <a href="#" className="dropdown-item">
                                <div className="dropdown-item-icon bg-danger text-white">
                                    <i className="fas fa-exclamation-triangle" />
                                </div>
                                <div className="dropdown-item-desc">
                                    Low disk space. Let's clean it!
                                    <div className="time">17 Hours Ago</div>
                                </div>
                            </a>
                            <a href="#" className="dropdown-item">
                                <div className="dropdown-item-icon bg-info text-white">
                                    <i className="fas fa-bell" />
                                </div>
                                <div className="dropdown-item-desc">
                                    Welcome to Stisla template!
                                    <div className="time">Yesterday</div>
                                </div>
                            </a>
                        </div>
                        <div className="dropdown-footer text-center">
                            <a href="#">
                                View All <i className="fas fa-chevron-right" />
                            </a>
                        </div>
                    </div>
                </li>
                <li className="dropdown">
                    <a
                        href="#"
                        data-toggle="dropdown"
                        className="nav-link dropdown-toggle nav-link-lg nav-link-user"
                    >
                        <img
                            alt="image"
                            src="assets/img/avatar/avatar-1.png"
                            className="rounded-circle mr-1"
                        />
                        <div className="d-sm-none d-lg-inline-block">{shopkeeper?.shopkeeperName}</div>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                        <div className="dropdown-title">Logged in 5 min ago</div>
                        <a href="features-profile.html" className="dropdown-item has-icon">
                            <i className="far fa-user" /> Profile
                        </a>
                        <a
                            href="features-activities.html"
                            className="dropdown-item has-icon"
                        >
                            <i className="fas fa-bolt" /> Activities
                        </a>
                        <a href="features-settings.html" className="dropdown-item has-icon">
                            <i className="fas fa-cog" /> Settings
                        </a>
                        <div className="dropdown-divider" />
                        <a href="#" className="dropdown-item has-icon text-danger">
                            <i className="fas fa-sign-out-alt" /> Logout
                        </a>
                    </div>
                </li>
            </ul>
        </nav>
    </>
}