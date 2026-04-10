import {CardBth} from   './CardBth'
import styled from "styled-components";

export function CardsBth () {
    return (
        <StyledCardsBth>
            <CardBth title={"See more"}/>
            <CardBth title={"Save"}/>
        </StyledCardsBth>
    )
}
const StyledCardsBth = styled.div`
    width: 184px;
    height: 30px;
    display: flex;
    justify-content: space-around;
    
`