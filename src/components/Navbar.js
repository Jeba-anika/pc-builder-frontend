import { Button, Dropdown, Space } from 'antd';
import Link from 'next/link';
import React from 'react';
import NavbarDropdown from './NavbarDropdown';
import { signOut, useSession } from 'next-auth/react';
import { DownOutlined } from '@ant-design/icons';

const Navbar = () => {
    const { data: session } = useSession()
    const items = [
        {
            label: <Button ><Link href='/pc-builder'>PC Builder</Link></Button>,
            key: '0',
        },
        {
            label: (session?.user ? <Button onClick={() => signOut()} type="primary" danger>
                Logout
            </Button> : <Button type="primary"><Link href='/api/auth/signin'>SignIn / SignUp</Link></Button>),
            key: '1',
        }
    ];
    return (
        <div className='navbar-container' style={{ display: "flex", justifyContent: "space-around", alignItems: 'center', height: "60px", boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)" }}>
            <div><Link href='/' style={{ fontSize: "20px", color: "gray", textDecoration: "none" }}>PC Builder</Link></div>
            <div style={{ display: "flex", gap: "15px" }}>
                <NavbarDropdown></NavbarDropdown>
                <div className='large-screen'>
                    <Button style={{ marginRight: '10px' }} type="primary"><Link href='/pc-builder'>PC Builder</Link></Button>

                    {session?.user ?
                        <Button onClick={() => signOut()} type="primary" danger>
                            Logout
                        </Button> :
                        <Button type="primary"><Link href='/api/auth/signin'>SignIn / SignUp</Link></Button>}
                </div>

                <div className='small-screen'>
                    <Dropdown
                        menu={{
                            items,
                        }}
                        trigger={['click']}
                    >
                        <a onClick={(e) => e.preventDefault()}>
                            <Space>
                                Menu
                                <DownOutlined />
                            </Space>
                        </a>
                    </Dropdown>
                </div>
            </div>

        </div>
    );
};

export default Navbar;