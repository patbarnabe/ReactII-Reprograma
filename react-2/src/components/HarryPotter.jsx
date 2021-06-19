import '../styles/harryPotter.css'
import React, {useState, useEffect} from 'react'

const HarryPotter = () => {

    const [personagens, setPersonagens] = useState([])
    const [filtroPersonagem, setFiltroPersonagem] = useState([])
    const [busca, setBusca] = useState("")

    useEffect(() => {
        fetch('http://hp-api.herokuapp.com/api/characters')
            .then(resposta => resposta.json())
            .then(dados => setPersonagens(dados))
    }, [])

    useEffect(() => {
        setFiltroPersonagem(
            personagens.filter(personagem => {
                return personagem.name.includes(busca)
            })
        )
    }, [busca, personagens])

    return (
        <div className="main">
            <input placeholder="Digite o nome de um personagem" onChange={e => {setBusca(e.target.value)}} />
            {filtroPersonagem.map(personagem => (
                <div key={personagem.actor}>
                    <img src={personagem.image} alt={personagem.name}/>
                    <p>{personagem.name}</p>
                </div>
            ))}
        </div>
    )
}

export default HarryPotter