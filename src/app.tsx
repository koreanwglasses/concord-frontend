import * as React from "react";
import styles from "./app.module.css";
import { fetch2 } from "./utils";
import { io } from "socket.io-client";
import { Message } from "discord.js";

export function App() {
  const [messages, addMessage] = React.useReducer(
    (state: Message[], newMessage: Message) => {
      return [...state, newMessage];
    },
    [] as Message[]
  );

  React.useEffect(() => {
    const socket = io("http://localhost:9000");
    socket.on("discord-message", (message: Message) => {
      addMessage(message);
    });
  }, []);

  return (
    <div className={styles.container}>
      {messages.map((message) => (
        <p key={message.id}>{message.content}</p>
      ))}
    </div>
  );
}
