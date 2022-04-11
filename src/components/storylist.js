import React, { useEffect, useState } from "react";
import StoryCard from "./storycard";
import { getTopStories } from "../utils/request-utils";

const StoryList = (props) => {
  const [storyCards, setStoryCards] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    getStories();
  })

  const getStories = async () => {
    setPageNumber(props.pageNumber)
    const stories = await getTopStories(pageNumber);
    const storyList = stories.map((story, index) =>
      <StoryCard
        key={((pageNumber - 1) * 30) + index + 1}
        index={((pageNumber - 1) * 30) + index + 1}
        story={story}
      />
    );
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