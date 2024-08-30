'use client'

import { Typography, Button, Row, Col, Spin } from 'antd'
import { DownloadOutlined, ShareAltOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function VideoDetailsPage() {
  const router = useRouter()
  const params = useParams<{ videoId: string }>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const { data: video, isLoading } = Api.video.findUnique.useQuery({
    where: { id: params.videoId },
    include: { user: true, videoTags: true, videoComments: true },
  })

  const handleDownload = () => {
    if (video?.url) {
      const link = document.createElement('a')
      link.href = video.url
      link.download = video.title || 'video'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      enqueueSnackbar('Video downloaded successfully', { variant: 'success' })
    } else {
      enqueueSnackbar('Video URL not found', { variant: 'error' })
    }
  }

  const handleShare = () => {
    if (video?.url) {
      navigator.clipboard.writeText(video.url)
      enqueueSnackbar('Video link copied to clipboard', { variant: 'success' })
    } else {
      enqueueSnackbar('Video URL not found', { variant: 'error' })
    }
  }

  if (isLoading) {
    return (
      <PageLayout layout="full-width">
        <Spin size="large" />
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="full-width">
      <Row justify="center" align="middle" style={{ textAlign: 'center' }}>
        <Col span={24}>
          <Title level={2}>Video Details</Title>
          <Paragraph>
            View and manage the details of the selected video.
          </Paragraph>
        </Col>
        <Col span={24}>
          <Title level={3}>{video?.title}</Title>
          <Paragraph>{video?.description}</Paragraph>
          <Text type="secondary">Uploaded by: {video?.user?.name}</Text>
          <br />
          <Text type="secondary">
            Uploaded on: {dayjs(video?.dateCreated).format('MMMM D, YYYY')}
          </Text>
          <br />
          <Button
            type="primary"
            icon={<DownloadOutlined />}
            onClick={handleDownload}
            style={{ margin: '10px' }}
          >
            Download
          </Button>
          <Button
            type="default"
            icon={<ShareAltOutlined />}
            onClick={handleShare}
            style={{ margin: '10px' }}
          >
            Share
          </Button>
        </Col>
      </Row>
    </PageLayout>
  )
}
