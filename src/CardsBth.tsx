import styled from "styled-components";

import {CardBth} from "./CardBth";

export function CardsBth() {
    return (
        <StyledCardsBth>
            <CardBth typeBth={"primary"} title={"See more"}></CardBth>
            <CardBth typeBth={"outline"} title={"Save"}></CardBth>
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