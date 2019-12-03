const faker = require('faker');
const { Activity, Listing } = require('./index.js');

const verbs = ['Experience', 'Enjoy', 'Discover', 'Embrace', 'Try'];
const toDos = ['photoshoot in', 'tour of', 'walking tour of', 'art experience in', 'cuisine extraordinaire in', 'nature tour in', 'flight around'];

const seedActivity = () => {
  for (let i = 0; i < 100; i++) {
    let activity = {};

    let location = faker.address.city();
    let verb = verbs[Math.floor(Math.random() * verbs.length)];
    let toDo = toDos[Math.floor(Math.random() * toDos.length)];
    let title = `${verb} a ${toDo} ${location}`;
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

    // Activity.create(activity)
    // .then(() => {
    //   console.log('Created');
    // })
    // .catch((err) => {
    //   console.log(`Error is: ${err}`);
    // });

    Activity.sync({ force: true })
    .then(() => {
      return Activity.create(activity)
      .then(() => {
        console.log('Created');
      })
      .catch((err) => {
        console.log(`Error is ${err}`);
      });
    });

  }
}

  seedActivity();