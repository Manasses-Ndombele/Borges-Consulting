import Header from "../components/Header"

export default function Home() {
    return (
        <div className="group-main-area">
            <Header />
            <div className="main-area">
                <h1>Soluções personalizadas de alto impacto para o seu negócio</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error adipisci accusantium facilis quasi nam cupiditate accusamus, ipsa incidunt delectus explicabo ipsam, rerum ab impedit iusto praesentium dolorem autem, voluptates neque?</p>
                <button type="button" className="main-btn">Saiba mais</button>
            </div>
        </div>
    )
}
