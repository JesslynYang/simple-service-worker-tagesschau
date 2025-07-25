import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage.tsx'
import DetailPage from './pages/DetailPage/DetailPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route path={'/:sophoraId'} element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
