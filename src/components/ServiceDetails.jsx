import { useNavigate } from "react-router-dom"

const ServiceDetails = () => {
    const navigate = useNavigate();
    
    return (
        <div>
            <h1 className="text-3xl font-thin mt-5  mb-7">More Services</h1>
            <h2 className="text-2xl font-thin mb-5">Choose Us</h2>
            <button 
                // onClick={() => Navigate("/product")}
                onClick={() => navigate(-1)}
                className="bg-green-600 px-4 py-2 rounded">
                Go Back
            </button>
            <button 
                onClick={() => navigate("/product")}
                className="bg-green-600 px-4 py-2 rounded mx-4">
                Go to Products
            </button>
            
        </div>
    )
}

export default ServiceDetails