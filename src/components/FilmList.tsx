// FilmList.tsx
import { Movie } from "../types/movie";
import styled from "styled-components";

interface FilmListProps {
  movies: Movie[];
  onSuccess: () => void;
  onRetry: () => void;
}

const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
  border-radius: 1.25rem;
  padding: 2rem;
  width: 100%; /* Ensures the width matches the form's width */
  max-width: 32rem; /* Ensures it doesn't exceed the max width of the form */
`;

const Title = styled.h2`
  font-size: 1.5rem;
  color: white;
  margin-bottom: 1.5rem;
  text-align: center;
  font-weight: 500;
`;

const MovieItem = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 1rem;
  margin-bottom: 1rem;
`;

const MovieImageContainer = styled.div`
  width: 4rem;
  height: 4rem;
  background-color: #4b5563;
  border-radius: 0.75rem;
  margin-right: 1rem;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MovieImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.75rem;
`;

const MovieDetails = styled.div`
  flex: 1;
`;

const MovieTitle = styled.h3`
  color: white;
  font-size: 1.25rem;
`;

const MovieRating = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.875rem;
`;

const Button = styled.button`
  padding: 0.75rem 2rem;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  border-radius: 1rem;
  font-size: 1.125rem;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;

export default function FilmList({ movies, onSuccess, onRetry }: FilmListProps) {
  return (
    <Container>
      <Title>Öneriler</Title>
      <div className="space-y-4">
        {movies.map((movie) => (
          <MovieItem key={movie.id}>
            <MovieImageContainer>
              <MovieImage src={movie.imageUrl} alt={movie.name} />
            </MovieImageContainer>
            <MovieDetails>
              <MovieTitle>{movie.name}</MovieTitle>
              <MovieRating>{movie.rating} points</MovieRating>
            </MovieDetails>
          </MovieItem>
        ))}
      </div>
      <ButtonContainer>
        <Button onClick={onRetry}>Tekrar Dene</Button>
        <Button onClick={onSuccess}>Başarılı!</Button>
      </ButtonContainer>
    </Container>
  );
}
