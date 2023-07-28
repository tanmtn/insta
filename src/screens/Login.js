import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { styled } from "styled-components";
import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

const Wrapper = styled.div`
    max-width: 350px;
    width: 100%;
`;
const WhiteBox = styled.div`
    background-color: white;
    border: 1px solid rgb(219, 219, 219);
    width: 100%;
`;

const TopBox = styled(WhiteBox)`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 35px 40px 25px 40px;

form{
    margin-top: 30px;
}
`;

const TopOr = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`;
const TopLine = styled.div`
    border-bottom: 1px solid lightgrey;
    width: 110px;
    height: 0.5px;
`;

const Or = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: grey;
    margin-left: 10px;
    margin-right: 10px;
`;

const TopIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 8vh;
`;

const BottomBox = styled(WhiteBox)`
    margin-top: 10px;
    height: 8vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Facebook = styled.div`
    color: rgb(30, 48, 80);
    font-weight: 600;
`;
const Input = styled.input`
    width: 100%;
    border-radius: 3px;
    padding: 7px;
    background-color: #fafafa;
    border: 0.5px solid rgb(219, 219, 219);
    margin-top: 5px;
    box-sizing: border-box;
`;
const Button = styled.button`
    width: 100%;
    border: none;
    border-radius: 3px;
    margin-top: 12px;
    background-color: #0095f6;
    color: white;
    text-align: center;
    padding: 8px 0;
    font-size: 14px;
    font-weight: 600;
`;

function Login() {
    // useState(): 컴포넌트에서 바뀌는 변수 또는 값을 관리해주는 함수
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const onChange = (event) => {
        const { name, value } = event.currentTarget;
        console.log(name, value);

        if (name === "username") {
            setUserName(value);
        } else if (name === "password") {
            setPassword(value);
        }
    };

    const onSubmit = (event) => {
        event.preventDefault(); // 새로고침 방지
    };

    return (
        <Container>
            <Helmet>
                <title>Instagram</title>
            </Helmet>
            <Wrapper>
                <TopBox>
                    <div>
                        <FontAwesomeIcon icon={faInstagram} size="3x" />
                    </div>

                    <form onSubmit={onSubmit}>
                        <Input
                            type="text"
                            name="username"
                            placeholder="유저네임"
                            onChange={onChange}
                            required
                        />
                        <Input
                            type="password"
                            name="password"
                            placeholder="비밀번호"
                            onChange={onChange}
                            required
                        />
                        <Button type="submit" value="로그인 하기">
                            로그인
                        </Button>
                    </form>

                    <TopOr>
                        <TopLine></TopLine>
                        <Or>OR</Or>
                        <TopLine></TopLine>
                    </TopOr>

                    <TopIcon>
                        <FontAwesomeIcon icon={faSquareFacebook} size="1x" />
                        <div>
                            <Facebook>Facebook으로 로그인</Facebook>
                        </div>
                    </TopIcon>
                </TopBox>

                <BottomBox>
                    <span>계정이 없으신가요?</span>
                    <Link to="/signup">가입하기</Link>
                </BottomBox>
            </Wrapper>
        </Container>
    );
}

export default Login;

// export default Login = () => {
//     <div>
//         <h1>Login Screen</h1>
//     </div>;
// };

