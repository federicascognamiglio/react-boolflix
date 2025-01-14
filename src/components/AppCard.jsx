import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";


function AppCard({ title, originalTitle, language, vote, img }) {
    // FUNCTIONS
    /**
     * Function that renders flag based on given language
     * @param {*} languageInitials
     * @returns {string} 
     */
    const setLanguageFlag = (languageInitials) => {
        let languageIcon;
        if (languageInitials === "en") {
            languageIcon = "./en.png"
        } else if (languageInitials === "it") {
            languageIcon = "./it.png"
        } else {
            languageIcon = "./placeholder.png"
        }
        return languageIcon
    }

    // Rating Icons
    /**
     * Function that render n stars based on given rating
     * @param {num} rating 
     * @returns {jsx}
     */
    const starRating = (rating) => {
        const integerRating = Math.ceil((rating / 2) + 1);
        const maxRating = 5;
        return (
            <div>
                {Array.from({ length: maxRating }, (_, index) => (
                    <span key={index}>{index < integerRating ? <FontAwesomeIcon icon={faStar} /> : <FontAwesomeIcon icon={regularStar} />}</span>
                ))}
            </div>
        )
    }

    return (
        <div className="col">
            <div className="card">
                <div className="card-img">
                    <img src={img} alt="Movie Poster" />
                </div>
                <div className="card-info">
                    <h3>{title}</h3>
                    <h4>{originalTitle}</h4>
                    <img src={setLanguageFlag(language)} alt="Language Flag" className="language-icon" />
                    {starRating(vote)}
                </div>
            </div>
        </div>
    )
}

export default AppCard