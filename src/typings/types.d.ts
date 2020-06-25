import { GraphQLResolveInfo } from 'graphql';
import { MyContext } from './context';
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
  me?: Maybe<User>;
  part?: Maybe<Part>;
  parts: PartConnection;
  user?: Maybe<User>;
  users?: Maybe<Array<User>>;
  vehicle?: Maybe<Vehicle>;
  vehicles: VehicleConnection;
};


export type QueryCustomerArgs = {
  id: Scalars['ID'];
};


export type QueryPartArgs = {
  input: PartByIdInput;
};


export type QueryPartsArgs = {
  cursor?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryVehicleArgs = {
  input: VehicleByIdInput;
};


export type QueryVehiclesArgs = {
  cursor?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  _?: Maybe<Scalars['Boolean']>;
  createCustomer: Customer;
  createPart: Part;
  createUser: User;
  createVehicle: Vehicle;
  deleteCustomer: Scalars['Boolean'];
  deletePart: Scalars['Boolean'];
  deleteUser: Scalars['Boolean'];
  deleteVehicle: Scalars['Boolean'];
  signIn: Token;
};


export type MutationCreateCustomerArgs = {
  input: CreateCustomer;
};


export type MutationCreatePartArgs = {
  input: CreatePartInput;
};


export type MutationCreateUserArgs = {
  input: CreateUser;
};


export type MutationCreateVehicleArgs = {
  input: CreateVehicleInput;
};


export type MutationDeleteCustomerArgs = {
  input: DeleteCustomer;
};


export type MutationDeletePartArgs = {
  input: DeletePartInput;
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteVehicleArgs = {
  input: DeleteVehicleInput;
};


export type MutationSignInArgs = {
  login: Scalars['String'];
  password: Scalars['String'];
};

export type CreateCustomer = {
  name: Scalars['String'];
  contact?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  lineOne: Scalars['String'];
  lineTwo?: Maybe<Scalars['String']>;
  city: Scalars['String'];
  country: Scalars['String'];
  postcode: Scalars['String'];
};

export type DeleteCustomer = {
  id: Scalars['ID'];
};

export type Customer = {
  __typename?: 'Customer';
  id: Scalars['ID'];
  name: Scalars['String'];
  contact?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  lineOne: Scalars['String'];
  lineTwo?: Maybe<Scalars['String']>;
  city: Scalars['String'];
  country: Scalars['String'];
  postcode: Scalars['String'];
  vehicles?: Maybe<Array<Vehicle>>;
};

export enum Role {
  Admin = 'ADMIN',
  Franchise = 'FRANCHISE',
  Receptionist = 'RECEPTIONIST',
  Mechanic = 'MECHANIC',
  Foreperson = 'FOREPERSON'
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

export type CreatePartInput = {
  name: Scalars['String'];
  quantity: Scalars['Int'];
  price: Scalars['String'];
  manufacturer: Scalars['String'];
  description: Scalars['String'];
  vehicleType: Scalars['String'];
  threshold: Scalars['Int'];
};

export type DeletePartInput = {
  id: Scalars['ID'];
};

export type PartByIdInput = {
  id: Scalars['ID'];
};

export type Part = {
  __typename?: 'Part';
  id: Scalars['ID'];
  name: Scalars['String'];
  quantity: Scalars['Int'];
  price: Scalars['String'];
  manufacturer: Scalars['String'];
  description: Scalars['String'];
  vehicleType: Scalars['String'];
  threshold: Scalars['Int'];
};

export type PartConnection = {
  __typename?: 'PartConnection';
  edges: Array<Part>;
  pageInfo: PageInfo;
};

export enum UserRole {
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
};

export type CreateUser = {
  username: Scalars['String'];
  email: Scalars['String'];
  role: UserRole;
  password: Scalars['String'];
};

export type CreateVehicleInput = {
  customerId: Scalars['ID'];
  make: Scalars['String'];
  model: Scalars['String'];
  regNo: Scalars['ID'];
  yearsUsed: Scalars['String'];
  color: Scalars['String'];
};

export type DeleteVehicleInput = {
  regNo: Scalars['ID'];
};

export type VehicleByIdInput = {
  regNo: Scalars['ID'];
};

export type Vehicle = {
  __typename?: 'Vehicle';
  make: Scalars['String'];
  model: Scalars['String'];
  regNo: Scalars['ID'];
  yearsUsed: Scalars['String'];
  color: Scalars['String'];
  customer: Customer;
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
  DeleteCustomer: DeleteCustomer;
  Customer: ResolverTypeWrapper<Customer>;
  Role: Role;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  Subscription: ResolverTypeWrapper<{}>;
  CreatePartInput: CreatePartInput;
  DeletePartInput: DeletePartInput;
  PartByIdInput: PartByIdInput;
  Part: ResolverTypeWrapper<Part>;
  PartConnection: ResolverTypeWrapper<PartConnection>;
  UserRole: UserRole;
  Token: ResolverTypeWrapper<Token>;
  User: ResolverTypeWrapper<User>;
  CreateUser: CreateUser;
  CreateVehicleInput: CreateVehicleInput;
  DeleteVehicleInput: DeleteVehicleInput;
  VehicleByIdInput: VehicleByIdInput;
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
  DeleteCustomer: DeleteCustomer;
  Customer: Customer;
  PageInfo: PageInfo;
  Subscription: {};
  CreatePartInput: CreatePartInput;
  DeletePartInput: DeletePartInput;
  PartByIdInput: PartByIdInput;
  Part: Part;
  PartConnection: PartConnection;
  Token: Token;
  User: User;
  CreateUser: CreateUser;
  CreateVehicleInput: CreateVehicleInput;
  DeleteVehicleInput: DeleteVehicleInput;
  VehicleByIdInput: VehicleByIdInput;
  Vehicle: Vehicle;
  VehicleConnection: VehicleConnection;
};

export type AuthDirectiveArgs = {   requires?: Maybe<Role>; };

export type AuthDirectiveResolver<Result, Parent, ContextType = MyContext, Args = AuthDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type QueryResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  _?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  customer?: Resolver<Maybe<ResolversTypes['Customer']>, ParentType, ContextType, RequireFields<QueryCustomerArgs, 'id'>>;
  customers?: Resolver<Maybe<Array<ResolversTypes['Customer']>>, ParentType, ContextType>;
  me?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  part?: Resolver<Maybe<ResolversTypes['Part']>, ParentType, ContextType, RequireFields<QueryPartArgs, 'input'>>;
  parts?: Resolver<ResolversTypes['PartConnection'], ParentType, ContextType, RequireFields<QueryPartsArgs, never>>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'id'>>;
  users?: Resolver<Maybe<Array<ResolversTypes['User']>>, ParentType, ContextType>;
  vehicle?: Resolver<Maybe<ResolversTypes['Vehicle']>, ParentType, ContextType, RequireFields<QueryVehicleArgs, 'input'>>;
  vehicles?: Resolver<ResolversTypes['VehicleConnection'], ParentType, ContextType, RequireFields<QueryVehiclesArgs, never>>;
};

export type MutationResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  _?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  createCustomer?: Resolver<ResolversTypes['Customer'], ParentType, ContextType, RequireFields<MutationCreateCustomerArgs, 'input'>>;
  createPart?: Resolver<ResolversTypes['Part'], ParentType, ContextType, RequireFields<MutationCreatePartArgs, 'input'>>;
  createUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'input'>>;
  createVehicle?: Resolver<ResolversTypes['Vehicle'], ParentType, ContextType, RequireFields<MutationCreateVehicleArgs, 'input'>>;
  deleteCustomer?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteCustomerArgs, 'input'>>;
  deletePart?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeletePartArgs, 'input'>>;
  deleteUser?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'id'>>;
  deleteVehicle?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteVehicleArgs, 'input'>>;
  signIn?: Resolver<ResolversTypes['Token'], ParentType, ContextType, RequireFields<MutationSignInArgs, 'login' | 'password'>>;
};

export type CustomerResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Customer'] = ResolversParentTypes['Customer']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  contact?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lineOne?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lineTwo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  country?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  postcode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  vehicles?: Resolver<Maybe<Array<ResolversTypes['Vehicle']>>, ParentType, ContextType>;
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

export type PartResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Part'] = ResolversParentTypes['Part']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  manufacturer?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  vehicleType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  threshold?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type PartConnectionResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['PartConnection'] = ResolversParentTypes['PartConnection']> = {
  edges?: Resolver<Array<ResolversTypes['Part']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
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
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type VehicleResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Vehicle'] = ResolversParentTypes['Vehicle']> = {
  make?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  model?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  regNo?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  yearsUsed?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  customer?: Resolver<ResolversTypes['Customer'], ParentType, ContextType>;
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
  Part?: PartResolvers<ContextType>;
  PartConnection?: PartConnectionResolvers<ContextType>;
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