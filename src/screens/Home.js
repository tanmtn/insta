import Feed from '../components/Feed';
import { useQuery } from '@tanstack/react-query';
import { getAllFeeds } from '../api';

function Home() {
    const { data } = useQuery(['getFeeds'], getAllFeeds);
    return (
        <div>
            {data?.map((feed) => (
                <Feed key={feed.id} {...feed}></Feed>
            ))}
        </div>
    );
}

export default Home;
