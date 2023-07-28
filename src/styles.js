import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const darkTheme = {
    bgColor: '#FAFAFA',
    fontColor: "rgb(38, 38, 38)",
    borderColor: "black",

};
export const WhiteTheme = {
    bgColor: 'white',
    fontColor: '#000',
};

export const GlobalStyle = createGlobalStyle`
    ${reset}
    *{
        box-sizing: border-box;
    }
    input{
        all:unset;
    }
    body{
        font-size: 14px;
        color: ${(props) => props.theme.fontColor}
        background-color: ${(props) => props.theme.bgColor}
    }
`;