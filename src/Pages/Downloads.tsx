import React from 'react'

function Downloads() {

    const documents = [
        {
            name: 'Topic Assessment',
            submittionDate: '2021-09-30',
            grouporindi: 'Group',
            link: 'https://drive.google.com/file/d/1ObuCrvXR3lcjzy4pl__sJSXniybjoRyi/view?usp=drive_link'
        },
        {
            name: 'Project Charter',
            submittionDate: '2021-09-30',
            grouporindi: 'Group',
            link: 'https://drive.google.com/file/d/1_htIDM3_VKFMnihcoO2NYKeLPlhkEUV5/view?usp=drive_link'
        },
        {
            name: 'Project Proposal',
            submittionDate: '2021-09-30',
            grouporindi: 'Individual',
            link: 'https://drive.google.com/drive/folders/13a1I8gtyxZJFrRnr00RN0GDTr-1za9IO?usp=sharing'
        },
        {
            name: 'Status Documents I',
            submittionDate: '2021-09-30',
            grouporindi: 'Individual',
            link: 'https://drive.google.com/drive/folders/1ZgFFzwgeocSz9fnA6YupxallIXoRkOH0?usp=sharing'
        },
        {
            name: 'Status Documents II',
            submittionDate: '2021-09-30',
            grouporindi: 'Individual',
            link: 'https://drive.google.com/drive/folders/1HpetsDgqWXS0gtXdCE1n50Pw6g6GCrmJ?usp=sharing'
        },
        {
            name: 'Research Paper',
            submittionDate: '2021-09-30',
            grouporindi: 'Group',
            link: 'https://docs.google.com/document/d/1u2Ev6a1kl5fOcmMq9ckj1Kpi_eZUgeZt/edit?usp=drive_link&ouid=103377744581256570865&rtpof=true&sd=true'
        },
        {
            name: 'Final Report',
            submittionDate: '2021-09-30',
            grouporindi: 'Group',
            link: 'https://drive.google.com/drive/folders/125NvnlJuNx-k4tu3_7mp3xNk-byDK8UT?usp=sharing'
        },
        {
            name: 'Poster',
            submittionDate: '2021-09-30',
            grouporindi: 'Group',
            link: 'https://drive.google.com/file/d/1wUpyDW7Tiu6D-qUpBkIF9GMP2BAu3InH/view?usp=drive_link'
        }
    ]

    const presentations = [
        {
            name: 'Project Proposal',
            submittionDate: '2021-09-30',
            grouporindi: 'Group',
            link: 'https://drive.google.com/file/d/1EKhiJ7y6YhSr3JQ9ff8lK-ERNVb4MIF2/view?usp=drive_link'
        },
        {
            name: 'Progress Presentation I',
            submittionDate: '2021-09-30',
            grouporindi: 'Group',
            link: 'https://docs.google.com/presentation/d/1LAP-b_1J9yQVUmNLksd6wwbesy6QMWfF/edit?usp=drive_link&ouid=103377744581256570865&rtpof=true&sd=true'
        },
        {
            name: 'Progress Presentation II',
            submittionDate: '2021-09-30',
            grouporindi: 'Group',
            link: 'https://docs.google.com/presentation/d/1s9u8_vMEfbCZjTUJkts03SmG0HTnUB2v/edit?usp=drive_link&ouid=103377744581256570865&rtpof=true&sd=true'
        },
        {
            name: 'Final Presentation',
            submittionDate: '2021-09-30',
            grouporindi: 'Group',
            link: 'https://docs.google.com/presentation/d/17qzx41Pf4emIEr3OneN903YmDcP1WS5r/edit?usp=drive_link&ouid=103377744581256570865&rtpof=true&sd=true'
        }
    ]

    return (
        <section className='mt-5 meetteam' style={{ backgroundColor: '#faefe6', padding: '30px' }} id='Documents'>
            <h1 style={{ marginLeft: '8%' }} className='mb-5'>Downloads</h1>

            <h4 style={{ marginLeft: '10%' }}>Documents</h4>
            <p style={{ marginLeft: '10%' }}>Please find all documents related to this project below.</p>
            <div className=" mt-4" style={{ marginInlineStart: '14%', marginInlineEnd: '14%' }}>
                <div className="row">
                    {documents.map((document) => (
                        <div className="col-xs-12 col-sm-3 mb-5">
                            <div className="card carddowndolad d-flex flex-column h-100">
                                <div className="card-content" style={{ height: '150px' }}>
                                    <h5 className=" mb-3"> <i className="fas fa-file-alt me-2 docicon"></i> {document?.name}</h5>
                                    <p style={{ fontSize: '14px', color: "gray" }}>
                                        Submitted on {document?.submittionDate}
                                    </p>

                                </div>
                                <div className="card-read-more">
                                    <p style={{ fontSize: '15px', color: 'black', textDecoration: 'none', fontWeight: '500' }} className="btn btn-link btn-block ms-2">
                                        {document?.grouporindi}
                                    </p>
                                    <p style={{ fontSize: '15px', color: 'green', float: 'right', textDecoration: 'none' }} className="btn btn-link btn-block" onClick={() => { window.open(`${document?.link}`) }}>
                                        <i className="fas fa-download me-1"></i> Download
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <h4 style={{ marginLeft: '10%' }} id='Presentations'>Presentations</h4>
            <p style={{ marginLeft: '10%' }}>Please find all presentations related this project below.</p>
            <div className=" mt-4" style={{ marginInlineStart: '14%', marginInlineEnd: '14%' }}>
                <div className="row">
                    {presentations.map((presentation) => (
                        <div className="col-xs-12 col-sm-3 mb-5">
                            <div className="card carddowndolad d-flex flex-column h-100">
                                <div className="card-content" style={{ height: '150px' }}>
                                    <h5 className=" mb-3"> <i className="fas fa-file-alt me-2 docicon"></i> {presentation?.name}</h5>
                                    <p style={{ fontSize: '14px', color: "gray" }}>
                                        Submitted on {presentation?.submittionDate}
                                    </p>

                                </div>
                                <div className="card-read-more">
                                    <p style={{ fontSize: '15px', color: 'black', textDecoration: 'none', fontWeight: '500' }} className="btn btn-link btn-block ms-2">
                                        {presentation?.grouporindi}
                                    </p>
                                    <p style={{ fontSize: '15px', color: 'green', float: 'right', textDecoration: 'none' }} className="btn btn-link btn-block" onClick={() => { window.open(`${presentation?.link}`) }}>
                                        <i className="fas fa-download me-1"></i> Download
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Downloads