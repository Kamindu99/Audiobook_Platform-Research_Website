import React from 'react'

function Methodology() {
    return (
        <section className='mt-5' id="milestones">
            <h1 style={{ marginLeft: '8%' }}>Methodology</h1>
            <div className="container-fluid py-5" id="about">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pb-4 pb-lg-0">
                            <img className="img-fluid rounded " style={{ height: '500px', marginLeft: '18%' }} src="https://samitha-vidhanaarachchi.github.io/Research-Website/Images/other/architecture.jpg" alt="" />
                        </div>
                        <div className="col-lg-5">
                            <p style={{ textAlign: 'justify' }} className='me-5'>
                                The proposed pest and disease Surveillance system consists of 4 main components. They are;
                                <br /><br /><ol style={{ fontWeight: '600', marginLeft: '5%' }}>
                                    <li>WCLWD and its symptom severity identification</li>
                                    <li>CCI Identification and progression level determination</li>
                                    <li>Deficiency Identification (Mg deficiency and Leaf Scorch Decline)</li>
                                    <li>Water resource identification</li>
                                    <li>Crowdsourcing for information sharing</li>
                                </ol>
                                Some research has focused on Sinhala voice recognition, particularly for recognizing Sinhala
                                digits and song names using Hidden Markov Models. However, due to a small dataset, this platform
                                has accuracy limitations, mainly handling numeric and date/time queries. In contrast, ListenEd
                                offers more accurate recognition for complex vocabulary.
                                <br /><br />
                                The Kaldi toolkit is a well-known open-source platform for voice recognition, but it requires
                                substantial expertise and data curation for low-resource languages. ListenEd aims to provide faster
                                and more accessible Sinhala voice recognition.
                                <br /><br />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Methodology