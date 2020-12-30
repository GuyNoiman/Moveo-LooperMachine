import React, { Component } from 'react';


export default class Button extends React.Component {
    render() {
        let name = (this.props.value) ? "on" : "off";
        var color = (this.props.value) ? '#90EE90' : '#CD5C5C';
        return (
            <div style={{margin:"1.5%", position:"relative", background:"#D3D3D3", width:"10%", marginLeft:"auto", marginRight:"auto", border: "solid", fontWeight:"bold"}}>
                <h3>{this.props.name}</h3>
                <button style={{backgroundColor: color, width:"30%", height:"30%", marginBottom:"2%",}}
                    className="button"
                    onClick={() => this.props.onClick()}
                >
                    {name}
                </button>
                
            </div>
        );
    }

}

