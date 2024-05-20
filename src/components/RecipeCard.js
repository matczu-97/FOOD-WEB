import CustomImage from './CustomImage';


export default function RecipeCard({recipe})
{
    return (
        <div className="recipe-card">
            <CustomImage imgSrc={recipe.image} pt="65%"/>
            <div className="recipe-card-info" >
               <img className="author-img"src={recipe.authorImg}/> 
               <p className='recipe-title'>{recipe.title}</p>
               <p className='recipe-desc'>lorem ipsum</p>
               <a className="view-btn" href="#!">VIEW RECIPE</a>
            </div>
        </div>
    )
}