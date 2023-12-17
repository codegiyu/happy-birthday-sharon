

const PrimaryButton = ({
  type = "button",
  fullWidth = false,
  clickHandler,
  text,
  styles = {},
  textStyles = {},
  ...props
}) => {
  return (
    <button
      type={type}
      className={`primary-btn ${fullWidth ? "w-full" : "w-fit"}`}
      onClick={clickHandler}
      style={styles}
      {...props}
    >
      <span className="w-max" style={textStyles}>
        {text}
      </span>
    </button>
  );
};

export default PrimaryButton;
