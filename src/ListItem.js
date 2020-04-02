import React, { Component } from 'react';
import './ListItem.css';

class ListItem extends Component{
    constructor(props) {
        super(props)
        this.change = this.change.bind(this)
      }
    change() {
        const {changeItem, index} = this.props
        changeItem(index)
    }
    render(){
        const item=this.props.item
        if(item.done){
           return <pre id="done-item">{item.content}</pre>
        }else{
            return <p id="item" onClick={this.change}>{item.content}</p>
        }
    }
}

export default ListItem;