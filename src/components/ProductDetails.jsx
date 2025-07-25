import { useNavigate, useParams } from "react-router-dom"

const ProductDetails = () => {
    const params = useParams();
    // console.log(params);
    const navigate = useNavigate();
    // const NavigateHandler = () => {
    //     Navigate("/product")
    // }
    return (
        <div>
            <h1 className="text-4xl font-thin mt-5  mb-10">{params.name}</h1>
            <h2 className="text-2xl font-thin mb-5">Product Details</h2>
            <button 
            // onClick={() => Navigate("/product")}
            onClick={() => navigate(-1)}
                className="bg-green-600 px-4 py-2 rounded">Go Back</button>
            
        </div>
    )
} 

export default ProductDetails