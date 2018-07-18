import React, { Component } from 'react';
import './ProfileCard.css';

export class ProfileCard extends Component {
    constructor(props) {
        super(props);
        this.imglink = "https://instagram.fphl2-1.fna.fbcdn.net/vp/a8b9e98755727e6f895e259d1bf0ec81/5BDEA68A/t51.2885-19/s150x150/26066956_313963222429026_8475507373220298752_n.jpg"
    }

    render() {
        return (
            <div style={{ backgroundColor: '#2d2d2d', color: '#5c5c5c', padding: '20px'}}>
                <ul style={{ listStyleType: 'none' }}>
                    <img src={this.imglink} style={{ display: 'block'}} />
                    <li>Brian Phillips</li>
                    <li>University of Delaware</li>
                    <li>Class of 2020</li>
                    <li>Computer Science</li>

                </ul>
            </div>
        )
    }


}