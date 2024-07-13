import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

const Message = ({ message }) => {
  const { authUser } = useAuthContext(); // Get the authenticated user
  const { selectedConversation } = useConversation(); // Get the selected conversation
  const fromMe = message.senderId === authUser._id; // Check if the message is from the authenticated user
  const formattedTime = extractTime(message.createdAt); // Extract the time from the message
  const chatClassName = fromMe ? "chat-end" : "chat-start"; // Check if the message is from the authenticated user
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation?.profilePic; // Get the profile picture of the user
  const bubbleBgColor = fromMe ? "bg-blue-500" : ""; // Set the background color of the message bubble

  const shakeClass = message.shouldShake ? "shake" : ""; // Add shake animation if the message should shake

  return (
    // Display the message
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS chat bubble component" src={profilePic} />
        </div>
      </div>
      <div
        className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2`}
      >
        {message.message}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        {formattedTime}
      </div>
    </div>
  );
};
export default Message;
