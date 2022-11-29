import React from 'react'
import { Routes, Route } from "react-router-dom";

import './App.css';

const Main = React.lazy(() => import('./components/Main/index'));

function App() {
  return (
    <div className="App">

      <Routes>
        <Route
          path="/"
          element={
            <React.Suspense fallback={<>...</>}>
              <Main />
            </React.Suspense>}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
