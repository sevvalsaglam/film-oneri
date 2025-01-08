import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;

`;

const Wrapper = styled.div`
  width: 100%;
`;

const SuccessBox = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
  border-radius: 1.25rem;
  padding: 2rem;
  text-align: center;
`;

const SuccessImage = styled.img`
  width: 12rem;
  height: 12rem;
  margin-bottom: 2rem;
  border-radius: 1rem;
`;

const Button = styled.button`
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  padding: 0.75rem 3rem;
  border-radius: 1rem;
  font-size: 1.125rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const Success: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Wrapper>
        <Header />
        <SuccessBox>
          <SuccessImage src="/placeholder.svg" alt="Success" />
          <Button onClick={() => navigate("/home")}>
            Ana Sayfaya Dön
          </Button>
        </SuccessBox>
      </Wrapper>
    </Container>
  );
};

export default Success;
