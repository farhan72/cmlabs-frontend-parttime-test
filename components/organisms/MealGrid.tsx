import { MealPreview } from "@/lib/api";
import { MealCard } from "@/components/molecules/MealCard";

interface MealGridProps {
  meals: MealPreview[];
}

export function MealGrid({ meals }: MealGridProps) {
  if (meals.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <p className="text-muted">No meals found for this ingredient.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:gap-6">
      {meals.map((meal) => (
        <MealCard
          key={meal.idMeal}
          id={meal.idMeal}
          title={meal.strMeal}
          image={meal.strMealThumb}
        />
      ))}
    </div>
  );
}
