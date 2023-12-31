import { Link, useLocation } from "react-router-dom";
function Nav() {
  const { pathname } = useLocation();
  const tabClass = {    
    display: "inline-flex",
    width: "50%",
    height: "42px",
    position: "absolute",
    right: 0,
   }

  return (
    <nav className="nav nav-tabs mt-2" style={tabClass}>
      <Link to="/Labs/a3"
            className={`nav-link ${pathname.includes("a3") ? "active" : ""}`}>A3</Link>
      <Link to="/hello"
            className={`nav-link ${pathname.includes("hello") ? "active" : ""}`}>Hello</Link>
      <Link to="/Kanbas"
            className={`nav-link ${pathname.includes("Kanbas") ? "active" : ""}`}>Kanbas</Link>
    </nav>
  );
}
export default Nav;