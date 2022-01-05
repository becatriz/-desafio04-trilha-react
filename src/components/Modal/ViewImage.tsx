import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
  Text,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  console.log(imgUrl);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalBody>
          <Image
            src={imgUrl}
            alt="Image card"
            htmlWidth="900px"
            htmlHeight="600px"
          />
          <ModalFooter color="gray.600">
            <Link href={imgUrl} isExternal color="gray.800">
              Abrir original
            </Link>
          </ModalFooter>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
