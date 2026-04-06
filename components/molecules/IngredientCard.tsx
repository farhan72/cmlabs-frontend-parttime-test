import Link from "next/link";
import { Card } from "./Card";
import { Image } from "@/components/atoms/Image";
import { Typography } from "@/components/atoms/Typography";
import { slugify } from "@/lib/utils";

interface IngredientCardProps {
  name: string;
  priority?: boolean;
}

export function IngredientCard({ name, priority = false }: IngredientCardProps) {
  const imageUrl = `https://www.themealdb.com/images/ingredients/${encodeURIComponent(name)}.png`;

  return (
    <Link href={`/ingredients/${slugify(name)}`} className="block h-full">
      <Card className="h-full hover:border-accent hover:ring-2 hover:ring-accent/10 hover:ring-offset-2 group">
        <div className="relative h-48 w-full bg-surface flex items-center justify-center p-6 overflow-hidden">
          <Image
            src={imageUrl}
            alt={name}
            width={120}
            height={120}
            priority={priority}
            sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 20vw, 16vw"
            className="object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-300"
            wrapperClassName="h-full w-full flex justify-center items-center"
          />
          <div className="absolute inset-0 bg-[var(--color-overlay)] z-10 pointer-events-none group-hover:bg-black/50 transition-colors duration-300" />
          <div className="absolute inset-0 z-20 flex flex-col justify-end p-4">
             <Typography variant="h4" className="text-center text-lg lg:text-xl text-white group-hover:text-accent-hover transition-colors line-clamp-2 drop-shadow-md">
              {name}
            </Typography>
          </div>
        </div>
      </Card>
    </Link>
  );
}
