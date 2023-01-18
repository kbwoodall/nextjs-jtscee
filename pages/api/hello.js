// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function hey() (req, res) => {
  // Open Chrome DevTools to step through the debugger!
  // debugge io;
  res.status(200).json({ name: 'Hello, world!' });
};
