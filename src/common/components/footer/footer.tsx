import { usePerson } from "#/hooks/use-person"
import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/react"
import Image from "next/image"
import Link from "next/link"
import React from "react"

const FooterElement = (): React.ReactElement => {
  const { data } = usePerson()

  const hasSocialMedias = !!data?.social_medias

  return (
    <Flex
      p={2}
      mt={6}
      as="footer"
      bg={"primary"}
      color={"white"}
      align="center"
      justify="center"
      w="100%"
    >
      <VStack spacing={2}>
        {hasSocialMedias && (
          <Text fontSize="xl">Keep connected with my work:</Text>
        )}
        <HStack>
          {hasSocialMedias
            ? data.social_medias.map((socialMedia) => (
                <Box
                  key={`box-${socialMedia.social_media_category.name}`}
                  cursor="pointer"
                >
                  <Link href={socialMedia.link} passHref>
                    <a>
                      <Image
                        src={`${process.env.NEXT_PUBLIC_REACT_APP_IMAGE_BASE_URL}${socialMedia.social_media_category.icon.url}`}
                        width={52}
                        height={46}
                        alt={socialMedia.social_media_category.name}
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
