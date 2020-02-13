import React from 'react'
import Clock from './Clock'
import SearchBar from './SearchBar'
import youtube from '../api/youtube'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

class App extends React.Component{
    state = { 
        videos: [],
        selectedVideo: null
     }

    componentDidMount(){
        this.onTextSubmit('news')
    }

    onTextSubmit = async (text) => {
        const response = await youtube.get('/search', {
            params: {
                q: text
        }
        })
        this.setState({ 
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
    }

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video })
    }
    
    render(){
        return (
            <div className="ui container">
            <Clock />    
            <SearchBar onFormSubmit={this.onTextSubmit}/>    
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={this.state.selectedVideo}/>
                    </div>
                    <div className="five wide column">
                        <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}



export default App