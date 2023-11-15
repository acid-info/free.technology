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
`

const ProfileImage = styled.img`
  width: auto;
  height: auto;
  margin-bottom: 16px;
`

const Name = styled.p`
  font-size: 22px;
  font-weight: 400;
  line-height: 26px;
  text-transform: capitalize;
  margin-bottom: 8px;
`

const Position = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  text-transform: capitalize;
  opacity: 0.5;
`

export default ProfileCard
