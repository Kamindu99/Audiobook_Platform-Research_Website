import ContactUs from './ContactUs';
import LiteratureSurvey from './LiteratureSurvey';
import MeetOurTeam from './MeetOurTeam';
import ResearchGap from './ResearchGap';
import ResearchProblem from './ResearchProblem';

type Props = {}

const HomePage = (props: Props) => {

  return (
    <div>
      <div className="intro" id="home">
        <h1 className="animate">Audio Book System for Visually Impaired University Students</h1>
        <p>Learn More</p>
      </div>

      <LiteratureSurvey />
      <ResearchGap />
      <ResearchProblem />
      {/* <ResearchObjectives /> */}
      <MeetOurTeam />
      <ContactUs />

    </div>
  )
}

export default HomePage