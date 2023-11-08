import styled from '@emotion/styled'

export type TagsProps = React.ComponentProps<typeof TagsContainer> & {
  tags: string[]
}

const Tags: React.FC<TagsProps> = ({ tags, className, ...props }) => {
  return tags?.length > 0 ? (
    <TagsContainer className={className} {...props}>
      {tags.map((tag, idx) => (
        <Tag key={idx}>{tag}</Tag>
      ))}
    </TagsContainer>
  ) : null
}

const TagsContainer = styled.div`
  display: flex;
  padding: 16px 0px;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
  border-top: 1px solid rgba(0, 0, 0, 0.18);
  border-bottom: 1px solid rgba(0, 0, 0, 0.18);
  margin-block: 16px;
`

const Tag = styled.div`
  display: flex;
  padding: 4px 12px;
  justify-content: center;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  border-radius: 99px;
  border: 1px solid #000;
  background: #fff;
`

export default Tags
