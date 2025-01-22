import '../assets/components/container-title.sass';

export default function ContainerTitle(props) {
    return (
        <div className="container-title">
            <h2 className="text-uppercase text-center d-flex flex-column align-items-center mb-2">{props.text}</h2>
        </div>
    )
}
