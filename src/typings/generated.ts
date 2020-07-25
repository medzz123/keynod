import { GraphQLResolveInfo } from 'graphql';
import { MyContext } from './types';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};


export type Query = {
  __typename?: 'Query';
  _?: Maybe<Scalars['Boolean']>;
  customer?: Maybe<Customer>;
  customers?: Maybe<Array<Customer>>;
  job?: Maybe<Job>;
  jobs: JobConnection;
  me?: Maybe<User>;
  part?: Maybe<Part>;
  parts: PartConnection;
  payment?: Maybe<Payment>;
  payments: PaymentConnection;
  user?: Maybe<User>;
  users?: Maybe<Array<User>>;
  vehicle?: Maybe<Vehicle>;
  vehicles: VehicleConnection;
};


export type QueryCustomerArgs = {
  id: Scalars['ID'];
};


export type QueryJobArgs = {
  id: Scalars['ID'];
};


export type QueryJobsArgs = {
  cursor?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryPartArgs = {
  id: Scalars['ID'];
};


export type QueryPartsArgs = {
  cursor?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryPaymentArgs = {
  id: Scalars['ID'];
};


export type QueryPaymentsArgs = {
  cursor?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryVehicleArgs = {
  id: Scalars['ID'];
};


export type QueryVehiclesArgs = {
  cursor?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  _?: Maybe<Scalars['Boolean']>;
  addMechanic: Job;
  addTask: Task;
  assignJob: User;
  createCustomer: Customer;
  createJob: Job;
  createPart: Part;
  createPayment: Payment;
  createUser: User;
  createVehicle: Vehicle;
  deleteCustomer: Scalars['Boolean'];
  deleteJob: Scalars['Boolean'];
  deletePart: Scalars['Boolean'];
  deletePayment: Scalars['Boolean'];
  deleteUser: Scalars['Boolean'];
  deleteVehicle: Scalars['Boolean'];
  endJob: Job;
  settlePayment: Payment;
  signIn: Token;
  startJob: Job;
};


export type MutationAddMechanicArgs = {
  input: AddMechanic;
};


export type MutationAddTaskArgs = {
  input: AddTask;
};


export type MutationAssignJobArgs = {
  input: AssignJob;
};


export type MutationCreateCustomerArgs = {
  input: CreateCustomer;
};


export type MutationCreateJobArgs = {
  input: CreateJob;
};


export type MutationCreatePartArgs = {
  input: CreatePartInput;
};


export type MutationCreatePaymentArgs = {
  jobId: Scalars['ID'];
};


export type MutationCreateUserArgs = {
  input: CreateUser;
};


export type MutationCreateVehicleArgs = {
  input: CreateVehicle;
};


export type MutationDeleteCustomerArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteJobArgs = {
  id: Scalars['ID'];
};


export type MutationDeletePartArgs = {
  id: Scalars['ID'];
};


export type MutationDeletePaymentArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteVehicleArgs = {
  id: Scalars['ID'];
};


export type MutationSignInArgs = {
  login: Scalars['String'];
  password: Scalars['String'];
};

export type CreateCustomer = {
  name: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  address: Scalars['String'];
};

export type Customer = {
  __typename?: 'Customer';
  id: Scalars['ID'];
  name: Scalars['String'];
  phone: Scalars['String'];
  email: Scalars['String'];
  address: Scalars['String'];
  vehicles?: Maybe<Array<Vehicle>>;
  payments?: Maybe<Array<Payment>>;
};

export enum Role {
  Admin = 'ADMIN',
  Franchise = 'FRANCHISE',
  Receptionist = 'RECEPTIONIST',
  Mechanic = 'MECHANIC',
  Foreperson = 'FOREPERSON',
  Auth = 'AUTH'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  hasNextPage: Scalars['Boolean'];
  endCursor: Scalars['String'];
};

export type Subscription = {
  __typename?: 'Subscription';
  _?: Maybe<Scalars['Boolean']>;
};

export enum JobStatus {
  Complete = 'COMPLETE',
  Ongoing = 'ONGOING',
  Pending = 'PENDING'
}

export enum JobType {
  Repair = 'REPAIR',
  Mot = 'MOT'
}

export type AddMechanic = {
  jobId: Scalars['ID'];
  userId: Scalars['ID'];
};

export type CreateJob = {
  jobStatus: JobStatus;
  jobType: JobType;
  estimatedTime: Scalars['Int'];
  vehicleId: Scalars['ID'];
};

export type Job = {
  __typename?: 'Job';
  id: Scalars['ID'];
  dateBooked: Scalars['String'];
  startDate?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['String']>;
  jobStatus: JobStatus;
  jobType: JobType;
  estimatedTime: Scalars['Int'];
  timeTaken?: Maybe<Scalars['Int']>;
  vehicle: Vehicle;
  mechanic?: Maybe<Array<User>>;
  tasks?: Maybe<Array<Task>>;
  payment: Payment;
};

export type JobConnection = {
  __typename?: 'JobConnection';
  edges: Array<Job>;
  pageInfo: PageInfo;
};

export type CreatePartInput = {
  name: Scalars['String'];
  quantity: Scalars['Int'];
  price: Scalars['String'];
  description: Scalars['String'];
  threshold: Scalars['Int'];
};

export type Part = {
  __typename?: 'Part';
  id: Scalars['ID'];
  name: Scalars['String'];
  quantity: Scalars['Int'];
  price: Scalars['String'];
  description: Scalars['String'];
  threshold: Scalars['Int'];
};

export type PartConnection = {
  __typename?: 'PartConnection';
  edges: Array<Part>;
  pageInfo: PageInfo;
};

export enum PaymentStatus {
  Settled = 'SETTLED',
  Pending = 'PENDING'
}

export type Payment = {
  __typename?: 'Payment';
  id: Scalars['ID'];
  amount: Scalars['String'];
  dateSettled?: Maybe<Scalars['String']>;
  job: Job;
  customer: Customer;
};

export type PaymentConnection = {
  __typename?: 'PaymentConnection';
  edges: Array<Payment>;
  pageInfo: PageInfo;
};

export enum TaskStatus {
  Settled = 'SETTLED',
  Pending = 'PENDING'
}

export type AddTask = {
  jobId: Scalars['ID'];
  duration: Scalars['Int'];
  description: Scalars['String'];
  partsUsed?: Maybe<Array<PartUsedInput>>;
};

export type Task = {
  __typename?: 'Task';
  duration: Scalars['Int'];
  description: Scalars['String'];
  parts?: Maybe<Array<PartUsed>>;
};

export type PartUsedInput = {
  quantity: Scalars['Int'];
  partId: Scalars['ID'];
};

export type PartUsed = {
  __typename?: 'PartUsed';
  quantity: Scalars['Int'];
  part: Part;
};

export enum UserRoleInput {
  Franchise = 'FRANCHISE',
  Receptionist = 'RECEPTIONIST',
  Mechanic = 'MECHANIC',
  Foreperson = 'FOREPERSON'
}

export enum UserRole {
  Admin = 'ADMIN',
  Franchise = 'FRANCHISE',
  Receptionist = 'RECEPTIONIST',
  Mechanic = 'MECHANIC',
  Foreperson = 'FOREPERSON'
}

export type Token = {
  __typename?: 'Token';
  token: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  username: Scalars['String'];
  email: Scalars['String'];
  role: UserRole;
  jobs?: Maybe<Array<Job>>;
};

export type CreateUser = {
  username: Scalars['String'];
  email: Scalars['String'];
  role: UserRoleInput;
  password: Scalars['String'];
};

export type AssignJob = {
  userId: Scalars['ID'];
  jobId: Scalars['ID'];
};

export type CreateVehicle = {
  customerId: Scalars['ID'];
  model: Scalars['String'];
  yearsUsed: Scalars['String'];
  regNo: Scalars['ID'];
};

export type Vehicle = {
  __typename?: 'Vehicle';
  regNo: Scalars['ID'];
  yearsUsed: Scalars['String'];
  model: Scalars['String'];
  customer: Customer;
  jobs?: Maybe<Array<Job>>;
};

export type VehicleConnection = {
  __typename?: 'VehicleConnection';
  edges: Array<Vehicle>;
  pageInfo: PageInfo;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Mutation: ResolverTypeWrapper<{}>;
  CreateCustomer: CreateCustomer;
  Customer: ResolverTypeWrapper<Customer>;
  Role: Role;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  Subscription: ResolverTypeWrapper<{}>;
  JobStatus: JobStatus;
  JobType: JobType;
  AddMechanic: AddMechanic;
  CreateJob: CreateJob;
  Job: ResolverTypeWrapper<Job>;
  JobConnection: ResolverTypeWrapper<JobConnection>;
  CreatePartInput: CreatePartInput;
  Part: ResolverTypeWrapper<Part>;
  PartConnection: ResolverTypeWrapper<PartConnection>;
  PaymentStatus: PaymentStatus;
  Payment: ResolverTypeWrapper<Payment>;
  PaymentConnection: ResolverTypeWrapper<PaymentConnection>;
  TaskStatus: TaskStatus;
  AddTask: AddTask;
  Task: ResolverTypeWrapper<Task>;
  PartUsedInput: PartUsedInput;
  PartUsed: ResolverTypeWrapper<PartUsed>;
  UserRoleInput: UserRoleInput;
  UserRole: UserRole;
  Token: ResolverTypeWrapper<Token>;
  User: ResolverTypeWrapper<User>;
  CreateUser: CreateUser;
  AssignJob: AssignJob;
  CreateVehicle: CreateVehicle;
  Vehicle: ResolverTypeWrapper<Vehicle>;
  VehicleConnection: ResolverTypeWrapper<VehicleConnection>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {};
  Boolean: Scalars['Boolean'];
  ID: Scalars['ID'];
  String: Scalars['String'];
  Int: Scalars['Int'];
  Mutation: {};
  CreateCustomer: CreateCustomer;
  Customer: Customer;
  PageInfo: PageInfo;
  Subscription: {};
  AddMechanic: AddMechanic;
  CreateJob: CreateJob;
  Job: Job;
  JobConnection: JobConnection;
  CreatePartInput: CreatePartInput;
  Part: Part;
  PartConnection: PartConnection;
  Payment: Payment;
  PaymentConnection: PaymentConnection;
  AddTask: AddTask;
  Task: Task;
  PartUsedInput: PartUsedInput;
  PartUsed: PartUsed;
  Token: Token;
  User: User;
  CreateUser: CreateUser;
  AssignJob: AssignJob;
  CreateVehicle: CreateVehicle;
  Vehicle: Vehicle;
  VehicleConnection: VehicleConnection;
};

export type AuthDirectiveArgs = {   requires?: Maybe<Role>; };

export type AuthDirectiveResolver<Result, Parent, ContextType = MyContext, Args = AuthDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type QueryResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  _?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  customer?: Resolver<Maybe<ResolversTypes['Customer']>, ParentType, ContextType, RequireFields<QueryCustomerArgs, 'id'>>;
  customers?: Resolver<Maybe<Array<ResolversTypes['Customer']>>, ParentType, ContextType>;
  job?: Resolver<Maybe<ResolversTypes['Job']>, ParentType, ContextType, RequireFields<QueryJobArgs, 'id'>>;
  jobs?: Resolver<ResolversTypes['JobConnection'], ParentType, ContextType, RequireFields<QueryJobsArgs, never>>;
  me?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  part?: Resolver<Maybe<ResolversTypes['Part']>, ParentType, ContextType, RequireFields<QueryPartArgs, 'id'>>;
  parts?: Resolver<ResolversTypes['PartConnection'], ParentType, ContextType, RequireFields<QueryPartsArgs, never>>;
  payment?: Resolver<Maybe<ResolversTypes['Payment']>, ParentType, ContextType, RequireFields<QueryPaymentArgs, 'id'>>;
  payments?: Resolver<ResolversTypes['PaymentConnection'], ParentType, ContextType, RequireFields<QueryPaymentsArgs, never>>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'id'>>;
  users?: Resolver<Maybe<Array<ResolversTypes['User']>>, ParentType, ContextType>;
  vehicle?: Resolver<Maybe<ResolversTypes['Vehicle']>, ParentType, ContextType, RequireFields<QueryVehicleArgs, 'id'>>;
  vehicles?: Resolver<ResolversTypes['VehicleConnection'], ParentType, ContextType, RequireFields<QueryVehiclesArgs, never>>;
};

export type MutationResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  _?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  addMechanic?: Resolver<ResolversTypes['Job'], ParentType, ContextType, RequireFields<MutationAddMechanicArgs, 'input'>>;
  addTask?: Resolver<ResolversTypes['Task'], ParentType, ContextType, RequireFields<MutationAddTaskArgs, 'input'>>;
  assignJob?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationAssignJobArgs, 'input'>>;
  createCustomer?: Resolver<ResolversTypes['Customer'], ParentType, ContextType, RequireFields<MutationCreateCustomerArgs, 'input'>>;
  createJob?: Resolver<ResolversTypes['Job'], ParentType, ContextType, RequireFields<MutationCreateJobArgs, 'input'>>;
  createPart?: Resolver<ResolversTypes['Part'], ParentType, ContextType, RequireFields<MutationCreatePartArgs, 'input'>>;
  createPayment?: Resolver<ResolversTypes['Payment'], ParentType, ContextType, RequireFields<MutationCreatePaymentArgs, 'jobId'>>;
  createUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'input'>>;
  createVehicle?: Resolver<ResolversTypes['Vehicle'], ParentType, ContextType, RequireFields<MutationCreateVehicleArgs, 'input'>>;
  deleteCustomer?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteCustomerArgs, 'id'>>;
  deleteJob?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteJobArgs, 'id'>>;
  deletePart?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeletePartArgs, 'id'>>;
  deletePayment?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeletePaymentArgs, 'id'>>;
  deleteUser?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'id'>>;
  deleteVehicle?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteVehicleArgs, 'id'>>;
  endJob?: Resolver<ResolversTypes['Job'], ParentType, ContextType>;
  settlePayment?: Resolver<ResolversTypes['Payment'], ParentType, ContextType>;
  signIn?: Resolver<ResolversTypes['Token'], ParentType, ContextType, RequireFields<MutationSignInArgs, 'login' | 'password'>>;
  startJob?: Resolver<ResolversTypes['Job'], ParentType, ContextType>;
};

export type CustomerResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Customer'] = ResolversParentTypes['Customer']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  vehicles?: Resolver<Maybe<Array<ResolversTypes['Vehicle']>>, ParentType, ContextType>;
  payments?: Resolver<Maybe<Array<ResolversTypes['Payment']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type PageInfoResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  endCursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type SubscriptionResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = {
  _?: SubscriptionResolver<Maybe<ResolversTypes['Boolean']>, "_", ParentType, ContextType>;
};

export type JobResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Job'] = ResolversParentTypes['Job']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  dateBooked?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  startDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  endDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  jobStatus?: Resolver<ResolversTypes['JobStatus'], ParentType, ContextType>;
  jobType?: Resolver<ResolversTypes['JobType'], ParentType, ContextType>;
  estimatedTime?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timeTaken?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  vehicle?: Resolver<ResolversTypes['Vehicle'], ParentType, ContextType>;
  mechanic?: Resolver<Maybe<Array<ResolversTypes['User']>>, ParentType, ContextType>;
  tasks?: Resolver<Maybe<Array<ResolversTypes['Task']>>, ParentType, ContextType>;
  payment?: Resolver<ResolversTypes['Payment'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type JobConnectionResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['JobConnection'] = ResolversParentTypes['JobConnection']> = {
  edges?: Resolver<Array<ResolversTypes['Job']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type PartResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Part'] = ResolversParentTypes['Part']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  threshold?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type PartConnectionResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['PartConnection'] = ResolversParentTypes['PartConnection']> = {
  edges?: Resolver<Array<ResolversTypes['Part']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type PaymentResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Payment'] = ResolversParentTypes['Payment']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dateSettled?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  job?: Resolver<ResolversTypes['Job'], ParentType, ContextType>;
  customer?: Resolver<ResolversTypes['Customer'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type PaymentConnectionResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['PaymentConnection'] = ResolversParentTypes['PaymentConnection']> = {
  edges?: Resolver<Array<ResolversTypes['Payment']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type TaskResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Task'] = ResolversParentTypes['Task']> = {
  duration?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  parts?: Resolver<Maybe<Array<ResolversTypes['PartUsed']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type PartUsedResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['PartUsed'] = ResolversParentTypes['PartUsed']> = {
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  part?: Resolver<ResolversTypes['Part'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type TokenResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Token'] = ResolversParentTypes['Token']> = {
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type UserResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['UserRole'], ParentType, ContextType>;
  jobs?: Resolver<Maybe<Array<ResolversTypes['Job']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type VehicleResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Vehicle'] = ResolversParentTypes['Vehicle']> = {
  regNo?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  yearsUsed?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  model?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  customer?: Resolver<ResolversTypes['Customer'], ParentType, ContextType>;
  jobs?: Resolver<Maybe<Array<ResolversTypes['Job']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type VehicleConnectionResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['VehicleConnection'] = ResolversParentTypes['VehicleConnection']> = {
  edges?: Resolver<Array<ResolversTypes['Vehicle']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Resolvers<ContextType = MyContext> = {
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Customer?: CustomerResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  Job?: JobResolvers<ContextType>;
  JobConnection?: JobConnectionResolvers<ContextType>;
  Part?: PartResolvers<ContextType>;
  PartConnection?: PartConnectionResolvers<ContextType>;
  Payment?: PaymentResolvers<ContextType>;
  PaymentConnection?: PaymentConnectionResolvers<ContextType>;
  Task?: TaskResolvers<ContextType>;
  PartUsed?: PartUsedResolvers<ContextType>;
  Token?: TokenResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  Vehicle?: VehicleResolvers<ContextType>;
  VehicleConnection?: VehicleConnectionResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = MyContext> = Resolvers<ContextType>;
export type DirectiveResolvers<ContextType = MyContext> = {
  auth?: AuthDirectiveResolver<any, any, ContextType>;
};


/**
 * @deprecated
 * Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
 */
export type IDirectiveResolvers<ContextType = MyContext> = DirectiveResolvers<ContextType>;