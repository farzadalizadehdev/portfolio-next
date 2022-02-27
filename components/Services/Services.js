const Services = (props) => {
  return (
    <section className="services-section">
      <div className="container max-w-screen-xl px-4 mx-auto">
        <p>SERVICES</p>
        <p>I’m always in learning...</p>
        <ul>
          {props.data.map((service) => {
            return <li key={service.id}>{service.title}</li>;
          })}
        </ul>
      </div>
    </section>
  );
};

export default Services;
