import StoryList from "../components/storylist";
import { getShowHNStories } from '../utils/request-utils'

const Show = (props) => {
    const pageNumber = props.pageNumber;
    return (
        <>
            <StoryList pageNumber={pageNumber} getStories={() => getShowHNStories(pageNumber)} />
        </>
    );
}

export default Show;