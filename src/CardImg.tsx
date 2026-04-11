import styled from "styled-components";
import DisertImage from './image.jpg';

export function CardImg() {
    return (
        <StyleCardImg src = {DisertImage} alt = {"Not Drowing"}/>
    )
}
const StyleCardImg = styled.img`
    width: 280px;
    height: 170px;
    border-radius: 15px;
`
