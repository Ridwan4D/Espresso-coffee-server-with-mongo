import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className="text-xl font-bold space-x-5 text-center my-10">
            <Link to="/">Home</Link>
            <Link to="/addCoffee">Add Coffee</Link>
        </div>
    );
};

export default Nav;