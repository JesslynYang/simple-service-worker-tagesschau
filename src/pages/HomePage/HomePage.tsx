import { useEffect, useState } from 'react';
import { Card } from '../../components/Card'

export type News = {
    sophoraId: string;
    title: string;
    description: string;
    thumbnail: string;
    content: {
        value: string;
        type: string;
    }[]
}

const HomePage = () => {
    const [data, setData] = useState<News[]>([])

    useEffect(() => {
        fetch('https://www.tagesschau.de/api2u/homepage').then(response => response.json()).then(response => {
            setData(response.news.map((news: any) => {
                return {
                    sophoraId: news.sophoraId,
                    title: news.title,
                    description: news.firstSentence,
                    thumbnail: Object.values(news.firstFrame.imageVariants)[1]
                }
            }))
        })
    }, [])

    return (
        <div className='space-y-8 px-8 w-full pt-8'>
            <h1 className='text-black'>Latest news</h1>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {data.map((item, index) => (
                    <Card key={index} title={item.title} description={item.description} thumbnail={item.thumbnail} sophoraId={item.sophoraId} />
                ))}
            </div>
        </div>
    )
}

export default HomePage