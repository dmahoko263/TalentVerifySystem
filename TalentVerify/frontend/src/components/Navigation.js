import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/upload">Bulk Uploads</Link>
                </li>
                <li>
                    <Link to="/elist">Employee List</Link>
                </li>
                <li>
                    <Link to="/employees/add">Add Employee</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
