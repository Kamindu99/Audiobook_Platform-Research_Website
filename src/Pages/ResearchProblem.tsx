import React from 'react'

function ResearchProblem() {
    return (
        <section className='mt-5'>
            <h1 style={{ marginLeft: '8%' }}>Research Problem & Solution</h1>
            <div className="container-fluid py-5" id="about">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h5 style={{ fontWeight: '700' }} className='ms-3'>Proposed Problem</h5>
                            <h5 style={{ fontWeight: '700', color: 'orange' }} className='ms-3'>What are the current challenges faced by visually impaired university students in accessing learning materials and resources?</h5>
                            <p style={{ textAlign: 'justify' }} className='ms-3 mt-4'>
                                Develop a voice-controlled system that is user-friendly and accessible for visually impaired students,
                                which contains Sinhala voice recognition, voice-controlled system navigations. The students can use Sinhala
                                language to navigate through ListenEd, control playbacks and search audiobooks accordingly. Therefore,
                                ListenEd will help visually impaired students to get equal opportunities for their education.

                                <br /><br />
                                But the steps that are taken to enhance the education of visual impaired people are very low.
                                It is really important to provide easily accessible educational materials to individuals who are
                                visually impaired. ListenEd application is based on Sinhala language with Sinhala voice recognition
                                enabled. So that the majority of students can use this application to enhance their academic performances.
                                ListenEd recognize Sinhala commands and executes accordingly.
                            </p>
                        </div>
                        <div className="col-lg-6 pb-4 pb-lg-0">
                            <iframe style={{ marginLeft: '5%' }} width="560" height="315" src="https://www.youtube.com/embed/sW8ikZebCTc?si=lJu26JXwc25FXIci" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                        </div>
                    </div>
                    <h5 style={{ fontWeight: '700' }} className='ms-3 mt-3'>Proposed Solution</h5>
                    <p style={{ textAlign: 'justify' }} className='ms-3 mt-4'>
                        Voice recognition of ListenEd accomplished with several steps. Voice recognition, natural language processing
                        and processing base verb form are those. The initial phase consists of voice recognition using the microphone
                        of the user’s device. In this phase Google speech recognition APIs are used to capture Sinhala voice commands.
                        After that the Sinhala voice commands are translated into English before the next phase. This translated text
                        is then sent to the backend for further execution.
                        Then the text is sent through a natural language processing algorithm. In here the sentence is broken down to
                        nouns verbs, adverbs, and adjectives. The other parts of the sentences are discarded. From that the verbs are
                        going through to the next phase.
                        The next phase is processing base verb form with machine learning. Machine learning models were trained using
                        a large data set which contained different types of verb forms. Preprocessing techniques were also used to
                        reduce the complexity of the dataset and improve accuracy. For the text classification model several algorithms
                        are tested and evaluated, including Support Vector Machine (SVM), Random Forest & Logistic Regression. Those
                        algorithms were trained using the dataset. Random Forest classifier achieved the best accuracy and results.
                        From those functions, the base form of the verb is predicted. Then that verb and others are sent to the frontend
                        as the response.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default ResearchProblem