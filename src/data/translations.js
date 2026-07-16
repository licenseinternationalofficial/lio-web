export const translations = {
  es: {
    nav: { inicio: 'Inicio', precios: 'Precios', requisitos: 'Requisitos', verificar: 'Verificar', tramite: 'Iniciar Trámite' },
    hero: {
      badge: 'Entidad Oficial de Trámites Internacionales',
      title: 'Tu Licencia Internacional',
      titleAccent: 'Sin Complicaciones',
      subtitle: 'Tramita tu permiso oficial de conducción válido en más de 150 países. Proceso 100% digital, rápido y con envío directo a tu domicilio.',
      cta: 'Iniciar Solicitud',
      verify: 'Verificar Estado',
      stats: { paises: 'Países', respuesta: 'Respuesta', legal: 'Legal' }
    },
    pricing: {
      title: 'Nuestros Planes y Vigencias',
      subtitle: 'Selecciona el periodo que mejor se adapte a tus necesidades de viaje internacional.',
      recommended: 'RECOMENDADO',
      select: 'Seleccionar Plan',
      plans: [
        { title: 'Vigencia 1 Año', price: '$70', desc: 'Ideal para viajes cortos o estancias temporales.', features: ['Documento Digital', 'Documento Físico vía Courier', 'Válido en 150+ países', 'Soporte 24/7'] },
        { title: 'Vigencia 2 Años', price: '$100', desc: 'Nuestra opción más equilibrada para viajeros frecuentes.', features: ['Todo lo del plan 1 año', 'Envío prioritario', 'Renovación con descuento', 'Asesoría legal básica'] },
        { title: 'Vigencia 5 Años', price: '$150', desc: 'Tranquilidad a largo plazo para residentes y viajeros globales.', features: ['Todo lo del plan 2 años', 'Vigencia máxima extendida', 'Reposición gratuita', 'Soporte VIP prioritario'] }
      ]
    },
    requirements: {
      title: 'Requisitos para tu ',
      titleAccent: 'Trámite',
      subtitle: 'Para procesar tu licencia internacional de manera exitosa, necesitaremos que tengas a la mano la siguiente información y documentos.',
      items: [
        { icon: 'User', title: 'Datos Personales', desc: 'Nombre completo, fecha de nacimiento, estatura, tipo de sangre y color de ojos.' },
        { icon: 'MapPin', title: 'Residencia', desc: 'País de nacimiento y país de residencia actual.' },
        { icon: 'FileText', title: 'Documentación', desc: 'Pasaporte o Cédula de identidad vigente.' },
        { icon: 'CreditCard', title: 'Licencia Local', desc: 'Foto de tu licencia de conducir vigente de tu país.' },
        { icon: 'Camera', title: 'Fotografías', desc: 'Foto tipo carnet y foto de tu firma en fondo blanco.' },
        { icon: 'Mail', title: 'Contacto', desc: 'Correo electrónico y número de teléfono con código de área.' }
      ],
      cta: 'Ir al Formulario',
      sidebar: { title: '¿Todo Listo?', desc: 'Si tienes estos documentos preparados, puedes iniciar tu solicitud ahora mismo.', feature1: 'Validación Instantánea', feature2: 'Encriptación de Datos AES-256' }
    },
    form: {
      title: 'Solicitud de Licencia',
      subtitle: 'Completa el formulario para iniciar tu trámite internacional.',
      steps: ['Personal', 'Físicos', 'Fotos', 'Contacto'],
      step1: { title: 'Información Personal', nombre: 'Nombre Completo', nombrePlaceholder: 'Ej. Juan Pérez', paisNac: 'País de Nacimiento', paisNacPlaceholder: 'Ej. Colombia', fechaNac: 'Fecha de Nacimiento', paisRes: 'País de Residencia', paisResPlaceholder: 'Ej. España', vigencia: 'Vigencia Deseada' },
      step2: { title: 'Detalles Físicos', estatura: 'Estatura (cm)', estaturaPlaceholder: 'Ej. 175', sangre: 'Tipo de Sangre', ojos: 'Color de Ojos', ojosPlaceholder: 'Ej. Café' },
      step3: { title: 'Documentación (Fotos)', desc: 'Obligatorio: Suba las 4 fotos requeridas para poder continuar.', carnet: 'Foto Tipo Carnet', firma: 'Foto de la Firma', idDoc: 'Pasaporte / Cédula', licencia: 'Licencia de Conducir Local' },
      step4: { title: 'Contacto Final', email: 'Correo Electrónico', emailPlaceholder: 'correo@ejemplo.com', telefono: 'Número de Teléfono', telefonoPlaceholder: '+51 999 999 999', terms: 'Al hacer clic en "Enviar Solicitud", usted acepta nuestros términos y condiciones y el procesamiento de sus datos personales para la emisión de la licencia internacional.' },
      next: 'Siguiente', prev: 'Anterior', submit: 'Enviar Solicitud', sending: 'Enviando...', alertStep: 'Por favor, rellene todos los campos obligatorios de este paso antes de continuar.', alertEmail: 'Por favor, complete su Correo y Teléfono antes de enviar la solicitud.'
    },
    search: {
      title: 'Verificar Credencial',
      subtitle: 'Consulta el estado de tu trámite o validez de tu licencia mediante tu número de documento.',
      placeholder: 'Ingrese su DNI o ID de trámite...',
      search: 'Buscar',
      found: 'Licencia Encontrada',
      valid: 'Documento Válido',
      notFound: 'No se encontraron resultados',
      notFoundDesc: 'No pudimos encontrar una licencia asociada al documento',
      holder: 'Titular',
      status: 'Estado',
      validUntil: 'Válido Hasta',
      category: 'Categoría',
      download: 'Descargar Certificado Digital',
      unavailable: 'Certificado no disponible',
      idTramite: 'ID Trámite',
      docNum: 'N° Documento',
      issuedBy: 'Emitido por LIO'
    },
    admin: {
      title: 'Acceso Administrativo',
      password: 'Contraseña de Admin',
      enter: 'Entrar',
      unauthorized: 'Solo Personal Autorizado',
      wrongPwd: 'Contraseña incorrecta',
      dashboard: 'Panel de Control',
      dashboardSub: 'Gestión de trámites y licencias LIO',
      logout: 'Salir',
      pending: 'Trámites Pendientes',
      issued: 'Licencias Emitidas',
      uptime: 'Uptime del Sistema',
      newLicense: 'Cargar Nuevo Trámite',
      newLicenseDesc: 'Al subir un trámite aquí, el usuario podrá consultarlo inmediatamente en la barra de búsqueda.',
      docNumLabel: 'Número de Documento / ID',
      docNumPlaceholder: 'Ej. 12345678',
      nameLabel: 'Nombre del Titular',
      namePlaceholder: 'Ej. Juan Pérez',
      expiryLabel: 'Fecha de Vencimiento',
      categoryLabel: 'Categoría',
      fileLabel: 'Archivo de Licencia (PDF)',
      publish: 'Publicar Trámite',
      success: 'Trámite guardado exitosamente',
      error: 'Error al guardar el trámite'
    },
    footer: {
      desc: 'License International Official (LIO) es la entidad líder en la tramitación de permisos internacionales de conducción con validez global.',
      quickLinks: 'Enlaces Rápidos',
      support: 'Soporte',
      contact: 'Contacto',
      faq: 'Preguntas Frecuentes',
      terms: 'Términos y Condiciones',
      privacy: 'Política de Privacidad',
      adminAccess: 'Admin Access',
      copyright: 'License International Official (LIO). Todos los derechos reservados.'
    }
  },
  en: {
    nav: { inicio: 'Home', precios: 'Pricing', requisitos: 'Requirements', verificar: 'Verify', tramite: 'Start Application' },
    hero: {
      badge: 'Official International Processing Entity',
      title: 'Your International License',
      titleAccent: 'Without the Hassle',
      subtitle: 'Get your official driving permit valid in over 150 countries. 100% digital process, fast, with direct delivery to your home.',
      cta: 'Start Application',
      verify: 'Check Status',
      stats: { paises: 'Countries', respuesta: 'Response', legal: 'Legal' }
    },
    pricing: {
      title: 'Our Plans & Validity',
      subtitle: 'Select the period that best fits your international travel needs.',
      recommended: 'RECOMMENDED',
      select: 'Select Plan',
      plans: [
        { title: '1 Year Validity', price: '$70', desc: 'Ideal for short trips or temporary stays.', features: ['Digital Document', 'Physical Document via Courier', 'Valid in 150+ countries', '24/7 Support'] },
        { title: '2 Year Validity', price: '$100', desc: 'Our most balanced option for frequent travelers.', features: ['Everything in 1 year plan', 'Priority shipping', 'Discount on renewal', 'Basic legal advice'] },
        { title: '5 Year Validity', price: '$150', desc: 'Long-term peace of mind for residents and global travelers.', features: ['Everything in 2 year plan', 'Extended maximum validity', 'Free replacement', 'VIP priority support'] }
      ]
    },
    requirements: {
      title: 'Requirements for your ',
      titleAccent: 'Application',
      subtitle: 'To successfully process your international license, please have the following information and documents ready.',
      items: [
        { icon: 'User', title: 'Personal Info', desc: 'Full name, date of birth, height, blood type, and eye color.' },
        { icon: 'MapPin', title: 'Residence', desc: 'Country of birth and current country of residence.' },
        { icon: 'FileText', title: 'Documents', desc: 'Valid passport or national ID card.' },
        { icon: 'CreditCard', title: 'Local License', desc: 'Photo of your valid driver\'s license from your country.' },
        { icon: 'Camera', title: 'Photos', desc: 'Passport-style photo and signature photo on white background.' },
        { icon: 'Mail', title: 'Contact', desc: 'Email address and phone number with area code.' }
      ],
      cta: 'Go to Form',
      sidebar: { title: 'Ready to Go?', desc: 'If you have these documents ready, you can start your application now.', feature1: 'Instant Validation', feature2: 'AES-256 Data Encryption' }
    },
    form: {
      title: 'License Application',
      subtitle: 'Complete the form to start your international process.',
      steps: ['Personal', 'Physical', 'Photos', 'Contact'],
      step1: { title: 'Personal Information', nombre: 'Full Name', nombrePlaceholder: 'e.g. John Doe', paisNac: 'Country of Birth', paisNacPlaceholder: 'e.g. USA', fechaNac: 'Date of Birth', paisRes: 'Country of Residence', paisResPlaceholder: 'e.g. Spain', vigencia: 'Desired Validity' },
      step2: { title: 'Physical Details', estatura: 'Height (cm)', estaturaPlaceholder: 'e.g. 175', sangre: 'Blood Type', ojos: 'Eye Color', ojosPlaceholder: 'e.g. Brown' },
      step3: { title: 'Documentation (Photos)', desc: 'Required: Upload all 4 required photos to continue.', carnet: 'Passport Photo', firma: 'Signature Photo', idDoc: 'Passport / ID Card', licencia: 'Local Driver\'s License' },
      step4: { title: 'Final Contact', email: 'Email Address', emailPlaceholder: 'email@example.com', telefono: 'Phone Number', telefonoPlaceholder: '+1 555 555 5555', terms: 'By clicking "Submit Application", you agree to our terms and conditions and the processing of your personal data for the issuance of the international license.' },
      next: 'Next', prev: 'Previous', submit: 'Submit Application', sending: 'Sending...', alertStep: 'Please fill in all required fields in this step before continuing.', alertEmail: 'Please complete your Email and Phone before submitting.'
    },
    search: {
      title: 'Verify Credential',
      subtitle: 'Check the status of your application or license validity using your document number.',
      placeholder: 'Enter your ID or application number...',
      search: 'Search',
      found: 'License Found',
      valid: 'Valid Document',
      notFound: 'No results found',
      notFoundDesc: 'We could not find a license associated with document',
      holder: 'Holder',
      status: 'Status',
      validUntil: 'Valid Until',
      category: 'Category',
      download: 'Download Digital Certificate',
      unavailable: 'Certificate not available',
      idTramite: 'Application ID',
      docNum: 'Document N°',
      issuedBy: 'Issued by LIO'
    },
    admin: {
      title: 'Admin Access',
      password: 'Admin Password',
      enter: 'Enter',
      unauthorized: 'Authorized Personnel Only',
      wrongPwd: 'Incorrect password',
      dashboard: 'Control Panel',
      dashboardSub: 'LIO application and license management',
      logout: 'Logout',
      pending: 'Pending Applications',
      issued: 'Licenses Issued',
      uptime: 'System Uptime',
      newLicense: 'Add New License',
      newLicenseDesc: 'When you submit a license here, the user can immediately check it in the search bar.',
      docNumLabel: 'Document Number / ID',
      docNumPlaceholder: 'e.g. 12345678',
      nameLabel: 'Holder Name',
      namePlaceholder: 'e.g. John Doe',
      expiryLabel: 'Expiry Date',
      categoryLabel: 'Category',
      fileLabel: 'License File (PDF)',
      publish: 'Publish License',
      success: 'License saved successfully',
      error: 'Error saving license'
    },
    footer: {
      desc: 'License International Official (LIO) is the leading entity in processing international driving permits with global validity.',
      quickLinks: 'Quick Links',
      support: 'Support',
      contact: 'Contact',
      faq: 'FAQ',
      terms: 'Terms & Conditions',
      privacy: 'Privacy Policy',
      adminAccess: 'Admin Access',
      copyright: 'License International Official (LIO). All rights reserved.'
    }
  }
}
