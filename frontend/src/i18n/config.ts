export const locales = ['en', 'mr'] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'mr'

export const localeNames: Record<Locale, string> = {
  en: 'English',
  mr: 'मराठी'
}