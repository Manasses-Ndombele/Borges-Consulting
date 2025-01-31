import '../assets/components/clients.sass'
import ContainerTitle from './ContainerTitle'

export default function Clients() {
    return (
        <div id="clients-area" className="area">
            <div className="clients-area-overlay p-4 d-md-flex flex-md-column align-items-md-center">
                <ContainerTitle text="Clientes" />
                <div className="clients-brands d-flex flex-column align-items-center gap-3 d-md-grid justify-content-md-center gap-md-5">
                    <img src="/bizno_tracker.png" alt="Cliente 1" />
                    <img src="/boomsales.png" alt="Cliente 2" />
                    <img src="/criptomaster.png" alt="Cliente 3" />
                    <img src="/didacta.png" alt="Cliente 4" />
                    <img src="/mega_med.png" alt="Cliente 5" />
                    <img src="/race_shadows.png" alt="Cliente 6" />
                </div>
            </div>
        </div>
    )
}
