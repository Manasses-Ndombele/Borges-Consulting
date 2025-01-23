import '../assets/components/company.sass';

export default function Company() {
    return (
        <div id="company-area" className="p-2 area d-md-flex mb-md-5 mx-lg-auto align-items-lg-center justify-content-lg-start mx-xl-auto">
            <img src="/business.jpeg" alt="Exemplo de funcionários da empresa trabalhando" className="w-100 my-2" />
            <div className="more-info p-3 m-2 m-lg-0 d-lg-flex justify-content-lg-center flex-lg-column">
                <h2>Uma empresa especializada em renovar o seu negócio</h2>
                <p className="p-lg-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores deleniti, eligendi aperiam ipsam repudiandae tenetur blanditiis numquam iure at quo animi amet soluta laboriosam sapiente a. Quibusdam assumenda quae sed?</p>
            </div>
        </div>
    )
}
