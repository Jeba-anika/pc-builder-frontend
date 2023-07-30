import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import Link from 'next/link';


const NavbarDropdown = () => {
    const items = [
        {
            key: '1',
            label: (
                <Link href={`/category/01`}>CPU / Processor</Link>
            ),
        },
        {
            key: '2',
            label: (
                <Link href={`/category/02`}>Motherboard</Link>
            ),
        },
        {
            key: '3',
            label: (
                <Link href={`/category/03`}>RAM</Link>
            ),
        },
        {
            key: '4',
            label: (
                <Link href={`/category/04`}>Power Supply Unit</Link>
            ),
        },
        {
            key: '5',
            label: (
                <Link href={`/category/05`}>Storage Device</Link>
            ),
        },
        {
            key: '6',
            label: (
                <Link href={`/category/06`}>Monitor</Link>
            ),
        },
        {
            key: '7',
            label: (
                <Link href={`/category/07`}>Others</Link>
            ),
        }
    ];
    return (
        <>
            <Dropdown
                menu={{
                    items
                }}
            >
                <a style={{ color: "blue", cursor: "pointer" }} onClick={(e) => e.preventDefault()}>
                    <Space>
                        Categories
                        <DownOutlined />
                    </Space>
                </a>
            </Dropdown>
        </>
    )
};
export default NavbarDropdown;
