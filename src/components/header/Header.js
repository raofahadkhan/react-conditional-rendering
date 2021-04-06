import React from "react";
import PropTypes from "prop-types";
import "./Header.css";

const Header = ({ changePageName, currentPage }) => {
	const pages = ["Home", "About", "News", "Contact"];
	return (
		<div>
			<header className="Header-container">
				<div className="Header-logo">Fahad Khan</div>

				<ul className="Header-container-ul">
					{pages.map((page, index) => (
						<li
							key={index}
							onClick={() => changePageName(page)}
							className={currentPage === page ? "Header-li-active" : ""}
						>
							{page}
						</li>
					))}
				</ul>
			</header>
		</div>
	);
};

Header.propTypes = {
	changePageName: PropTypes.func.isRequired,
	currentPage: PropTypes.string.isRequired,
};

export default Header;
