import './App.css';
import React from "react";
import "./components/Gifs/gifs.css"
import {Link,Route} from "wouter"
import Detail from './pages/Details';
import Home from './pages/Home';
import SearchResult from './pages/SearchResult';
import Pepito from './context/StaticContext'
import { GifsContextProvider } from './context/GifsContext';


function App() {

  return (
    <Pepito.Provider value={{name: "Leonardo", CI: 28040852}}>

    <div className="App">
      <section className="App-content">

        <Link to="/"><h1>Giffy</h1></Link>

        <GifsContextProvider>

          <Route
          component={Home}
          path="/"  />

          <Route
          component={SearchResult}
          path="/search/:keyword" />

          <Route 
          component={Detail}
          path="/gif/:id" />

        </GifsContextProvider>

      </section>
    </div>

    </Pepito.Provider>
  )
}

export default App;