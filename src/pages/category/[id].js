import ProductCard from '@/components/ProductCard';
import { useRouter } from 'next/router';
import React from 'react';

const CategoryProducts = ({ products }) => {
    const router = useRouter()
    const { query } = router

    return (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", placeItems: "center" }}>
            {
                products.map(product => <ProductCard product={product} key={product._id} isPcBuilderPage={query?.pcBuilder}></ProductCard>)
            }
        </div>
    );
};

export default CategoryProducts;

export const getStaticPaths = async () => {
    const res = await fetch("https://pc-builder-backend-tan.vercel.app/category")
    const data = await res.json()
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