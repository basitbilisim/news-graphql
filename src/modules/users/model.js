import { fetch, fetchAll } from "../../lib/postgres.js"

const USERS = `
select * from users

`

const INSERT_USER = `
	insert into users (
		firstname,
		lastname,
		password,
		email,
		special
	)values($1,$2,$3,$4,$5)
	returning *
 `
 const CHECK_USER =`

  SELECT 
  *
  FROM users u WHERE u.email = $1 AND password = $2
  `


const register = ({firstname,lastname,password,email,special}) =>{
	return fetch(INSERT_USER,firstname,lastname,password,email,special)
}
const login = ({email,password}) =>{
	return fetch(CHECK_USER,email,password)
}
const users = async ( ) => {
    try{
        return await fetchAll(USERS)
    }catch(error){
        throw error
    }
}




export default {
    users,register,login
    
}