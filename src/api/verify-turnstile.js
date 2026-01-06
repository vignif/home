export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ success: false, error: 'Method not allowed' })
    return
  }

  try {
    const secret = process.env.TURNSTILE_SECRET_KEY
    if (!secret) {
      res.status(500).json({ success: false, error: 'Server misconfiguration: missing TURNSTILE_SECRET_KEY' })
      return
    }

    // Gatsby Functions may parse JSON automatically; handle both cases
    const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {})
    const token = body.token
    const remoteip = body.remoteip

    if (!token) {
      res.status(400).json({ success: false, error: 'Missing token' })
      return
    }

    const form = new URLSearchParams()
    form.append('secret', secret)
    form.append('response', token)
    if (remoteip) form.append('remoteip', remoteip)

    const verifyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: form,
    })

    const data = await verifyRes.json()

    if (data.success) {
      res.status(200).json({ success: true })
      return
    }

    res.status(400).json({ success: false, error: 'Verification failed', details: data['error-codes'] || [] })
  } catch (err) {
    res.status(500).json({ success: false, error: 'Internal error', details: String(err && err.message ? err.message : err) })
  }
}
