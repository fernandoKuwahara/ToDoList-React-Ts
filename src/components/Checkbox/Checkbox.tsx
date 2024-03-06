import { useState } from "react";
import { InputChecker } from "../../styles/Style-Components/Checkbox/Checkbox";

import { Check } from "phosphor-react";

export function CheckBox() {
  const [isChecked, setIsChecked] = useState(false);

  function handleCheckTask() {
    setIsChecked(!isChecked);
  }

  return (
    <InputChecker onClick={handleCheckTask} isChecked={ isChecked }>
      { isChecked ? <Check size={ 20 } /> : "" }
    </InputChecker>
  );
}