import React from "react";
import { FaSearch, FaCommentAlt, FaEllipsisV, FaBars } from "react-icons/fa";

function initials(name = "") {
  const parts = name.trim().split(/\s+/).slice(0, 2);
  return parts.map((p) => p[0]?.toUpperCase() || "").join("") || "U";
}

export default function ChatList({
  chats = [],
  onSelectChat,
  selectedWaId,
  onSearchChange,
  onMenuClick, //  from App.js
}) {
  return (
    <section className="chat-list">
      {/* HEADER */}
      <div className="chat-list-header">
        <div className="chat-list-header-top">
          {/* Hamburger only on mobile */}
          <button className="icon-btn mobile-only" onClick={onMenuClick}>
            <FaBars />
          </button>

          <h2 className="whatsapp-title">WhatsApp</h2>
          <div className="chat-list-header-right">
            <button className="icon-btn" title="New chat">
              <FaCommentAlt />
            </button>
            <button className="icon-btn" title="More options">
              <FaEllipsisV />
            </button>
          </div>
        </div>

        {/* SEARCH BAR */}
        <div className="chat-search-bar">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search or start new chat"
            onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
          />
        </div>
      </div>

      {/* CHAT LIST */}
      <div className="chat-list-scroll">
        {chats.map((chat) => {
          const last = chat.messages?.[chat.messages.length - 1];
          const preview =
            (typeof last?.text === "string" ? last.text : last?.text?.body) ||
            "";

          return (
            <button
              key={chat.wa_id}
              className={`chat-list-item ${
                selectedWaId === chat.wa_id ? "active" : ""
              }`}
              onClick={() => onSelectChat && onSelectChat(chat)}
            >
              <div className="avatar" style={{ backgroundColor: "#D3D3D3" }}>
                {initials(chat.name)}
              </div>

              <div className="cli-main">
                <div className="cli-top">
                  <span className="cli-name">{chat.name}</span>
                  {last?.timestamp && (
                    <span className="cli-time">
                      {new Date(last.timestamp).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  )}
                </div>
                <div className="cli-bottom">
                  <span className="cli-preview">{preview}</span>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
