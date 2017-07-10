import React from 'react';
import {Link} from 'react-router';

class CardContainer extends React.Component {
  render(){
    return(
      <div className="row">
      <div className="col-md-5 red-bg">
          <LeftSide addCard={this.props.addCard}/>
        </div>
        <div className="col-md-7 orange-bg">
          <RightSide cards={this.props.cards} delCard={this.props.delCard} />
      </div>
      </div>
    );
  }
}

class LeftSide extends React.Component {
  constructor(){
    super()
    this.state = {
      title: "",
      body: "",
      notes: "",
      id: ""
    }
  }
  onChange(e, value){
    this.setState({
      [value] : e.target.value
    })
  }
  render() {
    console.log(this.state)
    return (
      <div className="container">
        <h1>CREATE CARDS</h1>
        <form onSubmit={(e)=>{this.props.addCard(this.state.title, this.state.body, this.state.notes, e)}} className="form">
          <h5>Title:</h5>
          <input className="form-control" type="text" onChange={(e)=>{this.onChange(e,"title")}} />
          <h5>Body:</h5>
          <textarea className="form-control" rows="9" onChange={(e)=>{this.onChange(e,"body")}}></textarea>
          <h5>Notes:</h5>
          <input className="form-control" type="text" onChange={(e)=>{this.onChange(e,"notes")}} />
          <br /><input className="submitButton" type="submit" />
          <br /><Link to= "/review"><button className="runButton" >RUN</button></Link>
        </form>
      </div>
    );
  }
}

class RightSide extends React.Component {
  
  render() {
    let cards = this.props.cards;
    let eachCard = cards.map(card => 
      <div className="card">
            <h3>{card.title}</h3>
            <h5>{card.body}</h5>
            <p className="notes">{card.notes}</p>
            <button className="deleteButton" onClick={(e)=>{this.props.delCard(card.id)}}>DELETE</button>
      </div>
    )

    return (
      <div className="container">
        <h1>REVIEW CARDS</h1>
        {eachCard}
      </div>
    )
  }
}

export default CardContainer;