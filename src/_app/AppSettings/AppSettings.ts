class AppSettings {
  //api
  public readonly API_URL: string
  public readonly AUTH_LOGIN: string
  public readonly AUTH_PASS: string
  public readonly DOMAIN_URL: string

  public readonly authToken: string
  public readonly isLoggedIn: string

  constructor() {
    //api
    this.API_URL = process.env.NEXT_PUBLIC_API_URL
    this.DOMAIN_URL = process.env.NEXT_PUBLIC_DOMAIN_URL
    this.AUTH_LOGIN = process.env.NEXT_PUBLIC_AUTH_LOGIN
    this.AUTH_PASS = process.env.NEXT_PUBLIC_AUTH_PASS

    //constants
    this.authToken = 'authToken'
    this.isLoggedIn = 'isLoggedIn'
  }
}
export const appSettings = new AppSettings()
