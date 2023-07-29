import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import Link from 'next/link';


const NavbarDropdown = ({ categories }) => {
    const items = categories?.map(category => ({
        key: category.id, label: (
            <Link href={`category/${category.id}`}>
                {category.name}
            </Link>
        )
    }))
    return (
        <>
            <Dropdown
                menu={{
                    items
                }}
            >
                <a onClick={(e) => e.preventDefault()}>
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
