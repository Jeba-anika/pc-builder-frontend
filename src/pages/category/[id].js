import ProductCard from '@/components/ProductCard';
import React from 'react';

const CategoryProducts = ({ products }) => {
    return (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", placeItems: "center" }}>
            {
                products.map(product => <ProductCard product={product} key={product._id}></ProductCard>)
            }
        </div>
    );
};

export default CategoryProducts;

export const getStaticPaths = async () => {
    const res = await fetch("https://pc-builder-backend-tan.vercel.app/category")
    const data = await res.json()
    console.log(data)
    const paths = data.map(item => ({ params: { id: item.id } }))
    return { paths, fallback: "blocking" }
}

export const getStaticProps = async ({ params }) => {
    const res = await fetch(`https://pc-builder-backend-tan.vercel.app/category/${params.id}`)
    const data = await res.json()
    return {
        props: { products: data }
    }
}