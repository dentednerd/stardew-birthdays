const characters = [
  {
    name: 'Alex',
    birthday: {
      season: 'summer',
      day: '13'
    },
    loves: [
      'Complete_Breakfast',
      'Salmon_Dinner'
    ]
  },
  {
    name: 'Elliott',
    birthday: {
      season: 'fall',
      day: '5'
    },
    loves: [
      'Crab_Cakes',
      'Duck_Feather',
      'Lobster',
      'Pomegranate',
      'Squid_Ink',
      'Tom_Kha_Soup'
    ]
  },
  {
    name: 'Harvey',
    birthday: {
      season: 'winter',
      day: '14'
    },
    loves: [
      'Coffee',
      'Pickles',
      'Super_Meal',
      'Truffle_Oil',
      'Wine'
    ]
  },
  {
    name: 'Sam',
    birthday: {
      season: 'summer',
      day: '17'
    },
    loves: [
      'Cactus_Fruit',
      'Maple_Bar',
      'Pizza',
      'Tigerseye'
    ]
  },
  {
    name: 'Sebastian',
    birthday: {
      season: 'winter',
      day: '10'
    },
    loves: [
      'Frozen_Tear',
      'Obsidian',
      'Pumpkin_Soup',
      'Sashimi',
      'Void_Egg'
    ]
  },
  {
    name: 'Shane',
    birthday: {
      season: 'spring',
      day: '20'
    },
    loves: [
      'Beer',
      'Hot_Pepper',
      'Pepper_Poppers',
      'Pizza'
    ]
  },
  {
    name: 'Abigail',
    birthday: {
      season: 'fall',
      day: '13'
    },
    loves: [
      'Amethyst',
      'Banana_Pudding',
      'Blackberry_Cobbler',
      'Chocolate_Cake',
      'Pufferfish',
      'Pumpkin',
      'Spicy_Eel'
    ]
  },
  {
    name: 'Emily',
    birthday: {
      season: 'spring',
      day: '27'
    },
    loves: [
      'Amethyst',
      'Aquamarine',
      'Cloth',
      'Emerald',
      'Jade',
      'Ruby',
      'Survival_Burger',
      'Topaz',
      'Wool'
    ]
  },
  {
    name: 'Haley',
    birthday: {
      season: 'spring',
      day: '14'
    },
    loves: [
      'Coconut',
      'Fruit_Salad',
      'Pink_Cake',
      'Sunflower'
    ]
  },
  {
    name: 'Leah',
    birthday: {
      season: 'winter',
      day: '23'
    },
    loves: [
      'Goat_Cheese',
      'Poppyseed_Muffin',
      'Salad',
      'Stir_Fry',
      'Truffle',
      'Vegetable_Medley',
      'Wine'
    ]
  },
  {
    name: 'Maru',
    birthday: {
      season: 'summer',
      day: 10
    },
    loves: [
      'Battery_Pack',
      'Cauliflower',
      'Cheese_Cauliflower',
      'Diamond',
      'Gold_Bar',
      'Iridium_Bar',
      'Miners_Treat',
      'Pepper_Poppers',
      'Radioactive_Bar',
      'Rhubarb_Pie',
      'Strawberry'
    ]
  },
  {
    name: 'Penny',
    birthday: {
      season: 'fall',
      day: '2'
    },
    loves: [
      'Diamond',
      'Emerald',
      'Melon',
      'Poppy',
      'Poppyseed_Muffin',
      'Red_Plate',
      'Roots_Platter',
      'Sandfish',
      'Tom_Kha_Soup'
    ]
  },
  {
    name: 'Caroline',
    birthday: {
      season: 'winter',
      day: '7'
    },
    loves: [
      'Fish_Taco',
      'Green_Tea',
      'Summer_Spangle',
      'Tropical_Curry'
    ]
  },
  {
    name: 'Clint',
    birthday: {
      season: 'winter',
      day: '26'
    },
    loves: [
      'Amethyst',
      'Aquamarine',
      'Artichoke_Dip',
      'Emerald',
      'Fiddlehead_Risotto',
      'Gold_Bar',
      'Iridium_Bar',
      'Jade',
      'Omni_Geode',
      'Ruby',
      'Topaz'
    ]
  },
  {
    name: 'Demetrius',
    birthday: {
      season: 'summer',
      day: '19'
    },
    loves: [
      'Bean_Hotpot',
      'Ice_Cream',
      'Rice_Pudding',
      'Strawberry'
    ]
  },
  {
    name: 'Dwarf',
    birthday: {
      season: 'summer',
      day: '22'
    },
    loves: [
      'Amethyst',
      'Aquamarine',
      'Emerald',
      'Jade',
      'Lemon_Stone',
      'Omni_Geode',
      'Ruby',
      'Topaz'
    ]
  },
  {
    name: 'Evelyn',
    birthday: {
      season: 'winter',
      day: '20'
    },
    loves: [
      'Beet',
      'Chocolate_Cake',
      'Diamond',
      'Fairy_Rose',
      'Stuffing',
      'Tulip'
    ]
  },
  {
    name: 'George',
    birthday: {
      season: 'fall',
      day: '24'
    },
    loves: [
      'Fried_Mushroom',
      'Leek'
    ]
  },
  {
    name: 'Gus',
    birthday: {
      season: 'summer',
      day: '8'
    },
    loves: [
      'Diamond',
      'Escargot',
      'Fish_Taco',
      'Orange',
      'Tropical_Curry'
    ]
  },
  {
    name: 'Jas',
    birthday: {
      season: 'summer',
      day: '4'
    },
    loves: [
      'Fairy_Rose',
      'Pink_Cake',
      'Plum_Pudding'
    ]
  },
  {
    name: 'Jodi',
    birthday: {
      season: 'fall',
      day: '11'
    },
    loves: [
      'Chocolate_Cake',
      'Crispy_Bass',
      'Diamond',
      'Eggplant_Parmesan',
      'Fried_Eel',
      'Pancakes',
      'Rhubarb_Pie',
      'Vegetable_Medley'
    ]
  },
  {
    name: 'Kent',
    birthday: {
      season: 'spring',
      day: '4'
    },
    loves: [
      'Fiddlehead_Risotto',
      'Roasted_Hazelnuts'
    ]
  },
  {
    name: 'Krobus',
    birthday: {
      season: 'winter',
      day: '1'
    },
    loves: [
      'Diamond',
      'Iridium_Bar',
      'Pumpkin',
      'Void_Egg',
      'Void_Mayonnaise',
      'Wild_Horseradish'
    ]
  },
  {
    name: 'Leo',
    birthday: {
      season: 'summer',
      day: '26'
    },
    loves: [
      'Duck_Feather',
      'Mango',
      'Ostrich_Egg',
      'Poi'
    ]
  },
  {
    name: 'Lewis',
    birthday: {
      season: 'spring',
      day: '7'
    },
    loves: [
      'Autumns_Bounty',
      'Glazed_Yams',
      'Green_Tea',
      'Hot_Pepper',
      'Vegetable_Medley'
    ]
  },
  {
    name: 'Linus',
    birthday: {
      season: 'winter',
      day: '3'
    },
    loves: [
      'Blueberry_Tart',
      'Cactus_Fruit',
      'Coconut',
      'Dish_o_The_Sea',
      'Yam'
    ]
  },
  {
    name: 'Marnie',
    birthday: {
      season: 'fall',
      day: '18'
    },
    loves: [
      'Diamond',
      'Farmers_Lunch',
      'Pink_Cake',
      'Pumpkin_Pie'
    ]
  },
  {
    name: 'Pam',
    birthday: {
      season: 'spring',
      day: '18'
    },
    loves: [
      'Beer',
      'Cactus_Fruit',
      'Glazed_Yams',
      'Mead',
      'Pale_Ale',
      'Parsnip',
      'Parsnip_Soup',
      'Pina_Colada'
    ]
  },
  {
    name: 'Pierre',
    birthday: {
      season: 'spring',
      day: '26'
    },
    loves: [
      'Fried_Calamari'
    ]
  },
  {
    name: 'Robin',
    birthday: {
      season: 'fall',
      day: '21'
    },
    loves: [
      'Goat_Cheese',
      'Peach',
      'Spaghetti'
    ]
  },
  {
    name: 'Sandy',
    birthday: {
      season: 'fall',
      day: '15'
    },
    loves: [
      'Crocus',
      'Daffodil',
      'Mango_Sticky_Rice',
      'Sweet_Pea'
    ]
  },
  {
    name: 'Vincent',
    birthday: {
      season: 'spring',
      day: '10'
    },
    loves: [
      'Cranberry_Candy',
      'Ginger_Ale',
      'Grape',
      'Pink_Cake',
      'Snail'
    ]
  },
  {
    name: 'Willy',
    birthday: {
      season: 'summer',
      day: '24'
    },
    loves: [
      'Catfish',
      'Diamond',
      'Iridium_Bar',
      'Mead',
      'Octopus',
      'Pumpkin',
      'Sea_Cucumber',
      'Sturgeon'
    ]
  },
  {
    name: 'Wizard',
    birthday: {
      season: 'winter',
      day: '17'
    },
    loves: [
      'Purple_Mushroom',
      'Solar_Essence',
      'Super_Cucumber',
      'Void_Essence'
    ]
  }
];

export default characters;
