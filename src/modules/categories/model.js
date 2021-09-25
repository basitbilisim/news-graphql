import  {fetch,fetchAll} from './../../lib/postgres.js'
const GETCATEGORIES = `
	SELECT 
	*
	FROM categories
	where
	case 
		when $1 > 0 then lang_id = $1
		else true
	end
	
 `
const POSTCATEGORIES = `
	insert into categories (
		category_name,
		lang_id
	)values($1,$2)
	returning *
 `
const DELETE_CATEGORY =`
    delete from categories
    where category_id = $1
    returning *

 `


const UPDATECATEGORIES = `
	WITH old_data as (
		SELECT
			category_id,
			category_name,
			lang_id
		FROM categories
		WHERE category_id = $1
	) UPDATE categories c SET
		category_name = (
		CASE
			WHEN length($2) > 1 THEN $2
			ELSE o.category_name
		END),
		lang_id = (
		CASE
			WHEN $3 > 0 THEN $3
			ELSE o.lang_id
		END)
	FROM old_data o
	WHERE c.category_id = $1
	RETURNING c.category_id, 
	c.category_name as new_name, o.category_name as old_name, 
	c.lang_id as new_price, o.lang_id as old_lang_id
`
const getCategories = ({langId=0}) => {
	return fetchAll(GETCATEGORIES,langId)
}
const postCategories = ({categoryName,langId}) => {
	return fetchAll(POSTCATEGORIES,categoryName,langId)
}
const deleteCategories = ({categoryId=0}) => {
	return fetchAll(DELETE_CATEGORY,categoryId)
}

const updateCategories = ({category_id,category_name,langId}) => {
	return fetchAll(UPDATECATEGORIES,category_id,category_name,langId)
}


export default{
	getCategories,
	postCategories,
	deleteCategories,
	updateCategories
}