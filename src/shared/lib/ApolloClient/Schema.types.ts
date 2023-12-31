export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never
}
export type Incremental<T> =
  | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never }
  | T
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  Boolean: { input: boolean; output: boolean }
  DateTime: { input: any; output: any }
  Float: { input: number; output: number }
  ID: { input: string; output: string }
  Int: { input: number; output: number }
  String: { input: string; output: string }
}

export type Avatar = {
  __typename?: 'Avatar'
  fileSize: Scalars['Int']['output']
  height: Scalars['Int']['output']
  url: Scalars['String']['output']
  width: Scalars['Int']['output']
}

export enum BlockStatus {
  Blocked = 'blocked',
}

export enum CurrencyType {
  Eur = 'EUR',
  Usd = 'USD',
}

export type ImagePost = {
  __typename?: 'ImagePost'
  fileSize: Scalars['Int']['output']
  height: Scalars['Int']['output']
  url: Scalars['String']['output']
  width: Scalars['Int']['output']
}

export type LoginAdmin = {
  __typename?: 'LoginAdmin'
  logged: Scalars['Boolean']['output']
}

export type Mutation = {
  __typename?: 'Mutation'
  banUser: Scalars['Boolean']['output']
  loginAdmin: LoginAdmin
  removeUser: Scalars['Boolean']['output']
  unbanUser: Scalars['Boolean']['output']
}

export type MutationBanUserArgs = {
  banReason: Scalars['String']['input']
  userId: Scalars['Int']['input']
}

export type MutationLoginAdminArgs = {
  email: Scalars['String']['input']
  password: Scalars['String']['input']
}

export type MutationRemoveUserArgs = {
  userId: Scalars['Int']['input']
}

export type MutationUnbanUserArgs = {
  userId: Scalars['Int']['input']
}

export type PaginationModel = {
  __typename?: 'PaginationModel'
  page: Scalars['Int']['output']
  pageSize: Scalars['Int']['output']
  pagesCount: Scalars['Int']['output']
  totalCount: Scalars['Int']['output']
}

export type Payment = {
  __typename?: 'Payment'
  amount: Scalars['Int']['output']
  currency: CurrencyType
  id: Scalars['Int']['output']
  userId: Scalars['Int']['output']
}

export enum PaymentMethod {
  Paypal = 'PAYPAL',
  Stripe = 'STRIPE',
}

export type PaymentsPaginationModel = {
  __typename?: 'PaymentsPaginationModel'
  items: Array<Subscription>
  page: Scalars['Int']['output']
  pageSize: Scalars['Int']['output']
  pagesCount: Scalars['Int']['output']
  totalCount: Scalars['Int']['output']
}

export type Post = {
  __typename?: 'Post'
  createdAt: Scalars['String']['output']
  description: Scalars['String']['output']
  id: Scalars['Int']['output']
  images: Array<ImagePost>
  /** ownerId is the userId */
  ownerId: Scalars['Int']['output']
}

export type PostImages = {
  __typename?: 'PostImages'
  images: Array<ImagePost>
}

export type PostsPaginationModel = {
  __typename?: 'PostsPaginationModel'
  items: Array<Post>
  pageSize: Scalars['Int']['output']
  pagesCount: Scalars['Int']['output']
  totalCount: Scalars['Int']['output']
}

export type Profile = {
  __typename?: 'Profile'
  aboutMe?: Maybe<Scalars['String']['output']>
  avatars?: Maybe<Array<Avatar>>
  city?: Maybe<Scalars['String']['output']>
  createdAt: Scalars['DateTime']['output']
  dateOfBirth?: Maybe<Scalars['DateTime']['output']>
  firstName?: Maybe<Scalars['String']['output']>
  id: Scalars['Int']['output']
  lastName?: Maybe<Scalars['String']['output']>
  userName?: Maybe<Scalars['String']['output']>
}

export type ProfileInfoModel = {
  __typename?: 'ProfileInfoModel'
  createdAt: Scalars['DateTime']['output']
  id: Scalars['Int']['output']
  posts: Array<PostImages>
  profile: Profile
  userName: Scalars['String']['output']
}

export type Query = {
  __typename?: 'Query'
  getListPayments: PaymentsPaginationModel
  getPosts: PostsPaginationModel
  getProfileInfo: ProfileInfoModel
  getUsers: UsersPaginationModel
}

export type QueryGetListPaymentsArgs = {
  pageNumber?: InputMaybe<Scalars['Int']['input']>
  pageSize?: InputMaybe<Scalars['Int']['input']>
  sortBy?: InputMaybe<Scalars['String']['input']>
  sortDirection?: InputMaybe<SortDirection>
  userId: Scalars['Int']['input']
}

export type QueryGetPostsArgs = {
  endCursorPostId?: InputMaybe<Scalars['Int']['input']>
  pageSize?: InputMaybe<Scalars['Int']['input']>
  searchTerm?: InputMaybe<Scalars['String']['input']>
  sortBy?: InputMaybe<Scalars['String']['input']>
  sortDirection?: InputMaybe<SortDirection>
}

export type QueryGetProfileInfoArgs = {
  userId: Scalars['Int']['input']
}

export type QueryGetUsersArgs = {
  blockStatus?: InputMaybe<BlockStatus>
  pageNumber?: InputMaybe<Scalars['Int']['input']>
  pageSize?: InputMaybe<Scalars['Int']['input']>
  searchTerm?: InputMaybe<Scalars['String']['input']>
  sortBy?: InputMaybe<Scalars['String']['input']>
  sortDirection?: InputMaybe<SortDirection>
}

export enum SortDirection {
  Asc = 'asc',
  Desc = 'desc',
}

export enum StatusSubscriptionType {
  Active = 'ACTIVE',
  Deleted = 'DELETED',
  Finished = 'FINISHED',
  Pending = 'PENDING',
}

export type Subscription = {
  __typename?: 'Subscription'
  dateOfPayment?: Maybe<Scalars['DateTime']['output']>
  endDate?: Maybe<Scalars['DateTime']['output']>
  id: Scalars['String']['output']
  paymentType?: Maybe<PaymentMethod>
  payments: Array<Payment>
  price: Scalars['Int']['output']
  startDate?: Maybe<Scalars['DateTime']['output']>
  status: StatusSubscriptionType
  type: SubscriptionType
}

export enum SubscriptionType {
  Day = 'DAY',
  Monthly = 'MONTHLY',
  Weekly = 'WEEKLY',
}

export type User = {
  __typename?: 'User'
  createdAt: Scalars['DateTime']['output']
  email: Scalars['String']['output']
  id: Scalars['Int']['output']
  profile: Profile
  userBan?: Maybe<UserBan>
  userName: Scalars['String']['output']
}

export type UserBan = {
  __typename?: 'UserBan'
  createdAt: Scalars['DateTime']['output']
  reason: Scalars['String']['output']
}

export type UsersPaginationModel = {
  __typename?: 'UsersPaginationModel'
  pagination: PaginationModel
  users: Array<User>
}
