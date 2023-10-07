import styles from '../styles/Header.module.scss';
import React, {useState, useRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import SubHeader from './SubHeader';


const Header = () => {

  const dropdownRef = useRef(null);
  const [isMenuDropDownOpen, setMenuDropDownOpen] = useState(false)
  const [hoverValue, setHover] = useState<string>('');


  const openAndCloseSubMenu = (state: boolean) =>{
    setMenuDropDownOpen(state)
    // setHover(obj)
  }

// hover 된 객체의 value 지정 어떻게 할건지 정해야 함.
  return (
    <header className={styles.header}>
      <div className={styles.contents}>
        <div className={styles.headerMainWrapper}>
          <div className={styles.logo}>
            <FontAwesomeIcon className={styles.hippo} icon={faSun} spin style={{color: "#ff5900",}} />
            {/* <FontAwesomeIcon className={styles.hippo} icon={faHippo} shake style={{color: "#001061",}} /> */}
            {/* <img src={logoImage} alt="x" /> */}
          </div>
          <nav className={styles.navigation} onMouseOver={()=>openAndCloseSubMenu(true)} onMouseOut={()=>openAndCloseSubMenu(false)}>
            <ul>
              <li className={styles.nav1} ref={dropdownRef} 
              onMouseOver={()=>setHover('nav1')} onMouseOut={()=>setHover('nav1')}
              >Develop</li>
              <li className={styles.nav2} ref={dropdownRef} 
              onMouseOver={()=>setHover('nav2')} onMouseOut={()=>setHover('nav2')}
              >DevOps</li>
              <li className={styles.nav3} ref={dropdownRef} 
              onMouseOver={()=>setHover('nav3')} onMouseOut={()=>setHover('nav3')}
              >DevKit</li>
            </ul>
          </nav>
          <div className={styles.headerTitle}>
            5meang9 Dev
          </div>
          <div className={styles.headerEtc}>
            <ul>
              <li>Page</li>
              <li>검색</li>
            </ul>
          </div>
        </div>
        {<SubHeader refName={hoverValue} dropdown={isMenuDropDownOpen} />}
      </div>
    </header>
  )
}

export default Header 