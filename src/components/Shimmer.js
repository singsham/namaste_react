const Shimmer = () => {
  return (
    <div className="res-container">
      {Array(10)
        .fill(1)
        .map((el, index) => (
          <div className="resturent-card" key={el + index}></div>
        ))}
    </div>
  );
};
export default Shimmer;
