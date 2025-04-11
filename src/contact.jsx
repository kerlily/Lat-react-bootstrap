function Contact() {
    return (
      <>
        <div className="container mt-5 mb-5">
          <div className=" mb-4">
            <h2>Contact Us</h2>
            <p className="text-muted">Silahkan contact kami bila perlu.</p>
          </div>
  
          <div className="row">
            {/*Kontak orangya*/}
            <div className="col-md-6">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Your name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" id="message" rows="4" placeholder="Type your message here..."></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
  
            {/* Info Kontak */}
            <div className="col-md-6">  
              <div className="ps-md-4 mt-4 mt-md-0">
                <h5>Our Office</h5>
                <p>Jl. jalan ke<br />Kota Samarinda, cakep<br />Indonesia</p>
                <p><strong>Phone:</strong> +62 163 456 789 <br /><strong>Email:</strong> nasimegono@eank.com</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Contact;
  