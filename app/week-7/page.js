"use client";
import NewItem from './new-item';
import ItemList from './item-list';
import itemsData from './items.json';

import { useState } from 'react';

export default function Page() {
	const [items, setItems] = useState(itemsData);

	const handleAddItem = (item) => {
		setItems([...items, item]);
	};

	return (
		<main className="mx-auto my-4 p-4 max-w-2xl flex flex-col justify-center">
			<h1 className="mb-4 text-2xl font-bold text-center">Shopping List</h1>
			<NewItem onAddItem={handleAddItem} />
			<ItemList items={items} />
		</main>
	);
}