import { useNavigate } from "react-router-dom"


const Products: React.FC = () => {

    const navigate = useNavigate()

    return (
        <div>
            <button onClick={() => navigate("/")}>Back to Home</button>
            <h2>
                This is the products page !
            </h2>
            <ul>
                <li>Product 1</li>
                <li>Product 2</li>
                <li>Product 3</li>
            </ul>
        </div>
    )
}

export default Products