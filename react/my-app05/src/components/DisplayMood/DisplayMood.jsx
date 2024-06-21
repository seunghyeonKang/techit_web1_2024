import "./DisplayMood.css";

export function DisplayMood(props) {
  return (
    <div className="container">
      <h3>{props.mood ? props.mood : "아직 선택하지 않았어요..."}</h3>
    </div>
  );
}
