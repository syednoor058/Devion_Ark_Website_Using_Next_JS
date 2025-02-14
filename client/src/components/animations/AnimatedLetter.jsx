const AnimatedLetter = ({ text, hoverText = "" }) => {
  return (
    <div className="group relative overflow-hidden leading-none mt-1">
      <div className="overflow-hidden">
        {text.split("").map((l, i) =>
          l === " " ? (
            <span>&nbsp;</span>
          ) : (
            <span
              className="inline-block transition duration-[250ms] ease-in-out group-hover:-translate-y-full overflow-hidden"
              key={i}
              style={{ transitionDelay: `${i * 25}ms` }}
            >
              {l}
            </span>
          )
        )}
      </div>
      <div className={`absolute inset-0 overflow-hidden ${hoverText}`}>
        {text.split("").map((l, i) =>
          l === " " ? (
            <span>&nbsp;</span>
          ) : (
            <span
              className={`inline-block transition duration-[250ms] ease-in-out translate-y-[110%] group-hover:translate-y-0 overflow-hidden`}
              key={i}
              style={{ transitionDelay: `${i * 25}ms` }}
            >
              {l}
            </span>
          )
        )}
      </div>
    </div>
  );
};

export default AnimatedLetter;
