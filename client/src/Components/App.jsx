import React from 'react';
import { ajax } from 'jquery';
import Header from './Activities/Header.jsx';
import ActivityCarousel from './Activities/ActivityCarousel.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activities: [],
      listings: []
    };
  }

  componentDidMount() {
    ajax({
      method: 'get',
      url: '/suggestions/activities',
      success: (data) => {
        this.setState({
          activities: data
        })
      }
    });
  }

  render() {
    return (
      <div>
        <Header />
        <ActivityCarousel activities={this.state.activities} />
      </div>
    )
  }
}

export default App;