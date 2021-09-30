import React, {useState} from 'react';
import styles from './Main.module.scss'
import {DATA} from '../../../data'
import Sidebar from '../../UI/Sidebar/Sidebar'
import Information from './information'
import ButtonNavigation from '../../UI/ButtonNavigation/ButtonNavigation'
import Episodes from '../Episodes/Episodes'

const Main = () => {
  const[isSidebarShow, setIsSidebarShow] = useState(false)
  const[activeTab, setActiveTab] = useState(false)
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
        width: isSidebarShow ? '85%' : '90%'
      }}>
        {activeTab === 1 ?
          <Information movie={DATA[0]}/>
          : activeTab === 2 && <Episodes/>
        }

        <ButtonNavigation activeTab={activeTab} setActiveTab={setActiveTab}/>
      </div>
    </div>
  );
};

export default Main;