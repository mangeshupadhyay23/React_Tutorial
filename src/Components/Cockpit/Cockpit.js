import React,{useEffect} from 'react';


const Cockpit = (props) =>{
    useEffect(()=>{
            console.log("cockpit.js useEfect");
            //http request for saving or asking for data can be kept here but it will run again and again whenever the we render the jsx so we need to only run when persons data is changed
            const timer = setTimeout(()=>{
                alert('Saved perosons data in cloud!!');
            },1000);

            return ()=>{
                console.log('Clean Up work is in effect');
            };
         },[]); //so now it will run only when perosns prop will change but if we leave the array blank it willrun on once that isit got no dependecies

    return(
        <div>
                        {/*we can directly use props. to access a prop in a functional component */}
                        <h1>{props.tittle}</h1>  
                            <p className={props.classes.join(' ')}>This is Working</p>
                            <button onClick={props.toggleHandlder} key={props.a} style={props.style}>Show Names</button>
                            <button onClick={props.clickHandler} key={props.b} style={props.style}>Switch Name</button>



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
export default React.memo(Cockpit); //it works same as should componenet update function if the arguemnt is not changing it will not render that
//component . it is made for the functional component
//every Class based component can be wraped up with component should update 
//while funtional component can be wraped up with React.memo
//they are just optimization option but they cannot be used everywhere 
//they should be used only where the component is not needed to be updated or rendered again and again