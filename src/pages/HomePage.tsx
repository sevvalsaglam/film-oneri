import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import CategorySelector from "../components/CategorySelector";
import FilmList from "../components/FilmList";
import { Movie, MovieCategory } from "../types/movie";

export default function HomePage() {
  const [selectedCategories, setSelectedCategories] = useState<MovieCategory[]>([]);
  const [recommendations, setRecommendations] = useState<Movie[]>([]);
  const [showRecommendations, setShowRecommendations] = useState(false);
  const navigate = useNavigate();

  const handleCategoryChange = (category: MovieCategory) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleGetRecommendations = () => {
    const mockRecommendations: Movie[] = [
      { id: "1", name: "Movie Name", rating: 8.5, imageUrl: "/placeholder.svg" },
      { id: "2", name: "Movie Name", rating: 7.9, imageUrl: "/placeholder.svg" },
      { id: "3", name: "Movie Name", rating: 8.2, imageUrl: "/placeholder.svg" },
      { id: "4", name: "Movie Name", rating: 7.5, imageUrl: "/placeholder.svg" },
      { id: "5", name: "Movie Name", rating: 8.8, imageUrl: "/placeholder.svg" },
    ];
    setRecommendations(mockRecommendations);
    setShowRecommendations(true);
  };

  return (
    <div 
      className="min-h-screen p-6"
      style={{
        backgroundImage: "url('/movie-posters-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <Header />
        <div className="grid md:grid-cols-2 gap-6">
          <CategorySelector
            selectedCategories={selectedCategories}
            onCategoryChange={handleCategoryChange}
          />
          {showRecommendations ? (
            <FilmList
              movies={recommendations}
              onSuccess={() => navigate("/success")}
              onRetry={() => setShowRecommendations(false)}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}

