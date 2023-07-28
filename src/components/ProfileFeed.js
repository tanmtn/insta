import { styled } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment } from '@fortawesome/free-solid-svg-icons';

const Content = styled.div`
    background-image: url(${(props) => props.bg});
    background-size: 100% 100%;
    position: relative;
    border: 1px solid black;
`;

const Overlay = styled.div`
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    position: absolute;
    justify-content: center;
    width: 100%
    height: 100%;
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    opacity: 0;
    &:hover {
        opacity: 1;
    }
`;

const Icon = styled.span`
    font-size: 18px;
    display: flex;
    align-items: center;
    margins 0 5px;
    svg{
        font-size: 14px;
        margin-right: 5px;
    }
`;
function ProfileFeed({ id, contentImg, likesNum, reviewsNum }) {
    return (
        <Content key={id} bg={contentImg}>
            <Overlay>
                <Icon>
                    <FontAwesomeIcon icon={faHeart} />
                    {likesNum}
                </Icon>
                <Icon>
                    <FontAwesomeIcon icon={faComment} />
                    {reviewsNum}
                </Icon>
            </Overlay>
        </Content>
    );
}

export default ProfileFeed;
