import { styled } from "@stitches/react";
import Modal from "react-modal";

export const Container = styled(Modal, {
	"@media (max-width: 768px)": {
		width: "80%",
	},
	"@media (max-width: 425px)": {
		width: "80%",
	},
});

export const Content = styled("form", {
	h2: {
		color: "#fff",
		fontSize: "2.4rem",
		marginBottom: "2rem",
	},
	label: {
		color: "#fff",
		fontSize: "var(--font-size--medium)",
		fontWeight: "300",
		marginTop: "1rem",
	},
	input: {
		width: "100%",
		padding: "0 1.5rem",
		height: "4rem",
		borderRadius: "0.25rem",

		border: "1px solid #D7D7D7",
		background: "#E7E9EE",

		fontWeight: "400",
		fontSize: "1.6rem",

		"&::placeholder": {
			color: "rgba(12,12,12,0.4)",
		},

		"& + input": {
			marginTop: "1rem",
		},
	},
	select: {
		width: "100%",
		padding: "0 1.5rem",
		height: "4rem",
		borderRadius: "0.25rem",
		marginTop: "0.5rem",
		border: "1px solid #D7D7D7",
		background: "#E7E9EE",
		fontWeight: "400",
		fontSize: "1.6rem",
		"&::placeholder": {
			color: "#121212",
		},
	},
	'button[type="submit"]': {
		width: "100%",
		padding: "0 1.5rem",
		height: "4rem",
		background: "green",
		color: "#FFF",
		borderRadius: "0.25rem",
		border: "0",
		fontSize: "1.6rem",
		fontWeight: "600",
		marginTop: "1.25rem",

		transition: "filter 0.2s",

		"&:hover": {
			filter: "brightness(0.9)",
		},
	},
	"@media (max-width: 768px)": {
		h2: {
			marginBottom: "1rem",
		},
		label: {
			fontSize: "var(--font-size--small)",
		},
		input: {
			padding: "0 1rem",
			height: "3rem",
			fontSize: "var(--font-size--small)",
		},
		select: {
			padding: "0 1rem",
			height: "3rem",
			fontSize: "var(--font-size--small)",
		},
		"select, input": {
			marginBottom: "0.5rem",
		},
		'button[type="submit"]': {
			padding: "0 1rem",
			height: "4rem",
			fontSize: "var(--font-size--small)",
		},
	},
	"@media (max-width: 425px)": {
		h2: {
			fontSize: "var(--font-size--medium)",
			marginBottom: "0.5rem",
		},
		label: {
			fontSize: "var(--font-size--smallx)",
		},
		input: {
			padding: "0 0.5rem",
			height: "2rem",
			fontSize: "var(--font-size--smallx)",
		},
		select: {
			padding: "0 0.5rem",
			height: "2rem",
			fontSize: "var(--font-size--smallx)",
		},
		'button[type="submit"]': {
			padding: "0 0.5rem",
			height: "3rem",
			fontSize: "var(--font-size--smallx)",
		},
	},
});
