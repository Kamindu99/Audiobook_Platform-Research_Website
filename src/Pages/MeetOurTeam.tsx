import React from 'react'

function MeetOurTeam() {
    const ourTeam = [
        {
            name: 'Mr. Thusithanjana Thilakarthna',
            position: 'Supervisor',
            image: 'https://static.sliit.lk/profile/thusithanjanat-1622696535.jpg',
            department: 'Computer science & Software Engineering'
        },
        {
            name: 'Mr. Sathira Hettiarachchi',
            position: 'Co_Supervisor',
            image: 'https://static.sliit.lk/profile/sathirah-1679885067.jpg',
            department: 'Computer Systems Engineering'
        }
    ]

    return (
        <section className='mt-5 meetteam'>
            <h1 style={{ marginLeft: '8%' }}>Meet Our Team !</h1>
            <div className="container mt-5">
                <div className="row">
                    {ourTeam.map((ourTeamm) => (
                        <div className="col-xs-12 col-sm-3">
                            <div className="card d-flex flex-column h-100">
                                <a className="img-card">
                                    <img src={ourTeamm?.image} alt='' />
                                </a>
                                <div className="card-content">
                                    <h4 className="card-title mb-3"> {ourTeamm?.name}</h4>
                                    <img className='mb-2' src={`https://img.shields.io/badge/-${ourTeamm?.position}-807e7e`} />
                                    <p style={{ fontSize: '14px' }}>
                                        Sri Lanka Institute of Information Technology
                                    </p>
                                    <p style={{ fontSize: '14px' }}>
                                        <span style={{ fontWeight: '700' }}>Department</span>
                                        <br />
                                        {ourTeamm?.department}
                                    </p>
                                </div>
                                <div className="card-read-more">
                                    <a href="http://www.fostrap.com/2016/03/bootstrap-3-carousel-fade-effect.html" style={{ fontSize: '14px', color: 'green' }} className="btn btn-link btn-block ms-2">
                                        <i className="fab fa-google me-1"></i> G-Scholar
                                    </a>
                                    <a href="http://www.fostrap.com/2016/03/bootstrap-3-carousel-fade-effect.html" style={{ fontSize: '14px', color: 'green' }} className="btn btn-link btn-block">
                                        <i className="fas fa-envelope-open-text me-1"></i> E-Mail
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default MeetOurTeam