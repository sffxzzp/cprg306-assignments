export default function Item({ name, quantity, category }) {
	return (
		<li>
			Name: {name}<br />
			Quantity: {quantity}<br />
			Category: {category}
		</li>
	);
}