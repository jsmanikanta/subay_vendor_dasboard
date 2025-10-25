import React from "react";

function Sidebar({
  showAddFirmHandler
}) {
  return (
    <div className="sideBarSection">
      <ul>
        <li onClick={showAddFirmHandler}>Add Resturant</li>
      </ul>
    </div>
  );
}

export default Sidebar;
