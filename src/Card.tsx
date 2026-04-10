import {CardImg} from './CardImg'
import styled from "styled-components";
import {CardMain} from "./CardMain";


export function Card () {
    return (
        <StyleCard>
            <CardImg/>
            <CardMain/>
        </StyleCard>
    )
}

const StyleCard = styled.div`
    width: 280px;
    height: 330px;
    border: 1px solid #000000;
    border-radius: 15px;
    background: #FFFFFF;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`