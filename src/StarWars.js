import React, { Component } from 'react'
import Title from './Title'
import CharacterInfo from './CharacterInfo'
import './StarWars.css'

class StarWars extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userInputNum: '',
            starWarsData: null,
            list: [],
        }
    }

    characterInfo() {
        const {starWarsData} = this.state
        if (starWarsData === null) {
            return undefined
          }

        const {name, height, mass, hairColor, eyeColor} = starWarsData

        return (
            <div className="characterInfo">
            <CharacterInfo 
                name={name} 
                height={height} 
                mass={mass} 
                hairColor={hairColor} 
                eyeColor={eyeColor}/>
            <button onClick={(event) => this.saveCharacter(name)}>
                Save </button>
            </div>
        )
    }

    saveCharacter(value) {
        this.setState({
            list: [this.state.list, value]
        })
    }

    characterInfoList() {
        const {list} = this.state
        const characters = list.map((character) => {
            return <div>{character}</div>
        })
        return characters
    }



    handleSubmit(event) {
        const {userInputNum} = this.state
        const num = userInputNum
        const url = `https://swapi.dev/api/people/${num}`
        const response = fetch(url)
        event.preventDefault()

        response.then(res => {
                return res.json()
        }).then((json) => {
            this.setState({starWarsData: json})
        }).catch((err) => {
            this.setState({starWarsData: null})
        })}

    render() {
        const {userInputNum} = this.state
        const character = this.characterInfo()
        const savedCharacters = this.characterInfoList()

        return (
            <div>
                <form onSubmit={event => this.handleSubmit(event)}>
                    <input value={userInputNum}
                        onChange={event =>
                            this.setState({userInputNum: event.target.value})}
                            placeholder="character number"
                        />
                    <button>submit</button>
                </form>
                {character}
                <h2>Your Saved Characters</h2>
                {savedCharacters}
            </div>
        )
    }
}

export default StarWars
