import PcBuilderCard from '@/components/PcBuilderCard';
import React from 'react';

const PcBuilder = ({ categories }) => {
    return (
        <div>
            {categories.map(category => <PcBuilderCard category={category} key={category.id}></PcBuilderCard>)}
        </div>
    );
};

export default PcBuilder;

export const getServerSideProps = async () => {
    const categoriesResponse = await fetch("https://pc-builder-backend-tan.vercel.app/category");
    const categoriesData = await categoriesResponse.json();

    return {
        props: {
            categories: categoriesData
        }
    }
}