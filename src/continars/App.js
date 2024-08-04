import React, { Component } from 'react'
import CardList from '../components/CardList'
import { robots } from '../robots'
import SearchBox from '../components/SearchBox';
import './app.css'
import Scroll from '../components/Scroll';





class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfiled: ''
        }
    }
    onSearchChange = (event) => {
        this.setState({ searchfiled: event.target.value })

    }
    render() {
        const filterRobot = this.state.robots.filter(robots => {
            return robots.name.toLocaleLowerCase().includes(this.state.searchfiled.toLocaleLowerCase())

        })
        return (<>
            <div className='tc'>
                <h1 className='f1'>ReboFriends </h1>
                <SearchBox SearchChange={this.onSearchChange} />
                <Scroll>
                <CardList robots={filterRobot} />
                </Scroll>
            </div>
        </>
        )
    }

}

export default App;
