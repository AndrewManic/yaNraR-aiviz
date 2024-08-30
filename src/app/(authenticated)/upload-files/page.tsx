'use client'

import { useState } from 'react'
import { Typography, Upload, Button, List, Space, Spin, Modal } from 'antd'
import {
  UploadOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons'
const { Title, Text } = Typography
const { confirm } = Modal
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function UploadFilesPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const { mutateAsync: upload } = useUploadPublic()
  const {
    data: files,
    isLoading,
    refetch,
  } = Api.ragVector.findMany.useQuery({ where: { userId: user?.id } })
  const { mutateAsync: deleteFile } = Api.ragVector.delete.useMutation()
  const [uploading, setUploading] = useState(false)

  const handleUpload = async ({ file }: any) => {
    setUploading(true)
    try {
      const response = await upload({ file })
      await Api.ragVector.create.useMutation()({
        data: {
          key: file.name,
          tags: [],
          userId: user?.id,
        },
      })
      enqueueSnackbar('File uploaded successfully', { variant: 'success' })
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to upload file', { variant: 'error' })
    } finally {
      setUploading(false)
    }
  }

  const handleDelete = async (id: string) => {
    confirm({
      title: 'Are you sure you want to delete this file?',
      icon: <ExclamationCircleOutlined />,
      onOk: async () => {
        try {
          await deleteFile({ where: { id } })
          enqueueSnackbar('File deleted successfully', { variant: 'success' })
          refetch()
        } catch (error) {
          enqueueSnackbar('Failed to delete file', { variant: 'error' })
        }
      },
    })
  }

  return (
    <PageLayout layout="full-width">
      <Space
        direction="vertical"
        style={{ width: '100%', textAlign: 'center' }}
      >
        <Title level={2}>Upload and Manage Files</Title>
        <Text>
          Upload files to enhance your video content with additional media.
        </Text>
        <Upload customRequest={handleUpload} showUploadList={false}>
          <Button icon={<UploadOutlined />} loading={uploading}>
            Upload File
          </Button>
        </Upload>
        {isLoading ? (
          <Spin />
        ) : (
          <List
            bordered
            dataSource={files}
            renderItem={file => (
              <List.Item
                actions={[
                  <Button
                    type="link"
                    icon={<DeleteOutlined />}
                    onClick={() => handleDelete(file.id)}
                  >
                    Delete
                  </Button>,
                ]}
              >
                <List.Item.Meta
                  title={file.key}
                  description={`Uploaded on ${dayjs(file.dateCreated).format('YYYY-MM-DD HH:mm')}`}
                />
              </List.Item>
            )}
          />
        )}
      </Space>
    </PageLayout>
  )
}
