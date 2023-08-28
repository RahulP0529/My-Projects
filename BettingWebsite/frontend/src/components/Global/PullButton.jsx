import React from 'react';
import styles from "../../style";

const PullButton = ({ onClick }) => {
    return (
        <button
            className={`bg-blue-500 text-white font-semibold px-4 py-2 rounded ${styles.marginX}`}
            onClick={onClick}
        >
            Pull Data
        </button>
    );
};

export default PullButton;
