import React,{Component} from 'react'
import {robots} from './robots';//robots export in a not by default way
import Cardlist from './Cardlist';
import SearchBox from './SearchBox';

class App extends Component{
    constructor(){
        super();
        this.state = {
            robots : robots,
            searchfield: ''
        }
    }
    onSearchChange = (event) =>{
        this.setState({ searchfield:event.target.value })
    }
    render(){
        const filteredRobots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return(
            <div className='tc'>
                <h1>RobotFriends</h1>
                <SearchBox onSearchChange={this.onSearchChange}/>
                <Cardlist robots={filteredRobots}/>
            </div>
        )
    }
}
export default App;