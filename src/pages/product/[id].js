import Image from 'next/image';
import React from 'react';
import { Tabs } from 'antd';

const ProductDetail = ({ ProductDetail }) => {
    const onChange = (key) => {
        console.log(key);
    };
    const items = [
        {
            key: '1',
            label: `Description`,
            children: ProductDetail.Description,
        },
        {
            key: '2',
            label: `Reviews`,
            children: ProductDetail.Reviews.map(review => <p key={review}>{review}</p>),
        }
    ];

    return (
        <div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)" }}>
                <div>
                    <Image src={ProductDetail.image} alt={ProductDetail.productName} width={500} height={500}></Image>
                </div>
                <div>
                    <h2>{ProductDetail.productName}</h2>
                    <p>{ProductDetail.price} ({ProductDetail.status})</p>
                    <p>{ProductDetail.category}</p>
                    <p>Key Features</p>
                    {
                        ProductDetail["Key Features"].map(feature => <p key={feature}>{feature}</p>)
                    }
                    <div>Individual Rating: {ProductDetail["Individual Rating"]}</div>
                    <div>Average Rating: {ProductDetail["Average Rating"]}</div>
                </div>
            </div>
            <div>
                <Tabs
                    defaultActiveKey="1" items={items} onChange={onChange}
                />
            </div>
        </div>
    );
};

export default ProductDetail;

export const getStaticPaths = async () => {
    const res = await fetch("https://pc-builder-backend-tan.vercel.app/products")
    const data = await res.json()

    const paths = data.map(item => ({
        params: { id: item._id }
    }))
    return {
        paths, fallback: "blocking"
    }
}

export const getStaticProps = async ({ params }) => {
    const res = await fetch(`https://pc-builder-backend-tan.vercel.app/product/${params.id}`)
    const data = await res.json()
    console.log(data)
    return {
        props: { ProductDetail: data[0] }
    }
}