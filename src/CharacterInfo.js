import React from 'react'

function CharacterInfo(props) {
    const { name, height, mass, hairColor, eyeColor, } = props
    
    return (
        <div className="character">
            <h2>{name}</h2>
            <h4>Height: {height}</h4>
            <h4>Weight: {mass}</h4>
            <h4>Hair Color: {hairColor}</h4>
            <h4>Eye Color: {eyeColor}</h4>
        </div>
    )
}

export default CharacterInfo