import React from 'react'

function ResearchGap() {
    return (
        <section className='mt-2' id='researchgap'>
            <h1 style={{ marginLeft: '8%' }}>Research Gap</h1>
            <p style={{ marginLeft: '8%' }}>Following areas are the research gaps found in most of the recent researches.</p>
            <div className="achievements">
                <div className="work">
                    <i className="fas fa-search"></i>
                    <p className="work-heading">Identification & Classification</p>
                    <p className="work-text">In the process of identifying and classifying research gaps in the field of accessible audio book systems for visually impaired students, several key areas emerged that warrant further investigation and exploration.</p>
                </div>
                <div className="work">
                    <i className="fas fa-chart-line"></i>
                    <p className="work-heading">Severity Assessment</p>
                    <p className="work-text">Severity assessment is a critical component of various processes, particularly in fields such as software development, healthcare, and risk management. It involves evaluating the seriousness or potential impact.</p>
                </div>
                <div className="work">
                    <i className="fas fa-comments"></i>
                    <p className="work-heading">Information Sharing</p>
                    <p className="work-text">nformation sharing refers to the process of distributing, disseminating, or exchanging information among individuals, groups, organizations, or systems. It plays a crucial role in various aspects of modern society.</p>
                </div>
            </div>
        </section>
    )
}

export default ResearchGap