import StoryList from "../components/storylist";
import { getNewestStories } from '../utils/request-utils'

const Newest = (props) => {
    const pageNumber = props.pageNumber;
    return (
        <>
            <StoryList pageNumber={pageNumber} getStories={() => getNewestStories(pageNumber)} />
        </>
    );
}

export default Newest;