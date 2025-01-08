import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import styled from "styled-components";

// Container component for the full screen view
const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  background-image: url('/movie-posters-bg.jpg');
  background-size: cover;
  background-position: center;
`;

// Wrapper for form content
const Wrapper = styled.div`
  width: 100%;
  max-width: 32rem;
`;

// Form container with styling
const FormWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
  border-radius: 1.25rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  width: 100%; /* Ensures the form stays within bounds */
`;

// Input field style
const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border-radius: 1rem;
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  font-size: 1.125rem;
  placeholder-color: rgba(255, 255, 255, 0.7);
  outline: none;
  margin-bottom: 1rem; /* Ensures there's space between inputs */

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`;

// Submit button style
const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  font-size: 1.125rem;
  border-radius: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  // Form submission handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <Container>
      <Wrapper>
        <Header />
        <FormWrapper>
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          />
          <SubmitButton onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleSubmit(e)}>
            Giriş Yap
          </SubmitButton>
        </FormWrapper>
      </Wrapper>
    </Container>
  );
};

export default Login;
