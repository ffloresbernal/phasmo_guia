import React from 'react';
import Contact from '../pages/contacto';
import {Layout} from 'antd';

export default function LayoutBasic(props){
    const {children} = props;
    const {Content, Footer} = Layout;

    return(
        <Layout>
            <h2>Menu sider</h2>
            <Layout>
                <Content>
                    {children}
                </Content>
                <Footer>
                    PAAAAAAAAAAAAAATAAAAAAAAAAAAAAAAAAAAAA
                </Footer>
            </Layout>
        </Layout>        
    );
}