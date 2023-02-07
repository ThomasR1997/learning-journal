import {
  HeroDiv,
  HeroP,
  HeroPDiv,
  HeroTitle,
} from "../../components/StyledComponents";

export const LandingPage = () => {
  return (
    <>
      <HeroDiv>
        <HeroP>JULY 23, 2022</HeroP>
        <HeroTitle>My new journey as a bootcamp student.</HeroTitle>
        <HeroPDiv>
          <HeroP>
            After several months of learning in the Frontend Developer Career
            Path, I've made the big jump over to the Bootcamp to get expert code
            reviews of my Solo Projects projects and meet like-minded peers.
          </HeroP>
        </HeroPDiv>
      </HeroDiv>
    </>
  );
};
