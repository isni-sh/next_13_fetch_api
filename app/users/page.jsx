import Link from "next/link";

async function getUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: {
      // how often check for new data in second
      revalidate: 60,
    },
  });

  //Waiting 1 second before shows users
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const users = response.json();
  return users;
}

const UsersPage = async () => {
  const users = await getUsers();

  return (
    <div>
      <h2 className="text-4xl font-semibold pt-3 pb-5">Users Accounts</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {users.map((user, index) => {
          return (
            <Link href={`users/${user.id}`} key={index} className="border p-4">
              <h3 className="text-2xl font-medium pb-2">{user.name}</h3>
              <p>{user.email}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default UsersPage;
