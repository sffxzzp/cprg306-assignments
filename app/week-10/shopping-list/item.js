export default function Item({ name, quantity, category, onSelect, onDelete }) {
	return (
		<li className="rounded-xl border p-5 my-4 shadow-sm dark:text-white dark:hover:bg-white hover:text-cyan-600 dark:hover:text-gray-800 hover:cursor-pointer" onClick={() => onSelect(name)}>
			<div className="flex flex-row justify-between items-center">
				<span className="font-bold text-lg">{name}</span>
				<button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700 hover:cursor-pointer" onClick={(e) => { e.stopPropagation(); onDelete(); }}>Delete</button>
			</div>
			<div className="flex flex-row justify-between items-center">
				<span>Quantity: <span className="text-blue-400">{quantity}</span></span>
				<span>Category: <span className="text-pink-400">{category}</span></span>
			</div>
		</li>
	);
}