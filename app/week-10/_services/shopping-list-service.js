import { db } from "../../_utils/firebase";
import { collection, getDocs, addDoc, doc, deleteDoc, query } from "firebase/firestore";

export async function getItems(userId) {
	const items = [];
	const itemsCollection = collection(db, "users", userId, "items");
	const itemsDoc = await getDocs(itemsCollection);
	itemsDoc.forEach((doc) => {
		items.push({ ...doc.data(), id: doc.id });
	});
	return items;
}

export async function addItem(userId, item) {
	const itemsCollection = collection(db, "users", userId, "items");
	const docRef = await addDoc(itemsCollection, item);
	return docRef.id;
}

export async function deleteItem(userId, itemId) {
	try {
		const itemDoc = doc(db, "users", userId, "items", itemId);
		await deleteDoc(itemDoc);
	} catch (error) {
		console.error("Failed to delete item:", error);
	}
}