"use client";
import { useState } from 'react';

export default function NewItem() {
	const [quantity, setQuantity] = useState(1);

	const increment = () => {setQuantity(quantity < 20 ? quantity + 1 : quantity)};;
	const decrement = () => {setQuantity(quantity > 1 ? quantity - 1 : quantity)};

	return (
		<section className="flex flex-col items-center gap-4 p-6 rounded-lg w-full max-w-xs mx-auto border border-gray-300">
			<div className="text-lg font-bold mb-2">Quantity: <span className="text-cyan-300">{quantity}</span></div>
			<div className="flex items-center gap-6">
				<button id="decrement-button" disabled={quantity <= 1} onClick={decrement} className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-white-700 transition hover:border-blue-500 hover:text-blue-600 hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">-</button>
				<button id="increment-button" disabled={quantity >= 20} onClick={increment} className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-white-700 transition hover:border-blue-500 hover:text-blue-600 hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">+</button>
			</div>
			<div className="text-sm text-white-500">Allowed range: <span className="font-bold text-cyan-300">1 - 20</span></div>
		</section>
	);
}