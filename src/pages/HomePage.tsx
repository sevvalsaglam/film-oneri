import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import FilmList from "../components/FilmList";
import CategorySelector from "../components/CategorySelector";
import { Movie, MovieCategory } from "../types/movie";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  padding: 1.5rem;
  background-image: url('/movie-posters-bg.jpg');
  background-size: cover;
  background-position: center;
`;

const ContentWrapper = styled.div`
  max-width: 96rem;
  margin: 0 auto;
`;

const RecommendButton = styled.button<{ disabled: boolean }>`
  margin-top: 1rem;
  width: 100%;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  font-size: 1.125rem;
  border-radius: 1rem;
  border: none;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};

  &:hover {
    background-color: ${(props) => (props.disabled ? "rgba(0, 0, 0, 0.4)" : "rgba(0, 0, 0, 0.5)")};
  }
`;

export default function HomePage() {
  const [selectedCategories, setSelectedCategories] = useState<MovieCategory[]>([]);
  const [recommendations, setRecommendations] = useState<Movie[]>([]);
  const [showRecommendations, setShowRecommendations] = useState(false);
  const navigate = useNavigate();

  const handleCategoryChange = (category: MovieCategory) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  const handleGetRecommendations = () => {
    if (selectedCategories.length === 0) return;

    const mockRecommendations: Movie[] = Array.from({ length: 5 }, (_, i) => ({
      id: `${i + 1}`,
      name: `Movie ${i + 1}`,
      rating: Math.random() * 2 + 7,
      imageUrl: "/placeholder.svg",
    }));

    setRecommendations(mockRecommendations);
    setShowRecommendations(true);
  };

  return (
    <Container>
      <ContentWrapper>
        <Header />
        {!showRecommendations ? (
          <>
            <CategorySelector
              selectedCategories={selectedCategories}
              onCategoryChange={handleCategoryChange}
            />
            <RecommendButton
              onClick={handleGetRecommendations}
              disabled={selectedCategories.length === 0}
            >
              Film Öner
            </RecommendButton>
          </>
        ) : (
          <FilmList
            movies={recommendations}
            onSuccess={() => navigate('/success')}
            onRetry={() => setShowRecommendations(false)}
          />
        )}
      </ContentWrapper>
    </Container>
  );
}
