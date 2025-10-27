const {min, max, sin, cos, abs, PI, log10} = Math;
const qpi = PI/4;

// not-entirely-symmetrical square wave approximation
const halfSquine = (x, b, c) => cos( abs(sin(qpi + x*PI)) ** (1 + b) ) ** c;

export const squine = (x, r = 0) => {
	r = min(1, max(0, 1-r))**3;
	const b = 10 * r;
	const c = b ** 3 + 4;

	// Calculate a halfSquine with its phase-shifted inverse,
	// Make it symmetrical by averaging them together,
	// Then normalize the maxima to 1 & minima to 0.
	const i = halfSquine(-0.25 + x, b, c);
	const j = -halfSquine(0.25 + x, b, c);
	const s = -(1-halfSquine(0.25, b, c));

	return (i+j) / s * 0.5 + 0.5;
};
