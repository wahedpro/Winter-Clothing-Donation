import { FaInstagramSquare , FaFacebook, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer footer-center bg-base-200 text-base-content rounded p-10 mt-5">
            <nav className="grid grid-flow-col gap-4">
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a><FaTwitterSquare size={30} /></a>
                    <a><FaInstagramSquare size={30}/></a>
                    <a><FaFacebook size={30}/></a>
                </div>
            </nav>
            <aside>
                <p>Copyright © 2024 - Wahedul Islam</p>
            </aside>
        </footer>
    );
};

export default Footer;