import React from 'react'
import Pages from './pages/Pages'
import Categories from './components/Categories'
import { BrowserRouter } from 'react-router-dom'
import Search from './components/Search'
import { Link } from 'react-router-dom'
import styledComponents from 'styled-components'
import { GiKnifeFork} from 'react-icons/gi'
const App = () => {

  return (
  <div>
    <BrowserRouter>
    <Nav>
        <GiKnifeFork />
        <LOGO to={'/'}>Deliciouss</LOGO>
    </Nav>
    <Search/>
    <Categories/>
    <Pages/>
    </BrowserRouter>
  </div>
  )
}

const LOGO = styledComponents(Link)`
  text-decoration:none;
  font-size: 1.5rem;
  font-weight:400;
  font-family: 'Lobster Two', cursive;
`;

const Nav = styledComponents.div`
padding: 4rem 0rem;
display: flex;
jusitfy-content: flex-start;
align-items: center;
svg{
  font-size: 2rem;
}
`

export default App