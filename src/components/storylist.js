import React, { useState } from "react";
import StoryCard from "./storycard";
import { getTopStories } from "../utils/request-utils";

const StoryList = (props) => {
  const [storyCards, setStoryCards] = useState([]);

  (async () => {
    const stories = await getTopStories(props.pageNumber);
    const storyList = stories.map((story, index) =>
      <StoryCard
        key={((props.pageNumber - 1) * 30) + index + 1}
        index={((props.pageNumber - 1) * 30) + index + 1}
        story={story}
      />
    );
    setStoryCards(storyList);
  })();

  return (
    <ul className="p-1 divide-y-0 self-center bg-neutral-100">
      {storyCards.length === 0
        ? "steliaing stooris frm HN lol XD"
        : storyCards}
    </ul>
  )
}

export default StoryList;