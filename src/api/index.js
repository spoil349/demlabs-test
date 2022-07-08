import instance from "./instance";
import serversModule from "./servers";
import usersModule from "./users";

export default {
  servers: serversModule(instance),
  users: usersModule(instance),
};
