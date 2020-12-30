import React, { Component } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export default class Button extends Component {

    state = {
        soundName: this.props.soundName,
        isOn: false,
    };

    update = () => {
        this.props.buttonSwitched(!this.state.isOn);
        let sounds = JSON.parse(localStorage.getItem('sounds'))
        if (!sounds) {
            sounds = []
        }
        if (!this.state.isOn) {
            sounds.push(this.state.soundName)
            localStorage.setItem('sounds', JSON.stringify(sounds))
        } 
        else {
            let index = sounds.indexOf(this.state.soundName)
            if (index > -1) { sounds.splice(index, 1) }
            localStorage.setItem('sounds', JSON.stringify(sounds))
        }
        this.setState({ isOn: !(this.state.isOn)}, () => this.props.buttonSwitched(this.state.isOn) );
    }

    render () {
        return (
            <div style={{margin:"1.5%", position:"relative", background:"#D3D3D3", width:"10%", marginLeft:"auto", marginRight:"auto", border: "solid", fontWeight:"bold"}}>
                <FormControlLabel
                    control={<Switch checked={this.state.isOn} onChange={this.update} name="id0" color="primary" />}
                    label= {this.state.soundName}
                    labelPlacement= 'top'
                />   
            </div>
        );
    } 
}