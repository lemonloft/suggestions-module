import React from 'react';
import { ajax } from 'jquery';
import ActivityHeader from './Activities/ActivityHeader.jsx';
import ActivityCarousel from './Activities/ActivityCarousel.jsx';
import ListingHeader from './Listings/ListingHeader.jsx';
import ListingCarousel from './Listings/ListingCarousel.jsx';
import GlobalStyle from './globalStyle.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activities: [],
      listings: []
    };

    this.scrollRight = this.scrollRight.bind(this);
    this.scrollLeft = this.scrollLeft.bind(this);
  }

  componentDidMount() {
    let activities_url = '/suggestions/activities';
    let listings_url = '/suggestions/listings';
    let endpoint = window.location.pathname;

    if (endpoint) {
      activities_url += window.location.pathname;
      listings_url += window.location.pathname;
    }
    
    ajax({
      method: 'get',
      url: activities_url,
      success: (data) => {
        console.log('activities ', data);
        this.setState({
          activities: data
        })
      }
    });

    ajax({
      method: 'get',
      url: listings_url,
      success: (data) => {
        console.log('listings ', data);
        this.setState({
          listings: data
        })
      }
    });
  }

  scrollRight() {

  }

  scrollLeft() {

  }

  render() {
    return (
      <div>
        <ListingHeader />
        <ListingCarousel listings={this.state.listings} scrollRight={this.scrollRight} scrollLeft={this.scrollLeft} />
        <ActivityHeader />
        <ActivityCarousel activities={this.state.activities} scrollRight={this.scrollRight} scrollLeft={this.scrollLeft} />
        <GlobalStyle />
      </div>
    )
  }
}

export default App;