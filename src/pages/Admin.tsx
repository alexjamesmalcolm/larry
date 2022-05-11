import { Authenticator, Button } from "@aws-amplify/ui-react";

const Admin = () => (
  <Authenticator>
    {({ user, signOut }) => {
      return (
        <div>
          <p>Hello {user?.username}</p>
          <Button onClick={signOut}>Sign Out</Button>
        </div>
      );
    }}
  </Authenticator>
);

export default Admin;
