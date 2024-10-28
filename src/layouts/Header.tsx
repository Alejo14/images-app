import { useLocation, useNavigate } from "react-router-dom";

const Header: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    }

    return (
        <section className="flex justify-between items-center header w-full px-10">
            <div className="p-4 text-left">
                <h1 className="mb-1">Photo Search</h1>
                <p>Alejandro Tapia</p>
            </div>
            {location.pathname !== '/' && <a onClick={handleClick} className="cursor-pointer text-white hover:text-black">Home</a>}
        </section>
    )
}

export default Header;