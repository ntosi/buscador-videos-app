import React from 'react'

class SearchBar extends React.Component{
    state = { text : '' } 
    
    onInputChange = event => {
        this.setState({ text: event.target.value})
    }

    onFormSubmit = event => {
        event.preventDefault()
        this.props.onFormSubmit(this.state.text)
    }
    render(){
        return(
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Video Search</label>
                        {
                        //el this.state.text en value es para controlar lo que dice imput
                        }
                        <input 
                        type="text" 
                        value = {this.state.text}
                        onChange = {this.onInputChange}
                        />
                    </div>
                </form>
                <div>
                    
                </div>
            </div>
        )
    }
}

export default SearchBar