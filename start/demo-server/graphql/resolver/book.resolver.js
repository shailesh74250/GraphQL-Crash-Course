Resolvers = {
  Query: {
    books: () => books,
    users: () => users
  },
};

module.exports = Resolvers;

const users = [
  {
      id: 1,
      first_name: "Kamlesh",
      last_name: "Dhol",
      email: "kamlesh@gmail.com",
      password: "abcsdf",
      photo: "http://s3-kamlesh-bucket.com/kamlesh.png",
      gender: "male"
  },
  {   id:2,
      first_name: "Kamlesh",
      last_name: "Dhol",
      email: "kamlesh@gmail.com",
      password: "abcsdf",
      photo: "http://s3-kamlesh-bucket.com/kamlesh.png",
      gender: "male"
  },
];
const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];
