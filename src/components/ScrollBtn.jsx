import { useState, useEffect } from 'react';
import '../assets/components/scroll-btn.sass';
import { IoChevronUpOutline } from "react-icons/io5";

export default function ScrollBtn() {
    let [btnVisibility, setBtnVisibility] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY
            setBtnVisibility(scrollTop > 500)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <button type="button" id="scroll-btn" className={`${btnVisibility ? '' : 'visually-hidden'} text-center position-fixed bottom-0 start-0 mb-4 ms-2 p-2 d-lg-none`.trimStart()} onClick={
            () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                })
            }
        }>
            <IoChevronUpOutline />
        </button>
    )
}
