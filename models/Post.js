const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  media: [{ type: String }],
  likes: { type: Number, default: 0 },
  comments: { type: Number, default: 0 },
  tags: [{ type: String }]
}, { timestamps: true });

module.exports = mongoose.model('Post', PostSchema);
