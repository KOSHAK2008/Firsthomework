import styled from "styled-components";
import {CardsBth} from './CardsBth'
import {CardText} from "./CardText";
import {CardHeader} from "./CardHeader";


export function CardMain() {
    return (
        <StyleCardMain>
            <CardHeader/>
            <CardText/>
            <CardsBth/>
        </StyleCardMain>
    )
}

const StyleCardMain = styled.div`
    height: 55%;
    padding: 10px 10px 20px 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
`