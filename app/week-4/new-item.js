"use client";
import { useState } from 'react';

export default function NewItem() {
	const [quantity, setQuantity] = useState(1);

	const increment = () => {if (quantity < 20) {setQuantity(quantity + 1)}};
	const decrement = () => {if (quantity > 1) {setQuantity(quantity - 1)}};

	return (
		<div className="flex flex-col items-center gap-4 p-6 rounded-lg w-full max-w-xs mx-auto border border-gray-300">
			<div className="text-lg font-bold mb-2">Quantity: <span className="text-cyan-700">{quantity}</span></div>
			<div className="flex items-center gap-6">
				<button id="decrement-button" disabled={quantity <= 1} onClick={decrement} className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-white-700 transition hover:border-blue-500 hover:text-blue-600 hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">-</button>
				<button id="increment-button" onClick={increment} disabled={quantity >= 20} className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-white-700 transition hover:border-blue-500 hover:text-blue-600 hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">+</button>
			</div>
			<div className="text-sm text-white-500">Allowed range: <span className="font-bold text-cyan-600">1 - 20</span></div>
		</div>
	);
}