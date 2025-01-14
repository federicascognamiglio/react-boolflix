function AppCard({ title, originalTitle, language, vote }) {
    return (
        <div className="col">
            <div className="card">
                <h3>{title}</h3>
                <h4>{originalTitle}</h4>
                <span>{language}</span>
                <span>{vote}</span>
            </div>
        </div>
    )
}

export default AppCard