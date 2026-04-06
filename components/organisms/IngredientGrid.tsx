import { Ingredient } from "@/lib/api";
import { IngredientCard } from "@/components/molecules/IngredientCard";

interface IngredientGridProps {
  ingredients: Ingredient[];
}

export function IngredientGrid({ ingredients }: IngredientGridProps) {
  if (ingredients.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 md:gap-6">
      {ingredients.map((ingredient) => (
        <IngredientCard key={ingredient.idIngredient} name={ingredient.strIngredient} />
      ))}
    </div>
  );
}
