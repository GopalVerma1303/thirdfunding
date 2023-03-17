import React, { useState, useEffect } from 'react'
import news from "../assets/news.json"
import NewsTile from '../components/NewsTile'

function News() {

    return (
        <div>
            <h1 className="font-epilogue font-semibold text-[18px] text-white text-left">News</h1>
            <div className="flex flex-wrap">
                {
                    news.data.reverse().map(e => (
                        <NewsTile
                            author={e.author}
                            title={e.title}
                            description={e.description}
                            url={e.url}
                            source={e.source}
                            image={e.image}
                            category={e.category}
                            language={e.language}
                            country={e.country}
                            published_at={e.published_at}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default News