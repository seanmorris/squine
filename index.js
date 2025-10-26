const pi = Math.PI;
const qpi = pi/4;

// not-entirely-even square wave approximation
const halfSquine = (x, b, c) => Math.cos( Math.abs(Math.sin(qpi + x*pi)) ** (1 + b) ) ** c;

export const squine = (x, r = 0) => {
	r = Math.min(1, Math.max(0, r));
	const b = 10 * (1 - r);
	const c = b ** 3 + 4;

	// Approximate an uneven square wave and average
	// it with its phase-shifted inverse
	// then normalize the maxima to 1.
	const i = halfSquine(-0.25 + x, b, c);
	const j = -halfSquine(0.25 + x, b, c);
	const s = -(1-halfSquine(0.25, b, c));

	return (i+j) / s * 0.5 + 0.5;
};
