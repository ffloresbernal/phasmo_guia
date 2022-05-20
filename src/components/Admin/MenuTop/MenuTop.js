import React from "react";
import artista from "../../../assets/img/artista.png";
import {Button} from "antd";
import { MenuFoldOutlined,PoweroffOutlined } from '@ant-design/icons';

import './MenuTop.scss';

export default function MenuTop(){
    return (
        <div className="menu-top">
            <div className="menu-top__left">
                <img 
                className="menu-top__left-logo"
                src={artista}
                alt="artista"
                 />
                <Button type="link" onClick={()=>console.log('click')}>
                    <MenuFoldOutlined />
                </Button>
            </div>
            <div className='menu-top__right' >
                <Button type="link" >
                    <PoweroffOutlined />
                </Button>
            </div>
        </div>
    );
}