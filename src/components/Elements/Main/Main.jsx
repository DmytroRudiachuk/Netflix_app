import React, {useState} from 'react';
import styles from './Main.module.scss'
import {DATA} from '../../../data'
import Sidebar from '../../UI/Sidebar/Sidebar'
import Information from './information'
import ButtonNavigation from '../../UI/ButtonNavigation/ButtonNavigation'

const Main = () => {
  const[isSidebarShow, setIsSidebarShow] = useState(false)
  return (
    <div className={styles.wrapper}>
      <Sidebar
        isSidebarShow={isSidebarShow}
        setIsSidebarShow={setIsSidebarShow}
      />
      <div
        className={styles.main}
        style={{
        backgraundImage: `url(${DATA[0].mainImage})`,
        width: isSidebarShow ? 70 : 85
      }}>
        <Information movie={DATA[0]}/>
        <ButtonNavigation />
      </div>
    </div>
  );
};

export default Main;