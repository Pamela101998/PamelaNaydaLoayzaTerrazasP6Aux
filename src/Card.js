import './index.css';

export function Card ({movie}) {
    const img = movie.image;
    return (
    <li className ="movieCard">
        <img
        width="230"
        height="345" 
        className="movieImage" 
        src={img} alt={movie.title} />
        <div>
            {movie.title}

           <button> {movie.opening_crawl}</button> 
           <button> {movie.release_date}</button>
           
        </div>
        </li>
    );
}