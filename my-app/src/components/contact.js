export default function Contact() {
  return (
    <div>
      <h2>Contact Me</h2>
      <form>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Your name"
            required
          ></input>{" "}
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Your email"
            required
          ></input>{" "}
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea
            rows="3"
            className="form-control"
            id="textarea"
            placeholder="Add your message"
            required
          ></textarea>{" "}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
