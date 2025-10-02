"use client";
import { useState } from 'react';

export default function NewItem() {
	const [name, setName] = useState("");
	const [quantity, setQuantity] = useState(1);
	const [category, setCategory] = useState("produce");

	const handleSubmit = (e) => {
		e.preventDefault();
		const item = { name, quantity, category };
		console.log(item);
		alert(`Name: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);
		setName("");
		setQuantity(1);
		setCategory("produce");
	}

	const increment = () => {if (quantity < 20) {setQuantity(quantity + 1)}};
	const decrement = () => {if (quantity > 1) {setQuantity(quantity - 1)}};

	return (
		<form onSubmit={handleSubmit}>
			<section className="flex flex-col gap-4 p-6 rounded-lg w-full max-w-xs mx-auto border border-gray-300">
				<div className="text-lg font-bold mb-2">Name:</div>
				<input type="text" placeholder="e.g., milk, 4 L 🥛" value={name} onChange={(e) => setName(e.target.value)} className="border border-gray-300 p-2 rounded" required />
				<div className="text-lg font-bold mb-2">Quantity: <span className="text-cyan-700">{quantity}</span></div>
				<div className="flex gap-6">
					<button type="button" id="decrement-button" disabled={quantity <= 1} onClick={decrement} className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-white-700 transition hover:border-blue-500 hover:text-blue-600 hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">-</button>
					<button type="button" id="increment-button" disabled={quantity >= 20} onClick={increment} className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-white-700 transition hover:border-blue-500 hover:text-blue-600 hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">+</button>
				</div>
				<div className="text-sm text-white-500">Allowed range: <span className="font-bold text-cyan-600">1 - 20</span></div>
				<div className="text-lg font-bold mb-2">Category:</div>
				<select value={category} onChange={(e) => setCategory(e.target.value)} className="border border-gray-300 p-2 rounded">
					<option value="produce">Produce</option>
					<option value="dairy">Dairy</option>
					<option value="bakery">Bakery</option>
					<option value="meat">Meat</option>
					<option value="frozen foods">Frozen Foods</option>
					<option value="canned goods">Canned Goods</option>
					<option value="dry goods">Dry Goods</option>
					<option value="beverages">Beverages</option>
					<option value="snacks">Snacks</option>
					<option value="household">Household</option>
					<option value="other">Other</option>
				</select>
				<button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">Add Item</button>
			</section>
		</form>
	);
}