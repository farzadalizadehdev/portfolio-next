const Testimonials = (props) => {
  return (
    <section className="testimonials-section">
      <div className="container max-w-screen-xl px-4 mx-auto">
        <p>TESTIMONIALS</p>
        <p>I’m always in learning...</p>
        <ul>
          {props.data.map((comment) => {
            return (
              <li key={comment.id}>
                <h1>{comment.title}</h1>
                <p>{comment.comment}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Testimonials;
