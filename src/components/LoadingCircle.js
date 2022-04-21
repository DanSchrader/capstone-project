import { motion } from 'framer-motion';
import styled from 'styled-components';
import logo from '../images/raptoreum-logo-bw.svg';

export default function LoadingCircle() {
  const spinTransition = {
    loop: Infinity,
    ease: 'linear',
    duration: 1,
  };

  return (
    <CircleContainer>
      <Circle animate={{ rotate: 360 }} transition={spinTransition} />
      <LoadingLogo src={logo} alt="Raptoreum-Logo" />
    </CircleContainer>
  );
}

const CircleContainer = styled.div`
  display: grid;
  justify-self: center;
  position: relative;
  margin-top: 30px;
  width: 3rem;
  height: 3rem;
  background: rgb(58, 197, 232, 50%);
  border-radius: 50%;
`;
const Circle = styled(motion.span)`
  display: block;
  width: 3rem;
  height: 3rem;
  border: 0.5rem solid rgb(58, 197, 232, 50%);
  border-top: 0.5rem solid rgb(58, 197, 232, 100%);
  border-radius: 50%;
`;

const LoadingLogo = styled.img`
  width: 40px;
  height: 40px;
  position: absolute;
  top: 5px;
  left: 5px;
`;
