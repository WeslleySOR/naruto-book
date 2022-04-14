import { globalCss } from "@stitches/react";

export const globalStyles = globalCss({
	"*": {
		margin: 0,
		padding: 0,
		boxSizing: "border-box",
	},
	":root": {
		fontSize: "62.5%" /* (62.5/100) * 16px = 10px */,
		"--font-size--smallx": "1rem" /* 10px */,
		"--font-size--small": "1.4rem" /* 14px */,
		"--font-size--default": "1.6rem" /* 16px */,
		"--font-size--medium": "2rem" /* 16px */,
		"--font-size--large": "2.4rem" /* 24px */,
	},
	body: {
		background: "#f2f2f2",
		"&::-webkit-scrollbar-track": {
			WebkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.3)",
			borderRadius: "10px",
			backgroundColor: "rgba(255,255,255,1)",
		},
		"&::-webkit-scrollbar": {
			width: "6px",
			backgroundColor: "#f5f5f5",
		},
		"&::-webkit-scrollbar-thumb": {
			borderRadius: "10px",
			WebkitBoxShadow: "inset 0 0 6px rgba(0,0,0,.3)",
			backgroundColor: "rgba(12,12,12,1)",
		},
	},
	".react-modal-overlay": {
		background: "rgba(0,0,0,0.5)",
		position: "fixed",
		top: "0",
		bottom: "0",
		right: "0",
		left: "0",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	".react-modal-content": {
		width: "100%",
		maxWidth: "576px",
		background: "rgba(26,26,26, 1)",
		padding: "3rem",
		position: "relative",
		borderRadius: "0.25rem",
	},
	".react-modal-close": {
		cursor: "pointer",
		position: "absolute",
		right: "1.5rem",
		top: "1.5rem",
		border: "0",
		background: "transparent",
		transition: "filter 0.2s",
		"&:hover": {
			filter: "brightness(0.8)",
		},
	},
	// '@keyframes example': {
	//   '0%': {
	//     color: 'red'
	//   },
	//   '25%': {
	//     color: 'blue'
	//   },
	//   '50%': {
	//     color: 'yellow'
	//   },
	//   '100%': {
	//     color: 'green'
	//   }
	// }
});
