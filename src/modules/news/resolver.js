import model from './model.js'

export default {
    Query: {
        news: async (_,args) => await model.getNews(args)
  
    },

    Mutation: {
        addNew: async(_, args) => {
            let arg = await model.postNews(args)
            try {
                if(arg) {
                    return {
                        status: 201,
                        message: 'The new has been added!',
                        data: arg
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
        deleteNew: async(_, args) => {
            let arg = await model.deleteNews(args)
            try {
                if(arg) {
                    return {
                        status: 201,
                        message: 'The new has been deleted!',
                        data: arg
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
        updateNew: async(_, args) => {
            let arg = await model.putNews(args)
            try {
                if(arg) {
                    return {
                        status: 201,
                        message: 'The new has been updated!',
                        data: arg
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

    },

    New:{
        newId:      global => global.new_id,
        authorId:  global => global.author_id,
        categoryId:    global => global.category_id,
        
    }
}