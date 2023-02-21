import mountainimg from "../image 12.png";
import starimg from "../Group 65.png";

function Card() {
  return (
    <div className="card">
      <img src={mountainimg} alt="" className="card--image"></img>
      <div className="card--stats">
        <img src={starimg} alt="" className="star--img"></img>
      </div>
    </div>
  );
}

export default Card;
