import StoryList from "../components/storylist";
import { getAskHNStories } from '../utils/request-utils'

const Ask = (props) => {
    const pageNumber = props.pageNumber;
    return (
        <>
            <StoryList pageNumber={pageNumber} getStories={() => getAskHNStories(pageNumber)} />
        </>
    );
}

export default Ask;