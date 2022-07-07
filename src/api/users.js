export default function (instance) {
  return {
    getUsers(searchingString) {
      return instance.get(`users?${searchingString}`);
    },
  };
}
