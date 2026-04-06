import { MealDetail, extractIngredients } from "@/lib/api";
import { Image } from "@/components/atoms/Image";
import { Typography } from "@/components/atoms/Typography";
import { Badge } from "@/components/atoms/Badge";
import { Card, CardContent } from "@/components/molecules/Card";

interface MealDetailSectionProps {
  meal: MealDetail;
}

export function MealDetailSection({ meal }: MealDetailSectionProps) {
  const ingredientsAndMeasures = extractIngredients(meal);

  return (
    <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
      {/* Left: Image Banner */}
      <div className="w-full lg:w-1/3 shrink-0">
        <div className="sticky top-24">
          <Image
            src={meal.strMealThumb}
            alt={meal.strMeal}
            width={600}
            height={600}
            className="rounded-2xl object-cover shadow-xl border border-gray-100"
            wrapperClassName="aspect-square w-full rounded-2xl bg-gray-100"
          />
        </div>
      </div>

      {/* Right: Detailed Content */}
      <div className="w-full lg:w-2/3 flex flex-col gap-10">
        <div className="flex flex-col gap-5">
          <div className="flex flex-wrap gap-2">
            <Badge variant="default">{meal.strCategory}</Badge>
            <Badge variant="secondary">{meal.strArea}</Badge>
            {meal.strTags?.split(',').map(tag => tag.trim()).filter(Boolean).map(tag => (
              <Badge key={tag} variant="outline" className="bg-white">{tag}</Badge>
            ))}
          </div>
          <Typography variant="h1">{meal.strMeal}</Typography>
        </div>

        <div className="grid gap-8 md:grid-cols-12 items-start">
          {/* Ingredients List */}
          <div className="flex flex-col gap-5 md:col-span-5 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <Typography variant="h3">Ingredients</Typography>
            <ul className="divide-y divide-gray-100 flex flex-col">
              {ingredientsAndMeasures.map((item, idx) => (
                <li key={idx} className="flex justify-between py-3">
                  <span className="font-medium text-gray-900">{item.ingredient}</span>
                  <span className="text-gray-500 text-right ms-4">{item.measure}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Instructions */}
          <div className="flex flex-col gap-5 md:col-span-7">
            <Typography variant="h3">Instructions</Typography>
            <div className="prose prose-gray max-w-none text-gray-600 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
              {meal.strInstructions.split('\n').filter(p => p.trim()).map((paragraph, idx) => (
                <p key={idx} className="leading-relaxed">{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
