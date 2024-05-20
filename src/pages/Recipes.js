import PreviousSearches from "../components/PreviousSearches"
import RecipeCard from "../components/RecipeCard"
export default function Recipes() {
const recipes = [
    {
        title: "Chicken Pan Pizzah",
        image:"/img/gallery/img_1.jpg",
        authorImg: "/img/top-chiefs/img_2.jpg"
    },
    {
        title: "Pasta",
        image:"/img/gallery/img_4.jpg",
        authorImg: "/img/top-chiefs/img_3.jpg"
    },  
    {
        title: "Burger",
        image:"/img/gallery/img_5.jpg",
        authorImg: "/img/top-chiefs/img_4.jpg"
    }
]
return(
    <div>
        <PreviousSearches/>
        <div className="recipes-container">
        {
            recipes.map((recipe,index) => (
                <RecipeCard key={index} recipe={recipe}/>
            ))
        }
        </div>
    </div>   
)
}
