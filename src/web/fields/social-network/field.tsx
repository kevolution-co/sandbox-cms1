'use client'

import { FieldLabel, TextInput, useField } from '@payloadcms/ui'
import { TextFieldClientComponent } from 'payload'
import { ChangeEvent } from 'react'

import { buttonVariants } from '@/components/ui/button'
import { Field } from '@/components/ui/field'
import { cn } from '@/lib/utils'
import { WebSetting } from '@/payload-types'
import { formatUrlPrefix, SocialIcon } from '@/web/components/social-icon'

const SocialNetworkField: TextFieldClientComponent = (props) => {
  const field = useField<string>({ path: props.path })

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    field.setValue(event.target.value || undefined)
  }

  return (
    <Field className="items-end gap-4" orientation="horizontal">
      <div className="bg-muted p-2 rounded-full">
        <SocialIcon
          network={props.field.name as keyof WebSetting['social']['networks']}
        />
      </div>
      <div className="flex flex-col gap-1.5 w-full">
        <FieldLabel
          htmlFor={props.path}
          label={props.field.label}
          required={props.field.required}
        />
        <div className="flex items-stretch w-full">
          <div
            className={cn(
              buttonVariants({ variant: 'outline' }),
              'h-auto rounded-r-none',
            )}
          >
            {formatUrlPrefix({
              network: props.field
                .name as keyof WebSetting['social']['networks'],
            })}
          </div>
          <TextInput
            onChange={handleOnChange}
            path={props.path}
            style={{ width: '100%' }}
            value={field.value}
          />
        </div>
      </div>
    </Field>
  )
}

export default SocialNetworkField
