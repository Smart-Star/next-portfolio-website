import { Section, SectionText, SectionTitle } from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding style={{ marginTop: "4rem" }}>
    <LeftSection>
      <SectionTitle center>
        Welocme To <br />
        My Personal Portfolio
      </SectionTitle>

      <SectionText>
        I am Foluso Ojutalayo, a UI/UX Designer, Brand Designer, and Front-End Web Developer. I
        create engaging digital experiences and compelling visual identites. Explore my work to see
        how I combine creativity and technical expertise to turn your vision into reality.
      </SectionText>

      <Button onClick={() => (window.location = "https://www.behance.net/folusoojutalayo")}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);
export default Hero;
