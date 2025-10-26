const {min, max, sin, cos, abs, PI} = Math;
const qpi = PI/4;

// not-entirely-even square wave approximation
const halfSquine = (x, b, c) => cos( abs(sin(qpi + x*PI)) ** (1 + b) ) ** c;

export const squine = (x, r = 0) => {
	r = min(1, max(0, r));
	const b = 10 * (1 - r);
	const c = b ** 3 + 4;

	// Approximate an uneven square wave,
	// /average it with its phase-shifted inverse,
	// then normalize the maxima to 1.
	const i = halfSquine(-0.25 + x, b, c);
	const j = -halfSquine(0.25 + x, b, c);
	const s = -(1-halfSquine(0.25, b, c));

	return (i+j) / s * 0.5 + 0.5;
};
