import type { Metadata } from "next";
import { getIngredients } from "@/lib/api";
import { MainLayout } from "@/components/templates/MainLayout";
import { GridLayout } from "@/components/templates/GridLayout";
import { IngredientSearchList } from "@/components/organisms/IngredientSearchList";
import { Typography } from "@/components/atoms/Typography";

export const metadata: Metadata = {
  title: "Browse Ingredients",
  description: "Explore all available cooking ingredients and discover delicious meals.",
};

export default async function IngredientsPage() {
  const ingredients = await getIngredients();

  return (
    <MainLayout>
      <GridLayout
        title={<Typography variant="h1">Explore Ingredients</Typography>}
        description={
          <Typography variant="p">
            Choose an ingredient to discover meals you can make with it.
          </Typography>
        }
      >
        <IngredientSearchList ingredients={ingredients} />
      </GridLayout>
    </MainLayout>
  );
}
