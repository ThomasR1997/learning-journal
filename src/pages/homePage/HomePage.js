import { RecentPosts } from "../../components/RecentPosts";
import {
  HomeSection,
  HomeText,
  MarginDiv,
  StyledImage,
} from "../../components/StyledComponents";
import deezNuts from "../../images/article-image.png";

export const HomePage = () => {
  return (
    <MarginDiv>
      <HomeSection>
        <HomeText>JULY 23, 2022</HomeText>
        <h1>My new journey as a bootcamp student.</h1>
        <HomeText>
          After several months of learning in the Frontend Developer Career
          Path, I've made the big jump over to the Bootcamp to get expert code
          reviews of my Solo Projects projects and meet like-minded peers.
        </HomeText>
      </HomeSection>

      <StyledImage
        src={deezNuts}
        alt="Epic laptop on a desk besides a lamp, and a window infront of the desk, looking out over a city early in the morning"
      />

      <HomeSection>
        <h2>How I stay committed to learning</h2>

        <HomeText>
          I like to think of myself as a lifelong learner. I used to spend hours
          and hours learning, then try to create simple projects using what I
          learned or work new techniques into existing projects.
        </HomeText>

        <HomeText>
          While that was fun, I felt like it would be helpful to share what I
          was learning and most things about my journey with the world.
        </HomeText>

        <h2>How I got started</h2>

        <HomeText>
          I started simple and gradually grew my learning journal site. I would
          take notes about what I was learning. After each learning session, I'd
          use my notes to not only reflect on what I learned but also write
          short summaries of what I learned using my own words.
        </HomeText>

        <HomeText>
          That helped me grok what I was learning, and I realized that posting
          my learning summaries was also helping others learn and stay
          motivated.
        </HomeText>
      </HomeSection>
      <RecentPosts />
    </MarginDiv>
  );
};
