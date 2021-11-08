import React, { useContext } from 'react'
import Body from '../../components/Body/Body'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import HiddenMenu from '../../components/HiddenMenu/HiddenMenu'
import AppContext from '../../context/AppContext'
import './MainPage.css'

export default function MainPage() {
  const { theme, hiddenMenu } = useContext(AppContext);
    return (
        <div id="main" className={theme === 'dark' ? 'dark-page' : 'light-page'}>
          <Header/>
          {hiddenMenu ? <HiddenMenu/> : <></>}
          <Body/>
          <Footer/>
        </div>
    )
}
