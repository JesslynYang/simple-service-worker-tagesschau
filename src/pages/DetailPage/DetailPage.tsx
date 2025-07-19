import { useEffect, useState } from 'react'
import type { News } from '../HomePage/HomePage'
import { useParams } from 'react-router-dom'

const DetailPage = () => {
    const [data, setData] = useState<News | null>(null)
    const { sophoraId } = useParams()

    useEffect(() => {
        if (!sophoraId) {
            console.error("Article ID not found in the path");
            return;
        }

        fetch(`https://www.tagesschau.de/api2u/article/${sophoraId}.json`)
            .then(response => {
                return response.json()
            })
            .then(response => {
                console.log(response)

                setData({
                    sophoraId,
                    title: response.title,
                    description: response.firstSentence,
                    thumbnail: Object.values(response.firstFrame.imageVariants)[1] as string,
                    content: response.content
                });
            })
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className={'px-8 space-y-4 text-black'}>
            <h1>{data?.title}</h1>
            <hr />

            <div dangerouslySetInnerHTML={{
                __html: Array.isArray(data?.content) ? data.content.map(item => item.value).join('') : ''
            }} />
        </div>
    )
}

export default DetailPage