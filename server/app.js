const express = require("express");
const app = express();
const conn = require("./Connection.js");
const cors = require("cors");

app.use(cors());

app.get("/", (req, response) => {

    // const db = new conn();
    const primo = conn.istanza();
    let test = primo.ottieniCategorie();

    test
    .then(res => response.json(res))
    .catch(err => console.log(err));

})

app.get("/categorie", (req, res) => {
    const db = conn.istanza();
    let categorie = db.ottieniCategorie();

    categorie
    .then(data => res.json({"data":data}))
    .catch(err => console.log(`c'è un errore in app.get di ottieniCategorie ${err}`));
})

app.get("/Mobiles", (req, res) => {
    const primo = conn.istanza();
    let test = primo.ottieniMobiles();

    test
    .then(data => res.json({"data":data}))
    .catch(err => console.log(`c'è un errore in app.get di otteiniMobiles ${err}`));
})

app.get("/Laptops", (req, res) => {
    const primo = conn.istanza();
    let test = primo.ottieniLaptops();

    test
    .then(data => res.json({"data":data}))
    .catch(err => console.log(`c'è un errore in app.get di otteiniMobiles ${err}`));
})

app.get("/Books", (req, res) => {
    const primo = conn.istanza();
    let test = primo.ottieniBooks();

    test
    .then(data => res.json({"data":data}))
    .catch(err => console.log(`c'è un errore in app.get di otteiniMobiles ${err}`));
})

app.get("/Clothings", (req, res) => {
    const primo = conn.istanza();
    let test = primo.ottieniClothings();

    test
    .then(data => res.json({"data":data}))
    .catch(err => console.log(`c'è un errore in app.get di otteiniMobiles ${err}`));
})

app.get("/Beauty", (req, res) => {
    const primo = conn.istanza();
    let test = primo.ottieniBeauty();

    test
    .then(data => res.json({"data":data}))
    .catch(err => console.log(`c'è un errore in app.get di otteiniMobiles ${err}`));
})


app.get("/Furniture", (req, res) => {
    const primo = conn.istanza();
    let test = primo.ottieniFurniture();

    test
    .then(data => res.json({"data":data}))
    .catch(err => console.log(`c'è un errore in app.get di otteiniMobiles ${err}`));
})

app.listen(3000, () => {console.log("il server sta girando sulla porta 3000")});