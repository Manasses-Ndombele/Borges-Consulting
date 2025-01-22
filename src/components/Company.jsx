import '../assets/components/company.sass';

export default function Company() {
    return (
        <div id="company-area" className="p-2 area px-md-5 d-md-flex flex-md-column align-items-md-center">
            <img src="/simple example.webp" alt="Exemplo de funcionários da empresa trabalhando" className="w-100 my-2" />
            <div className="more-info p-3 m-2">
                <h2>Uma empresa especializada em renovar o seu negócio</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores deleniti, eligendi aperiam ipsam repudiandae tenetur blanditiis numquam iure at quo animi amet soluta laboriosam sapiente a. Quibusdam assumenda quae sed?</p>
            </div>
        </div>
    )
}
