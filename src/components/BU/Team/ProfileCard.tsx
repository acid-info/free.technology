import { breakpoints } from '@/configs/ui.configs'
import styled from '@emotion/styled'

type Props = {
  name: string
  position: string
  imageUrl: string
}

const ProfileCard = ({ name, position, imageUrl }: Props) => (
  <Card>
    <ProfileImage src={imageUrl} alt={name} />
    <Name>{name}</Name>
    <Position>{position}</Position>
  </Card>
)

const Card = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`

const ProfileImage = styled.img`
  width: auto;
  height: auto;
  margin-bottom: 16px;

  @media (max-width: ${breakpoints.md}px) {
    margin-bottom: 8px;
  }
`

const Name = styled.p`
  font-size: 22px;
  font-weight: 400;
  line-height: 26px;
  text-transform: capitalize;
  margin-bottom: 8px;

  @media (max-width: ${breakpoints.md}px) {
    font-size: 14px;
    line-height: 130%;
    margin-bottom: 4px;
  }
`

const Position = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  text-transform: capitalize;
  opacity: 0.5;

  @media (max-width: ${breakpoints.md}px) {
    font-size: 12px;
    line-height: 130%;
  }
`

export default ProfileCard
