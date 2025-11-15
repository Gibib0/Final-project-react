import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const ShoppingListPage = () => {
	const [item, setItem] = useState('')
	const {shoppingList, addToShoppingList, removeFromShoppingList} = useContext(GlobalContext)

	return (
		<div className="container">
			<h2>Shopping List</h2>

			<form onSubmit={(e) => {
				e.preventDefault()
				if (item.trim()) {
					addToShoppingList(item)
					setItem('')
				}
			}}>
				<input className="input" placeholder="Add product" value={item} onChange={(e) => setItem(e.target.value)}/>
				<button className="btn" type="submit">Add</button>
			</form>

			<ul className="ingredients-list">
				{shoppingList.map((x, index) => (
					<li key={index}>
						{x}
						<button className="btn-outline" onClick={() => removeFromShoppingList(x)} style={{marginLeft: 10}}>Remove</button>
					</li>
				))}
			</ul>
		</div>
	)
}

export default ShoppingListPage