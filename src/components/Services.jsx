import { IoBarChartSharp } from "react-icons/io5";
import { BsFillMegaphoneFill } from "react-icons/bs";
import { BiSolidNetworkChart } from "react-icons/bi";
import { IoIosPeople } from "react-icons/io";

export default function Services() {
    return (
        <div className="services-info">
            <div className="container-title">
                <h2>Serviços</h2>
            </div>
            <div className="services-containers">
                <div className="service-container">
                    <IoBarChartSharp />
                    <h3>Finanças</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, totam eius in sint, dolores ratione non placeat explicabo necessitatibus minima deleniti inventore similique corporis voluptatem accusantium ex. Amet, explicabo? Perspiciatis!</p>
                    <button type="button">Saiba mais</button>
                </div>
                <div className="service-container">
                    <BsFillMegaphoneFill />
                    <h3>Marketing</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, totam eius in sint, dolores ratione non placeat explicabo necessitatibus minima deleniti inventore similique corporis voluptatem accusantium ex. Amet, explicabo? Perspiciatis!</p>
                    <button type="button">Saiba mais</button>
                </div>
                <div className="service-container">
                    <BiSolidNetworkChart />
                    <h3>Processos</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, totam eius in sint, dolores ratione non placeat explicabo necessitatibus minima deleniti inventore similique corporis voluptatem accusantium ex. Amet, explicabo? Perspiciatis!</p>
                    <button type="button">Saiba mais</button>
                </div>
                <div className="service-container">
                    <IoIosPeople />
                    <h3>Pessoas</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, totam eius in sint, dolores ratione non placeat explicabo necessitatibus minima deleniti inventore similique corporis voluptatem accusantium ex. Amet, explicabo? Perspiciatis!</p>
                    <button type="button">Saiba mais</button>
                </div>
            </div>
        </div>
    )
}
