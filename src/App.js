import React from 'react';
import logo from './logo.svg';
import './App.css';
import Listitems from './Listitems'
import {library} from'@fortawesome/fontawesome-svg-core'
import {faTrash} from'@fortawesome/free-solid-svg-icons'


library.add(faTrash);
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
   this.deleteItem=this.deleteItem.bind(this)
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
     if(newItem.text!==""){
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
   
   deleteItem(key){
     const filteredItems=this.state.items.filter(item=>item.key!==key);
     this.setState({
       items:filteredItems
     })

   }
  render() {
    return (
      <div className="App" onSubmit={this.addItem}>
        <header>
        <form id="to-do-form">
        <div>
        <h1>Todo app</h1>
        <input type="text" placeholder="enter your info" value={this.state.currentItem.text} onChange={this.handleInput}/>
        <button type="submit" >Add</button>
      </div>
        </form>
        </header> 
        <Listitems items={this.state.items} deleteItem={this.deleteItem}/>
      </div>
    
    )
  }
}




export default App;
