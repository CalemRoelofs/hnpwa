import StoryList from "../components/storylist";
import { getTopStories } from '../utils/request-utils'

const Top = (props) => {
    const pageNumber = props.pageNumber;
    return (
        <>
            <StoryList pageNumber={pageNumber} getStories={() => getTopStories(pageNumber)} />
        </>
    );
}

export default Top;