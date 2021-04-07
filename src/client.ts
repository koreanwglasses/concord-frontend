import * as Discord from "discord.js";
import * as Perspective from "perspective-api-client";

export type Message = Discord.Message & {
  analyses?: { perspective?: Perspective.Result };
};

/**
 * Wrapper for communicating with various backend endpoints
 */
export class Client {
  /**
   * (WIP) authenticate user with backend
   */
  login(): Promise<void> {
    throw new Error("method not implemented");
  }

  /**
   * List all channels in a guild. Channel ids are required to fetch messages.
   */
  channels({
    guildId,
  }: {
    guildId: Discord.Snowflake;
  }): Promise<Discord.Channel[]> {
    throw new Error("method not implemented");
  }

  /**
   * Fetch messages from a channel. Use in conjuction with onMessage to get a
   * live stream of messages.
   */
  messages({
    channelId,
    limit,
    analyses,
  }: {
    channelId: Discord.Snowflake;
    limit: number;
    analyses?: "perspective"[];
  }): Promise<Message[]> {
    throw new Error("method not implemented");
  }

  /**
   * Get a live stream of messages.
   */
  onMessage({
    messageHandler,
    channelId,
  }: {
    messageHandler: (message: Message) => void;
    channelId: Discord.Snowflake;
  }): void {
    throw new Error("method not implemented");
  }
}
