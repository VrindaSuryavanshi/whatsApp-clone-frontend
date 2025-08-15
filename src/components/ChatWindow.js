// ChatWindow.jsx
import React from "react";
import "./ChatWindow.css";

export default function ChatWindow({ chat, onBack, isMobile }) {
  if (!chat) {
    return (
      <div
        className="chat-window"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%", // make sure chat-window has a height
          textAlign: "center",
          padding: "20px",
        }}
      >
        <img
          src="https://www.shutterstock.com/image-vector/omnichannel-marketing-live-chat-chatbot-260nw-2179324873.jpg"
          alt="No chat selected"
          style={{ maxWidth: "200px", marginBottom: "20px" }}
        />
        <p style={{ fontSize: "16px", color: "#555", marginBottom: "8px" }}>
          Select a chat to start messaging
        </p>
        <p style={{ fontSize: "14px", color: "#888" }}>
          You can also create a new chat
        </p>
      </div>
    );
  }
function initials(name = "") {
  const parts = name.trim().split(/\s+/).slice(0, 2);
  return parts.map((p) => p[0]?.toUpperCase() || "").join("") || "U";
}
  return (
    <div className="chat-window">
      <div className="chat-header">
        {isMobile && (
          <button className="back-btn" onClick={onBack}>
            ⬅
          </button>
        )}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px" }}>
  <div
    className="avatar"
    style={{
      backgroundColor: "#D3D3D3",
      color: "#333",
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: "bold",
      fontSize: "16px",
      flexShrink: 0,
    }}
  >
    {initials(chat.name)}
  </div>
  <div style={{ display: "flex", flexDirection: "column", overflow: "hidden" }}>
    <p style={{ margin: 0, fontWeight: "500", color: "#111", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
      {chat.name}
    </p>
    <p style={{ margin: 0, fontSize: "12px", color: "#666" }}>{chat.wa_id}</p>
  </div>
</div>

      </div>

      <div className="chat-messages">
        {chat.messages.map((msg) => (
          <div
            key={msg.message_id}
            className={`message-bubble ${msg.direction}`}
          >
            <div>{msg.text}</div>
            <div className="message-meta">
              {new Date(msg.timestamp).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
              {msg.delivery_status === "sent" && (
                <span className="tick sent">✔</span>
              )}
              {msg.delivery_status === "delivered" && (
                <span className="tick delivered">✔✔</span>
              )}
              {msg.delivery_status === "read" && (
                <span className="tick read">✔✔</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
