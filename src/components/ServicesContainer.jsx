import { IoBarChartSharp } from "react-icons/io5";
import { BsFillMegaphoneFill } from "react-icons/bs";
import { BiSolidNetworkChart } from "react-icons/bi";
import { IoIosPeople } from "react-icons/io";
import Button from "./Button";
import '../assets/components/services-container.sass';

export default function ServicesContainer() {
    return (
        <div className="services-area d-lg-flex flex-lg-column justify-content-lg-center">
            <h2 className="d-none d-md-block text-md-center p-md-4 m-md-0 py-lg-0">Veja todos os serviços</h2>
            <div className="services-containers p-3 d-flex flex-column gap-3 d-md-grid px-md-4 p-lg-0 mx-lg-auto mt-lg-4">
                <div className="service-container d-flex flex-column align-items-center gap-2 p-2 py-md-4 gap-md-3 px-lg-3 justify-content-lg-center gap-lg-3">
                    <IoBarChartSharp />
                    <h3>Finanças</h3>
                    <a href="/services/finance" className="w-100 text-md-center"><Button type="button" text="Saiba mais" min={false} /></a>
                </div>
                <div className="service-container d-flex flex-column align-items-center gap-2 p-2 py-md-4 gap-md-3 px-lg-3 justify-content-lg-center gap-lg-3">
                    <BsFillMegaphoneFill />
                    <h3>Marketing</h3>
                    <a href="/services/marketing" className="w-100 text-md-center"><Button type="button" text="Saiba mais" min={false} /></a>
                </div>
                <div className="service-container d-flex flex-column align-items-center gap-2 p-2 py-md-4 gap-md-3 px-lg-3 justify-content-lg-center gap-lg-3">
                    <BiSolidNetworkChart />
                    <h3>Processos</h3>
                    <a href="/services/processes" className="w-100 text-md-center"><Button type="button" text="Saiba mais" min={false} /></a>
                </div>
                <div className="service-container d-flex flex-column align-items-center gap-2 p-2 py-md-4 gap-md-3 px-lg-3 justify-content-lg-center gap-lg-3">
                    <IoIosPeople />
                    <h3>Pessoas</h3>
                    <a href="/services/people" className="w-100 text-md-center"><Button type="button" text="Saiba mais" min={false} /></a>
                </div>
            </div>
        </div>
    )
}
