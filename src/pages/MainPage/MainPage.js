import React, { useContext } from 'react'
import Body from '../../components/Body/Body'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import AppContext from '../../context/AppContext'
import './MainPage.css'

export default function MainPage() {
  const { theme } = useContext(AppContext);
    return (
        <div id="main" className={theme === 'dark' ? 'dark-page' : 'light-page'}>
          <Header/>
          <Body/>
          <Footer/>
        </div>
    )
}
