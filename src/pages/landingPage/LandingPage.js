import {
  BlogDate,
  BlogPost,
  BlogSection,
  BlogText,
  BlogTitle,
  HeroDiv,
  HeroP,
  HeroPDiv,
  HeroTitle,
  StyledLink,
} from "../../components/StyledComponents";

import { posts } from "../../data";

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

      <BlogSection>
        {posts.map((item, index) => {
          return (
            <BlogPost key={index}>
              <div>
                <img src={item.image} alt="blog" />
              </div>
              <BlogDate>{item.date}</BlogDate>
              <BlogTitle>{item.name}</BlogTitle>
              <BlogText>{item.text}</BlogText>
            </BlogPost>
          );
        })}
      </BlogSection>

      <StyledLink underline="true" to="/home-page">
        View More
      </StyledLink>
    </>
  );
};
