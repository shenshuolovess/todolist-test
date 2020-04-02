import React,{ Component } from "react";
import './ListItem.css';
class NewItem extends Component
{
    constructor(props){
        super(props);
        this.state={
            inputContent: ''
        }
    }

    onInputChange=(event)=>{
        this.setState({
            inputContent: event.target.value
        })
    }

    onAddBtnClick=()=>{
            this.props.addItem(this.state.inputContent) 
            this.setState({
                inputContent:''
            })
    }

    render(){
        return(
            <div>
                <input id="new-todo" value={this.state.inputContent} onChange={this.onInputChange}/>
                <button id="Add" onClick={this.onAddBtnClick}>Add</button>
            </div>
        ) 
    }
}

export default NewItem;