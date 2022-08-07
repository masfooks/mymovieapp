import React from "react";

const MovieList = (props) => {
  const FavouriteComponent = props.favouriteComponent;

  return (
    <>
      {props.movies.map((movie, index) => (
	<div key={index} className='myContainer'>
		<img src={movie.Poster} alt={movie.title}></img>
		<span className="card-title">{movie.Title}</span>
		<div
			onClick={() => props.handleFavouritesClick(movie)}>
			<FavouriteComponent />
		</div>
	</div>
))}
    </>
  );
};

export default MovieList;



// {props.movies.map((movie, index) => {
//   return (
//     <div key={index} className="card bg-dark " style={{ width: "18rem" }}>
//       <img
//         src={movie.Poster}
//         className="card-img-top"
//         alt={movie.Title}
//       ></img>
//       <div className="card-body">
//         <h5>{movie.Title}</h5>
//         <div
//           onClick={() => props.handleFavouritesClick(movie)}
//           className="d-flex align-items-center justify-content-center"
//         >
//           <FavouriteComponent />
//         </div>
//       </div>
//     </div>
//   );
// })}