import React, { Component } from 'react';
import Typed from 'react-typed';
import '../styles/Soon.css';

class Soon extends Component {
    render(){
        return(
            <div className="construction-container">
                    <Typed
                    strings={[
                        'This page is currently under construction!']}
                        typeSpeed={30}
                        backSpeed={50}
                        className="typed-js typed-fonts">
                    </Typed>
            </div>
        )
    }
}
export default Soon;