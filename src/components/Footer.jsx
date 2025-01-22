import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import '../assets/components/footer.sass';

export default function Footer() {
    return (
        <footer className="text-center py-3 px-2">
            <p className="mb-0">Siga-nos nas redes sociais</p>
            <nav className="social-nav d-flex justify-content-center gap-4 mb-3">
                <a href="#"><FaFacebook /></a>
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaLinkedin /></a>
            </nav>
            <p className="mb-0">&copy; 2025 - Manassés Ndombele - Desenvolvedor Fullstack</p>
        </footer>
    )
}
