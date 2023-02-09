import {
  BlogDate,
  BlogPost,
  BlogSection,
  BlogText,
  BlogTitle,
  PostHeader,
} from "./StyledComponents";

import { posts } from "../data";

export const RecentPosts = () => {
  let newPosts = [];

  for (let i = 0; i < 3; i++) {
    newPosts.push(posts[i]);
  }

  return (
    <>
      <PostHeader>Recent posts</PostHeader>
      <BlogSection>
        {newPosts.map((item, index) => {
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
    </>
  );
};
