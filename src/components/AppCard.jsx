function AppCard({ title, originalTitle, language, vote, img }) {
    // Language Icon Check
    let languageIcon;
    if (language === "en") {
        languageIcon = "./en.png"
    } else if (language === "it") {
        languageIcon = "./it.png"
    } else {
        languageIcon = "./placeholder.png"
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
                    <img src={languageIcon} alt="Language Flag" className="language-icon" />
                    <span>{vote}</span>
                </div>
            </div>
        </div>
    )
}

export default AppCard