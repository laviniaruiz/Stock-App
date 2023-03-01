import { Link } from 'react-router-dom'

export default function Nav({ props }) {

    return (

        <div className="nav">
            <Link to="/">
                <div>Home</div>
            </Link>

            <Link to="/about">
                <div>About</div>
            </Link>

            <Link to="/stocks">
                <div>Dashboard</div>
            </Link>
        </div>

        // <header>
        //     <nav className="navbar">
        //         <img src="" alt="" />
        //         <ol className="nav-ol">
        //             <Link to="/">Home</Link>
        //             <Link to="/about">About</Link>
        //             <Link to="/stocks">Dashboard</Link>
        //         </ol>
        //     </nav>
        // </header>
    );
}
