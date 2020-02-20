import React from "react";
import "./DataViewer.css";
const DataViewComponent = props => {
  return (
    <div>
      {props.list.length > 0 ? (
        <ul className="list">
          {props.list.map(({data}, index) => (
            <li className="list_item" key={index}>
              {data}
            </li>
          ))}
        </ul>
      ) : (
        <div className="message">"No Match Found"</div>
      )}
    </div>
  );
};
export default DataViewComponent;
