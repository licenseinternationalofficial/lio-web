const { GoogleSpreadsheet } = require('google-spreadsheet')

exports.handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
  }

  if (event.httpMethod !== 'GET') {
    return { statusCode: 405, headers, body: 'Method Not Allowed' }
  }

  const docId = event.queryStringParameters?.doc

  if (!docId) {
    return { statusCode: 400, headers, body: JSON.stringify({ error: 'Missing doc parameter' }) }
  }

  try {
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
    const rows = await sheet.getRows()

    const found = rows.find(row => {
      const colA = row._rawData?.[0]?.toString().trim()
      const colB = row._rawData?.[1]?.toString().trim()
      return colA === docId.trim() || colB === docId.trim()
    })

    if (found) {
      const data = found._rawData || []
      return {
        statusCode: 200,
        headers: { ...headers, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: data[0] || '',
          id_tramite: data[1] || '',
          nombre: data[2] || '',
          validoHasta: data[3] || '',
          estado: data[4] || '',
          tipo: data[5] || '',
          fechaNacimiento: data[6] || '',
          nacionalidad: data[7] || '',
          estatura: data[8] || '',
          tipoSangre: data[9] || '',
          colorOjos: data[10] || '',
          fotoUrl: data[11] || '',
        }),
      }
    }

    return { statusCode: 404, headers, body: JSON.stringify({ error: 'Not found' }) }
  } catch (err) {
    console.error('get-license error:', err)
    return { statusCode: 500, headers, body: JSON.stringify({ error: err.message }) }
  }
}
