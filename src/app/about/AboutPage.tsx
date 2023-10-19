type User = {
  id: number;
  name: string;
  email: string;
};

async function getData() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await data.json();

  return users.map((user: User) => ({
    id: user.id,
    name: user.name,
    email: user.email,
  }));
}

export default async function AboutPage() {
  const data: User[] = await getData();

  return (
    <div>
      <section>
        <h1>About me</h1>
        <div>
          {data.map((user: User) => (
            <p key={user.id}>{user.name}</p>
          ))}
        </div>
      </section>
    </div>
  );
}
