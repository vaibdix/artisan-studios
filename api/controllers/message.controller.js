import createError from "../utils/createError.js";
import Message from "../models/message.model.js";
import Conversation from "../models/conversation.model.js"

export const createMessage = async (req, res,next)=>{
  const messages = await Message({
    conversationId:req.body.conversationId,
    userId: req.userId,
    decs: req.body.decs
  })
  try {
    const saveMessage = await newMessage.save()
    await Conversation.findOneAndUpdate({id: req.body.conversationId},
      { $set: {
        readBySeller: req.isSeller,
        readByBuyer: !req.isSeller,
        lastMessage: req.body.desc,
      },},
      { new:true }
      );

      res.status(201).send(saveMessag)
  } catch (err) {
    next(err)
  }
}
export const getMessages = async (req, res,next)=>{
  const messages = await Message.find({ conversationId: req.params.id });
  res.status(200).send(messages);
  try {

  } catch (err) {
    next(err)
  }
}