const fs = require("fs");
let instance = null;

//console.log("ciao da fuori");

class Data {

    static istanza() {
        return instance ? instance : new Data();
    }

    // ottieniCategorie(){
    //     console.log("ciao");
    //     let settings = {method: "Get"}
    //     fetch("./data.json", settings)
    //     .then(res => res.json())
    //     .then(data => console.log(data));
    // }

    async ottieniFile() {
        try {
            const response = await new Promise((resolve, reject) => {
                fs.readFile("./data.json", (err, res) => {
                    if (err) reject(new Error(err.message));

                    const file = JSON.parse(res);
                    resolve(file);
                })
            })
            return response;

        } catch (e) {
            console.log(`c'è un errore nel metodo ottieniFile backend ${e}`);
        }

    }
    async ottieniCategorie() {
        //console.log("ciao");
        try {
            const response = await new Promise((resolve, reject) => {
                fs.readFile("./data.json", (err, res) => {
                    if (err) reject(new Error(err.message));


                    const file = JSON.parse(res);
                    let chiavi = Object.keys(file["categories"]);
                    resolve(chiavi);
                    //console.log(chiavi);
                })

            })

            return response;

        } catch (e) {
            console.log(`c'è un errore nel metodo ottieniCategorie backend ${e}`);
        }
    }


    ottieniProdotti() {
        this.ottieniFile().then(data => console.log(data["products"]));



    }

    async ottieniMobiles() {
        try {
            const response = await new Promise((resolve, reject) => {
                fs.readFile("./data.json", (err, res) => {
                    if (err) reject(new Error(err.message));


                    const file = JSON.parse(res);

                    let chiavi = file["products"];
                    //console.log(chiavi);
                    let ultimo = this.filtroPerCategoria(chiavi, "Mobiles");
                    resolve(ultimo);

                })

            })

            return response;

        } catch (e) {
            console.log(`c'è un problema nella funzione ottieniMobiles sul backend ${e}`);
        }
    }


    async ottieniBooks() {
        try {


        } catch (e) {
            console.log(`c'è un problema nella funzione ottieniBooks sul backend ${e}`);
        }
    }


    async ottieniProdotto(categoriaProdotto) {
        try {
            const response = await new Promise((resolve, reject) => {
                fs.readFile("./data.json", (err, res) => {
                    if (err) reject(new Error(err.message));


                    const file = JSON.parse(res);

                    let chiavi = file["products"];
                    //console.log(chiavi);
                    let ultimo = this.filtroPerCategoria(chiavi, categoriaProdotto);
                    resolve(ultimo);

                })
            })

            return response;

        } catch (e) {
            console.log(`c'è un problema nella funzione backend ottieniProdotto ${e}`);
        }
    }


    filtroPerCategoria(array, categoria) {

        let arrayDiUscita = [];

        // array.forEach(item => {
        //     if( item["category"] == categoria){
        //         arrayDiUscita.push(item);
        //     }
        // })

        for (let i = 0; i < array.length; i++) {
            //console.log(`ciao ${array[i]}`);
            if (array[i]["category"] == categoria) {
                arrayDiUscita.push(array[i]);
            }
        }
        return arrayDiUscita;
    }



    async ottieniLaptops() {
        try {
            const response = await new Promise((resolve, reject) => {
                fs.readFile("./data.json", (err, res) => {
                    if (err) reject(new Error(err.message));


                    const file = JSON.parse(res);

                    let chiavi = file["products"];
                    //console.log(chiavi);
                    let ultimo = this.filtroPerCategoria(chiavi, "Laptops");
                    //console.log(ultimo);
                    resolve(ultimo);

                })

            })

            return response;

        } catch (e) {
            console.log(`c'è un problema nella funzione ottieniMobiles sul backend ${e}`);
        }
    }


    async ottieniBooks() {
        try {
            const response = await new Promise((resolve, reject) => {
                fs.readFile("./data.json", (err, res) => {
                    if (err) reject(new Error(err.message));


                    const file = JSON.parse(res);

                    let chiavi = file["products"];
                    //console.log(chiavi);
                    let ultimo = this.filtroPerCategoria(chiavi, "Books");
                    //console.log(ultimo);
                    resolve(ultimo);

                })

            })

            return response;

        } catch (e) {
            console.log(`c'è un problema nella funzione ottieniMobiles sul backend ${e}`);
        }
    }

    async ottieniClothings() {
        try {
            const response = await new Promise((resolve, reject) => {
                fs.readFile("./data.json", (err, res) => {
                    if (err) reject(new Error(err.message));


                    const file = JSON.parse(res);

                    let chiavi = file["products"];
                    //console.log(chiavi);
                    let ultimo = this.filtroPerCategoria(chiavi, "Clothings");
                    //console.log(ultimo);
                    resolve(ultimo);

                })

            })

            return response;

        } catch (e) {
            console.log(`c'è un problema nella funzione ottieniMobiles sul backend ${e}`);
        }
    }

    async ottieniBeauty() {
        try {
            const response = await new Promise((resolve, reject) => {
                fs.readFile("./data.json", (err, res) => {
                    if (err) reject(new Error(err.message));


                    const file = JSON.parse(res);

                    let chiavi = file["products"];
                    //console.log(chiavi);
                    let ultimo = this.filtroPerCategoria(chiavi, "Beauty");
                    //console.log(ultimo);
                    resolve(ultimo);

                })

            })

            return response;

        } catch (e) {
            console.log(`c'è un problema nella funzione ottieniMobiles sul backend ${e}`);
        }
    }

    async ottieniFurniture() {
        try {
            const response = await new Promise((resolve, reject) => {
                fs.readFile("./data.json", (err, res) => {
                    if (err) reject(new Error(err.message));


                    const file = JSON.parse(res);

                    let chiavi = file["products"];
                    //console.log(chiavi);
                    let ultimo = this.filtroPerCategoria(chiavi, "Furniture");
                    //console.log(ultimo);
                    resolve(ultimo);

                })

            })

            return response;

        } catch (e) {
            console.log(`c'è un problema nella funzione ottieniMobiles sul backend ${e}`);
        }
    }

}


// let test = new Data();
// let b = Data.istanza();
// let a = b.ottieniCategorie();

// a.then(data => console.log(data));
// .then(res => response.json(res))
// .then(data => console.log(data));
// console.log(test.ottieniCategorie());


module.exports = Data;