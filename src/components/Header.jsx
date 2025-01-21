import { MdOutlinePhoneInTalk } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoChevronDownOutline } from "react-icons/io5";

export default function Header() {
    return (
        <header>
            <div className="top-header-area"><MdOutlinePhoneInTalk /> (+244) 923 224 456</div>
            <div className="bottom-header-area">
                <img src="/logo.png" alt="Logotipo da empresa de consutoria Borges Consulting" />
                <button type="button" id="open-menu-btn"><RxHamburgerMenu /></button>
            </div>
            <nav id="main-nav">
                <a href="/">Início</a>
                <a href="/company">A empresa</a>
                <a href="/services">Serviços <IoChevronDownOutline /></a>
                <nav id="subnav-main">
                    <a href="/services/finance">Finanças</a>
                    <a href="/services/marketing">Marketing</a>
                    <a href="/services/processes">Processos</a>
                    <a href="/services/people">Pessoas</a>
                </nav>
                <a href="/clients">Clientes</a>
                <a href="/contact">Contato</a>
            </nav>
        </header>
    )
}