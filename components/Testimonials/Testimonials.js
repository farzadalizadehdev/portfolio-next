const Testimonials = (props) => {
  return (
    <section className="testimonials-section">
      <p>TESTIMONIALS</p>
      <p>I’m always in learning...</p>
      <ul>
        {props.data.map((comment) => {
          return <li key={comment.id}>
            <h1>{comment.title}</h1>
            <p>{comment.comment}</p>
          </li>;
        })}
      </ul>
    </section>
  );
};

export default Testimonials;
