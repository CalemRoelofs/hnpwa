import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/navbar';
import PageNumbers from './components/pagenumbers';
import Top from './routes/top';
import Newest from './routes/newest';
import Ask from './routes/ask';
import Show from './routes/show';
import Jobs from './routes/jobs';
import { useLocationChange } from './utils/route-utils';

function App(props) {

  const [pageNumber, setPageNumber] = useState(1);

  useLocationChange((location, prevLocation) => {
    console.log('changed from', prevLocation, 'to', location);

    if (prevLocation && location.pathname !== prevLocation.pathname) {
      setPageNumber(1);
    }
  });

  return (
    <div className="md:container md:mx-auto xl:mx-0 xl:max-w-full bg-neutral-100">
      <div>
        <NavBar />
        <PageNumbers pageNumber={pageNumber} changePage={(number) => { setPageNumber(number); }} />
        <Routes>
          <Route path='/' element={<Top pageNumber={pageNumber} />} />
          <Route path='/top' element={<Top pageNumber={pageNumber} />} />
          <Route path='/newest' element={<Newest pageNumber={pageNumber} />} />
          <Route path='/ask' element={<Ask pageNumber={pageNumber} />} />
          <Route path='/show' element={<Show pageNumber={pageNumber} />} />
          <Route path='/jobs' element={<Jobs pageNumber={pageNumber} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
