import './App.css'
import Layout from './layout/layout/Layout'
import CasesPage from './pages/Cases/Cases'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path = '/cases' element = {<CasesPage/>}/>
        </Routes>
      </Layout>
    </>
  )
}

export default App
