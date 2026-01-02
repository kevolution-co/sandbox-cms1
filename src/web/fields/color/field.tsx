'use client'

import { FieldLabel, useField, useLocale } from '@payloadcms/ui'
import { TextFieldClientComponent } from 'payload'
import { useRef } from 'react'

import { Button } from '@/components/ui/button'
import { Field, FieldDescription } from '@/components/ui/field'

const ColorField: TextFieldClientComponent = (props) => {
  const locale = useLocale()
  const inputRef = useRef<HTMLInputElement>(null)
  const field = useField<string>({ path: props.path })

  return (
    <Field className="w-auto items-center">
      <FieldLabel
        htmlFor={props.path}
        label={props.field.label}
        required={props.field.required}
      />
      <div
        className="grid grid-cols-1 grid-rows-1 aspect-square "
        style={{ width: 4 * 14 }}
      >
        <input
          className="col-start-1 col-end-2 row-start-1 row-end-2 size-auto z-0 opacity-0"
          disabled={field.disabled || props.field.admin.readOnly}
          id={props.path}
          name={props.path}
          onChange={(event) => field.setValue(event.target.value)}
          readOnly={props.field.admin.readOnly}
          ref={inputRef}
          type="color"
          value={field.value || ''}
        />
        <Button
          aria-label={
            typeof props.field.label === 'string'
              ? props.field.label
              : props.field.label[locale.code]
          }
          className="col-start-1 col-end-2 row-start-1 row-end-2 z-10 p-0 rounded-full border-none shadow-md cursor-pointer size-14 disabled:opacity-100 border border-border"
          disabled={field.disabled || props.field.admin.readOnly}
          onClick={() => inputRef.current?.click()}
          size="icon"
          style={{ backgroundColor: field.value || '#000000' }}
          type="button"
        />
      </div>
      <FieldDescription className="w-auto!">
        {field.value || ''}
      </FieldDescription>
    </Field>
  )
}

export default ColorField
