import React, { Component } from 'react';
import './Home.css';


let resizeTimer;
let backgroundurl = 'https://i.imgur.com/OT8AGYH.png';

export class Home extends Component {
    constructor(props) {
        super(props);
        this.rootRef = React.createRef();
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.cardsplit = .015;
        this.navsplit = 0.9;
    }


    render() {
        return (
            <div style={{}}>
                <div className='navbar' style={{ height: this.height * (1 - this.navsplit) }}>
                    <div style={{ paddingLeft: '10px', paddingRight: '10px', paddingTop: '30px' }}>Home</div>
                    <div style={{ paddingTop: '30px'}}>Contact</div>
                    <div style={{ paddingLeft: '10px', paddingTop: '30px' }}>Resume</div>
                </div>
                <div id='title' className='background' style={{ height: this.height * this.navsplit}}>
                    <div className='title'>Brian Phillips</div>
                </div>
            </div>
        )
    }

    updateDimensions() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            this.width = window.innerWidth;
            this.height = window.innerHeight;
        }, 100);
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions.bind(this))
    }
}




