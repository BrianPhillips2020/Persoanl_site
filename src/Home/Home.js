import React, { Component } from 'react';
import './Home.css';

let resizeTimer;

export class Home extends Component {
    constructor(props){
        super(props);
        this.rootRef = React.createRef();
        this.width = window.innerWidth;
        this.height = window.innerHeight;
    }


    render() {
        return (
            <div style={{height: '100vh'}}>
                <div className='navbar'>
                    <div style={{padding: '10px'}}>Home</div>
                    <div style={{padding: '10px'}}>Contact</div>
                    <div style={{padding: '10px'}}>Resume</div>
                </div>
                <div>
                    <h1 className='title'>Brian Phillips</h1>
                </div>
            </div>
        )
    }

    updateDimensions() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            this.width = window.innerWidth;
            this.height = window.innerHeight * .9875;
        }, 100);
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions.bind(this))
    }
}
    



