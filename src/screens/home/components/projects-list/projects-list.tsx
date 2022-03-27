import React, { useEffect, useState } from "react"
import { Flex, Grid, IconButton, Text } from "@chakra-ui/react"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"

import { HeadingSystem } from "#/common/components/heading/heading-system"
import { useProjects } from "#/hooks/use-projects/use-projects"
import { ProjectBox } from "#/screens/home/components/project-box/project-box"
import { Loader } from "#/common/components/loader/loader"
import { usePagination } from "#/hooks/use-pagination/use-pagination"
import { ProjectType } from "#/graphql/types/project"

const firstPage = 1

export const ProjectsList = (): React.ReactElement => {
  const [page, setPage] = useState<number>(firstPage)
  const [filteredProjects, setFilteredProjects] = useState<ProjectType[]>([])
  const [initialProjects, setInitialProjects] = useState<ProjectType[]>([])
  const [endOfPagination, setEndOfPagination] = useState<boolean>(true)
  const [hasItemsToScroll, setHasItemsToScroll] = useState<boolean>(false)

  const { data, isLoading } = useProjects()

  useEffect(() => {
    const { firstElements, paginatedList, endOfPagination, hasItemsToScroll } =
      // eslint-disable-next-line react-hooks/rules-of-hooks
      usePagination<ProjectType>(data as ProjectType[], page)

    setFilteredProjects([...paginatedList])
    setInitialProjects([...firstElements])
    setEndOfPagination(endOfPagination)
    setHasItemsToScroll(hasItemsToScroll)
  }, [data, page])

  const renderLoaderWhenLoading = (): React.ReactElement => <Loader />
  const renderProjectContent = (): React.ReactElement => {
    return (
      <React.Fragment>
        <Grid
          mt={6}
          gap={6}
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)"
          }}
        >
          {page > 1
            ? mapProjects(filteredProjects)
            : mapProjects(initialProjects)}
        </Grid>

        {hasItemsToScroll && (
          <Flex alignItems="center" justify="center">
            {endOfPagination ? (
              <IconButton
                colorScheme="purple"
                aria-label="Chevron up to show less projects"
                icon={<FiChevronUp />}
                onClick={() => setPage(page - 1)}
                my={4}
              />
            ) : (
              <IconButton
                colorScheme="purple"
                aria-label="Chevron down to show more projects"
                icon={<FiChevronDown />}
                onClick={() => setPage(page + 1)}
                my={4}
              />
            )}
          </Flex>
        )}
      </React.Fragment>
    )
  }

  const mapProjects = (list: ProjectType[]): React.ReactElement => {
    return (
      <>
        {(list ?? []).map((project) => (
          <ProjectBox key={project.name} {...project} />
        ))}
      </>
    )
  }

  return (
    <React.Fragment>
      <HeadingSystem my={6}>Projects</HeadingSystem>
      <Text fontSize={{ base: "1rem", md: "1.2rem" }}>
        Some projects that I really liked to develop :)
      </Text>
      {isLoading ? renderLoaderWhenLoading() : renderProjectContent()}
    </React.Fragment>
  )
}
