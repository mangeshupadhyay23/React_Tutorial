import React from 'react';
import Person from './Person/Person';



const Persons  = (props)=> 
            props.persons.map((single,index)=>{

                return <Person 
                name={single.name} 
                key={single.id} 
                age={single.age}
                clicked={()=>props.clicked(index) } 
                changed={(event)=>props.changed(event,single.id)}
                //we creadted an anonymus funciton that the changhandler will work on event of that specific element of our list
                />
                
            })
        
export default Persons;