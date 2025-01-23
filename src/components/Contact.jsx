import ContainerTitle from "./ContainerTitle"
import Button from "./Button"
import '../assets/components/contact.sass'

export default function Contact() {
    const showThanksMsg = () => {
        document.querySelectorAll('.form-control').forEach((formControl) => {
            formControl.value = ''
        })

        let formSuccessText = document.querySelector('p#form-success-text')
        formSuccessText.classList.remove('visually-hidden')
        setTimeout(() => {
            formSuccessText.classList.add('visually-hidden')
        }, 3500)
    }

    return (
        <div id="contact-area" className="px-3 py-5 area">
            <ContainerTitle text="Contato" />
            <div className="contact-containers mt-4 d-md-grid mx-lg-auto">
                <div className="contact-container text-center mb-4">
                    <h2>Endereço</h2>
                    <p>Av. Pedro de Castro Van Dunem Loy <br /> Luanda, Maria Eugênia Neto 0000-000</p>
                </div>
                <div className="contact-container text-center mb-4">
                    <h2>Fale conosco</h2>
                    <p>Preencha o formulário abaixo e um dos nossos consultores entrará em contato com você!</p>
                </div>
                <div className="contact-container text-center mb-4">
                    <h2>Telefone</h2>
                    <p>(+244) 923 224 456</p>
                </div>
                <form>
                    <input type="text" className="form-control border-0 rounded-0 mb-3 py-2 ps-4" placeholder="Nome" required onChange={(e) => { e.target.reportValidity() }} onFocus={(e) => { e.target.reportValidity() }} onBlur={(e) => { e.target.reportValidity() }} />
                    <input type="email" className="form-control border-0 rounded-0 mb-3 py-2 ps-4" placeholder="Email" required onChange={(e) => { e.target.reportValidity() }} onFocus={(e) => { e.target.reportValidity() }} onBlur={(e) => { e.target.reportValidity() }} />
                    <input type="number" className="form-control border-0 rounded-0 mb-3 py-2 ps-4" placeholder="Telefone" required onChange={(e) => { e.target.reportValidity() }} onFocus={(e) => { e.target.reportValidity() }} onBlur={(e) => { e.target.reportValidity() }} />
                    <textarea className="form-control border-0 rounded-0 mb-3 py-2 ps-4" placeholder="Digite sua mensagem aqui..." required onChange={(e) => { e.target.reportValidity() }} onFocus={(e) => { e.target.reportValidity() }} onBlur={(e) => { e.target.reportValidity() }}></textarea>
                    <Button type="button" text="Enviar" min={true} expand={true} mdMin={true} clickEvent={showThanksMsg} />
                    <p className="text-success my-2 visually-hidden" id="form-success-text">Obrigado por enviar os seus dados!</p>
                </form>
            </div>
        </div>
    )
}
