import { Message } from "@chat-app/shared";

export const chatRoom1: Message[] = [
  {
    id: 1,
    chatRoomId: 1,
    user: { id: 1, name: "Me", thumbnail: null },
    message: "Hello world!",
    read: [1, 2],
    timestamp: new Date(),
  },
  {
    id: 2,
    chatRoomId: 1,
    user: { id: 2, name: "User 2", thumbnail: null },
    message: "Hello the other people",
    read: [1, 2],
    timestamp: new Date(),
  },
  {
    id: 3,
    chatRoomId: 1,
    user: { id: 1, name: "Me", thumbnail: null },
    message: "You are idiot!",
    read: [1, 2],
    timestamp: new Date(),
  },
  {
    id: 4,
    chatRoomId: 1,
    user: { id: 2, name: "User 2", thumbnail: null },
    message: "likewise.",
    read: [1, 2],
    timestamp: new Date(),
  },
  {
    id: 5,
    chatRoomId: 1,
    user: { id: 1, name: "Me", thumbnail: null },
    message: "SHUT UP!!!!",
    read: [1, 2],
    timestamp: new Date(),
  },
  {
    id: 6,
    chatRoomId: 1,
    user: { id: 1, name: "Me", thumbnail: null },
    message: "ASDKaosjdp;aosdqweu;sj/.l/.dvsdfi;oeou;aeg;3qjw;1o;ldjsf;!!!!!!!",
    read: [2],
    timestamp: new Date(),
  },
];

export const chatRoom2: Message[] = [
  {
    id: 1,
    chatRoomId: 2,
    user: { id: 3, name: "User 3", thumbnail: null },
    message: "Hello world!",
    read: [1, 3],
    timestamp: new Date(),
  },
  {
    id: 2,
    chatRoomId: 2,
    user: { id: 1, name: "Me", thumbnail: null },
    message: "Hello the other people",
    read: [1, 3],
    timestamp: new Date(),
  },
  {
    id: 3,
    chatRoomId: 2,
    user: { id: 3, name: "User 3", thumbnail: null },
    message: "You are idiot!",
    read: [1, 3],
    timestamp: new Date(),
  },
  {
    id: 4,
    chatRoomId: 2,
    user: { id: 1, name: "Me", thumbnail: null },
    message: "likewise.",
    read: [1, 3],
    timestamp: new Date(),
  },
  {
    id: 5,
    chatRoomId: 2,
    user: { id: 3, name: "User 3", thumbnail: null },
    message: "SHUT UP!!!!",
    read: [1, 3],
    timestamp: new Date(),
  },
  {
    id: 6,
    chatRoomId: 2,
    user: { id: 3, name: "User 3", thumbnail: null },
    message: "ASDKaosjdp;aosdqweu;sj/.l/.dvsdfi;oeou;aeg;3qjw;1o;ldjsf;!!!!!!!",
    read: [1],
    timestamp: new Date(),
  },
];

export const chatRoom3: Message[] = [
  {
    id: 1,
    chatRoomId: 3,
    user: { id: 1, name: "Me", thumbnail: null },
    message: "Hello world!",
    read: [1, 4],
    timestamp: new Date(),
  },
  {
    id: 2,
    chatRoomId: 3,
    user: { id: 4, name: "User 4", thumbnail: null },
    message: "Hello the other people",
    read: [1, 4],
    timestamp: new Date(),
  },
  {
    id: 3,
    chatRoomId: 3,
    user: { id: 1, name: "Me", thumbnail: null },
    message: "You are idiot!",
    read: [1, 4],
    timestamp: new Date(),
  },
  {
    id: 4,
    chatRoomId: 3,
    user: { id: 4, name: "User 4", thumbnail: null },
    message: "likewise.",
    read: [1, 4],
    timestamp: new Date(),
  },
  {
    id: 5,
    chatRoomId: 3,
    user: { id: 1, name: "Me", thumbnail: null },
    message: "SHUT UP!!!!",
    read: [1, 4],
    timestamp: new Date(),
  },
  {
    id: 6,
    chatRoomId: 3,
    user: { id: 1, name: "Me", thumbnail: null },
    message: "ASDKaosjdp;aosdqweu;sj/.l/.dvsdfi;oeou;aeg;3qjw;1o;ldjsf;!!!!!!!",
    read: [1],
    timestamp: new Date(),
  },
];

export const fakeMessages: { [key: number]: Message[] } = {
  1: chatRoom1,
  2: chatRoom2,
  3: chatRoom3,
};
