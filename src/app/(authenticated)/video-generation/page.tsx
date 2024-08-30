'use client'

import { useState } from 'react'
import {
  Typography,
  Input,
  Button,
  Upload,
  message,
  Row,
  Col,
  Spin,
  Card,
} from 'antd'
import {
  UploadOutlined,
  VideoCameraOutlined,
  EyeOutlined,
} from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function VideoGenerationPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const { mutateAsync: createVideo } = Api.video.create.useMutation()
  const { mutateAsync: upload } = useUploadPublic()

  const [text, setText] = useState<string>('')
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [audioFile, setAudioFile] = useState<File | null>(null)
  const [videoUrl, setVideoUrl] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const handleImageUpload = async (file: File) => {
    setImageFile(file)
    return false
  }

  const handleAudioUpload = async (file: File) => {
    setAudioFile(file)
    return false
  }

  const handleGenerateVideo = async () => {
    if (!text) {
      enqueueSnackbar('Please enter some text to generate the video.', {
        variant: 'error',
      })
      return
    }

    setLoading(true)

    try {
      let imageUrl = ''
      let audioUrl = ''

      if (imageFile) {
        const { url } = await upload({ file: imageFile })
        imageUrl = url
      }

      if (audioFile) {
        const { url } = await upload({ file: audioFile })
        audioUrl = url
      }

      const videoData = {
        title: 'Generated Video',
        description: text,
        user: { connect: { id: user?.id } },
        status: 'draft',
        url: '', // Placeholder, assuming the API will generate the video URL
        videoTags: { create: [] },
        videoComments: { create: [] },
      }

      const newVideo = await createVideo({ data: videoData })
      setVideoUrl(newVideo.url)
      enqueueSnackbar('Video generated successfully!', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to generate video.', { variant: 'error' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <PageLayout layout="full-width">
      <Row justify="center" style={{ marginTop: '20px' }}>
        <Col xs={24} md={16} lg={12}>
          <Card>
            <Title level={2}>Generate Video Content</Title>
            <Text>
              Input text to generate video content, upload images or audio files
              to customize your video, and preview the generated video.
            </Text>
            <Input
              placeholder="Enter text to generate video"
              value={text}
              onChange={handleTextChange}
              style={{ margin: '20px 0' }}
            />
            <Upload beforeUpload={handleImageUpload} showUploadList={false}>
              <Button icon={<UploadOutlined />}>Upload Image</Button>
            </Upload>
            <Upload beforeUpload={handleAudioUpload} showUploadList={false}>
              <Button icon={<UploadOutlined />}>Upload Audio</Button>
            </Upload>
            <Button
              type="primary"
              icon={<VideoCameraOutlined />}
              onClick={handleGenerateVideo}
              style={{ marginTop: '20px' }}
              loading={loading}
            >
              Generate Video
            </Button>
            {loading && <Spin style={{ marginLeft: '10px' }} />}
            {videoUrl && (
              <div style={{ marginTop: '20px' }}>
                <Button
                  type="link"
                  icon={<EyeOutlined />}
                  href={videoUrl}
                  target="_blank"
                >
                  Preview Video
                </Button>
              </div>
            )}
          </Card>
        </Col>
      </Row>
    </PageLayout>
  )
}
