'use client'

import { useState, useEffect } from 'react'
import { Typography, Switch, Row, Col, Spin } from 'antd'
import { SettingOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function SettingsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const {
    data: settings,
    isLoading,
    refetch,
  } = Api.settings.findUnique.useQuery({
    where: { userId: user?.id },
  })

  const { mutateAsync: updateSettings } = Api.settings.update.useMutation()

  const [feature1Enabled, setFeature1Enabled] = useState(false)
  const [feature2Enabled, setFeature2Enabled] = useState(false)

  useEffect(() => {
    if (settings) {
      setFeature1Enabled(settings.feature1Enabled)
      setFeature2Enabled(settings.feature2Enabled)
    }
  }, [settings])

  const handleFeature1Change = async (checked: boolean) => {
    try {
      await updateSettings({
        where: { userId: user?.id },
        data: { feature1Enabled: checked },
      })
      setFeature1Enabled(checked)
      enqueueSnackbar('Feature 1 setting updated successfully', {
        variant: 'success',
      })
    } catch (error) {
      enqueueSnackbar('Failed to update Feature 1 setting', {
        variant: 'error',
      })
    }
  }

  const handleFeature2Change = async (checked: boolean) => {
    try {
      await updateSettings({
        where: { userId: user?.id },
        data: { feature2Enabled: checked },
      })
      setFeature2Enabled(checked)
      enqueueSnackbar('Feature 2 setting updated successfully', {
        variant: 'success',
      })
    } catch (error) {
      enqueueSnackbar('Failed to update Feature 2 setting', {
        variant: 'error',
      })
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
      <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
        <Col span={24} style={{ textAlign: 'center' }}>
          <Title level={2}>
            <SettingOutlined /> Extension Settings
          </Title>
          <Text>
            Configure your extension settings to personalize your experience.
          </Text>
          <Row gutter={[16, 16]} style={{ marginTop: '20px' }}>
            <Col span={24}>
              <Text>Enable Feature 1</Text>
              <Switch
                checked={feature1Enabled}
                onChange={handleFeature1Change}
              />
            </Col>
            <Col span={24}>
              <Text>Enable Feature 2</Text>
              <Switch
                checked={feature2Enabled}
                onChange={handleFeature2Change}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </PageLayout>
  )
}
