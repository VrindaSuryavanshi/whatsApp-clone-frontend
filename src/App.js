import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import ChatList from "./components/ChatList";
import ChatWindow from "./components/ChatWindow";
import "./App.css";

export default function App() {
  const [chats, setChats] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showChatWindow, setShowChatWindow] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  

  useEffect(() => {
    const API_URL = process.env.REACT_APP_API_URL;
    fetch(`${API_URL}/conversations`);

    fetch("https://whatsapp-backend-2yd4.onrender.com/conversations")
      .then((r) => r.json())
      .then((data) => setChats(Array.isArray(data) ? data : []))
      .catch((e) => console.error("fetch conversations:", e));
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) {
        setShowChatWindow(true);
        setShowSidebar(true);
      } else {
        setShowSidebar(false);
        setShowChatWindow(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSelectChat = (chat) => {
    fetch(`https://whatsapp-backend-2yd4.onrender.com/messages/${chat.wa_id}`)
      .then((r) => r.json())
      .then((msgs) => {
        setSelectedChat({
          ...chat,
          messages: Array.isArray(msgs) ? msgs : [],
        });
        if (isMobile) {
          setShowChatWindow(true);
        }
      })
      .catch((e) => console.error("fetch messages:", e));
  };

  const handleBack = () => {
    if (isMobile) {
      setShowChatWindow(false);
    }
  };

  return (
    <div className="app">
      {/* Sidebar */}
      {(!isMobile || showSidebar) && (
        <Sidebar onClose={() => setShowSidebar(false)} />
      )}

      {/* Chat List */}
      {(!isMobile || !showChatWindow) && (
        <ChatList
          chats={chats}
          onSelectChat={handleSelectChat}
          selectedWaId={selectedChat?.wa_id}
          onMenuClick={() => setShowSidebar(true)}
        />
      )}

      {/* Chat Window */}
      {(!isMobile || showChatWindow) && selectedChat && (
        <ChatWindow
          chat={selectedChat}
          onBack={handleBack}
          isMobile={isMobile}
        />
      )}
    </div>
  );
}
