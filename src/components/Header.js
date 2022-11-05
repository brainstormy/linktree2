import React from 'react';

const Header = () => {
	return (
		<section>
			<div className="atooltip">
				<img src="../assets/share-icon.svg" alt="share icon" />
				<span className="tooltiptext">Share Link</span>
			</div>
			<div className="mobile-share">
				<img src="./assets/share-button.svg" alt="share icon" />
			</div>
		</section>
	);
};

export default Header;
