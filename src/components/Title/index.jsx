import './title.css'

export default function Title({children, name}) {
    return(
        <div className="title">
            {children}
            <p>{name}</p>
        </div>
    )
}