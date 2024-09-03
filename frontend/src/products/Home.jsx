
import Product from "./Product"
import { Link } from "react-router-dom"
const Home = () => {
    return (
        <div>
            <button> <Link to = "/products">Click Here to go to Products</Link> </button>
        </div>
    )
}

export default Home