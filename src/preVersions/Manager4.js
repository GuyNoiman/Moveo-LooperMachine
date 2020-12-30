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



export default class Manager extends Component {

    state = {
        loopNumber: 0,
        numOfSounds: 0,
        interval: {},
        isPlaying: false,
        firstRun: true,
        activeComponents: [false, false, false, false, false, false, false, false, false]
    };

    parameters = [
        {id: 0, soundName: 'Bass_Warwick', isPlaying: false, audio: new Audio(Bass_Warwick)},
        {id: 1, soundName: 'Stutter_breakbeats', isPlaying: false, audio: new Audio(Stutter_breakbeats)},
        {id: 2, soundName: 'Electric_guitar', isPlaying: false, audio: new Audio(Electric_guitar)},
        {id: 3, soundName: 'Future_funkBeats', isPlaying: false, audio: new Audio(Future_funkBeats)},
        {id: 4, soundName: 'Groove', isPlaying: false, audio: new Audio(Groove)},
        {id: 5, soundName: 'MazePolitics', isPlaying: false, audio: new Audio(MazePolitics)},
        {id: 6, soundName: 'Pas_Groove', isPlaying: false, audio: new Audio(Pas_Groove)},
        {id: 7, soundName: 'SilentStar', isPlaying: false, audio: new Audio(SilentStar)},
        {id: 8, soundName: 'StompySlosh', isPlaying: false, audio: new Audio(StompySlosh)}
    ];

    audioFiles = [new Audio(Bass_Warwick), new Audio(Stutter_breakbeats), new Audio(Electric_guitar), new Audio(Future_funkBeats), 
        new Audio(Groove), new Audio(MazePolitics), new Audio(Pas_Groove), new Audio(SilentStar), new Audio(StompySlosh)
    ];
    
    buttonSwitched = (id, bool) => {
        let tempNumOfSounds = this.state.numOfSounds;
        (bool) ? tempNumOfSounds = tempNumOfSounds + 1 : tempNumOfSounds = tempNumOfSounds - 1;
        let convertedID = Number(id);
        console.log("im in button, id button", convertedID, "bool is", bool)
        let tempActiveComponents = this.state.activeComponents;
        tempActiveComponents[convertedID] = bool;
        this.setState((state) => {
            return {activeComponents: tempActiveComponents, numOfSounds: tempNumOfSounds}
        })
        console.log("im in Manager-button, the new state is", this.state.activeComponents, " the tempNumOfSoumds is" , tempNumOfSounds);
        if (this.state.firstRun) this.startPlaying();
    }

    startPlaying() {
        console.log("im in startPlaying", this.state.firstRun, this.state.numOfSounds, this.state.isPlaying);
        let isFirstRun = this.state.firstRun;
        if (isFirstRun) {
            // let intervalTemp = setInterval(this.playing, 8000);
            this.setState((state) => {
                return {interval: setInterval(this.playing, 7990)}
            });
            console.log("in start playing, loop num is", this.state.loopNumber);
        }
        else return;
    }

    playing = () => {
        console.log("in playing func");
        let tempActiveComponents = this.state.activeComponents;
        tempActiveComponents.forEach((bool, index) => { 
            if (bool) {
                console.log("in play forEachLoop", bool, index);
                let sound = this.audioFiles[index];
                sound.play();
            }
        });
    }

    renderButtons = () => {
        return this.parameters.map(button => {
          return <Button id={button.id} soundName={button.soundName} audio={button.audio} loopNumber={this.state.loopNumber} buttonSwitched={this.buttonSwitched} key={button.id}/>
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