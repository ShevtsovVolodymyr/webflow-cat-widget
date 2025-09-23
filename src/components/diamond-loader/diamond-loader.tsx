import React from 'react';
import './diamond-loader.scss';


export const DiamondLoader: React.FC = () => {
    return <div id="loader" className="sk-folding-cube active">
        <div className="sk-cube1 sk-cube"></div>
        <div className="sk-cube2 sk-cube"></div>
        <div className="sk-cube4 sk-cube"></div>
        <div className="sk-cube3 sk-cube"></div>
    </div>;
};

export default DiamondLoader;
