Users = {
    Query: {
      users: () => users,
    },
  };
  module.exports = Users;
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
  