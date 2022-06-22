import React from 'react';
import {Outlet} from 'react-router-dom'
import styles from '../Layout/Layout.module.scss';


const Layout = () => {
    return(
        <div >
            <Outlet />
            <img className={styles.imgLogo} src='https://www.coi.gov.pl/coi-portal-theme/coi/img/logo_stopka.svg?v=1.0.18-20220414142536' />
        </div>
    )
}
export default Layout;