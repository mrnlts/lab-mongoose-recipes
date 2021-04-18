const mongoose = require('mongoose');

const Recipe = require('./models/Recipe.model');

const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

const newRecip = {
  "title": "Peanut Butter Cookies",
  "level": "Easy Peasy",
  "ingredients": [
    "1 1/2 cup all-purpose flour",
    "1/2 cup butter unsalted, room temp",
    "1 cup peanut butter",
    "1/2 cup brown sugar, lightly packed",
    "1/2 cup sugar",
    "1 tsp vanilla extract",
    "1 egg large, room temp",
    "3/4 tsp baking powder"
  ],
  "cuisine": "American",
  "dishType": "dessert",
  "image": "https://preppykitchen.com/wp-content/uploads/2020/04/Peanut-butter-cookies-feature-1-1084x1536.jpg",
  "duration": 15,
  "creator": "John Kanell"
};

mongoose
  .connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  // .then(self => {
  //   console.log(`Connected to the database: "${self.connection.name}"`);
  //   // Before adding any documents to the database, let's delete all previous entries
  //   return self.connection.dropDatabase();
  // })

  // .then(() => {
  //   Recipe.create( newRecip, ( err, recipe ) => {
  //     if ( err ) {
  //       console.log( 'Error: ', err );
  //       return;
  //     }
  //     console.log( 'Recipe included succesfully in the database! Title:', recipe.title );
  //     recipe.save();
  //   })
  // })

  // .then(() => {
  //     Recipe.insertMany( data, ( err, recipeArr ) => {
  //       if ( err ) {
  //         console.log( 'Error: ', err );
  //         return;
  //       }
  //       recipeArr.forEach(( recipe )=> {
  //         console.log( 'Recipe included! Titles:', recipe.title );
  //         recipe.save();
  //       });
  //     })
  //   })

  .catch(error => {
    console.error('Error connecting to the database', error);
  });

  Recipe.findOneAndUpdate({ title: "Rigatoni alla Genovese" }, { duration: 100 })
  .then( console.log( "Updated rigatonis!" ))
  .catch( err => console.log('Rigatoni error! ', err));

