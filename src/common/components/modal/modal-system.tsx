import {
  Box,
  Divider,
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
  children,
  isOpen,
  onClose
}: ModalSystemProps): React.ReactElement => {
  return (
    <Modal isOpen={isOpen!} onClose={onClose!} motionPreset="slideInBottom">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box dangerouslySetInnerHTML={{ __html: description }} />
          <Divider py={2} />
          {children}
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
