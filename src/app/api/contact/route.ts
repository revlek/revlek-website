import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json()

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ ok: false, error: 'Missing fields' }, { status: 400 })
    }

    const host = process.env.SMTP_HOST
    const port = parseInt(process.env.SMTP_PORT || '587', 10)
    const secure = (process.env.SMTP_SECURE || 'false') === 'true'
    const user = process.env.SMTP_USER || ''
    const pass = process.env.SMTP_PASS || ''
    const from = process.env.SMTP_FROM || user || 'no-reply@revlek.com'
    const to = process.env.CONTACT_TO_EMAIL || user || 'info.revlek@gmail.com'

    const transporter = host && user && pass
      ? nodemailer.createTransport({ host, port, secure, auth: { user, pass } })
      : nodemailer.createTransport({ jsonTransport: true })

    const info = await transporter.sendMail({
      from,
      to,
      replyTo: email,
      subject: `[Contact] ${subject} - ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    })

    return NextResponse.json({ ok: true, id: info.messageId || null })
  } catch (err) {
    return NextResponse.json({ ok: false, error: 'Failed to send email' }, { status: 500 })
  }
}