import CardMobile from "../Components/CardMobile";
import LateraleNavbar from "../Components/LateraleNavbar"
import { mobile } from "../Tipi";
import { useState, useEffect } from "react"


function Home() {

    const [prodotti, setProdotti] = useState<mobile[]>([]);

    useEffect(() => {
        fetch("http://localhost:3000/Mobiles")
            .then(res => res.json())
            //.then(data => setProfili(data));
            // .then(data => console.log(data["data"]));
            .then(data => {
                const a: mobile[] = data["data"];
                setProdotti(a);
                console.log(a);
            });

    }, [])

    return (
        <>
            <div className="main">
                <LateraleNavbar></LateraleNavbar>


                <div className="container">
                    {
                        prodotti.map(item => {
                            return (
                                <>

                                    <CardMobile nome={item.Brand} ram={item.RAM} specs={item.specs[0]}></CardMobile>


                                </>
                            )
                        })
                    }
                </div>


            </div>

        </>
    )
}

export default Home