import React from "react";
import useTilt from "./function";

function Slide({ slide, offset }) {
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);

  return (
    <div
      ref={ref}
      className="slide"
      data-active={active}
      style={{
        "--offset": offset,
        "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1,
      }}
    >
      <div
        className="slideBackground"
        style={{
          backgroundImage: `url('${slide.image}')`,
        }}
      />
      <div
        className="slideContent"
        style={{
          backgroundImage: `url('${slide.image}')`,
        }}
      >
        <div className="slideContentInner text-white">
          <h4 className="h4-responsive slideTitle">{slide.title}</h4>
          <h4 className="h4-responsive slideSubtitle">{slide.subtitle}</h4>
          <p className="slideDescription">{slide.description}</p>
        </div>
      </div>
    </div>
  );
}
export default Slide;
