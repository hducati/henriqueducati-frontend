import { ProfileSection } from "#/screens/home/components/profile-section/profile-section"
import { ProjectsList } from "#/screens/home/components/projects-list/projects-list"
import { TechnologiesList } from "#/screens/home/components/technologies-list/technologies-list"

export const HomeScreen = (): React.ReactElement => {
  return (
    <>
      <ProfileSection />
      <ProjectsList />
      <TechnologiesList />
    </>
  )
}
