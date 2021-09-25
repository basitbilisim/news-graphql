import { gql } from 'apollo-server'

export default gql `
    extend type Query {
        news(langId:ID,categoryId:ID,authorId:ID,newid:ID): [New!]
    }

    extend type Mutation {
        addNew(title:String!,body:String!,authorId:ID,categoryId:ID,langId:ID):MutationResponse!
        deleteNew(newId:ID!):MutationResponse!
        updateNew(newId:ID!,title:String,body:String,authorId:ID,categoryId:ID,langId:ID):MutationResponse!
    }


    type New {
        newId: ID!
        title: String!
        body: String!
        authorId: ID!
        categoryId:ID!
        langId:ID!
    }
`

