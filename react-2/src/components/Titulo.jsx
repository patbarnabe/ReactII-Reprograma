import '../styles/titulo.css'

function Titulo(props) {
    return (
        <div>
            <h1>{props.children}</h1>
        </div>
    )
}

export default Titulo