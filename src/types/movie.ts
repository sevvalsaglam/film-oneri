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
  
  