import { useState } from 'react';
import styles from "./manageLeads.module.css"

const ManageLeads = () => {

    return (
        <div className={styles.sectionContainer}>
            <div className={styles.sectionHeader}>
                <h1 className={styles.header}>Manage Your Leads</h1>
                <p className={styles.desc}>Monitor lead status, assign tasks, and close deals faster.</p>
            </div>
            <span className={styles.contentHeader}>Perfomace Overview</span>
            <div>

            </div>
        </div>
    );
};

export default ManageLeads;