import { Button } from 'antd';
import Link from 'next/link';
import React from 'react';
import NavbarDropdown from './NavbarDropdown';

const Navbar = () => {
    return (
        <div style={{ display: "flex", justifyContent: "space-around", alignItems: 'center', height: "60px", boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)" }}>
            <div style={{ fontSize: "20px", color: "gray" }}>PC Builder</div>
            <div style={{ display: "flex", gap: "15px" }}>
                <NavbarDropdown></NavbarDropdown>
                <Button type="primary"><Link href='/pc-builder'>PC Builder</Link></Button>
            </div>

        </div>
    );
};

export default Navbar;