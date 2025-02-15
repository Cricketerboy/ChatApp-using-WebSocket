import React, { useEffect } from "react";
import Chatuser from "./Chatuser";
import Messages from "./Messages";
import Typesend from "./Typesend";
import useConversation from "../../statemanage/useConversation.js";
import { useAuth } from "../../context/AuthProvider.jsx";

function Right({ isDrawerOpen, setIsDrawerOpen }) {
  const { selectedConversation, setSelectedConversation } = useConversation();

  // Close the drawer when a chat is selected
  useEffect(() => {
    if (selectedConversation) {
      setIsDrawerOpen(false);
    }
  }, [selectedConversation, setIsDrawerOpen]);

  return (
    <div className={`w-full bg-slate-900 text-gray-300 transition-all duration-300 ${isDrawerOpen ? "hidden md:block" : "block"}`}>
      <div>
        {!selectedConversation ? (
          <NoChatSelected />
        ) : (
          <>
            <Chatuser />
            <div className="flex-1 overflow-y-auto" style={{ maxHeight: "calc(88vh - 8vh)" }}>
              <Messages />
            </div>
            <Typesend />
          </>
        )}
      </div>
    </div>
  );
}

export default Right;

const NoChatSelected = () => {
  const [authUser] = useAuth();
  return (
    <div className="flex h-screen items-center justify-center">
      <h1 className="text-center">
        Welcome{" "}
        <span className="font-semibold text-xl">{authUser.user.fullname}</span>
        <br />
        No chat selected, please start a conversation.
      </h1>
    </div>
  );
};
