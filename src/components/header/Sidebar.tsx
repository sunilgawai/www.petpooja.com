import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <>
      <Link data-bs-toggle="offcanvas" to="#offcanvasExample" role="button" aria-controls="offcanvasExample">
        <img src="img/menu-icon.png" alt="menu-icon" />
      </Link>
      <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
    <div>
      Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
    </div>
    <div className="dropdown mt-3">
      <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
        Dropdown button
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li><Link className="dropdown-item" to="#">Action</Link></li>
        <li><Link className="dropdown-item" to="#">Another action</Link></li>
        <li><Link className="dropdown-item" to="#">Something else here</Link></li>
      </ul>
    </div>
  </div>
</div>
    </>
  )
}

export default Sidebar;