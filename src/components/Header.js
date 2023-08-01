import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane, faUser } from '@fortawesome/fontawesome-free-regular';
import { Link } from 'react-router-dom';

import { styled } from 'styled-components';
import { Button } from '@chakra-ui/react';

import { userLogOut } from 'api';
import { userLoggedOut } from 'apollo';

const HeaderContainer = styled.header`
    display: flex;
    justify-content: center;
    align-item: center;
    width: 100%;
    padding: 18px 0;
    border-bottom: 1px solid black;
`;
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-item: center;
    width: 100%;
    max-width: 630px;
`;

const Column = styled.div``;

const SLink = styled(Link)`
    color: black;
`;

function Header() {
    const onLogout = async () => {
        const res = await userLogOut();

        if (res) {
            userLoggedOut();
        }
    };

    return (
        <HeaderContainer>
            <Wrapper>
                <Column>
                    <SLink to="/">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </SLink>
                </Column>
                <Column>
                    <FontAwesomeIcon icon={faHouse} style={{ marginRight: '5px' }} size="1x" />
                    <FontAwesomeIcon icon={faPaperPlane} style={{ marginRight: '5px' }} size="1x" />
                    <SLink to="/profile">
                        <FontAwesomeIcon icon={faUser} style={{ marginRight: '5px' }} size="1x" />
                    </SLink>
                    <Button onClick={onLogout}>로그아웃</Button>
                </Column>
            </Wrapper>
        </HeaderContainer>
    );
}

export default Header;
