import nodemailer from 'nodemailer';

export default async (req, res) => {
  const { name, company, email, phone, message } = req.body.data;
  console.log(req.body);

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: '465',
    secure: true,
    auth: {
      user: process.env.NEXT_PUBLIC_mailuser,
      pass: process.env.NEXT_PUBLIC_mailpass,
    },
  });

  try {
    const emailResponse = await transporter.sendMail({
      from: email,
      to: 'd18124788@mytudublin.ie',
      subject: `Contact form submission from ${name}`,
      html: `<p> You have a new contact form submission</p><br>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong> ${message}</p>`,
    });
    console.log('Message Sent', emailResponse.messageId);
  } catch (error) {
    console.log(error);
  }

  res.status(200).json(req.body);
};
