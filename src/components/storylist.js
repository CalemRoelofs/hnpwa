import React, { useEffect, useState } from "react";
import StoryCard from "./storycard";
import { getTopStories } from "../utils/request-utils";

const StoryList = (props) => {
  const [storyCards, setStoryCards] = useState([]);
  const listHead = (((props.pageNumber - 1) * 30) + 1).toString();

  const getStories = async (pageNumber) => {
    const stories = await getTopStories(pageNumber);
    const storyList = stories.map((story, index) =>
      <StoryCard
        key={((props.pageNumber - 1) * 30) + index + 1}
        index={((props.pageNumber - 1) * 30) + index + 1}
        story={story}
      />
    );
    setStoryCards(storyList);
  };

  useEffect(() => {
    if (storyCards.length === 0 || storyCards[0].key !== listHead) {
      getStories(props.pageNumber);
    }
  })



  return (
    <ul className="p-1 divide-y-0 self-center bg-neutral-100">
      {storyCards.length === 0
        ? "steliaing stooris frm HN lol XD"
        : storyCards}
    </ul>
  )
}

export default StoryList;