import { Button } from 'antd';
import Link from 'next/link';
import React from 'react';
import NavbarDropdown from './NavbarDropdown';
import { signOut, useSession } from 'next-auth/react';

const Navbar = () => {
    const { data: session } = useSession()
    return (
        <div style={{ display: "flex", justifyContent: "space-around", alignItems: 'center', height: "60px", boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)" }}>
            <div><Link href='/' style={{ fontSize: "20px", color: "gray", textDecoration: "none" }}>PC Builder</Link></div>
            <div style={{ display: "flex", gap: "15px" }}>
                <NavbarDropdown></NavbarDropdown>
                <Button type="primary"><Link href='/pc-builder'>PC Builder</Link></Button>
                {session?.user ?
                    <Button onClick={() => signOut()} type="primary" danger>
                        Logout
                    </Button> :
                    <Button type="primary"><Link href='/api/auth/signin'>SignIn / SignUp</Link></Button>}
            </div>

        </div>
    );
};

export default Navbar;