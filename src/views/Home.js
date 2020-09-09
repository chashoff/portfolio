import React, { Component } from 'react';
import ParticlesBg from 'particles-bg';
import '../styles/Home.css';
import GridItem from '../components/gridItem';
import $ from 'jquery';
import Social from '../components/social';

class Home extends Component {
    state = {
        "blog": false,
        "about": false,
        "projects": false,
        "contact": false,
        "breakOne": 0,
        "breakTwo": 0,
        "breakThree": 0,
    }

    componentWillMount() {
        const x = $( window ).height();
        let cut = x/10;
        let breakOne = cut*4;
        let breakTwo = cut *3;
        let breakThree = cut *5;
        this.setState({breakOne: breakOne});
        this.setState({breakTwo: breakTwo});
        this.setState({breakThree: breakThree})
    }

    componentDidMount() {
        console.log(this.state.breakOne)
    }

    enterZoneChange = (x) => {
        this.setState({[x]: true});
    }

    leaveZoneChange = (x) => {
        this.setState({[x]: false});
    }

    render() {
        let width = $( window ).width();
        return (
            <div style={{ position: 'relative'}}>
                <ParticlesBg type="cobweb" bg={true} />
                <Social />
                {
                    (width > 1000) ? <div className="column-grid">
                    <div /> 
                    <GridItem
                        link="/construction"
                        margin={this.state.breakOne}
                        title="Blog"
                        description="Checkout all of the problems I have had while coding, and what I have done to fix them! Have any coding problems? Let me know so I can take a stab at it!" 
                        borderMain="4px solid lightgreen"
                        borderSecondary="4px solid lightgreen"
                        cssContainer="grid-item-container-blog"
                        stateValue={this.state.blog}
                        stateString="blog"
                        enter={this.enterZoneChange}
                        leave={this.leaveZoneChange}
                    />
                    <GridItem
                        link="/about" 
                        margin={this.state.breakTwo}
                        title="About Me"
                        description="This is all about me. Why I chose to become a developer, and my life before my development career!"
                        borderMain="4px solid red"
                        borderSecondary="4px solid red"
                        cssContainer="grid-item-container-about"
                        stateValue={this.state.about}
                        stateString="about"
                        enter={this.enterZoneChange}
                        leave={this.leaveZoneChange}
                    />
                    <GridItem
                        link="/projects" 
                        margin={this.state.breakOne}
                        title="Projects"
                        description="Checkout all my projects I have done over the years! There are some pretty cools in here aye!"
                        borderMain="4px solid lightblue"
                        borderSecondary="4px solid lightblue"
                        cssContainer="grid-item-container-projects"
                        stateValue={this.state.projects}
                        stateString="projects"
                        enter={this.enterZoneChange}
                        leave={this.leaveZoneChange}
                    />
                    <GridItem
                        link="/contact"
                        margin={this.state.breakThree}
                        title="Contact"
                        description="Want to connect? Here is all my social media information as well!"
                        borderMain="4px solid purple"
                        borderSecondary="4px solid purple"
                        cssContainer="grid-item-container-contact"
                        stateValue={this.state.contact}
                        stateString="contact"
                        enter={this.enterZoneChange}
                        leave={this.leaveZoneChange}
                    />
                    <div />
                </div> : console.log("test") 
                }   
            </div>
        )
    }
}
export default Home;