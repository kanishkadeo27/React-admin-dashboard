import './sidebar.css';
import { Home, Timeline, TrendingUp ,PersonOutlineOutlined ,StorefrontOutlined,AttachMoneyOutlined,BarChartOutlined, EmailOutlined, FeedbackOutlined, MessageOutlined, ManageAccountsOutlined, ReportOutlined } from '@mui/icons-material';
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                {/* 1 */}
                <div className="sideMenu">
                    <h3 className="sidebarTitle">
                        Dashboard
                    </h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <Home className='sidebarIcon' /> Home
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className='sidebarIcon' /> Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className='sidebarIcon' /> Sales
                        </li>
                    </ul>
                </div>

                {/* 2 */}
                <div className="sideMenu">
                    <h3 className="sidebarTitle">
                        Quick Menu
                    </h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem ">
                            <Home className='sidebarIcon' /> Users
                        </li>
                        <li className="sidebarListItem">
                            <PersonOutlineOutlined className='sidebarIcon' /> Products
                        </li>
                        <li className="sidebarListItem">
                            <AttachMoneyOutlined className='sidebarIcon' /> Transactions
                        </li>
                        <li className="sidebarListItem">
                            <BarChartOutlined className='sidebarIcon' /> Reports
                        </li>
                    </ul>
                </div>
                {/* 3 */}
                <div className="sideMenu">
                    <h3 className="sidebarTitle">
                        Notifications
                    </h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem ">
                            <EmailOutlined className='sidebarIcon' /> Mail
                        </li>
                        <li className="sidebarListItem">
                            <FeedbackOutlined className='sidebarIcon' /> Feedback
                        </li>
                        <li className="sidebarListItem">
                            <MessageOutlined className='sidebarIcon' /> Messaages
                        </li>
                    </ul>
                </div>
                {/* 4 */}
                <div className="sideMenu">
                    <h3 className="sidebarTitle">
                        Staff
                    </h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem ">
                            <ManageAccountsOutlined className='sidebarIcon' /> Manage
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className='sidebarIcon' /> Analytics
                        </li>
                        <li className="sidebarListItem">
                            <ReportOutlined className='sidebarIcon' /> Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar