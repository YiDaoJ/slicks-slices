import { ChangeEvent, useState } from 'react';

export function useForm(defaults: any) {
  const [values, setValues] = useState(defaults);

  function updateValue(e: ChangeEvent<HTMLInputElement>) {
    // check if it's a number and convert
    let { value } = e.target;
    if (e.target.type === 'number') {
      // value = parseInt(e.target.value) ;
      value = e.target.value ;
    }

    setValues({
      // copy the exisiting values into it
      ...values,
      // update the new value that changed
      [e.target.name]: value,
    });
  }
  return { values, updateValue };
}
