import React, { Component } from 'react';
import './App.css';
import './bootstrap.min.css';
import {Link} from 'react-router';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      cards: [
        {title: "What do we mean when we say HTML is 'semantic'?",
         body: "Semantics elements = elements with a meaning. They clearly explain their function to the developer and the browser.",
         notes: "ex: nav, header, footer...",
         id: 1
        },
        {title: "What is the difference between <div> and <span>?",
         body: "Span is in-line and usually used for small chunks of HTML. Div is block-line and usually used for larger blocks of code.",
         notes: "It's illegal to place in-block elements  inside in-line elements: div inside a span.",
         id: 2
        },
        {
         title: "What does <!DOCTYPE html> do?",
         body: "It is a declaration to the browser informing it what version of HTML to use. Primes the browser to what file it should expect.",
         notes: "Should be the first this in your code, before the <html> tag.",
         id: 3
        },
        {
         title: "When would you use <strong> instead of <b>?",
         body: "They have the same effect on normal web browser rendering engines, but there is a fundamental difference between them. <b> is a style - we know what 'bold' is supposed to look like. <strong> however is an indication of how something should be understood. 'Strong' could (and often does) mean 'bold' in a browser, but it could also mean a lower tone for a speaking program like Jaws (for blind people) or be represented by an underline (since you can't bold a bold) on a Palm Pilot.",
         notes: "<strong> is semantic. <b> is more about style.",
         id: 4
        }
      ],
      id : 5
    }
    this.addCard = this.addCard.bind(this)
    this.delCard = this.delCard.bind(this)
  }

  addCard(title, body, notes, e) {
    e.preventDefault();
    this.setState({
      cards: this.state.cards.concat([{
        title: title, 
        body: body, 
        notes: notes,
        id: this.state.id++
      }]),
    })
  }

  delCard(id){
    console.log(id)
    let tempArr = [];
    for (let i = 0; i < this.state.cards.length; i++){
      if (this.state.cards[i].id !== id){
        tempArr.push(this.state.cards[i])
      }
    }
    this.setState({
      cards: tempArr
    })
  }
  
  render() {
    return (
      <div>
        {React.cloneElement(this.props.children, {cards: this.state.cards, addCard: this.addCard, delCard: this.delCard, id: this.state.id})}
      </div>
    );
  }
}

export default App;