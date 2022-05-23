import React from 'react';
import {Link} from "react-router-dom";
import {Layout, Menu} from "antd";
import './menusider.scss';
import { HomeOutlined,MenuOutlined } from '@ant-design/icons';


export default function MenuSider(props){
    const {Sider} = Layout;
    const {menuCollapsed} = props;
    return (
        <Sider className="admin-sider" collapsed={menuCollapsed}>
            <Menu theme="dark" mode="inline" defaultSelectionKeys={["1"]}>
                <Menu.Item Key="1">
                    <Link to={"/admin"}>
                        <HomeOutlined />
                        <span className='nav-text'>Home</span>
                    </Link>
                </Menu.Item>
            </Menu>
            <Menu theme="dark" mode="inline" defaultSelectionKeys={["2"]}>
                <Menu.Item Key="2">
                    <Link to={"/admin/menu-web"}>
                        <MenuOutlined />
                        <span className='nav-text'>Menu</span>
                    </Link>
                </Menu.Item>
            </Menu>
        </Sider>
    );
}