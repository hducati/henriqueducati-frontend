import { ProfileSection } from "#/screens/home/components/profile-section/profile-section"
import { HomeProps } from "#/screens/home/types/home-props"
import { ProjectsList } from "./components/projects-list/projects-list"
import { Base } from "#/templates/base/base"

export const HomeScreen = ({ person }: HomeProps): React.ReactElement => {
  return (
    <Base socialMedias={person.social_medias}>
      <ProfileSection person={person} />
      <ProjectsList />
    </Base>
  )
}
