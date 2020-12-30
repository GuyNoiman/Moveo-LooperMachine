import React, { Component } from 'react';
import Button from './Button';

import Bass_Warwick from './sounds/Bass_Warwick.mp3';
import Stutter_breakbeats from './sounds/Stutter_breakbeats.mp3';
import Electric_guitar from './sounds/Electric_guitar.mp3';
import Future_funkBeats from './sounds/Future_funkBeats.mp3';
import Groove from './sounds/Groove.mp3';
import MazePolitics from './sounds/MazePolitics.mp3';
import Pas_Groove from './sounds/Pas_Groove.mp3';
import SilentStar from './sounds/SilentStar.mp3';
import StompySlosh from './sounds/StompySlosh.mp3';

const soundsList = {
    Bass_Warwick: Bass_Warwick,
    Stutter_breakbeats: Stutter_breakbeats,
    Electric_guitar: Electric_guitar,
    Future_funkBeats: Future_funkBeats,
    Groove: Groove,
    MazePolitics: MazePolitics,
    Pas_Groove: Pas_Groove,
    SilentStar: SilentStar,
    StompySlosh: StompySlosh
}

const parameters = [
    {id: "id1", soundName: 'Bass_Warwick'},
    {id: "id2", soundName: 'Stutter_breakbeats'},
    {id: "id3", soundName: 'Electric_guitar'},
    {id: "id4", soundName: 'Future_funkBeats'},
    {id: "id5", soundName: 'Groove'},
    {id: "id6", soundName: 'MazePolitics'},
    {id: "id7", soundName: 'Pas_Groove'},
    {id: "id8", soundName: 'SilentStar'},
    {id: "id9", soundName: 'StompySlosh'}
]


export default class Manager extends Component {

    state = {
        numOfSounds: 0,
    };
    interval = {};

    buttonSwitched = (bool) => {
        (bool) ? 
        this.setState({ numOfSounds: this.state.numOfSounds + 1}, () => this.startPlaying()) : 
        this.setState({ numOfSounds: this.state.numOfSounds - 1}, () => this.startPlaying());
    }

    componentDidMount() {
        localStorage.setItem('sounds',JSON.stringify([]));
    }

    startPlaying = () => {
        let tempNumOfSounds = this.state.numOfSounds;
        if (tempNumOfSounds === 0) {
            clearInterval(this.interval)
        }
        if (tempNumOfSounds === 1) {
            this.interval = setInterval( () => {
                let sounds = JSON.parse(localStorage.getItem('sounds'));
                for (let sound of sounds) {
                    let playing = new Audio(soundsList[sound]);
                    playing.play();
                }
            }, 8000);
        }
        else return;
    }

    renderButtons = () => {
        return parameters.map(button => {
          return <Button id={button.id} soundName={button.soundName} buttonSwitched={this.buttonSwitched} key={button.id}/>
        });
    }
    
    render () {
        return (
            <div>  
                {this.renderButtons()}
            </div>
        );
    } 
}