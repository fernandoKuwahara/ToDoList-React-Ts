import { useState } from "react";
import { InputChecker } from "../../styles/Style-Components/Checkbox/Checkbox";
import { CheckBoxProp } from "../../services/interfaces/Checkbox";

import { Check } from "phosphor-react";

export function CheckBox({ isChecked, onDoneTask }: CheckBoxProp) {
  const [isCheckedmarck, setIsCheckedmacrk] = useState(isChecked);

  function handleCheckTask() {
    setIsCheckedmacrk(!isCheckedmarck);
  }

  function triggerFunctions() {
    handleCheckTask();
    onDoneTask(!isCheckedmarck);
  }

  return (
    <InputChecker onClick={ triggerFunctions } isChecked={ isCheckedmarck }>
      { isCheckedmarck ? <Check size={ 20 } /> : "" }
    </InputChecker>
  );
}