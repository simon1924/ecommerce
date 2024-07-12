fetch("http://localhost:3000/Furniture")
.then(data => data.json())
.then(res => generaCard(res["data"]));

function generaCard(array) {

    array.forEach((item) => {
        let card = `
        <div class="card">
        <h3>Title: ${item.title}</h3>
        <p>Price: ${item.price}</p>
        </div>`;
        console.log(item)
        document.querySelector(".containerOggetti").innerHTML += card;
    })


}