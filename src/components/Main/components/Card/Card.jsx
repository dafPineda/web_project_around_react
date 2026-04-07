export default function Card(props) {
  const { name, link, isLiked } = props.card;
  return (
    <li className="element__card">
      <img className="element__card-image" src={link} alt={name} />
      <button
        aria-label="Delete card"
        className="element__card-trash"
        type="button"
      />
      <div className="element__card-info">
        <h2 className="element__card-text">{name}</h2>
        <button
          aria-label="Like card"
          type="button"
          className="element__card-heart"
        />
      </div>
    </li>
  );
}