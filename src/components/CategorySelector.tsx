import { MovieCategory } from "../types/movie";

interface CategorySelectorProps {
  selectedCategories: MovieCategory[];
  onCategoryChange: (category: MovieCategory) => void;
}

export default function CategorySelector({ selectedCategories, onCategoryChange }: CategorySelectorProps) {
  const categories: { label: string; value: MovieCategory }[] = [
    { label: "Action", value: "ACTION" },
    { label: "Adventure", value: "ADVENTURE" },
    { label: "Animation", value: "ANIMATION" },
    { label: "Comedy", value: "COMEDY" },
    { label: "Drama", value: "DRAMA" },
    { label: "Fantasy", value: "FANTASY" },
    { label: "Horror", value: "HORROR" },
    { label: "Mystery", value: "MYSTERY" },
    { label: "Romance", value: "ROMANCE" },
    { label: "Science Fiction", value: "SCIENCE_FICTION" },
    { label: "Thriller", value: "THRILLER" },
    { label: "Crime", value: "CRIME" },
    { label: "Documentary", value: "DOCUMENTARY" },
    { label: "Family", value: "FAMILY" },
    { label: "History", value: "HISTORY" },
    { label: "Musical", value: "MUSICAL" },
    { label: "War", value: "WAR" },
    { label: "Western", value: "WESTERN" },
    { label: "Sports", value: "SPORTS" },
    { label: "Biographical", value: "BIOGRAPHICAL" },
    { label: "Superhero", value: "SUPERHERO" },
    { label: "Coming-of-Age", value: "COMING_OF_AGE" },
    { label: "Psychological", value: "PSYCHOLOGICAL" },
    { label: "Cult", value: "CULT" },
  ];

  return (
    <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8">
      <h2 className="text-2xl text-white mb-6 text-center font-medium">Favori Kategorilerini seç</h2>
      <div className="grid grid-cols-2 gap-x-8 gap-y-3">
        {categories.map((category) => (
          <div key={category.value} className="flex items-center">
            <input
              type="checkbox"
              id={category.value}
              checked={selectedCategories.includes(category.value)}
              onChange={() => onCategoryChange(category.value)}
              className="w-5 h-5 mr-3 rounded border-gray-400"
            />
            <label htmlFor={category.value} className="text-white text-lg">
              {category.label}
            </label>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <button className="bg-black/40 text-white px-12 py-3 rounded-xl text-xl hover:bg-black/50 transition-colors">
          Film Öner
        </button>
      </div>
    </div>
  );
}
