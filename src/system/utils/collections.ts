import { CollectionConfig } from 'payload'

export const mediaCollection = (
  config: CollectionConfig,
): CollectionConfig => ({
  ...config,
  admin: {
    ...config.admin,
    group: {
      en: 'Cloud Storage',
      es: 'Almacenamiento en la Nube',
    },
  },
  folders: true,
  slug: `cloud-${config.slug || 'media'}`,
  upload: {
    ...(typeof config.upload === 'object' ? config.upload : {}),
    // These are not supported on Workers yet due to lack of sharp
    crop: false,
    displayPreview: true,
    focalPoint: false,
  },
})
