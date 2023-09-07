import React from 'react'
import emailjs from 'emailjs-com';

type Props = {}

const HomePage = (props: Props) => {

  const cvUrl = 'https://www.canva.com/design/DAFmfC25NFc/KpVLh33EqykOB3IPFs2jCA/view?utm_content=DAFmfC25NFc&utm_campaign=share_your_design&utm_medium=link&utm_source=shareyourdesignpanel';

  const handleCVClick = () => {
    window.open(cvUrl, '_blank');
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and user ID
    const serviceID = 'service_enqwz5g';
    const templateID = 'template_uo5wmtr';
    const userID = '2ZDkcLHfPtIIlKu3V';

    // Replace with the actual email field values
    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const subject = e.target.elements.subject.value;
    const message = e.target.elements.message.value;

    // Send the email
    emailjs.send(serviceID, templateID, {
      from_name: name,
      from_email: email,
      subject: subject,
      message: message,
    }, userID)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        alert('Email sent successfully!');
        // Reset the form here if needed
        e.target.elements.name.value = ''
        e.target.elements.email.value = ''
        e.target.elements.subject.value = ''
        e.target.elements.message.value = ''
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
      });
  };


  return (
    <div>
      <div className="intro" id="home">
        <h1 className="animate">Audio Book System for Visually Impaired University Students</h1>
        <p>Learn More</p>
        {/* <button>Learn More</button> */}
      </div>
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
          </div>
        </div>
      </section>

      {/* <div className="container-fluid py-5" id="skill">
        <div className="container">
          <div className="position-relative d-flex align-items-center justify-content-center">
            <h1 className="display-1 text-uppercase text-white" style={{ WebkitTextStroke: "1px #dee2e6" }}>Skills</h1>
            <h1 className="position-absolute text-uppercase text-primary">My Skills</h1>
          </div>
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="skill mb-4">
                <div className="d-flex justify-content-between">
                  <h6 className="font-weight-bold">React Js</h6>
                  <h6 className="font-weight-bold">90%</h6>
                </div>
                <div className="progress">
                  <div className="progress-bar bg-primary" role="progressbar" style={{ width: `90%` }} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}></div>
                </div>
              </div>
              <div className="skill mb-4">
                <div className="d-flex justify-content-between">
                  <h6 className="font-weight-bold">Node Js | Express Js</h6>
                  <h6 className="font-weight-bold">90%</h6>
                </div>
                <div className="progress">
                  <div className="progress-bar bg-warning" role="progressbar" style={{ width: `90%` }} aria-valuenow={95} aria-valuemin={0} aria-valuemax={100}></div>
                </div>
              </div>
              <div className="skill mb-4">
                <div className="d-flex justify-content-between">
                  <h6 className="font-weight-bold">PHP</h6>
                  <h6 className="font-weight-bold">70%</h6>
                </div>
                <div className="progress">
                  <div className="progress-bar bg-danger" role="progressbar" style={{ width: `70%` }} aria-valuenow={70} aria-valuemin={0} aria-valuemax={100}></div>
                </div>
              </div>
              <div className="skill mb-4">
                <div className="d-flex justify-content-between">
                  <h6 className="font-weight-bold">SQL</h6>
                  <h6 className="font-weight-bold">75%</h6>
                </div>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" style={{ width: `75%`, backgroundColor: '#ba02ba' }} aria-valuenow={70} aria-valuemin={0} aria-valuemax={100}></div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="skill mb-4">
                <div className="d-flex justify-content-between">
                  <h6 className="font-weight-bold">Angular Js</h6>
                  <h6 className="font-weight-bold">85%</h6>
                </div>
                <div className="progress">
                  <div className="progress-bar bg-success" role="progressbar" style={{ width: `85%` }} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}></div>
                </div>
              </div>
              <div className="skill mb-4">
                <div className="d-flex justify-content-between">
                  <h6 className="font-weight-bold">Java | Spring Boot</h6>
                  <h6 className="font-weight-bold">75%</h6>
                </div>
                <div className="progress">
                  <div className="progress-bar bg-dark" role="progressbar" style={{ width: `75%` }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}></div>
                </div>
              </div>
              <div className="skill mb-4">
                <div className="d-flex justify-content-between">
                  <h6 className="font-weight-bold">HTML | CSS</h6>
                  <h6 className="font-weight-bold">95%</h6>
                </div>
                <div className="progress">
                  <div className="progress-bar bg-info" role="progressbar" style={{ width: `95%` }} aria-valuenow={65} aria-valuemin={0} aria-valuemax={100}></div>
                </div>
              </div>
              <div className="skill mb-4">
                <div className="d-flex justify-content-between">
                  <h6 className="font-weight-bold">Version Control (Git)</h6>
                  <h6 className="font-weight-bold">95%</h6>
                </div>
                <div className="progress">
                  <div className="progress-bar " role="progressbar" style={{ width: `95%`, backgroundColor: '#b06005' }} aria-valuenow={70} aria-valuemin={0} aria-valuemax={100}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className="container-fluid py-5" id="qualification">
        <div className="container">
          <div className="position-relative d-flex align-items-center justify-content-center mb-5">
            <h1 className="position-absolute text-uppercase text-primary">Literature Survey</h1>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h3 className="mb-4">My Education</h3>
              <div className="border-left border-primary pt-2 pl-4 ml-2">
                <div className="position-relative ex-me mb-4">
                  <i className="far fa-dot-circle text-primary position-absolute" style={{ top: '2px', left: '-35px', fontSize: '22px' }}></i>
                  <h5 className="font-weight-bold mb-1">Ordinary Level</h5>
                  <p className="mb-2">
                    <strong>St. Aloysius College</strong> | <small>2009 - 2015</small>
                  </p>
                  <p className='me-5'>
                    I am delighted to share with you my exceptional performance in the Ordinary Level exam at St. Aloysius, where I
                    achieved remarkable success with 6 A's and 3 B's. These outstanding grades reflect my dedication and
                    academic excellence.
                  </p>
                </div>
                <div className="position-relative ex-me mb-4">
                  <i className="far fa-dot-circle text-primary position-absolute" style={{ top: '2px', left: '-35px', fontSize: '22px' }}></i>
                  <h5 className="font-weight-bold mb-1">Advanced  Level</h5>
                  <p className="mb-2">
                    <strong>St. Aloysius College</strong> | <small>2016 - 2018</small>
                  </p>
                  <p className='me-5'>
                    I am pleased to share that I have successfully passed the AL exam at St. Aloysius, attaining three
                    commendable C grades. This achievement represents a significant milestone in my academic journey and reflects
                    my commitment to learning.
                  </p>
                </div>
                <div className="position-relative ex-me mb-4">
                  <i className="far fa-dot-circle text-primary position-absolute" style={{ top: '2px', left: '-35px', fontSize: '22px' }}></i>
                  <h5 className="font-weight-bold mb-1">B.Sc. in Software Engineering</h5>
                  <p className="mb-2">
                    <strong>SLIIT</strong> | <small>2020 - 2024</small>
                  </p>
                  <p className='me-5'>
                    I am currently enrolled in the B.Sc. Software Engineering program at SLIIT (Sri Lanka Institute of Information
                    Technology), where I am passionately studying to become a skilled and versatile software engineer.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 ">
              <h3 className="mb-4">My Experience</h3>
              <div className="border-left border-primary pt-2 pl-4 ml-2">
                <div className="position-relative ex-me mb-4">
                  <i className="far fa-dot-circle text-primary position-absolute" style={{ top: '2px', left: '-35px', fontSize: '22px' }}></i>
                  <h5 className="font-weight-bold mb-1">Member of Rotaract Club</h5>
                  <p className="mb-2">
                    <strong>SLIIT</strong> | <small>2020-2024</small>
                  </p>
                  <p>
                    Membership in the Rotaract club is a reflection of my commitment to service, social responsibility, and making a
                    positive difference in the world. It demonstrates my dedication to upholding the values of Rotary International.
                  </p>
                </div>
                <div className="position-relative ex-me mb-4">
                  <i className="far fa-dot-circle text-primary position-absolute" style={{ top: '2px', left: '-35px', fontSize: '22px' }}></i>
                  <h5 className="font-weight-bold mb-1">Member of IEEE</h5>
                  <p className="mb-2">
                    <strong>SLIIT</strong> | <small>2020-2024</small>
                  </p>
                  <p>
                    I am proud to be a member of the Institute of IEEE society, an esteemed
                    global community dedicated to advancing technology and innovation. As an IEEE member, I have the opportunity to
                    connect with like-minded professionals, access valuable resources.
                  </p>
                </div>
                <div className="position-relative ex-me mb-4">
                  <i className="far fa-dot-circle text-primary position-absolute" style={{ top: '2px', left: '-35px', fontSize: '22px' }}></i>
                  <h5 className="font-weight-bold mb-1">Associate Software Engineer</h5>
                  <p className="mb-2">
                    <strong>OLAK Technologies</strong> | <small>2022-Present</small>
                  </p>
                  <p>
                    As an Associate Software Engineer at OLAK Technologies since 2022, I am proud to be a part of a dynamic and
                    innovative organization. OLAK Technologies is a leading company
                    in the software industry, specializing in delivering solutions to clients worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <section id="contact">
        <h1 style={{ marginLeft: '8%' }}>Contact Us</h1>
        <div className="container mt-3 contactContent">
          <div className="row mt-4">
            <div className="col-lg-6">
              <div style={{ overflow: 'hidden', resize: 'none', maxWidth: '100%', width: '500px', height: '500px' }}>
                <div id="g-mapdisplay" style={{ height: '100%', width: '100%', maxWidth: '100%' }}>
                  <iframe
                    style={{ height: '100%', width: '100%', border: '0' }}
                    frameBorder="0"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3854.5101513425207!2d79.97036957483822!3d6.914682818494246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae256db1a6771c5%3A0x2c63e344ab9a7536!2sSri%20Lanka%20Institute%20of%20Information%20Technology!5e1!3m2!1sen!2slk!4v1694113968171!5m2!1sen!2slk"
                  ></iframe>
                </div>
                <a className="the-googlemap-enabler" href="https://www.bootstrapskins.com/themes" id="enable-maps-data">
                  premium bootstrap themes
                </a>
                <style>{`#g-mapdisplay img{max-width:none!important;background:none!important;font-size: inherit;font-weight:inherit;}`}</style>
              </div>

            </div>

            <div className="col-lg-6 d-flex align-items-center">
              <form className="w-100" onSubmit={handleSubmit}>
                If you have any questions or would like to contact us, please fill out the form below and We will get back to you as soon as possible.
                {/* Form fields */}<br /><br />
                <input type="text" className="form-control form-control" name="name" placeholder="Name" />
                <input type="email" className="form-control mt-3" name="email" placeholder="Email" />
                <input type="text" className="form-control mt-3" name="subject" placeholder="Subject" />
                <div className="mb-3 mt-3">
                  <textarea className="form-control" rows={5} id="comment" name="message" placeholder="Message"></textarea>
                </div>

                {/* Submit button */}
                <button type="submit" className="btn btn-success mt-3" style={{ width: '100%' }}>Send Mail</button>
              </form>
            </div>

          </div>
        </div>
      </section>


    </div>



  )
}

export default HomePage