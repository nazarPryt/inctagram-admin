export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type Avatar = {
  __typename?: 'Avatar';
  createdAt: Scalars['DateTime']['output'];
  fieldId: Scalars['String']['output'];
  fileSize: Scalars['Int']['output'];
  height: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  imageType: Scalars['String']['output'];
  profileId: Scalars['Int']['output'];
  sizeType: Scalars['String']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Int']['output'];
};

export type BusinessAccount = {
  __typename?: 'BusinessAccount';
  createdAt: Scalars['DateTime']['output'];
  stipeCustomerId?: Maybe<Scalars['String']['output']>;
  subscriptions: Array<Subscription>;
  userId: Scalars['Int']['output'];
};

export type ImagePost = {
  __typename?: 'ImagePost';
  createdAt: Scalars['DateTime']['output'];
  fieldId: Scalars['String']['output'];
  fileSize: Scalars['Int']['output'];
  height: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  imageType: Scalars['String']['output'];
  resourceId: Scalars['String']['output'];
  sizeType: Scalars['String']['output'];
  status: Scalars['String']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Int']['output'];
};

export type LoginAdmin = {
  __typename?: 'LoginAdmin';
  logged: Scalars['Boolean']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  banUser: Scalars['Boolean']['output'];
  loginAdmin: LoginAdmin;
  removeUser: Scalars['Boolean']['output'];
  unbanUser: Scalars['Boolean']['output'];
};


export type MutationBanUserArgs = {
  banReason: Scalars['String']['input'];
  userId: Scalars['Int']['input'];
};


export type MutationLoginAdminArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationRemoveUserArgs = {
  userId: Scalars['Int']['input'];
};


export type MutationUnbanUserArgs = {
  userId: Scalars['Int']['input'];
};

export type PaginationModel = {
  __typename?: 'PaginationModel';
  items: Array<User>;
  page: Scalars['Int']['output'];
  pageSize: Scalars['Int']['output'];
  pagesCount: Scalars['Int']['output'];
  totalCount: Scalars['Int']['output'];
};

export type Payment = {
  __typename?: 'Payment';
  amount: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  currency: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  paymentType?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
  user: User;
  userId: Scalars['Int']['output'];
};

export type PaymentsPaginationModel = {
  __typename?: 'PaymentsPaginationModel';
  pagination: _PaginationModel;
  payments: Array<Payment>;
};

export type Post = {
  __typename?: 'Post';
  images: Array<ImagePost>;
};

export type Profile = {
  __typename?: 'Profile';
  aboutMe?: Maybe<Scalars['String']['output']>;
  avatars?: Maybe<Array<Avatar>>;
  city?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  dateOfBirth?: Maybe<Scalars['DateTime']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  userName?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  getListPayments: PaymentsPaginationModel;
  getUser: UserWithAdditionalInfo;
  getUsers: PaginationModel;
};


export type QueryGetListPaymentsArgs = {
  pageNumber?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetUserArgs = {
  userId: Scalars['Int']['input'];
};


export type QueryGetUsersArgs = {
  blockStatus?: InputMaybe<Scalars['String']['input']>;
  pageNumber?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: InputMaybe<Scalars['String']['input']>;
};

export type Renewal = {
  __typename?: 'Renewal';
  dateOfRenewal: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
};

export type Session = {
  __typename?: 'Session';
  deviceId: Scalars['Int']['output'];
  deviceName?: Maybe<Scalars['String']['output']>;
  ip: Scalars['String']['output'];
  lastActivity: Scalars['String']['output'];
  userId: Scalars['Int']['output'];
};

export type Subscription = {
  __typename?: 'Subscription';
  autoRenew: Scalars['Boolean']['output'];
  businessAccountId: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  customerId?: Maybe<Scalars['String']['output']>;
  dateOfPayment?: Maybe<Scalars['DateTime']['output']>;
  endDate: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  paymentType: Scalars['String']['output'];
  payments: Array<Payment>;
  price: Scalars['Int']['output'];
  renewals: Array<Renewal>;
  startDate: Scalars['DateTime']['output'];
  status: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  profile: Profile;
  userBan?: Maybe<UserBan>;
  userName: Scalars['String']['output'];
};

export type UserBan = {
  __typename?: 'UserBan';
  createdAt: Scalars['DateTime']['output'];
  reason: Scalars['String']['output'];
};

export type UserWithAdditionalInfo = {
  __typename?: 'UserWithAdditionalInfo';
  businessAccount?: Maybe<BusinessAccount>;
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  posts: Array<Post>;
  profile: Profile;
  sessions: Array<Session>;
  userBan?: Maybe<UserBan>;
  userName: Scalars['String']['output'];
};

export type _PaginationModel = {
  __typename?: '_PaginationModel';
  page: Scalars['Int']['output'];
  pageSize: Scalars['Int']['output'];
  pagesCount: Scalars['Int']['output'];
  totalCount: Scalars['Int']['output'];
};
