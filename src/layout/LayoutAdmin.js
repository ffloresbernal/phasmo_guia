import React, {useState} from 'react';
import {Layout} from 'antd';
import Contact from '../pages/contacto';
import MenuTop from '../components/Admin/MenuTop';
import MenuSider from '../components/Admin/MenuSider/menusider';

import "./LayoutAdmin.scss";


export default function LayoutAdmin(props){
    const {children} = props;
    const[menuCollapsed , setMenuCollapsed]= useState(false);
    const {Header, Content, Footer} = Layout;

    return(
        <Layout>
            <MenuSider menuCollapsed={menuCollapsed} />
            <Layout className='layout-admin' style={{marginLeft: menuCollapsed ? "80px" : "200px"}} >
                <Header className='layout-admin__header'>
                    <MenuTop menuCollapsed={menuCollapsed} setMenuCollapsed={setMenuCollapsed} />
                </Header>
                <Content className='layaut-admin__content'>
                    {children}
                </Content>
                <Footer className='layout-admin__footer'>
                    PATAAAS
                </Footer>
            </Layout>
        </Layout>
    );
}