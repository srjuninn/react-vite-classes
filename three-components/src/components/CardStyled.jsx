import styled from "styled-components"

const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  padding: 1.5rem;
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.1);

  color: #333;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 1rem 2rem rgba(0,0,0,0.2);
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 700;
    margin: 0;
    color: #cc0000;
  }

  img {
    width: 100%;
    max-width: 250px;
    border-radius: 0.5rem;
    object-fit: cover;
  }

  p {
    font-size: 0.95rem;
    line-height: 1.4;
    text-align: center;
    color: #555;
  }
`

export default function Card({title, src, description, text}){
    return(
       <CardStyled>
        <h2>{title}</h2>
        <img src={src} alt={description} />
        <p>{text}</p>
       </CardStyled>
    )
}