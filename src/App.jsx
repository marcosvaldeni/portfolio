import { BrowserRouter } from 'react-router-dom';

import Home from './pages/home';

import GlobalStyle from './styles/global';

export function App() {
  return (
    <BrowserRouter>
      <Home />
      <GlobalStyle />
    </BrowserRouter>
  )
}
