import React from 'react'

function LiteratureSurvey() {
    return (
        <section className='mt-5'>
            <h1 style={{ marginLeft: '8%' }}>Literature Survey</h1>
            <div className="container-fluid py-5" id="about">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7 pb-4 pb-lg-0">
                            <img className="img-fluid rounded " style={{ height: '500px', marginLeft: '2%' }} src="https://samitha-vidhanaarachchi.github.io/Research-Website/Images/lit/stat.jpg" alt="" />
                        </div>
                        <div className="col-lg-5">
                            <p style={{ textAlign: 'justify' }} className='me-5'>
                                Recent advances in deep neural networks have greatly improved speech recognition,
                                but challenges persist for low-resource languages like Sinhala. ListenEd addresses
                                Sinhala voice recognition issues through a combined approach, bridging accessibility
                                gaps for the visually impaired in Sri Lanka.
                                <br /><br />
                                Some research has focused on Sinhala voice recognition, particularly for recognizing Sinhala
                                digits and song names using Hidden Markov Models. However, due to a small dataset, this platform
                                has accuracy limitations, mainly handling numeric and date/time queries. In contrast, ListenEd
                                offers more accurate recognition for complex vocabulary.
                                <br /><br />
                                The Kaldi toolkit is a well-known open-source platform for voice recognition, but it requires
                                substantial expertise and data curation for low-resource languages. ListenEd aims to provide faster
                                and more accessible Sinhala voice recognition.
                                <br /><br />
                                <span style={{ fontSize: '10px' }}>References
                                    <br />
                                    [1] Nassif, I. Shahin, I. Attili, M. Azzeh and K. Shaalan, "Speech Recognition Using Deep Neural Networks: A Systematic Review," in IEEE Access, vol. 7, pp. 19143-19165, 2019, doi: 10.1109/ACCESS.2019.2896880.
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LiteratureSurvey