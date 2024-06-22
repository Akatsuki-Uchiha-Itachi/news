import React, { useContext, useEffect, useState } from 'react';
import { useApiContext } from '../context/ApiContext';
import Card from './Card';
import Title from './Title';
import FilterModal from './FilterModal';
import { NewsContext } from '../context/NewsContext';

const Headlines = () => {
    const { getHeadlines, loading, error } = useApiContext();
    const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
    const { getCategory, getArticles, updateArticles } = useContext(NewsContext);

    useEffect(() => {
        const fetchHeadlines = async () => {
            try {
                const data = await getHeadlines();
                console.log(data);
                updateArticles(data.articles); // Assuming data.articles is the array we need
            } catch (err) {
                console.error('Failed to fetch headlines', err);
            }
        };
        fetchHeadlines();
    }, [getHeadlines,]);

    const handleFilterClick = () => {
        setIsFilterModalOpen(true);
    };

    const handleCloseFilterModal = () => {
        setIsFilterModalOpen(false);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <Title title="Headlines" onFilterClick={handleFilterClick} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {Array.isArray(getArticles()) && getArticles().map((article, index) => (
                    <Card
                        key={index}
                        image={article.urlToImage}
                        title={article.title}
                        summary={article.description}
                        onClick={() => window.open(article.url, '_blank')}
                    />
                ))}
            </div>
            <FilterModal
                show={isFilterModalOpen}
                onClose={handleCloseFilterModal}
            />
        </div>
    );
};

export default Headlines;
