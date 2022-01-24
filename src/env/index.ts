const getEnv = (productionEnvTempName: string): string => {
  return process.env[productionEnvTempName] as string
}

export const BACKEND_URL: string = getEnv("BACKEND_URL")

export const NEXT_PUBLIC_REACT_APP_IMAGE_BASE_URL: string = getEnv(
  "NEXT_PUBLIC_REACT_APP_IMAGE_BASE_URL"
)
