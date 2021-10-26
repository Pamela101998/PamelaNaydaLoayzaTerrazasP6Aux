import {Card} from "./Card";
import movies from  "./movies.json";

export function Movies () {
    return (
      <ul>
         {movies.map((movie) => (
           <Card key={movie.title} movie={movie} />

         ))}
      </ul>
    );  
}