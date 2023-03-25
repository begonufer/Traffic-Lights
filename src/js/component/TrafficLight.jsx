import React, { useState } from "react";

const TrafficLight = () => {
	const [color, setColor] = useState ("black");
	return (
		<>
			<div className="palo container bg-dark"></div>
			<div className="carcasa container bg-black p-3 bg-gradient">
				<div className="poste container d-grid gap-3 p-4 bg-dark bg-gradient">
					<div onClick={()=>setColor("danger")} className={"redpoint container bg-gradient mt-1 bg-"+((color === "danger") ? "danger" : "black")}></div>
					<div onClick={()=>setColor("warning")} className={"yellowpoint container bg-gradient bg-"+((color === "warning") ? "warning" : "black")}></div>
					<div onClick={()=>setColor("success")} className={"greenpoint container bg-gradient bg-"+((color === "success") ? "success" : "black")}></div>
				</div>
			</div>
		</>
	);
};

export default TrafficLight;
