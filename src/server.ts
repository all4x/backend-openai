import Fastify from 'fastify';
import { GetAllPromptsRouter } from './router/get-all-prompts';
import { uploadVideoRoute } from './router/upload-videos';
import { createTranscriptionRoute } from './router/create-transcription';
import { generateAiCompletionRoute } from './router/generate-ai-completion';

export const app = Fastify({
  logger: true
});

app.register(GetAllPromptsRouter)
app.register(uploadVideoRoute)
app.register(createTranscriptionRoute)
app.register(generateAiCompletionRoute)

app.listen({ port: 3000 }).then(() => {
  console.log('Server is ready!')
})
