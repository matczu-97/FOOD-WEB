import ChiefCard from "./ChiefCard"

export default function ChiefsSection()
{
    const chefs = [
        {
        name: "Juan Carlos",
        img:"/img/top-chiefs/img_1.jpg",
        recipesCount:"10",
        cuisine:"Mexican"}
    ]
    return(
    <div className="section chiefs">
        <h1 className="title">Our Top Chiefs</h1>
        <div className="top-chiefs-container">
        <ChiefCard chief={chefs[0]}/>
        <ChiefCard chief={chefs[0]}/>
        <ChiefCard chief={chefs[0]}/>
        <ChiefCard chief={chefs[0]}/>
        <ChiefCard chief={chefs[0]}/>
        <ChiefCard chief={chefs[0]}/>
        </div>
    </div>
    )
}