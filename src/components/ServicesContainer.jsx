import { IoBarChartSharp } from "react-icons/io5";
import { BsFillMegaphoneFill } from "react-icons/bs";
import { BiSolidNetworkChart } from "react-icons/bi";
import { IoIosPeople } from "react-icons/io";

export default function ServicesContainer() {
    return (
        <div className="services-area">
            <div className="container-title">
                <h2>Veja todos os serviços</h2>
            </div>
            <div className="services-container">
                <div className="service-container">
                    <IoBarChartSharp />
                    <h3>Finanças</h3>
                    <button type="button">Saiba mais</button>
                </div>
                <div className="service-container">
                    <BsFillMegaphoneFill />
                    <h3>Marketing</h3>
                    <button type="button">Saiba mais</button>
                </div>
                <div className="service-container">
                    <BiSolidNetworkChart />
                    <h3>Processos</h3>
                    <button type="button">Saiba mais</button>
                </div>
                <div className="service-container">
                    <IoIosPeople />
                    <h3>Pessoas</h3>
                    <button type="button">Saiba mais</button>
                </div>
            </div>
        </div>
    )
}
