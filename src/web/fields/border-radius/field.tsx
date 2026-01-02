'use client'

import { FieldLabel, useField } from '@payloadcms/ui'
import { NumberFieldClientComponent } from 'payload'

import { Button } from '@/components/ui/button'
import { Field } from '@/components/ui/field'
import { Slider } from '@/components/ui/slider'

const BorderRadiusField: NumberFieldClientComponent = (props) => {
  const field = useField<number>({ path: props.path })

  const isDisabled = field.disabled || props.field.admin.readOnly

  const radius = [
    '0',
    '2xs',
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
    '2xl',
    '3xl',
    '4xl',
    '5xl',
  ] as const

  const handleOnChange = ([value]: number[]) => {
    field.setValue(value)
  }

  return (
    <Field className="w-full max-w-sm">
      <FieldLabel
        htmlFor={props.path}
        label={props.field.label}
        required={props.field.required}
      />
      <div className="w-full max-w-sm flex flex-col gap-1.5">
        <div className="flex items-center justify-center py-10">
          <Button
            className="uppercase"
            style={{ borderRadius: `${field.value}rem` }}
          >
            {radius[Math.round(field.value / 0.125)]}
          </Button>
        </div>
        <Slider
          defaultValue={[10]}
          disabled={isDisabled}
          id={props.path}
          max={1.25}
          min={0}
          name={props.path}
          onValueChange={handleOnChange}
          step={0.125}
          value={[field.value]}
        />
        <div className="mt-2 flex items-center justify-between text-muted-foreground">
          {radius.map((r) => (
            <span key={r}>{r}</span>
          ))}
        </div>
      </div>
    </Field>
  )
}

export default BorderRadiusField
