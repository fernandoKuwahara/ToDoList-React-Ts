import { useState } from "react";
import { InputChecker } from "../../styles/Style-Components/Checkbox/Checkbox";
import { CheckBoxProp } from "../../services/interfaces/Checkbox";

import { Check } from "phosphor-react";

export function CheckBox({ isChecked }: CheckBoxProp) {
  const [isCheckedmarck, setIsCheckedmacrk] = useState(isChecked);

  function handleCheckTask() {
    setIsCheckedmacrk(!isCheckedmarck);
  }

  return (
    <InputChecker onClick={handleCheckTask} isChecked={ isCheckedmarck }>
      { isChecked ? <Check size={ 20 } /> : "" }
    </InputChecker>
  );
}