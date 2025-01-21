import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer>
            <p>Siga-nos nas redes sociais</p>
            <nav className="social-nav">
                <a href="#"><FaFacebook /></a>
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaLinkedin /></a>
            </nav>
            <p>&copy; 2025 - Manassés Ndombele - Programador Pleno e Fullstack</p>
        </footer>
    )
}
