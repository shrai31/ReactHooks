import React, { Component } from 'react'

export class RefsDemo extends Component {
    constructor(props){
        super(props)
        this.inputRef = React.createRef();

    }

    componentDidMount(){
        this.inputRef.current.focus();
        console.log(this.inputRef);
    }

    handleClick = () =>{
        console.log(this.inputRef.current.value);
        alert( this.inputRef.current.value)
    } 
    render() {
        return (
            <div style={{alignItems:"center"}}>
                {/* //ref on input filed for focus */}
                <input type="text" ref={this.inputRef} />
                {/* to fetch the data input box  */}
                <button onClick={this.handleClick}>Submit</button>
            </div>
        )
    }
}

export default RefsDemo
