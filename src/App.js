import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Axios from 'axios';

import Starships from './components/Starships';
import Starshipdetails from './components/Starshipdetails';
import './App.css';

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    const getStarships = async () => {
      const starshipData = await Axios.get(
        'https://swapi.dev/api/starships'
      ).catch(() => null);

      if (starshipData) {
        setData(starshipData.data.results);
      }
    };

    getStarships();
  }, []);

  const renderStarships = () => {
    if (!data) {
      return null;
    }

    // higher order components wrap child components and inject data into them
    return (
      <Switch>


<Route path="/starships/:id"><Starshipdetails data={data}/></Route>

        {/* <Route
          path="/starships/:id"
          render={(route) => {
            // const id= route.match.params.id
            // const target = procedureList.find((p)=>p.id ===parseInt(id))
            // return <ProcedureDetails procedure={target}/>
            // console.log(route.match.params.id)
            // console.log(data[1])

            return (
              <Starshipdetails
                details={data[parseInt(route.match.params.id)]}
              />
            );
          }}
        /> */}

        <Route path="/">
          <Starships data={data} />
        </Route>

        {/* <Route path="/starships/:id">
          <Starshipdetails details={data} />
        </Route> */}
      </Switch>
    );
  };

  // every child of a route is either a switch
  // or another route
  // all routes end with a component
  //

  //put browser router in index.js
  return (
    <div className="App">

      <div> Starships list</div>
      {renderStarships()}
    </div>
  );
}

export default App;
