"use client";
import Link from "next/link";
import { useUserAuth } from "../contexts/AuthContext";

export default function Page() {
	const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
	return (
		<main className="mx-auto my-6 p-4 max-w-xl">
			<div className="rounded-xl border p-6 shadow-sm">
				<h1 className="text-2xl font-bold text-center mb-4">Shopping List</h1>
				{user ? (
					<div className="space-y-4 text-center">
						<p>Welcome, <span className="font-bold">{user.displayName}</span> (<span className="text-cyan-600 dark:text-cyan-400">{user.email}</span>)</p>
						<div className="flex flex-col sm:flex-row gap-3 justify-center">
							<Link className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition hover:cursor-pointer" href="/week-9/shopping-list">Go to Shopping List</Link>
							<button onClick={firebaseSignOut} className="border py-2 px-4 rounded hover:border-blue-800 hover:text-blue-600 hover:cursor-pointer transition">Sign Out</button>
						</div>
					</div>
				) : (
					<div className="space-y-4 text-center">
						<p>Please sign in.</p>
						<button onClick={gitHubSignIn} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition hover:cursor-pointer">Sign In with GitHub</button>
					</div>
				)}
			</div>
		</main>	
	);
}