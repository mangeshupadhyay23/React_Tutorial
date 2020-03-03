import React from 'react';
import './App.css';
import Persons from '../Components/Persons/Persons';



class App extends React.Component{
    state={
        persons:[
            {id:'a',name:'Max',id:20},
            {id:'b',name:'Jay',id:19},
            {id:'c',name:'Suzine',id:23}
        ],
        showname:false
    }
    clickHandler=()=>{
        this.setState({
            persons:[
                {id:'a',name:'Maximillian',age:20},
                {id:'b',name:'Mangesh',age:19},
                {id:'c',name:'Sophie',age:23}
            ]
            
        })
    }
  
        changeHandler=(event,id)=>{
            //when we click on an element its id will be taken i.e. id
            //then we use findIndex function which checkes id of each element and the element whose id is equal to the id that is selected in event
            //will be  stored as the const singleIndex
            //now me can apply the set state fucntion on that element 
            //findIndex funtions give an index
            const singleIndex=this.state.persons.findIndex(p => p.id === id);
            
            const single={
                ...this.state.persons[singleIndex]
            };

            single.name=event.target.value;

            const persons=[...this.state.persons];

            persons[singleIndex]=single;

            this.setState({ persons:persons})
    }
    toggleHandlder=()=>{
        this.setState({
            persons:[
                {id:'a',name:'Max',age:20},
                {id:'b',name:'Jay',age:19},
                {id:'c',name:'Suzine',age:23}
            ],
            showNames:!this.state.showNames
        })

    }

    deleteHandler=(index)=>{
        //HERE WE directly operate original state which is not considered as a good practice so we use slice method
        //const persons=this.state.persons.slice();
        const persons=[...this.state.persons];//spread operator a new array is being used now WITHOUT 
        persons.splice(index,1);//here we removed 1 element from persons state defined with index 'index' 
        this.setState({persons:persons})//here we set the state persons to the persons state that we created after splicing 1 element

    }
    
    


    render(){
        const a=1;
        const b=2;
        const classes=[];
        if(this.state.persons.length<=2){
            classes.push('red');//classes=['red']
        }
        if(this.state.persons.length<=1){
            classes.push('bold');//classes=['red','bold']
        }
        const style={
            backgroundColor:'red',
            color:'white',
            fontSize:'20px',
            padding:'10px',
            borderRadius:'3%',
            /*':hover':{
                backgroundColor:'lightgreen',
                color:'black'
            },*/
            

        };

        let persons=null;

        if(this.state.showNames){
            
            persons=(
            <div>
                <Persons 
                persons={this.state.persons}
                changed={this.changeHandler}
                clicked={this.deleteHandler}/>
            </div>
            );
            
                style.backgroundColor='green';
               
            
        }
        



        return(
                <div>
                    <h1>Hello React</h1>
                    <p className={classes.join(' ')}>This is Working</p>
                    <button onClick={this.toggleHandlder} key={a} style={style} >Show Names</button>
                    <button onClick={this.clickHandler} key={b} style={style}>Switch Name</button>

                    {persons}

                    {/*{this.state.persons.map((person,index)=>{
                        return(
                            <Person name={person.name} age={person.age}/>
                        )
                    })}*/}
                

                    {/*{this.state.showNames ? <div>
                    <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
                    <Person name={this.state.persons[1].name} age={this.state.persons[1].age} clicked={this.clickHandler} changed={this.changeHandler}/>
                    <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
                    </div>:null}*/}
                    
                </div>
        );
    }
}
export default App; //higher order component