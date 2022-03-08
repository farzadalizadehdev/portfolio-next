const ProjectDetailItem = (props) => {
  return (
    <li className="flex items-center mb-4">
      {props.icon}
      <div className="text-sm text-slate-600">
        <p className="inline font-light">{props.detail.text}:</p>
        <p className="inline mx-1">{props.detail.value}</p>
      </div>
    </li>
  );
};

export default ProjectDetailItem;
