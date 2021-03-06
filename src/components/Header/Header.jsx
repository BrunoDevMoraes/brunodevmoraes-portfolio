import React, { useContext } from 'react'
import AppContext from '../../context/AppContext';
import './Header.css';

export default function Header() {
  const { language, setLanguage, theme, setTheme, hiddenMenu, setHiddenMenu } = useContext(AppContext);

  function handleLanguageButton() {
    if (language === 'PT') {
      setLanguage('EN')
    } else {
      setLanguage('PT')
    }
  }

  function handleThemeClick() {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  function renderHeaderTitle() {
    if (language === 'PT') {
      return (
        <h3>Portfólio de Bruno</h3>
      )
    }
    return (
        <h3>Bruno's Portfolio</h3>
    )
  }

  function renderLanguageButton() {
    if (language === 'PT') {
      return (
        <button onClick={handleLanguageButton}>
          <svg className={theme === 'dark' ? '' : 'light-svg'} width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.75 7.37109H3.28516V9.38672H6.14844V10H2.53516V4.3125H6.10938V4.92969H3.28516V6.75781H5.75V7.37109ZM11.4531 10H10.6992L7.83594 5.61719V10H7.08203V4.3125H7.83594L10.707 8.71484V4.3125H11.4531V10Z" fill="#01002E"/>
            <line y1="12.5" x2="14" y2="12.5" stroke="#01002E"/>
            <line y1="-0.5" x2="12" y2="-0.5" transform="matrix(0 -1 -1 0 13 13)" stroke="#01002E"/>
            <line y1="-0.5" x2="12" y2="-0.5" transform="matrix(0 -1 -1 0 0 13)" stroke="#01002E"/>
            <line y1="-0.5" x2="14" y2="-0.5" transform="matrix(1 0 0 -1 0 0)" stroke="#01002E"/>
          </svg>
        </button>
      );
    }
    return (
        <button onClick={handleLanguageButton}>
          <svg className={theme === 'dark' ? '' : 'light-svg'} width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.5 7.77344V10H2.75V4.3125H4.84766C5.47005 4.3125 5.95703 4.47135 6.30859 4.78906C6.66276 5.10677 6.83984 5.52734 6.83984 6.05078C6.83984 6.60286 6.66667 7.02865 6.32031 7.32812C5.97656 7.625 5.48307 7.77344 4.83984 7.77344H3.5ZM3.5 7.16016H4.84766C5.2487 7.16016 5.55599 7.06641 5.76953 6.87891C5.98307 6.6888 6.08984 6.41536 6.08984 6.05859C6.08984 5.72005 5.98307 5.44922 5.76953 5.24609C5.55599 5.04297 5.26302 4.9375 4.89062 4.92969H3.5V7.16016ZM11.7266 4.92969H9.89844V10H9.15234V4.92969H7.32812V4.3125H11.7266V4.92969Z" fill="#01002E"/>
            <line y1="12.5" x2="14" y2="12.5" stroke="#01002E"/>
            <line y1="-0.5" x2="12" y2="-0.5" transform="matrix(0 -1 -1 0 13 13)" stroke="#01002E"/>
            <line y1="-0.5" x2="12" y2="-0.5" transform="matrix(0 -1 -1 0 0 13)" stroke="#01002E"/>
            <line y1="-0.5" x2="14" y2="-0.5" transform="matrix(1 0 0 -1 0 0)" stroke="#01002E"/>
          </svg>
        </button>
    );
  }

  function renderThemeButton() {
    if (theme === 'light') {
      return (
        <button onClick={handleThemeClick}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.95444 1.95222C4.81444 2.45 4.74444 2.97111 4.74444 3.5C4.74444 6.67333 7.32667 9.25556 10.5 9.25556C11.0289 9.25556 11.55 9.18556 12.0478 9.04556C11.2389 11.0367 9.27889 12.4444 7 12.4444C3.99778 12.4444 1.55556 10.0022 1.55556 7C1.55556 4.72111 2.96333 2.76111 4.95444 1.95222ZM7 0C3.13444 0 0 3.13444 0 7C0 10.8656 3.13444 14 7 14C10.8656 14 14 10.8656 14 7C14 6.64222 13.9689 6.28444 13.9222 5.94222C13.16 7.00778 11.9156 7.7 10.5 7.7C8.18222 7.7 6.3 5.81778 6.3 3.5C6.3 2.09222 6.99222 0.84 8.05778 0.0777777C7.71556 0.031111 7.35778 0 7 0Z" fill="#ED6112"/>
          </svg>
        </button>
      );
    }
    return (
      <button onClick={handleThemeClick}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="#" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 5.09091C8.05 5.09091 8.90909 5.95 8.90909 7C8.90909 8.05 8.05 8.90909 7 8.90909C5.95 8.90909 5.09091 8.05 5.09091 7C5.09091 5.95 5.95 5.09091 7 5.09091ZM7 3.81818C5.24364 3.81818 3.81818 5.24364 3.81818 7C3.81818 8.75636 5.24364 10.1818 7 10.1818C8.75636 10.1818 10.1818 8.75636 10.1818 7C10.1818 5.24364 8.75636 3.81818 7 3.81818ZM0.636364 7.63636H1.90909C2.25909 7.63636 2.54545 7.35 2.54545 7C2.54545 6.65 2.25909 6.36364 1.90909 6.36364H0.636364C0.286364 6.36364 0 6.65 0 7C0 7.35 0.286364 7.63636 0.636364 7.63636ZM12.0909 7.63636H13.3636C13.7136 7.63636 14 7.35 14 7C14 6.65 13.7136 6.36364 13.3636 6.36364H12.0909C11.7409 6.36364 11.4545 6.65 11.4545 7C11.4545 7.35 11.7409 7.63636 12.0909 7.63636ZM6.36364 0.636364V1.90909C6.36364 2.25909 6.65 2.54545 7 2.54545C7.35 2.54545 7.63636 2.25909 7.63636 1.90909V0.636364C7.63636 0.286364 7.35 0 7 0C6.65 0 6.36364 0.286364 6.36364 0.636364ZM6.36364 12.0909V13.3636C6.36364 13.7136 6.65 14 7 14C7.35 14 7.63636 13.7136 7.63636 13.3636V12.0909C7.63636 11.7409 7.35 11.4545 7 11.4545C6.65 11.4545 6.36364 11.7409 6.36364 12.0909ZM3.17545 2.27818C2.92727 2.03 2.52 2.03 2.27818 2.27818C2.03 2.52636 2.03 2.93364 2.27818 3.17545L2.95273 3.85C3.20091 4.09818 3.60818 4.09818 3.85 3.85C4.09182 3.60182 4.09818 3.19455 3.85 2.95273L3.17545 2.27818ZM11.0473 10.15C10.7991 9.90182 10.3918 9.90182 10.15 10.15C9.90182 10.3982 9.90182 10.8055 10.15 11.0473L10.8245 11.7218C11.0727 11.97 11.48 11.97 11.7218 11.7218C11.97 11.4736 11.97 11.0664 11.7218 10.8245L11.0473 10.15ZM11.7218 3.17545C11.97 2.92727 11.97 2.52 11.7218 2.27818C11.4736 2.03 11.0664 2.03 10.8245 2.27818L10.15 2.95273C9.90182 3.20091 9.90182 3.60818 10.15 3.85C10.3982 4.09182 10.8055 4.09818 11.0473 3.85L11.7218 3.17545ZM3.85 11.0473C4.09818 10.7991 4.09818 10.3918 3.85 10.15C3.60182 9.90182 3.19455 9.90182 2.95273 10.15L2.27818 10.8245C2.03 11.0727 2.03 11.48 2.27818 11.7218C2.52636 11.9636 2.93364 11.97 3.17545 11.7218L3.85 11.0473Z" fill="#01002E"/>
        </svg>
      </button>
    );
  }

    return (
        <div id="header" className={theme === 'dark' ? 'dark-header' : 'light-header'}>
            {renderHeaderTitle()}
            <div id="header-buttons">
                {renderThemeButton()}
                {renderLanguageButton()}
                <button onClick={() => setHiddenMenu(!hiddenMenu)}>
                  <svg className={theme === 'dark' ? '' : 'light-svg'} width="21" height="13" viewBox="0 0 21 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="2.3125" x2="20.25" y2="2.3125" stroke="#01002E" stroke-width="3.375"/>
                    <line y1="11.3125" x2="20.25" y2="11.3125" stroke="#01002E" stroke-width="3.375"/>
                    <path d="M0 6.8125H20.25" stroke="#01002E" stroke-width="3.375"/>
                  </svg>
                </button>
            </div>
        </div>
    )
}
