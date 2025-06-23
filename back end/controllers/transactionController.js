const User = require('../models/User');
const Transaction = require('../models/Transaction');

exports.sendTransaction = async (req, res) => {
  const { receiverId, amount, note } = req.body;
  const senderId = req.user.id;

  try {
    const sender = await User.findById(senderId);
    const receiver = await User.findById(receiverId);

    if (!receiver) return res.status(404).json({ message: 'Receiver not found' });
    if (sender.balance < amount) return res.status(400).json({ message: 'Insufficient balance' });

    // Start transaction-like operation
    sender.balance -= amount;
    receiver.balance += amount;

    await sender.save();
    await receiver.save();

    const transaction = new Transaction({ sender: senderId, receiver: receiverId, amount, note });
    await transaction.save();

    res.status(200).json({ message: 'Transaction successful', transaction });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Transaction failed' });
  }
};
