
import React from 'react';
import './App.css';
//import Person from './Person/Person'

class App extends React.Component{
    state={
        person:[
            {name:'Max',age:20},
            {name:'Jay',age:19},
            {name:'suzine',age:23}
        ],
        showPerson: false

    }

    clickHandler=()=>{
        this.setState({
        person:[
            {name:'Maximilian',age:29},      // TO CHANGE STATE BY CLICKING 
            {name:'Mangesh',age:20},
            {name:'suzzine',age:21}
           ]
        })
    }
    toggleHandler=()=>{
        this.setState({
            showPerson: !this.state.showPerson                // TO TOGGLE VISIBLITY BY A CLICK
        })
    }
    deleteHandler=(singleindex)=>{
        const person=this.state.person;

        person.splice(singleindex,1);
        this.setState({ person : person })
    }
    


    nameChangedHandler=(event)=>{
      this.setState({
            person:[
            {name:'max',age:29},
            {name:event.target.value,age:19},
            {name:'suzzie',age:20}
        ]
      });
    }
    



    render(){

        // We can define a funcion wihtin render and that can be called inside or result can be called inisde return
        // component can be handled by these two ways
        let person=null;
        //rendering an array
        if (this.state.showPerson){
            person=(
            <div>
                <hr/>
                {this.state.person.map((single,index)=>{
                    return(
                        <Person name={single.name} age={single.age} click={()=>this.deleteHandler(index)}/>
                    )
                })}
            </div>)
        }

      return (
          <div>
              <h1>Hello world</h1>
              <p>this is working</p>
              <button onClick={this.toggleHandler}>Toggle names</button>
              {person}
              {/* everthing written between curly brackets is jsx */}
              {/*{this.state.showPerson ? <div>
              <Person name={this.state.person[0].name} age={this.state.person[0].age} click={this.clickHandler}/>
              <Person name={this.state.person[1].name} age={this.state.person[1].age} changed={this.nameChangedHandler}>My hobby drawing</Person>
              <Person name={this.state.person[2].name} age={this.state.person[2].age} />
              </div> : null
              }*/}
              
              
          </div>
      );
    }

}
export default App;