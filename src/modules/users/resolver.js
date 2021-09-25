import model from './model.js'
import JWT from './../../lib/jwt.js'
import validation from './../../lib/joi.js'
export default {
    Query: {
        users: async () => await model.users()
    },

    Mutation: {
        login: async(_, args) => {
            let auth = await model.login(args)
            try {
                if(auth) {
                    return {
                        status: 201,
                        message: 'The user has been loged!',
                        data: JWT.sign(auth.user_id)
                    } 
                }else throw new Error('There is an error')
            }catch(error) {
                return {
                    status: 400,
                    message: error.message,
                    data: null
                }
            }
        },
        register: async(_, args) => {
            let auth = await model.register(args)
            try {
                if(auth) {
                    return {
                        status: 201,
                        message: 'The user in registered!',
                        data: JWT.sign(auth.user_id)
                    } 
                }else throw new Error('There is an error')
            }catch(error) {
                return {
                    status: 400,
                    message: error.message,
                    data: null
                }
            }
        }
       
    },

    User: {
        userId:global => global.user_id,
        
    }
}