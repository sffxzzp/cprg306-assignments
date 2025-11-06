"use client";
import { useUserAuth } from "../contexts/AuthContext";
import { useRouter } from "next/navigation";

export default function Page() {
	const router = useRouter();
	const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
	return (
		<main>
			{user ? (
				<div>
					<p>Welcome, {user.displayName} ({user.email})</p>
					<p><button onClick={() => router.push("/week-9/shopping-list")}>Go to Shopping List</button></p>
					<p><button onClick={firebaseSignOut}>Sign Out</button></p>
				</div>
			) : (
				<div>
					<p>Please sign in.</p>
					<p><button onClick={gitHubSignIn}>Sign In with GitHub</button></p>
				</div>
			)}
		</main>	
	);
}