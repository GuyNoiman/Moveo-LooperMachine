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



export default class Manager extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeComponents: Array(9).fill(false),
            firstRun: true,
            numOfSounds: Number(0),
            interval: false,
        };
        this.parameters = [
            "Bass_Warwick", "Stutter_breakbeats", "Electric_guitar", "Future_funkBeats", 
            "Groove", "MazePolitics", "Pas_Groove", "SilentStar", "StompySlosh"
        ];
        this.audioFiles = [new Audio(Bass_Warwick), new Audio(Stutter_breakbeats), new Audio(Electric_guitar), new Audio(Future_funkBeats), 
            new Audio(Groove), new Audio(MazePolitics), new Audio(Pas_Groove), new Audio(SilentStar), new Audio(StompySlosh)
        ];
    }
  
    handleClick(i) {
        let activeComponents = this.state.activeComponents.slice();
        let tempNumOfSounds = this.state.numOfSounds;
        tempNumOfSounds = (activeComponents[i]) ? tempNumOfSounds - 1 : tempNumOfSounds + 1;
        activeComponents[i] = !activeComponents[i];
        this.setState({activeComponents: activeComponents, numOfSounds: tempNumOfSounds});
        if (this.state.firstRun && tempNumOfSounds > 0) this.startPlaying();
    }

    startPlaying = () => {
        console.log("im in startPlaying", this.state.firstRun, this.state.numOfSounds, this.state.isPlaying);
        this.setState({interval: setInterval(this.playing, 8000)});
    }

    playing = () => {
        console.log("in playing func");
        let tempActiveComponents = this.state.activeComponents;
        let numOfSounds = this.state.numOfSounds;
        if (numOfSounds === 0 && this.state.interval !== false) {
            clearInterval(this.state.interval);
            this.setState({interval: false, firstRun: true})
        }
        else {
            for (let i = 0; i < tempActiveComponents.length; i++) {
                const bool = tempActiveComponents[i];
                let sound = this.audioFiles[i];
                if (bool) {
                    sound.play();
                }
                else {
                    sound.pause();
                }
            }
        }
    }
  
    renderButton(i) {
        return (
            <Button
                value={this.state.activeComponents[i]}
                name={this.parameters[i]}
                onClick={() => this.handleClick(i)}
            />
        );
    }
  
    render() {
        return (
            <div>
                <div style={{flexDirection: "row", display: "flex"}}>
                    {this.renderButton(0)}
                    {this.renderButton(1)}
                    {this.renderButton(2)}
                    {this.renderButton(3)}
                </div>
                <div style={{flexDirection: "row", display: "flex"}}>
                    {this.renderButton(4)}
                    {this.renderButton(5)}
                    {this.renderButton(6)}
                    {this.renderButton(7)}
                </div>
            </div>
        );
    }
}