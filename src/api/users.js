export default function (instance) {
  return {
    getUsers(searchingString) {
      return instance.get(`users?${searchingString}`);
    },
    updateUser({ id, user }) {
      return instance.put(`users/${id}`, user);
    },
  };
}
