import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {FaFacebook, faTwitter, faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons"

export default function ChiefCard({chief})
{
    return (
    <div className="chief-card">
        <img src={chief.img} alt=""/>
        <div className="chief-card-info">
            <h3 className="chief-card-name">{chief.name}</h3>
            <p className="chief-recipe-count">Recipes: <b>{chief.recipesCount}</b></p>
            <p className="chief-cuisine">Cuisine: <b>{chief.cuisine}</b></p>
            <div className="chief-icons">
                <a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook}/> </a>
                <a href="https://www.twitter.com/"><FontAwesomeIcon icon={faTwitter}/></a>
                <a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram}/></a>
            </div>
        </div>
    </div>
    )
}