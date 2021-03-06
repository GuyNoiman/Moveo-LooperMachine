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
    };

    update = () => {
        let isOnTemp = !this.state.isOn;
        this.setState({ isOn: isOnTemp});
        this.props.buttonSwitched(this.state.id, isOnTemp);   
    }

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