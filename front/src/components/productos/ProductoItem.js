import React from 'react';
const ProductoItem = (props) => {
    const { title, subtitle, imagen, body } = props;
    return (
        <div className="producto">
            <img src={imagen} />
            <div className="info">
                <h4>{title}</h4>
                <div className="cuerpo" dangerouslySetInnerHTML={{ __html: body }} />
            </div>
            <hr />
        </div>
    );
}
export default ProductoItem;