export interface Movie {
    id: string;
    name: string;
    rating: number;
    imageUrl: string;
}

export type MovieCategory =
    | "ACTION"
    | "ADVENTURE"
    | "ANIMATION"
    | "COMEDY"
    | "DRAMA"
    | "FANTASY"
    | "HORROR"
    | "MYSTERY"
    | "ROMANCE"
    | "SCIENCE_FICTION"
    | "THRILLER"
    | "CRIME"
    | "DOCUMENTARY"
    | "FAMILY"
    | "HISTORY"
    | "MUSICAL"
    | "WAR"
    | "WESTERN"
    | "SPORTS"
    | "BIOGRAPHICAL"
    | "SUPERHERO"
    | "COMING_OF_AGE"
    | "PSYCHOLOGICAL"
    | "CULT";

export const ALL_CATEGORIES: { label: string; value: MovieCategory }[] = [
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