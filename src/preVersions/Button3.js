import React, { Component } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export default class Button extends Component {
    state = {
        id: this.props.id,
        soundName: this.props.soundName,
        audio: this.props.audio,
        isOn: false,
        loopNumber: this.props.loopNumber,
        // sound: soundManager.setup({ url: '/path/to/swfs/', flashVersion: 9, ignoreMobileRestrictions: true })
    };
    

    update = () => {
        let isOnTemp = !this.state.isOn;
        // this.props.buttonSwitched(!this.state.isOn);
        this.setState({ isOn: isOnTemp});
        this.props.buttonSwitched(this.state.id, isOnTemp);   
    }

    // componentDidUpdate(prevProps) {
    //     let prevLoopNum = prevProps.loopNumber;
    //     let currLoopNumber = this.props.loopNumber;
    //     console.log("im in componentDidUpdate,", prevLoopNum, currLoopNumber);

    //     if ( prevLoopNum !== currLoopNumber) {
    //         this.setState({loopNumber: currLoopNumber}, () => this.state.isOn ? this.state.audio.play() : this.state.audio.pause());
    //         console.log("im in if,", prevLoopNum, currLoopNumber);
    //     }
    // }


    render () {
        return (
            <div style={{margin:"3%", position:"relative", background:"grey", width:"10%", marginLeft:"auto", marginRight:"auto", border: "solid", fontWeight:"bold"}}>
                <FormControlLabel
                    control={<Switch checked={this.state.isOn} onChange={this.update} name="id0" color="primary" />}
                    label= {this.state.soundName}
                    labelPlacement= 'top'
                />   
            </div>
        );
    } 
}