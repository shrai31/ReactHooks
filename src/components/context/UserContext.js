import { createContext } from "react";

const UserContext = createContext();
// const UserContext = createContext("Rai");
const ChannelContext = createContext("HR");

const UserProvider = UserContext.Provider;
const ChannelProvider = ChannelContext.Provider;

const UserConsumer =  UserContext.Consumer;
const ChannelConsumer =  ChannelContext.Consumer;

// export { UserProvider, UserConsumer }
export { UserProvider, UserConsumer, ChannelProvider, ChannelConsumer, UserContext,ChannelContext}