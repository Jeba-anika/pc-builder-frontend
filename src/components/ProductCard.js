import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Button, Card } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { addComponent } from '@/redux/features/pcBuilder/pcBuilderSlice';
const { Meta } = Card;
const ProductCard = ({ product, isPcBuilderPage }) => {
    const dispatch = useDispatch()
    return (
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
            {
                isPcBuilderPage ? <Button onClick={() => dispatch(addComponent(product))} type="primary"><Link href={`/pc-builder`}>Add to builder</Link></Button>
                    :
                    <Button type="primary"><Link href={`/product/${product._id}`}>See Details</Link></Button>
            }
        </Card>
    )
};
export default ProductCard;