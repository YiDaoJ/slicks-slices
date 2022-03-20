/* eslint-disable react/prop-types */
import React from 'react';
import PatchEvent, { set, unset } from 'part:@sanity/form-builder/patch-event';

const createPatchFrom = (value) =>
  PatchEvent.from(value === '' ? unset() : set(Number(value)));

const formatMoney = Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'EUR',
}).format;

export default function PriceInput({ type, value, onChange, inputComponent }) {
  return (
    <div>
      <h4>
        {type.title} - {value ? formatMoney(value / 100) : ''}
      </h4>
      <p>{type.description}</p>
      <input
        type={type.name}
        value={value}
        ref={inputComponent}
        onChange={(event) => onChange(createPatchFrom(event.target.value))}
      />
    </div>
  );
}

PriceInput.focus = function () {
  this._inputElement.focus();
};
