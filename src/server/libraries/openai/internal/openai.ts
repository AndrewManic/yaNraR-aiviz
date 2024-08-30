import { ReadStream } from 'fs'
import OpenaiSDK from 'openai'
import { zodResponseFormat } from 'openai/helpers/zod'
import { ParsedChatCompletion } from 'openai/resources/beta/chat/completions'
import { z, ZodType } from 'zod'

enum OpenaiModel {
  DEFAULT = 'gpt-4o-mini',
  JSON = 'gpt-4o-mini',
  IMAGE = 'dall-e-3',
  AUDIO_TO_TEXT = 'whisper-1',
  TEXT_TO_AUDIO = 'tts-1',
}

export class Openai {
  private api: OpenaiSDK

  constructor() {
    this.initialize()
  }

  private initialize(): void {
    try {
      const apiKey = process.env.SERVER_OPENAI_API_KEY

      if (!apiKey) {
        console.log(`Set SERVER_OPENAI_API_KEY in your .env to activate OpenAI`)
        return
      }

      this.api = new OpenaiSDK({ apiKey })

      console.log(`Openai is active`)
    } catch (error) {
      console.error(`Openai failed to start`)
    }
  }

  isActive(): boolean {
    if (this.api) {
      return true
    } else {
      return false
    }
  }

  async generateText(
    prompt: string,
    attachmentUrls?: string[],
  ): Promise<string> {
    const messages = this.buildMessages(prompt, attachmentUrls)

    const response = await this.api.chat.completions.create({
      model: OpenaiModel.DEFAULT,
      messages: messages,
    })

    const content = this.parseResponseContent(response)

    return content
  }

  async generateJson<
    SchemaType extends ZodType,
    JsonType = z.infer<SchemaType>,
  >(
    instruction: string,
    content: string,
    schema: SchemaType,
    attachmentUrls?: string[],
  ): Promise<JsonType> {
    const messages = this.buildMessages(content, attachmentUrls)

    const response = await this.api.beta.chat.completions.parse({
      model: OpenaiModel.JSON,
      messages: [{ role: 'system', content: instruction }, ...messages],
      response_format: zodResponseFormat(schema, 'result'),
    })

    const json = this.parseResponseJson<JsonType>(response)

    return json
  }

  async generateImage(prompt: string): Promise<string> {
    const response = await this.api.images.generate({
      model: OpenaiModel.IMAGE,
      prompt: prompt,
    })

    const imageUrl = this.parseResponseImage(response)

    return imageUrl
  }

  async fromAudioToText(readStream: ReadStream): Promise<string> {
    const transcription = await this.api.audio.transcriptions.create({
      file: readStream,
      model: OpenaiModel.AUDIO_TO_TEXT,
    })

    return transcription.text
  }

  async fromTextToAudio(text: string): Promise<Buffer> {
    const mp3 = await this.api.audio.speech.create({
      model: OpenaiModel.TEXT_TO_AUDIO,
      voice: 'alloy',
      input: text,
    })

    const buffer = Buffer.from(await mp3.arrayBuffer())

    return buffer
  }

  private buildMessages(content: string, attachmentUrls: string[] = []) {
    const message = {
      role: 'user',
      content: [
        { type: 'text', text: content },
        ...attachmentUrls.map(url => ({
          type: 'image_url',
          image_url: { url },
        })),
      ],
    }

    return [message] as OpenaiSDK.Chat.Completions.ChatCompletionMessageParam[]
  }

  private parseResponseContent(
    response: OpenaiSDK.Chat.Completions.ChatCompletion,
  ): string {
    return response.choices[0].message.content
  }

  private parseResponseImage(
    response: OpenaiSDK.Images.ImagesResponse,
  ): string {
    return response.data[0].url
  }

  private parseResponseJson<JsonType = unknown>(
    response: ParsedChatCompletion<JsonType>,
  ) {
    return response.choices[0].message.parsed
  }
}
