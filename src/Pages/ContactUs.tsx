import React from 'react'
import emailjs from 'emailjs-com';

function ContactUs() {
    const handleSubmit = (e: any) => {
        e.preventDefault();

        // EmailJS service ID, template ID, and user ID
        const serviceID = 'service_enqwz5g';
        const templateID = 'template_uo5wmtr';
        const userID = '2ZDkcLHfPtIIlKu3V';

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
                // Reset the form
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
        <section id="ContactUs" className='mt-5'>
            <h1 style={{ marginLeft: '8%' }}>Contact Us</h1>
            <div className="container mt-5 contactContent">
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
    )
}

export default ContactUs