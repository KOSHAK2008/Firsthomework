import styled from "styled-components";

export function CardBth(props: any   ) {
    return (
        <StyledCardBtn>{props.title}</StyledCardBtn>
    )
}
const StyledCardBtn = styled.button`
    border: none;
    background-color: #4E71FE;
    width: 86px;
    height: 30px;
    padding: 4px 20px;
    border-radius: 5px;
    color: snow;
    font-weight: 700;
    font-size: 10px;
    line-height: 20px;
    letter-spacing: 0;

    &:active {
        border: 2px solid #4E71FE;
        background-color: #ffffff;
        color: #4E71FE;
    }
`

