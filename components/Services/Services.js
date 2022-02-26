const Services = (props) => {
  return (
    <section className="services-section">
      <p>SERVICES</p>
      <p>I’m always in learning...</p>
      <ul>
        {props.data.map((service) => {
          return <li key={service.id}>{service.title}</li>;
        })}
      </ul>
    </section>
  );
};

export default Services;
