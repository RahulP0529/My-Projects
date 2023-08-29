import React from 'react';
import PullButton from '../../../Global/PullButton';
import styles from '../../../../style';
import axios from 'axios';

const Content = () => {
    const handlePullData = async () => {
        try {
            // Make an API call to your Flask backend when the button is clicked
            const response = await axios.get('https://bettingproject-e2b5b449dfb7.herokuapp.com/get_data');
            console.log('Data pulled from backend:', response.data);
        } catch (error) {
            console.error('Error pulling data:', error);
        }
    };

    return (
        <div>
            <div className={`${styles.section} ${styles.sectionImg}`}>
                {/* Add the PullButton component */}
                <PullButton onClick={handlePullData} />
            </div>
            <div className={styles.sectionInfo}>
                {/* Add your other content here */}
            </div>
        </div>
    );
};

export default Content;
