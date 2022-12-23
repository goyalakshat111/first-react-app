import React from 'react';

const BaseHoc =
    (Component) =>
        ({ ...props }) => {
            return (
                <div>
                    <h1>This is navbar</h1>
                    <Component {...props} />
                    <h1>This is footer</h1>
                </div>
            );
        };

export default BaseHoc;