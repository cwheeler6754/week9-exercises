import React from 'react';
import ReactDOM from 'react-dom';

class House extends React.Component {
    state = {
        rooms: {
            kitchen: true,
            bathroom: false,
            livingRoom: true,
            bedroom: false
        }
    }

// This is the problem part
    kitchen = ( action ) => {
        this.setState( prevState => {
            let rooms = { ...prevState.rooms };
            rooms.kitchen: !this.kitchen;
// This specifically     ^
            return { rooms }
        });
    }
    bathroom = ( action ) => {
        this.setState( prevState => {
            let rooms = {...prevState.rooms};
            rooms.bathroom: !this.bathroom;
// This specifically      ^
            return { rooms }
        });
    }
    livingRoom = ( action ) => {
        this.setState( prevState => {
            let rooms = {...prevState.rooms};
            rooms.livingRoom: !this.livingRoom
// This specifically        ^
            return { rooms }
        });
    }
    bedroom = ( action ) => {
        this.setState( prevState => {
            let rooms = {...prevState.rooms};
            rooms.bedroom: !this.bedroom
// This specifically     ^
            return { rooms }
        });
    }

    render(){
        return(
            <div>
                <Button action={this.kitchen}>Kitchen</Button>
                <p>Kitchen is: {this.state.rooms.kitchen ? 'on': 'off'}</p>

                <Button action={this.bathroom}>Bathroom</Button>
                <p>Bathroom is: {this.state.rooms.bathroom ? 'on': 'off'}</p>

                <Button action={this.livingRoom}>Living Room</Button>
                <p>Living Room is: {this.state.rooms.livingRoom ? 'on': 'off'}</p>

                <Button action={this.bedroom}>Bedroom</Button>
                <p>Bedroom is: {this.state.rooms.bedroom ? 'on': 'off'}</p>
            </div>
        )
    }
}

function Button({ children, action }){
    return(
        <button onClick={action}>
            {children}
        </button>
    )
}

ReactDOM.render(
    <House />,
    document.getElementById("root")
);