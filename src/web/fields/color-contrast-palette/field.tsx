'use client'

import {
  FieldLabel,
  useAllFormFields,
  useField,
  useLocale,
} from '@payloadcms/ui'
import { useDebounce } from '@uidotdev/usehooks'
import { TextFieldClientComponent } from 'payload'
import { ChangeEvent, useEffect, useRef, useState } from 'react'

import { Button } from '@/components/ui/button'
import { Field, FieldDescription } from '@/components/ui/field'

const ColorContrastPaletteField: TextFieldClientComponent = (props) => {
  const locale = useLocale()
  const field = useField<string>({ path: props.path })
  const [_, setFieldValue] = useAllFormFields()
  const inputRef = useRef<HTMLInputElement>(null)
  const rootPath = props.path.split('.').slice(0, -1).join('.')
  const [value, setValue] = useState(field.value ? field.value : '#000000')
  const debouncedValue = useDebounce(value, 300)

  useEffect(() => {
    void (async () => {
      const q = new URLSearchParams({ hex: debouncedValue.replace('#', '') })
      const tintsRes = await fetch(`/api/web/color-palette?${q.toString()}`)
      const { contrast, palette } = await tintsRes.json<{
        contrast: string
        palette: Record<string, string>
      }>()

      setFieldValue({ path: `${rootPath}.fg`, type: 'UPDATE', value: contrast })

      Object.entries(palette).forEach(([shade, hex]) => {
        setFieldValue({
          path: `${rootPath}.palette.${shade}`,
          type: 'UPDATE',
          value: hex,
        })
      })

      field.setValue(debouncedValue)
    })()
  }, [debouncedValue])

  const handleOnChange = async (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

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
          onChange={handleOnChange}
          readOnly={props.field.admin.readOnly}
          ref={inputRef}
          type="color"
          value={value}
        />
        <Button
          aria-label={
            typeof props.field.label === 'string'
              ? props.field.label
              : props.field.label[locale.code]
          }
          className="col-start-1 col-end-2 row-start-1 row-end-2 z-10 p-0 rounded-full border-none shadow-md cursor-pointer size-14 disabled:opacity-100 border"
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

export default ColorContrastPaletteField
