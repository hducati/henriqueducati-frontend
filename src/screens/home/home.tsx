import { ProfileSection } from "#/screens/home/components/profile-section/profile-section"
import { ProjectsList } from "./components/projects-list/projects-list"

export const HomeScreen = (): React.ReactElement => {
  return (
    <>
      <ProfileSection />
      <ProjectsList />
    </>
  )
}
