import { useState } from 'react'; 
import {
    LayoutDashboard,
    Rocket,
    Database,
    MessageSquare,
    Users,
    Megaphone,
    UserPlus,
    PhoneCall,
    Table2
} from 'lucide-react';
import OrganizationSelector from '../OrganizationSelector/organizationSelector.component';
import styles from "./sidebar.module.css"
import logo from '../../assets/logo.png';

const menuItems = [
    {
        title: "MAIN",
        items: [
            { label: "Dashboard", icon: LayoutDashboard },
            { label: "Generate Leads", icon: Rocket },
            { label: "Manage Leads", icon: Database, },
            { label: "Engage Leads", icon: MessageSquare },
        ]
    },
    {
        title: "CONTROL CENTER",
        items: [
            { label: "Team Members", icon: Users },
            { label: "Lead Sources", icon: Megaphone },
            { label: "Ad Accounts", icon: UserPlus },
            { label: "WhatsApp Account", icon: MessageSquare },
            { label: "Tele Calling", icon: PhoneCall },
            { label: "CRM Fields", icon: Table2 },
        ]
    }
]

const Sidebar = () => {

    const [activeItem, setActiveItem] = useState("Manage Leads");

    return (
        <div className={styles.sidebar}>
            <div className={styles.header}>
                <img
                    src={logo}
                    alt='GrowEasy logo'
                    style={{ width: '30px', height: '30px' }}
                />
                <h3> GrowEasy </h3>
            </div>
            <OrganizationSelector />
            <div className={styles.navigation}>
                {menuItems.map((section) => (
                    <div key={section.title} className={styles.section}>
                        <p className={styles.sectionTitle}>{section.title}</p>
                        {section.items.map((item) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={item.label}
                                    onClick={() => setActiveItem(item.label)}
                                    className={`${styles.menuItem} ${activeItem === item.label ? styles.active : ""}`}
                                >
                                    <Icon size={15} />
                                    <p className={styles.menuLabel}>{item.label}</p>
                                </div>
                            );
                        })}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;