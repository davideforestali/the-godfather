
import React, {Component} from 'react';
import './styles/main.scss';
import './App.scss';

import usersData from './data/EmployeeData.json'
import SideMenu from './components/SideMenu/SideMenu';
import Profile from './components/Profile/Profile';

class App extends Component {

  state = {
    users: usersData.users,
    profileToShow: {},
    activeProfileIndex: 0
  }

  componentDidMount() {
    this.setState({
      profileToShow: this.state.users[0]
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.activeProfileIndex !== this.state.activeProfileIndex) {
      this.setState({
        profileToShow: this.state.users[this.state.activeProfileIndex]
      })
    }
  }

  linkClickedHandler = (i) => {
    this.setState({
      activeProfileIndex: i
    })
  }

  render() {

    return (
      <div>
        <div className="hero">
          <span className="hero__shadow"></span>
        </div>

        <SideMenu 
          users={this.state.users} 
          activeProfile={this.state.activeProfileIndex}
          onLinkClick={(i) => this.linkClickedHandler(i)} />
              
        <Profile profileToShow={this.state.profileToShow} />
        
      </div>
    );
  }
}

export default App;
