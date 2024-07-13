import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema(
  {
    //	Participants are the users who are part of the conversation
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    //	Messages are the messages that are part of the conversation
    messages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",
        default: [],
      },
    ],
  },
  { timestamps: true }
);

//	Conversation model
const Conversation = mongoose.model("Conversation", conversationSchema);

export default Conversation;
