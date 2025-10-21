"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
	try {
		let responses = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
		let data = await responses.json();
		return data.meals || [];
	} catch (error) {
		console.error("Error fetching meal ideas:", error);
	}
}

export default function MealIdeas({ ingredient }) {
	const [meals, setMeals] = useState([]);
	function loadMealIdeas(ingredient) {
		fetchMealIdeas(ingredient).then(setMeals);
	}
	useEffect(() => {
		loadMealIdeas(ingredient);
	}, [ingredient]);

	return (
		<div className="w-full">
			<h2 className="text-lg font-semibold mb-4">Meal Ideas {ingredient ? "for "+ ingredient : "(select an item)"}</h2>
			{meals.length === 0 ? (
				<p className="text-center py-8 text-gray-500">
					{ingredient ? "No meals found." : "Choose an item to see meal ideas."}
				</p>
			) : (
				<ul className="grid grid-cols-1 gap-3">
					{meals.map((meal) => (
						<li key={meal.idMeal} className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl shadow-sm text-white hover:bg-white hover:text-gray-800">
							<Image src={meal.strMealThumb} alt={meal.strMeal} width={52} height={52} className="rounded-md object-cover flex-shrink-0" unoptimized />
							<span className="font-medium">{meal.strMeal}</span>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}