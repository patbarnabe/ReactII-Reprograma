import '../styles/titulo.css'

function Titulo(props) {
    return (
        <div class="div_titulo">
            <h1 class="titulo">{props.children}</h1>
        </div>
    )
}

export default Titulo