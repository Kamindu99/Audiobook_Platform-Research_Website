import ContactUs from './ContactUs';
import Downloads from './Downloads';
import LiteratureSurvey from './LiteratureSurvey';
import MeetOurTeam from './MeetOurTeam';
import Methodology from './Methodology';
import ResearchGap from './ResearchGap';
import ResearchProblem from './ResearchProblem';
import TechnologyUsed from './TechnologyUsed';

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
      <Methodology />
      <TechnologyUsed />
      <Downloads />
      <MeetOurTeam />
      <ContactUs />

    </div>
  )
}

export default HomePage