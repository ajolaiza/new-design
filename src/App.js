import React from 'react';
import logo from './logo.svg';
import './App.css';
import Listitems from './Listitems'
 class App extends React.Component{
   constructor(props) {
     super(props)
   
     this.state = {
       items:[],
       currentItem:{
         text:'',
         key:''
       }   
   }
   this.handleInput=this.handleInput.bind(this);
   this.addItem=this.addItem.bind(this);
  }
   handleInput(e){
     this.setState({
       currentItem:{
         text:e.target.value,
         key:Date.now()

       }
     })
   }
   addItem(e){
     e.preventDefault();
     const newItem =this.state.currentItem;
     console.log(newItem);
     if(newItem.text==""){
       const newItems=[...this.state.items,newItem];
       this.setState({
         items:newItems,
         currentItem:{
           text:'',
           key:''
         }
       })

     }


   }
   
  render() {
    return (
      <div className="App" onSubmit={this.addItem}>
        <header>
        <form id="to-do-form">
        <div>
        <h1>Hello World</h1>
        <input type="text" placeholder="enter your info" value={this.state.currentItem.text} onChange={this.handleInput}/>
        <button type="submit" >Add</button>
      </div>
        </form>
        </header> 
        <Listitems items={this.state.items}/>
      </div>
    
    )
  }
}




export default App;
