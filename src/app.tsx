import * as React from "react";
import styles from "./app.module.css";
import { io } from "socket.io-client";
import { Message } from "discord.js";
import { Result } from "perspective-api-client";

type AnalyzedMessage = {
  message: Message;
  analysis: { perspective: Result };
  errors: { perspective: any };
};

export function App() {
  const [analyzedMessages, addAnalyzedMessage] = React.useReducer(
    (state: AnalyzedMessage[], newAnayzedMessage: AnalyzedMessage) => {
      return [...state, newAnayzedMessage];
    },
    [] as AnalyzedMessage[]
  );

  React.useEffect(() => {
    const socket = io("http://localhost:9000");
    socket.on("analyzed-message", (analyzedMessage: AnalyzedMessage) => {
      addAnalyzedMessage(analyzedMessage);
    });
  }, []);

  return (
    <div className={styles.container}>
      {analyzedMessages.map((analyzedMessage) => (
        <div key={analyzedMessage.message.id}>
          <p>{analyzedMessage.message.content}</p>
          <p>{JSON.stringify(analyzedMessage.analysis)}</p>
          <p>{JSON.stringify(analyzedMessage.errors)}</p>
        </div>
      ))}
    </div>
  );
}
