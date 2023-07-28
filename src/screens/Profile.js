import { styled } from 'styled-components';

import { useParams } from 'react-router-dom';

import { useQuery } from '@tanstack/react-query';
import { getUserFeeds } from '../api';

import ProfileFeed from 'components/ProfileFeed';

const ProfileContainer = styled.div``;

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid black;
    border-radius: 3px;
`;
const HeaderImg = styled.img`
    margin-left: 50px;
    border-radius: 50%;
    height: 160px;
    width: 160px;
    border: 1px solid black;
`;
const HeaderInfo = styled.div`
    margin-left: 100px;
`;
const HeaderUserName = styled.h3`
    font-size: 28px;
    font-weight: 600;
`;
const HeaderFollowerInfo = styled.div``;

const ContentContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 300px;
    grid-gap: 20px;
    margin-top: 30px;
`;

function Profile() {
    // (1) username 값을 어떻게 가져올 수 있을까? -> URL params
    const { username } = useParams();
    console.log(username);

    // (2) 가져온 username 값을 어떻게 서버로 전달할 수 있을까?
    const { data } = useQuery(['getUserFeeds', username], getUserFeeds);

    return (
        <ProfileContainer>
            <HeaderContainer>
                <HeaderImg src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA2MDhfMjE5%2FMDAxNTkxNjA0ODQyNjk2.8ftcZrGyM2RjIclE_PlflK0IS580vnThAQdVK2K0DKUg.lFXU0qbKNzONn8TECwAlFczVSDRCHskCNmp9XrTOvyAg.JPEG.a900424%2FD077168C-7A97-4AE0-8172-BF41C4B5C9E2-85122-000022A334D8033C_file.jpg&type=a340"></HeaderImg>
                <HeaderInfo>
                    <HeaderUserName style={{ paddingBottom: '30px' }}>유저이름</HeaderUserName>
                    <HeaderFollowerInfo style={{ paddingBottom: '30px' }}>3followers 10following</HeaderFollowerInfo>
                </HeaderInfo>
            </HeaderContainer>

            <ContentContainer>
                {data?.map((feed) => (
                    <ProfileFeed key={feed.id} {...feed} />
                ))}
            </ContentContainer>
        </ProfileContainer>
    );
}

export default Profile;
