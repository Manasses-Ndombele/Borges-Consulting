import Header from '../components/Header';
import { IoBarChartSharp } from "react-icons/io5";
import ServicesContainer from '../components/ServicesContainer';
import Button from '../components/Button';
import Footer from '../components/Footer';
import '../assets/pages/service.sass';

export default function FinanceServices() {
    return (
        <>
            <Header route='/services/finance' bgActive={true} />
            <main>
                <article className="p-3 px-md-5 px-lg-0 d-lg-flex mx-lg-auto gap-lg-4 py-lg-auto align-items-lg-center">
                    <div className="container-info d-lg-flex justify-content-lg-center gap-lg-3 gap-xl-5">
                        <div className="icon-area w-100 first-type d-flex justify-content-center align-items-center">
                            <IoBarChartSharp />
                        </div>
                        <div className="description-area p-2 mt-2 p-lg-0 m-lg-0">
                            <h1>Finanças</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut illum eaque error, amet et eveniet, omnis facere aliquid esse a quasi, animi vero sit numquam reprehenderit earum id libero ab. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque similique, nostrum id repellat assumenda ea veniam. Doloribus id ullam eius natus! Enim non velit eum illo ea natus quaerat ex.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis non quod facilis numquam, culpa laudantium at consequatur voluptates exercitationem iusto! Consequuntur recusandae corporis tempore fugit nihil in possimus dolore excepturi? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo error minima asperiores sapiente similique, officia natus laudantium nesciunt eum, magnam sit assumenda, reiciendis dolore nam mollitia quasi doloribus sint libero?</p>
                            <a href="/#contact-area"><Button type="button" text="Fale com a gente" min={false} /></a>
                        </div>
                    </div>
                </article>
                <aside>
                    <ServicesContainer />
                </aside>
            </main>
            <Footer />
        </>
    )
}
