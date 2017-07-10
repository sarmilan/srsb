import React from 'react';
import './App.css';
import {Link} from 'react-router';
import App from './App';

class Review extends React.Component {
    constructor(){
        super()
        this.state = {
            i: 0,
            timer: [5000, 600000, 3600000, 7200000],
            counter: 0
        }
        this.moveCard = this.moveCard.bind(this);
    }

    moveCard(num){
        this.setState({
            i: (this.state.i + num + this.props.cards.length) % this.props.cards.length
        })
    }

    resetTimer(num){
        this.setState({
            counter: (this.state.counter + num)
        })
        setTimeout(function(){ 
            alert("Time for another Review!");
        }, 
        this.state.timer[this.state.counter]);
        console.log(this.state.counter)
    }

    render() {
        return(
            <div>
            <div className="container card">
                <h3>{this.props.cards[this.state.i].title}</h3>
                <h5>{this.props.cards[this.state.i].body}</h5>
                <p className="notes">{this.props.cards[this.state.i].notes}</p>
                <button onClick={(e)=>{this.moveCard(-1)}}>Back</button>
                <button onClick={(e)=>{this.moveCard(1)}}>Next</button>
            </div>
                <center><button className="" onClick={(e)=>{this.resetTimer(1)}}>Done Review</button></center>
            </div>
        )
    }
}

export default Review;