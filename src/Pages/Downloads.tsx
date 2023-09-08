import React from 'react'

function Downloads() {

    const documents = [
        {
            name: 'Topic Assessment',
            submittionDate: '2021-09-30',
            grouporindi: 'Group'
        },
        {
            name: 'Project Charter',
            submittionDate: '2021-09-30',
            grouporindi: 'Group'
        },
        {
            name: 'Project Proposal',
            submittionDate: '2021-09-30',
            grouporindi: 'Individual'
        },
        {
            name: 'Status Documents I',
            submittionDate: '2021-09-30',
            grouporindi: 'Individual'
        },
        {
            name: 'Status Documents II',
            submittionDate: '2021-09-30',
            grouporindi: 'Individual'
        },
        {
            name: 'Research Paper',
            submittionDate: '2021-09-30',
            grouporindi: 'Group'
        },
        {
            name: 'Final Report',
            submittionDate: '2021-09-30',
            grouporindi: 'Group'
        },
        {
            name: 'Poster',
            submittionDate: '2021-09-30',
            grouporindi: 'Group'
        }
    ]

    const presentations = [
        {
            name: 'Project Proposal',
            submittionDate: '2021-09-30',
            grouporindi: 'Group'
        },
        {
            name: 'Progress Presentation I',
            submittionDate: '2021-09-30',
            grouporindi: 'Group'
        },
        {
            name: 'Progress Presentation II',
            submittionDate: '2021-09-30',
            grouporindi: 'Group'
        },
        {
            name: 'Final Presentation',
            submittionDate: '2021-09-30',
            grouporindi: 'Group'
        }
    ]

    return (
        <section className='mt-5 meetteam' style={{ backgroundColor: '#faefe6', padding: '30px' }}>
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
                                    <p style={{ fontSize: '15px', color: 'green', float: 'right', textDecoration: 'none' }} className="btn btn-link btn-block">
                                        <i className="fas fa-download me-1"></i> Download
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <h4 style={{ marginLeft: '10%' }}>Presentations</h4>
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
                                    <p style={{ fontSize: '15px', color: 'green', float: 'right', textDecoration: 'none' }} className="btn btn-link btn-block">
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