import ItemList from './item-list';

export default function Page() {
	return (
		<main className="mx-auto my-4 p-4 max-w-2xl flex flex-col justify-center">
			<h1 className="mb-4 text-2xl font-bold text-center">Shopping List</h1>
			<ItemList />
		</main>
	);
}