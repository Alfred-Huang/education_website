import * as React from "react";
import { MailOutlined, SettingOutlined, AppstoreOutlined} from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';

function Sidebar(){
    const [openKeys, setOpenKeys] = useState(['sub1']);
    const onOpenChange = (keys) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };
    return (
        <Menu
            mode="inline"
            openKeys={openKeys}
            onOpenChange={onOpenChange}
            style={{
                width: 256,
                backgroundColor: "#d0f4de",
                fontSize: 24
            }}
            items={items}
        />
    );
}

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
const items = [
    getItem('Learning', 'sub1', <MailOutlined />, [
        getItem('English alphabet', '1'),
        getItem('Vowel', '2'),
        getItem('Digraphs', '3'),
        getItem('Blends', '4'),
        getItem('Words', '5'),
        getItem('Writing', '6')
    ]),
    getItem('Practice', 'sub2', <AppstoreOutlined />, [
        getItem('Word Bank', '7'),
        getItem('Word Guess', '8'),
        getItem('Digraphs & Blends', '9'),
    ]),
    getItem('Test', 'sub4', <SettingOutlined />, [
        getItem('Word Test', '10'),
        getItem('Digraphs Test', '11'),
        getItem('Blends Test', '12'),
    ]),
];

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

export default Sidebar;
