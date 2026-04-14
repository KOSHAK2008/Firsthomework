import {CardImg} from './CardImg'
import styled from "styled-components";
import {CardMain} from "./CardMain";


export function Card() {
    return (
        <StyleCard>
            <CardImg/>
            <CardMain/>
        </StyleCard>
    )
}

const StyleCard = styled.article`
    width: 280px;
    height: 330px;
    box-shadow: 0 0 5px #676767;
    border-radius: 15px;
    background: #FFFFFF;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`