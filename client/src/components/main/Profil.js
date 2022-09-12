import React, { useState } from "react";
import BtnShadow from "../buttons/BtnShadow";
import CardDetail from "../cards/CardDetail";
import ProfilCard from "../cards/ProfilCard";

const logout = () => {
  window.open("http://localhost:5000/auth/logout", "_self");
};

const ProfilMain = () => {

  const data = [
    {
      title: "titre",
      paragraphe: "nombre de participants",
    },
    {
      title: "titre",
      paragraphe: "nombre de participants",
    },
    {
      title: "titre",
      paragraphe: "nombre de participants",
    },
    {
      title: "titre",
      paragraphe: "nombre de participants",
    },
    {
      title: "titre",
      paragraphe: "nombre de participants",
    },
  ];
  const logout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
  };
  return (
    <div className="body body-profil">
      <ProfilCard />

      <div className="historique">
        <h2>Historique</h2>
        {data.map((c, k) => (
          <CardDetail
            cardClass={"profil-event"}
            content={
              <div className="info-card profil-info-event grid-col">
                <div className="">

                  <BtnShadow addClass={"logout"} title={"Log out"} click={logout} />
                  <h2>{c.title}</h2>
                  <p className="desc-event">
                    {c.paragraphe} {k}
                  </p>
                </div>
                <BtnShadow title={"lire plus"} addClass={"btn-profil-event"} />
              </div>
            }
          />
        ))}
      </div>

      <div onClick={logout}>
        <h2>Log Out</h2>
        <BtnShadow title={"Log Out"} />
      </div>
    </div>
  );
};
export default ProfilMain;
