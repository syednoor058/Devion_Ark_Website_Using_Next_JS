const AnimatedText = ({ text }) => {
  return (
    <div className="group relative overflow-hidden leading-none">
      <span className="inline-block transition duration-500 ease-out group-hover:-translate-y-full">
        {text}
      </span>
      <span className="inline-block transition absolute left-0 duration-500 ease-out translate-y-full group-hover:translate-y-0">
        {text}
      </span>
    </div>
  );
};

export default AnimatedText;
