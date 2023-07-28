import { far } from '@fortawesome/free-regular-svg-icons';
import { faHeart as SolidHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { styled } from 'styled-components';

import { faComment, faPaperPlane, faBookmark } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import Comments from './Comments';

const FeedContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 4px;
    border: 1px solid black;
    margin-bottom: 50px;
`;
const Wrapper = styled.div`
    width: 100%;
    max-width: 650px;
    height: 700px;
`;
const FeedHeader = styled.div`
    display: flex;
    padding: 15px;
    align-items: center;
    border-bottom 1px solid black;
`;

const UserProfileContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 35px;
    border-radius: 50%;
`;

const UserProfileImg = styled.img`
    max-width: 35px;
    border-radius: 50%;
    margin-right: 5px;
`;

const UserProfileName = styled.span`
    width: 100%;
`;

const FeedImg = styled.img`
    width: 100%;
    max-width: 630px;
    height: 500px;
`;

const FeedActions = styled.div`
    display: flex;
`;

const FeedActionContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 12px 15px;
`;
const FeedActionsLeft = styled.div`
    display: flex;
`;

function Feed({ id, contentImg, caption, user, likesNum, reviewsNum, reviews, isLiked }) {
    const [likeClick, SetLikeClick] = useState(false);
    const handleClick = () => {
        SetLikeClick(true);
    };
    return (
        <FeedContainer key={id}>
            <Wrapper>
                <FeedHeader>
                    <UserProfileContainer>
                        <UserProfileImg src={user.profileImg}></UserProfileImg>
                        <UserProfileName>{user.username}</UserProfileName>
                    </UserProfileContainer>
                </FeedHeader>

                <FeedImg src={contentImg}></FeedImg>

                <FeedActionContainer>
                    <FeedActionsLeft>
                        <FeedActions>
                            <FontAwesomeIcon
                                style={{ color: 'tomato' }}
                                icon={likeClick ? SolidHeart : far.faHeart}
                                size="xl"
                                onClick={() => {
                                    SetLikeClick(!likeClick);
                                }}
                            />
                        </FeedActions>
                        <FeedActions>
                            <FontAwesomeIcon icon={faComment} size="xl" style={{ marginLeft: '7px' }} />
                        </FeedActions>
                        <FeedActions>
                            <FontAwesomeIcon icon={faPaperPlane} size="xl" style={{ marginLeft: '7px' }} />
                        </FeedActions>
                    </FeedActionsLeft>

                    <div>
                        <FeedActions>
                            <FontAwesomeIcon icon={faBookmark} size="xl" />
                        </FeedActions>
                    </div>
                </FeedActionContainer>
                <Comments key={id} author={user.username} caption={caption} reviews={reviews} reviewsNum={reviewsNum} />
            </Wrapper>
        </FeedContainer>
    );
}

export default Feed;
