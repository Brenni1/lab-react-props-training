const Random = (props) => {
  return <h3 id="greetings">{Math.floor(Math.random() * (props.max - props.min + 1) + props.min)}</h3>;
};

export default Random;
