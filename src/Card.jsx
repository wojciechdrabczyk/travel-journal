export const Card = (props) => {
  return (
    <div className="card">
      <img src={`../images/${props.coverImg}`} className="card--image" />
      <div className="card--info">
        <div className="card--country">
          <img src="../images/Pin.png" className="card--pin" />
          <p className="country">{props.country}</p>
          <p className="gmaps">
            <a href={props.gmaps}>View on Google Maps</a>
          </p>
        </div>
        <p className="location">{props.location}</p>
        <p className="date">{props.date}</p>
        <p className="description">{props.description}</p>
      </div>
    </div>
  );
};
