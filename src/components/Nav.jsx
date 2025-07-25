import {NavLink} from "react-router-dom"

const Nav = () => {
  return (
    <div className="p-5 flex gap-10 justify-center ">
        <NavLink className={(e) => e.isActive ? "text-green-600" : ""} to="/">
          Home
        </NavLink>
        <NavLink className={(e) => e.isActive ? "text-green-600" : "" } to="/product">
          Product
        </NavLink>
        <NavLink className={(e) => e.isActive ? "text-green-600" : ""} to="/service">
          Service
        </NavLink>
        <NavLink className={(e) => e.isActive ? "text-green-600" : ""} to="/about">
          About
        </NavLink>

    </div>
  )
}

export default Nav