export const Card = (props) => {
  return (
    <div className="card">
      <img src={`../images/${props.coverImg}`} className="card--image" />
    </div>
  );
};
