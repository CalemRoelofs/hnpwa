import React from "react";

const PageNumbers = (props) => {
  return (
    <div className="flex justify-center select-none border-b-2 border-slate-400 bg-slate-400 sticky top-8">
      {props.pageNumber === 1
        ? <span>{'<'}</span>
        : <span onClick={() => props.changePage(props.pageNumber - 1)}>{'<'}</span>
      }
      <span className="px-5">{`${props.pageNumber}/10`}</span>
      {props.pageNumber === 10
        ? <span className="text-disabled">{'>'}</span>
        : <span onClick={() => props.changePage(props.pageNumber + 1)}>{'>'}</span>
      }
    </div>
  )
}

export default PageNumbers