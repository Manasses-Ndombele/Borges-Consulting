import Header from '../components/Header'
import { IoIosPeople } from "react-icons/io";
import ServicesContainer from '../components/ServicesContainer'
import Footer from '../components/Footer'

export default function PeopleServices() {
    return (
        <>
            <Header />
            <main>
                <article>
                    <div className="icon-area">
                        <IoIosPeople />
                    </div>
                    <div>
                        <h1>Pessoas</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut illum eaque error, amet et eveniet, omnis facere aliquid esse a quasi, animi vero sit numquam reprehenderit earum id libero ab. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque similique, nostrum id repellat assumenda ea veniam. Doloribus id ullam eius natus! Enim non velit eum illo ea natus quaerat ex.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis non quod facilis numquam, culpa laudantium at consequatur voluptates exercitationem iusto! Consequuntur recusandae corporis tempore fugit nihil in possimus dolore excepturi? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo error minima asperiores sapiente similique, officia natus laudantium nesciunt eum, magnam sit assumenda, reiciendis dolore nam mollitia quasi doloribus sint libero? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam commodi vitae provident quae eum architecto est nemo dolorum ipsam necessitatibus voluptatem explicabo, obcaecati consequatur quibusdam? Itaque omnis architecto atque saepe.</p>
                        <button type="button">Fale com a gente</button>
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
