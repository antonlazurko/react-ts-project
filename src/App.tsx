import { Container } from "components/Container";
import { Header } from "components/Header";
import { Search } from "components/Search";
import { UserCard } from "components/UserCard";
import { defaultUser } from "mock";
import { useState } from "react";
import { GithubUser, LocalGithubUser, GithubError } from "types";
import { extractLocalUser } from "utils/extract-local-user";
import { isGithubUser } from "utils/type-guards";
import { BASE_URL } from "const/consts";

function App() {

  const [user, setUser] = useState<LocalGithubUser | null>(defaultUser);

  const fetchUser = async (username: string) => {
    try {
      const response = await fetch(`${BASE_URL}${username}`);
      const user = await response.json() as GithubUser | GithubError;
      if (isGithubUser(user)) {
        setUser(extractLocalUser(user));
      } else {
        throw new Error(user.message);
      }
    } catch (error) {
      console.error(error);
      setUser(null);
    }
  }

  return (
    <Container>
      <Header />
      <Search hasError={!user} onSubmit={fetchUser} />
      {user && <UserCard {...user} />}
    </Container>
  );
}

export default App;
