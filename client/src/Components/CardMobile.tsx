import "../App.css"


type cardProps = {
    nome: string;
    ram: string;
    specs: string;
}


function CardMobile({ nome, ram, specs }: cardProps) {

    return (

        <div className="card">
            <img></img>
            <div>
                <p>{nome}</p>
                <p>RAM: {ram}</p>
                
            </div>
            <p>{specs}</p>

        </div>
    )
}

export default CardMobile;
