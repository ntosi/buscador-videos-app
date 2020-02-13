import React from 'react'
import Clock from './Clock'
import SearchBar from './SearchBar'
import youtube from '../api/youtube'

class App extends React.Component{
    
    onTextSubmit = async (text) => {
        const response = await youtube.get('/search', {
            params: {
                q: text
        }
        })
        console.log(response)
    }
    
    render(){
        return (
            <div className="ui container">
            <Clock />    
                
            <SearchBar onFormSubmit={this.onTextSubmit}/>    
            </div>
        )
    }
}



export default App