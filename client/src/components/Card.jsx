import { useEffect, useState } from "react";

export default function Card({ suit, rank }) {
const [imgSrc, setImgSrc] = useState(null);

useEffect(() => {
import(`../assets/cards/${rank}_of_${suit}.png`).then((module) => {
setImgSrc(module.default);
});
}, [rank, suit]);

return (
<div className="w-24 h-36 m-2 p-1 border border-black rounded">
<img src={imgSrc} alt={`${suit} of ${rank}`} />
</div>
);
}

import PropTypes from 'prop-types';

Card.propTypes = {
suit: PropTypes.string.isRequired,
rank: PropTypes.string.isRequired
};
