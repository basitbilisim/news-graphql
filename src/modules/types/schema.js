import {gql} from 'apollo-server'

export default gql`
	scalar Date
	scalar Any
	scalar abo
	type MutationResponse {
		status:Int!
		message:String!
		data:Any!
	}
	
`