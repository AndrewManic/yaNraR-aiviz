'use client'

import { useState } from 'react'
import { Prisma } from '@prisma/client'
import {
  Typography,
  Select,
  Form,
  InputNumber,
  Button,
  Row,
  Col,
  Spin,
} from 'antd'
import { SettingOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
const { Option } = Select
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function AISettingsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const { data: models, isLoading: modelsLoading } =
    Api.model.findMany.useQuery({})
  const { mutateAsync: updateSettings } = Api.settings.update.useMutation()

  const [selectedModel, setSelectedModel] = useState<string | undefined>(
    undefined,
  )
  const [temperature, setTemperature] = useState<number>(0.7)
  const [maxTokens, setMaxTokens] = useState<number>(1000)

  const handleModelChange = (value: string) => {
    setSelectedModel(value)
  }

  const handleUpdateSettings = async () => {
    try {
      await updateSettings({
        where: { userId: user.id },
        data: { model: selectedModel, temperature, maxTokens },
      })
      enqueueSnackbar('Settings updated successfully', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to update settings', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="full-width">
      <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
        <Col xs={24} sm={20} md={16} lg={12} xl={8}>
          <Title level={2} style={{ textAlign: 'center' }}>
            AI Model Settings
          </Title>
          <Paragraph style={{ textAlign: 'center' }}>
            Configure your AI model settings to customize how the video content
            is generated.
          </Paragraph>
          {modelsLoading ? (
            <Spin size="large" style={{ display: 'block', margin: 'auto' }} />
          ) : (
            <Form layout="vertical" onFinish={handleUpdateSettings}>
              <Form.Item label="Select AI Model" required>
                <Select
                  placeholder="Select a model"
                  onChange={handleModelChange}
                  value={selectedModel}
                >
                  {models?.map((model: Prisma.ModelGetPayload<{}>) => (
                    <Option key={model.id} value={model.id}>
                      {model.name}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item label="Temperature" required>
                <InputNumber
                  min={0}
                  max={1}
                  step={0.1}
                  value={temperature}
                  onChange={setTemperature}
                  style={{ width: '100%' }}
                />
              </Form.Item>
              <Form.Item label="Max Tokens" required>
                <InputNumber
                  min={1}
                  max={2048}
                  value={maxTokens}
                  onChange={setMaxTokens}
                  style={{ width: '100%' }}
                />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  icon={<SettingOutlined />}
                  block
                >
                  Update Settings
                </Button>
              </Form.Item>
            </Form>
          )}
        </Col>
      </Row>
    </PageLayout>
  )
}
