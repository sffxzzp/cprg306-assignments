import NewItems from './new-item';

export default function Page() {
	return (
		<main className="mx-auto my-4 p-4 max-w-2xl flex flex-col justify-center">
			<h1 className="mb-4 text-2xl font-bold text-center">Add New Item</h1>
			<NewItems />
		</main>
  	);
}