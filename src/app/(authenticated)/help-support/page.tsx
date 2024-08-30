'use client'

import { Typography, Row, Col } from 'antd'
import { FileTextOutlined, MailOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useSnackbar } from 'notistack'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function HelpSupportPage() {
  const { enqueueSnackbar } = useSnackbar()

  return (
    <PageLayout layout="full-width">
      <Row justify="center" style={{ textAlign: 'center', padding: '20px' }}>
        <Col span={24}>
          <Title level={2}>Help & Support</Title>
          <Text>
            Find the resources you need to use the extension effectively and get
            assistance with any issues you encounter.
          </Text>
        </Col>
      </Row>
      <Row
        justify="center"
        gutter={[16, 16]}
        style={{ textAlign: 'center', padding: '20px' }}
      >
        <Col xs={24} sm={12} md={8}>
          <Button
            type="primary"
            icon={<FileTextOutlined />}
            size="large"
            disabled
          >
            Access Help Documentation
          </Button>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Button type="primary" icon={<MailOutlined />} size="large" disabled>
            Contact Support
          </Button>
        </Col>
      </Row>
    </PageLayout>
  )
}
