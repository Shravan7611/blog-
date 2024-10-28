import dbConnect from '../../utils/dbConnect';
import Post from '../../models/Post';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'POST') {
    try {
      const post = new Post(req.body);
      await post.save();
      res.status(201).json(post);
    } catch (error) {
      res.status(400).json({ error: 'Failed to create post' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
