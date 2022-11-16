import './App.css';
import React, { Suspense } from "react";
import {Link, Route} from "wouter"
import Detail from './pages/Details';
import SearchResult from './pages/SearchResult';
import Pepito from './context/StaticContext'
import { GifsContextProvider } from './context/GifsContext';

const HomePage = React.lazy(()=>import('./pages/Home'))

function App() {

  return (
    <Pepito.Provider value={{name: "Leonardo", CI: 28040852}}>

    <div className="App">
      <Suspense fallback={null}>
      <section className="App-content">

        <Link to="/"><h1>Giffy</h1></Link>

        <GifsContextProvider>

          <Route
          component={HomePage}
          path="/"  />

          <Route
          component={SearchResult}
          path="/search/:keyword" />

          <Route 
          component={Detail}
          path="/gif/:id" />

        </GifsContextProvider>

      </section>
      </Suspense>
    </div>

    </Pepito.Provider>
  )
}

export default App;