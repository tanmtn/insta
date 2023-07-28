import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';

import { styled } from 'styled-components';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

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

    form {
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

// const TopIcon = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     height: 8vh;
// `;

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
    height: 5vh;
    margin-bottom: 15px;
    opacity: ${(props) => (props.disabled ? '0.5' : '1')};
`;

const SubTitle = styled.div`
    font-size: 14px;
`;

const FacebookLogin = styled.div`
    width: 100%;
    border: none;
    border-radius: 3px;
    margin-top: 12px;
    background-color: #0095f6;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 0;
    font-size: 14px;
    font-weight: 600;
    height: 5vh;
`;

const InstaIcon = styled.div`
    margin-bottom: 10px;
`;

function SignUp() {
    const {
        register,
        handleSubmit,
        formState,
        formState: { errors },
    } = useForm({ mode: 'onChange' });

    // console.log(formState.isValid)

    // const { register, handleSubmit } = useForm();

    const onSubmitValid = (data) => {
        // API 호출
        console.log('data valid', data);

        // axios.post("https://oz.com/api/v1/signpu".data)
    };

    const onSubmitInvalid = (data) => {
        console.log('data invalid', data);
    };

    return (
        <Container>
            <Helmet>
                <title>Instagram | SignUP</title>
            </Helmet>
            <Wrapper>
                <TopBox>
                    <InstaIcon>
                        <FontAwesomeIcon icon={faInstagram} size="3x" />
                    </InstaIcon>
                    <SubTitle>친구들의 사진과 동영상을 보려면 가입하세요.</SubTitle>
                    <FacebookLogin>
                        <FontAwesomeIcon icon={faSquareFacebook} style={{ marginRight: '10px' }} />
                        <span>Facebook으로 로그인</span>
                    </FacebookLogin>

                    <TopOr>
                        <TopLine></TopLine>
                        <Or>OR</Or>
                        <TopLine></TopLine>
                    </TopOr>

                    <form onSubmit={handleSubmit(onSubmitValid, onSubmitInvalid)}>
                        <Input
                            type="text"
                            placeholder="핸드폰 번호"
                            {...register('phone', { required: true, minLength: 12 })}
                        />
                        <Input
                            type="text"
                            name="name"
                            placeholder="성명"
                            {...register('name', { required: true, minLength: 3 })}
                        />
                        <Input
                            type="text"
                            placeholder="유저네임"
                            {...register('username', { required: true, minLength: 3 })}
                        />
                        <Input
                            type="password"
                            name="password"
                            placeholder="비밀번호"
                            {...register('password', { required: true, minLength: 4 })}
                        />
                        <Button
                            type="submit"
                            value="가입하기"
                            disabled={!formState.isValid}

                            // isValid => 데이터가 맞냐?
                            // True -> disabled가 비활성화가 되어어서 클릭이 되게끔 해야함
                            // 아니 -> disabled가 활성화되어야지 클릭이 안되야지
                        >
                            가입
                        </Button>
                        {errors.name && errors.name.type === 'required' && (
                            <p style={{ color: 'red' }}>이름은 반드시 입력되어야 합니다.</p>
                        )}
                        {errors.name && errors.name.type === 'minLength' && (
                            <p style={{ color: 'red' }}>이름은 최소 3글자 이상 입력 해주셔야 합니다.</p>
                        )}
                    </form>

                    {/* <TopIcon>
                        <FontAwesomeIcon icon={faSquareFacebook} size="1x" />
                        <div>
                            <Facebook>Facebook으로 로그인</Facebook>
                        </div>
                    </TopIcon> */}
                </TopBox>

                <BottomBox>
                    <span>계정이 있으신가요?</span>
                    <Link to="/">로그인</Link>
                </BottomBox>
            </Wrapper>
        </Container>
    );
}

export default SignUp;
