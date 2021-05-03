import React,  { Component, useState }  from 'react'
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>hello world</h1>
      <FuncComp initNumber={2}></FuncComp>
      <ClassComp initNumber={2}></ClassComp>
    </div>
  );
}


function FuncComp(props) {
  const [number, setNumber] = useState(props.initNumber);
  const [date, setDate] = useState(new Date().toString());
  const handleBtnClick = () =>{
    setNumber(Math.random())
  }

  const handleDateBtnClick = () => {
    setDate(new Date().toString())
  }

  return (
    <div className="container">
      <h2> function style component </h2>
      <p>Number: {number}</p>
      <p>Date: {date}</p>
      <input type="button" value="random" onClick={handleBtnClick}></input>
      <input type="button" value="date" onClick={handleDateBtnClick}></input>
    </div>
  )
}


class ClassComp extends Component {
  state = {
    number: this.props.initNumber,
    date: (new Date().toString())
  }

  handleRandBtnClick = () => {
    this.setState({
      number: Math.random()
    })
  }

  handleDateBtnClick = () => {
    this.setState({
      date: (new Date().toString())
    })
  }

  render() {
    return (
      <div className="container">
        <h2> class sytle component </h2>
        <p>Number: {this.state.number}</p>
        <p>Date: {this.state.date}</p>
        <input type="button" value="random" onClick={this.handleRandBtnClick}></input>
        <input type="button" value="date" onClick={this.handleDateBtnClick}></input>
      </div>
    )
  }
}


export default App;
