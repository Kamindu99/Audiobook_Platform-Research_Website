import React from 'react'

function Downloads() {

    const documents = [
        {
            name: 'Topic Assessment',
            submittionDate: '2021-09-30',
            grouporindi: 'Group',
            link: 'https://drive.google.com/file/d/1urjWRzhgeuHtBZIB_aEfzLovPBlVe5wS/view?usp=drive_link'
        },
        {
            name: 'Project Charter',
            submittionDate: '2021-09-30',
            grouporindi: 'Group',
            link: 'https://drive.google.com/file/d/17geeJ2gEBcOrQ3Ezhc_vc7T_azsPNinR/view?usp=drive_link'
        },
        {
            name: 'Project Proposal',
            submittionDate: '2021-09-30',
            grouporindi: 'Individual',
            link: 'https://drive.google.com/drive/folders/1_oPvJ2WUqvv_16Pj2wbcHzF0FN601jI1?usp=sharing'
        },
        {
            name: 'Status Documents I',
            submittionDate: '2021-09-30',
            grouporindi: 'Individual',
            link: 'https://drive.google.com/drive/folders/1BGQMWaePsVMdKHuRqSjv2g31uz8HBGMl?usp=sharing'
        },
        {
            name: 'Status Documents II',
            submittionDate: '2021-09-30',
            grouporindi: 'Individual',
            link: 'https://drive.google.com/drive/folders/1VpHeAeAIIUBx9VwNoVgL9RYAPrVncnEW?usp=sharing'
        },
        {
            name: 'Research Paper',
            submittionDate: '2021-09-30',
            grouporindi: 'Group',
            link: 'https://docs.google.com/document/d/1tvHzw61JovSf5BPkoqQ7ppySU85rT8Ik/edit?usp=drive_link&ouid=114316881715491376437&rtpof=true&sd=true'
        },
        {
            name: 'Final Report',
            submittionDate: '2021-09-30',
            grouporindi: 'Group',
            link: 'https://drive.google.com/drive/folders/1AI2k6TSvk35lO6Z4NonALyw_LmeYi6-F?usp=sharing'
        },
        {
            name: 'Poster',
            submittionDate: '2021-09-30',
            grouporindi: 'Group',
            link: 'https://drive.google.com/file/d/1iFsrJJh56oRoUk_qRIUWXV9sKbmv62uL/view?usp=drive_link'
        }
    ]

    const presentations = [
        {
            name: 'Project Proposal',
            submittionDate: '2021-09-30',
            grouporindi: 'Group',
            link: 'https://docs.google.com/presentation/d/122B_AIV5AiYKQcoMq2yPeBV899ng8yF5/edit?usp=drive_link&ouid=114316881715491376437&rtpof=true&sd=true'
        },
        {
            name: 'Progress Presentation I',
            submittionDate: '2021-09-30',
            grouporindi: 'Group',
            link: 'https://docs.google.com/presentation/d/117b3MfKpnxGTz-zuqbp7JoXKEHSHG-xt/edit?usp=drive_link&ouid=114316881715491376437&rtpof=true&sd=true'
        },
        {
            name: 'Progress Presentation II',
            submittionDate: '2021-09-30',
            grouporindi: 'Group',
            link: 'https://docs.google.com/presentation/d/19blZT76onzYAjEQHTKaGIK0UQKuVLjSb/edit?usp=drive_link&ouid=114316881715491376437&rtpof=true&sd=true'
        },
        {
            name: 'Final Presentation',
            submittionDate: '2021-09-30',
            grouporindi: 'Group',
            link: 'https://docs.google.com/presentation/d/12DrdT8513ul47QKItD7Pj7Vg3UuXE3JQ/edit?usp=drive_link&ouid=114316881715491376437&rtpof=true&sd=true'
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