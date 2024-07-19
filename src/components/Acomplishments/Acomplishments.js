import { Section, SectionDivider, SectionTitle } from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";
import { acomplishments } from "@/constants/constants";

const Acomplishments = () => (
  <Section>
    <SectionDivider />
    <br />
    <SectionTitle>Personal Acomplishments</SectionTitle>

    <Boxes>
      {acomplishments.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);
export default Acomplishments;
