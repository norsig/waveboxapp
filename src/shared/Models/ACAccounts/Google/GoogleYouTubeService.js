import CoreACService from '../CoreACService'

class GoogleYouTubeService extends CoreACService {
  /* **************************************************************************/
  // Class : Types
  /* **************************************************************************/

  static get type () { return CoreACService.SERVICE_TYPES.GOOGLE_YOUTUBE }

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

  get humanizedType () { return 'YouTube' }
  get humanizedLogos () {
    return [
      'google/logo_youtube_32px.png',
      'google/logo_youtube_48px.png',
      'google/logo_youtube_64px.png',
      'google/logo_youtube_96px.png',
      'google/logo_youtube_128px.png'
    ]
  }

  /* **************************************************************************/
  // Properties: Behaviour
  /* **************************************************************************/

  get url () { return 'https://www.youtube.com' }
}

export default GoogleYouTubeService