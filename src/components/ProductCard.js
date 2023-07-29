import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Button, Card } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
const { Meta } = Card;
const ProductCard = ({ product }) => (
    <Card
        style={{
            width: 300,
        }}
        cover={
            <Image
                alt={product.productName}
                src={product.image}
                height={300}
                width={200}
            />
        }

    >
        <Meta
            // avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
            title={product.productName}
            description={`BDT ${product.price} (${product.status})`}
        />
        <p>{product.category}</p>
        <p>{product.rating}</p>
        <Button type="primary"><Link href={`/product/${product._id}`}>See Details</Link></Button>
    </Card>
);
export default ProductCard;