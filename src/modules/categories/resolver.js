import model from './model.js'
export default {
	Query: {
		categories: async(_,args)=>await model.getCategories(args)
	},
	Mutation:{
		addCategory: async (_,args) => {
			try {
				let arg = await model.postCategories(args)
				if(arg) {
					return{
						status:201,
						message:"the new Category has been added",
						data:arg
					}
				}else throw new Error('there is an error!')
			}catch(error){
				return {
					status:400,
					message:error,
					data:null
				}
			}
		},
		deleteCategory: async(_, args) => {

            console.log(args)
            try {
           		let arg = await model.deleteCategories(args)
                if(arg) {
                    return {
                        status: 201,
                        message: 'The category has been deleted!',
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
		updateCategory:async (_,args) => {
					console.log(args)
					try {
						let arg = await model.updateCategories(args)
						if(arg) {
							return{
								status:201,
								message:"the category has been updated",
								data:arg
							}
						}else throw new Error('there is an error!')
					}catch(error){
						return {
							status:400,
							message:error,
							data:null
						}
					}
				} 
	},
	Category: {
		categoryId:   global => global.category_id,
		categoryName:   global => global.category_name,
		langId:   global => global.lang_id
	}
}