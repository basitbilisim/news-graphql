import { gql } from 'apollo-server'

export default gql `
    extend  type Query {
        users: [User!]
    }

    extend type Mutation {
        login(email:String! password:String):MutationResponse!
        register(firstname:String!,lastname:String!,password:String!,email:String!,special:String!):MutationResponse!
        
    }
    type User {
        userId: ID!
        firstname: String!
        lastname: String!
        password: String!
        email: String!
        special: String!
    }

`
