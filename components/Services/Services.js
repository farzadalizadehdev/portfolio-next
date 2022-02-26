const Services = (props) => {
  return (
    <ul>
      {props.data.map((service) => {
        return (
          <li key={service.id}>
            <p>{service.title}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Services;
