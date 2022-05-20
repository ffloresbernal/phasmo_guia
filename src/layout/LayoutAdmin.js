import React, { Children } from 'react';
import {Layout} from 'antd';
import Contact from '../pages/contacto';
import MenuTop from '../components/Admin/MenuTop';

import "./LayoutAdmin.scss";


export default function LayoutAdmin(props){
    const {children} = props;
    const {Header, Content, Footer} = Layout;

    return(
        <Layout>
            {/* TO DO: MENU SIDER */}

            <Layout className='layout-admin' >
                <Header className='layout-admin__header'>
                    <MenuTop />
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