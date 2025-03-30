import "../App.css"
import SearchBar from "./SearchBar"
import logo from "../../Asset/logo.png"

function MiaNavbar() {

    return (
        <div className="navbar">
            <div>
                <img src={logo} ></img>
            </div>

            <div>
                <SearchBar></SearchBar>
            </div>

        </div>
    )

}

export default MiaNavbar