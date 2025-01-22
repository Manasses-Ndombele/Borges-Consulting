import Header from "../components/Header"
import Button from "./Button"
import '../assets/components/home.sass'

export default function Home() {
    return (
        <div id="home-area" className="group-main-area area">
            <Header route='home-area' bgActive={false} activateSubNav={false} />
            <div className="main-area d-flex flex-column align-items-center p-3">
                <h1 className="text-center">Soluções personalizadas de alto impacto para o seu negócio</h1>
                <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error adipisci accusantium facilis quasi nam cupiditate accusamus, ipsa incidunt delectus explicabo ipsam, rerum ab impedit iusto praesentium dolorem autem, voluptates neque?</p>
                <a href="#services-area" className="w-100"><Button type="button" text="Saiba mais" min={false} /></a>
            </div>
        </div>
    )
}
