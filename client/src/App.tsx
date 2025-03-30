import { HashRouter as Router, Routes, Route } from "react-router-dom"
import Layout from './Layout'
import Home from "./Pages/Home"

import './App.css'

function App() {


  return (
    <>
      <Router>
          <Routes>


            <Route element={<Layout></Layout>}>
              <Route path="/" element={<Home />} />

            </Route>



          </Routes>
        </Router>

    </>
  )
}

export default App
