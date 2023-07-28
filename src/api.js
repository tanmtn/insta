import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/v1/',
    // headers: {
    //     'X-CSRFToken': faCookie.get('csrftoken'),
    // },
    withCredentials: true,
});

// (1) GET: getAllFeeds()
// - 전체 게시글을 가져오는 API
// - URL: http://127.0.0.1:8000/api/v1/Feeds
export const getAllFeeds = () => {
    return instance.get('feeds/').then((res) => res.data);
};

// (2) GET: getUserFeeds()
// - 유저네임을 기반으로 해당 유저가 작성한 게시글만 불러온다.
// - URL: http://127.0.0.1:8000/api/v1/feeds/<str:username>
export const getUserFeeds = ({ queryKey }) => {
    // ['getUserFeeds', 'inseopadadadada']
    // console.log("getUserFeeds", data.queryKey[1])

    const [_, username] = queryKey;

    return instance.get('feeds/' + username).then((res) => res.data);
};
