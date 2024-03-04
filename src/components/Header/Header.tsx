import { HeaderContainer } from "../../styles/Style-Components/Header/Header";

import RocketLogo from "../../assets/rocket.svg";

export function Header() {
    return (
      <HeaderContainer>
        <img src={ RocketLogo } alt="Rocket to up, and with three fires as propulsors" />
        <div>
          <span>to</span>
          <span>do</span>
        </div>
      </HeaderContainer>
    );
  }