import React from "react";
import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ className, href, children, onClick, white, px }) => {
	const classes = `button ${className || ""} 
    relative inline-flex items-center justify-center 
    h-11 transition-colors hover:text-color-1 ${px || "px-7"} ${white ? "text-n-8" : "text-n-1"} `;

	const spanClasses = "relative z-10";

	const buttonRender = () => (
		// biome-ignore lint/a11y/useButtonType: <explanation>
		<button className={classes} onClick={onClick}>
			<span className={spanClasses}>{children}</span>
			{ButtonSvg(white)}
		</button>
	);
	const linkRender = () => (
		<a href={href} className={classes}>
			<span className={spanClasses}>{children}</span>
			{ButtonSvg(white)}
		</a>
	);
	return href ? linkRender() : buttonRender();
};

export default Button;
