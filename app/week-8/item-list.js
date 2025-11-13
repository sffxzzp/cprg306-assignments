"use client";
import Item from './item';
import { useState } from 'react';

export default function ItemList({ items, onItemSelect }) {
	const [sortBy, setSortBy] = useState('name');
	const sortedItems = [...items].sort((a, b) => {
		if (sortBy === 'name') {
			return a.name.localeCompare(b.name);
		} else if (sortBy === 'category') {
			return a.category.localeCompare(b.category);
		} else {
			return 0;
		}
	});
	return (
		<section>
			<div className="flex items-center gap-2">
				Sort by: 
				<button onClick={() => setSortBy('name')} className={`px-2 py-2 rounded ${sortBy === 'name' ? 'hover:bg-blue-600 bg-blue-500 text-white' : 'hover:bg-blue-100 bg-gray-200 text-black'}`}>Name</button>
				<button onClick={() => setSortBy('category')} className={`px-2 py-2 rounded ${sortBy === 'category' ? 'hover:bg-blue-600 bg-blue-500 text-white' : 'hover:bg-blue-100 bg-gray-200 text-black'}`}>Category</button>
			</div>
			<ul>
				{sortedItems.map(item => (
					<Item key={item.id} {...item} onSelect={onItemSelect} />
				))}
			</ul>
		</section>
	);
};