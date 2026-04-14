import styled, {css} from "styled-components";

// import {CardBth} from "./CardBth";

export function CardsBth() {
    return (
        <StyledCardsBth>
            <CardBth typeBth={"primary"} title={"See more"}>See more</CardBth>
            <CardBth typeBth={"outline"} title={"Save"}>Save</CardBth>
        </StyledCardsBth>
    )
}

const StyledCardsBth = styled.div`
    width: 85%;
    height: 23%;
    display: flex;
    justify-content: flex-start;
    gap: 10%;

`

type StyleCardBrhPropsType = {
    title?: string;
    color?: string;
    typeBth?: "primary" | "outline";
}

const CardBth = styled.button<StyleCardBrhPropsType>`
    border: none;
    background-color: ${props => props.color || "#4E71FE"};
    width: 86px;
    height: 30px;
    //padding: 1% 6%;
    border-radius: 5px;
    color: snow;
    font-weight: 700;
    font-size: 10px;
    line-height: 20px;
    letter-spacing: 0;

    &:hover {
        background-color: rgb(66 68 87);
        border: none;
        color: rgb(183 187 221);
    }

    ${props => props.typeBth === "outline" && css<StyleCardBrhPropsType>`
        border: 2px solid ${props.color || "#4E71FE"};
        background-color: #ffffff;
        color: #4E71FE;
    `
    }
    ${props => props.typeBth === "primary" && css<StyleCardBrhPropsType>`
        border: 2px solid ${props.color || "#ffffff"};
        background-color: #4E71FE;
        color: #ffffff;
    `
    }
`