import React from "react";
import {
  FaComments,
  FaCircle,
  FaUsers,
  FaBullhorn,
  FaUserCircle,
  FaCog,
} from "react-icons/fa";

export default function Sidebar({ onClose }) {
  return (
    <aside className="sidebar mobile-visible">
      {/* Mobile close button */}
      <div className="mobile-header mobile-only">
        <button onClick={onClose}>✖</button>
        <span>Menu</span>
      </div>

      <div className="sidebar-top">
        <div className="sidebar-item chat-icon" title="Chats">
          <FaComments size={22} />
          <span className="sidebar-label ">Chats</span>
        </div>
        <div className="sidebar-item" title="Status">
          <FaCircle size={18} color="green" />
          <span className="sidebar-label">Status</span>
        </div>
        <div className="sidebar-item" title="Communities">
          <FaUsers size={20} />
          <span className="sidebar-label">Communities</span>
        </div>
        <div className="sidebar-item" title="Channels">
          <FaBullhorn size={20} />
          <span className="sidebar-label">Channels</span>
        </div>
      </div>

      <div className="sidebar-bottom">
        <div className="sidebar-item" title="Profile">
          <FaUserCircle size={22} />
          <span className="sidebar-label">Profile</span>
        </div>
        <div className="sidebar-item" title="Settings">
          <FaCog size={20} />
          <span className="sidebar-label">Settings</span>
        </div>
      </div>
    </aside>
  );
}
