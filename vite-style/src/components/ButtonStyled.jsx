import styled from "styled-components"

const StyledButton = styled.button`
    background-color: ${(props) => (props.secondary ? "yellow" : "orange")};
    color: blue;
    border: 10px solid black;
    padding: ${(props) => (props.large ? "10px" : "")};
`

export default function ButtonStyled({secondary, text, large}){
    return(
        <StyledButton secondary={secondary} large={large}>
            {text}
        </StyledButton>
    )
}