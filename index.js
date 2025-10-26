export const squine = (x, r = 0) => {
	r = Math.min(1, Math.max(0, r));
	const b = 10 * (1 - r);
	const c = b ** 3 + 4;

	// Approximate an uneven square wave and average
	// it with its phase-shifted inverse
	const i = Math.cos( Math.abs(Math.sin(  x * Math.PI + (Math.PI / 2)  )) ** (1 + b) ) ** c;
	const j = 1 + -( Math.cos( Math.abs(Math.sin(  x * Math.PI  )) ** (1 + b) ) ** c);

	// Take the value at the turning point so we
	// can scale the wave back to [0, 1]
	const s = Math.cos( Math.sin(  0.5 * Math.PI + (Math.PI / 2)  ) ** (1 + b) ) ** c;
	const t = 1 + -( Math.cos( Math.sin(  0.5 * Math.PI  ) ** (1 + b) ) ** c);
	const u = (s + t) * 0.5;

	return (i + j) * 0.5 / u;
}
