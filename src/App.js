import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Layout from './components/Layout'

import './App.scss'
import Work from './components/Work/Work'

function App() {
  return (
    <>
      <Routes>
        <Route path="dobiebianca.io/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="dobiebianca.io/skills" element={<About />} />
          <Route path="dobiebianca.io/work" element={<Work />} />

          <Route path="dobiebianca.io/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
