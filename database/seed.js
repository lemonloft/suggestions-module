const faker = require('faker');
const { Activity, Listing } = require('./index.js');

const activityVerbs = ['Experience', 'Enjoy', 'Discover', 'Embrace', 'Visit'];
const activityThings = ['a photoshoot in', 'a tour of', 'a walking tour in', 'an art experience in', 'cuisine extraordinaire in', 'a nature tour in', 'a flight around'];

const seedActivity = () => {
  for (let i = 0; i < 100; i++) {
    let activity = {};

    let location = faker.address.city();
    let verb = activityVerbs[Math.floor(Math.random() * activityVerbs.length)];
    let thing = activityThings[Math.floor(Math.random() * activityThings.length)];
    let title = `${verb} ${thing} ${location}`;
    let rating = null;
    let numComments = null;

    if (i % 3 === 0) {
      rating = 5;
    } else {
      rating = Math.floor(Math.random() * (500 - 400) + 400) / 100;
    };

    if (i % 3 === 0) {
      numComments = Math.ceil((Math.random() * (1000 - 90) + 90));
    } else {
      numComments = Math.ceil((Math.random() * (100 - 1) + 1));
    };

    activity.id = i;
    activity.title = title;
    activity.imageUrl = faker.image.imageUrl();
    activity.cost = Math.ceil((Math.random() * (150 - 51) + 50));
    activity.rating = rating;
    activity.numComments = numComments;
    activity.location = location;

    Activity.sync({ force: true })
    .then(() => {
      return Activity.create(activity)
    })
    .catch((err) => {
      console.log(`Err is ${err}`); 
    });
  }
}

seedActivity();

const listingAdjs = ['Luxury', 'Magical', 'Classical', 'Romantic', 'Off-Grid', 'Modern', 'Private', 'Cozy'];
const listingTypes = [
  ['Loft', 'Entire loft'],
  ['Studio', 'Entire apartment'],
  ['Studio', 'Private room'],
  ['Villa', 'Entire villa'],
  ['Apartment', 'Entire apartment'],
  ['Apartment', 'Private room'],
  ['Garden Room', 'Entire room'],
  ['Cottage', 'Entire cottage'],
  ['Palace', 'Entire guest suite'],
  ['Flat', 'Private room'],
  ['Flat', 'Entire flat'],
  ['Bungalow', 'Entire bungalow'],
  ['Suite', 'Entire hotel room']
];
const listingDescs = ['in the heart of', 'in the center of', 'in', 'in', 'in', 'close to', 'with views of', 'with amazing views of', 'among olive trees in', 'with garden in'];
  
const seedListing = () => {
  for (let i = 0; i < 100; i++) {

    let listing = {};
    
    let location = faker.address.city();
    let adj = listingAdjs[Math.floor(Math.random() * listingAdjs.length)];
    let type = listingTypes[Math.floor(Math.random() * listingTypes.length)];
    let desc = listingDescs[Math.floor(Math.random() * listingDescs.length)];
    let title = `${adj} ${type[0]} ${desc} ${location}`
    let rating = null;
    let numComments = null;

    if (i % 3 === 0) {
      rating = 5;
    } else {
      rating = Math.floor(Math.random() * (500 - 400) + 400) / 100;
    };

    if (i % 3 === 0) {
      numComments = Math.ceil((Math.random() * (1000 - 90) + 90));
    } else {
      numComments = Math.ceil((Math.random() * (100 - 1) + 1));
    };

    listing.id = i;
    listing.title = title;
    listing.imageUrl = faker.image.imageUrl();
    listing.image = faker.image.imageUrl();
    listing.cost = Math.ceil((Math.random() * (400 - 70) + 70))
    listing.rating = rating;
    listing.numComments = numComments;
    listing.location = location;
    listing.roomType = type[1];

    Listing.sync({ force: true })
    .then(() => {
      return Listing.create(listing)
    })
    .catch((err) => {
      console.log(`Error is ${err}`);
    });
  }
};

seedListing();