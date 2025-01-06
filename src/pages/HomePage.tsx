import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { Movie, MovieCategory } from "../types/movie";
import styled from "styled-components";
import FilmList from "../components/FilmList";

// Global button styles
const GlobalButton = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  font-size: 1.125rem;
  border-radius: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border: none;

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

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

const SectionWrapper = styled.div`
  display: grid;
  gap: 1.5rem;
`;

const CategoryWrapper = styled.div`
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
  font-family: 'Signika', sans-serif;
  color: black;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
`;

const RecommendButton = styled(GlobalButton)<{ disabled: boolean }>`
  margin-top: 1rem;
  background-color: rgba(128, 128, 128, 0.6);
  color: white;
  border-radius: 0.375rem;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.disabled ? '0.5' : '1')};

  &:hover {
    background-color: ${(props) => (props.disabled ? 'rgba(128, 128, 128, 0.6)' : 'rgba(128, 128, 128, 0.8)')};
  }
`;

const CheckBoxWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 columns */
  gap: 15px;
  margin-top: 20px;
`;

const CheckBoxLabel = styled.label<{ selected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  padding: 0.75rem 1rem;
  background-color: ${(props) => props.selected ? 'rgba(169, 169, 169, 0.5)' : '#f0f0f0'};
  border-radius: 1rem;
  border: 2px solid ${(props) => props.selected ? '#343a40' : '#ccc'};
  cursor: pointer;
  transition: background-color 0.3s ease, border-color 0.3s ease;
  margin-bottom: 15px;

  &:hover {
    background-color: rgba(169, 169, 169, 0.3);
  }

  &:focus {
    outline: none;
  }

  span {
    font-size: 1.125rem;
    font-weight: 500;
  }

  svg {
    width: 20px;
    height: 20px;
    fill: ${(props) => props.selected ? '#343a40' : '#ccc'};
  }
`;

const CheckBoxInput = styled.input`
  display: none;

  &:checked + ${CheckBoxLabel} {
    background-color: rgba(169, 169, 169, 0.5);
    border-color: #343a40;
  }

  &:checked + ${CheckBoxLabel} svg {
    fill: #343a40;
  }
`;

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
    if (selectedCategories.length === 0) return;

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
    <Container>
      <ContentWrapper>
        <Header />
        <SectionWrapper>
          {!showRecommendations && (
            <CategoryWrapper>
              <Title>Kategoriler</Title>
              <CheckBoxWrapper>
                {[
                  'Action', 'Adventure', 'Animation', 'Comedy', 'Crime', 'Documentary',
                  'Drama', 'Family', 'Fantasy', 'History', 'Horror', 'Music', 'Mystery',
                  'News', 'Romance', 'Science Fiction', 'Talk Show', 'Thriller', 'War',
                  'Western', 'Drama', 'Reality', 'Game Show', 'Short'
                ].map((category) => (
                  <div key={category}>
                    <CheckBoxInput
                      type="checkbox"
                      id={category}
                      onChange={() => handleCategoryChange(category as MovieCategory)}
                      checked={selectedCategories.includes(category as MovieCategory)}
                    />
                    <CheckBoxLabel
                      htmlFor={category}
                      selected={selectedCategories.includes(category as MovieCategory)}
                    >
                      <span>{category}</span>
                      {selectedCategories.includes(category as MovieCategory) && (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path d="M9 19l-7-7 1.41-1.41L9 16.17l13.59-13.59L24 4l-15 15z" />
                        </svg>
                      )}
                    </CheckBoxLabel>
                  </div>
                ))}
              </CheckBoxWrapper>
              <RecommendButton
                onClick={handleGetRecommendations}
                disabled={selectedCategories.length === 0}
              >
                Film Öner
              </RecommendButton>
            </CategoryWrapper>
          )}

          {showRecommendations && (
            <div>
              <Title>Öneriler</Title>
              <FilmList
                movies={recommendations}
                onSuccess={() => navigate("/success")}
                onRetry={() => {
                  setShowRecommendations(false);
                  setRecommendations([]);
                }}
              />
            </div>
          )}
        </SectionWrapper>
      </ContentWrapper>
    </Container>
  );
}
