function TextAnimation({ text, hoverText = "" }) {
  return (
    <div className="group relative overflow-hidden leading-none mt-1">
      <div className="overflow-hidden">
        {text.split("").map((l, i) =>
          l === " " ? (
            <span key={i}>&nbsp;</span>
          ) : (
            <span key={i} className="inline-block relative overflow-hidden">
              <span
                className="inline-block transition duration-[250ms] ease-in-out group-hover:-translate-y-[110%] "
                style={{ transitionDelay: `${i * 10}ms` }}
              >
                {l}
              </span>
              <span
                className={`absolute top-0 left-0 inline-block transition duration-[250ms] ease-in-out translate-y-[110%] group-hover:translate-y-0 ${hoverText}`}
                style={{ transitionDelay: `${i * 10}ms` }}
              >
                {l}
              </span>
            </span>
          )
        )}
      </div>
    </div>
  );
}

export default TextAnimation;
