import React from "react";
import "../css/head.css";

const Head = () => {
	return (
		<div className="head">
			<div className="nav">
				<div className="menu">📊</div>
				<div className="settings">⚙️</div>
			</div>
			<div className="title">
				Wor<span>dle</span>
			</div>
		</div>
	);
};

export default Head;
