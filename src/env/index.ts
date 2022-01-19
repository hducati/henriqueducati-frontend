const getEnv = (productionEnvTempName: string): string => {
  if (process.env.NODE_ENV === "production") {
    return productionEnvTempName
  }
  return process.env[productionEnvTempName] as string
}

export const BACKEND_URL: string = getEnv("BACKEND_URL")
