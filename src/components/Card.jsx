import { useEffect, useState } from "react";

export default function Card({ suit, rank }) {
  const [imgSrc, setImgSrc] = useState(null);

  useEffect(() => {
    import(`../assets/cards/${rank}_of_${suit}.png`).then((module) => {
      setImgSrc(module.default);
    });
  }, []);

  //TODO: Swap out the style attribute for tailwind classes

  return (
    <div
      style={{
        width: "100px",
        height: "140px",
        margin: "10px",
        padding: "5px",
        border: "1px solid black",
        borderRadius: "5px",
      }}
    >
      <img src={imgSrc} alt={`${suit} of ${rank}`} />
    </div>
  );
}
