import React from 'react'

function MeetOurTeam() {
    const ourTeamPanl = [
        {
            name: 'Mr. Thusithanjana Thilakarthna',
            position: 'Supervisor',
            image: 'https://static.sliit.lk/profile/thusithanjanat-1622696535.jpg',
            department: 'Computer Science & Software Engineering'
        },
        {
            name: 'Mr. Sathira Hettiarachchi',
            position: 'Co_Supervisor',
            image: 'https://static.sliit.lk/profile/sathirah-1679885067.jpg',
            department: 'Computer Systems Engineering (CSE)'
        }
    ]

    const ourTeamMem = [
        {
            name: 'Senadeera S.A.V.J.',
            position: 'Group Leader',
            image: 'https://media.licdn.com/dms/image/C4D03AQHTlOHM8NKOaw/profile-displayphoto-shrink_800_800/0/1614565203783?e=2147483647&v=beta&t=gIx0Wm1wtz__kINjI3Nu_kW8t__VP74qBmH4pdEIGAE',
            department: 'Computer Science & Software Engineering'
        },
        {
            name: 'Nethmini G.A.H.A.',
            position: 'Group Member',
            image: 'https://media.licdn.com/dms/image/C5603AQHcb0zJv_-MBg/profile-displayphoto-shrink_800_800/0/1657124009878?e=2147483647&v=beta&t=a-JkWMuof1qHaz7bX8F-sq_RKMK8_beStYSHcV1XNwU',
            department: 'Computer Science & Software Engineering'
        },
        {
            name: 'Perera G.U.L.K.',
            position: 'Group Member',
            image: 'https://media.licdn.com/dms/image/D5603AQFZaeGB6WnZ5w/profile-displayphoto-shrink_800_800/0/1691774591286?e=2147483647&v=beta&t=UDWkrMASU-oHxFBBODpx8LnG7AQqzJZ6vMqgbG3pVeg',
            department: 'Computer Science & Software Engineering'
        },
        {
            name: 'Wanigasinghe W.W.L.K.G.',
            position: 'Group Member',
            image: 'https://media.licdn.com/dms/image/C5603AQGnBMwskpBqvw/profile-displayphoto-shrink_800_800/0/1656409186148?e=2147483647&v=beta&t=1JY6ZWlcPp7IySxX-_I6ECkodmTMZFKR4WA1K5nl75A',
            department: 'Computer Science & Software Engineering'
        }
    ]

    return (
        <section className='mt-5 meetteam' id='aboutus'>
            <h1 style={{ marginLeft: '8%' }}>Meet Our Team !</h1>
            <div className="container mt-5">
                <div className="row">
                    {ourTeamPanl.map((ourTeamm) => (
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
                                    <a href="/" style={{ fontSize: '14px', color: 'green' }} className="btn btn-link btn-block ms-2">
                                        <i className="fab fa-google me-1"></i> G-Scholar
                                    </a>
                                    <a href="/" style={{ fontSize: '14px', color: 'green' }} className="btn btn-link btn-block">
                                        <i className="fas fa-envelope-open-text me-1"></i> E-Mail
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="row mt-5">
                    {ourTeamMem.map((ourTeamm) => (
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
                                    <a href="/" style={{ fontSize: '14px', color: 'green' }} className="btn btn-link btn-block ms-2">
                                        <i className="fab fa-google me-1"></i> G-Scholar
                                    </a>
                                    <a href="/" style={{ fontSize: '14px', color: 'green' }} className="btn btn-link btn-block">
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