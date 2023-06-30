import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="header-lft">
                            <div className="menu-iocn">
                                <Link to="3">
                                    <img src="img/menu-icon.png" alt="menu-icon" />
                                </Link>
                            </div>

                            <div className="logo"><Link to="#">
                                <img src="img/logo.png" alt="logo" />
                            </Link>
                            </div>

                            <div className="order-button">
                                <button type="submit">New Order</button>
                                <input type="text" placeholder="Bill No" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="header-right">
                            <div className="head-call-box">
                                Call for support
                                <Link to="tel:9099912483">9099912483</Link>
                            </div>

                            <ul>
                                <li><Link to="#"><img src="/img/icon01.png" alt=""/></Link></li>
                                <li><Link to="#"><img src="/img/icon02.png" alt=""/></Link></li>
                                <li><Link to="#"><img src="/img/icon03.png" alt=""/></Link></li>
                                <li><Link to="#"><img src="/img/icon05.png" alt=""/></Link></li>
                                <li><Link to="#"><img src="/img/icon06.png" alt=""/></Link></li>
                                <li><Link to="#"><img src="/img/icon07.png" alt=""/></Link></li>
                                <li><Link to="#"><img src="/img/icon08.png" alt=""/></Link></li>
                                <li><Link to="#"><img src="/img/icon09.png" alt=""/></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;