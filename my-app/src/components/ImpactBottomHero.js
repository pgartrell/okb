import React from "react";
import {
  JumbotronContainer,
  ImpactBottomHeroTitle,
  ImpactBottomHeroSubtitle,
} from "../styles/ImpactBottomHero.styles";
import { Link } from "react-router-dom";

export default function ImpactBottomHero() {
  return (
    <JumbotronContainer className="row">
      <div className=" container col-6">
        <ImpactBottomHeroTitle className="text-center">
          Be a part of the change
        </ImpactBottomHeroTitle>
        <ImpactBottomHeroSubtitle className="text-center">
          You can make a difference by supporting our mission for a better Ghana
          and a better world.
        </ImpactBottomHeroSubtitle>
      </div>

      <div className="container col-6 float-left">
        <div>
          <Link to="/donatePage">
            <button className="btn-okb-primary">Donate</button>{" "}
          </Link>
        </div>

        <div>
          <Link to="workWithUsPage">
            <button className="btn-okb-secondary">Volunteer</button>{" "}
          </Link>
        </div>
      </div>
    </JumbotronContainer>
  );
}
