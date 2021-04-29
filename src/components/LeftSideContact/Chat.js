import React from 'react';
import Contacts from './ContactChats/Contacts';
import Requests from './ContactChats/Requests';

class Chat extends React.Component {
    state = {
        contacts: true,
        requests: false
    }

    changeToContacts = () => {
        this.setState({
            contacts: true,
            requests: false
        })
    }

    changeToRequests = () => {
        this.setState({
            contacts: false,
            requests: true
        })
    }

    render() {
        let classes = ['active', 'item'].join(' ');
        return (
            <div>
                <div class="ui two item menu" style={{ backgroundColor: '#3c4fa2', height:'100%' }}>
                    <a class={this.state.contacts ? classes : 'item'} onClick={this.changeToContacts} style={{ color: 'white' }}>Contacts</a>
                    <a class={this.state.requests ? classes : 'item'} onClick={this.changeToRequests} style={{ color: 'white' }}>Requests</a>
                </div>
                <div>
                    {this.state.contacts ?
                        <Contacts /> :
                        <Requests />}
                </div>
            </div>
        )
    }
}

export default Chat;