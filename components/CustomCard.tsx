import { FC } from 'react'
import { Badge, Button, Card, Group, Image, Text } from '@mantine/core'

type CustomCardProps = {
  title: string
  content: string
  status: string
  postUrl: string
}

export const CustomCard: FC<CustomCardProps> = ({
  title,
  content,
  status,
  postUrl,
}) => {
  return (
    <Card shadow="md" className="h-full max-w-lg">
      <Card.Section>
        <Image
          src={postUrl}
          height={220}
          fit="contain"
          className="object-contain"
          alt="With default placeholder"
          withPlaceholder
        />
      </Card.Section>
      <Group position="apart" my="md">
        <Text weight={800}>{title}</Text>
        <Badge color="pink" radius="lg" variant="filled">
          {status}
        </Badge>
      </Group>
      <Text size="sm">{content}</Text>
      <Button
        onClick={() => alert('click!!')}
        mt="md"
        size="xs"
        variant="light"
        color="indigo"
        fullWidth
      >
        Subscribe
      </Button>
    </Card>
  )
}
