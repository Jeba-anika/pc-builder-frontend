import { Button } from 'antd';
import Link from 'next/link';
import React from 'react';
import NavbarDropdown from './NavbarDropdown';

const Navbar = ({ categories }) => {
    return (
        <div style={{ display: "flex", justifyContent: "space-around", alignItems: 'center', height: "60px", backgroundColor: "rgb(191 219 254)" }}>
            <div style={{ fontSize: "20px", color: "gray" }}>PC Builder</div>
            <div style={{ display: "flex", gap: "15px" }}>
                <NavbarDropdown categories={categories}></NavbarDropdown>
                <Button type="primary"><Link href='/pc-builder'>PC Builder</Link></Button>
            </div>

        </div>
    );
};

export default Navbar;