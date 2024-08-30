'use client'

import { Prisma } from '@prisma/client'
import { Typography, Row, Col, Card } from 'antd'
import {
  HomeOutlined,
  VideoCameraOutlined,
  SettingOutlined,
  UploadOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function HomePage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const { data: features, isLoading: isLoadingFeatures } =
    Api.video.findMany.useQuery({})

  const navigateTo = (path: string) => {
    router.push(path)
  }

  return (
    <PageLayout layout="full-width">
      <Row
        justify="center"
        style={{ textAlign: 'center', marginBottom: '20px' }}
      >
        <Col span={24}>
          <Title level={2}>Extension Overview</Title>
          <Paragraph>
            Discover the amazing features of our extension and easily navigate
            through its functionalities.
          </Paragraph>
        </Col>
      </Row>
      <Row justify="center" gutter={[16, 16]}>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card
            hoverable
            onClick={() => navigateTo('/video-generation')}
            cover={
              <VideoCameraOutlined
                style={{ fontSize: '48px', margin: '20px 0' }}
              />
            }
          >
            <Card.Meta
              title="Video Generation"
              description="Create and edit videos using our AI-powered tools."
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card
            hoverable
            onClick={() => navigateTo('/my-videos')}
            cover={
              <HomeOutlined style={{ fontSize: '48px', margin: '20px 0' }} />
            }
          >
            <Card.Meta
              title="My Videos"
              description="View and manage your video library."
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card
            hoverable
            onClick={() => navigateTo('/ai-settings')}
            cover={
              <SettingOutlined style={{ fontSize: '48px', margin: '20px 0' }} />
            }
          >
            <Card.Meta
              title="AI Settings"
              description="Configure AI settings for better video generation."
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card
            hoverable
            onClick={() => navigateTo('/upload-files')}
            cover={
              <UploadOutlined style={{ fontSize: '48px', margin: '20px 0' }} />
            }
          >
            <Card.Meta
              title="Upload Files"
              description="Upload your files to use in video generation."
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card
            hoverable
            onClick={() => navigateTo('/help-support')}
            cover={
              <QuestionCircleOutlined
                style={{ fontSize: '48px', margin: '20px 0' }}
              />
            }
          >
            <Card.Meta
              title="Help & Support"
              description="Get help and support for using the extension."
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card
            hoverable
            onClick={() => navigateTo('/settings')}
            cover={
              <SettingOutlined style={{ fontSize: '48px', margin: '20px 0' }} />
            }
          >
            <Card.Meta
              title="Settings"
              description="Manage your account settings."
            />
          </Card>
        </Col>
      </Row>
    </PageLayout>
  )
}
