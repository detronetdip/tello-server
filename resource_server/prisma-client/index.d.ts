
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model user
 * 
 */
export type user = {
  id: string
  username: string
  firstname: string
  lastname: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model friends
 * 
 */
export type friends = {
  id: string
  userId: string
  friendId: string
  createdAt: Date
  updatedAt: Date
  isAccepted: boolean
  block: boolean
}

/**
 * Model comment
 * 
 */
export type comment = {
  id: string
  content: string
  postId: string
  userId: string
  createdAt: Date
  updatedAt: Date
  parrentCommentId: string | null
}

/**
 * Model like
 * 
 */
export type like = {
  id: string
  createdAt: Date
  updatedAt: Date
  userId: string
  postId: string
  likeCount: bigint
}

/**
 * Model notifications
 * 
 */
export type notifications = {
  id: string
  content: string
  userId: string
  createdAt: Date
  type: NotificationType
  redirect: string
  read: boolean
}

/**
 * Model post
 * 
 */
export type post = {
  id: string
  userId: string
  media: string
  content: string
  type: PostType
  createdAt: Date
  updatedAt: Date
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const NotificationType: {
  POST_LIKE: 'POST_LIKE',
  POST_COMMENT: 'POST_COMMENT',
  COMMENT_REPLY: 'COMMENT_REPLY'
};

export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType]


export const PostType: {
  CONTENT_ONLY: 'CONTENT_ONLY',
  MEDIA_ONLY: 'MEDIA_ONLY',
  MEDIA_WITH_CONTENT_ONLY: 'MEDIA_WITH_CONTENT_ONLY'
};

export type PostType = (typeof PostType)[keyof typeof PostType]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>;

  $transaction<R>(fn: (prisma: Prisma.TransactionClient) => Promise<R>, options?: {maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel}): Promise<R>;

      /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<GlobalReject>;

  /**
   * `prisma.friends`: Exposes CRUD operations for the **friends** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Friends
    * const friends = await prisma.friends.findMany()
    * ```
    */
  get friends(): Prisma.friendsDelegate<GlobalReject>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.commentDelegate<GlobalReject>;

  /**
   * `prisma.like`: Exposes CRUD operations for the **like** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Likes
    * const likes = await prisma.like.findMany()
    * ```
    */
  get like(): Prisma.likeDelegate<GlobalReject>;

  /**
   * `prisma.notifications`: Exposes CRUD operations for the **notifications** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notifications.findMany()
    * ```
    */
  get notifications(): Prisma.notificationsDelegate<GlobalReject>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.postDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.7.1
   * Query Engine version: 272861e07ab64f234d3ffc4094e32bd61775599c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    user: 'user',
    friends: 'friends',
    comment: 'comment',
    like: 'like',
    notifications: 'notifications',
    post: 'post'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<PrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    comment: number
    following: number
    followers: number
    like: number
    notifications: number
    post: number
  }

  export type UserCountOutputTypeSelect = {
    comment?: boolean
    following?: boolean
    followers?: boolean
    like?: boolean
    notifications?: boolean
    post?: boolean
  }

  export type UserCountOutputTypeGetPayload<S extends boolean | null | undefined | UserCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (UserCountOutputTypeArgs)
    ? UserCountOutputType 
    : S extends { select: any } & (UserCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
      : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     * 
    **/
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Count Type CommentCountOutputType
   */


  export type CommentCountOutputType = {
    other_comment: number
  }

  export type CommentCountOutputTypeSelect = {
    other_comment?: boolean
  }

  export type CommentCountOutputTypeGetPayload<S extends boolean | null | undefined | CommentCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CommentCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (CommentCountOutputTypeArgs)
    ? CommentCountOutputType 
    : S extends { select: any } & (CommentCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof CommentCountOutputType ? CommentCountOutputType[P] : never
  } 
      : CommentCountOutputType




  // Custom InputTypes

  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CommentCountOutputType
     * 
    **/
    select?: CommentCountOutputTypeSelect | null
  }



  /**
   * Count Type PostCountOutputType
   */


  export type PostCountOutputType = {
    comment: number
    like: number
  }

  export type PostCountOutputTypeSelect = {
    comment?: boolean
    like?: boolean
  }

  export type PostCountOutputTypeGetPayload<S extends boolean | null | undefined | PostCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? PostCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (PostCountOutputTypeArgs)
    ? PostCountOutputType 
    : S extends { select: any } & (PostCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof PostCountOutputType ? PostCountOutputType[P] : never
  } 
      : PostCountOutputType




  // Custom InputTypes

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the PostCountOutputType
     * 
    **/
    select?: PostCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model user
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    firstname: string | null
    lastname: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    firstname: string | null
    lastname: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    firstname: number
    lastname: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    firstname?: true
    lastname?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    firstname?: true
    lastname?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    firstname?: true
    lastname?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which user to aggregate.
     * 
    **/
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     * 
    **/
    orderBy?: Enumerable<userOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: userWhereInput
    orderBy?: Enumerable<userOrderByWithAggregationInput>
    by: Array<UserScalarFieldEnum>
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: string
    username: string
    firstname: string
    lastname: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect = {
    id?: boolean
    username?: boolean
    firstname?: boolean
    lastname?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    comment?: boolean | commentFindManyArgs
    following?: boolean | friendsFindManyArgs
    followers?: boolean | friendsFindManyArgs
    like?: boolean | likeFindManyArgs
    notifications?: boolean | notificationsFindManyArgs
    post?: boolean | postFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }


  export type userInclude = {
    comment?: boolean | commentFindManyArgs
    following?: boolean | friendsFindManyArgs
    followers?: boolean | friendsFindManyArgs
    like?: boolean | likeFindManyArgs
    notifications?: boolean | notificationsFindManyArgs
    post?: boolean | postFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  } 

  export type userGetPayload<S extends boolean | null | undefined | userArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? user :
    S extends undefined ? never :
    S extends { include: any } & (userArgs | userFindManyArgs)
    ? user  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'comment' ? Array < commentGetPayload<S['include'][P]>>  :
        P extends 'following' ? Array < friendsGetPayload<S['include'][P]>>  :
        P extends 'followers' ? Array < friendsGetPayload<S['include'][P]>>  :
        P extends 'like' ? Array < likeGetPayload<S['include'][P]>>  :
        P extends 'notifications' ? Array < notificationsGetPayload<S['include'][P]>>  :
        P extends 'post' ? Array < postGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (userArgs | userFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'comment' ? Array < commentGetPayload<S['select'][P]>>  :
        P extends 'following' ? Array < friendsGetPayload<S['select'][P]>>  :
        P extends 'followers' ? Array < friendsGetPayload<S['select'][P]>>  :
        P extends 'like' ? Array < likeGetPayload<S['select'][P]>>  :
        P extends 'notifications' ? Array < notificationsGetPayload<S['select'][P]>>  :
        P extends 'post' ? Array < postGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof user ? user[P] : never
  } 
      : user


  type userCountArgs = Merge<
    Omit<userFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface userDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends userFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, userFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'user'> extends True ? Prisma__userClient<userGetPayload<T>> : Prisma__userClient<userGetPayload<T> | null, null>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs>
    ): Prisma__userClient<userGetPayload<T>>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends userFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, userFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'user'> extends True ? Prisma__userClient<userGetPayload<T>> : Prisma__userClient<userGetPayload<T> | null, null>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs>
    ): Prisma__userClient<userGetPayload<T>>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends userFindManyArgs>(
      args?: SelectSubset<T, userFindManyArgs>
    ): PrismaPromise<Array<userGetPayload<T>>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends userCreateArgs>(
      args: SelectSubset<T, userCreateArgs>
    ): Prisma__userClient<userGetPayload<T>>

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends userCreateManyArgs>(
      args?: SelectSubset<T, userCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends userDeleteArgs>(
      args: SelectSubset<T, userDeleteArgs>
    ): Prisma__userClient<userGetPayload<T>>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends userUpdateArgs>(
      args: SelectSubset<T, userUpdateArgs>
    ): Prisma__userClient<userGetPayload<T>>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends userDeleteManyArgs>(
      args?: SelectSubset<T, userDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends userUpdateManyArgs>(
      args: SelectSubset<T, userUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends userUpsertArgs>(
      args: SelectSubset<T, userUpsertArgs>
    ): Prisma__userClient<userGetPayload<T>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__userClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    comment<T extends commentFindManyArgs= {}>(args?: Subset<T, commentFindManyArgs>): PrismaPromise<Array<commentGetPayload<T>>| Null>;

    following<T extends friendsFindManyArgs= {}>(args?: Subset<T, friendsFindManyArgs>): PrismaPromise<Array<friendsGetPayload<T>>| Null>;

    followers<T extends friendsFindManyArgs= {}>(args?: Subset<T, friendsFindManyArgs>): PrismaPromise<Array<friendsGetPayload<T>>| Null>;

    like<T extends likeFindManyArgs= {}>(args?: Subset<T, likeFindManyArgs>): PrismaPromise<Array<likeGetPayload<T>>| Null>;

    notifications<T extends notificationsFindManyArgs= {}>(args?: Subset<T, notificationsFindManyArgs>): PrismaPromise<Array<notificationsGetPayload<T>>| Null>;

    post<T extends postFindManyArgs= {}>(args?: Subset<T, postFindManyArgs>): PrismaPromise<Array<postGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * user base type for findUnique actions
   */
  export type userFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the user
     * 
    **/
    select?: userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: userInclude | null
    /**
     * Filter, which user to fetch.
     * 
    **/
    where: userWhereUniqueInput
  }

  /**
   * user: findUnique
   */
  export interface userFindUniqueArgs extends userFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the user
     * 
    **/
    select?: userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: userInclude | null
    /**
     * Filter, which user to fetch.
     * 
    **/
    where: userWhereUniqueInput
  }


  /**
   * user base type for findFirst actions
   */
  export type userFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the user
     * 
    **/
    select?: userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: userInclude | null
    /**
     * Filter, which user to fetch.
     * 
    **/
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     * 
    **/
    orderBy?: Enumerable<userOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     * 
    **/
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * user: findFirst
   */
  export interface userFindFirstArgs extends userFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the user
     * 
    **/
    select?: userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: userInclude | null
    /**
     * Filter, which user to fetch.
     * 
    **/
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     * 
    **/
    orderBy?: Enumerable<userOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     * 
    **/
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * user findMany
   */
  export type userFindManyArgs = {
    /**
     * Select specific fields to fetch from the user
     * 
    **/
    select?: userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: userInclude | null
    /**
     * Filter, which users to fetch.
     * 
    **/
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     * 
    **/
    orderBy?: Enumerable<userOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     * 
    **/
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * user create
   */
  export type userCreateArgs = {
    /**
     * Select specific fields to fetch from the user
     * 
    **/
    select?: userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: userInclude | null
    /**
     * The data needed to create a user.
     * 
    **/
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }


  /**
   * user createMany
   */
  export type userCreateManyArgs = {
    /**
     * The data used to create many users.
     * 
    **/
    data: Enumerable<userCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * user update
   */
  export type userUpdateArgs = {
    /**
     * Select specific fields to fetch from the user
     * 
    **/
    select?: userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: userInclude | null
    /**
     * The data needed to update a user.
     * 
    **/
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     * 
    **/
    where: userWhereUniqueInput
  }


  /**
   * user updateMany
   */
  export type userUpdateManyArgs = {
    /**
     * The data used to update users.
     * 
    **/
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     * 
    **/
    where?: userWhereInput
  }


  /**
   * user upsert
   */
  export type userUpsertArgs = {
    /**
     * Select specific fields to fetch from the user
     * 
    **/
    select?: userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: userInclude | null
    /**
     * The filter to search for the user to update in case it exists.
     * 
    **/
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     * 
    **/
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }


  /**
   * user delete
   */
  export type userDeleteArgs = {
    /**
     * Select specific fields to fetch from the user
     * 
    **/
    select?: userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: userInclude | null
    /**
     * Filter which user to delete.
     * 
    **/
    where: userWhereUniqueInput
  }


  /**
   * user deleteMany
   */
  export type userDeleteManyArgs = {
    /**
     * Filter which users to delete
     * 
    **/
    where?: userWhereInput
  }


  /**
   * user without action
   */
  export type userArgs = {
    /**
     * Select specific fields to fetch from the user
     * 
    **/
    select?: userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: userInclude | null
  }



  /**
   * Model friends
   */


  export type AggregateFriends = {
    _count: FriendsCountAggregateOutputType | null
    _min: FriendsMinAggregateOutputType | null
    _max: FriendsMaxAggregateOutputType | null
  }

  export type FriendsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    friendId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isAccepted: boolean | null
    block: boolean | null
  }

  export type FriendsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    friendId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isAccepted: boolean | null
    block: boolean | null
  }

  export type FriendsCountAggregateOutputType = {
    id: number
    userId: number
    friendId: number
    createdAt: number
    updatedAt: number
    isAccepted: number
    block: number
    _all: number
  }


  export type FriendsMinAggregateInputType = {
    id?: true
    userId?: true
    friendId?: true
    createdAt?: true
    updatedAt?: true
    isAccepted?: true
    block?: true
  }

  export type FriendsMaxAggregateInputType = {
    id?: true
    userId?: true
    friendId?: true
    createdAt?: true
    updatedAt?: true
    isAccepted?: true
    block?: true
  }

  export type FriendsCountAggregateInputType = {
    id?: true
    userId?: true
    friendId?: true
    createdAt?: true
    updatedAt?: true
    isAccepted?: true
    block?: true
    _all?: true
  }

  export type FriendsAggregateArgs = {
    /**
     * Filter which friends to aggregate.
     * 
    **/
    where?: friendsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of friends to fetch.
     * 
    **/
    orderBy?: Enumerable<friendsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: friendsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` friends from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` friends.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned friends
    **/
    _count?: true | FriendsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FriendsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FriendsMaxAggregateInputType
  }

  export type GetFriendsAggregateType<T extends FriendsAggregateArgs> = {
        [P in keyof T & keyof AggregateFriends]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFriends[P]>
      : GetScalarType<T[P], AggregateFriends[P]>
  }




  export type FriendsGroupByArgs = {
    where?: friendsWhereInput
    orderBy?: Enumerable<friendsOrderByWithAggregationInput>
    by: Array<FriendsScalarFieldEnum>
    having?: friendsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FriendsCountAggregateInputType | true
    _min?: FriendsMinAggregateInputType
    _max?: FriendsMaxAggregateInputType
  }


  export type FriendsGroupByOutputType = {
    id: string
    userId: string
    friendId: string
    createdAt: Date
    updatedAt: Date
    isAccepted: boolean
    block: boolean
    _count: FriendsCountAggregateOutputType | null
    _min: FriendsMinAggregateOutputType | null
    _max: FriendsMaxAggregateOutputType | null
  }

  type GetFriendsGroupByPayload<T extends FriendsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<FriendsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FriendsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FriendsGroupByOutputType[P]>
            : GetScalarType<T[P], FriendsGroupByOutputType[P]>
        }
      >
    >


  export type friendsSelect = {
    id?: boolean
    userId?: boolean
    friendId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isAccepted?: boolean
    block?: boolean
    follower?: boolean | userArgs
    user?: boolean | userArgs
  }


  export type friendsInclude = {
    follower?: boolean | userArgs
    user?: boolean | userArgs
  } 

  export type friendsGetPayload<S extends boolean | null | undefined | friendsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? friends :
    S extends undefined ? never :
    S extends { include: any } & (friendsArgs | friendsFindManyArgs)
    ? friends  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'follower' ? userGetPayload<S['include'][P]> :
        P extends 'user' ? userGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (friendsArgs | friendsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'follower' ? userGetPayload<S['select'][P]> :
        P extends 'user' ? userGetPayload<S['select'][P]> :  P extends keyof friends ? friends[P] : never
  } 
      : friends


  type friendsCountArgs = Merge<
    Omit<friendsFindManyArgs, 'select' | 'include'> & {
      select?: FriendsCountAggregateInputType | true
    }
  >

  export interface friendsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Friends that matches the filter.
     * @param {friendsFindUniqueArgs} args - Arguments to find a Friends
     * @example
     * // Get one Friends
     * const friends = await prisma.friends.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends friendsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, friendsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'friends'> extends True ? Prisma__friendsClient<friendsGetPayload<T>> : Prisma__friendsClient<friendsGetPayload<T> | null, null>

    /**
     * Find one Friends that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {friendsFindUniqueOrThrowArgs} args - Arguments to find a Friends
     * @example
     * // Get one Friends
     * const friends = await prisma.friends.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends friendsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, friendsFindUniqueOrThrowArgs>
    ): Prisma__friendsClient<friendsGetPayload<T>>

    /**
     * Find the first Friends that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {friendsFindFirstArgs} args - Arguments to find a Friends
     * @example
     * // Get one Friends
     * const friends = await prisma.friends.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends friendsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, friendsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'friends'> extends True ? Prisma__friendsClient<friendsGetPayload<T>> : Prisma__friendsClient<friendsGetPayload<T> | null, null>

    /**
     * Find the first Friends that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {friendsFindFirstOrThrowArgs} args - Arguments to find a Friends
     * @example
     * // Get one Friends
     * const friends = await prisma.friends.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends friendsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, friendsFindFirstOrThrowArgs>
    ): Prisma__friendsClient<friendsGetPayload<T>>

    /**
     * Find zero or more Friends that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {friendsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Friends
     * const friends = await prisma.friends.findMany()
     * 
     * // Get first 10 Friends
     * const friends = await prisma.friends.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const friendsWithIdOnly = await prisma.friends.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends friendsFindManyArgs>(
      args?: SelectSubset<T, friendsFindManyArgs>
    ): PrismaPromise<Array<friendsGetPayload<T>>>

    /**
     * Create a Friends.
     * @param {friendsCreateArgs} args - Arguments to create a Friends.
     * @example
     * // Create one Friends
     * const Friends = await prisma.friends.create({
     *   data: {
     *     // ... data to create a Friends
     *   }
     * })
     * 
    **/
    create<T extends friendsCreateArgs>(
      args: SelectSubset<T, friendsCreateArgs>
    ): Prisma__friendsClient<friendsGetPayload<T>>

    /**
     * Create many Friends.
     *     @param {friendsCreateManyArgs} args - Arguments to create many Friends.
     *     @example
     *     // Create many Friends
     *     const friends = await prisma.friends.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends friendsCreateManyArgs>(
      args?: SelectSubset<T, friendsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Friends.
     * @param {friendsDeleteArgs} args - Arguments to delete one Friends.
     * @example
     * // Delete one Friends
     * const Friends = await prisma.friends.delete({
     *   where: {
     *     // ... filter to delete one Friends
     *   }
     * })
     * 
    **/
    delete<T extends friendsDeleteArgs>(
      args: SelectSubset<T, friendsDeleteArgs>
    ): Prisma__friendsClient<friendsGetPayload<T>>

    /**
     * Update one Friends.
     * @param {friendsUpdateArgs} args - Arguments to update one Friends.
     * @example
     * // Update one Friends
     * const friends = await prisma.friends.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends friendsUpdateArgs>(
      args: SelectSubset<T, friendsUpdateArgs>
    ): Prisma__friendsClient<friendsGetPayload<T>>

    /**
     * Delete zero or more Friends.
     * @param {friendsDeleteManyArgs} args - Arguments to filter Friends to delete.
     * @example
     * // Delete a few Friends
     * const { count } = await prisma.friends.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends friendsDeleteManyArgs>(
      args?: SelectSubset<T, friendsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Friends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {friendsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Friends
     * const friends = await prisma.friends.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends friendsUpdateManyArgs>(
      args: SelectSubset<T, friendsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Friends.
     * @param {friendsUpsertArgs} args - Arguments to update or create a Friends.
     * @example
     * // Update or create a Friends
     * const friends = await prisma.friends.upsert({
     *   create: {
     *     // ... data to create a Friends
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Friends we want to update
     *   }
     * })
    **/
    upsert<T extends friendsUpsertArgs>(
      args: SelectSubset<T, friendsUpsertArgs>
    ): Prisma__friendsClient<friendsGetPayload<T>>

    /**
     * Count the number of Friends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {friendsCountArgs} args - Arguments to filter Friends to count.
     * @example
     * // Count the number of Friends
     * const count = await prisma.friends.count({
     *   where: {
     *     // ... the filter for the Friends we want to count
     *   }
     * })
    **/
    count<T extends friendsCountArgs>(
      args?: Subset<T, friendsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FriendsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Friends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FriendsAggregateArgs>(args: Subset<T, FriendsAggregateArgs>): PrismaPromise<GetFriendsAggregateType<T>>

    /**
     * Group by Friends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FriendsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FriendsGroupByArgs['orderBy'] }
        : { orderBy?: FriendsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FriendsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFriendsGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for friends.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__friendsClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    follower<T extends userArgs= {}>(args?: Subset<T, userArgs>): Prisma__userClient<userGetPayload<T> | Null>;

    user<T extends userArgs= {}>(args?: Subset<T, userArgs>): Prisma__userClient<userGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * friends base type for findUnique actions
   */
  export type friendsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the friends
     * 
    **/
    select?: friendsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: friendsInclude | null
    /**
     * Filter, which friends to fetch.
     * 
    **/
    where: friendsWhereUniqueInput
  }

  /**
   * friends: findUnique
   */
  export interface friendsFindUniqueArgs extends friendsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * friends findUniqueOrThrow
   */
  export type friendsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the friends
     * 
    **/
    select?: friendsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: friendsInclude | null
    /**
     * Filter, which friends to fetch.
     * 
    **/
    where: friendsWhereUniqueInput
  }


  /**
   * friends base type for findFirst actions
   */
  export type friendsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the friends
     * 
    **/
    select?: friendsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: friendsInclude | null
    /**
     * Filter, which friends to fetch.
     * 
    **/
    where?: friendsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of friends to fetch.
     * 
    **/
    orderBy?: Enumerable<friendsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for friends.
     * 
    **/
    cursor?: friendsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` friends from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` friends.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of friends.
     * 
    **/
    distinct?: Enumerable<FriendsScalarFieldEnum>
  }

  /**
   * friends: findFirst
   */
  export interface friendsFindFirstArgs extends friendsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * friends findFirstOrThrow
   */
  export type friendsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the friends
     * 
    **/
    select?: friendsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: friendsInclude | null
    /**
     * Filter, which friends to fetch.
     * 
    **/
    where?: friendsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of friends to fetch.
     * 
    **/
    orderBy?: Enumerable<friendsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for friends.
     * 
    **/
    cursor?: friendsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` friends from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` friends.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of friends.
     * 
    **/
    distinct?: Enumerable<FriendsScalarFieldEnum>
  }


  /**
   * friends findMany
   */
  export type friendsFindManyArgs = {
    /**
     * Select specific fields to fetch from the friends
     * 
    **/
    select?: friendsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: friendsInclude | null
    /**
     * Filter, which friends to fetch.
     * 
    **/
    where?: friendsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of friends to fetch.
     * 
    **/
    orderBy?: Enumerable<friendsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing friends.
     * 
    **/
    cursor?: friendsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` friends from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` friends.
     * 
    **/
    skip?: number
    distinct?: Enumerable<FriendsScalarFieldEnum>
  }


  /**
   * friends create
   */
  export type friendsCreateArgs = {
    /**
     * Select specific fields to fetch from the friends
     * 
    **/
    select?: friendsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: friendsInclude | null
    /**
     * The data needed to create a friends.
     * 
    **/
    data: XOR<friendsCreateInput, friendsUncheckedCreateInput>
  }


  /**
   * friends createMany
   */
  export type friendsCreateManyArgs = {
    /**
     * The data used to create many friends.
     * 
    **/
    data: Enumerable<friendsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * friends update
   */
  export type friendsUpdateArgs = {
    /**
     * Select specific fields to fetch from the friends
     * 
    **/
    select?: friendsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: friendsInclude | null
    /**
     * The data needed to update a friends.
     * 
    **/
    data: XOR<friendsUpdateInput, friendsUncheckedUpdateInput>
    /**
     * Choose, which friends to update.
     * 
    **/
    where: friendsWhereUniqueInput
  }


  /**
   * friends updateMany
   */
  export type friendsUpdateManyArgs = {
    /**
     * The data used to update friends.
     * 
    **/
    data: XOR<friendsUpdateManyMutationInput, friendsUncheckedUpdateManyInput>
    /**
     * Filter which friends to update
     * 
    **/
    where?: friendsWhereInput
  }


  /**
   * friends upsert
   */
  export type friendsUpsertArgs = {
    /**
     * Select specific fields to fetch from the friends
     * 
    **/
    select?: friendsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: friendsInclude | null
    /**
     * The filter to search for the friends to update in case it exists.
     * 
    **/
    where: friendsWhereUniqueInput
    /**
     * In case the friends found by the `where` argument doesn't exist, create a new friends with this data.
     * 
    **/
    create: XOR<friendsCreateInput, friendsUncheckedCreateInput>
    /**
     * In case the friends was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<friendsUpdateInput, friendsUncheckedUpdateInput>
  }


  /**
   * friends delete
   */
  export type friendsDeleteArgs = {
    /**
     * Select specific fields to fetch from the friends
     * 
    **/
    select?: friendsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: friendsInclude | null
    /**
     * Filter which friends to delete.
     * 
    **/
    where: friendsWhereUniqueInput
  }


  /**
   * friends deleteMany
   */
  export type friendsDeleteManyArgs = {
    /**
     * Filter which friends to delete
     * 
    **/
    where?: friendsWhereInput
  }


  /**
   * friends without action
   */
  export type friendsArgs = {
    /**
     * Select specific fields to fetch from the friends
     * 
    **/
    select?: friendsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: friendsInclude | null
  }



  /**
   * Model comment
   */


  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentMinAggregateOutputType = {
    id: string | null
    content: string | null
    postId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    parrentCommentId: string | null
  }

  export type CommentMaxAggregateOutputType = {
    id: string | null
    content: string | null
    postId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    parrentCommentId: string | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    content: number
    postId: number
    userId: number
    createdAt: number
    updatedAt: number
    parrentCommentId: number
    _all: number
  }


  export type CommentMinAggregateInputType = {
    id?: true
    content?: true
    postId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    parrentCommentId?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    content?: true
    postId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    parrentCommentId?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    content?: true
    postId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    parrentCommentId?: true
    _all?: true
  }

  export type CommentAggregateArgs = {
    /**
     * Filter which comment to aggregate.
     * 
    **/
    where?: commentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     * 
    **/
    orderBy?: Enumerable<commentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: commentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs = {
    where?: commentWhereInput
    orderBy?: Enumerable<commentOrderByWithAggregationInput>
    by: Array<CommentScalarFieldEnum>
    having?: commentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }


  export type CommentGroupByOutputType = {
    id: string
    content: string
    postId: string
    userId: string
    createdAt: Date
    updatedAt: Date
    parrentCommentId: string | null
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type commentSelect = {
    id?: boolean
    content?: boolean
    postId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parrentCommentId?: boolean
    comment?: boolean | commentArgs
    post?: boolean | postArgs
    user?: boolean | userArgs
    other_comment?: boolean | commentFindManyArgs
    _count?: boolean | CommentCountOutputTypeArgs
  }


  export type commentInclude = {
    comment?: boolean | commentArgs
    post?: boolean | postArgs
    user?: boolean | userArgs
    other_comment?: boolean | commentFindManyArgs
    _count?: boolean | CommentCountOutputTypeArgs
  } 

  export type commentGetPayload<S extends boolean | null | undefined | commentArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? comment :
    S extends undefined ? never :
    S extends { include: any } & (commentArgs | commentFindManyArgs)
    ? comment  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'comment' ? commentGetPayload<S['include'][P]> | null :
        P extends 'post' ? postGetPayload<S['include'][P]> :
        P extends 'user' ? userGetPayload<S['include'][P]> :
        P extends 'other_comment' ? Array < commentGetPayload<S['include'][P]>>  :
        P extends '_count' ? CommentCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (commentArgs | commentFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'comment' ? commentGetPayload<S['select'][P]> | null :
        P extends 'post' ? postGetPayload<S['select'][P]> :
        P extends 'user' ? userGetPayload<S['select'][P]> :
        P extends 'other_comment' ? Array < commentGetPayload<S['select'][P]>>  :
        P extends '_count' ? CommentCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof comment ? comment[P] : never
  } 
      : comment


  type commentCountArgs = Merge<
    Omit<commentFindManyArgs, 'select' | 'include'> & {
      select?: CommentCountAggregateInputType | true
    }
  >

  export interface commentDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Comment that matches the filter.
     * @param {commentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends commentFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, commentFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'comment'> extends True ? Prisma__commentClient<commentGetPayload<T>> : Prisma__commentClient<commentGetPayload<T> | null, null>

    /**
     * Find one Comment that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {commentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends commentFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, commentFindUniqueOrThrowArgs>
    ): Prisma__commentClient<commentGetPayload<T>>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends commentFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, commentFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'comment'> extends True ? Prisma__commentClient<commentGetPayload<T>> : Prisma__commentClient<commentGetPayload<T> | null, null>

    /**
     * Find the first Comment that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends commentFindFirstOrThrowArgs>(
      args?: SelectSubset<T, commentFindFirstOrThrowArgs>
    ): Prisma__commentClient<commentGetPayload<T>>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends commentFindManyArgs>(
      args?: SelectSubset<T, commentFindManyArgs>
    ): PrismaPromise<Array<commentGetPayload<T>>>

    /**
     * Create a Comment.
     * @param {commentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
    **/
    create<T extends commentCreateArgs>(
      args: SelectSubset<T, commentCreateArgs>
    ): Prisma__commentClient<commentGetPayload<T>>

    /**
     * Create many Comments.
     *     @param {commentCreateManyArgs} args - Arguments to create many Comments.
     *     @example
     *     // Create many Comments
     *     const comment = await prisma.comment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends commentCreateManyArgs>(
      args?: SelectSubset<T, commentCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Comment.
     * @param {commentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
    **/
    delete<T extends commentDeleteArgs>(
      args: SelectSubset<T, commentDeleteArgs>
    ): Prisma__commentClient<commentGetPayload<T>>

    /**
     * Update one Comment.
     * @param {commentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends commentUpdateArgs>(
      args: SelectSubset<T, commentUpdateArgs>
    ): Prisma__commentClient<commentGetPayload<T>>

    /**
     * Delete zero or more Comments.
     * @param {commentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends commentDeleteManyArgs>(
      args?: SelectSubset<T, commentDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends commentUpdateManyArgs>(
      args: SelectSubset<T, commentUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Comment.
     * @param {commentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
    **/
    upsert<T extends commentUpsertArgs>(
      args: SelectSubset<T, commentUpsertArgs>
    ): Prisma__commentClient<commentGetPayload<T>>

    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends commentCountArgs>(
      args?: Subset<T, commentCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__commentClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    comment<T extends commentArgs= {}>(args?: Subset<T, commentArgs>): Prisma__commentClient<commentGetPayload<T> | Null>;

    post<T extends postArgs= {}>(args?: Subset<T, postArgs>): Prisma__postClient<postGetPayload<T> | Null>;

    user<T extends userArgs= {}>(args?: Subset<T, userArgs>): Prisma__userClient<userGetPayload<T> | Null>;

    other_comment<T extends commentFindManyArgs= {}>(args?: Subset<T, commentFindManyArgs>): PrismaPromise<Array<commentGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * comment base type for findUnique actions
   */
  export type commentFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the comment
     * 
    **/
    select?: commentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: commentInclude | null
    /**
     * Filter, which comment to fetch.
     * 
    **/
    where: commentWhereUniqueInput
  }

  /**
   * comment: findUnique
   */
  export interface commentFindUniqueArgs extends commentFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * comment findUniqueOrThrow
   */
  export type commentFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the comment
     * 
    **/
    select?: commentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: commentInclude | null
    /**
     * Filter, which comment to fetch.
     * 
    **/
    where: commentWhereUniqueInput
  }


  /**
   * comment base type for findFirst actions
   */
  export type commentFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the comment
     * 
    **/
    select?: commentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: commentInclude | null
    /**
     * Filter, which comment to fetch.
     * 
    **/
    where?: commentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     * 
    **/
    orderBy?: Enumerable<commentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comments.
     * 
    **/
    cursor?: commentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comments.
     * 
    **/
    distinct?: Enumerable<CommentScalarFieldEnum>
  }

  /**
   * comment: findFirst
   */
  export interface commentFindFirstArgs extends commentFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * comment findFirstOrThrow
   */
  export type commentFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the comment
     * 
    **/
    select?: commentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: commentInclude | null
    /**
     * Filter, which comment to fetch.
     * 
    **/
    where?: commentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     * 
    **/
    orderBy?: Enumerable<commentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comments.
     * 
    **/
    cursor?: commentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comments.
     * 
    **/
    distinct?: Enumerable<CommentScalarFieldEnum>
  }


  /**
   * comment findMany
   */
  export type commentFindManyArgs = {
    /**
     * Select specific fields to fetch from the comment
     * 
    **/
    select?: commentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: commentInclude | null
    /**
     * Filter, which comments to fetch.
     * 
    **/
    where?: commentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     * 
    **/
    orderBy?: Enumerable<commentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing comments.
     * 
    **/
    cursor?: commentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CommentScalarFieldEnum>
  }


  /**
   * comment create
   */
  export type commentCreateArgs = {
    /**
     * Select specific fields to fetch from the comment
     * 
    **/
    select?: commentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: commentInclude | null
    /**
     * The data needed to create a comment.
     * 
    **/
    data: XOR<commentCreateInput, commentUncheckedCreateInput>
  }


  /**
   * comment createMany
   */
  export type commentCreateManyArgs = {
    /**
     * The data used to create many comments.
     * 
    **/
    data: Enumerable<commentCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * comment update
   */
  export type commentUpdateArgs = {
    /**
     * Select specific fields to fetch from the comment
     * 
    **/
    select?: commentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: commentInclude | null
    /**
     * The data needed to update a comment.
     * 
    **/
    data: XOR<commentUpdateInput, commentUncheckedUpdateInput>
    /**
     * Choose, which comment to update.
     * 
    **/
    where: commentWhereUniqueInput
  }


  /**
   * comment updateMany
   */
  export type commentUpdateManyArgs = {
    /**
     * The data used to update comments.
     * 
    **/
    data: XOR<commentUpdateManyMutationInput, commentUncheckedUpdateManyInput>
    /**
     * Filter which comments to update
     * 
    **/
    where?: commentWhereInput
  }


  /**
   * comment upsert
   */
  export type commentUpsertArgs = {
    /**
     * Select specific fields to fetch from the comment
     * 
    **/
    select?: commentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: commentInclude | null
    /**
     * The filter to search for the comment to update in case it exists.
     * 
    **/
    where: commentWhereUniqueInput
    /**
     * In case the comment found by the `where` argument doesn't exist, create a new comment with this data.
     * 
    **/
    create: XOR<commentCreateInput, commentUncheckedCreateInput>
    /**
     * In case the comment was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<commentUpdateInput, commentUncheckedUpdateInput>
  }


  /**
   * comment delete
   */
  export type commentDeleteArgs = {
    /**
     * Select specific fields to fetch from the comment
     * 
    **/
    select?: commentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: commentInclude | null
    /**
     * Filter which comment to delete.
     * 
    **/
    where: commentWhereUniqueInput
  }


  /**
   * comment deleteMany
   */
  export type commentDeleteManyArgs = {
    /**
     * Filter which comments to delete
     * 
    **/
    where?: commentWhereInput
  }


  /**
   * comment without action
   */
  export type commentArgs = {
    /**
     * Select specific fields to fetch from the comment
     * 
    **/
    select?: commentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: commentInclude | null
  }



  /**
   * Model like
   */


  export type AggregateLike = {
    _count: LikeCountAggregateOutputType | null
    _avg: LikeAvgAggregateOutputType | null
    _sum: LikeSumAggregateOutputType | null
    _min: LikeMinAggregateOutputType | null
    _max: LikeMaxAggregateOutputType | null
  }

  export type LikeAvgAggregateOutputType = {
    likeCount: number | null
  }

  export type LikeSumAggregateOutputType = {
    likeCount: bigint | null
  }

  export type LikeMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    postId: string | null
    likeCount: bigint | null
  }

  export type LikeMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    postId: string | null
    likeCount: bigint | null
  }

  export type LikeCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    userId: number
    postId: number
    likeCount: number
    _all: number
  }


  export type LikeAvgAggregateInputType = {
    likeCount?: true
  }

  export type LikeSumAggregateInputType = {
    likeCount?: true
  }

  export type LikeMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    postId?: true
    likeCount?: true
  }

  export type LikeMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    postId?: true
    likeCount?: true
  }

  export type LikeCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    postId?: true
    likeCount?: true
    _all?: true
  }

  export type LikeAggregateArgs = {
    /**
     * Filter which like to aggregate.
     * 
    **/
    where?: likeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of likes to fetch.
     * 
    **/
    orderBy?: Enumerable<likeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: likeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` likes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` likes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned likes
    **/
    _count?: true | LikeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LikeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LikeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LikeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LikeMaxAggregateInputType
  }

  export type GetLikeAggregateType<T extends LikeAggregateArgs> = {
        [P in keyof T & keyof AggregateLike]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLike[P]>
      : GetScalarType<T[P], AggregateLike[P]>
  }




  export type LikeGroupByArgs = {
    where?: likeWhereInput
    orderBy?: Enumerable<likeOrderByWithAggregationInput>
    by: Array<LikeScalarFieldEnum>
    having?: likeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LikeCountAggregateInputType | true
    _avg?: LikeAvgAggregateInputType
    _sum?: LikeSumAggregateInputType
    _min?: LikeMinAggregateInputType
    _max?: LikeMaxAggregateInputType
  }


  export type LikeGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    userId: string
    postId: string
    likeCount: bigint
    _count: LikeCountAggregateOutputType | null
    _avg: LikeAvgAggregateOutputType | null
    _sum: LikeSumAggregateOutputType | null
    _min: LikeMinAggregateOutputType | null
    _max: LikeMaxAggregateOutputType | null
  }

  type GetLikeGroupByPayload<T extends LikeGroupByArgs> = PrismaPromise<
    Array<
      PickArray<LikeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LikeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LikeGroupByOutputType[P]>
            : GetScalarType<T[P], LikeGroupByOutputType[P]>
        }
      >
    >


  export type likeSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    postId?: boolean
    likeCount?: boolean
    post?: boolean | postArgs
    user?: boolean | userArgs
  }


  export type likeInclude = {
    post?: boolean | postArgs
    user?: boolean | userArgs
  } 

  export type likeGetPayload<S extends boolean | null | undefined | likeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? like :
    S extends undefined ? never :
    S extends { include: any } & (likeArgs | likeFindManyArgs)
    ? like  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'post' ? postGetPayload<S['include'][P]> :
        P extends 'user' ? userGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (likeArgs | likeFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'post' ? postGetPayload<S['select'][P]> :
        P extends 'user' ? userGetPayload<S['select'][P]> :  P extends keyof like ? like[P] : never
  } 
      : like


  type likeCountArgs = Merge<
    Omit<likeFindManyArgs, 'select' | 'include'> & {
      select?: LikeCountAggregateInputType | true
    }
  >

  export interface likeDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Like that matches the filter.
     * @param {likeFindUniqueArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends likeFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, likeFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'like'> extends True ? Prisma__likeClient<likeGetPayload<T>> : Prisma__likeClient<likeGetPayload<T> | null, null>

    /**
     * Find one Like that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {likeFindUniqueOrThrowArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends likeFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, likeFindUniqueOrThrowArgs>
    ): Prisma__likeClient<likeGetPayload<T>>

    /**
     * Find the first Like that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {likeFindFirstArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends likeFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, likeFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'like'> extends True ? Prisma__likeClient<likeGetPayload<T>> : Prisma__likeClient<likeGetPayload<T> | null, null>

    /**
     * Find the first Like that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {likeFindFirstOrThrowArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends likeFindFirstOrThrowArgs>(
      args?: SelectSubset<T, likeFindFirstOrThrowArgs>
    ): Prisma__likeClient<likeGetPayload<T>>

    /**
     * Find zero or more Likes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {likeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Likes
     * const likes = await prisma.like.findMany()
     * 
     * // Get first 10 Likes
     * const likes = await prisma.like.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const likeWithIdOnly = await prisma.like.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends likeFindManyArgs>(
      args?: SelectSubset<T, likeFindManyArgs>
    ): PrismaPromise<Array<likeGetPayload<T>>>

    /**
     * Create a Like.
     * @param {likeCreateArgs} args - Arguments to create a Like.
     * @example
     * // Create one Like
     * const Like = await prisma.like.create({
     *   data: {
     *     // ... data to create a Like
     *   }
     * })
     * 
    **/
    create<T extends likeCreateArgs>(
      args: SelectSubset<T, likeCreateArgs>
    ): Prisma__likeClient<likeGetPayload<T>>

    /**
     * Create many Likes.
     *     @param {likeCreateManyArgs} args - Arguments to create many Likes.
     *     @example
     *     // Create many Likes
     *     const like = await prisma.like.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends likeCreateManyArgs>(
      args?: SelectSubset<T, likeCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Like.
     * @param {likeDeleteArgs} args - Arguments to delete one Like.
     * @example
     * // Delete one Like
     * const Like = await prisma.like.delete({
     *   where: {
     *     // ... filter to delete one Like
     *   }
     * })
     * 
    **/
    delete<T extends likeDeleteArgs>(
      args: SelectSubset<T, likeDeleteArgs>
    ): Prisma__likeClient<likeGetPayload<T>>

    /**
     * Update one Like.
     * @param {likeUpdateArgs} args - Arguments to update one Like.
     * @example
     * // Update one Like
     * const like = await prisma.like.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends likeUpdateArgs>(
      args: SelectSubset<T, likeUpdateArgs>
    ): Prisma__likeClient<likeGetPayload<T>>

    /**
     * Delete zero or more Likes.
     * @param {likeDeleteManyArgs} args - Arguments to filter Likes to delete.
     * @example
     * // Delete a few Likes
     * const { count } = await prisma.like.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends likeDeleteManyArgs>(
      args?: SelectSubset<T, likeDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {likeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Likes
     * const like = await prisma.like.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends likeUpdateManyArgs>(
      args: SelectSubset<T, likeUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Like.
     * @param {likeUpsertArgs} args - Arguments to update or create a Like.
     * @example
     * // Update or create a Like
     * const like = await prisma.like.upsert({
     *   create: {
     *     // ... data to create a Like
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Like we want to update
     *   }
     * })
    **/
    upsert<T extends likeUpsertArgs>(
      args: SelectSubset<T, likeUpsertArgs>
    ): Prisma__likeClient<likeGetPayload<T>>

    /**
     * Count the number of Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {likeCountArgs} args - Arguments to filter Likes to count.
     * @example
     * // Count the number of Likes
     * const count = await prisma.like.count({
     *   where: {
     *     // ... the filter for the Likes we want to count
     *   }
     * })
    **/
    count<T extends likeCountArgs>(
      args?: Subset<T, likeCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LikeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Like.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LikeAggregateArgs>(args: Subset<T, LikeAggregateArgs>): PrismaPromise<GetLikeAggregateType<T>>

    /**
     * Group by Like.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LikeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LikeGroupByArgs['orderBy'] }
        : { orderBy?: LikeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LikeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLikeGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for like.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__likeClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    post<T extends postArgs= {}>(args?: Subset<T, postArgs>): Prisma__postClient<postGetPayload<T> | Null>;

    user<T extends userArgs= {}>(args?: Subset<T, userArgs>): Prisma__userClient<userGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * like base type for findUnique actions
   */
  export type likeFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the like
     * 
    **/
    select?: likeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: likeInclude | null
    /**
     * Filter, which like to fetch.
     * 
    **/
    where: likeWhereUniqueInput
  }

  /**
   * like: findUnique
   */
  export interface likeFindUniqueArgs extends likeFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * like findUniqueOrThrow
   */
  export type likeFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the like
     * 
    **/
    select?: likeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: likeInclude | null
    /**
     * Filter, which like to fetch.
     * 
    **/
    where: likeWhereUniqueInput
  }


  /**
   * like base type for findFirst actions
   */
  export type likeFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the like
     * 
    **/
    select?: likeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: likeInclude | null
    /**
     * Filter, which like to fetch.
     * 
    **/
    where?: likeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of likes to fetch.
     * 
    **/
    orderBy?: Enumerable<likeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for likes.
     * 
    **/
    cursor?: likeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` likes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` likes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of likes.
     * 
    **/
    distinct?: Enumerable<LikeScalarFieldEnum>
  }

  /**
   * like: findFirst
   */
  export interface likeFindFirstArgs extends likeFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * like findFirstOrThrow
   */
  export type likeFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the like
     * 
    **/
    select?: likeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: likeInclude | null
    /**
     * Filter, which like to fetch.
     * 
    **/
    where?: likeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of likes to fetch.
     * 
    **/
    orderBy?: Enumerable<likeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for likes.
     * 
    **/
    cursor?: likeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` likes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` likes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of likes.
     * 
    **/
    distinct?: Enumerable<LikeScalarFieldEnum>
  }


  /**
   * like findMany
   */
  export type likeFindManyArgs = {
    /**
     * Select specific fields to fetch from the like
     * 
    **/
    select?: likeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: likeInclude | null
    /**
     * Filter, which likes to fetch.
     * 
    **/
    where?: likeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of likes to fetch.
     * 
    **/
    orderBy?: Enumerable<likeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing likes.
     * 
    **/
    cursor?: likeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` likes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` likes.
     * 
    **/
    skip?: number
    distinct?: Enumerable<LikeScalarFieldEnum>
  }


  /**
   * like create
   */
  export type likeCreateArgs = {
    /**
     * Select specific fields to fetch from the like
     * 
    **/
    select?: likeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: likeInclude | null
    /**
     * The data needed to create a like.
     * 
    **/
    data: XOR<likeCreateInput, likeUncheckedCreateInput>
  }


  /**
   * like createMany
   */
  export type likeCreateManyArgs = {
    /**
     * The data used to create many likes.
     * 
    **/
    data: Enumerable<likeCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * like update
   */
  export type likeUpdateArgs = {
    /**
     * Select specific fields to fetch from the like
     * 
    **/
    select?: likeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: likeInclude | null
    /**
     * The data needed to update a like.
     * 
    **/
    data: XOR<likeUpdateInput, likeUncheckedUpdateInput>
    /**
     * Choose, which like to update.
     * 
    **/
    where: likeWhereUniqueInput
  }


  /**
   * like updateMany
   */
  export type likeUpdateManyArgs = {
    /**
     * The data used to update likes.
     * 
    **/
    data: XOR<likeUpdateManyMutationInput, likeUncheckedUpdateManyInput>
    /**
     * Filter which likes to update
     * 
    **/
    where?: likeWhereInput
  }


  /**
   * like upsert
   */
  export type likeUpsertArgs = {
    /**
     * Select specific fields to fetch from the like
     * 
    **/
    select?: likeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: likeInclude | null
    /**
     * The filter to search for the like to update in case it exists.
     * 
    **/
    where: likeWhereUniqueInput
    /**
     * In case the like found by the `where` argument doesn't exist, create a new like with this data.
     * 
    **/
    create: XOR<likeCreateInput, likeUncheckedCreateInput>
    /**
     * In case the like was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<likeUpdateInput, likeUncheckedUpdateInput>
  }


  /**
   * like delete
   */
  export type likeDeleteArgs = {
    /**
     * Select specific fields to fetch from the like
     * 
    **/
    select?: likeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: likeInclude | null
    /**
     * Filter which like to delete.
     * 
    **/
    where: likeWhereUniqueInput
  }


  /**
   * like deleteMany
   */
  export type likeDeleteManyArgs = {
    /**
     * Filter which likes to delete
     * 
    **/
    where?: likeWhereInput
  }


  /**
   * like without action
   */
  export type likeArgs = {
    /**
     * Select specific fields to fetch from the like
     * 
    **/
    select?: likeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: likeInclude | null
  }



  /**
   * Model notifications
   */


  export type AggregateNotifications = {
    _count: NotificationsCountAggregateOutputType | null
    _min: NotificationsMinAggregateOutputType | null
    _max: NotificationsMaxAggregateOutputType | null
  }

  export type NotificationsMinAggregateOutputType = {
    id: string | null
    content: string | null
    userId: string | null
    createdAt: Date | null
    type: NotificationType | null
    redirect: string | null
    read: boolean | null
  }

  export type NotificationsMaxAggregateOutputType = {
    id: string | null
    content: string | null
    userId: string | null
    createdAt: Date | null
    type: NotificationType | null
    redirect: string | null
    read: boolean | null
  }

  export type NotificationsCountAggregateOutputType = {
    id: number
    content: number
    userId: number
    createdAt: number
    type: number
    redirect: number
    read: number
    _all: number
  }


  export type NotificationsMinAggregateInputType = {
    id?: true
    content?: true
    userId?: true
    createdAt?: true
    type?: true
    redirect?: true
    read?: true
  }

  export type NotificationsMaxAggregateInputType = {
    id?: true
    content?: true
    userId?: true
    createdAt?: true
    type?: true
    redirect?: true
    read?: true
  }

  export type NotificationsCountAggregateInputType = {
    id?: true
    content?: true
    userId?: true
    createdAt?: true
    type?: true
    redirect?: true
    read?: true
    _all?: true
  }

  export type NotificationsAggregateArgs = {
    /**
     * Filter which notifications to aggregate.
     * 
    **/
    where?: notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     * 
    **/
    orderBy?: Enumerable<notificationsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned notifications
    **/
    _count?: true | NotificationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationsMaxAggregateInputType
  }

  export type GetNotificationsAggregateType<T extends NotificationsAggregateArgs> = {
        [P in keyof T & keyof AggregateNotifications]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotifications[P]>
      : GetScalarType<T[P], AggregateNotifications[P]>
  }




  export type NotificationsGroupByArgs = {
    where?: notificationsWhereInput
    orderBy?: Enumerable<notificationsOrderByWithAggregationInput>
    by: Array<NotificationsScalarFieldEnum>
    having?: notificationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationsCountAggregateInputType | true
    _min?: NotificationsMinAggregateInputType
    _max?: NotificationsMaxAggregateInputType
  }


  export type NotificationsGroupByOutputType = {
    id: string
    content: string
    userId: string
    createdAt: Date
    type: NotificationType
    redirect: string
    read: boolean
    _count: NotificationsCountAggregateOutputType | null
    _min: NotificationsMinAggregateOutputType | null
    _max: NotificationsMaxAggregateOutputType | null
  }

  type GetNotificationsGroupByPayload<T extends NotificationsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<NotificationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationsGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationsGroupByOutputType[P]>
        }
      >
    >


  export type notificationsSelect = {
    id?: boolean
    content?: boolean
    userId?: boolean
    createdAt?: boolean
    type?: boolean
    redirect?: boolean
    read?: boolean
    user?: boolean | userArgs
  }


  export type notificationsInclude = {
    user?: boolean | userArgs
  } 

  export type notificationsGetPayload<S extends boolean | null | undefined | notificationsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? notifications :
    S extends undefined ? never :
    S extends { include: any } & (notificationsArgs | notificationsFindManyArgs)
    ? notifications  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? userGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (notificationsArgs | notificationsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? userGetPayload<S['select'][P]> :  P extends keyof notifications ? notifications[P] : never
  } 
      : notifications


  type notificationsCountArgs = Merge<
    Omit<notificationsFindManyArgs, 'select' | 'include'> & {
      select?: NotificationsCountAggregateInputType | true
    }
  >

  export interface notificationsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Notifications that matches the filter.
     * @param {notificationsFindUniqueArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends notificationsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, notificationsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'notifications'> extends True ? Prisma__notificationsClient<notificationsGetPayload<T>> : Prisma__notificationsClient<notificationsGetPayload<T> | null, null>

    /**
     * Find one Notifications that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {notificationsFindUniqueOrThrowArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends notificationsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, notificationsFindUniqueOrThrowArgs>
    ): Prisma__notificationsClient<notificationsGetPayload<T>>

    /**
     * Find the first Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsFindFirstArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends notificationsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, notificationsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'notifications'> extends True ? Prisma__notificationsClient<notificationsGetPayload<T>> : Prisma__notificationsClient<notificationsGetPayload<T> | null, null>

    /**
     * Find the first Notifications that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsFindFirstOrThrowArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends notificationsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, notificationsFindFirstOrThrowArgs>
    ): Prisma__notificationsClient<notificationsGetPayload<T>>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notifications.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notifications.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationsWithIdOnly = await prisma.notifications.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends notificationsFindManyArgs>(
      args?: SelectSubset<T, notificationsFindManyArgs>
    ): PrismaPromise<Array<notificationsGetPayload<T>>>

    /**
     * Create a Notifications.
     * @param {notificationsCreateArgs} args - Arguments to create a Notifications.
     * @example
     * // Create one Notifications
     * const Notifications = await prisma.notifications.create({
     *   data: {
     *     // ... data to create a Notifications
     *   }
     * })
     * 
    **/
    create<T extends notificationsCreateArgs>(
      args: SelectSubset<T, notificationsCreateArgs>
    ): Prisma__notificationsClient<notificationsGetPayload<T>>

    /**
     * Create many Notifications.
     *     @param {notificationsCreateManyArgs} args - Arguments to create many Notifications.
     *     @example
     *     // Create many Notifications
     *     const notifications = await prisma.notifications.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends notificationsCreateManyArgs>(
      args?: SelectSubset<T, notificationsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Notifications.
     * @param {notificationsDeleteArgs} args - Arguments to delete one Notifications.
     * @example
     * // Delete one Notifications
     * const Notifications = await prisma.notifications.delete({
     *   where: {
     *     // ... filter to delete one Notifications
     *   }
     * })
     * 
    **/
    delete<T extends notificationsDeleteArgs>(
      args: SelectSubset<T, notificationsDeleteArgs>
    ): Prisma__notificationsClient<notificationsGetPayload<T>>

    /**
     * Update one Notifications.
     * @param {notificationsUpdateArgs} args - Arguments to update one Notifications.
     * @example
     * // Update one Notifications
     * const notifications = await prisma.notifications.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends notificationsUpdateArgs>(
      args: SelectSubset<T, notificationsUpdateArgs>
    ): Prisma__notificationsClient<notificationsGetPayload<T>>

    /**
     * Delete zero or more Notifications.
     * @param {notificationsDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notifications.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends notificationsDeleteManyArgs>(
      args?: SelectSubset<T, notificationsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notifications = await prisma.notifications.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends notificationsUpdateManyArgs>(
      args: SelectSubset<T, notificationsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Notifications.
     * @param {notificationsUpsertArgs} args - Arguments to update or create a Notifications.
     * @example
     * // Update or create a Notifications
     * const notifications = await prisma.notifications.upsert({
     *   create: {
     *     // ... data to create a Notifications
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notifications we want to update
     *   }
     * })
    **/
    upsert<T extends notificationsUpsertArgs>(
      args: SelectSubset<T, notificationsUpsertArgs>
    ): Prisma__notificationsClient<notificationsGetPayload<T>>

    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notifications.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends notificationsCountArgs>(
      args?: Subset<T, notificationsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationsAggregateArgs>(args: Subset<T, NotificationsAggregateArgs>): PrismaPromise<GetNotificationsAggregateType<T>>

    /**
     * Group by Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationsGroupByArgs['orderBy'] }
        : { orderBy?: NotificationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationsGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for notifications.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__notificationsClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends userArgs= {}>(args?: Subset<T, userArgs>): Prisma__userClient<userGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * notifications base type for findUnique actions
   */
  export type notificationsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the notifications
     * 
    **/
    select?: notificationsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: notificationsInclude | null
    /**
     * Filter, which notifications to fetch.
     * 
    **/
    where: notificationsWhereUniqueInput
  }

  /**
   * notifications: findUnique
   */
  export interface notificationsFindUniqueArgs extends notificationsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * notifications findUniqueOrThrow
   */
  export type notificationsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the notifications
     * 
    **/
    select?: notificationsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: notificationsInclude | null
    /**
     * Filter, which notifications to fetch.
     * 
    **/
    where: notificationsWhereUniqueInput
  }


  /**
   * notifications base type for findFirst actions
   */
  export type notificationsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the notifications
     * 
    **/
    select?: notificationsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: notificationsInclude | null
    /**
     * Filter, which notifications to fetch.
     * 
    **/
    where?: notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     * 
    **/
    orderBy?: Enumerable<notificationsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notifications.
     * 
    **/
    cursor?: notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notifications.
     * 
    **/
    distinct?: Enumerable<NotificationsScalarFieldEnum>
  }

  /**
   * notifications: findFirst
   */
  export interface notificationsFindFirstArgs extends notificationsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * notifications findFirstOrThrow
   */
  export type notificationsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the notifications
     * 
    **/
    select?: notificationsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: notificationsInclude | null
    /**
     * Filter, which notifications to fetch.
     * 
    **/
    where?: notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     * 
    **/
    orderBy?: Enumerable<notificationsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notifications.
     * 
    **/
    cursor?: notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notifications.
     * 
    **/
    distinct?: Enumerable<NotificationsScalarFieldEnum>
  }


  /**
   * notifications findMany
   */
  export type notificationsFindManyArgs = {
    /**
     * Select specific fields to fetch from the notifications
     * 
    **/
    select?: notificationsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: notificationsInclude | null
    /**
     * Filter, which notifications to fetch.
     * 
    **/
    where?: notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     * 
    **/
    orderBy?: Enumerable<notificationsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing notifications.
     * 
    **/
    cursor?: notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     * 
    **/
    skip?: number
    distinct?: Enumerable<NotificationsScalarFieldEnum>
  }


  /**
   * notifications create
   */
  export type notificationsCreateArgs = {
    /**
     * Select specific fields to fetch from the notifications
     * 
    **/
    select?: notificationsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: notificationsInclude | null
    /**
     * The data needed to create a notifications.
     * 
    **/
    data: XOR<notificationsCreateInput, notificationsUncheckedCreateInput>
  }


  /**
   * notifications createMany
   */
  export type notificationsCreateManyArgs = {
    /**
     * The data used to create many notifications.
     * 
    **/
    data: Enumerable<notificationsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * notifications update
   */
  export type notificationsUpdateArgs = {
    /**
     * Select specific fields to fetch from the notifications
     * 
    **/
    select?: notificationsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: notificationsInclude | null
    /**
     * The data needed to update a notifications.
     * 
    **/
    data: XOR<notificationsUpdateInput, notificationsUncheckedUpdateInput>
    /**
     * Choose, which notifications to update.
     * 
    **/
    where: notificationsWhereUniqueInput
  }


  /**
   * notifications updateMany
   */
  export type notificationsUpdateManyArgs = {
    /**
     * The data used to update notifications.
     * 
    **/
    data: XOR<notificationsUpdateManyMutationInput, notificationsUncheckedUpdateManyInput>
    /**
     * Filter which notifications to update
     * 
    **/
    where?: notificationsWhereInput
  }


  /**
   * notifications upsert
   */
  export type notificationsUpsertArgs = {
    /**
     * Select specific fields to fetch from the notifications
     * 
    **/
    select?: notificationsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: notificationsInclude | null
    /**
     * The filter to search for the notifications to update in case it exists.
     * 
    **/
    where: notificationsWhereUniqueInput
    /**
     * In case the notifications found by the `where` argument doesn't exist, create a new notifications with this data.
     * 
    **/
    create: XOR<notificationsCreateInput, notificationsUncheckedCreateInput>
    /**
     * In case the notifications was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<notificationsUpdateInput, notificationsUncheckedUpdateInput>
  }


  /**
   * notifications delete
   */
  export type notificationsDeleteArgs = {
    /**
     * Select specific fields to fetch from the notifications
     * 
    **/
    select?: notificationsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: notificationsInclude | null
    /**
     * Filter which notifications to delete.
     * 
    **/
    where: notificationsWhereUniqueInput
  }


  /**
   * notifications deleteMany
   */
  export type notificationsDeleteManyArgs = {
    /**
     * Filter which notifications to delete
     * 
    **/
    where?: notificationsWhereInput
  }


  /**
   * notifications without action
   */
  export type notificationsArgs = {
    /**
     * Select specific fields to fetch from the notifications
     * 
    **/
    select?: notificationsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: notificationsInclude | null
  }



  /**
   * Model post
   */


  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostMinAggregateOutputType = {
    id: string | null
    userId: string | null
    media: string | null
    content: string | null
    type: PostType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    media: string | null
    content: string | null
    type: PostType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    userId: number
    media: number
    content: number
    type: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PostMinAggregateInputType = {
    id?: true
    userId?: true
    media?: true
    content?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    userId?: true
    media?: true
    content?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    userId?: true
    media?: true
    content?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PostAggregateArgs = {
    /**
     * Filter which post to aggregate.
     * 
    **/
    where?: postWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     * 
    **/
    orderBy?: Enumerable<postOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: postWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs = {
    where?: postWhereInput
    orderBy?: Enumerable<postOrderByWithAggregationInput>
    by: Array<PostScalarFieldEnum>
    having?: postScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }


  export type PostGroupByOutputType = {
    id: string
    userId: string
    media: string
    content: string
    type: PostType
    createdAt: Date
    updatedAt: Date
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = PrismaPromise<
    Array<
      PickArray<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type postSelect = {
    id?: boolean
    userId?: boolean
    media?: boolean
    content?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | userArgs
    comment?: boolean | commentFindManyArgs
    like?: boolean | likeFindManyArgs
    _count?: boolean | PostCountOutputTypeArgs
  }


  export type postInclude = {
    user?: boolean | userArgs
    comment?: boolean | commentFindManyArgs
    like?: boolean | likeFindManyArgs
    _count?: boolean | PostCountOutputTypeArgs
  } 

  export type postGetPayload<S extends boolean | null | undefined | postArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? post :
    S extends undefined ? never :
    S extends { include: any } & (postArgs | postFindManyArgs)
    ? post  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? userGetPayload<S['include'][P]> :
        P extends 'comment' ? Array < commentGetPayload<S['include'][P]>>  :
        P extends 'like' ? Array < likeGetPayload<S['include'][P]>>  :
        P extends '_count' ? PostCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (postArgs | postFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? userGetPayload<S['select'][P]> :
        P extends 'comment' ? Array < commentGetPayload<S['select'][P]>>  :
        P extends 'like' ? Array < likeGetPayload<S['select'][P]>>  :
        P extends '_count' ? PostCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof post ? post[P] : never
  } 
      : post


  type postCountArgs = Merge<
    Omit<postFindManyArgs, 'select' | 'include'> & {
      select?: PostCountAggregateInputType | true
    }
  >

  export interface postDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Post that matches the filter.
     * @param {postFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends postFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, postFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'post'> extends True ? Prisma__postClient<postGetPayload<T>> : Prisma__postClient<postGetPayload<T> | null, null>

    /**
     * Find one Post that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {postFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends postFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, postFindUniqueOrThrowArgs>
    ): Prisma__postClient<postGetPayload<T>>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends postFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, postFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'post'> extends True ? Prisma__postClient<postGetPayload<T>> : Prisma__postClient<postGetPayload<T> | null, null>

    /**
     * Find the first Post that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends postFindFirstOrThrowArgs>(
      args?: SelectSubset<T, postFindFirstOrThrowArgs>
    ): Prisma__postClient<postGetPayload<T>>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends postFindManyArgs>(
      args?: SelectSubset<T, postFindManyArgs>
    ): PrismaPromise<Array<postGetPayload<T>>>

    /**
     * Create a Post.
     * @param {postCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
    **/
    create<T extends postCreateArgs>(
      args: SelectSubset<T, postCreateArgs>
    ): Prisma__postClient<postGetPayload<T>>

    /**
     * Create many Posts.
     *     @param {postCreateManyArgs} args - Arguments to create many Posts.
     *     @example
     *     // Create many Posts
     *     const post = await prisma.post.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends postCreateManyArgs>(
      args?: SelectSubset<T, postCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Post.
     * @param {postDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
    **/
    delete<T extends postDeleteArgs>(
      args: SelectSubset<T, postDeleteArgs>
    ): Prisma__postClient<postGetPayload<T>>

    /**
     * Update one Post.
     * @param {postUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends postUpdateArgs>(
      args: SelectSubset<T, postUpdateArgs>
    ): Prisma__postClient<postGetPayload<T>>

    /**
     * Delete zero or more Posts.
     * @param {postDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends postDeleteManyArgs>(
      args?: SelectSubset<T, postDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends postUpdateManyArgs>(
      args: SelectSubset<T, postUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Post.
     * @param {postUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
    **/
    upsert<T extends postUpsertArgs>(
      args: SelectSubset<T, postUpsertArgs>
    ): Prisma__postClient<postGetPayload<T>>

    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends postCountArgs>(
      args?: Subset<T, postCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__postClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends userArgs= {}>(args?: Subset<T, userArgs>): Prisma__userClient<userGetPayload<T> | Null>;

    comment<T extends commentFindManyArgs= {}>(args?: Subset<T, commentFindManyArgs>): PrismaPromise<Array<commentGetPayload<T>>| Null>;

    like<T extends likeFindManyArgs= {}>(args?: Subset<T, likeFindManyArgs>): PrismaPromise<Array<likeGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * post base type for findUnique actions
   */
  export type postFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the post
     * 
    **/
    select?: postSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: postInclude | null
    /**
     * Filter, which post to fetch.
     * 
    **/
    where: postWhereUniqueInput
  }

  /**
   * post: findUnique
   */
  export interface postFindUniqueArgs extends postFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * post findUniqueOrThrow
   */
  export type postFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the post
     * 
    **/
    select?: postSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: postInclude | null
    /**
     * Filter, which post to fetch.
     * 
    **/
    where: postWhereUniqueInput
  }


  /**
   * post base type for findFirst actions
   */
  export type postFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the post
     * 
    **/
    select?: postSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: postInclude | null
    /**
     * Filter, which post to fetch.
     * 
    **/
    where?: postWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     * 
    **/
    orderBy?: Enumerable<postOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for posts.
     * 
    **/
    cursor?: postWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of posts.
     * 
    **/
    distinct?: Enumerable<PostScalarFieldEnum>
  }

  /**
   * post: findFirst
   */
  export interface postFindFirstArgs extends postFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * post findFirstOrThrow
   */
  export type postFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the post
     * 
    **/
    select?: postSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: postInclude | null
    /**
     * Filter, which post to fetch.
     * 
    **/
    where?: postWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     * 
    **/
    orderBy?: Enumerable<postOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for posts.
     * 
    **/
    cursor?: postWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of posts.
     * 
    **/
    distinct?: Enumerable<PostScalarFieldEnum>
  }


  /**
   * post findMany
   */
  export type postFindManyArgs = {
    /**
     * Select specific fields to fetch from the post
     * 
    **/
    select?: postSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: postInclude | null
    /**
     * Filter, which posts to fetch.
     * 
    **/
    where?: postWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     * 
    **/
    orderBy?: Enumerable<postOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing posts.
     * 
    **/
    cursor?: postWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PostScalarFieldEnum>
  }


  /**
   * post create
   */
  export type postCreateArgs = {
    /**
     * Select specific fields to fetch from the post
     * 
    **/
    select?: postSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: postInclude | null
    /**
     * The data needed to create a post.
     * 
    **/
    data: XOR<postCreateInput, postUncheckedCreateInput>
  }


  /**
   * post createMany
   */
  export type postCreateManyArgs = {
    /**
     * The data used to create many posts.
     * 
    **/
    data: Enumerable<postCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * post update
   */
  export type postUpdateArgs = {
    /**
     * Select specific fields to fetch from the post
     * 
    **/
    select?: postSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: postInclude | null
    /**
     * The data needed to update a post.
     * 
    **/
    data: XOR<postUpdateInput, postUncheckedUpdateInput>
    /**
     * Choose, which post to update.
     * 
    **/
    where: postWhereUniqueInput
  }


  /**
   * post updateMany
   */
  export type postUpdateManyArgs = {
    /**
     * The data used to update posts.
     * 
    **/
    data: XOR<postUpdateManyMutationInput, postUncheckedUpdateManyInput>
    /**
     * Filter which posts to update
     * 
    **/
    where?: postWhereInput
  }


  /**
   * post upsert
   */
  export type postUpsertArgs = {
    /**
     * Select specific fields to fetch from the post
     * 
    **/
    select?: postSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: postInclude | null
    /**
     * The filter to search for the post to update in case it exists.
     * 
    **/
    where: postWhereUniqueInput
    /**
     * In case the post found by the `where` argument doesn't exist, create a new post with this data.
     * 
    **/
    create: XOR<postCreateInput, postUncheckedCreateInput>
    /**
     * In case the post was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<postUpdateInput, postUncheckedUpdateInput>
  }


  /**
   * post delete
   */
  export type postDeleteArgs = {
    /**
     * Select specific fields to fetch from the post
     * 
    **/
    select?: postSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: postInclude | null
    /**
     * Filter which post to delete.
     * 
    **/
    where: postWhereUniqueInput
  }


  /**
   * post deleteMany
   */
  export type postDeleteManyArgs = {
    /**
     * Filter which posts to delete
     * 
    **/
    where?: postWhereInput
  }


  /**
   * post without action
   */
  export type postArgs = {
    /**
     * Select specific fields to fetch from the post
     * 
    **/
    select?: postSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: postInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const CommentScalarFieldEnum: {
    id: 'id',
    content: 'content',
    postId: 'postId',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    parrentCommentId: 'parrentCommentId'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const FriendsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    friendId: 'friendId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isAccepted: 'isAccepted',
    block: 'block'
  };

  export type FriendsScalarFieldEnum = (typeof FriendsScalarFieldEnum)[keyof typeof FriendsScalarFieldEnum]


  export const LikeScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    postId: 'postId',
    likeCount: 'likeCount'
  };

  export type LikeScalarFieldEnum = (typeof LikeScalarFieldEnum)[keyof typeof LikeScalarFieldEnum]


  export const NotificationsScalarFieldEnum: {
    id: 'id',
    content: 'content',
    userId: 'userId',
    createdAt: 'createdAt',
    type: 'type',
    redirect: 'redirect',
    read: 'read'
  };

  export type NotificationsScalarFieldEnum = (typeof NotificationsScalarFieldEnum)[keyof typeof NotificationsScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    media: 'media',
    content: 'content',
    type: 'type',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    firstname: 'firstname',
    lastname: 'lastname',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type userWhereInput = {
    AND?: Enumerable<userWhereInput>
    OR?: Enumerable<userWhereInput>
    NOT?: Enumerable<userWhereInput>
    id?: StringFilter | string
    username?: StringFilter | string
    firstname?: StringFilter | string
    lastname?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    comment?: CommentListRelationFilter
    following?: FriendsListRelationFilter
    followers?: FriendsListRelationFilter
    like?: LikeListRelationFilter
    notifications?: NotificationsListRelationFilter
    post?: PostListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    comment?: commentOrderByRelationAggregateInput
    following?: friendsOrderByRelationAggregateInput
    followers?: friendsOrderByRelationAggregateInput
    like?: likeOrderByRelationAggregateInput
    notifications?: notificationsOrderByRelationAggregateInput
    post?: postOrderByRelationAggregateInput
  }

  export type userWhereUniqueInput = {
    id?: string
  }

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: userCountOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: Enumerable<userScalarWhereWithAggregatesInput>
    OR?: Enumerable<userScalarWhereWithAggregatesInput>
    NOT?: Enumerable<userScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    username?: StringWithAggregatesFilter | string
    firstname?: StringWithAggregatesFilter | string
    lastname?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type friendsWhereInput = {
    AND?: Enumerable<friendsWhereInput>
    OR?: Enumerable<friendsWhereInput>
    NOT?: Enumerable<friendsWhereInput>
    id?: StringFilter | string
    userId?: StringFilter | string
    friendId?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    isAccepted?: BoolFilter | boolean
    block?: BoolFilter | boolean
    follower?: XOR<UserRelationFilter, userWhereInput>
    user?: XOR<UserRelationFilter, userWhereInput>
  }

  export type friendsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    friendId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isAccepted?: SortOrder
    block?: SortOrder
    follower?: userOrderByWithRelationInput
    user?: userOrderByWithRelationInput
  }

  export type friendsWhereUniqueInput = {
    id?: string
    friendId_userId?: friendsFriendIdUserIdCompoundUniqueInput
  }

  export type friendsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    friendId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isAccepted?: SortOrder
    block?: SortOrder
    _count?: friendsCountOrderByAggregateInput
    _max?: friendsMaxOrderByAggregateInput
    _min?: friendsMinOrderByAggregateInput
  }

  export type friendsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<friendsScalarWhereWithAggregatesInput>
    OR?: Enumerable<friendsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<friendsScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    userId?: StringWithAggregatesFilter | string
    friendId?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    isAccepted?: BoolWithAggregatesFilter | boolean
    block?: BoolWithAggregatesFilter | boolean
  }

  export type commentWhereInput = {
    AND?: Enumerable<commentWhereInput>
    OR?: Enumerable<commentWhereInput>
    NOT?: Enumerable<commentWhereInput>
    id?: StringFilter | string
    content?: StringFilter | string
    postId?: StringFilter | string
    userId?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    parrentCommentId?: StringNullableFilter | string | null
    comment?: XOR<CommentRelationFilter, commentWhereInput> | null
    post?: XOR<PostRelationFilter, postWhereInput>
    user?: XOR<UserRelationFilter, userWhereInput>
    other_comment?: CommentListRelationFilter
  }

  export type commentOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parrentCommentId?: SortOrder
    comment?: commentOrderByWithRelationInput
    post?: postOrderByWithRelationInput
    user?: userOrderByWithRelationInput
    other_comment?: commentOrderByRelationAggregateInput
  }

  export type commentWhereUniqueInput = {
    id?: string
  }

  export type commentOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parrentCommentId?: SortOrder
    _count?: commentCountOrderByAggregateInput
    _max?: commentMaxOrderByAggregateInput
    _min?: commentMinOrderByAggregateInput
  }

  export type commentScalarWhereWithAggregatesInput = {
    AND?: Enumerable<commentScalarWhereWithAggregatesInput>
    OR?: Enumerable<commentScalarWhereWithAggregatesInput>
    NOT?: Enumerable<commentScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    content?: StringWithAggregatesFilter | string
    postId?: StringWithAggregatesFilter | string
    userId?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    parrentCommentId?: StringNullableWithAggregatesFilter | string | null
  }

  export type likeWhereInput = {
    AND?: Enumerable<likeWhereInput>
    OR?: Enumerable<likeWhereInput>
    NOT?: Enumerable<likeWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    userId?: StringFilter | string
    postId?: StringFilter | string
    likeCount?: BigIntFilter | bigint | number
    post?: XOR<PostRelationFilter, postWhereInput>
    user?: XOR<UserRelationFilter, userWhereInput>
  }

  export type likeOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    likeCount?: SortOrder
    post?: postOrderByWithRelationInput
    user?: userOrderByWithRelationInput
  }

  export type likeWhereUniqueInput = {
    id?: string
  }

  export type likeOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    likeCount?: SortOrder
    _count?: likeCountOrderByAggregateInput
    _avg?: likeAvgOrderByAggregateInput
    _max?: likeMaxOrderByAggregateInput
    _min?: likeMinOrderByAggregateInput
    _sum?: likeSumOrderByAggregateInput
  }

  export type likeScalarWhereWithAggregatesInput = {
    AND?: Enumerable<likeScalarWhereWithAggregatesInput>
    OR?: Enumerable<likeScalarWhereWithAggregatesInput>
    NOT?: Enumerable<likeScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    userId?: StringWithAggregatesFilter | string
    postId?: StringWithAggregatesFilter | string
    likeCount?: BigIntWithAggregatesFilter | bigint | number
  }

  export type notificationsWhereInput = {
    AND?: Enumerable<notificationsWhereInput>
    OR?: Enumerable<notificationsWhereInput>
    NOT?: Enumerable<notificationsWhereInput>
    id?: StringFilter | string
    content?: StringFilter | string
    userId?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    type?: EnumNotificationTypeFilter | NotificationType
    redirect?: StringFilter | string
    read?: BoolFilter | boolean
    user?: XOR<UserRelationFilter, userWhereInput>
  }

  export type notificationsOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    type?: SortOrder
    redirect?: SortOrder
    read?: SortOrder
    user?: userOrderByWithRelationInput
  }

  export type notificationsWhereUniqueInput = {
    id?: string
  }

  export type notificationsOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    type?: SortOrder
    redirect?: SortOrder
    read?: SortOrder
    _count?: notificationsCountOrderByAggregateInput
    _max?: notificationsMaxOrderByAggregateInput
    _min?: notificationsMinOrderByAggregateInput
  }

  export type notificationsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<notificationsScalarWhereWithAggregatesInput>
    OR?: Enumerable<notificationsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<notificationsScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    content?: StringWithAggregatesFilter | string
    userId?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    type?: EnumNotificationTypeWithAggregatesFilter | NotificationType
    redirect?: StringWithAggregatesFilter | string
    read?: BoolWithAggregatesFilter | boolean
  }

  export type postWhereInput = {
    AND?: Enumerable<postWhereInput>
    OR?: Enumerable<postWhereInput>
    NOT?: Enumerable<postWhereInput>
    id?: StringFilter | string
    userId?: StringFilter | string
    media?: StringFilter | string
    content?: StringFilter | string
    type?: EnumPostTypeFilter | PostType
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    user?: XOR<UserRelationFilter, userWhereInput>
    comment?: CommentListRelationFilter
    like?: LikeListRelationFilter
  }

  export type postOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    media?: SortOrder
    content?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: userOrderByWithRelationInput
    comment?: commentOrderByRelationAggregateInput
    like?: likeOrderByRelationAggregateInput
  }

  export type postWhereUniqueInput = {
    id?: string
  }

  export type postOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    media?: SortOrder
    content?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: postCountOrderByAggregateInput
    _max?: postMaxOrderByAggregateInput
    _min?: postMinOrderByAggregateInput
  }

  export type postScalarWhereWithAggregatesInput = {
    AND?: Enumerable<postScalarWhereWithAggregatesInput>
    OR?: Enumerable<postScalarWhereWithAggregatesInput>
    NOT?: Enumerable<postScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    userId?: StringWithAggregatesFilter | string
    media?: StringWithAggregatesFilter | string
    content?: StringWithAggregatesFilter | string
    type?: EnumPostTypeWithAggregatesFilter | PostType
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type userCreateInput = {
    id?: string
    username: string
    firstname?: string
    lastname?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    comment?: commentCreateNestedManyWithoutUserInput
    following?: friendsCreateNestedManyWithoutFollowerInput
    followers?: friendsCreateNestedManyWithoutUserInput
    like?: likeCreateNestedManyWithoutUserInput
    notifications?: notificationsCreateNestedManyWithoutUserInput
    post?: postCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    id?: string
    username: string
    firstname?: string
    lastname?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    comment?: commentUncheckedCreateNestedManyWithoutUserInput
    following?: friendsUncheckedCreateNestedManyWithoutFollowerInput
    followers?: friendsUncheckedCreateNestedManyWithoutUserInput
    like?: likeUncheckedCreateNestedManyWithoutUserInput
    notifications?: notificationsUncheckedCreateNestedManyWithoutUserInput
    post?: postUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: commentUpdateManyWithoutUserNestedInput
    following?: friendsUpdateManyWithoutFollowerNestedInput
    followers?: friendsUpdateManyWithoutUserNestedInput
    like?: likeUpdateManyWithoutUserNestedInput
    notifications?: notificationsUpdateManyWithoutUserNestedInput
    post?: postUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: commentUncheckedUpdateManyWithoutUserNestedInput
    following?: friendsUncheckedUpdateManyWithoutFollowerNestedInput
    followers?: friendsUncheckedUpdateManyWithoutUserNestedInput
    like?: likeUncheckedUpdateManyWithoutUserNestedInput
    notifications?: notificationsUncheckedUpdateManyWithoutUserNestedInput
    post?: postUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    id?: string
    username: string
    firstname?: string
    lastname?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type friendsCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isAccepted?: boolean
    block?: boolean
    follower: userCreateNestedOneWithoutFollowingInput
    user: userCreateNestedOneWithoutFollowersInput
  }

  export type friendsUncheckedCreateInput = {
    id?: string
    userId: string
    friendId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isAccepted?: boolean
    block?: boolean
  }

  export type friendsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAccepted?: BoolFieldUpdateOperationsInput | boolean
    block?: BoolFieldUpdateOperationsInput | boolean
    follower?: userUpdateOneRequiredWithoutFollowingNestedInput
    user?: userUpdateOneRequiredWithoutFollowersNestedInput
  }

  export type friendsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    friendId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAccepted?: BoolFieldUpdateOperationsInput | boolean
    block?: BoolFieldUpdateOperationsInput | boolean
  }

  export type friendsCreateManyInput = {
    id?: string
    userId: string
    friendId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isAccepted?: boolean
    block?: boolean
  }

  export type friendsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAccepted?: BoolFieldUpdateOperationsInput | boolean
    block?: BoolFieldUpdateOperationsInput | boolean
  }

  export type friendsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    friendId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAccepted?: BoolFieldUpdateOperationsInput | boolean
    block?: BoolFieldUpdateOperationsInput | boolean
  }

  export type commentCreateInput = {
    id: string
    content: string
    createdAt?: Date | string
    updatedAt: Date | string
    comment?: commentCreateNestedOneWithoutOther_commentInput
    post: postCreateNestedOneWithoutCommentInput
    user: userCreateNestedOneWithoutCommentInput
    other_comment?: commentCreateNestedManyWithoutCommentInput
  }

  export type commentUncheckedCreateInput = {
    id: string
    content: string
    postId: string
    userId: string
    createdAt?: Date | string
    updatedAt: Date | string
    parrentCommentId?: string | null
    other_comment?: commentUncheckedCreateNestedManyWithoutCommentInput
  }

  export type commentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: commentUpdateOneWithoutOther_commentNestedInput
    post?: postUpdateOneRequiredWithoutCommentNestedInput
    user?: userUpdateOneRequiredWithoutCommentNestedInput
    other_comment?: commentUpdateManyWithoutCommentNestedInput
  }

  export type commentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parrentCommentId?: NullableStringFieldUpdateOperationsInput | string | null
    other_comment?: commentUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type commentCreateManyInput = {
    id: string
    content: string
    postId: string
    userId: string
    createdAt?: Date | string
    updatedAt: Date | string
    parrentCommentId?: string | null
  }

  export type commentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type commentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parrentCommentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type likeCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    likeCount: bigint | number
    post: postCreateNestedOneWithoutLikeInput
    user: userCreateNestedOneWithoutLikeInput
  }

  export type likeUncheckedCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    userId: string
    postId: string
    likeCount: bigint | number
  }

  export type likeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likeCount?: BigIntFieldUpdateOperationsInput | bigint | number
    post?: postUpdateOneRequiredWithoutLikeNestedInput
    user?: userUpdateOneRequiredWithoutLikeNestedInput
  }

  export type likeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    likeCount?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type likeCreateManyInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    userId: string
    postId: string
    likeCount: bigint | number
  }

  export type likeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likeCount?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type likeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    likeCount?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type notificationsCreateInput = {
    id: string
    content: string
    createdAt?: Date | string
    type: NotificationType
    redirect: string
    read?: boolean
    user: userCreateNestedOneWithoutNotificationsInput
  }

  export type notificationsUncheckedCreateInput = {
    id: string
    content: string
    userId: string
    createdAt?: Date | string
    type: NotificationType
    redirect: string
    read?: boolean
  }

  export type notificationsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | NotificationType
    redirect?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    user?: userUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type notificationsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | NotificationType
    redirect?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
  }

  export type notificationsCreateManyInput = {
    id: string
    content: string
    userId: string
    createdAt?: Date | string
    type: NotificationType
    redirect: string
    read?: boolean
  }

  export type notificationsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | NotificationType
    redirect?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
  }

  export type notificationsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | NotificationType
    redirect?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
  }

  export type postCreateInput = {
    id: string
    media?: string
    content: string
    type?: PostType
    createdAt?: Date | string
    updatedAt: Date | string
    user: userCreateNestedOneWithoutPostInput
    comment?: commentCreateNestedManyWithoutPostInput
    like?: likeCreateNestedManyWithoutPostInput
  }

  export type postUncheckedCreateInput = {
    id: string
    userId: string
    media?: string
    content: string
    type?: PostType
    createdAt?: Date | string
    updatedAt: Date | string
    comment?: commentUncheckedCreateNestedManyWithoutPostInput
    like?: likeUncheckedCreateNestedManyWithoutPostInput
  }

  export type postUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    media?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumPostTypeFieldUpdateOperationsInput | PostType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutPostNestedInput
    comment?: commentUpdateManyWithoutPostNestedInput
    like?: likeUpdateManyWithoutPostNestedInput
  }

  export type postUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    media?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumPostTypeFieldUpdateOperationsInput | PostType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: commentUncheckedUpdateManyWithoutPostNestedInput
    like?: likeUncheckedUpdateManyWithoutPostNestedInput
  }

  export type postCreateManyInput = {
    id: string
    userId: string
    media?: string
    content: string
    type?: PostType
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type postUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    media?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumPostTypeFieldUpdateOperationsInput | PostType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type postUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    media?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumPostTypeFieldUpdateOperationsInput | PostType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type CommentListRelationFilter = {
    every?: commentWhereInput
    some?: commentWhereInput
    none?: commentWhereInput
  }

  export type FriendsListRelationFilter = {
    every?: friendsWhereInput
    some?: friendsWhereInput
    none?: friendsWhereInput
  }

  export type LikeListRelationFilter = {
    every?: likeWhereInput
    some?: likeWhereInput
    none?: likeWhereInput
  }

  export type NotificationsListRelationFilter = {
    every?: notificationsWhereInput
    some?: notificationsWhereInput
    none?: notificationsWhereInput
  }

  export type PostListRelationFilter = {
    every?: postWhereInput
    some?: postWhereInput
    none?: postWhereInput
  }

  export type commentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type friendsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type likeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type notificationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type postOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type UserRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type friendsFriendIdUserIdCompoundUniqueInput = {
    friendId: string
    userId: string
  }

  export type friendsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    friendId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isAccepted?: SortOrder
    block?: SortOrder
  }

  export type friendsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    friendId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isAccepted?: SortOrder
    block?: SortOrder
  }

  export type friendsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    friendId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isAccepted?: SortOrder
    block?: SortOrder
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type CommentRelationFilter = {
    is?: commentWhereInput | null
    isNot?: commentWhereInput | null
  }

  export type PostRelationFilter = {
    is?: postWhereInput
    isNot?: postWhereInput
  }

  export type commentCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parrentCommentId?: SortOrder
  }

  export type commentMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parrentCommentId?: SortOrder
  }

  export type commentMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parrentCommentId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type BigIntFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntFilter | bigint | number
  }

  export type likeCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    likeCount?: SortOrder
  }

  export type likeAvgOrderByAggregateInput = {
    likeCount?: SortOrder
  }

  export type likeMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    likeCount?: SortOrder
  }

  export type likeMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    likeCount?: SortOrder
  }

  export type likeSumOrderByAggregateInput = {
    likeCount?: SortOrder
  }

  export type BigIntWithAggregatesFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntWithAggregatesFilter | bigint | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedBigIntFilter
    _min?: NestedBigIntFilter
    _max?: NestedBigIntFilter
  }

  export type EnumNotificationTypeFilter = {
    equals?: NotificationType
    in?: Enumerable<NotificationType>
    notIn?: Enumerable<NotificationType>
    not?: NestedEnumNotificationTypeFilter | NotificationType
  }

  export type notificationsCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    type?: SortOrder
    redirect?: SortOrder
    read?: SortOrder
  }

  export type notificationsMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    type?: SortOrder
    redirect?: SortOrder
    read?: SortOrder
  }

  export type notificationsMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    type?: SortOrder
    redirect?: SortOrder
    read?: SortOrder
  }

  export type EnumNotificationTypeWithAggregatesFilter = {
    equals?: NotificationType
    in?: Enumerable<NotificationType>
    notIn?: Enumerable<NotificationType>
    not?: NestedEnumNotificationTypeWithAggregatesFilter | NotificationType
    _count?: NestedIntFilter
    _min?: NestedEnumNotificationTypeFilter
    _max?: NestedEnumNotificationTypeFilter
  }

  export type EnumPostTypeFilter = {
    equals?: PostType
    in?: Enumerable<PostType>
    notIn?: Enumerable<PostType>
    not?: NestedEnumPostTypeFilter | PostType
  }

  export type postCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    media?: SortOrder
    content?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type postMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    media?: SortOrder
    content?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type postMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    media?: SortOrder
    content?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumPostTypeWithAggregatesFilter = {
    equals?: PostType
    in?: Enumerable<PostType>
    notIn?: Enumerable<PostType>
    not?: NestedEnumPostTypeWithAggregatesFilter | PostType
    _count?: NestedIntFilter
    _min?: NestedEnumPostTypeFilter
    _max?: NestedEnumPostTypeFilter
  }

  export type commentCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<commentCreateWithoutUserInput>, Enumerable<commentUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<commentCreateOrConnectWithoutUserInput>
    createMany?: commentCreateManyUserInputEnvelope
    connect?: Enumerable<commentWhereUniqueInput>
  }

  export type friendsCreateNestedManyWithoutFollowerInput = {
    create?: XOR<Enumerable<friendsCreateWithoutFollowerInput>, Enumerable<friendsUncheckedCreateWithoutFollowerInput>>
    connectOrCreate?: Enumerable<friendsCreateOrConnectWithoutFollowerInput>
    createMany?: friendsCreateManyFollowerInputEnvelope
    connect?: Enumerable<friendsWhereUniqueInput>
  }

  export type friendsCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<friendsCreateWithoutUserInput>, Enumerable<friendsUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<friendsCreateOrConnectWithoutUserInput>
    createMany?: friendsCreateManyUserInputEnvelope
    connect?: Enumerable<friendsWhereUniqueInput>
  }

  export type likeCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<likeCreateWithoutUserInput>, Enumerable<likeUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<likeCreateOrConnectWithoutUserInput>
    createMany?: likeCreateManyUserInputEnvelope
    connect?: Enumerable<likeWhereUniqueInput>
  }

  export type notificationsCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<notificationsCreateWithoutUserInput>, Enumerable<notificationsUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<notificationsCreateOrConnectWithoutUserInput>
    createMany?: notificationsCreateManyUserInputEnvelope
    connect?: Enumerable<notificationsWhereUniqueInput>
  }

  export type postCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<postCreateWithoutUserInput>, Enumerable<postUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<postCreateOrConnectWithoutUserInput>
    createMany?: postCreateManyUserInputEnvelope
    connect?: Enumerable<postWhereUniqueInput>
  }

  export type commentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<commentCreateWithoutUserInput>, Enumerable<commentUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<commentCreateOrConnectWithoutUserInput>
    createMany?: commentCreateManyUserInputEnvelope
    connect?: Enumerable<commentWhereUniqueInput>
  }

  export type friendsUncheckedCreateNestedManyWithoutFollowerInput = {
    create?: XOR<Enumerable<friendsCreateWithoutFollowerInput>, Enumerable<friendsUncheckedCreateWithoutFollowerInput>>
    connectOrCreate?: Enumerable<friendsCreateOrConnectWithoutFollowerInput>
    createMany?: friendsCreateManyFollowerInputEnvelope
    connect?: Enumerable<friendsWhereUniqueInput>
  }

  export type friendsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<friendsCreateWithoutUserInput>, Enumerable<friendsUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<friendsCreateOrConnectWithoutUserInput>
    createMany?: friendsCreateManyUserInputEnvelope
    connect?: Enumerable<friendsWhereUniqueInput>
  }

  export type likeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<likeCreateWithoutUserInput>, Enumerable<likeUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<likeCreateOrConnectWithoutUserInput>
    createMany?: likeCreateManyUserInputEnvelope
    connect?: Enumerable<likeWhereUniqueInput>
  }

  export type notificationsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<notificationsCreateWithoutUserInput>, Enumerable<notificationsUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<notificationsCreateOrConnectWithoutUserInput>
    createMany?: notificationsCreateManyUserInputEnvelope
    connect?: Enumerable<notificationsWhereUniqueInput>
  }

  export type postUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<postCreateWithoutUserInput>, Enumerable<postUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<postCreateOrConnectWithoutUserInput>
    createMany?: postCreateManyUserInputEnvelope
    connect?: Enumerable<postWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type commentUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<commentCreateWithoutUserInput>, Enumerable<commentUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<commentCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<commentUpsertWithWhereUniqueWithoutUserInput>
    createMany?: commentCreateManyUserInputEnvelope
    set?: Enumerable<commentWhereUniqueInput>
    disconnect?: Enumerable<commentWhereUniqueInput>
    delete?: Enumerable<commentWhereUniqueInput>
    connect?: Enumerable<commentWhereUniqueInput>
    update?: Enumerable<commentUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<commentUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<commentScalarWhereInput>
  }

  export type friendsUpdateManyWithoutFollowerNestedInput = {
    create?: XOR<Enumerable<friendsCreateWithoutFollowerInput>, Enumerable<friendsUncheckedCreateWithoutFollowerInput>>
    connectOrCreate?: Enumerable<friendsCreateOrConnectWithoutFollowerInput>
    upsert?: Enumerable<friendsUpsertWithWhereUniqueWithoutFollowerInput>
    createMany?: friendsCreateManyFollowerInputEnvelope
    set?: Enumerable<friendsWhereUniqueInput>
    disconnect?: Enumerable<friendsWhereUniqueInput>
    delete?: Enumerable<friendsWhereUniqueInput>
    connect?: Enumerable<friendsWhereUniqueInput>
    update?: Enumerable<friendsUpdateWithWhereUniqueWithoutFollowerInput>
    updateMany?: Enumerable<friendsUpdateManyWithWhereWithoutFollowerInput>
    deleteMany?: Enumerable<friendsScalarWhereInput>
  }

  export type friendsUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<friendsCreateWithoutUserInput>, Enumerable<friendsUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<friendsCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<friendsUpsertWithWhereUniqueWithoutUserInput>
    createMany?: friendsCreateManyUserInputEnvelope
    set?: Enumerable<friendsWhereUniqueInput>
    disconnect?: Enumerable<friendsWhereUniqueInput>
    delete?: Enumerable<friendsWhereUniqueInput>
    connect?: Enumerable<friendsWhereUniqueInput>
    update?: Enumerable<friendsUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<friendsUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<friendsScalarWhereInput>
  }

  export type likeUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<likeCreateWithoutUserInput>, Enumerable<likeUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<likeCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<likeUpsertWithWhereUniqueWithoutUserInput>
    createMany?: likeCreateManyUserInputEnvelope
    set?: Enumerable<likeWhereUniqueInput>
    disconnect?: Enumerable<likeWhereUniqueInput>
    delete?: Enumerable<likeWhereUniqueInput>
    connect?: Enumerable<likeWhereUniqueInput>
    update?: Enumerable<likeUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<likeUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<likeScalarWhereInput>
  }

  export type notificationsUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<notificationsCreateWithoutUserInput>, Enumerable<notificationsUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<notificationsCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<notificationsUpsertWithWhereUniqueWithoutUserInput>
    createMany?: notificationsCreateManyUserInputEnvelope
    set?: Enumerable<notificationsWhereUniqueInput>
    disconnect?: Enumerable<notificationsWhereUniqueInput>
    delete?: Enumerable<notificationsWhereUniqueInput>
    connect?: Enumerable<notificationsWhereUniqueInput>
    update?: Enumerable<notificationsUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<notificationsUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<notificationsScalarWhereInput>
  }

  export type postUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<postCreateWithoutUserInput>, Enumerable<postUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<postCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<postUpsertWithWhereUniqueWithoutUserInput>
    createMany?: postCreateManyUserInputEnvelope
    set?: Enumerable<postWhereUniqueInput>
    disconnect?: Enumerable<postWhereUniqueInput>
    delete?: Enumerable<postWhereUniqueInput>
    connect?: Enumerable<postWhereUniqueInput>
    update?: Enumerable<postUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<postUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<postScalarWhereInput>
  }

  export type commentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<commentCreateWithoutUserInput>, Enumerable<commentUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<commentCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<commentUpsertWithWhereUniqueWithoutUserInput>
    createMany?: commentCreateManyUserInputEnvelope
    set?: Enumerable<commentWhereUniqueInput>
    disconnect?: Enumerable<commentWhereUniqueInput>
    delete?: Enumerable<commentWhereUniqueInput>
    connect?: Enumerable<commentWhereUniqueInput>
    update?: Enumerable<commentUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<commentUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<commentScalarWhereInput>
  }

  export type friendsUncheckedUpdateManyWithoutFollowerNestedInput = {
    create?: XOR<Enumerable<friendsCreateWithoutFollowerInput>, Enumerable<friendsUncheckedCreateWithoutFollowerInput>>
    connectOrCreate?: Enumerable<friendsCreateOrConnectWithoutFollowerInput>
    upsert?: Enumerable<friendsUpsertWithWhereUniqueWithoutFollowerInput>
    createMany?: friendsCreateManyFollowerInputEnvelope
    set?: Enumerable<friendsWhereUniqueInput>
    disconnect?: Enumerable<friendsWhereUniqueInput>
    delete?: Enumerable<friendsWhereUniqueInput>
    connect?: Enumerable<friendsWhereUniqueInput>
    update?: Enumerable<friendsUpdateWithWhereUniqueWithoutFollowerInput>
    updateMany?: Enumerable<friendsUpdateManyWithWhereWithoutFollowerInput>
    deleteMany?: Enumerable<friendsScalarWhereInput>
  }

  export type friendsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<friendsCreateWithoutUserInput>, Enumerable<friendsUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<friendsCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<friendsUpsertWithWhereUniqueWithoutUserInput>
    createMany?: friendsCreateManyUserInputEnvelope
    set?: Enumerable<friendsWhereUniqueInput>
    disconnect?: Enumerable<friendsWhereUniqueInput>
    delete?: Enumerable<friendsWhereUniqueInput>
    connect?: Enumerable<friendsWhereUniqueInput>
    update?: Enumerable<friendsUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<friendsUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<friendsScalarWhereInput>
  }

  export type likeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<likeCreateWithoutUserInput>, Enumerable<likeUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<likeCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<likeUpsertWithWhereUniqueWithoutUserInput>
    createMany?: likeCreateManyUserInputEnvelope
    set?: Enumerable<likeWhereUniqueInput>
    disconnect?: Enumerable<likeWhereUniqueInput>
    delete?: Enumerable<likeWhereUniqueInput>
    connect?: Enumerable<likeWhereUniqueInput>
    update?: Enumerable<likeUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<likeUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<likeScalarWhereInput>
  }

  export type notificationsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<notificationsCreateWithoutUserInput>, Enumerable<notificationsUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<notificationsCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<notificationsUpsertWithWhereUniqueWithoutUserInput>
    createMany?: notificationsCreateManyUserInputEnvelope
    set?: Enumerable<notificationsWhereUniqueInput>
    disconnect?: Enumerable<notificationsWhereUniqueInput>
    delete?: Enumerable<notificationsWhereUniqueInput>
    connect?: Enumerable<notificationsWhereUniqueInput>
    update?: Enumerable<notificationsUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<notificationsUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<notificationsScalarWhereInput>
  }

  export type postUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<postCreateWithoutUserInput>, Enumerable<postUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<postCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<postUpsertWithWhereUniqueWithoutUserInput>
    createMany?: postCreateManyUserInputEnvelope
    set?: Enumerable<postWhereUniqueInput>
    disconnect?: Enumerable<postWhereUniqueInput>
    delete?: Enumerable<postWhereUniqueInput>
    connect?: Enumerable<postWhereUniqueInput>
    update?: Enumerable<postUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<postUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<postScalarWhereInput>
  }

  export type userCreateNestedOneWithoutFollowingInput = {
    create?: XOR<userCreateWithoutFollowingInput, userUncheckedCreateWithoutFollowingInput>
    connectOrCreate?: userCreateOrConnectWithoutFollowingInput
    connect?: userWhereUniqueInput
  }

  export type userCreateNestedOneWithoutFollowersInput = {
    create?: XOR<userCreateWithoutFollowersInput, userUncheckedCreateWithoutFollowersInput>
    connectOrCreate?: userCreateOrConnectWithoutFollowersInput
    connect?: userWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type userUpdateOneRequiredWithoutFollowingNestedInput = {
    create?: XOR<userCreateWithoutFollowingInput, userUncheckedCreateWithoutFollowingInput>
    connectOrCreate?: userCreateOrConnectWithoutFollowingInput
    upsert?: userUpsertWithoutFollowingInput
    connect?: userWhereUniqueInput
    update?: XOR<userUpdateWithoutFollowingInput, userUncheckedUpdateWithoutFollowingInput>
  }

  export type userUpdateOneRequiredWithoutFollowersNestedInput = {
    create?: XOR<userCreateWithoutFollowersInput, userUncheckedCreateWithoutFollowersInput>
    connectOrCreate?: userCreateOrConnectWithoutFollowersInput
    upsert?: userUpsertWithoutFollowersInput
    connect?: userWhereUniqueInput
    update?: XOR<userUpdateWithoutFollowersInput, userUncheckedUpdateWithoutFollowersInput>
  }

  export type commentCreateNestedOneWithoutOther_commentInput = {
    create?: XOR<commentCreateWithoutOther_commentInput, commentUncheckedCreateWithoutOther_commentInput>
    connectOrCreate?: commentCreateOrConnectWithoutOther_commentInput
    connect?: commentWhereUniqueInput
  }

  export type postCreateNestedOneWithoutCommentInput = {
    create?: XOR<postCreateWithoutCommentInput, postUncheckedCreateWithoutCommentInput>
    connectOrCreate?: postCreateOrConnectWithoutCommentInput
    connect?: postWhereUniqueInput
  }

  export type userCreateNestedOneWithoutCommentInput = {
    create?: XOR<userCreateWithoutCommentInput, userUncheckedCreateWithoutCommentInput>
    connectOrCreate?: userCreateOrConnectWithoutCommentInput
    connect?: userWhereUniqueInput
  }

  export type commentCreateNestedManyWithoutCommentInput = {
    create?: XOR<Enumerable<commentCreateWithoutCommentInput>, Enumerable<commentUncheckedCreateWithoutCommentInput>>
    connectOrCreate?: Enumerable<commentCreateOrConnectWithoutCommentInput>
    createMany?: commentCreateManyCommentInputEnvelope
    connect?: Enumerable<commentWhereUniqueInput>
  }

  export type commentUncheckedCreateNestedManyWithoutCommentInput = {
    create?: XOR<Enumerable<commentCreateWithoutCommentInput>, Enumerable<commentUncheckedCreateWithoutCommentInput>>
    connectOrCreate?: Enumerable<commentCreateOrConnectWithoutCommentInput>
    createMany?: commentCreateManyCommentInputEnvelope
    connect?: Enumerable<commentWhereUniqueInput>
  }

  export type commentUpdateOneWithoutOther_commentNestedInput = {
    create?: XOR<commentCreateWithoutOther_commentInput, commentUncheckedCreateWithoutOther_commentInput>
    connectOrCreate?: commentCreateOrConnectWithoutOther_commentInput
    upsert?: commentUpsertWithoutOther_commentInput
    disconnect?: boolean
    delete?: boolean
    connect?: commentWhereUniqueInput
    update?: XOR<commentUpdateWithoutOther_commentInput, commentUncheckedUpdateWithoutOther_commentInput>
  }

  export type postUpdateOneRequiredWithoutCommentNestedInput = {
    create?: XOR<postCreateWithoutCommentInput, postUncheckedCreateWithoutCommentInput>
    connectOrCreate?: postCreateOrConnectWithoutCommentInput
    upsert?: postUpsertWithoutCommentInput
    connect?: postWhereUniqueInput
    update?: XOR<postUpdateWithoutCommentInput, postUncheckedUpdateWithoutCommentInput>
  }

  export type userUpdateOneRequiredWithoutCommentNestedInput = {
    create?: XOR<userCreateWithoutCommentInput, userUncheckedCreateWithoutCommentInput>
    connectOrCreate?: userCreateOrConnectWithoutCommentInput
    upsert?: userUpsertWithoutCommentInput
    connect?: userWhereUniqueInput
    update?: XOR<userUpdateWithoutCommentInput, userUncheckedUpdateWithoutCommentInput>
  }

  export type commentUpdateManyWithoutCommentNestedInput = {
    create?: XOR<Enumerable<commentCreateWithoutCommentInput>, Enumerable<commentUncheckedCreateWithoutCommentInput>>
    connectOrCreate?: Enumerable<commentCreateOrConnectWithoutCommentInput>
    upsert?: Enumerable<commentUpsertWithWhereUniqueWithoutCommentInput>
    createMany?: commentCreateManyCommentInputEnvelope
    set?: Enumerable<commentWhereUniqueInput>
    disconnect?: Enumerable<commentWhereUniqueInput>
    delete?: Enumerable<commentWhereUniqueInput>
    connect?: Enumerable<commentWhereUniqueInput>
    update?: Enumerable<commentUpdateWithWhereUniqueWithoutCommentInput>
    updateMany?: Enumerable<commentUpdateManyWithWhereWithoutCommentInput>
    deleteMany?: Enumerable<commentScalarWhereInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type commentUncheckedUpdateManyWithoutCommentNestedInput = {
    create?: XOR<Enumerable<commentCreateWithoutCommentInput>, Enumerable<commentUncheckedCreateWithoutCommentInput>>
    connectOrCreate?: Enumerable<commentCreateOrConnectWithoutCommentInput>
    upsert?: Enumerable<commentUpsertWithWhereUniqueWithoutCommentInput>
    createMany?: commentCreateManyCommentInputEnvelope
    set?: Enumerable<commentWhereUniqueInput>
    disconnect?: Enumerable<commentWhereUniqueInput>
    delete?: Enumerable<commentWhereUniqueInput>
    connect?: Enumerable<commentWhereUniqueInput>
    update?: Enumerable<commentUpdateWithWhereUniqueWithoutCommentInput>
    updateMany?: Enumerable<commentUpdateManyWithWhereWithoutCommentInput>
    deleteMany?: Enumerable<commentScalarWhereInput>
  }

  export type postCreateNestedOneWithoutLikeInput = {
    create?: XOR<postCreateWithoutLikeInput, postUncheckedCreateWithoutLikeInput>
    connectOrCreate?: postCreateOrConnectWithoutLikeInput
    connect?: postWhereUniqueInput
  }

  export type userCreateNestedOneWithoutLikeInput = {
    create?: XOR<userCreateWithoutLikeInput, userUncheckedCreateWithoutLikeInput>
    connectOrCreate?: userCreateOrConnectWithoutLikeInput
    connect?: userWhereUniqueInput
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type postUpdateOneRequiredWithoutLikeNestedInput = {
    create?: XOR<postCreateWithoutLikeInput, postUncheckedCreateWithoutLikeInput>
    connectOrCreate?: postCreateOrConnectWithoutLikeInput
    upsert?: postUpsertWithoutLikeInput
    connect?: postWhereUniqueInput
    update?: XOR<postUpdateWithoutLikeInput, postUncheckedUpdateWithoutLikeInput>
  }

  export type userUpdateOneRequiredWithoutLikeNestedInput = {
    create?: XOR<userCreateWithoutLikeInput, userUncheckedCreateWithoutLikeInput>
    connectOrCreate?: userCreateOrConnectWithoutLikeInput
    upsert?: userUpsertWithoutLikeInput
    connect?: userWhereUniqueInput
    update?: XOR<userUpdateWithoutLikeInput, userUncheckedUpdateWithoutLikeInput>
  }

  export type userCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<userCreateWithoutNotificationsInput, userUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: userCreateOrConnectWithoutNotificationsInput
    connect?: userWhereUniqueInput
  }

  export type EnumNotificationTypeFieldUpdateOperationsInput = {
    set?: NotificationType
  }

  export type userUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<userCreateWithoutNotificationsInput, userUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: userCreateOrConnectWithoutNotificationsInput
    upsert?: userUpsertWithoutNotificationsInput
    connect?: userWhereUniqueInput
    update?: XOR<userUpdateWithoutNotificationsInput, userUncheckedUpdateWithoutNotificationsInput>
  }

  export type userCreateNestedOneWithoutPostInput = {
    create?: XOR<userCreateWithoutPostInput, userUncheckedCreateWithoutPostInput>
    connectOrCreate?: userCreateOrConnectWithoutPostInput
    connect?: userWhereUniqueInput
  }

  export type commentCreateNestedManyWithoutPostInput = {
    create?: XOR<Enumerable<commentCreateWithoutPostInput>, Enumerable<commentUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<commentCreateOrConnectWithoutPostInput>
    createMany?: commentCreateManyPostInputEnvelope
    connect?: Enumerable<commentWhereUniqueInput>
  }

  export type likeCreateNestedManyWithoutPostInput = {
    create?: XOR<Enumerable<likeCreateWithoutPostInput>, Enumerable<likeUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<likeCreateOrConnectWithoutPostInput>
    createMany?: likeCreateManyPostInputEnvelope
    connect?: Enumerable<likeWhereUniqueInput>
  }

  export type commentUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<Enumerable<commentCreateWithoutPostInput>, Enumerable<commentUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<commentCreateOrConnectWithoutPostInput>
    createMany?: commentCreateManyPostInputEnvelope
    connect?: Enumerable<commentWhereUniqueInput>
  }

  export type likeUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<Enumerable<likeCreateWithoutPostInput>, Enumerable<likeUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<likeCreateOrConnectWithoutPostInput>
    createMany?: likeCreateManyPostInputEnvelope
    connect?: Enumerable<likeWhereUniqueInput>
  }

  export type EnumPostTypeFieldUpdateOperationsInput = {
    set?: PostType
  }

  export type userUpdateOneRequiredWithoutPostNestedInput = {
    create?: XOR<userCreateWithoutPostInput, userUncheckedCreateWithoutPostInput>
    connectOrCreate?: userCreateOrConnectWithoutPostInput
    upsert?: userUpsertWithoutPostInput
    connect?: userWhereUniqueInput
    update?: XOR<userUpdateWithoutPostInput, userUncheckedUpdateWithoutPostInput>
  }

  export type commentUpdateManyWithoutPostNestedInput = {
    create?: XOR<Enumerable<commentCreateWithoutPostInput>, Enumerable<commentUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<commentCreateOrConnectWithoutPostInput>
    upsert?: Enumerable<commentUpsertWithWhereUniqueWithoutPostInput>
    createMany?: commentCreateManyPostInputEnvelope
    set?: Enumerable<commentWhereUniqueInput>
    disconnect?: Enumerable<commentWhereUniqueInput>
    delete?: Enumerable<commentWhereUniqueInput>
    connect?: Enumerable<commentWhereUniqueInput>
    update?: Enumerable<commentUpdateWithWhereUniqueWithoutPostInput>
    updateMany?: Enumerable<commentUpdateManyWithWhereWithoutPostInput>
    deleteMany?: Enumerable<commentScalarWhereInput>
  }

  export type likeUpdateManyWithoutPostNestedInput = {
    create?: XOR<Enumerable<likeCreateWithoutPostInput>, Enumerable<likeUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<likeCreateOrConnectWithoutPostInput>
    upsert?: Enumerable<likeUpsertWithWhereUniqueWithoutPostInput>
    createMany?: likeCreateManyPostInputEnvelope
    set?: Enumerable<likeWhereUniqueInput>
    disconnect?: Enumerable<likeWhereUniqueInput>
    delete?: Enumerable<likeWhereUniqueInput>
    connect?: Enumerable<likeWhereUniqueInput>
    update?: Enumerable<likeUpdateWithWhereUniqueWithoutPostInput>
    updateMany?: Enumerable<likeUpdateManyWithWhereWithoutPostInput>
    deleteMany?: Enumerable<likeScalarWhereInput>
  }

  export type commentUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<Enumerable<commentCreateWithoutPostInput>, Enumerable<commentUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<commentCreateOrConnectWithoutPostInput>
    upsert?: Enumerable<commentUpsertWithWhereUniqueWithoutPostInput>
    createMany?: commentCreateManyPostInputEnvelope
    set?: Enumerable<commentWhereUniqueInput>
    disconnect?: Enumerable<commentWhereUniqueInput>
    delete?: Enumerable<commentWhereUniqueInput>
    connect?: Enumerable<commentWhereUniqueInput>
    update?: Enumerable<commentUpdateWithWhereUniqueWithoutPostInput>
    updateMany?: Enumerable<commentUpdateManyWithWhereWithoutPostInput>
    deleteMany?: Enumerable<commentScalarWhereInput>
  }

  export type likeUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<Enumerable<likeCreateWithoutPostInput>, Enumerable<likeUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<likeCreateOrConnectWithoutPostInput>
    upsert?: Enumerable<likeUpsertWithWhereUniqueWithoutPostInput>
    createMany?: likeCreateManyPostInputEnvelope
    set?: Enumerable<likeWhereUniqueInput>
    disconnect?: Enumerable<likeWhereUniqueInput>
    delete?: Enumerable<likeWhereUniqueInput>
    connect?: Enumerable<likeWhereUniqueInput>
    update?: Enumerable<likeUpdateWithWhereUniqueWithoutPostInput>
    updateMany?: Enumerable<likeUpdateManyWithWhereWithoutPostInput>
    deleteMany?: Enumerable<likeScalarWhereInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedBigIntFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntFilter | bigint | number
  }

  export type NestedBigIntWithAggregatesFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntWithAggregatesFilter | bigint | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedBigIntFilter
    _min?: NestedBigIntFilter
    _max?: NestedBigIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedEnumNotificationTypeFilter = {
    equals?: NotificationType
    in?: Enumerable<NotificationType>
    notIn?: Enumerable<NotificationType>
    not?: NestedEnumNotificationTypeFilter | NotificationType
  }

  export type NestedEnumNotificationTypeWithAggregatesFilter = {
    equals?: NotificationType
    in?: Enumerable<NotificationType>
    notIn?: Enumerable<NotificationType>
    not?: NestedEnumNotificationTypeWithAggregatesFilter | NotificationType
    _count?: NestedIntFilter
    _min?: NestedEnumNotificationTypeFilter
    _max?: NestedEnumNotificationTypeFilter
  }

  export type NestedEnumPostTypeFilter = {
    equals?: PostType
    in?: Enumerable<PostType>
    notIn?: Enumerable<PostType>
    not?: NestedEnumPostTypeFilter | PostType
  }

  export type NestedEnumPostTypeWithAggregatesFilter = {
    equals?: PostType
    in?: Enumerable<PostType>
    notIn?: Enumerable<PostType>
    not?: NestedEnumPostTypeWithAggregatesFilter | PostType
    _count?: NestedIntFilter
    _min?: NestedEnumPostTypeFilter
    _max?: NestedEnumPostTypeFilter
  }

  export type commentCreateWithoutUserInput = {
    id: string
    content: string
    createdAt?: Date | string
    updatedAt: Date | string
    comment?: commentCreateNestedOneWithoutOther_commentInput
    post: postCreateNestedOneWithoutCommentInput
    other_comment?: commentCreateNestedManyWithoutCommentInput
  }

  export type commentUncheckedCreateWithoutUserInput = {
    id: string
    content: string
    postId: string
    createdAt?: Date | string
    updatedAt: Date | string
    parrentCommentId?: string | null
    other_comment?: commentUncheckedCreateNestedManyWithoutCommentInput
  }

  export type commentCreateOrConnectWithoutUserInput = {
    where: commentWhereUniqueInput
    create: XOR<commentCreateWithoutUserInput, commentUncheckedCreateWithoutUserInput>
  }

  export type commentCreateManyUserInputEnvelope = {
    data: Enumerable<commentCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type friendsCreateWithoutFollowerInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isAccepted?: boolean
    block?: boolean
    user: userCreateNestedOneWithoutFollowersInput
  }

  export type friendsUncheckedCreateWithoutFollowerInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isAccepted?: boolean
    block?: boolean
  }

  export type friendsCreateOrConnectWithoutFollowerInput = {
    where: friendsWhereUniqueInput
    create: XOR<friendsCreateWithoutFollowerInput, friendsUncheckedCreateWithoutFollowerInput>
  }

  export type friendsCreateManyFollowerInputEnvelope = {
    data: Enumerable<friendsCreateManyFollowerInput>
    skipDuplicates?: boolean
  }

  export type friendsCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isAccepted?: boolean
    block?: boolean
    follower: userCreateNestedOneWithoutFollowingInput
  }

  export type friendsUncheckedCreateWithoutUserInput = {
    id?: string
    friendId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isAccepted?: boolean
    block?: boolean
  }

  export type friendsCreateOrConnectWithoutUserInput = {
    where: friendsWhereUniqueInput
    create: XOR<friendsCreateWithoutUserInput, friendsUncheckedCreateWithoutUserInput>
  }

  export type friendsCreateManyUserInputEnvelope = {
    data: Enumerable<friendsCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type likeCreateWithoutUserInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    likeCount: bigint | number
    post: postCreateNestedOneWithoutLikeInput
  }

  export type likeUncheckedCreateWithoutUserInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    postId: string
    likeCount: bigint | number
  }

  export type likeCreateOrConnectWithoutUserInput = {
    where: likeWhereUniqueInput
    create: XOR<likeCreateWithoutUserInput, likeUncheckedCreateWithoutUserInput>
  }

  export type likeCreateManyUserInputEnvelope = {
    data: Enumerable<likeCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type notificationsCreateWithoutUserInput = {
    id: string
    content: string
    createdAt?: Date | string
    type: NotificationType
    redirect: string
    read?: boolean
  }

  export type notificationsUncheckedCreateWithoutUserInput = {
    id: string
    content: string
    createdAt?: Date | string
    type: NotificationType
    redirect: string
    read?: boolean
  }

  export type notificationsCreateOrConnectWithoutUserInput = {
    where: notificationsWhereUniqueInput
    create: XOR<notificationsCreateWithoutUserInput, notificationsUncheckedCreateWithoutUserInput>
  }

  export type notificationsCreateManyUserInputEnvelope = {
    data: Enumerable<notificationsCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type postCreateWithoutUserInput = {
    id: string
    media?: string
    content: string
    type?: PostType
    createdAt?: Date | string
    updatedAt: Date | string
    comment?: commentCreateNestedManyWithoutPostInput
    like?: likeCreateNestedManyWithoutPostInput
  }

  export type postUncheckedCreateWithoutUserInput = {
    id: string
    media?: string
    content: string
    type?: PostType
    createdAt?: Date | string
    updatedAt: Date | string
    comment?: commentUncheckedCreateNestedManyWithoutPostInput
    like?: likeUncheckedCreateNestedManyWithoutPostInput
  }

  export type postCreateOrConnectWithoutUserInput = {
    where: postWhereUniqueInput
    create: XOR<postCreateWithoutUserInput, postUncheckedCreateWithoutUserInput>
  }

  export type postCreateManyUserInputEnvelope = {
    data: Enumerable<postCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type commentUpsertWithWhereUniqueWithoutUserInput = {
    where: commentWhereUniqueInput
    update: XOR<commentUpdateWithoutUserInput, commentUncheckedUpdateWithoutUserInput>
    create: XOR<commentCreateWithoutUserInput, commentUncheckedCreateWithoutUserInput>
  }

  export type commentUpdateWithWhereUniqueWithoutUserInput = {
    where: commentWhereUniqueInput
    data: XOR<commentUpdateWithoutUserInput, commentUncheckedUpdateWithoutUserInput>
  }

  export type commentUpdateManyWithWhereWithoutUserInput = {
    where: commentScalarWhereInput
    data: XOR<commentUpdateManyMutationInput, commentUncheckedUpdateManyWithoutCommentInput>
  }

  export type commentScalarWhereInput = {
    AND?: Enumerable<commentScalarWhereInput>
    OR?: Enumerable<commentScalarWhereInput>
    NOT?: Enumerable<commentScalarWhereInput>
    id?: StringFilter | string
    content?: StringFilter | string
    postId?: StringFilter | string
    userId?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    parrentCommentId?: StringNullableFilter | string | null
  }

  export type friendsUpsertWithWhereUniqueWithoutFollowerInput = {
    where: friendsWhereUniqueInput
    update: XOR<friendsUpdateWithoutFollowerInput, friendsUncheckedUpdateWithoutFollowerInput>
    create: XOR<friendsCreateWithoutFollowerInput, friendsUncheckedCreateWithoutFollowerInput>
  }

  export type friendsUpdateWithWhereUniqueWithoutFollowerInput = {
    where: friendsWhereUniqueInput
    data: XOR<friendsUpdateWithoutFollowerInput, friendsUncheckedUpdateWithoutFollowerInput>
  }

  export type friendsUpdateManyWithWhereWithoutFollowerInput = {
    where: friendsScalarWhereInput
    data: XOR<friendsUpdateManyMutationInput, friendsUncheckedUpdateManyWithoutFollowingInput>
  }

  export type friendsScalarWhereInput = {
    AND?: Enumerable<friendsScalarWhereInput>
    OR?: Enumerable<friendsScalarWhereInput>
    NOT?: Enumerable<friendsScalarWhereInput>
    id?: StringFilter | string
    userId?: StringFilter | string
    friendId?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    isAccepted?: BoolFilter | boolean
    block?: BoolFilter | boolean
  }

  export type friendsUpsertWithWhereUniqueWithoutUserInput = {
    where: friendsWhereUniqueInput
    update: XOR<friendsUpdateWithoutUserInput, friendsUncheckedUpdateWithoutUserInput>
    create: XOR<friendsCreateWithoutUserInput, friendsUncheckedCreateWithoutUserInput>
  }

  export type friendsUpdateWithWhereUniqueWithoutUserInput = {
    where: friendsWhereUniqueInput
    data: XOR<friendsUpdateWithoutUserInput, friendsUncheckedUpdateWithoutUserInput>
  }

  export type friendsUpdateManyWithWhereWithoutUserInput = {
    where: friendsScalarWhereInput
    data: XOR<friendsUpdateManyMutationInput, friendsUncheckedUpdateManyWithoutFollowersInput>
  }

  export type likeUpsertWithWhereUniqueWithoutUserInput = {
    where: likeWhereUniqueInput
    update: XOR<likeUpdateWithoutUserInput, likeUncheckedUpdateWithoutUserInput>
    create: XOR<likeCreateWithoutUserInput, likeUncheckedCreateWithoutUserInput>
  }

  export type likeUpdateWithWhereUniqueWithoutUserInput = {
    where: likeWhereUniqueInput
    data: XOR<likeUpdateWithoutUserInput, likeUncheckedUpdateWithoutUserInput>
  }

  export type likeUpdateManyWithWhereWithoutUserInput = {
    where: likeScalarWhereInput
    data: XOR<likeUpdateManyMutationInput, likeUncheckedUpdateManyWithoutLikeInput>
  }

  export type likeScalarWhereInput = {
    AND?: Enumerable<likeScalarWhereInput>
    OR?: Enumerable<likeScalarWhereInput>
    NOT?: Enumerable<likeScalarWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    userId?: StringFilter | string
    postId?: StringFilter | string
    likeCount?: BigIntFilter | bigint | number
  }

  export type notificationsUpsertWithWhereUniqueWithoutUserInput = {
    where: notificationsWhereUniqueInput
    update: XOR<notificationsUpdateWithoutUserInput, notificationsUncheckedUpdateWithoutUserInput>
    create: XOR<notificationsCreateWithoutUserInput, notificationsUncheckedCreateWithoutUserInput>
  }

  export type notificationsUpdateWithWhereUniqueWithoutUserInput = {
    where: notificationsWhereUniqueInput
    data: XOR<notificationsUpdateWithoutUserInput, notificationsUncheckedUpdateWithoutUserInput>
  }

  export type notificationsUpdateManyWithWhereWithoutUserInput = {
    where: notificationsScalarWhereInput
    data: XOR<notificationsUpdateManyMutationInput, notificationsUncheckedUpdateManyWithoutNotificationsInput>
  }

  export type notificationsScalarWhereInput = {
    AND?: Enumerable<notificationsScalarWhereInput>
    OR?: Enumerable<notificationsScalarWhereInput>
    NOT?: Enumerable<notificationsScalarWhereInput>
    id?: StringFilter | string
    content?: StringFilter | string
    userId?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    type?: EnumNotificationTypeFilter | NotificationType
    redirect?: StringFilter | string
    read?: BoolFilter | boolean
  }

  export type postUpsertWithWhereUniqueWithoutUserInput = {
    where: postWhereUniqueInput
    update: XOR<postUpdateWithoutUserInput, postUncheckedUpdateWithoutUserInput>
    create: XOR<postCreateWithoutUserInput, postUncheckedCreateWithoutUserInput>
  }

  export type postUpdateWithWhereUniqueWithoutUserInput = {
    where: postWhereUniqueInput
    data: XOR<postUpdateWithoutUserInput, postUncheckedUpdateWithoutUserInput>
  }

  export type postUpdateManyWithWhereWithoutUserInput = {
    where: postScalarWhereInput
    data: XOR<postUpdateManyMutationInput, postUncheckedUpdateManyWithoutPostInput>
  }

  export type postScalarWhereInput = {
    AND?: Enumerable<postScalarWhereInput>
    OR?: Enumerable<postScalarWhereInput>
    NOT?: Enumerable<postScalarWhereInput>
    id?: StringFilter | string
    userId?: StringFilter | string
    media?: StringFilter | string
    content?: StringFilter | string
    type?: EnumPostTypeFilter | PostType
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type userCreateWithoutFollowingInput = {
    id?: string
    username: string
    firstname?: string
    lastname?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    comment?: commentCreateNestedManyWithoutUserInput
    followers?: friendsCreateNestedManyWithoutUserInput
    like?: likeCreateNestedManyWithoutUserInput
    notifications?: notificationsCreateNestedManyWithoutUserInput
    post?: postCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutFollowingInput = {
    id?: string
    username: string
    firstname?: string
    lastname?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    comment?: commentUncheckedCreateNestedManyWithoutUserInput
    followers?: friendsUncheckedCreateNestedManyWithoutUserInput
    like?: likeUncheckedCreateNestedManyWithoutUserInput
    notifications?: notificationsUncheckedCreateNestedManyWithoutUserInput
    post?: postUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutFollowingInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutFollowingInput, userUncheckedCreateWithoutFollowingInput>
  }

  export type userCreateWithoutFollowersInput = {
    id?: string
    username: string
    firstname?: string
    lastname?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    comment?: commentCreateNestedManyWithoutUserInput
    following?: friendsCreateNestedManyWithoutFollowerInput
    like?: likeCreateNestedManyWithoutUserInput
    notifications?: notificationsCreateNestedManyWithoutUserInput
    post?: postCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutFollowersInput = {
    id?: string
    username: string
    firstname?: string
    lastname?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    comment?: commentUncheckedCreateNestedManyWithoutUserInput
    following?: friendsUncheckedCreateNestedManyWithoutFollowerInput
    like?: likeUncheckedCreateNestedManyWithoutUserInput
    notifications?: notificationsUncheckedCreateNestedManyWithoutUserInput
    post?: postUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutFollowersInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutFollowersInput, userUncheckedCreateWithoutFollowersInput>
  }

  export type userUpsertWithoutFollowingInput = {
    update: XOR<userUpdateWithoutFollowingInput, userUncheckedUpdateWithoutFollowingInput>
    create: XOR<userCreateWithoutFollowingInput, userUncheckedCreateWithoutFollowingInput>
  }

  export type userUpdateWithoutFollowingInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: commentUpdateManyWithoutUserNestedInput
    followers?: friendsUpdateManyWithoutUserNestedInput
    like?: likeUpdateManyWithoutUserNestedInput
    notifications?: notificationsUpdateManyWithoutUserNestedInput
    post?: postUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutFollowingInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: commentUncheckedUpdateManyWithoutUserNestedInput
    followers?: friendsUncheckedUpdateManyWithoutUserNestedInput
    like?: likeUncheckedUpdateManyWithoutUserNestedInput
    notifications?: notificationsUncheckedUpdateManyWithoutUserNestedInput
    post?: postUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userUpsertWithoutFollowersInput = {
    update: XOR<userUpdateWithoutFollowersInput, userUncheckedUpdateWithoutFollowersInput>
    create: XOR<userCreateWithoutFollowersInput, userUncheckedCreateWithoutFollowersInput>
  }

  export type userUpdateWithoutFollowersInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: commentUpdateManyWithoutUserNestedInput
    following?: friendsUpdateManyWithoutFollowerNestedInput
    like?: likeUpdateManyWithoutUserNestedInput
    notifications?: notificationsUpdateManyWithoutUserNestedInput
    post?: postUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutFollowersInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: commentUncheckedUpdateManyWithoutUserNestedInput
    following?: friendsUncheckedUpdateManyWithoutFollowerNestedInput
    like?: likeUncheckedUpdateManyWithoutUserNestedInput
    notifications?: notificationsUncheckedUpdateManyWithoutUserNestedInput
    post?: postUncheckedUpdateManyWithoutUserNestedInput
  }

  export type commentCreateWithoutOther_commentInput = {
    id: string
    content: string
    createdAt?: Date | string
    updatedAt: Date | string
    comment?: commentCreateNestedOneWithoutOther_commentInput
    post: postCreateNestedOneWithoutCommentInput
    user: userCreateNestedOneWithoutCommentInput
  }

  export type commentUncheckedCreateWithoutOther_commentInput = {
    id: string
    content: string
    postId: string
    userId: string
    createdAt?: Date | string
    updatedAt: Date | string
    parrentCommentId?: string | null
  }

  export type commentCreateOrConnectWithoutOther_commentInput = {
    where: commentWhereUniqueInput
    create: XOR<commentCreateWithoutOther_commentInput, commentUncheckedCreateWithoutOther_commentInput>
  }

  export type postCreateWithoutCommentInput = {
    id: string
    media?: string
    content: string
    type?: PostType
    createdAt?: Date | string
    updatedAt: Date | string
    user: userCreateNestedOneWithoutPostInput
    like?: likeCreateNestedManyWithoutPostInput
  }

  export type postUncheckedCreateWithoutCommentInput = {
    id: string
    userId: string
    media?: string
    content: string
    type?: PostType
    createdAt?: Date | string
    updatedAt: Date | string
    like?: likeUncheckedCreateNestedManyWithoutPostInput
  }

  export type postCreateOrConnectWithoutCommentInput = {
    where: postWhereUniqueInput
    create: XOR<postCreateWithoutCommentInput, postUncheckedCreateWithoutCommentInput>
  }

  export type userCreateWithoutCommentInput = {
    id?: string
    username: string
    firstname?: string
    lastname?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    following?: friendsCreateNestedManyWithoutFollowerInput
    followers?: friendsCreateNestedManyWithoutUserInput
    like?: likeCreateNestedManyWithoutUserInput
    notifications?: notificationsCreateNestedManyWithoutUserInput
    post?: postCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutCommentInput = {
    id?: string
    username: string
    firstname?: string
    lastname?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    following?: friendsUncheckedCreateNestedManyWithoutFollowerInput
    followers?: friendsUncheckedCreateNestedManyWithoutUserInput
    like?: likeUncheckedCreateNestedManyWithoutUserInput
    notifications?: notificationsUncheckedCreateNestedManyWithoutUserInput
    post?: postUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutCommentInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutCommentInput, userUncheckedCreateWithoutCommentInput>
  }

  export type commentCreateWithoutCommentInput = {
    id: string
    content: string
    createdAt?: Date | string
    updatedAt: Date | string
    post: postCreateNestedOneWithoutCommentInput
    user: userCreateNestedOneWithoutCommentInput
    other_comment?: commentCreateNestedManyWithoutCommentInput
  }

  export type commentUncheckedCreateWithoutCommentInput = {
    id: string
    content: string
    postId: string
    userId: string
    createdAt?: Date | string
    updatedAt: Date | string
    other_comment?: commentUncheckedCreateNestedManyWithoutCommentInput
  }

  export type commentCreateOrConnectWithoutCommentInput = {
    where: commentWhereUniqueInput
    create: XOR<commentCreateWithoutCommentInput, commentUncheckedCreateWithoutCommentInput>
  }

  export type commentCreateManyCommentInputEnvelope = {
    data: Enumerable<commentCreateManyCommentInput>
    skipDuplicates?: boolean
  }

  export type commentUpsertWithoutOther_commentInput = {
    update: XOR<commentUpdateWithoutOther_commentInput, commentUncheckedUpdateWithoutOther_commentInput>
    create: XOR<commentCreateWithoutOther_commentInput, commentUncheckedCreateWithoutOther_commentInput>
  }

  export type commentUpdateWithoutOther_commentInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: commentUpdateOneWithoutOther_commentNestedInput
    post?: postUpdateOneRequiredWithoutCommentNestedInput
    user?: userUpdateOneRequiredWithoutCommentNestedInput
  }

  export type commentUncheckedUpdateWithoutOther_commentInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parrentCommentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type postUpsertWithoutCommentInput = {
    update: XOR<postUpdateWithoutCommentInput, postUncheckedUpdateWithoutCommentInput>
    create: XOR<postCreateWithoutCommentInput, postUncheckedCreateWithoutCommentInput>
  }

  export type postUpdateWithoutCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    media?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumPostTypeFieldUpdateOperationsInput | PostType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutPostNestedInput
    like?: likeUpdateManyWithoutPostNestedInput
  }

  export type postUncheckedUpdateWithoutCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    media?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumPostTypeFieldUpdateOperationsInput | PostType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    like?: likeUncheckedUpdateManyWithoutPostNestedInput
  }

  export type userUpsertWithoutCommentInput = {
    update: XOR<userUpdateWithoutCommentInput, userUncheckedUpdateWithoutCommentInput>
    create: XOR<userCreateWithoutCommentInput, userUncheckedCreateWithoutCommentInput>
  }

  export type userUpdateWithoutCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    following?: friendsUpdateManyWithoutFollowerNestedInput
    followers?: friendsUpdateManyWithoutUserNestedInput
    like?: likeUpdateManyWithoutUserNestedInput
    notifications?: notificationsUpdateManyWithoutUserNestedInput
    post?: postUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    following?: friendsUncheckedUpdateManyWithoutFollowerNestedInput
    followers?: friendsUncheckedUpdateManyWithoutUserNestedInput
    like?: likeUncheckedUpdateManyWithoutUserNestedInput
    notifications?: notificationsUncheckedUpdateManyWithoutUserNestedInput
    post?: postUncheckedUpdateManyWithoutUserNestedInput
  }

  export type commentUpsertWithWhereUniqueWithoutCommentInput = {
    where: commentWhereUniqueInput
    update: XOR<commentUpdateWithoutCommentInput, commentUncheckedUpdateWithoutCommentInput>
    create: XOR<commentCreateWithoutCommentInput, commentUncheckedCreateWithoutCommentInput>
  }

  export type commentUpdateWithWhereUniqueWithoutCommentInput = {
    where: commentWhereUniqueInput
    data: XOR<commentUpdateWithoutCommentInput, commentUncheckedUpdateWithoutCommentInput>
  }

  export type commentUpdateManyWithWhereWithoutCommentInput = {
    where: commentScalarWhereInput
    data: XOR<commentUpdateManyMutationInput, commentUncheckedUpdateManyWithoutOther_commentInput>
  }

  export type postCreateWithoutLikeInput = {
    id: string
    media?: string
    content: string
    type?: PostType
    createdAt?: Date | string
    updatedAt: Date | string
    user: userCreateNestedOneWithoutPostInput
    comment?: commentCreateNestedManyWithoutPostInput
  }

  export type postUncheckedCreateWithoutLikeInput = {
    id: string
    userId: string
    media?: string
    content: string
    type?: PostType
    createdAt?: Date | string
    updatedAt: Date | string
    comment?: commentUncheckedCreateNestedManyWithoutPostInput
  }

  export type postCreateOrConnectWithoutLikeInput = {
    where: postWhereUniqueInput
    create: XOR<postCreateWithoutLikeInput, postUncheckedCreateWithoutLikeInput>
  }

  export type userCreateWithoutLikeInput = {
    id?: string
    username: string
    firstname?: string
    lastname?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    comment?: commentCreateNestedManyWithoutUserInput
    following?: friendsCreateNestedManyWithoutFollowerInput
    followers?: friendsCreateNestedManyWithoutUserInput
    notifications?: notificationsCreateNestedManyWithoutUserInput
    post?: postCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutLikeInput = {
    id?: string
    username: string
    firstname?: string
    lastname?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    comment?: commentUncheckedCreateNestedManyWithoutUserInput
    following?: friendsUncheckedCreateNestedManyWithoutFollowerInput
    followers?: friendsUncheckedCreateNestedManyWithoutUserInput
    notifications?: notificationsUncheckedCreateNestedManyWithoutUserInput
    post?: postUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutLikeInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutLikeInput, userUncheckedCreateWithoutLikeInput>
  }

  export type postUpsertWithoutLikeInput = {
    update: XOR<postUpdateWithoutLikeInput, postUncheckedUpdateWithoutLikeInput>
    create: XOR<postCreateWithoutLikeInput, postUncheckedCreateWithoutLikeInput>
  }

  export type postUpdateWithoutLikeInput = {
    id?: StringFieldUpdateOperationsInput | string
    media?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumPostTypeFieldUpdateOperationsInput | PostType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutPostNestedInput
    comment?: commentUpdateManyWithoutPostNestedInput
  }

  export type postUncheckedUpdateWithoutLikeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    media?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumPostTypeFieldUpdateOperationsInput | PostType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: commentUncheckedUpdateManyWithoutPostNestedInput
  }

  export type userUpsertWithoutLikeInput = {
    update: XOR<userUpdateWithoutLikeInput, userUncheckedUpdateWithoutLikeInput>
    create: XOR<userCreateWithoutLikeInput, userUncheckedCreateWithoutLikeInput>
  }

  export type userUpdateWithoutLikeInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: commentUpdateManyWithoutUserNestedInput
    following?: friendsUpdateManyWithoutFollowerNestedInput
    followers?: friendsUpdateManyWithoutUserNestedInput
    notifications?: notificationsUpdateManyWithoutUserNestedInput
    post?: postUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutLikeInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: commentUncheckedUpdateManyWithoutUserNestedInput
    following?: friendsUncheckedUpdateManyWithoutFollowerNestedInput
    followers?: friendsUncheckedUpdateManyWithoutUserNestedInput
    notifications?: notificationsUncheckedUpdateManyWithoutUserNestedInput
    post?: postUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateWithoutNotificationsInput = {
    id?: string
    username: string
    firstname?: string
    lastname?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    comment?: commentCreateNestedManyWithoutUserInput
    following?: friendsCreateNestedManyWithoutFollowerInput
    followers?: friendsCreateNestedManyWithoutUserInput
    like?: likeCreateNestedManyWithoutUserInput
    post?: postCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutNotificationsInput = {
    id?: string
    username: string
    firstname?: string
    lastname?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    comment?: commentUncheckedCreateNestedManyWithoutUserInput
    following?: friendsUncheckedCreateNestedManyWithoutFollowerInput
    followers?: friendsUncheckedCreateNestedManyWithoutUserInput
    like?: likeUncheckedCreateNestedManyWithoutUserInput
    post?: postUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutNotificationsInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutNotificationsInput, userUncheckedCreateWithoutNotificationsInput>
  }

  export type userUpsertWithoutNotificationsInput = {
    update: XOR<userUpdateWithoutNotificationsInput, userUncheckedUpdateWithoutNotificationsInput>
    create: XOR<userCreateWithoutNotificationsInput, userUncheckedCreateWithoutNotificationsInput>
  }

  export type userUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: commentUpdateManyWithoutUserNestedInput
    following?: friendsUpdateManyWithoutFollowerNestedInput
    followers?: friendsUpdateManyWithoutUserNestedInput
    like?: likeUpdateManyWithoutUserNestedInput
    post?: postUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: commentUncheckedUpdateManyWithoutUserNestedInput
    following?: friendsUncheckedUpdateManyWithoutFollowerNestedInput
    followers?: friendsUncheckedUpdateManyWithoutUserNestedInput
    like?: likeUncheckedUpdateManyWithoutUserNestedInput
    post?: postUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateWithoutPostInput = {
    id?: string
    username: string
    firstname?: string
    lastname?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    comment?: commentCreateNestedManyWithoutUserInput
    following?: friendsCreateNestedManyWithoutFollowerInput
    followers?: friendsCreateNestedManyWithoutUserInput
    like?: likeCreateNestedManyWithoutUserInput
    notifications?: notificationsCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutPostInput = {
    id?: string
    username: string
    firstname?: string
    lastname?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    comment?: commentUncheckedCreateNestedManyWithoutUserInput
    following?: friendsUncheckedCreateNestedManyWithoutFollowerInput
    followers?: friendsUncheckedCreateNestedManyWithoutUserInput
    like?: likeUncheckedCreateNestedManyWithoutUserInput
    notifications?: notificationsUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutPostInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutPostInput, userUncheckedCreateWithoutPostInput>
  }

  export type commentCreateWithoutPostInput = {
    id: string
    content: string
    createdAt?: Date | string
    updatedAt: Date | string
    comment?: commentCreateNestedOneWithoutOther_commentInput
    user: userCreateNestedOneWithoutCommentInput
    other_comment?: commentCreateNestedManyWithoutCommentInput
  }

  export type commentUncheckedCreateWithoutPostInput = {
    id: string
    content: string
    userId: string
    createdAt?: Date | string
    updatedAt: Date | string
    parrentCommentId?: string | null
    other_comment?: commentUncheckedCreateNestedManyWithoutCommentInput
  }

  export type commentCreateOrConnectWithoutPostInput = {
    where: commentWhereUniqueInput
    create: XOR<commentCreateWithoutPostInput, commentUncheckedCreateWithoutPostInput>
  }

  export type commentCreateManyPostInputEnvelope = {
    data: Enumerable<commentCreateManyPostInput>
    skipDuplicates?: boolean
  }

  export type likeCreateWithoutPostInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    likeCount: bigint | number
    user: userCreateNestedOneWithoutLikeInput
  }

  export type likeUncheckedCreateWithoutPostInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    userId: string
    likeCount: bigint | number
  }

  export type likeCreateOrConnectWithoutPostInput = {
    where: likeWhereUniqueInput
    create: XOR<likeCreateWithoutPostInput, likeUncheckedCreateWithoutPostInput>
  }

  export type likeCreateManyPostInputEnvelope = {
    data: Enumerable<likeCreateManyPostInput>
    skipDuplicates?: boolean
  }

  export type userUpsertWithoutPostInput = {
    update: XOR<userUpdateWithoutPostInput, userUncheckedUpdateWithoutPostInput>
    create: XOR<userCreateWithoutPostInput, userUncheckedCreateWithoutPostInput>
  }

  export type userUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: commentUpdateManyWithoutUserNestedInput
    following?: friendsUpdateManyWithoutFollowerNestedInput
    followers?: friendsUpdateManyWithoutUserNestedInput
    like?: likeUpdateManyWithoutUserNestedInput
    notifications?: notificationsUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: commentUncheckedUpdateManyWithoutUserNestedInput
    following?: friendsUncheckedUpdateManyWithoutFollowerNestedInput
    followers?: friendsUncheckedUpdateManyWithoutUserNestedInput
    like?: likeUncheckedUpdateManyWithoutUserNestedInput
    notifications?: notificationsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type commentUpsertWithWhereUniqueWithoutPostInput = {
    where: commentWhereUniqueInput
    update: XOR<commentUpdateWithoutPostInput, commentUncheckedUpdateWithoutPostInput>
    create: XOR<commentCreateWithoutPostInput, commentUncheckedCreateWithoutPostInput>
  }

  export type commentUpdateWithWhereUniqueWithoutPostInput = {
    where: commentWhereUniqueInput
    data: XOR<commentUpdateWithoutPostInput, commentUncheckedUpdateWithoutPostInput>
  }

  export type commentUpdateManyWithWhereWithoutPostInput = {
    where: commentScalarWhereInput
    data: XOR<commentUpdateManyMutationInput, commentUncheckedUpdateManyWithoutCommentInput>
  }

  export type likeUpsertWithWhereUniqueWithoutPostInput = {
    where: likeWhereUniqueInput
    update: XOR<likeUpdateWithoutPostInput, likeUncheckedUpdateWithoutPostInput>
    create: XOR<likeCreateWithoutPostInput, likeUncheckedCreateWithoutPostInput>
  }

  export type likeUpdateWithWhereUniqueWithoutPostInput = {
    where: likeWhereUniqueInput
    data: XOR<likeUpdateWithoutPostInput, likeUncheckedUpdateWithoutPostInput>
  }

  export type likeUpdateManyWithWhereWithoutPostInput = {
    where: likeScalarWhereInput
    data: XOR<likeUpdateManyMutationInput, likeUncheckedUpdateManyWithoutLikeInput>
  }

  export type commentCreateManyUserInput = {
    id: string
    content: string
    postId: string
    createdAt?: Date | string
    updatedAt: Date | string
    parrentCommentId?: string | null
  }

  export type friendsCreateManyFollowerInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isAccepted?: boolean
    block?: boolean
  }

  export type friendsCreateManyUserInput = {
    id?: string
    friendId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isAccepted?: boolean
    block?: boolean
  }

  export type likeCreateManyUserInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    postId: string
    likeCount: bigint | number
  }

  export type notificationsCreateManyUserInput = {
    id: string
    content: string
    createdAt?: Date | string
    type: NotificationType
    redirect: string
    read?: boolean
  }

  export type postCreateManyUserInput = {
    id: string
    media?: string
    content: string
    type?: PostType
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type commentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: commentUpdateOneWithoutOther_commentNestedInput
    post?: postUpdateOneRequiredWithoutCommentNestedInput
    other_comment?: commentUpdateManyWithoutCommentNestedInput
  }

  export type commentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parrentCommentId?: NullableStringFieldUpdateOperationsInput | string | null
    other_comment?: commentUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type commentUncheckedUpdateManyWithoutCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parrentCommentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type friendsUpdateWithoutFollowerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAccepted?: BoolFieldUpdateOperationsInput | boolean
    block?: BoolFieldUpdateOperationsInput | boolean
    user?: userUpdateOneRequiredWithoutFollowersNestedInput
  }

  export type friendsUncheckedUpdateWithoutFollowerInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAccepted?: BoolFieldUpdateOperationsInput | boolean
    block?: BoolFieldUpdateOperationsInput | boolean
  }

  export type friendsUncheckedUpdateManyWithoutFollowingInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAccepted?: BoolFieldUpdateOperationsInput | boolean
    block?: BoolFieldUpdateOperationsInput | boolean
  }

  export type friendsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAccepted?: BoolFieldUpdateOperationsInput | boolean
    block?: BoolFieldUpdateOperationsInput | boolean
    follower?: userUpdateOneRequiredWithoutFollowingNestedInput
  }

  export type friendsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    friendId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAccepted?: BoolFieldUpdateOperationsInput | boolean
    block?: BoolFieldUpdateOperationsInput | boolean
  }

  export type friendsUncheckedUpdateManyWithoutFollowersInput = {
    id?: StringFieldUpdateOperationsInput | string
    friendId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAccepted?: BoolFieldUpdateOperationsInput | boolean
    block?: BoolFieldUpdateOperationsInput | boolean
  }

  export type likeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likeCount?: BigIntFieldUpdateOperationsInput | bigint | number
    post?: postUpdateOneRequiredWithoutLikeNestedInput
  }

  export type likeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: StringFieldUpdateOperationsInput | string
    likeCount?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type likeUncheckedUpdateManyWithoutLikeInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: StringFieldUpdateOperationsInput | string
    likeCount?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type notificationsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | NotificationType
    redirect?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
  }

  export type notificationsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | NotificationType
    redirect?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
  }

  export type notificationsUncheckedUpdateManyWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | NotificationType
    redirect?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
  }

  export type postUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    media?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumPostTypeFieldUpdateOperationsInput | PostType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: commentUpdateManyWithoutPostNestedInput
    like?: likeUpdateManyWithoutPostNestedInput
  }

  export type postUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    media?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumPostTypeFieldUpdateOperationsInput | PostType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: commentUncheckedUpdateManyWithoutPostNestedInput
    like?: likeUncheckedUpdateManyWithoutPostNestedInput
  }

  export type postUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    media?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumPostTypeFieldUpdateOperationsInput | PostType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type commentCreateManyCommentInput = {
    id: string
    content: string
    postId: string
    userId: string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type commentUpdateWithoutCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: postUpdateOneRequiredWithoutCommentNestedInput
    user?: userUpdateOneRequiredWithoutCommentNestedInput
    other_comment?: commentUpdateManyWithoutCommentNestedInput
  }

  export type commentUncheckedUpdateWithoutCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    other_comment?: commentUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type commentUncheckedUpdateManyWithoutOther_commentInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type commentCreateManyPostInput = {
    id: string
    content: string
    userId: string
    createdAt?: Date | string
    updatedAt: Date | string
    parrentCommentId?: string | null
  }

  export type likeCreateManyPostInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    userId: string
    likeCount: bigint | number
  }

  export type commentUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: commentUpdateOneWithoutOther_commentNestedInput
    user?: userUpdateOneRequiredWithoutCommentNestedInput
    other_comment?: commentUpdateManyWithoutCommentNestedInput
  }

  export type commentUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parrentCommentId?: NullableStringFieldUpdateOperationsInput | string | null
    other_comment?: commentUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type likeUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likeCount?: BigIntFieldUpdateOperationsInput | bigint | number
    user?: userUpdateOneRequiredWithoutLikeNestedInput
  }

  export type likeUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    likeCount?: BigIntFieldUpdateOperationsInput | bigint | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}