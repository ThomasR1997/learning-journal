import { RecentPosts } from "../../components/RecentPosts";
import {
  AboutDiv,
  HomeText,
  StyledAbout,
  StyledPortrait,
} from "../../components/StyledComponents";

import avatar from "../../images/image 18.png";

export const AboutPage = () => {
  return (
    <div>
      <AboutDiv>
        <StyledAbout>
          <StyledPortrait src={avatar} />
          <div>
            <h1>
              Hi there! My name is Roku and welcome to my learning journal.
            </h1>
            <HomeText>
              After several months of learning in the Frontend Developer Career
              Path, I've made the big jump over to the Bootcamp to get expert
              code reviews of my Solo Projects projects and meet like-minded
              peers.
            </HomeText>
          </div>
        </StyledAbout>

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
          That helped me grow what I was learning, and I realized that posting
          my learning summaries was also helping others learn and stay
          motivated.
        </HomeText>
      </AboutDiv>
      <RecentPosts />
    </div>
  );
};
