'use client'

import { Prisma } from '@prisma/client'
import {
  Typography,
  Button,
  List,
  Space,
  Popconfirm,
  Modal,
  Form,
  Input,
} from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { useState } from 'react'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function MyVideosPage() {
  const router = useRouter()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [editingVideo, setEditingVideo] =
    useState<
      Prisma.VideoGetPayload<{
        include: { videoTags: true; videoComments: true }
      }>
    >()
  const [form] = Form.useForm()

  const {
    data: videos,
    isLoading,
    refetch,
  } = Api.video.findMany.useQuery({
    where: { userId: user?.id },
    include: { videoTags: true, videoComments: true },
  })

  const { mutateAsync: updateVideo } = Api.video.update.useMutation()
  const { mutateAsync: deleteVideo } = Api.video.delete.useMutation()

  const handleEdit = (
    video: Prisma.VideoGetPayload<{
      include: { videoTags: true; videoComments: true }
    }>,
  ) => {
    setEditingVideo(video)
    form.setFieldsValue(video)
    setIsModalVisible(true)
  }

  const handleDelete = async (id: string) => {
    await deleteVideo({ where: { id } })
    enqueueSnackbar('Video deleted successfully', { variant: 'success' })
    refetch()
  }

  const handleModalOk = async () => {
    const values = form.getFieldsValue()
    await updateVideo({ where: { id: editingVideo?.id }, data: values })
    enqueueSnackbar('Video updated successfully', { variant: 'success' })
    setIsModalVisible(false)
    refetch()
  }

  const handleModalCancel = () => {
    setIsModalVisible(false)
  }

  return (
    <PageLayout layout="full-width">
      <Title level={2}>My Videos</Title>
      <Text>Manage your video content below.</Text>
      <List
        loading={isLoading}
        dataSource={videos}
        renderItem={video => (
          <List.Item
            actions={[
              <Button icon={<EditOutlined />} onClick={() => handleEdit(video)}>
                Edit
              </Button>,
              <Popconfirm
                title="Are you sure to delete this video?"
                onConfirm={() => handleDelete(video.id)}
                okText="Yes"
                cancelText="No"
              >
                <Button danger icon={<DeleteOutlined />}>
                  Delete
                </Button>
              </Popconfirm>,
            ]}
          >
            <List.Item.Meta
              title={video.title}
              description={video.description}
            />
          </List.Item>
        )}
      />
      <Modal
        title="Edit Video"
        visible={isModalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="title"
            label="Title"
            rules={[{ required: true, message: 'Please input the title!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="description"
            label="Description"
            rules={[
              { required: true, message: 'Please input the description!' },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </PageLayout>
  )
}
