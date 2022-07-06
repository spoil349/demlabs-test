import instance from "./instance";
import serversModule from "./servers";

export default {
  servers: serversModule(instance),
};
