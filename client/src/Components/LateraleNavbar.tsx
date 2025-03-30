import "../App.css"

function LateraleNavbar() {

    const category: string[] = ["All", "Mobiles", "Laptops", "Books", "Clothings", "Beauty", "Forniture"];

    return (
        <div className="laterale">

            <ul>
                {
                    category.map(item => {
                        return (
                            <>
                                <li>
                                    <label>
                                        <input type="radio" name="category" value={item} />
                                        {item}
                                    </label>
                                </li>

                            </>

                        )
                    })
                }
            </ul>
        </div>
    )
}

export default LateraleNavbar