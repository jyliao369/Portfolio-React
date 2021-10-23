const Contactpage = () => {

    return (
        <div className="contactpage">
            <div className="contactsection">
                <h2>Contact Info</h2>
                <p>GitHub: </p>
                <p>LinkedIn: </p>
                <p>Email: </p>
                <p>Phone #: </p>
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
                    <label />What's up?:
                    <textarea type="text" required />
                </form>
            </div>
        </div>
    );
}

export default Contactpage;