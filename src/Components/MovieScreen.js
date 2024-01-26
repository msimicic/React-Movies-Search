import "./MovieScreen.css";

function MovieScreen({ pickedMovie }) {
  return (
    <div className="movie-screen-container">
      <div className="img-container">
        <img
          id="movie-img"
          src={pickedMovie.primaryImage.imageUrl}
          alt={
            pickedMovie?.titleText?.text
              ? pickedMovie.titleText.text
              : "No data"
          }
        />
      </div>
      <div className="description-container">
        <div className="title">
          <span>{pickedMovie?.titleText?.text?.toUpperCase()}</span>
        </div>
        <div>
          Country:{" "}
          {pickedMovie?.releaseDate?.country?.text &&
          pickedMovie?.releaseDate?.country?.id ? (
            <span>
              {pickedMovie.releaseDate.country.text},{" "}
              {pickedMovie.releaseDate.country.id}
            </span>
          ) : (
            <span>No data</span>
          )}
        </div>
        <div>
          Year:{" "}
          {pickedMovie?.releaseDate?.year ? (
            <span>{pickedMovie.releaseDate.year}</span>
          ) : (
            <span>No data</span>
          )}
        </div>
        <div>
          Minutes:{" "}
          {pickedMovie?.titleRuntime?.seconds ? (
            <span>{pickedMovie.titleRuntime.seconds / 60}</span>
          ) : (
            <span>No data</span>
          )}
        </div>
        <div>
          Type:{" "}
          {pickedMovie?.titleType?.text ? (
            <span>{pickedMovie.titleType.text}</span>
          ) : (
            <span>No data</span>
          )}
        </div>
        <div>
          Description:{" "}
          {pickedMovie?.plot?.plotText?.plainText ? (
            <span>{pickedMovie.plot.plotText.plainText}</span>
          ) : (
            <span>No data</span>
          )}
        </div>
        <div>
          Rating:{" "}
          {pickedMovie?.ratingsSummary?.aggregateRating ? (
            <span>{pickedMovie.ratingsSummary.aggregateRating}</span>
          ) : (
            <span>No data</span>
          )}
        </div>
        <div>
          Rank:{" "}
          {pickedMovie?.ratingsSummary?.topRanking?.rank ? (
            <span>{pickedMovie.ratingsSummary.topRanking.rank}</span>
          ) : (
            <span>No data</span>
          )}
        </div>
        <div>
          Votes:{" "}
          {pickedMovie?.ratingsSummary?.voteCount ? (
            <span>{pickedMovie.ratingsSummary.voteCount}</span>
          ) : (
            <span>No data</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieScreen;
