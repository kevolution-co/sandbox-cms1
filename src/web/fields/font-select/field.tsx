'use client'

import {
  SelectField,
  useAllFormFields,
  useField,
  useTranslation,
} from '@payloadcms/ui'
import { SelectFieldClientComponent } from 'payload'
import { useEffect, useState } from 'react'

import { Loader } from '@/components/ui/loader'

const FontSelectField: SelectFieldClientComponent = (props) => {
  const { t } = useTranslation()
  const field = useField<string>({ path: props.path })
  const [options, setOptions] = useState<{ label: string; value: string }[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [_, setFieldValue] = useAllFormFields()

  useEffect(() => {
    void (async () => {
      try {
        setIsLoading(true)
        const fontsRes = await fetch(
          'https://api.fontsource.org/v1/fonts?variable=true',
        )
        const data = await fontsRes.json<
          {
            family: string
            id: string
          }[]
        >()

        const options = data.map((font) => ({
          label: font.family,
          value: font.id,
        }))

        setOptions(options)
      } catch (error) {
        setOptions([])
        console.error('Error fetching fonts:', error)
      } finally {
        setIsLoading(false)
      }
    })()
  }, [])

  const handleOnChange = (value: string | string[]) => {
    const familyPath = props.path.replace('key', 'family')
    const selectedFont = options.find((option) => option.value === value)
    setFieldValue({
      path: familyPath,
      type: 'UPDATE',
      value: selectedFont?.label,
    })
    field.setValue(value)
  }

  if (isLoading) {
    return <Loader variant="classic" />
  }

  return (
    <SelectField
      field={{
        ...props.field,
        options: [{ label: t('general:none'), value: 'none' }, ...options],
      }}
      onChange={handleOnChange}
      path={props.path}
    />
  )
}

export default FontSelectField
