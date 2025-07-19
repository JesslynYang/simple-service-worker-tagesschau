type CardProps = {
    title: string;
    description: string;
    thumbnail: string;
    sophoraId: string;
}

const Card = (props: CardProps) => {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="w-full aspect-square rounded-t-lg" src={props.thumbnail} alt="" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.description}</p>
                <a href={`/${props.sophoraId}`}>
                    Read more
                </a>
            </div>
        </div>
    )

}

export default Card