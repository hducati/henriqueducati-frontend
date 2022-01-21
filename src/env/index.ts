const getEnv = (productionEnvTempName: string): string => {
  return process.env[productionEnvTempName] as string
}

export const BACKEND_URL: string = getEnv("BACKEND_URL")
