
fetch("http://localhost:3000/categorie")
    //.then(res => response.json(res))
    .then(data => data.json())
    .then(res => generaCard(res["data"]));


function generaCard(array) {

    array.forEach((item) => {
        let card = `
        <div class="card">
        <h3><a href="${item}.html">${item}</a></h3>
        </div>`;
        console.log(item)
        document.getElementById("categorie-container").innerHTML += card;
    })

    // document.querySelectorAll(".card").forEach(item => {
    //     //console.log(item + "ciao");
    //     console.log(item);

    //     item.addEventListener("click", (e) => {
    //         console.log(`ciao da ${item}`)

    //     });
    // })

}




