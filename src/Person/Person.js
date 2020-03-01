// A component is basically a fuunction returning a JSX 
import React from 'react';
import './person.css';
import Radium from'radium';

//we can use any argument name in place of prop but props is common term
// if we use class based component in place of funciton then we have to write {this.props.name}
// dynamic components are written within single curly brackets

const person = (props)=>{
    return(
        //Math.floor works as a greatest integer function and Maths.random funtion gives random values between 0 and 1
        // this will work as a dnamic content and it will keep changing one every refresh
        // props.children is used to show anything in innerHTML of fucntion
        <div >
    <p className='info' onClick={props.clicked}>I'm {props.name} and I'm {props.age} years old  {props.children}  {props.k}</p>
    <input type='text' onChange={props.changed}  value={props.name} /* this in know as two way binding */ ></input>
    </div>
    );
}
export default Radium(person);