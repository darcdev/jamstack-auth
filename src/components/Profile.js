import React from "react";
import { useIdentityContext } from "react-netlify-identity";
import { Link } from "gatsby";

const Profile = ({ showModal }) => {
  console.log("show", showModal);
  const identity = useIdentityContext();
  const isLoggedIn = identity && identity.isLoggedIn;

  const name =
    identity &&
    identity.user &&
    identity.user.user_metadata &&
    identity.user.user_metadata.fullname;

  return (
    isLoggedIn && (
      <div className="dashboard-header">
        <nav>
          <Link to="/dashboard/secret" activeClassName="active">
            Secret Stuff
          </Link>
          <Link to="/dashboard/base" activeClassName="active">
            See your base
          </Link>
        </nav>
        <span>
          Logged in as {name} <button onClick={showModal}>Log out</button>
        </span>
      </div>
    )
  );
};

export default Profile;
