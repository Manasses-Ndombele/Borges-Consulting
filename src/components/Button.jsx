import '../assets/components/button.sass'

export default function Button(props) {
    return (
        <button type={props.type} className={`${props.min ? 'px-4 py-2' : 'w-100 p-3'} ${props.expand ? 'w-100' : ''} main-btn border-0 text-uppercase px-md-5`.trim()} onClick={props.clickEvent}>{props.text}</button>
    )
}
