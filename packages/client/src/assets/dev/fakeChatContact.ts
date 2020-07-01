import { fakeContacts } from "./fakeUserData";
import { fakeChatRoom } from "./fakeChatRooms";
import { fakeMessages } from "./fakeMessages";
import { ChatContact } from "@chat-app/shared";

export const combinedData: ChatContact[] = fakeChatRoom.map((chatRoom) => {
  const userId = chatRoom.members.filter((id) => id !== 1)[0];
  const user = fakeContacts.filter((contact) => contact.id === userId)[0];
  const messages = fakeMessages[chatRoom.id];
  return {
    chatRoomId: chatRoom.id,
    userId,
    userName: user.name,
    userStatus: user.status,
    userThumbnail: user.thumbnail,
    lastMessage: messages[messages.length - 1],
    unread: 2,
  } as ChatContact;
});
