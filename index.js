const usersData = [
  {
    id: 1,
    firstName: "Mike",
    lastName: "Smith",
  },
  {
    id: 2,
    firstName: "Danny",
    lastName: "Gold",
  },
];

const addresses = [
  {
    userIs: 1,
    houseNumber: 123,
    street: "Main St",
    zipCode: 12345,
  },
  {
    userIs: 2,
    houseNumber: 456,
    street: "Second St",
    zipCode: 67890,
  },
];

const typeDefs = `#graphql
    type User {
        firstName: String!
        lastName: String
    }
    
    type Address {
        houseNumber: Int!
        street: String!
        zipCode: Int
    }
    
    type UserResponse {
        user: User
        users: [User]
        address: Address
        addresses: [Address]
    }

    type Query {
        getSingleUser(id: ID!): UserResponse!
        getAllUsers: UserResponse
    }
`;

const resolvers = {
  Query: {
    getSingleUser: (parent, args) => {
      console.log(parent);
      console.log(args);
      const user = usersData.find((data) => data.id === args.id);
      const address = addresses.find((data) => data.userId === args.id);
      return {
        user,
        address,
      };
    },
  },
  Mutation: {},
};
