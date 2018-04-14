const FunctionalComponent = (props) => (
  <h3>{props.name}</h3>
);

FunctionalComponent.propTypes = {
  name: PropTypes.string.isRequired,
};
