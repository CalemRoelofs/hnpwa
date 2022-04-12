import StoryList from "../components/storylist";
import { getJobStories } from '../utils/request-utils'

const Jobs = (props) => {
    const pageNumber = props.pageNumber;
    return (
        <>
            <StoryList pageNumber={pageNumber} getStories={() => getJobStories(pageNumber)} />
        </>
    );
}

export default Jobs;