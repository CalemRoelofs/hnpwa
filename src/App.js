import './App.css';
import StoryList from './components/storylist';
import NavBar from './components/navbar';
import PageNumbers from './components/pagenumbers';



function App() {
  return (
    <div className="md:container md:mx-auto xl:mx-0 xl:max-w-full bg-neutral-100">
      <div >
        <NavBar />
        <PageNumbers />
        <StoryList />
      </div>
    </div>
  );
}

export default App;
