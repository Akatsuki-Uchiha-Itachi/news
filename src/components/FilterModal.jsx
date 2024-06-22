import React, { useContext } from 'react';
import { NewsContext } from '../context/NewsContext';

const FilterModal = ({ show, onClose }) => {
    const { updateCategory } = useContext(NewsContext);

    if (!show) {
        return null;
    }

    const handleApplyClick = () => {
        const category = document.getElementById('category-select').value;
        updateCategory(category);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-1/3 relative">
                <button
                    className="absolute top-2 right-2 text-gray-700"
                    onClick={onClose}
                >
                    ×
                </button>
                <h2 className="text-2xl font-bold mb-4">Filter News</h2>
                <select id="category-select" className="w-full p-2 border border-gray-300 rounded">
                    <option value="Business">Business</option>
                    <option value="Technology">Technology</option>
                    <option value="Entertainment">Entertainment</option>
                </select>
                <div className="mt-4 flex justify-end">
                    <button 
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                        onClick={handleApplyClick}
                    >
                        Apply
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FilterModal;
