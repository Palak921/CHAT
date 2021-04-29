import React from 'react';
import SearchBar from './SearchBar';
import Chat from './Chat';
import './LeftSideContact.css';

class LeftSideContact extends React.Component {
    render() {
        return (
            <div className="LeftSide" style={this.props.styles}>
                {console.log(this.props.styles)}
                <SearchBar />
                <Chat />
            </div>)
    }
}

export default LeftSideContact;