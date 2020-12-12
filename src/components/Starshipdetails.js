import { Link } from 'react-router-dom';
import { useParams, useLocation, useHistory } from 'react-router';

export default function Starshipdetails({ data }) {
  const { id } = useParams();
  const location = useLocation();

  console.log(location)
  const history = useHistory();
  console.log(history)

  const details = data[parseInt(id)];
  const starshipDetails = Object.entries(details);

  // const printAlltheStuff = () => {
  //   const stuff = [];
  //   for (const [k, v] of Object.entries(details)) {
  //     stuff.push(
  //       <li className="details-li">
  //         <span className="key">{k}:</span> <span className="val">{v}</span>
  //       </li>
  //     );
  //   }
  //   return stuff;
  // };

  // const printDetails = starshipDetails.map((starship) => (
  //   <li className="details-li">
  //     <span className="key">{starship[0]}:</span>{' '}
  //     <span className="val">{starship[1]}</span>
  //   </li>
  // ));

  ///???? BETTER WAY TO DO THIS???


  const goBack = () => {
    // history.push('/')
    history.goBack()

  }

  if (!details) {
    return null;
  }
  return (
    <>
    <button onClick={goBack}>back</button>
    <ul className="details-ul">
      {starshipDetails.map(([k, v]) => (
        <li className="details-li" key={k}>
          <span className="key">{k}:</span>
          <span className="val">{v}</span>
        </li>
      ))}
    </ul>
    </>
  );
}

// export default function StarshipsHOC({ data }) {
//   const { id } = useParams();
//   return <Starshipdetails details={data[parseInt(id)]} />;
// }

// //
