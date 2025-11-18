"use client";
import NewItem from './new-item';
import ItemList from './item-list';
import MealIdeas  from './meal-ideas';
import { getItems, addItem, deleteItem } from '../_services/shopping-list-service';
import { useUserAuth } from '../../contexts/AuthContext';

import { useState, useEffect } from 'react';

export default function Page() {
	const { user } = useUserAuth();
	const [items, setItems] = useState([]);
	const [selectedItemName, setSelectedItemName] = useState(null);

	async function loadItems() {
		const items = await getItems(user.uid);
		setItems(items);
	}

	useEffect(() => {
		if (user) {
			loadItems();
		}
	}, [user]);

	const handleItemSelect = (itemName) => {
		// adapted from https://stackoverflow.com/questions/10992921/how-to-remove-emoji-code-using-javascript/41543705#41543705
		const clearedName = itemName.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '').split(',')[0].trim().replace(/s$/g, '');
		console.log("Selected item:", clearedName);
		setSelectedItemName(clearedName);
	};

	const handleAddItem = async (item) => {
		if (!user) {
			return;
		}
		const itemId = await addItem(user.uid, item);
		item.id = itemId;
		setItems([...items, item]);
	};

	const handleDeleteItem = async (itemId) => {
		if (!user) {
			return;
		}
		await deleteItem(user.uid, itemId);
		setItems(items.filter(item => item.id !== itemId));
	};

	return (
		<main className="mx-auto my-4 p-4 max-w-6xl flex flex-col justify-center">
			<h1 className="mb-4 text-2xl font-bold text-center">Shopping List + Meal Ideas</h1>
			{user ? (
				<div className="flex gap-6">
					<div className="flex-1 flex flex-col gap-6">
						<NewItem onAddItem={handleAddItem} />
						<ItemList items={items} onItemSelect={handleItemSelect} onItemDelete={handleDeleteItem} />
					</div>
					<div className="flex-1">
						<MealIdeas ingredient={selectedItemName} />
					</div>
				</div>
			) : (
				<p className='text-center'>Please sign in to view your shopping list and meal ideas.</p>
			)}
		</main>
	);
}