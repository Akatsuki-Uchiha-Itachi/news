import React from 'react';

const Modal = ({ show, onClose, article }) => {
    if (!show) {
        return null;
    }

    const redirect = () =>{
        window.open(article.url, '_blank')
    }

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-2/3 lg:w-1/2 relative">
                <button
                    className="absolute top-2 right-2 text-gray-700"
                    onClick={onClose}
                >
                    ×
                </button>
                <h2 className="text-2xl font-bold mb-4">{article.title}</h2>
                <img className="w-full h-48 object-cover mb-4" src={article.urlToImage} alt={article.title} />
                <p className="text-gray-700 mb-4">{article.description}</p>
                <div className="publish-detail mb-2">
                <span><b>Published by:</b> {article.author}</span>
                <br />
                <span><b>Published at: </b> {article.publishedAt}</span>
                </div>
                <div className="options flex justify-between">
                <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={redirect}
                >
                    Original Post
                </button>
                <button 
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={onClose}
                >
                    Close
                </button>

                </div>
            </div>
        </div>
    );
};

export default Modal;
