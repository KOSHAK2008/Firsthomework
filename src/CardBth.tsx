import styled, {css} from "styled-components";

export function CardBth(props: StyleCardBrhPropsType) {
    return (
        <StyledCardBth>{props.title}</StyledCardBth>
    )
}

type StyleCardBrhPropsType = {
    title?: string;
    color?: string;
    typeBth?: "primary" | "outline";
}

const StyledCardBth = styled.button`
    border: none;
    background-color: ${props => props.color || "#4E71FE"};
    width: 86px;
    height: 30px;
    padding: 4px 16px;
    border-radius: 5px;
    color: ${props => props.color || "snow"};
    font-weight: 700;
    font-size: 10px;
    line-height: 20px;
    letter-spacing: 0;

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