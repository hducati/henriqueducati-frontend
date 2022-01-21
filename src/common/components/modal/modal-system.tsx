import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay
} from "@chakra-ui/react"
import { ModalSystemProps } from "./types"

export const ModalSystem = ({
  title,
  description,
  isOpen,
  onClose
}: ModalSystemProps): React.ReactElement => {
  return (
    <Modal isOpen={isOpen!} onClose={onClose!}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{description}</ModalBody>
      </ModalContent>
    </Modal>
  )
}
