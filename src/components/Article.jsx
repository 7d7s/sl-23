import React from 'react';

const articleData = [
    {
        title: "Personal & Individual Therapy",
        description: "There are many variations the off passages of Lorem Ipsum free thing available, but majority delogis.",
        imgClass: "img-box-1"
    },
    {
        title: "Special Session for Your Kids",
        description: "There are many variations the off passages of Lorem Ipsum free thing available, but majority delogis.",
        imgClass: "img-box-2"
    },
    {
        title: "Boost the Business Outcome",
        description: "There are many variations the off passages of Lorem Ipsum free thing available, but majority delogis.",
        imgClass: "img-box-3"
    }
];

function Article() {
    return (
        <div>
            <div className="container-fluid py-5 bg-article">
                <div className="container position-relative z-1">
                    <div className="row g-3">
                        {articleData.map((article, index) => (
                            <div key={index} className="col-lg-4 col-md-6 d-flex justify-content-center align-items-center">
                                <div className='article-card'>
                                    <div className='article-title'>
                                        <h4>{article.title}</h4>
                                    </div>
                                    <div className=''>
                                        <p className='text-white'>{article.description}</p>
                                        <div className={article.imgClass}></div>
                                        <div className='hover-text'>
                                            <p>{article.description}</p>
                                            <a href="" className=''><i className="bi bi-arrow-right-short"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Article;
