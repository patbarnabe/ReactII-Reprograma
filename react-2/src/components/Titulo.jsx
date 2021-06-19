import '../styles/titulo.css'

function Titulo(props) {
    return (
        <div className="div_titulo">
            <h1 className="titulo">{props.children}</h1>
        </div>
    )
}

export default Titulo