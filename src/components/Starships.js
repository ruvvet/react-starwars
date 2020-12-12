import { Link } from 'react-router-dom';
import './starships.css';


export default function Starships({ data }) {
  if (!data) {
    return null;
  }
  //const starshipLinks = data.map((ship, index) => <li>{ship.name}</li>)
  const starshipLinks = data.map((ship, i) => (
    <li className = "starship-li">
      <Link to={`/starships/${i}`}>{ship.name}</Link>
    </li>
  ));

  return <ul className = "starships-ul">{starshipLinks}</ul>;
}
