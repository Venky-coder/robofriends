import React, { Component } from 'react';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import './App.css';
import Scroll from '../components/Scroll';


class App extends Component {
    constructor() {
        super();
        this.state = {
            robot: [],
            searchField: ''
        }
    }

    componentDidMount()
    {
       fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
        return response.json();
       })
       .then(users=>{
        this.setState({robot: users});
        })
    }

    onSearchChange = (event)=> {
        this.setState({searchField: event.target.value});
    }

    render() {
    	 const filterRobot = this.state.robot.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
         if(this.state.robot.length === 0)
         {
            return(
            <h1>Loading</h1>
            );
         }
         else{
        return (
            <div className='tc'> 
            <h1 className='f2'>Robot Friends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
            <CardList robot={filterRobot}/>
            </Scroll>
            </div>
        );
        }
    }
}

export default App;