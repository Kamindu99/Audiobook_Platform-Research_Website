import React from 'react'

function ResearchObjectives() {
    return (
        <section className='mt-5 objectives ' id="objective">
            <h1 style={{ marginLeft: '8%' }}>Research Objectives</h1>
            <div className="mt-5" style={{ marginLeft: '15%', marginRight: '15%' }}>
                <div className="container mt-5">

                    <div className="row align-items-center how-it-works d-flex">
                        <div className="col-2 text-center bottom d-inline-flex justify-content-center align-items-center">
                            <div className="circle font-weight-bold">1</div>
                        </div>
                        <div className="col-6">
                            <h5>What are the current challenges faced by students</h5>
                            <p>Natural language processing algorithms are required to understand and interpret the meaning of spoken
                                phrases and sentences.Incorporating Sinhala voice recognition enhances the system's usability for
                                Sinhala-speaking students.</p>
                        </div>
                    </div>

                    <div className="row timeline">
                        <div className="col-2">
                            <div className="corner top-right"></div>
                        </div>
                        <div className="col-8">
                            <hr />
                        </div>
                        <div className="col-2">
                            <div className="corner left-bottom"></div>
                        </div>
                    </div>

                    <div className="row align-items-center justify-content-end  d-flex">
                        <div className="col-6 text-right">
                            <h5>How can address these challenges</h5>
                            <p>The purpose of this component is to design interfaces that are accessible for partially visually impaired students.
                                It aims to provide different color options that are easier to distinguish for those with partial visual
                                impairments. </p>
                        </div>
                        <div className="col-2 text-center full d-inline-flex justify-content-center align-items-center">
                            <div className="circle font-weight-bold">2</div>
                        </div>
                    </div>

                    <div className="row timeline">
                        <div className="col-2">
                            <div className="corner right-bottom"></div>
                        </div>
                        <div className="col-8">
                            <hr />
                        </div>
                        <div className="col-2">
                            <div className="corner top-left"></div>
                        </div>
                    </div>

                    <div className="row align-items-center how-it-works d-flex">
                        <div className="col-2 text-center top d-inline-flex justify-content-center align-items-center">
                            <div className="circle font-weight-bold">3</div>
                        </div>
                        <div className="col-6">
                            <h5>How to make the easily accessible for the users?</h5>
                            <p>Biometric authentication technologies provide a secure and accessible method of user authentication.
                                This function aims to implement biometric authentication technologies in a way that accommodates visually
                                impaired students.</p>
                        </div>
                    </div>

                    <div className="row timeline">
                        <div className="col-2">
                            <div className="corner top-right"></div>
                        </div>
                        <div className="col-8">
                            <hr />
                        </div>
                        <div className="col-2">
                            <div className="corner left-bottom"></div>
                        </div>
                    </div>

                    <div className="row align-items-center justify-content-end  d-flex">
                        <div className="col-6 text-right">
                            <h5>How can a recommendation and suggestions system</h5>
                            <p>Finding the right audio book can be difficult for students who are visually impaired. A recommendation system
                                can help students discover new audio books aligned with their interests and learning goals.
                            </p>
                        </div>
                        <div className="col-2 text-center full d-inline-flex justify-content-center align-items-center">
                            <div className="circle font-weight-bold">4</div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ResearchObjectives