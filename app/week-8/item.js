export default function Item({ name, quantity, category, onSelect }) {
	return (
		<li className="rounded-xl border p-5 my-4 shadow-sm dark:text-white dark:hover:bg-white hover:text-cyan-600 dark:hover:text-gray-800 hover:cursor-pointer" onClick={() => onSelect(name)}>
			<div className="font-bold text-lg">{name}</div>
			<div className="flex flex-row justify-between items-center">
				<span>Quantity: <span className="text-blue-400">{quantity}</span></span>
				<span>Category: <span className="text-pink-400">{category}</span></span>
			</div>
		</li>
	);
}