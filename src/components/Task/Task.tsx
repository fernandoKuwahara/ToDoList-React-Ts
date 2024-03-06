import { TaskContainer } from "../../styles/Style-Components/Task/Task";
import { CheckBox } from "../Checkbox/Checkbox";

import { Trash } from "phosphor-react";

export function Task() {
  return (
    <TaskContainer>
      <CheckBox />
      <span>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</span >
      <button> <Trash size={ 20 } /> </button>
    </TaskContainer>
  );
}