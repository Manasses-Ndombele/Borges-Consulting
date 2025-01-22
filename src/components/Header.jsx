import { MdOutlinePhoneInTalk } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoChevronDownOutline } from "react-icons/io5";
import { IoChevronUpOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import '../assets/components/header.sass';
import { useState, useEffect } from "react";

export default function Header(props) {
    let [isSubNavMainActive, setIsSubNavMainActive] = useState(false)
    let [activeArea, setActiveArea] = useState(props.route)
    let [mainMenuStatus, setMainMenuStatus] = useState('deactivated')
    let [isMounted, setIsMounted] = useState(false)
    const toggleSubNav = () => {
        setIsSubNavMainActive(!isSubNavMainActive)
        setActiveArea(props.route)
    }

    const toggleMainMenuStatus = () => {
        if (mainMenuStatus === 'deactivated') {
            setMainMenuStatus('activated')
            document.body.style.overflowY = 'hidden'
        } else if (mainMenuStatus === 'activated') {
            setMainMenuStatus('deactivated')
            setIsSubNavMainActive(false)
            document.body.style.overflowY = 'scroll'
        }
    }

    const toggleActiveArea = (e) => {
        let id = e.target.getAttribute('data-target-id')
        toggleMainMenuStatus()
        setActiveArea(id)
        setTimeout(() => {
            if (location.href == '/') {
                document.querySelector(`div#${id}`).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                })
            } else {
                location.href = `/#${id}`
            }
        }, 500)
    }

    useEffect(() => {
        if (location.href == '/') {
            setIsMounted(true)
            let areasElements = document.querySelectorAll('div.area')
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: '0.2'
            }

            const handleIntersection = (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveArea(entry.target.id)
                    }
                })
            }

            let mainObserver = new IntersectionObserver(handleIntersection, observerOptions)
            areasElements.forEach((div) => {
                mainObserver.observe(div)
            })

            return () => {
                mainObserver.disconnect()
            }
        }
    }, [])

    useEffect(() => {
        const handleHashScroll = () => {
            if (/\/#./.test(location.href)) {
                let containerId = location.href.split('#')[1]
                const targetElement = document.querySelector(`div#${containerId}`)
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                    })
                }
            }
        }

        handleHashScroll();
        window.addEventListener('hashchange', handleHashScroll)

        return () => {
            window.removeEventListener('hashchange', handleHashScroll)
        }
    }, [])

    return (
        <header>
            <div className="top-header-area text-center p-2 text-md-end pe-5"><MdOutlinePhoneInTalk /> (+244) 923 224 456</div>
            <div className={`${props.bgActive ? 'bg-active' : ''} container-menu-logo d-md-flex align-items-md-center justify-content-md-around`.trimStart()}>
                <div className={`${props.bgActive ? 'bg-active' : ''} bottom-header-area d-flex align-items-center justify-content-between px-2`.trimStart()}>
                    <img src="/logo.png" alt="Logotipo da empresa de consutoria Borges Consulting" />
                    <button type="button" className="bg-transparent border-0 p-0 d-md-none" onClick={toggleMainMenuStatus}><RxHamburgerMenu /></button>
                </div>
                <menu className={`${mainMenuStatus} main-menu position-absolute start-0 top-0 vw-100 vh-100 m-0 p-0 text-end pe-3 pt-3 d-flex flex-column justify-content-center align-items-end p-md-0`}>
                    <button type="button" className="border-0 bg-transparent d-md-none" onClick={toggleMainMenuStatus}><IoClose /></button>
                    <nav className="main-nav d-flex flex-column align-items-center justify-content-center gap-2 w-100 px-5 flex-md-row p-md-0 gap-md-3">
                        <a href="/" data-target-id="home-area" className={`${activeArea === 'home-area' ? 'active' : ''} p-2 text-uppercase text-decoration-none w-100 text-center p-md-0`.trimStart()} onClick={toggleActiveArea}>Início</a>
                        <a data-target-id="company-area" className={`${activeArea === 'company-area' ? 'active' : ''} p-2 text-uppercase text-decoration-none w-100 text-center p-md-0`.trimStart()} onClick={toggleActiveArea}>A empresa</a>
                        <a
                            data-target-id="services-area"
                            id="submain-nav-link"
                            className={`${activeArea === 'services-area' || /services/.test(activeArea) ? 'active' : ''} ${isSubNavMainActive ? 'border-0' : ''} p-2 text-uppercase text-decoration-none w-100 text-center p-md-0 d-flex align-items-center justify-content-center gap-2`.trimStart()}
                            onClick={toggleActiveArea}>
                                Serviços { isSubNavMainActive ?
                                    (<IoChevronDownOutline onClick={
                                        (e) => {
                                            e.stopPropagation()
                                            toggleSubNav()
                                        }
                                    } /> ) :
                                    ( <IoChevronUpOutline onClick={
                                        (e) => {
                                            e.stopPropagation()
                                            toggleSubNav()
                                    }
                                    } /> )
                                }
                        </a>
                        <nav id="subnav-main" className={`${isSubNavMainActive ? 'activated' : 'deactivated'} flex-column align-items-center gap-3`.trimStart()}>
                            <a href="/services/finance" className={`${activeArea === '/services/finance' ? 'active' : ''} text-decoration-none border-0`.trimStart()}>Finanças</a>
                            <a href="/services/marketing" className={`${activeArea === '/services/marketing' ? 'active' : ''} text-decoration-none border-0`.trimStart()}>Marketing</a>
                            <a href="/services/processes" className={`${activeArea === '/services/processes' ? 'active' : ''} text-decoration-none border-0`.trimStart()}>Processos</a>
                            <a href="/services/people" className={`${activeArea === '/services/people' ? 'active' : ''} text-decoration-none border-0`.trimStart()}>Pessoas</a>
                        </nav>
                        <a data-target-id="clients-area" className={`${activeArea === 'clients-area' ? 'active' : ''} p-2 text-uppercase text-decoration-none w-100 text-center p-md-0`.trimStart()} onClick={toggleActiveArea}>Clientes</a>
                        <a data-target-id="contact-area" className={`${activeArea === 'contact-area' ? 'active' : ''} p-2 text-uppercase text-decoration-none w-100 text-center p-md-0`.trimStart()} onClick={toggleActiveArea}>Contato</a>
                    </nav>
                </menu>
            </div>
        </header>
    )
}
