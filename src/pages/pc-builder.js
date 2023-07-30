import PcBuilderCard from '@/components/PcBuilderCard';
import React from 'react';
import { useSelector } from 'react-redux';

const PcBuilder = ({ categories }) => {
    const state = useSelector((state) => state)
    console.log(state)
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