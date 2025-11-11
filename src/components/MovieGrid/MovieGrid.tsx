import React from "react";
import type { Movie } from "../../types/movie";
import MovieCard from "../MovieCard/MovieCard";
import styles from "./MovieGrid.module.css"; // ✅ додаємо імпорт стилів

interface MovieGridProps {
  movies: Movie[];
  onSelect: (movie: Movie) => void;
}

function MovieGrid({ movies, onSelect }: MovieGridProps) {
  if (!Array.isArray(movies) || movies.length === 0) {
    return <p>No movies found.</p>;
  }

  return (
    <div className={styles.grid}>
      {" "}
      {/* ✅ застосовуємо модульний клас */}
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} onSelect={onSelect} />
      ))}
    </div>
  );
}

export default MovieGrid;
