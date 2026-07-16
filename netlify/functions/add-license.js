const { GoogleSpreadsheet } = require('google-spreadsheet')

exports.handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  }

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' }
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers, body: 'Method Not Allowed' }
  }

  try {
    const { docId, nombre, vencimiento, categoria } = JSON.parse(event.body)

    if (!docId || !nombre || !vencimiento) {
      return { statusCode: 400, headers, body: JSON.stringify({ error: 'Missing required fields' }) }
    }

    const sheetId = process.env.GOOGLE_SHEET_ID
    const serviceEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL
    const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')

    if (!sheetId || !serviceEmail || !privateKey) {
      throw new Error('Missing Google Sheets credentials')
    }

    const doc = new GoogleSpreadsheet(sheetId)
    await doc.useServiceAccountAuth({ client_email: serviceEmail, private_key: privateKey })
    await doc.loadInfo()
    const sheet = doc.sheetsByIndex[0]

    await sheet.addRow({
      'Documento': docId,
      'ID Tramite Unico': '',
      'Nombre Completo': nombre,
      'Vencimiento': vencimiento,
      'Estado': 'activa',
      'Categoria': categoria || '',
      'LINK': '',
    })

    return {
      statusCode: 200,
      headers: { ...headers, 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: 'License added successfully' }),
    }
  } catch (err) {
    console.error('add-license error:', err)
    return { statusCode: 500, headers, body: JSON.stringify({ error: err.message }) }
  }
}
