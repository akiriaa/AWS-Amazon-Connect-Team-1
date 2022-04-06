// import "amazon-connect-streams";
// import "amazon-connect-chatjs";


// connect.core.initCCP({ /* ... */ });

// connect.ChatSession.setGlobalConfig({
//     loggerConfig: { // optional, the logging configuration. If omitted, no logging occurs
//       logger: { // optional, a logger object implementation
//         debug: (msg) => console.debug(msg), // REQUIRED, can be any function
//         info: (msg) => console.info(msg), // REQUIRED, can be any function
//         warn: (msg) => console.warn(msg), // REQUIRED, can be any function
//         error: (msg) => console.error(msg) // REQUIRED, can be any function
//       },
//       level: connect.ChatSession.LogLevel.WARN, // optional, defaults to: `connect.ChatSession.LogLevel.INFO`
//     },
//     region: "us-east-1", // optional, defaults to: "us-west-2"
//   });

// connect.contact(contact => {
//   if (contact.getType() !== connect.ContactType.CHAT) {
//     // applies only to CHAT contacts
//     return;
//   }

//   // recommended: calls `connect.ChatSession.setGlobalConfig()` and `connect.ChatSession.create()` internally
//   contact.onAccepted(async () => {
//     const cnn = contact.getConnections().find(cnn => cnn.getType() === connect.ConnectionType.AGENT);

//     const agentChatSession = await cnn.getMediaController();
//   });

//   // alternative: if you want control over the args of `connect.ChatSession.setGlobalConfig()` and `connect.ChatSession.create()`
//   contact.onAccepted(() => {
//     const cnn = contact.getConnections().find(cnn => cnn.getType() === connect.ConnectionType.AGENT);

//     const agentChatSession = connect.ChatSession.create({
//       chatDetails: cnn.getMediaInfo(), // REQUIRED
//       options: { // REQUIRED
//         region: "us-east-1", // REQUIRED, must match the value provided to `connect.core.initCCP()`
//       },
//       type: connect.ChatSession.SessionTypes.AGENT, // REQUIRED
//       websocketManager: connect.core.getWebSocketManager() // REQUIRED
//     });
//   });
// });