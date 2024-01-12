import "./index.css"

export default function authentication_text ({text, description}) {
    return (
            <div>
                <h1 className="h1_text">{text}</h1>
                <h2 className="description_text">{description}</h2>
            </div>
    )
}