# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Book.create([
    {
        name:'JavaScript Grammar: In Color',
        author: 'Greg Sidelnikov',
        customerReviews: 4.5,
        published: 'March 23, 2019',
        img: 'https://i.imgur.com/ZmFv4ai.png'
    },
      {
        name: 'The Road to Learn React',
        author: 'Robin Wieruch',
        customerReviews: 4.3,
        published: 'November 15, 2017',
        img:'https://i.imgur.com/pAgBW56.png'
    },
      {
        name: 'Eloquent JavaScript',
        author: 'Maijn Haverbeke',
        customerReviews: 4.5,
        published: 'December 4, 2018',
        img: 'https://i.imgur.com/RDNinMC.png'
    },
      {
        name: 'JavaScript & jQuery',
        author:' Jon Duckett',
        customerReviews: 4.5,
        published: 'June 30, 2014',
        img: 'https://i.imgur.com/tVjCxIC.png'
    },
      {
        name: 'jQuery Pocket Reference: Read Less, Learn More',
        author: 'David Flanagan',
        customerReviews: 4.3,
        published: 'January 7, 2011',
        img: 'https://i.imgur.com/X6JDKoT.png'
    }
]);