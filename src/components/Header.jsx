import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <h1>This is a header</h1>
            <nav>
                &nbsp;
                <Link to="/">Home</Link>
                &nbsp;
                <Link to="/counter">Counter</Link>
                &nbsp;
                <Link to="/converter">Converter</Link>
                &nbsp;
                <Link to="/trainer/get">View Trainers</Link>
                &nbsp;
                <Link to="/trainer/create">Add Trainer</Link>
            </nav>
        </header>
    );
}

export default Header;