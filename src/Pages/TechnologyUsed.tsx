import React from 'react'

function TechnologyUsed() {

    const technologies = [
        {
            name: 'Python',
            image: 'https://samitha-vidhanaarachchi.github.io/Research-Website/Images/tech/python.png'
        },
        {
            name: 'React',
            image: 'https://samitha-vidhanaarachchi.github.io/Research-Website/Images/tech/react.png'
        },
        {
            name: 'Tensorflow',
            image: 'https://samitha-vidhanaarachchi.github.io/Research-Website/Images/tech/tensorflow.png'
        },
        {
            name: 'JWT',
            image: 'https://samitha-vidhanaarachchi.github.io/Research-Website/Images/tech/jwt.png'
        },
        {
            name: 'React',
            image: 'https://samitha-vidhanaarachchi.github.io/Research-Website/Images/tech/react.png'
        },
        {
            name: 'React',
            image: 'https://samitha-vidhanaarachchi.github.io/Research-Website/Images/tech/react.png'
        },
        {
            name: 'Tensorflow',
            image: 'https://samitha-vidhanaarachchi.github.io/Research-Website/Images/tech/tensorflow.png'
        },
        {
            name: 'JWT',
            image: 'https://samitha-vidhanaarachchi.github.io/Research-Website/Images/tech/jwt.png'
        },
        {
            name: 'Python',
            image: 'https://samitha-vidhanaarachchi.github.io/Research-Website/Images/tech/python.png'
        },
        {
            name: 'React',
            image: 'https://samitha-vidhanaarachchi.github.io/Research-Website/Images/tech/react.png'
        },
        {
            name: 'React',
            image: 'https://samitha-vidhanaarachchi.github.io/Research-Website/Images/tech/react.png'
        },
        {
            name: 'React',
            image: 'https://samitha-vidhanaarachchi.github.io/Research-Website/Images/tech/react.png'
        },
    ]

    return (
        <section className='mt-5'>
            <h1 style={{ marginLeft: '8%' }}>Technologies Used</h1>

            <div className=" mt-5" style={{ marginLeft: '10%', marginRight: '10%' }}>
                <div className="row row-cols-md-12">
                    {technologies.map((technology) => (
                        <div className="col-xs-12 col-sm-2">
                            <div className="card d-flex flex-column h-100 mb-4" style={{ border: "0", marginLeft: '25%' }}>
                                <a className="img-card">
                                    <img src={technology?.image} alt='' style={{ padding: '30px', width: '100%', borderRadius: '50%', boxShadow: '1px 1px 10px 1px #D4D4D4' }} />
                                </a>
                                <div className="card-content">
                                    <h4 className="card-title mb-3 mt-3" style={{ fontSize: '16px' }}> {technology?.name}</h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}

export default TechnologyUsed