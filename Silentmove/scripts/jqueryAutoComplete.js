const data = [
  {
    id: "prop1",
    type: "House",
    bedrooms: 3,
    bathrooms: 2,
    price: 750000,
    tenure: "Freehold",
    description:
      "Attractive three bedroom semi-detached family home situated within 0.5 miles of Petts Wood station with fast trains to London and within easy walking distance of local shops, schools, bus routes and National Trust woodland. The property comprises; two receptions, fitted 18'9 x 10'1 kitchen/breakfast room and conservatory. The property also benefits from having a utility room and cloakroom. To the first floor there are three bedrooms and a family bathroom with separate WC. Additional features include double glazing, gas central heating and a well presented interior...",
    location: "Petts Wood Road, Petts Wood, Orpington BR5",
    picture: "properties/property1/property1-img/pic1.webp",
    url: "properties/property1/property1.html",
    added: {
      month: "October",
      day: 12,
      year: 2022,
    },
  },
  {
    id: "prop2",
    type: "Flat",
    bedrooms: 2,
    bathrooms: 1,
    price: 399995,
    tenure: "Freehold",
    description:
      "Presented in excellent decorative order throughout is this two double bedroom, two bathroom, garden flat. <br>The modern fitted kitchen is open plan to the living room which boasts solid wooden floors and includes integrated appliances including a dishwasher & a washing machine. This large open plan benefits from bi folding doors onto a secluded private courtyard garden. Both bedrooms are double sized, and the family bathroom boasts a matching three piece suite a shower attachment over the bath. There is also a separate wet room. There are walnut doors throughout and wiring for Sky TV/aerial points in the living room/kitchen and both bedrooms.<br>This apartment being only five years old, is still under a 10 year building guarantee...",
    location: "Crofton Road Orpington BR6",
    picture: "properties/property2/property2-img/pic1.webp",
    url: "properties/property2/property2.html",
    added: {
      month: "September",
      day: 14,
      year: 2022,
    },
  },
  {
    id: "prop3",
    type: "House",
    bedrooms: 4,
    bathrooms: 2,
    price: 800000,
    tenure: "Leasehold",
    description:
      "Spacious and modern four bedroom townhouse located in the heart of London. This property features a bright and open living room, a fully equipped kitchen with top-of-the-line appliances, and a private patio perfect for entertaining. The second floor includes three bedrooms and a full bathroom, while the third floor boasts a master suite with a large walk-in closet and en-suite bathroom. Additional amenities include a garage and easy access to public transportation. Don't miss out on the opportunity to make this house your home.",
    location: "34 Park Lane, London W1K 1QY",
    picture: "properties/property3/property3-img/pic1.webp",
    url: "properties/property3/property3.html",
    added: {
      month: "November",
      day: 20,
      year: 2022,
    },
  },
  {
    id: "prop4",
    type: "Flat",
    bedrooms: 1,
    bathrooms: 1,
    price: 300000,
    tenure: "Leasehold",
    description:
      "Charming one bedroom flat located in the heart of Manchester. This property features a cozy living room with a fireplace, a fully-equipped kitchen, and a private balcony with stunning views of the city. The bedroom is generously sized and includes a large closet. Additional amenities include a shared pool and fitness center. This flat is perfect for a first-time homebuyer or as a city retreat.",
    location: "56 King Street, Manchester M2 3NG",
    picture: "properties/property4/property4-img/pic1.webp",
    url: "properties/property4/property4.html",
    added: {
      month: "December",
      day: 5,
      year: 2022,
    },
  },
  {
    id: "prop5",
    type: "House",
    bedrooms: 3,
    bathrooms: 2,
    price: 550000,
    tenure: "Freehold",
    description:
      "Beautiful three bedroom, two bathroom semi-detached house located on a quiet street in Oxford. This property features a bright and open living room, a fully equipped kitchen with modern appliances, and a private garden perfect for hosting summer BBQs. The second floor includes three spacious bedrooms and a full bathroom, while the third floor boasts a large loft space perfect for a home office or guest room. Additional amenities include a garage and easy access to public transportation. Don't miss out on the opportunity to make this house your home.",
    location: "17 Maple Road, Oxford OX1 3TS",
    picture: "properties/property5/property5-img/pic1.webp",
    url: "properties/property5/property5.html",
    added: {
      month: "January",
      day: 1,
      year: 2023,
    },
  },
  {
    id: "prop6",
    type: "Flat",
    bedrooms: 2,
    bathrooms: 1,
    price: 375000,
    tenure: "Leasehold",
    description:
      "Bright and spacious two bedroom flat located in the heart of Glasgow. This property features a large living room with floor-to-ceiling windows, a fully-equipped kitchen with modern appliances, and a private balcony with stunning views of the city. The two bedrooms are generously sized and include ample storage space. Additional amenities include a shared pool and fitness center. This flat is perfect for a first-time homebuyer or as a city retreat.",
    location: "5 King Street, Glasgow G1 2TT",
    picture: "properties/property6/property6-img/pic1.webp",
    url: "properties/property6/property6.html",
    added: {
      month: "February",
      day: 14,
      year: 2023,
    },
  },
  {
    id: "prop7",
    type: "House",
    bedrooms: 5,
    bathrooms: 3,
    price: 1000000,
    tenure: "Freehold",
    description:
      "Stunning five bedroom, three bathroom detached house located in a desirable neighborhood in Bristol. This property features a grand entrance with a sweeping staircase, a formal living room with a fireplace, a fully equipped kitchen with top-of-the-line appliances, and a private garden with a patio and a swimming pool. The second floor includes four bedrooms and two full bathrooms, while the third floor boasts a large master suite with a fireplace and a luxurious en-suite bathroom. Additional amenities include a three-car garage and easy access to top schools and shopping centers. Don't miss out on the opportunity to make this house your dream home.",
    location: "12 Park Avenue, Bristol BS6 6UL",
    picture: "properties/property7/property7-img/pic1.webp",
    url: "properties/property7/property7.html",
    added: {
      month: "March",
      day: 20,
      year: 2023,
    },
  },
];

  $(function() {
    // get the list of locations from the data
    var locations = data.map(function(property) {
      return property.location;
    });
  
    // implement jquery ui autocomplete in the searchbox
    $("#location").autocomplete({
      source: locations
    });
  });
