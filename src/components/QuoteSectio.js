import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
export default function QuoteSection()
{
    return (
        <div className="section quote">
            <p className="quote-text"><FontAwesomeIcon icon={faQuoteLeft}/>Food is everything we are. it's an extension of nationalist feeling, ethnic feeling, your personal history, your province, your region, your tribe, your grandma. it's inseperable from those from get-go.</p>
            <p className="quote-author">- Anthony Bourdain</p>
        </div>
    )
}