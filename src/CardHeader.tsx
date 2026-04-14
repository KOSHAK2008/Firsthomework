import styled from "styled-components";


export function CardHeader() {
    return (
        <StyleCardHeader>Headline</StyleCardHeader>
    )
}

const StyleCardHeader = styled.div`
    padding: 10px;
    //font-family: Inter;
    font-weight: 700;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0;
    color: #000000;
`