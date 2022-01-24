import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/react"
import { FooterProps } from "#/common/components/footer/types"
import Image from "next/image"
import Link from "next/link"
import React from "react"

const FooterElement = ({ social_medias }: FooterProps): React.ReactElement => {
  const hasSocialMedias = !!social_medias

  return (
    <Flex
      p={4}
      as="footer"
      bg={"purple.500"}
      color={"white"}
      align="center"
      justify="center"
      w="100%"
    >
      <VStack spacing={2}>
        {hasSocialMedias && <Text fontSize="xl">Follow me on:</Text>}
        <HStack>
          {hasSocialMedias
            ? social_medias.map((social_media) => (
                <Box
                  key={`box-${social_media.social_media_category.name}`}
                  cursor="pointer"
                >
                  <Link href={social_media.link} passHref>
                    <a>
                      <Image
                        src={`${process.env.NEXT_PUBLIC_REACT_APP_IMAGE_BASE_URL}${social_media.social_media_category.icon.url}`}
                        width={52}
                        height={46}
                        alt={social_media.social_media_category.name}
                      />
                    </a>
                  </Link>
                </Box>
              ))
            : ""}
        </HStack>
      </VStack>
    </Flex>
  )
}

export const Footer = React.memo(FooterElement)
