import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";


function AppCard({ item }) {
    // Variables
    const imagesBaseApi = "https://image.tmdb.org/t/p/";

    // FUNCTIONS
    /**
     * Function that renders flag based on given language
     * @param {string} languageInitials
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
        const integerRating = Math.ceil(rating / 2);
        const maxRating = 5;
        return (
            <li className="stars">
                Voto:
                {Array.from({ length: maxRating }, (_, index) => (
                    <span key={index}>{index < integerRating ? <FontAwesomeIcon icon={faStar} /> : <FontAwesomeIcon icon={regularStar} />}</span>
                ))}
            </li>
        )
    }

    // Poster Images
    const posterImg = (posterPath) => posterPath ? `${imagesBaseApi}w342${item.poster_path}` : "https://placehold.co/342x515"

    return (
        <div className="col">
            <div className="card">
                <img className="card-img" src={posterImg(item.poster_path)} alt="Movie Poster" />
                <div className="card-info">
                    <ul>
                        <li>TITOLO: <span className="info-text">{item.title || item.name}</span></li>
                        <li>Titolo originale: <span className="info-text">{item.original_title || item.original_title}</span></li>
                        <li>Lingua: <img src={setLanguageFlag(item.original_language)} alt="Language Flag" className="language-icon" /></li>
                        {starRating(item.vote_average)}
                        <li>Overview: <span className="info-text">{item.overview.slice(0, 80) + "..."}</span></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AppCard