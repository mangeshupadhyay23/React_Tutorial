import React,{useState} from 'react';
import './App.css'
import Person from './Person/Person';
//hooks is nothing but basically use of function in functionality component for example usestate gives functions to apply on states
//useState hook helps us with using state without a class component
//useState approach or class approach both an be used 
//hooks start with keyword hook
//useState stores exactly two elements one is state and the other is updation of state
//so here we created a use state containing an array of two element personState element gives us acess to the person state and .......
//setpersonState gives us access to the switchNameHandler function 
//in React you can have a function wihtin a function 
//while updating the states it replace the initial state with updated state so if u want to keep some state constant u have to manually...
//provide it
//if u wont define the updation in certain state then it will be shown as missing cause it have to be replaced with something
//for managing a state or making a state in hook u can easily make it without any updation element
//passing a method or a funciton from one component to other
//bind property can be used to bound an argument of a function
const App=(props)=>{
 
    const [personState,setpersonState]=useState({
      person:[
        {name:'Max',age:19},
        {name:'Jay',age:23},
        {name:'Suzie',age:28}
      ]
    });

    const [otherstate,setotherstate]=useState({
        otherperson:[
          {name:'Bharat',age:19}
        ]
    });
    const  changeHandler=(event)=>{
            setpersonState({
              person:[
                {name:'Max',age:19},
                {name:event.target.value,age:23},
                {name:'Suzie',age:28}
              ]
            });
          }

    const switchNameHandler=(newName)=>{
      setpersonState({
        person:[
          {name:newName,age:21},
          {name:'Mangesh',age:29},
          personState.person[2]=personState.person[2]
        ]
      });
    }

    return(
      <div>
        <h1>Hello REACT</h1>
        <p>this is working</p>
        <button onClick={switchNameHandler.bind(this,'maximilian')}>Switch Name</button>
        <Person name={personState.person[0].name} age={personState.person[0].age}><br/>and my hobbies are drawing</Person>
        <Person name={personState.person[1].name} age={personState.person[1].age} click={switchNameHandler.bind(this,'Max!')} changed={changeHandler}/>
        <Person name={personState.person[2].name} age={personState.person[2].age}/>
        <Person name={otherstate.otherperson[0].name} age={otherstate.otherperson[0].age}/>
      </div>
    );
  
}

export default App;