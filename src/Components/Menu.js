import React, {Component} from 'react';
import Link from "next/link";

class Menu extends Component {
    render() {
        return (

                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link href="/" className="nav-link"> Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/speakers" className="nav-link"> Speakers</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/sessions" className="nav-link"> Sessions </Link>
                            </li>
                        </ul>
                </nav>
        );
    }
}

export default Menu;
