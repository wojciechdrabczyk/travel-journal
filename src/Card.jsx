export const Card = (props) => {
  return (
    <div className="card">
      <img src={`../images/${props.coverImg}`} className="card--image" />
      <div className="card--country">
        <img src="../images/Pin.png" className="card--pin" />
        <span className="country">{props.country}</span>
      </div>
      <div className="card--info">
        <p className="location">{props.location}</p>
        <p className="date">{props.date}</p>
        <p className="description">{props.description}</p>
      </div>
    </div>
  );
};
