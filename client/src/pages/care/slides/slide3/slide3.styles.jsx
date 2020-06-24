import styled from "styled-components";

import { motion } from "framer-motion";

export const SlideContentContainer = styled(motion.div)`
  width: 75vw;
  max-width: 1000px;

  display: flex;
  flex-direction: column;
`;

export const HeadlineContainer = styled.div`
  display: flex;
  margin-bottom: 50px;
`;

export const Headline = styled.div`
  font-size: 40px;
`;

export const ListHeading = styled.div`
  font-size: 30px;
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Paragraph = styled.div`
  font-size: 20px;
`;
