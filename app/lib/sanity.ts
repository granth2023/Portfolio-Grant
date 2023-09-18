import { createClient } from "next-sanity";

const projectId = "l2g5gn2p";
const dataset = "production";
const apiVersion = "2023-01-01";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  // token: 'sk6DXAXnR7Yoy4u4EhKrwCIDwm2L1zK8ZXYSEn8QrZ0GnXND5dPs6iTYlD5Ik6klWd2r6ZFemJ3IX6qNeIBlOrfRYF6UQKTMPI2DxBbSFvzEfXzIsYOEi2tWZW8wKy9oGZnE55Mf1BCVoTDV23zuA7ljJAu0aOK1FFYj5kLqFCgYTglFNIIj'
});