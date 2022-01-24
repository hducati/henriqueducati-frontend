import { UseDisclosureProps } from "@chakra-ui/react"

export type ModalSystemProps = {
  title: string
  description: string
  children: React.ReactElement
} & UseDisclosureProps
