export default function (instance) {
  return {
    getServers(payload) {
      return instance.get("servers", payload);
    },
  };
}
