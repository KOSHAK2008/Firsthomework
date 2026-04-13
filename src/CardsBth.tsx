import styled, {css} from "styled-components";
// import {CardBth} from "./CardBth";

export function CardsBth () {
    return (
        <StyledCardsBth>
            <CardBth primary title ={"See more"}>See more</CardBth>
            <CardBth outline title ={"Save"}>Save</CardBth>
        </StyledCardsBth>
    )
}
const StyledCardsBth = styled.div`
    width: 184px;
    height: 30px;
    display: flex;
    justify-content: space-around;
    
`

type StyleCardBrhPropsType = {
    title?: string;
    color?: string;
    primary?: boolean;
    outline?: boolean
}

const CardBth = styled.button<StyleCardBrhPropsType>`
    border: none;
    background-color: ${props => props.color || "#4E71FE"};
    width: 86px;
    height: 30px;
    padding: 4px 16px;
    border-radius: 5px;
    color: snow;
    font-weight: 700;
    font-size: 10px;
    line-height: 20px;
    letter-spacing: 0;

    ${props => props.outline && css<StyleCardBrhPropsType>`
        border: 2px solid ${props => props.color || "#4E71FE"};
        background-color: #ffffff;
        color: #4E71FE;
        `
}
    ${props => props.primary && css<StyleCardBrhPropsType>`
        border: 2px solid ${props => props.color || "#ffffff"};
        background-color: #4E71FE;
        color: #ffffff;
        `
}
`