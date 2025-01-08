import styled from "styled-components";

const HeaderContainer = styled.div`
  text-align: center;
  padding: 2rem;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
  border-radius: 1.25rem;
  margin-bottom: 1.5rem;
  width: 100%; /* Ensures the width matches the form's width */
  max-width: 32rem; /* Ensures it doesn't exceed the max width of the form */
  margin-left: auto;
  margin-right: auto;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: black; /* Set the text color to black */
  margin-bottom: 0.5rem;
  font-family: 'Silkscreen', sans-serif; /* Applying the Silkscreen font */
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5); /* Adding a 50% shadow effect */
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Title>MOVIE</Title>
      <Title>RECOMMENDATION</Title>
      <Title>MACHINE 📽️🎰</Title>
    </HeaderContainer>
  );
}