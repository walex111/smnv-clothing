import React from "react";

import "./preview-collection.styles.scss";

import ItemCollection from "../item-collection/item-collection.component";

const PreviewCollection = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(({id, ...otherItemProps}) => (
          <ItemCollection key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);

export default PreviewCollection;
