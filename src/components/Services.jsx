import { IoBarChartSharp } from "react-icons/io5";
import { BsFillMegaphoneFill } from "react-icons/bs";
import { BiSolidNetworkChart } from "react-icons/bi";
import { IoIosPeople } from "react-icons/io";
import ContainerTitle from "./ContainerTitle";
import Button from "./Button";
import '../assets/components/services.sass';

export default function Services() {
    return (
        <div id="services-area" className="py-5 area">
            <ContainerTitle text="Serviços" />
            <div className="services-containers p-3 d-flex flex-column gap-4 d-md-grid px-md-5">
                <div className="service-container d-flex flex-column align-items-center justify-content-evenly p-2">
                    <IoBarChartSharp />
                    <h3>Finanças</h3>
                    <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, totam eius in sint, dolores ratione non placeat explicabo necessitatibus minima deleniti inventore similique corporis voluptatem accusantium ex. Amet, explicabo? Perspiciatis!</p>
                    <a href="/services/finance"><Button type="button" text="Saiba mais" min={true} /></a>
                </div>
                <div className="service-container d-flex flex-column align-items-center justify-content-evenly p-2">
                    <BsFillMegaphoneFill />
                    <h3>Marketing</h3>
                    <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, totam eius in sint, dolores ratione non placeat explicabo necessitatibus minima deleniti inventore similique corporis voluptatem accusantium ex. Amet, explicabo? Perspiciatis!</p>
                    <a href="/services/marketing"><Button type="button" text="Saiba mais" min={true} /></a>
                </div>
                <div className="service-container d-flex flex-column align-items-center justify-content-evenly p-2">
                    <BiSolidNetworkChart />
                    <h3>Processos</h3>
                    <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, totam eius in sint, dolores ratione non placeat explicabo necessitatibus minima deleniti inventore similique corporis voluptatem accusantium ex. Amet, explicabo? Perspiciatis!</p>
                    <a href="/services/processes"><Button type="button" text="Saiba mais" min={true} /></a>
                </div>
                <div className="service-container d-flex flex-column align-items-center justify-content-evenly p-2">
                    <IoIosPeople />
                    <h3>Pessoas</h3>
                    <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, totam eius in sint, dolores ratione non placeat explicabo necessitatibus minima deleniti inventore similique corporis voluptatem accusantium ex. Amet, explicabo? Perspiciatis!</p>
                    <a href="/services/people"><Button type="button" text="Saiba mais" min={true} /></a>
                </div>
            </div>
        </div>
    )
}
