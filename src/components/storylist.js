import React, { useEffect, useState } from "react";
import StoryCard from "./storycard";
import { getTopStories } from "../utils/request-utils";

const StoryList = (props) => {
  const [storyCards, setStoryCards] = useState([]);

  useEffect(() => {
    if (storyCards.length === 0) {
      getStories();
    }
  })

  const getStories = async () => {
    const stories = await getTopStories(1);
    const storyList = stories.map((story, index) => <StoryCard key={index + 1} index={index + 1} story={story} />);
    setStoryCards(storyList);

  }


  return (
    <ul className="p-1 divide-y-0 self-center bg-neutral-100">
      {storyCards.length === 0
        ? "steliaing stooris frm HN lol XD"
        : storyCards}
    </ul>
  )
}

export default StoryList;