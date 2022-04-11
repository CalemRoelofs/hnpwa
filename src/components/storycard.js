import React from "react";

const StoryCard = (props) => {
  const story = props.story;

  return (
    <li className="flex py-2 first:pt-0 last:pb-0 self-center">
      <div className="text-xl text-neutral-400">{props.index}.▲</div>
      <div className="mx-3 overflow-hidden">
        <p className="text-xl">
          {story.url
            ? <a href={story.url}>{story.title}</a>
            : story.title
          }
        </p>
        {story.domain
          ? <p className="pb-0.5 text-base text-slate-500">({story.domain})</p>
          : null}
        <p className="text-xs text-slate-600">
          {`${story.points} points by ${story.user} ${story.time_ago} | ${story.comments_count} comments`}
        </p>
      </div>
    </li>
  );
};

export default StoryCard;