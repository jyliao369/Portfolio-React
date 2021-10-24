const Contactpage = () => {

    return (
        <div className="contactpage">
            <div className="contactsection">
                <h2>Contact Info</h2>
                <p>I love to hear your thoughts about me!!!</p>
                <br/>
                <br/>
                <div className="info">
                    <p>Email: jyliao369@gmail.com</p>
                    <p>Phone #: (111) 123-4567</p>
                    <p>Resume: </p>
                </div>
                <br/>
                <br/>
                <div className="sociallinks">
                    <a href="https://github.com/jyliao369">GitHub</a>
                    <a href="https://www.linkedin.com/in/justin-liao-64a75a17a/">LinkedIn</a>
                    <a href="">Twitter</a>
                    <a href="">Facebook</a>
                </div>
            </div>
            <div className="formsection">
                <h2>Leave a Message</h2>
                <form className="form">
                    <label />Name:
                    <input type="text" required />
                    <label />E-Mail:
                    <input type="text" required />
                    <label />Phone #:
                    <input type="text" required />
                    <label />Leave a Message:
                    <textarea type="text" required />
                </form>
            </div>
        </div>
    );
}

export default Contactpage;