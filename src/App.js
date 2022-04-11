import { useState } from 'react';

import './App.css';
import StoryList from './components/storylist';
import NavBar from './components/navbar';
import PageNumbers from './components/pagenumbers';


function App() {

  const [pageNumber, setPageNumber] = useState(1);

  return (
    <div className="md:container md:mx-auto xl:mx-0 xl:max-w-full bg-neutral-100">
      <div >
        <NavBar />
        <PageNumbers pageNumber={pageNumber} changePage={(number) => { console.log('clicked'); setPageNumber(number); }} />
        <StoryList pageNumber={pageNumber} />
      </div>
    </div>
  );
}

export default App;
