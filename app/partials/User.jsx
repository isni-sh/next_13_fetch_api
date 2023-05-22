async function fetchUser(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    next: {
      // how often check for new data in second
      revalidate: 60,
    },
  });
  const user = res.json();
  return user;
}

const User = async ({ id }) => {
  const user = await fetchUser(id);
  return (
    <div>
      <h3>{user.name}</h3>
      <p>{user.address.street}</p>
    </div>
  );
};

export default User;
