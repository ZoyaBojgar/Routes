import { useNavigate } from "react-router-dom"
import { Outlet } from "react-router-dom";

const Service = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="text-4xl font-thin mb-5 mt-10">Service</h1>
      <button 
                onClick={() => navigate("/service/detail")}
                className="bg-green-600 px-4 py-2 rounded">
                More Details
      </button>
      <button 
                onClick={() => navigate("/service/update")}
                className="bg-green-600 px-4 py-2 rounded mx-3">
                More Update
      </button>
      <hr className="my-10"/>
      <Outlet />
    </div>
  )
}

export default Service