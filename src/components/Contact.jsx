export default function Contact() {
    return (
        <div className="contact-info">
            <div className="container-title">
                <h2>Contato</h2>
            </div>
            <div className="contact-containers">
                <div>
                    <h2>Endereço</h2>
                    <p>Av. Pedro de Castro Van Dunem Loy <br /> Luanda, Maria Eugênia Neto 0000-000</p>
                </div>
                <div>
                    <h2>Fale conosco</h2>
                    <p>Preencha o formulário abaixo e um dos nossos consultores entrará em contato com você!</p>
                </div>
                <div>
                    <h2>Telefone</h2>
                    <p>(+244) 923 224 456</p>
                </div>
                <form>
                    <input type="text" className="form-control" placeholder="Nome" />
                    <input type="email" className="form-control" placeholder="Email" />
                    <input type="number" className="form-control" placeholder="Telefone" />
                    <textarea className="form-control" placeholder="Digite sua mensagem"></textarea>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    )
}
