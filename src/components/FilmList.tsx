import { Movie } from "../types/movie";

interface FilmListProps {
  movies: Movie[];
  onSuccess: () => void;
  onRetry: () => void;
}

export default function FilmList({ movies, onSuccess, onRetry }: FilmListProps) {
  return (
    <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8">
      <h2 className="text-2xl text-white mb-6 text-center font-medium">Öneriler</h2>
      <div className="space-y-4">
        {movies.map((movie) => (
          <div key={movie.id} className="flex items-center bg-white/10 rounded-xl p-4">
            <div className="w-16 h-16 bg-gray-700 rounded-lg mr-4 flex-shrink-0">
              <img src={movie.imageUrl} alt={movie.name} className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="flex-1">
              <h3 className="text-white text-xl">{movie.name}</h3>
              <p className="text-white/80 text-sm">{movie.rating} points</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-8">
        <button
          onClick={onRetry}
          className="bg-black/40 text-white px-8 py-3 rounded-xl text-xl hover:bg-black/50 transition-colors"
        >
          Tekrar Dene
        </button>
        <button
          onClick={onSuccess}
          className="bg-black/40 text-white px-8 py-3 rounded-xl text-xl hover:bg-black/50 transition-colors"
        >
          Başarılı!
        </button>
      </div>
    </div>
  );
}
