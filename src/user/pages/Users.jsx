import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [{ id: "u1", name: "Max Schwarz", image: "URL", places: 3 }];
  return <UsersList items={USERS} />;
};

export default Users;
