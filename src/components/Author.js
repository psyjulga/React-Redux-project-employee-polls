const Author = ({ name, date, avatar }) => {
  return (
    <div className="author">
      <p>{name}</p>
      <img
        src={avatar}
        alt={`${name.toLowerCase()} avatar`}
        width="35"
        height="35"
      />
      <p>{date}</p>
    </div>
  );
};

export default Author;
