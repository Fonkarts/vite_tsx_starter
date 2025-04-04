import { useNavigate } from "react-router";

const Homepage = () => {

    const navigate = useNavigate()

    return (
        <div className="Homepage">
            <h2>Homepage</h2>
            <p>This is the Homepage</p>
            <button onClick={() => navigate("/products")}>Navigate to Products</button>
        </div>
    );
};

export default Homepage;
