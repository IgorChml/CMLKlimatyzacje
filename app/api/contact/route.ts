import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: Request) {
  const body = await req.json().catch(() => null)

  if (!body) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
  }

  const { name, phone, email, devices, propertyType, area } = body

  if (!name || !phone || !email || !devices || !propertyType || !area) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    await resend.emails.send({
      from: 'formularz@cmlklimatyzacje.pl',
      to: process.env.CONTACT_EMAIL!,
      subject: 'Nowe zapytanie z formularza — CML Klimatyzacje',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0A1F44; border-bottom: 2px solid #00AEEF; padding-bottom: 8px;">
            Nowe zapytanie z formularza kontaktowego
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr>
              <td style="padding: 10px 0; color: #6b7280; font-size: 14px; width: 200px;">Imię i nazwisko</td>
              <td style="padding: 10px 0; font-weight: bold; color: #0A1F44;">${name}</td>
            </tr>
            <tr style="background: #f9fafb;">
              <td style="padding: 10px; color: #6b7280; font-size: 14px;">Telefon</td>
              <td style="padding: 10px; font-weight: bold; color: #0A1F44;">
                <a href="tel:${phone}" style="color: #FF6B2B;">${phone}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #6b7280; font-size: 14px;">E-mail</td>
              <td style="padding: 10px 0; font-weight: bold; color: #0A1F44;">
                <a href="mailto:${email}" style="color: #00AEEF;">${email}</a>
              </td>
            </tr>
            <tr style="background: #f9fafb;">
              <td style="padding: 10px; color: #6b7280; font-size: 14px;">Liczba urządzeń</td>
              <td style="padding: 10px; font-weight: bold; color: #0A1F44;">${devices}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #6b7280; font-size: 14px;">Rodzaj nieruchomości</td>
              <td style="padding: 10px 0; font-weight: bold; color: #0A1F44;">${propertyType}</td>
            </tr>
            <tr style="background: #f9fafb;">
              <td style="padding: 10px; color: #6b7280; font-size: 14px;">Metraż</td>
              <td style="padding: 10px; font-weight: bold; color: #0A1F44;">${area} m²</td>
            </tr>
          </table>
          <p style="margin-top: 24px; font-size: 12px; color: #9ca3af;">
            Wiadomość wysłana automatycznie z formularza na stronie cmlklimatyzacje.pl
          </p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Send failed' }, { status: 500 })
  }
}
