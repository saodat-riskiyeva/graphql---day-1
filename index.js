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
        address: Address
    }`;
