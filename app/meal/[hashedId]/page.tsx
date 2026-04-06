import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMealDetail } from "@/lib/api";
import { decodeId } from "@/lib/hash";
import { MainLayout } from "@/components/templates/MainLayout";
import { GridLayout } from "@/components/templates/GridLayout";
import { MealDetailSection } from "@/components/organisms/MealDetailSection";
import { VideoSection } from "@/components/organisms/VideoSection";
import { Breadcrumb } from "@/components/molecules/Breadcrumb";
import { slugify } from "@/lib/utils";

interface MealPageProps {
  params: Promise<{ hashedId: string }>;
}

export async function generateMetadata({ params }: MealPageProps): Promise<Metadata> {
  const { hashedId } = await params;
  const realId = decodeId(hashedId);

  if (!realId) return { title: "Meal Not Found" };

  const meal = await getMealDetail(realId);
  if (!meal) return { title: "Meal Not Found" };

  return {
    title: meal.strMeal,
    description: `Learn how to make ${meal.strMeal} - ${meal.strCategory} from ${meal.strArea}.`,
  };
}

export default async function MealPage({ params }: MealPageProps) {
  const { hashedId } = await params;
  
  // Decode the secure hashed ID
  const realId = decodeId(hashedId);

  if (!realId) {
    notFound();
  }

  const meal = await getMealDetail(realId);

  if (!meal) {
    notFound();
  }

  // Use the first ingredient as a fallback category for navigation
  const mainIngredient = meal.strIngredient1;

  return (
    <MainLayout>
      <GridLayout
        breadcrumb={
          <Breadcrumb
            items={[
              { label: "Ingredients", href: "/ingredients" },
              ...(mainIngredient ? [{ label: mainIngredient, href: `/ingredients/${slugify(mainIngredient)}` }] : []),
              { label: meal.strMeal },
            ]}
          />
        }
      >
        <MealDetailSection meal={meal} />
        {meal.strYoutube && <VideoSection youtubeUrl={meal.strYoutube} />}
      </GridLayout>
    </MainLayout>
  );
}
