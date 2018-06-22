import CoreACService from '../CoreACService'

class GoogleSheetsService extends CoreACService {
  /* **************************************************************************/
  // Class : Types
  /* **************************************************************************/

  static get type () { return CoreACService.SERVICE_TYPES.GOOGLE_SHEETS }

  /* **************************************************************************/
  // Properties: Support
  /* **************************************************************************/

  get supportsUnreadActivity () { return false }
  get supportsUnreadCount () { return false }
  get supportsTrayMessages () { return false }
  get supportsSyncedDiffNotifications () { return false }
  get supportsNativeNotifications () { return false }
  get supportsGuestNotifications () { return false }
  get supportsSyncWhenSleeping () { return false }
  get supportsWBGAPI () { return false }

  /* **************************************************************************/
  // Properties: Humanized
  /* **************************************************************************/

  get humanizedType () { return 'Google Sheets' }
  get humanizedTypeShort () { return 'Sheets' }
  get humanizedLogos () {
    return [
      'google/logo_sheets_32px.png',
      'google/logo_sheets_48px.png',
      'google/logo_sheets_64px.png',
      'google/logo_sheets_96px.png',
      'google/logo_sheets_128px.png'
    ]
  }

  /* **************************************************************************/
  // Properties: Behaviour
  /* **************************************************************************/

  get url () { return 'https://sheets.google.com' }
}

export default GoogleSheetsService