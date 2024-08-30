import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const splitSql = (sql: string) => {
  return sql.split(';').filter(content => content.trim() !== '')
}

async function main() {
  const sql = `

INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('b2f5731d-a1ab-46a8-b9f4-c7215f707881', '8Vince_Volkman@hotmail.com', 'David Brown', 'https://i.imgur.com/YfJQV5z.png?id=10', 'inv09876', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('773a6f4e-2846-438f-8fc4-4a4b1851adf9', '15Zack.Hickle@hotmail.com', 'David Brown', 'https://i.imgur.com/YfJQV5z.png?id=17', 'inv12345', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('fcf941ea-2863-4255-a68d-723f3ea6aab9', '22Jennyfer32@gmail.com', 'Emily Clark', 'https://i.imgur.com/YfJQV5z.png?id=24', 'inv09876', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('b7473e06-52e6-457c-adfa-5a4b42bbbe6e', '29Clotilde_Ryan73@hotmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=31', 'inv54321', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('94a626bd-9a9c-473c-995f-6be5f6489f81', '36Madaline_Little58@gmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=38', 'inv67890', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('f53f8268-2073-4517-b88e-d47ed3a602b6', '43Miles57@yahoo.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=45', 'inv09876', 'suspended', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('578a756b-48a3-49e8-991e-7547b90b7b80', '50Mittie71@gmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=52', 'inv11223', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('b5d3adb3-4555-435d-81f9-5c88ded99273', '57Walton.Greenfelder41@yahoo.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=59', 'inv11223', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('e969efc5-f6df-478c-97a4-a8675d5a8349', '64Pauline.Bernhard@hotmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=66', 'inv67890', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('d151d9e1-759c-49aa-9007-689ef612a675', 'c3d4e5f6a7b8', '{"adimpleo":"vulticulus","torqueo":"corona","ascisco":"dolore","voluptatibus":"confero"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('9f552f57-cfbe-430e-9a3c-5e1591c466ed', 'a3f5b1c2d4e6', '{"vomica":"nesciunt","celo":"veritatis","abstergo":"tremo","tabella":"vilis","solitudo":"animi"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('878433f0-79ae-4b60-bfa9-60fc7e80fb52', 'a3f5b1c2d4e6', '{"sollicito":"officia","audio":"triumphus","urbanus":"tergeo","vereor":"adficio"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('f52e1dc1-7f35-4240-85b4-3077ccf3bf92', 'd9e0f1a2b3c4', '{"depopulo":"tutamen","odit":"totus","volo":"sint","tui":"deleo"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('d7647542-6445-461c-b9c7-d2d87bc3b95c', 'c3d4e5f6a7b8', '{"vitiosus":"tutis","admitto":"cubicularis","thymbra":"verus"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('54896639-2d3b-424f-b422-6108b349baff', 'd9e0f1a2b3c4', '{"fugiat":"soleo","nulla":"ultra","attollo":"verbera"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('744e5f35-0dee-48c7-be00-c7d6f8e008fb', 'a3f5b1c2d4e6', '{"audeo":"expedita","terminatio":"earum","curto":"molestias","adipisci":"volutabrum","cubitum":"cursim"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('4aae5005-5a89-48ba-a8f7-64b215b69ab1', 'a3f5b1c2d4e6', '{"candidus":"cito","caelum":"vulnus","nesciunt":"arbor","possimus":"spiculum","vinitor":"tabella"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('d7f916dd-213f-44e0-b59c-559fdf2ab365', 'a3f5b1c2d4e6', '{"antepono":"acervus","cupio":"quos","minima":"chirographum","terra":"certus","sulum":"balbus"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('84c97685-6ac4-4633-96ba-b9afe982116e', 'a3f5b1c2d4e6', '{"admoneo":"aperiam","asper":"subnecto","aranea":"ipsa","iusto":"cena","deludo":"commodi"}'::jsonb);

INSERT INTO "Video" ("id", "title", "description", "url", "status", "userId") VALUES ('3eafed57-3e93-477e-952e-0f9c1e3bb3e8', 'AI in Everyday Life A Beginners Guide', 'An analysis of how technology is transforming the education sector.', 'https://i.imgur.com/YfJQV5z.png?id=103', 'Under Review', 'b2f5731d-a1ab-46a8-b9f4-c7215f707881');
INSERT INTO "Video" ("id", "title", "description", "url", "status", "userId") VALUES ('e2e6927a-b35b-4811-9813-b77ce0083474', 'Exploring the Future of AI', 'Discover the best Chrome extensions to boost your productivity.', 'https://i.imgur.com/YfJQV5z.png?id=108', 'Under Review', 'f53f8268-2073-4517-b88e-d47ed3a602b6');
INSERT INTO "Video" ("id", "title", "description", "url", "status", "userId") VALUES ('086e59bc-c0be-4f1e-baf9-e604f1e5f9b4', 'The Impact of Technology on Education', 'Discover the best Chrome extensions to boost your productivity.', 'https://i.imgur.com/YfJQV5z.png?id=113', 'Under Review', 'b7473e06-52e6-457c-adfa-5a4b42bbbe6e');
INSERT INTO "Video" ("id", "title", "description", "url", "status", "userId") VALUES ('eb89f292-ee36-4370-b16d-3ae4d91d96fa', 'The Impact of Technology on Education', 'An analysis of how technology is transforming the education sector.', 'https://i.imgur.com/YfJQV5z.png?id=118', 'Published', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Video" ("id", "title", "description", "url", "status", "userId") VALUES ('7e7e5243-4296-44f7-96ae-8958c9727266', 'AI in Everyday Life A Beginners Guide', 'An introductory guide to understanding AI and its applications.', 'https://i.imgur.com/YfJQV5z.png?id=123', 'Scheduled', 'b2f5731d-a1ab-46a8-b9f4-c7215f707881');
INSERT INTO "Video" ("id", "title", "description", "url", "status", "userId") VALUES ('6b49fac0-a469-4345-8668-a18435b06ace', 'AI in Everyday Life A Beginners Guide', 'An introductory guide to understanding AI and its applications.', 'https://i.imgur.com/YfJQV5z.png?id=128', 'Archived', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Video" ("id", "title", "description", "url", "status", "userId") VALUES ('fc1d5014-f251-48ca-9d2e-9ca950fe07d3', 'Top 10 Chrome Extensions for Productivity', 'An analysis of how technology is transforming the education sector.', 'https://i.imgur.com/YfJQV5z.png?id=133', 'Scheduled', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Video" ("id", "title", "description", "url", "status", "userId") VALUES ('eee569b6-1317-419d-ba6d-c16ea47e52d8', 'Top 10 Chrome Extensions for Productivity', 'Learn the secrets to creating videos that captivate your audience.', 'https://i.imgur.com/YfJQV5z.png?id=138', 'Under Review', '94a626bd-9a9c-473c-995f-6be5f6489f81');
INSERT INTO "Video" ("id", "title", "description", "url", "status", "userId") VALUES ('6ff0b7e0-d237-4590-a69e-524d01631ba8', 'Top 10 Chrome Extensions for Productivity', 'An analysis of how technology is transforming the education sector.', 'https://i.imgur.com/YfJQV5z.png?id=143', 'Draft', 'f53f8268-2073-4517-b88e-d47ed3a602b6');
INSERT INTO "Video" ("id", "title", "description", "url", "status", "userId") VALUES ('feeeeafd-8e4c-49de-bc3b-56047434107f', 'Top 10 Chrome Extensions for Productivity', 'An introductory guide to understanding AI and its applications.', 'https://i.imgur.com/YfJQV5z.png?id=148', 'Archived', '773a6f4e-2846-438f-8fc4-4a4b1851adf9');

INSERT INTO "VideoTag" ("id", "tag", "videoId") VALUES ('3b6a07d0-e4bd-44ba-a46e-9ca32bdf09d4', 'review', 'feeeeafd-8e4c-49de-bc3b-56047434107f');
INSERT INTO "VideoTag" ("id", "tag", "videoId") VALUES ('72693870-bb53-44a0-bad2-f63e75271503', 'vlog', '3eafed57-3e93-477e-952e-0f9c1e3bb3e8');
INSERT INTO "VideoTag" ("id", "tag", "videoId") VALUES ('01001d44-952c-4f10-83ba-e23592843c69', 'vlog', '6ff0b7e0-d237-4590-a69e-524d01631ba8');
INSERT INTO "VideoTag" ("id", "tag", "videoId") VALUES ('dd846395-1f27-40dd-a186-7db14ed028c5', 'tutorial', 'eee569b6-1317-419d-ba6d-c16ea47e52d8');
INSERT INTO "VideoTag" ("id", "tag", "videoId") VALUES ('9511ad3c-2359-4d5b-aed4-5feb8ccaeb38', 'tutorial', '086e59bc-c0be-4f1e-baf9-e604f1e5f9b4');
INSERT INTO "VideoTag" ("id", "tag", "videoId") VALUES ('b90c684a-96fd-4ee5-865c-a27ca7fa95e0', 'gaming', '6ff0b7e0-d237-4590-a69e-524d01631ba8');
INSERT INTO "VideoTag" ("id", "tag", "videoId") VALUES ('9e1575e0-f6f0-4749-8d27-84c1f1df271e', 'tutorial', '6b49fac0-a469-4345-8668-a18435b06ace');
INSERT INTO "VideoTag" ("id", "tag", "videoId") VALUES ('79a1fbe4-f585-4d73-b1f0-740018f84b0d', 'tutorial', '3eafed57-3e93-477e-952e-0f9c1e3bb3e8');
INSERT INTO "VideoTag" ("id", "tag", "videoId") VALUES ('9f256893-1943-41b2-912b-8d32b5835137', 'review', '6ff0b7e0-d237-4590-a69e-524d01631ba8');
INSERT INTO "VideoTag" ("id", "tag", "videoId") VALUES ('edf362ac-568e-481b-9678-11f4c393e741', 'tutorial', '3eafed57-3e93-477e-952e-0f9c1e3bb3e8');

INSERT INTO "VideoComment" ("id", "comment", "videoId", "userId") VALUES ('ed9bbc35-2c5a-452f-be69-1ca46e98c9b5', 'I didnt quite understand the part about AI models.', 'fc1d5014-f251-48ca-9d2e-9ca950fe07d3', '94a626bd-9a9c-473c-995f-6be5f6489f81');
INSERT INTO "VideoComment" ("id", "comment", "videoId", "userId") VALUES ('ff58602d-b64d-4674-973d-33ada948631f', 'Can you make a video on how to use this extension', '3eafed57-3e93-477e-952e-0f9c1e3bb3e8', 'b5d3adb3-4555-435d-81f9-5c88ded99273');
INSERT INTO "VideoComment" ("id", "comment", "videoId", "userId") VALUES ('c328240d-88a8-40bd-b029-1932cf750721', 'I didnt quite understand the part about AI models.', '6b49fac0-a469-4345-8668-a18435b06ace', '773a6f4e-2846-438f-8fc4-4a4b1851adf9');
INSERT INTO "VideoComment" ("id", "comment", "videoId", "userId") VALUES ('0a2c23f5-1799-4d1d-93c9-6b455b4e3389', 'The explanation was clear and concise well done', 'eee569b6-1317-419d-ba6d-c16ea47e52d8', 'fcf941ea-2863-4255-a68d-723f3ea6aab9');
INSERT INTO "VideoComment" ("id", "comment", "videoId", "userId") VALUES ('3b46237b-b12b-45f9-a426-ac32b799b688', 'The explanation was clear and concise well done', '6ff0b7e0-d237-4590-a69e-524d01631ba8', 'b5d3adb3-4555-435d-81f9-5c88ded99273');
INSERT INTO "VideoComment" ("id", "comment", "videoId", "userId") VALUES ('ac92c6ad-4edb-4868-86a7-7f956cda7a5c', 'Can you make a video on how to use this extension', 'eee569b6-1317-419d-ba6d-c16ea47e52d8', 'b7473e06-52e6-457c-adfa-5a4b42bbbe6e');
INSERT INTO "VideoComment" ("id", "comment", "videoId", "userId") VALUES ('ac308ef9-5eb1-43fe-b750-3b5e78cc53f9', 'The explanation was clear and concise well done', 'eee569b6-1317-419d-ba6d-c16ea47e52d8', 'b7473e06-52e6-457c-adfa-5a4b42bbbe6e');
INSERT INTO "VideoComment" ("id", "comment", "videoId", "userId") VALUES ('115309b5-ddd2-4be7-a312-b669369c1015', 'The explanation was clear and concise well done', 'eee569b6-1317-419d-ba6d-c16ea47e52d8', '94a626bd-9a9c-473c-995f-6be5f6489f81');
INSERT INTO "VideoComment" ("id", "comment", "videoId", "userId") VALUES ('1dee36e0-a01e-44a1-bd97-84f942adbe98', 'I didnt quite understand the part about AI models.', 'eb89f292-ee36-4370-b16d-3ae4d91d96fa', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "VideoComment" ("id", "comment", "videoId", "userId") VALUES ('7a766d77-5edb-41c0-9169-f79fdbd583b1', 'Can you make a video on how to use this extension', '7e7e5243-4296-44f7-96ae-8958c9727266', 'fcf941ea-2863-4255-a68d-723f3ea6aab9');

INSERT INTO "Subscription" ("id", "plan", "startDate", "endDate", "userId") VALUES ('10e57b9a-925a-42fe-b174-ad6e98708764', 'Enterprise', '2024-07-16T02:25:17.760Z', '2024-10-03T14:09:01.347Z', 'fcf941ea-2863-4255-a68d-723f3ea6aab9');
INSERT INTO "Subscription" ("id", "plan", "startDate", "endDate", "userId") VALUES ('bc19103e-bdef-4024-adce-6106769456fb', 'Enterprise', '2024-06-11T20:12:17.026Z', '2023-09-14T06:04:02.669Z', 'b2f5731d-a1ab-46a8-b9f4-c7215f707881');
INSERT INTO "Subscription" ("id", "plan", "startDate", "endDate", "userId") VALUES ('b8e481dd-1fab-4f91-ae71-f0f493dba38c', 'Pro', '2025-03-18T12:09:23.933Z', '2024-06-04T15:24:10.451Z', 'fcf941ea-2863-4255-a68d-723f3ea6aab9');
INSERT INTO "Subscription" ("id", "plan", "startDate", "endDate", "userId") VALUES ('86c91b08-75f9-45b2-b6fe-ea1281155167', 'Trial', '2024-08-10T02:28:43.688Z', '2024-10-05T20:52:49.290Z', '578a756b-48a3-49e8-991e-7547b90b7b80');
INSERT INTO "Subscription" ("id", "plan", "startDate", "endDate", "userId") VALUES ('6e0515d8-28da-4544-8c37-2dcb5374f04b', 'Student', '2024-02-23T19:05:57.527Z', '2024-04-18T20:23:28.922Z', 'f53f8268-2073-4517-b88e-d47ed3a602b6');
INSERT INTO "Subscription" ("id", "plan", "startDate", "endDate", "userId") VALUES ('81fc3d87-c20e-4674-ad77-8fc37e3a0f2a', 'Pro', '2024-12-13T09:25:44.660Z', '2024-12-04T00:46:26.658Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Subscription" ("id", "plan", "startDate", "endDate", "userId") VALUES ('d56e1006-c8f1-40b3-acfd-10455469550b', 'Pro', '2024-04-28T15:37:33.627Z', '2024-01-30T13:14:32.481Z', 'e969efc5-f6df-478c-97a4-a8675d5a8349');
INSERT INTO "Subscription" ("id", "plan", "startDate", "endDate", "userId") VALUES ('cbe261a9-6387-4744-8677-31fd02bcf8c7', 'Enterprise', '2024-08-28T08:24:01.068Z', '2023-12-15T14:15:05.556Z', 'e969efc5-f6df-478c-97a4-a8675d5a8349');
INSERT INTO "Subscription" ("id", "plan", "startDate", "endDate", "userId") VALUES ('6963dc37-85b9-4a08-b171-b0cc3e75112c', 'Enterprise', '2024-10-23T09:46:23.393Z', '2025-02-19T16:52:23.675Z', 'e969efc5-f6df-478c-97a4-a8675d5a8349');
INSERT INTO "Subscription" ("id", "plan", "startDate", "endDate", "userId") VALUES ('b3e21172-655a-4ff4-b0ff-c97ad9c0fd1f', 'Pro', '2024-08-01T12:29:23.607Z', '2025-07-09T22:19:56.030Z', 'b7473e06-52e6-457c-adfa-5a4b42bbbe6e');

INSERT INTO "Payment" ("id", "amount", "date", "status", "userId") VALUES ('b3e3c3ff-ada5-4f6e-8a46-be1f0b825f8d', 391, '2024-11-11T19:48:21.676Z', 'failed', 'b7473e06-52e6-457c-adfa-5a4b42bbbe6e');
INSERT INTO "Payment" ("id", "amount", "date", "status", "userId") VALUES ('60729612-8584-4bf7-8a33-6f04e41d56af', 150, '2025-08-13T16:25:13.693Z', 'failed', '578a756b-48a3-49e8-991e-7547b90b7b80');
INSERT INTO "Payment" ("id", "amount", "date", "status", "userId") VALUES ('5cac9cbb-2cfa-4cbf-8ef9-37ca5aec1a54', 289, '2024-04-08T23:17:41.633Z', 'pending', 'b2f5731d-a1ab-46a8-b9f4-c7215f707881');
INSERT INTO "Payment" ("id", "amount", "date", "status", "userId") VALUES ('f16a6cc3-e083-4ad1-b4fb-d836529724c4', 568, '2024-07-11T06:44:24.669Z', 'in progress', 'b5d3adb3-4555-435d-81f9-5c88ded99273');
INSERT INTO "Payment" ("id", "amount", "date", "status", "userId") VALUES ('89bc8d1a-91e2-4d8b-ad35-8881cd0a5dd9', 184, '2025-01-11T16:11:33.730Z', 'in progress', 'f53f8268-2073-4517-b88e-d47ed3a602b6');
INSERT INTO "Payment" ("id", "amount", "date", "status", "userId") VALUES ('0da26030-f695-4deb-aefe-3d91eca67381', 171, '2024-03-06T20:49:45.210Z', 'refunded', '773a6f4e-2846-438f-8fc4-4a4b1851adf9');
INSERT INTO "Payment" ("id", "amount", "date", "status", "userId") VALUES ('de6ef39f-5a94-4deb-b10f-3b5308d3d714', 279, '2024-08-19T13:55:29.586Z', 'pending', 'e969efc5-f6df-478c-97a4-a8675d5a8349');
INSERT INTO "Payment" ("id", "amount", "date", "status", "userId") VALUES ('0585c47a-a180-46c2-a639-964564fb3b8a', 361, '2025-04-18T05:34:27.330Z', 'completed', '773a6f4e-2846-438f-8fc4-4a4b1851adf9');
INSERT INTO "Payment" ("id", "amount", "date", "status", "userId") VALUES ('ebb91726-4190-45b8-bb77-3c5e632c1fd7', 181, '2023-11-09T01:59:08.306Z', 'pending', '94a626bd-9a9c-473c-995f-6be5f6489f81');
INSERT INTO "Payment" ("id", "amount", "date", "status", "userId") VALUES ('76b70e12-0bbe-4aae-a3bc-12ec4d348622', 138, '2024-01-21T22:38:48.638Z', 'pending', 'b2f5731d-a1ab-46a8-b9f4-c7215f707881');

  `

  const sqls = splitSql(sql)

  for (const sql of sqls) {
    try {
      await prisma.$executeRawUnsafe(`${sql}`)
    } catch (error) {
      console.log(`Could not insert SQL: ${error.message}`)
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async error => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
