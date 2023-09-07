import React from 'react'

function ResearchGap() {
    return (
        <section className='mt-5'>
            <h1 style={{ marginLeft: '8%' }}>Research Gap</h1>
            <p style={{ marginLeft: '8%' }}>Following areas are the research gaps found in most of the recent researches.</p>
            <div className="achievements">
                <div className="work">
                    <i className="fas fa-search"></i>
                    <p className="work-heading">Identification & Classification</p>
                    <p className="work-text">There are no records of a smart solution for coconut pest and disease identification and classification in Sri Lanka. Symptoms of coconut disorders show similar characteristic appearance and therefore it is a challenge to provide a solution.</p>
                </div>
                <div className="work">
                    <i className="fas fa-chart-line"></i>
                    <p className="work-heading">Severity Assessment</p>
                    <p className="work-text">Smart solution for identification of some coconut pest and diseases is reported in India but assessment on severity of disease conditon and progression level of pest damage is not attempted.</p>
                </div>
                <div className="work">
                    <i className="fas fa-comments"></i>
                    <p className="work-heading">Information Sharing</p>
                    <p className="work-text">Real time communication system to speed up information sharing between coconut growers, extension personals and researchers has been identified as priority need for effective pest and disease control.</p>
                </div>
            </div>
        </section>
    )
}

export default ResearchGap