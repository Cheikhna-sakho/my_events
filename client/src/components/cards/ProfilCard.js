import React, { useState } from "react";
import { UserContext } from "../../contexts/AuthProvider";
import CardDetail from "./CardDetail";

const ProfilCard = () => {
  const { contextUser } = UserContext();
  const [user,setUser] = contextUser;

  const [bio, setBio] = useState("");
  const [bioEdit, setBioEdit] = useState(true);

  const handleUpdateBio = (e) => {
    e.preventDefault();
    fetch(`/user/updatebio`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ bio, email: user?.email }),
    })
      .then((res) => res.json())
      .then((resObject) => {
        setUser(resObject.user);
      });

    setBioEdit(prev => !prev);
  };

  return (
    <div>
      <CardDetail
        cardClass={"detail profil-card"}
        content={
          <>
            <p className="pseudo">{user?.username}</p>
            <p className="presentation">Présentation</p>
            {bioEdit ? (
              <div>
                <p className="profil-desc">{user?.bio}</p>
                <button type="button" onClick={ ()=>setBioEdit(prev => !prev)}>
                  Modifier bio
                </button>
              </div>
            ) : (
              <form onSubmit={handleUpdateBio}>
                <textarea
                  type="text"
                  defaultValue={user?.bio}
                  onChange={(e) => setBio(e.target.value)}
                ></textarea>
                <button type="submit" className="profil-btn">
                  Valider modifications
                </button>
                {/* <button type="button" onClick={setBioEdit((prev) => !prev)}>Annuler</button> */}
              </form>
            )}
          </>
        }
        imageSrc={user?.avatar}
      />
    </div>
  );
};

export default ProfilCard;
