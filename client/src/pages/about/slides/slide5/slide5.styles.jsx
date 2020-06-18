import styled from "styled-components" 

import { motion } from "framer-motion"

export const SlideContentContainer = styled(motion.div)`
  width: 75vw;
  max-width: 1000px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeadlineContainer = styled(motion.div)`
  display: flex;
  margin-bottom: 50px;
`;

export const Headline = styled(motion.div)`
  font-size: 40px;
`;

export const BodyContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Paragraph = styled(motion.div)`
  font-size: 20px;
  margin-bottom: 50px;
  text-align: center;
`;

export const WelcomeContainer = styled(motion.div)`
  font-size: 40px;
  margin-bottom: 50px;
  text-align: center;
`;

