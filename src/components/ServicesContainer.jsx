import { IoBarChartSharp } from "react-icons/io5";
import { BsFillMegaphoneFill } from "react-icons/bs";
import { BiSolidNetworkChart } from "react-icons/bi";
import { IoIosPeople } from "react-icons/io";
import Button from "./Button";
import '../assets/components/services-container.sass';

export default function ServicesContainer() {
    return (
        <div className="services-area">
            <div className="container-title d-none">
                <h2>Veja todos os serviços</h2>
            </div>
            <div className="services-container p-3 d-flex flex-column gap-3">
                <div className="service-container d-flex flex-column align-items-center gap-2 p-2">
                    <IoBarChartSharp />
                    <h3>Finanças</h3>
                    <a href="/services/finance" className="w-100"><Button type="button" text="Saiba mais" min={false} /></a>
                </div>
                <div className="service-container d-flex flex-column align-items-center gap-2 p-2">
                    <BsFillMegaphoneFill />
                    <h3>Marketing</h3>
                    <a href="/services/marketing" className="w-100"><Button type="button" text="Saiba mais" min={false} /></a>
                </div>
                <div className="service-container d-flex flex-column align-items-center gap-2 p-2">
                    <BiSolidNetworkChart />
                    <h3>Processos</h3>
                    <a href="/services/processes" className="w-100"><Button type="button" text="Saiba mais" min={false} /></a>
                </div>
                <div className="service-container d-flex flex-column align-items-center gap-2 p-2">
                    <IoIosPeople />
                    <h3>Pessoas</h3>
                    <a href="/services/people" className="w-100"><Button type="button" text="Saiba mais" min={false} /></a>
                </div>
            </div>
        </div>
    )
}
