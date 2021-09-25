import {gql} from 'apollo-server'

export default gql`
	extend type Query {
		categories(langId:ID):[Category!]!
	}
	extend type Mutation {
		addCategory(categoryName:String langId:ID):MutationResponse!
		deleteCategory(CategoryId:ID):MutationResponse!
		updateCategory(CategoryId:ID! categoryName:String! langId:ID! ):MutationResponse!
	}
	type Category{
		categoryId:ID!
		categoryName:String!
		langId:ID!
	} `
