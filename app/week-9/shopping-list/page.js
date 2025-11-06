"use client";
import NewItem from './new-item';
import ItemList from './item-list';
import MealIdeas  from './meal-ideas';
import itemsData from './items.json';

import { useState } from 'react';

export default function Page() {
	const [items, setItems] = useState(itemsData);
	const [selectedItemName, setSelectedItemName] = useState(null);

	const handleItemSelect = (itemName) => {
		// adapted from https://stackoverflow.com/questions/10992921/how-to-remove-emoji-code-using-javascript/41543705#41543705
		const clearedName = itemName.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '').split(',')[0].trim().replace(/s$/g, '');
		console.log("Selected item:", clearedName);
		setSelectedItemName(clearedName);
	};

	const handleAddItem = (item) => {
		setItems([...items, item]);
	};

	return (
		<main className="mx-auto my-4 p-4 max-w-6xl flex flex-col justify-center">
			<h1 className="mb-4 text-2xl font-bold text-center">Shopping List + Meal Ideas</h1>
			<div className="flex gap-6">
				<div className="flex-1 flex flex-col gap-6">
					<NewItem onAddItem={handleAddItem} />
					<ItemList items={items} onItemSelect={handleItemSelect} />
				</div>
				<div className="flex-1">
					<MealIdeas ingredient={selectedItemName} />
				</div>
			</div>
		</main>
	);
}