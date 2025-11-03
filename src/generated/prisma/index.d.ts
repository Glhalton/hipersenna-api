
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model hsemployees
 * 
 */
export type hsemployees = $Result.DefaultSelection<Prisma.$hsemployeesPayload>
/**
 * Model hsroles
 * 
 */
export type hsroles = $Result.DefaultSelection<Prisma.$hsrolesPayload>
/**
 * Model hspermissions
 * 
 */
export type hspermissions = $Result.DefaultSelection<Prisma.$hspermissionsPayload>
/**
 * Model hspermissions_roles
 * 
 */
export type hspermissions_roles = $Result.DefaultSelection<Prisma.$hspermissions_rolesPayload>
/**
 * Model hsusers_permissions
 * 
 */
export type hsusers_permissions = $Result.DefaultSelection<Prisma.$hsusers_permissionsPayload>
/**
 * Model hsusers_roles
 * 
 */
export type hsusers_roles = $Result.DefaultSelection<Prisma.$hsusers_rolesPayload>
/**
 * Model hsbranches
 * 
 */
export type hsbranches = $Result.DefaultSelection<Prisma.$hsbranchesPayload>
/**
 * Model hsvalidities
 * 
 */
export type hsvalidities = $Result.DefaultSelection<Prisma.$hsvaliditiesPayload>
/**
 * Model hsvalidity_products
 * 
 */
export type hsvalidity_products = $Result.DefaultSelection<Prisma.$hsvalidity_productsPayload>
/**
 * Model hsvalidity_requests
 * 
 */
export type hsvalidity_requests = $Result.DefaultSelection<Prisma.$hsvalidity_requestsPayload>
/**
 * Model hsvalidity_request_products
 * 
 */
export type hsvalidity_request_products = $Result.DefaultSelection<Prisma.$hsvalidity_request_productsPayload>
/**
 * Model hsvalidity_treatments
 * 
 */
export type hsvalidity_treatments = $Result.DefaultSelection<Prisma.$hsvalidity_treatmentsPayload>
/**
 * Model hssessions
 * 
 */
export type hssessions = $Result.DefaultSelection<Prisma.$hssessionsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const hsvalidities_status: {
  Pendente: 'Pendente',
  Em_andamento: 'Em_andamento',
  Concluido: 'Concluido'
};

export type hsvalidities_status = (typeof hsvalidities_status)[keyof typeof hsvalidities_status]


export const hsvalidity_request_products_status: {
  Nao_encontrado: 'Nao_encontrado',
  Nao_vistoriado: 'Nao_vistoriado',
  Vistoriado: 'Vistoriado'
};

export type hsvalidity_request_products_status = (typeof hsvalidity_request_products_status)[keyof typeof hsvalidity_request_products_status]


export const hsvalidity_requests_status: {
  Pendente: 'Pendente',
  Em_andamento: 'Em_andamento',
  Concluido: 'Concluido',
  Expirado: 'Expirado'
};

export type hsvalidity_requests_status = (typeof hsvalidity_requests_status)[keyof typeof hsvalidity_requests_status]

}

export type hsvalidities_status = $Enums.hsvalidities_status

export const hsvalidities_status: typeof $Enums.hsvalidities_status

export type hsvalidity_request_products_status = $Enums.hsvalidity_request_products_status

export const hsvalidity_request_products_status: typeof $Enums.hsvalidity_request_products_status

export type hsvalidity_requests_status = $Enums.hsvalidity_requests_status

export const hsvalidity_requests_status: typeof $Enums.hsvalidity_requests_status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Hsemployees
 * const hsemployees = await prisma.hsemployees.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Hsemployees
   * const hsemployees = await prisma.hsemployees.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.hsemployees`: Exposes CRUD operations for the **hsemployees** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hsemployees
    * const hsemployees = await prisma.hsemployees.findMany()
    * ```
    */
  get hsemployees(): Prisma.hsemployeesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hsroles`: Exposes CRUD operations for the **hsroles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hsroles
    * const hsroles = await prisma.hsroles.findMany()
    * ```
    */
  get hsroles(): Prisma.hsrolesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hspermissions`: Exposes CRUD operations for the **hspermissions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hspermissions
    * const hspermissions = await prisma.hspermissions.findMany()
    * ```
    */
  get hspermissions(): Prisma.hspermissionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hspermissions_roles`: Exposes CRUD operations for the **hspermissions_roles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hspermissions_roles
    * const hspermissions_roles = await prisma.hspermissions_roles.findMany()
    * ```
    */
  get hspermissions_roles(): Prisma.hspermissions_rolesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hsusers_permissions`: Exposes CRUD operations for the **hsusers_permissions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hsusers_permissions
    * const hsusers_permissions = await prisma.hsusers_permissions.findMany()
    * ```
    */
  get hsusers_permissions(): Prisma.hsusers_permissionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hsusers_roles`: Exposes CRUD operations for the **hsusers_roles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hsusers_roles
    * const hsusers_roles = await prisma.hsusers_roles.findMany()
    * ```
    */
  get hsusers_roles(): Prisma.hsusers_rolesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hsbranches`: Exposes CRUD operations for the **hsbranches** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hsbranches
    * const hsbranches = await prisma.hsbranches.findMany()
    * ```
    */
  get hsbranches(): Prisma.hsbranchesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hsvalidities`: Exposes CRUD operations for the **hsvalidities** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hsvalidities
    * const hsvalidities = await prisma.hsvalidities.findMany()
    * ```
    */
  get hsvalidities(): Prisma.hsvaliditiesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hsvalidity_products`: Exposes CRUD operations for the **hsvalidity_products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hsvalidity_products
    * const hsvalidity_products = await prisma.hsvalidity_products.findMany()
    * ```
    */
  get hsvalidity_products(): Prisma.hsvalidity_productsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hsvalidity_requests`: Exposes CRUD operations for the **hsvalidity_requests** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hsvalidity_requests
    * const hsvalidity_requests = await prisma.hsvalidity_requests.findMany()
    * ```
    */
  get hsvalidity_requests(): Prisma.hsvalidity_requestsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hsvalidity_request_products`: Exposes CRUD operations for the **hsvalidity_request_products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hsvalidity_request_products
    * const hsvalidity_request_products = await prisma.hsvalidity_request_products.findMany()
    * ```
    */
  get hsvalidity_request_products(): Prisma.hsvalidity_request_productsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hsvalidity_treatments`: Exposes CRUD operations for the **hsvalidity_treatments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hsvalidity_treatments
    * const hsvalidity_treatments = await prisma.hsvalidity_treatments.findMany()
    * ```
    */
  get hsvalidity_treatments(): Prisma.hsvalidity_treatmentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hssessions`: Exposes CRUD operations for the **hssessions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hssessions
    * const hssessions = await prisma.hssessions.findMany()
    * ```
    */
  get hssessions(): Prisma.hssessionsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.1
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    hsemployees: 'hsemployees',
    hsroles: 'hsroles',
    hspermissions: 'hspermissions',
    hspermissions_roles: 'hspermissions_roles',
    hsusers_permissions: 'hsusers_permissions',
    hsusers_roles: 'hsusers_roles',
    hsbranches: 'hsbranches',
    hsvalidities: 'hsvalidities',
    hsvalidity_products: 'hsvalidity_products',
    hsvalidity_requests: 'hsvalidity_requests',
    hsvalidity_request_products: 'hsvalidity_request_products',
    hsvalidity_treatments: 'hsvalidity_treatments',
    hssessions: 'hssessions'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "hsemployees" | "hsroles" | "hspermissions" | "hspermissions_roles" | "hsusers_permissions" | "hsusers_roles" | "hsbranches" | "hsvalidities" | "hsvalidity_products" | "hsvalidity_requests" | "hsvalidity_request_products" | "hsvalidity_treatments" | "hssessions"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      hsemployees: {
        payload: Prisma.$hsemployeesPayload<ExtArgs>
        fields: Prisma.hsemployeesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.hsemployeesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsemployeesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.hsemployeesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsemployeesPayload>
          }
          findFirst: {
            args: Prisma.hsemployeesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsemployeesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.hsemployeesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsemployeesPayload>
          }
          findMany: {
            args: Prisma.hsemployeesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsemployeesPayload>[]
          }
          create: {
            args: Prisma.hsemployeesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsemployeesPayload>
          }
          createMany: {
            args: Prisma.hsemployeesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.hsemployeesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsemployeesPayload>[]
          }
          delete: {
            args: Prisma.hsemployeesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsemployeesPayload>
          }
          update: {
            args: Prisma.hsemployeesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsemployeesPayload>
          }
          deleteMany: {
            args: Prisma.hsemployeesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.hsemployeesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.hsemployeesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsemployeesPayload>[]
          }
          upsert: {
            args: Prisma.hsemployeesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsemployeesPayload>
          }
          aggregate: {
            args: Prisma.HsemployeesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHsemployees>
          }
          groupBy: {
            args: Prisma.hsemployeesGroupByArgs<ExtArgs>
            result: $Utils.Optional<HsemployeesGroupByOutputType>[]
          }
          count: {
            args: Prisma.hsemployeesCountArgs<ExtArgs>
            result: $Utils.Optional<HsemployeesCountAggregateOutputType> | number
          }
        }
      }
      hsroles: {
        payload: Prisma.$hsrolesPayload<ExtArgs>
        fields: Prisma.hsrolesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.hsrolesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsrolesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.hsrolesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsrolesPayload>
          }
          findFirst: {
            args: Prisma.hsrolesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsrolesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.hsrolesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsrolesPayload>
          }
          findMany: {
            args: Prisma.hsrolesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsrolesPayload>[]
          }
          create: {
            args: Prisma.hsrolesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsrolesPayload>
          }
          createMany: {
            args: Prisma.hsrolesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.hsrolesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsrolesPayload>[]
          }
          delete: {
            args: Prisma.hsrolesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsrolesPayload>
          }
          update: {
            args: Prisma.hsrolesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsrolesPayload>
          }
          deleteMany: {
            args: Prisma.hsrolesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.hsrolesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.hsrolesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsrolesPayload>[]
          }
          upsert: {
            args: Prisma.hsrolesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsrolesPayload>
          }
          aggregate: {
            args: Prisma.HsrolesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHsroles>
          }
          groupBy: {
            args: Prisma.hsrolesGroupByArgs<ExtArgs>
            result: $Utils.Optional<HsrolesGroupByOutputType>[]
          }
          count: {
            args: Prisma.hsrolesCountArgs<ExtArgs>
            result: $Utils.Optional<HsrolesCountAggregateOutputType> | number
          }
        }
      }
      hspermissions: {
        payload: Prisma.$hspermissionsPayload<ExtArgs>
        fields: Prisma.hspermissionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.hspermissionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hspermissionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.hspermissionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hspermissionsPayload>
          }
          findFirst: {
            args: Prisma.hspermissionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hspermissionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.hspermissionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hspermissionsPayload>
          }
          findMany: {
            args: Prisma.hspermissionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hspermissionsPayload>[]
          }
          create: {
            args: Prisma.hspermissionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hspermissionsPayload>
          }
          createMany: {
            args: Prisma.hspermissionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.hspermissionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hspermissionsPayload>[]
          }
          delete: {
            args: Prisma.hspermissionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hspermissionsPayload>
          }
          update: {
            args: Prisma.hspermissionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hspermissionsPayload>
          }
          deleteMany: {
            args: Prisma.hspermissionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.hspermissionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.hspermissionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hspermissionsPayload>[]
          }
          upsert: {
            args: Prisma.hspermissionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hspermissionsPayload>
          }
          aggregate: {
            args: Prisma.HspermissionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHspermissions>
          }
          groupBy: {
            args: Prisma.hspermissionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<HspermissionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.hspermissionsCountArgs<ExtArgs>
            result: $Utils.Optional<HspermissionsCountAggregateOutputType> | number
          }
        }
      }
      hspermissions_roles: {
        payload: Prisma.$hspermissions_rolesPayload<ExtArgs>
        fields: Prisma.hspermissions_rolesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.hspermissions_rolesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hspermissions_rolesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.hspermissions_rolesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hspermissions_rolesPayload>
          }
          findFirst: {
            args: Prisma.hspermissions_rolesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hspermissions_rolesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.hspermissions_rolesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hspermissions_rolesPayload>
          }
          findMany: {
            args: Prisma.hspermissions_rolesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hspermissions_rolesPayload>[]
          }
          create: {
            args: Prisma.hspermissions_rolesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hspermissions_rolesPayload>
          }
          createMany: {
            args: Prisma.hspermissions_rolesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.hspermissions_rolesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hspermissions_rolesPayload>[]
          }
          delete: {
            args: Prisma.hspermissions_rolesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hspermissions_rolesPayload>
          }
          update: {
            args: Prisma.hspermissions_rolesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hspermissions_rolesPayload>
          }
          deleteMany: {
            args: Prisma.hspermissions_rolesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.hspermissions_rolesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.hspermissions_rolesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hspermissions_rolesPayload>[]
          }
          upsert: {
            args: Prisma.hspermissions_rolesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hspermissions_rolesPayload>
          }
          aggregate: {
            args: Prisma.Hspermissions_rolesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHspermissions_roles>
          }
          groupBy: {
            args: Prisma.hspermissions_rolesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Hspermissions_rolesGroupByOutputType>[]
          }
          count: {
            args: Prisma.hspermissions_rolesCountArgs<ExtArgs>
            result: $Utils.Optional<Hspermissions_rolesCountAggregateOutputType> | number
          }
        }
      }
      hsusers_permissions: {
        payload: Prisma.$hsusers_permissionsPayload<ExtArgs>
        fields: Prisma.hsusers_permissionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.hsusers_permissionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsusers_permissionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.hsusers_permissionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsusers_permissionsPayload>
          }
          findFirst: {
            args: Prisma.hsusers_permissionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsusers_permissionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.hsusers_permissionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsusers_permissionsPayload>
          }
          findMany: {
            args: Prisma.hsusers_permissionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsusers_permissionsPayload>[]
          }
          create: {
            args: Prisma.hsusers_permissionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsusers_permissionsPayload>
          }
          createMany: {
            args: Prisma.hsusers_permissionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.hsusers_permissionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsusers_permissionsPayload>[]
          }
          delete: {
            args: Prisma.hsusers_permissionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsusers_permissionsPayload>
          }
          update: {
            args: Prisma.hsusers_permissionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsusers_permissionsPayload>
          }
          deleteMany: {
            args: Prisma.hsusers_permissionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.hsusers_permissionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.hsusers_permissionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsusers_permissionsPayload>[]
          }
          upsert: {
            args: Prisma.hsusers_permissionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsusers_permissionsPayload>
          }
          aggregate: {
            args: Prisma.Hsusers_permissionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHsusers_permissions>
          }
          groupBy: {
            args: Prisma.hsusers_permissionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Hsusers_permissionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.hsusers_permissionsCountArgs<ExtArgs>
            result: $Utils.Optional<Hsusers_permissionsCountAggregateOutputType> | number
          }
        }
      }
      hsusers_roles: {
        payload: Prisma.$hsusers_rolesPayload<ExtArgs>
        fields: Prisma.hsusers_rolesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.hsusers_rolesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsusers_rolesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.hsusers_rolesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsusers_rolesPayload>
          }
          findFirst: {
            args: Prisma.hsusers_rolesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsusers_rolesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.hsusers_rolesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsusers_rolesPayload>
          }
          findMany: {
            args: Prisma.hsusers_rolesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsusers_rolesPayload>[]
          }
          create: {
            args: Prisma.hsusers_rolesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsusers_rolesPayload>
          }
          createMany: {
            args: Prisma.hsusers_rolesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.hsusers_rolesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsusers_rolesPayload>[]
          }
          delete: {
            args: Prisma.hsusers_rolesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsusers_rolesPayload>
          }
          update: {
            args: Prisma.hsusers_rolesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsusers_rolesPayload>
          }
          deleteMany: {
            args: Prisma.hsusers_rolesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.hsusers_rolesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.hsusers_rolesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsusers_rolesPayload>[]
          }
          upsert: {
            args: Prisma.hsusers_rolesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsusers_rolesPayload>
          }
          aggregate: {
            args: Prisma.Hsusers_rolesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHsusers_roles>
          }
          groupBy: {
            args: Prisma.hsusers_rolesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Hsusers_rolesGroupByOutputType>[]
          }
          count: {
            args: Prisma.hsusers_rolesCountArgs<ExtArgs>
            result: $Utils.Optional<Hsusers_rolesCountAggregateOutputType> | number
          }
        }
      }
      hsbranches: {
        payload: Prisma.$hsbranchesPayload<ExtArgs>
        fields: Prisma.hsbranchesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.hsbranchesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsbranchesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.hsbranchesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsbranchesPayload>
          }
          findFirst: {
            args: Prisma.hsbranchesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsbranchesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.hsbranchesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsbranchesPayload>
          }
          findMany: {
            args: Prisma.hsbranchesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsbranchesPayload>[]
          }
          create: {
            args: Prisma.hsbranchesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsbranchesPayload>
          }
          createMany: {
            args: Prisma.hsbranchesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.hsbranchesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsbranchesPayload>[]
          }
          delete: {
            args: Prisma.hsbranchesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsbranchesPayload>
          }
          update: {
            args: Prisma.hsbranchesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsbranchesPayload>
          }
          deleteMany: {
            args: Prisma.hsbranchesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.hsbranchesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.hsbranchesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsbranchesPayload>[]
          }
          upsert: {
            args: Prisma.hsbranchesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsbranchesPayload>
          }
          aggregate: {
            args: Prisma.HsbranchesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHsbranches>
          }
          groupBy: {
            args: Prisma.hsbranchesGroupByArgs<ExtArgs>
            result: $Utils.Optional<HsbranchesGroupByOutputType>[]
          }
          count: {
            args: Prisma.hsbranchesCountArgs<ExtArgs>
            result: $Utils.Optional<HsbranchesCountAggregateOutputType> | number
          }
        }
      }
      hsvalidities: {
        payload: Prisma.$hsvaliditiesPayload<ExtArgs>
        fields: Prisma.hsvaliditiesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.hsvaliditiesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsvaliditiesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.hsvaliditiesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsvaliditiesPayload>
          }
          findFirst: {
            args: Prisma.hsvaliditiesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsvaliditiesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.hsvaliditiesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsvaliditiesPayload>
          }
          findMany: {
            args: Prisma.hsvaliditiesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsvaliditiesPayload>[]
          }
          create: {
            args: Prisma.hsvaliditiesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsvaliditiesPayload>
          }
          createMany: {
            args: Prisma.hsvaliditiesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.hsvaliditiesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsvaliditiesPayload>[]
          }
          delete: {
            args: Prisma.hsvaliditiesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsvaliditiesPayload>
          }
          update: {
            args: Prisma.hsvaliditiesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsvaliditiesPayload>
          }
          deleteMany: {
            args: Prisma.hsvaliditiesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.hsvaliditiesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.hsvaliditiesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsvaliditiesPayload>[]
          }
          upsert: {
            args: Prisma.hsvaliditiesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsvaliditiesPayload>
          }
          aggregate: {
            args: Prisma.HsvaliditiesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHsvalidities>
          }
          groupBy: {
            args: Prisma.hsvaliditiesGroupByArgs<ExtArgs>
            result: $Utils.Optional<HsvaliditiesGroupByOutputType>[]
          }
          count: {
            args: Prisma.hsvaliditiesCountArgs<ExtArgs>
            result: $Utils.Optional<HsvaliditiesCountAggregateOutputType> | number
          }
        }
      }
      hsvalidity_products: {
        payload: Prisma.$hsvalidity_productsPayload<ExtArgs>
        fields: Prisma.hsvalidity_productsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.hsvalidity_productsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsvalidity_productsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.hsvalidity_productsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsvalidity_productsPayload>
          }
          findFirst: {
            args: Prisma.hsvalidity_productsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsvalidity_productsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.hsvalidity_productsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsvalidity_productsPayload>
          }
          findMany: {
            args: Prisma.hsvalidity_productsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsvalidity_productsPayload>[]
          }
          create: {
            args: Prisma.hsvalidity_productsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsvalidity_productsPayload>
          }
          createMany: {
            args: Prisma.hsvalidity_productsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.hsvalidity_productsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsvalidity_productsPayload>[]
          }
          delete: {
            args: Prisma.hsvalidity_productsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsvalidity_productsPayload>
          }
          update: {
            args: Prisma.hsvalidity_productsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsvalidity_productsPayload>
          }
          deleteMany: {
            args: Prisma.hsvalidity_productsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.hsvalidity_productsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.hsvalidity_productsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsvalidity_productsPayload>[]
          }
          upsert: {
            args: Prisma.hsvalidity_productsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsvalidity_productsPayload>
          }
          aggregate: {
            args: Prisma.Hsvalidity_productsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHsvalidity_products>
          }
          groupBy: {
            args: Prisma.hsvalidity_productsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Hsvalidity_productsGroupByOutputType>[]
          }
          count: {
            args: Prisma.hsvalidity_productsCountArgs<ExtArgs>
            result: $Utils.Optional<Hsvalidity_productsCountAggregateOutputType> | number
          }
        }
      }
      hsvalidity_requests: {
        payload: Prisma.$hsvalidity_requestsPayload<ExtArgs>
        fields: Prisma.hsvalidity_requestsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.hsvalidity_requestsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsvalidity_requestsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.hsvalidity_requestsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsvalidity_requestsPayload>
          }
          findFirst: {
            args: Prisma.hsvalidity_requestsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsvalidity_requestsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.hsvalidity_requestsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsvalidity_requestsPayload>
          }
          findMany: {
            args: Prisma.hsvalidity_requestsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsvalidity_requestsPayload>[]
          }
          create: {
            args: Prisma.hsvalidity_requestsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsvalidity_requestsPayload>
          }
          createMany: {
            args: Prisma.hsvalidity_requestsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.hsvalidity_requestsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsvalidity_requestsPayload>[]
          }
          delete: {
            args: Prisma.hsvalidity_requestsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsvalidity_requestsPayload>
          }
          update: {
            args: Prisma.hsvalidity_requestsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsvalidity_requestsPayload>
          }
          deleteMany: {
            args: Prisma.hsvalidity_requestsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.hsvalidity_requestsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.hsvalidity_requestsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsvalidity_requestsPayload>[]
          }
          upsert: {
            args: Prisma.hsvalidity_requestsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsvalidity_requestsPayload>
          }
          aggregate: {
            args: Prisma.Hsvalidity_requestsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHsvalidity_requests>
          }
          groupBy: {
            args: Prisma.hsvalidity_requestsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Hsvalidity_requestsGroupByOutputType>[]
          }
          count: {
            args: Prisma.hsvalidity_requestsCountArgs<ExtArgs>
            result: $Utils.Optional<Hsvalidity_requestsCountAggregateOutputType> | number
          }
        }
      }
      hsvalidity_request_products: {
        payload: Prisma.$hsvalidity_request_productsPayload<ExtArgs>
        fields: Prisma.hsvalidity_request_productsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.hsvalidity_request_productsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsvalidity_request_productsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.hsvalidity_request_productsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsvalidity_request_productsPayload>
          }
          findFirst: {
            args: Prisma.hsvalidity_request_productsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsvalidity_request_productsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.hsvalidity_request_productsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsvalidity_request_productsPayload>
          }
          findMany: {
            args: Prisma.hsvalidity_request_productsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsvalidity_request_productsPayload>[]
          }
          create: {
            args: Prisma.hsvalidity_request_productsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsvalidity_request_productsPayload>
          }
          createMany: {
            args: Prisma.hsvalidity_request_productsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.hsvalidity_request_productsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsvalidity_request_productsPayload>[]
          }
          delete: {
            args: Prisma.hsvalidity_request_productsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsvalidity_request_productsPayload>
          }
          update: {
            args: Prisma.hsvalidity_request_productsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsvalidity_request_productsPayload>
          }
          deleteMany: {
            args: Prisma.hsvalidity_request_productsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.hsvalidity_request_productsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.hsvalidity_request_productsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsvalidity_request_productsPayload>[]
          }
          upsert: {
            args: Prisma.hsvalidity_request_productsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsvalidity_request_productsPayload>
          }
          aggregate: {
            args: Prisma.Hsvalidity_request_productsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHsvalidity_request_products>
          }
          groupBy: {
            args: Prisma.hsvalidity_request_productsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Hsvalidity_request_productsGroupByOutputType>[]
          }
          count: {
            args: Prisma.hsvalidity_request_productsCountArgs<ExtArgs>
            result: $Utils.Optional<Hsvalidity_request_productsCountAggregateOutputType> | number
          }
        }
      }
      hsvalidity_treatments: {
        payload: Prisma.$hsvalidity_treatmentsPayload<ExtArgs>
        fields: Prisma.hsvalidity_treatmentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.hsvalidity_treatmentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsvalidity_treatmentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.hsvalidity_treatmentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsvalidity_treatmentsPayload>
          }
          findFirst: {
            args: Prisma.hsvalidity_treatmentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsvalidity_treatmentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.hsvalidity_treatmentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsvalidity_treatmentsPayload>
          }
          findMany: {
            args: Prisma.hsvalidity_treatmentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsvalidity_treatmentsPayload>[]
          }
          create: {
            args: Prisma.hsvalidity_treatmentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsvalidity_treatmentsPayload>
          }
          createMany: {
            args: Prisma.hsvalidity_treatmentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.hsvalidity_treatmentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsvalidity_treatmentsPayload>[]
          }
          delete: {
            args: Prisma.hsvalidity_treatmentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsvalidity_treatmentsPayload>
          }
          update: {
            args: Prisma.hsvalidity_treatmentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsvalidity_treatmentsPayload>
          }
          deleteMany: {
            args: Prisma.hsvalidity_treatmentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.hsvalidity_treatmentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.hsvalidity_treatmentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsvalidity_treatmentsPayload>[]
          }
          upsert: {
            args: Prisma.hsvalidity_treatmentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsvalidity_treatmentsPayload>
          }
          aggregate: {
            args: Prisma.Hsvalidity_treatmentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHsvalidity_treatments>
          }
          groupBy: {
            args: Prisma.hsvalidity_treatmentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Hsvalidity_treatmentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.hsvalidity_treatmentsCountArgs<ExtArgs>
            result: $Utils.Optional<Hsvalidity_treatmentsCountAggregateOutputType> | number
          }
        }
      }
      hssessions: {
        payload: Prisma.$hssessionsPayload<ExtArgs>
        fields: Prisma.hssessionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.hssessionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hssessionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.hssessionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hssessionsPayload>
          }
          findFirst: {
            args: Prisma.hssessionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hssessionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.hssessionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hssessionsPayload>
          }
          findMany: {
            args: Prisma.hssessionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hssessionsPayload>[]
          }
          create: {
            args: Prisma.hssessionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hssessionsPayload>
          }
          createMany: {
            args: Prisma.hssessionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.hssessionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hssessionsPayload>[]
          }
          delete: {
            args: Prisma.hssessionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hssessionsPayload>
          }
          update: {
            args: Prisma.hssessionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hssessionsPayload>
          }
          deleteMany: {
            args: Prisma.hssessionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.hssessionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.hssessionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hssessionsPayload>[]
          }
          upsert: {
            args: Prisma.hssessionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hssessionsPayload>
          }
          aggregate: {
            args: Prisma.HssessionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHssessions>
          }
          groupBy: {
            args: Prisma.hssessionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<HssessionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.hssessionsCountArgs<ExtArgs>
            result: $Utils.Optional<HssessionsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    hsemployees?: hsemployeesOmit
    hsroles?: hsrolesOmit
    hspermissions?: hspermissionsOmit
    hspermissions_roles?: hspermissions_rolesOmit
    hsusers_permissions?: hsusers_permissionsOmit
    hsusers_roles?: hsusers_rolesOmit
    hsbranches?: hsbranchesOmit
    hsvalidities?: hsvaliditiesOmit
    hsvalidity_products?: hsvalidity_productsOmit
    hsvalidity_requests?: hsvalidity_requestsOmit
    hsvalidity_request_products?: hsvalidity_request_productsOmit
    hsvalidity_treatments?: hsvalidity_treatmentsOmit
    hssessions?: hssessionsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type HsemployeesCountOutputType
   */

  export type HsemployeesCountOutputType = {
    sessions: number
    hsusers_permissions: number
    hsusers_roles: number
    hsvalidities: number
    analystRequests: number
    confereeRequests: number
  }

  export type HsemployeesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | HsemployeesCountOutputTypeCountSessionsArgs
    hsusers_permissions?: boolean | HsemployeesCountOutputTypeCountHsusers_permissionsArgs
    hsusers_roles?: boolean | HsemployeesCountOutputTypeCountHsusers_rolesArgs
    hsvalidities?: boolean | HsemployeesCountOutputTypeCountHsvaliditiesArgs
    analystRequests?: boolean | HsemployeesCountOutputTypeCountAnalystRequestsArgs
    confereeRequests?: boolean | HsemployeesCountOutputTypeCountConfereeRequestsArgs
  }

  // Custom InputTypes
  /**
   * HsemployeesCountOutputType without action
   */
  export type HsemployeesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HsemployeesCountOutputType
     */
    select?: HsemployeesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HsemployeesCountOutputType without action
   */
  export type HsemployeesCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hssessionsWhereInput
  }

  /**
   * HsemployeesCountOutputType without action
   */
  export type HsemployeesCountOutputTypeCountHsusers_permissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hsusers_permissionsWhereInput
  }

  /**
   * HsemployeesCountOutputType without action
   */
  export type HsemployeesCountOutputTypeCountHsusers_rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hsusers_rolesWhereInput
  }

  /**
   * HsemployeesCountOutputType without action
   */
  export type HsemployeesCountOutputTypeCountHsvaliditiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hsvaliditiesWhereInput
  }

  /**
   * HsemployeesCountOutputType without action
   */
  export type HsemployeesCountOutputTypeCountAnalystRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hsvalidity_requestsWhereInput
  }

  /**
   * HsemployeesCountOutputType without action
   */
  export type HsemployeesCountOutputTypeCountConfereeRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hsvalidity_requestsWhereInput
  }


  /**
   * Count Type HsrolesCountOutputType
   */

  export type HsrolesCountOutputType = {
    hspermissions_roles: number
    hsusers_roles: number
  }

  export type HsrolesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hspermissions_roles?: boolean | HsrolesCountOutputTypeCountHspermissions_rolesArgs
    hsusers_roles?: boolean | HsrolesCountOutputTypeCountHsusers_rolesArgs
  }

  // Custom InputTypes
  /**
   * HsrolesCountOutputType without action
   */
  export type HsrolesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HsrolesCountOutputType
     */
    select?: HsrolesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HsrolesCountOutputType without action
   */
  export type HsrolesCountOutputTypeCountHspermissions_rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hspermissions_rolesWhereInput
  }

  /**
   * HsrolesCountOutputType without action
   */
  export type HsrolesCountOutputTypeCountHsusers_rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hsusers_rolesWhereInput
  }


  /**
   * Count Type HspermissionsCountOutputType
   */

  export type HspermissionsCountOutputType = {
    hspermissions_roles: number
    hsusers_permissions: number
  }

  export type HspermissionsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hspermissions_roles?: boolean | HspermissionsCountOutputTypeCountHspermissions_rolesArgs
    hsusers_permissions?: boolean | HspermissionsCountOutputTypeCountHsusers_permissionsArgs
  }

  // Custom InputTypes
  /**
   * HspermissionsCountOutputType without action
   */
  export type HspermissionsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HspermissionsCountOutputType
     */
    select?: HspermissionsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HspermissionsCountOutputType without action
   */
  export type HspermissionsCountOutputTypeCountHspermissions_rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hspermissions_rolesWhereInput
  }

  /**
   * HspermissionsCountOutputType without action
   */
  export type HspermissionsCountOutputTypeCountHsusers_permissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hsusers_permissionsWhereInput
  }


  /**
   * Count Type HsbranchesCountOutputType
   */

  export type HsbranchesCountOutputType = {
    hsemployees: number
    hsvalidities: number
    hsvalidity_requests: number
  }

  export type HsbranchesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hsemployees?: boolean | HsbranchesCountOutputTypeCountHsemployeesArgs
    hsvalidities?: boolean | HsbranchesCountOutputTypeCountHsvaliditiesArgs
    hsvalidity_requests?: boolean | HsbranchesCountOutputTypeCountHsvalidity_requestsArgs
  }

  // Custom InputTypes
  /**
   * HsbranchesCountOutputType without action
   */
  export type HsbranchesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HsbranchesCountOutputType
     */
    select?: HsbranchesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HsbranchesCountOutputType without action
   */
  export type HsbranchesCountOutputTypeCountHsemployeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hsemployeesWhereInput
  }

  /**
   * HsbranchesCountOutputType without action
   */
  export type HsbranchesCountOutputTypeCountHsvaliditiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hsvaliditiesWhereInput
  }

  /**
   * HsbranchesCountOutputType without action
   */
  export type HsbranchesCountOutputTypeCountHsvalidity_requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hsvalidity_requestsWhereInput
  }


  /**
   * Count Type HsvaliditiesCountOutputType
   */

  export type HsvaliditiesCountOutputType = {
    hsvalidity_products: number
  }

  export type HsvaliditiesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hsvalidity_products?: boolean | HsvaliditiesCountOutputTypeCountHsvalidity_productsArgs
  }

  // Custom InputTypes
  /**
   * HsvaliditiesCountOutputType without action
   */
  export type HsvaliditiesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HsvaliditiesCountOutputType
     */
    select?: HsvaliditiesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HsvaliditiesCountOutputType without action
   */
  export type HsvaliditiesCountOutputTypeCountHsvalidity_productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hsvalidity_productsWhereInput
  }


  /**
   * Count Type Hsvalidity_requestsCountOutputType
   */

  export type Hsvalidity_requestsCountOutputType = {
    hsvalidities: number
    hsvalidity_request_products: number
  }

  export type Hsvalidity_requestsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hsvalidities?: boolean | Hsvalidity_requestsCountOutputTypeCountHsvaliditiesArgs
    hsvalidity_request_products?: boolean | Hsvalidity_requestsCountOutputTypeCountHsvalidity_request_productsArgs
  }

  // Custom InputTypes
  /**
   * Hsvalidity_requestsCountOutputType without action
   */
  export type Hsvalidity_requestsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hsvalidity_requestsCountOutputType
     */
    select?: Hsvalidity_requestsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Hsvalidity_requestsCountOutputType without action
   */
  export type Hsvalidity_requestsCountOutputTypeCountHsvaliditiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hsvaliditiesWhereInput
  }

  /**
   * Hsvalidity_requestsCountOutputType without action
   */
  export type Hsvalidity_requestsCountOutputTypeCountHsvalidity_request_productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hsvalidity_request_productsWhereInput
  }


  /**
   * Count Type Hsvalidity_treatmentsCountOutputType
   */

  export type Hsvalidity_treatmentsCountOutputType = {
    hsvalidity_products: number
  }

  export type Hsvalidity_treatmentsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hsvalidity_products?: boolean | Hsvalidity_treatmentsCountOutputTypeCountHsvalidity_productsArgs
  }

  // Custom InputTypes
  /**
   * Hsvalidity_treatmentsCountOutputType without action
   */
  export type Hsvalidity_treatmentsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hsvalidity_treatmentsCountOutputType
     */
    select?: Hsvalidity_treatmentsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Hsvalidity_treatmentsCountOutputType without action
   */
  export type Hsvalidity_treatmentsCountOutputTypeCountHsvalidity_productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hsvalidity_productsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model hsemployees
   */

  export type AggregateHsemployees = {
    _count: HsemployeesCountAggregateOutputType | null
    _avg: HsemployeesAvgAggregateOutputType | null
    _sum: HsemployeesSumAggregateOutputType | null
    _min: HsemployeesMinAggregateOutputType | null
    _max: HsemployeesMaxAggregateOutputType | null
  }

  export type HsemployeesAvgAggregateOutputType = {
    id: number | null
    branch_id: number | null
    winthor_id: number | null
  }

  export type HsemployeesSumAggregateOutputType = {
    id: number | null
    branch_id: number | null
    winthor_id: number | null
  }

  export type HsemployeesMinAggregateOutputType = {
    id: number | null
    branch_id: number | null
    winthor_id: number | null
    name: string | null
    username: string | null
    password: string | null
    created_at: Date | null
    modified_at: Date | null
  }

  export type HsemployeesMaxAggregateOutputType = {
    id: number | null
    branch_id: number | null
    winthor_id: number | null
    name: string | null
    username: string | null
    password: string | null
    created_at: Date | null
    modified_at: Date | null
  }

  export type HsemployeesCountAggregateOutputType = {
    id: number
    branch_id: number
    winthor_id: number
    name: number
    username: number
    password: number
    created_at: number
    modified_at: number
    _all: number
  }


  export type HsemployeesAvgAggregateInputType = {
    id?: true
    branch_id?: true
    winthor_id?: true
  }

  export type HsemployeesSumAggregateInputType = {
    id?: true
    branch_id?: true
    winthor_id?: true
  }

  export type HsemployeesMinAggregateInputType = {
    id?: true
    branch_id?: true
    winthor_id?: true
    name?: true
    username?: true
    password?: true
    created_at?: true
    modified_at?: true
  }

  export type HsemployeesMaxAggregateInputType = {
    id?: true
    branch_id?: true
    winthor_id?: true
    name?: true
    username?: true
    password?: true
    created_at?: true
    modified_at?: true
  }

  export type HsemployeesCountAggregateInputType = {
    id?: true
    branch_id?: true
    winthor_id?: true
    name?: true
    username?: true
    password?: true
    created_at?: true
    modified_at?: true
    _all?: true
  }

  export type HsemployeesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hsemployees to aggregate.
     */
    where?: hsemployeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hsemployees to fetch.
     */
    orderBy?: hsemployeesOrderByWithRelationInput | hsemployeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: hsemployeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hsemployees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hsemployees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned hsemployees
    **/
    _count?: true | HsemployeesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HsemployeesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HsemployeesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HsemployeesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HsemployeesMaxAggregateInputType
  }

  export type GetHsemployeesAggregateType<T extends HsemployeesAggregateArgs> = {
        [P in keyof T & keyof AggregateHsemployees]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHsemployees[P]>
      : GetScalarType<T[P], AggregateHsemployees[P]>
  }




  export type hsemployeesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hsemployeesWhereInput
    orderBy?: hsemployeesOrderByWithAggregationInput | hsemployeesOrderByWithAggregationInput[]
    by: HsemployeesScalarFieldEnum[] | HsemployeesScalarFieldEnum
    having?: hsemployeesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HsemployeesCountAggregateInputType | true
    _avg?: HsemployeesAvgAggregateInputType
    _sum?: HsemployeesSumAggregateInputType
    _min?: HsemployeesMinAggregateInputType
    _max?: HsemployeesMaxAggregateInputType
  }

  export type HsemployeesGroupByOutputType = {
    id: number
    branch_id: number
    winthor_id: number
    name: string
    username: string
    password: string
    created_at: Date
    modified_at: Date
    _count: HsemployeesCountAggregateOutputType | null
    _avg: HsemployeesAvgAggregateOutputType | null
    _sum: HsemployeesSumAggregateOutputType | null
    _min: HsemployeesMinAggregateOutputType | null
    _max: HsemployeesMaxAggregateOutputType | null
  }

  type GetHsemployeesGroupByPayload<T extends hsemployeesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HsemployeesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HsemployeesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HsemployeesGroupByOutputType[P]>
            : GetScalarType<T[P], HsemployeesGroupByOutputType[P]>
        }
      >
    >


  export type hsemployeesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    branch_id?: boolean
    winthor_id?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    created_at?: boolean
    modified_at?: boolean
    branch?: boolean | hsbranchesDefaultArgs<ExtArgs>
    sessions?: boolean | hsemployees$sessionsArgs<ExtArgs>
    hsusers_permissions?: boolean | hsemployees$hsusers_permissionsArgs<ExtArgs>
    hsusers_roles?: boolean | hsemployees$hsusers_rolesArgs<ExtArgs>
    hsvalidities?: boolean | hsemployees$hsvaliditiesArgs<ExtArgs>
    analystRequests?: boolean | hsemployees$analystRequestsArgs<ExtArgs>
    confereeRequests?: boolean | hsemployees$confereeRequestsArgs<ExtArgs>
    _count?: boolean | HsemployeesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hsemployees"]>

  export type hsemployeesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    branch_id?: boolean
    winthor_id?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    created_at?: boolean
    modified_at?: boolean
    branch?: boolean | hsbranchesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hsemployees"]>

  export type hsemployeesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    branch_id?: boolean
    winthor_id?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    created_at?: boolean
    modified_at?: boolean
    branch?: boolean | hsbranchesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hsemployees"]>

  export type hsemployeesSelectScalar = {
    id?: boolean
    branch_id?: boolean
    winthor_id?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    created_at?: boolean
    modified_at?: boolean
  }

  export type hsemployeesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "branch_id" | "winthor_id" | "name" | "username" | "password" | "created_at" | "modified_at", ExtArgs["result"]["hsemployees"]>
  export type hsemployeesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | hsbranchesDefaultArgs<ExtArgs>
    sessions?: boolean | hsemployees$sessionsArgs<ExtArgs>
    hsusers_permissions?: boolean | hsemployees$hsusers_permissionsArgs<ExtArgs>
    hsusers_roles?: boolean | hsemployees$hsusers_rolesArgs<ExtArgs>
    hsvalidities?: boolean | hsemployees$hsvaliditiesArgs<ExtArgs>
    analystRequests?: boolean | hsemployees$analystRequestsArgs<ExtArgs>
    confereeRequests?: boolean | hsemployees$confereeRequestsArgs<ExtArgs>
    _count?: boolean | HsemployeesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type hsemployeesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | hsbranchesDefaultArgs<ExtArgs>
  }
  export type hsemployeesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | hsbranchesDefaultArgs<ExtArgs>
  }

  export type $hsemployeesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "hsemployees"
    objects: {
      branch: Prisma.$hsbranchesPayload<ExtArgs>
      sessions: Prisma.$hssessionsPayload<ExtArgs>[]
      hsusers_permissions: Prisma.$hsusers_permissionsPayload<ExtArgs>[]
      hsusers_roles: Prisma.$hsusers_rolesPayload<ExtArgs>[]
      hsvalidities: Prisma.$hsvaliditiesPayload<ExtArgs>[]
      analystRequests: Prisma.$hsvalidity_requestsPayload<ExtArgs>[]
      confereeRequests: Prisma.$hsvalidity_requestsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      branch_id: number
      winthor_id: number
      name: string
      username: string
      password: string
      created_at: Date
      modified_at: Date
    }, ExtArgs["result"]["hsemployees"]>
    composites: {}
  }

  type hsemployeesGetPayload<S extends boolean | null | undefined | hsemployeesDefaultArgs> = $Result.GetResult<Prisma.$hsemployeesPayload, S>

  type hsemployeesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<hsemployeesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HsemployeesCountAggregateInputType | true
    }

  export interface hsemployeesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['hsemployees'], meta: { name: 'hsemployees' } }
    /**
     * Find zero or one Hsemployees that matches the filter.
     * @param {hsemployeesFindUniqueArgs} args - Arguments to find a Hsemployees
     * @example
     * // Get one Hsemployees
     * const hsemployees = await prisma.hsemployees.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends hsemployeesFindUniqueArgs>(args: SelectSubset<T, hsemployeesFindUniqueArgs<ExtArgs>>): Prisma__hsemployeesClient<$Result.GetResult<Prisma.$hsemployeesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hsemployees that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {hsemployeesFindUniqueOrThrowArgs} args - Arguments to find a Hsemployees
     * @example
     * // Get one Hsemployees
     * const hsemployees = await prisma.hsemployees.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends hsemployeesFindUniqueOrThrowArgs>(args: SelectSubset<T, hsemployeesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__hsemployeesClient<$Result.GetResult<Prisma.$hsemployeesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hsemployees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hsemployeesFindFirstArgs} args - Arguments to find a Hsemployees
     * @example
     * // Get one Hsemployees
     * const hsemployees = await prisma.hsemployees.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends hsemployeesFindFirstArgs>(args?: SelectSubset<T, hsemployeesFindFirstArgs<ExtArgs>>): Prisma__hsemployeesClient<$Result.GetResult<Prisma.$hsemployeesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hsemployees that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hsemployeesFindFirstOrThrowArgs} args - Arguments to find a Hsemployees
     * @example
     * // Get one Hsemployees
     * const hsemployees = await prisma.hsemployees.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends hsemployeesFindFirstOrThrowArgs>(args?: SelectSubset<T, hsemployeesFindFirstOrThrowArgs<ExtArgs>>): Prisma__hsemployeesClient<$Result.GetResult<Prisma.$hsemployeesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hsemployees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hsemployeesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hsemployees
     * const hsemployees = await prisma.hsemployees.findMany()
     * 
     * // Get first 10 Hsemployees
     * const hsemployees = await prisma.hsemployees.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hsemployeesWithIdOnly = await prisma.hsemployees.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends hsemployeesFindManyArgs>(args?: SelectSubset<T, hsemployeesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hsemployeesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hsemployees.
     * @param {hsemployeesCreateArgs} args - Arguments to create a Hsemployees.
     * @example
     * // Create one Hsemployees
     * const Hsemployees = await prisma.hsemployees.create({
     *   data: {
     *     // ... data to create a Hsemployees
     *   }
     * })
     * 
     */
    create<T extends hsemployeesCreateArgs>(args: SelectSubset<T, hsemployeesCreateArgs<ExtArgs>>): Prisma__hsemployeesClient<$Result.GetResult<Prisma.$hsemployeesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hsemployees.
     * @param {hsemployeesCreateManyArgs} args - Arguments to create many Hsemployees.
     * @example
     * // Create many Hsemployees
     * const hsemployees = await prisma.hsemployees.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends hsemployeesCreateManyArgs>(args?: SelectSubset<T, hsemployeesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Hsemployees and returns the data saved in the database.
     * @param {hsemployeesCreateManyAndReturnArgs} args - Arguments to create many Hsemployees.
     * @example
     * // Create many Hsemployees
     * const hsemployees = await prisma.hsemployees.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Hsemployees and only return the `id`
     * const hsemployeesWithIdOnly = await prisma.hsemployees.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends hsemployeesCreateManyAndReturnArgs>(args?: SelectSubset<T, hsemployeesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hsemployeesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Hsemployees.
     * @param {hsemployeesDeleteArgs} args - Arguments to delete one Hsemployees.
     * @example
     * // Delete one Hsemployees
     * const Hsemployees = await prisma.hsemployees.delete({
     *   where: {
     *     // ... filter to delete one Hsemployees
     *   }
     * })
     * 
     */
    delete<T extends hsemployeesDeleteArgs>(args: SelectSubset<T, hsemployeesDeleteArgs<ExtArgs>>): Prisma__hsemployeesClient<$Result.GetResult<Prisma.$hsemployeesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hsemployees.
     * @param {hsemployeesUpdateArgs} args - Arguments to update one Hsemployees.
     * @example
     * // Update one Hsemployees
     * const hsemployees = await prisma.hsemployees.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends hsemployeesUpdateArgs>(args: SelectSubset<T, hsemployeesUpdateArgs<ExtArgs>>): Prisma__hsemployeesClient<$Result.GetResult<Prisma.$hsemployeesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hsemployees.
     * @param {hsemployeesDeleteManyArgs} args - Arguments to filter Hsemployees to delete.
     * @example
     * // Delete a few Hsemployees
     * const { count } = await prisma.hsemployees.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends hsemployeesDeleteManyArgs>(args?: SelectSubset<T, hsemployeesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hsemployees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hsemployeesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hsemployees
     * const hsemployees = await prisma.hsemployees.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends hsemployeesUpdateManyArgs>(args: SelectSubset<T, hsemployeesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hsemployees and returns the data updated in the database.
     * @param {hsemployeesUpdateManyAndReturnArgs} args - Arguments to update many Hsemployees.
     * @example
     * // Update many Hsemployees
     * const hsemployees = await prisma.hsemployees.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Hsemployees and only return the `id`
     * const hsemployeesWithIdOnly = await prisma.hsemployees.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends hsemployeesUpdateManyAndReturnArgs>(args: SelectSubset<T, hsemployeesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hsemployeesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Hsemployees.
     * @param {hsemployeesUpsertArgs} args - Arguments to update or create a Hsemployees.
     * @example
     * // Update or create a Hsemployees
     * const hsemployees = await prisma.hsemployees.upsert({
     *   create: {
     *     // ... data to create a Hsemployees
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hsemployees we want to update
     *   }
     * })
     */
    upsert<T extends hsemployeesUpsertArgs>(args: SelectSubset<T, hsemployeesUpsertArgs<ExtArgs>>): Prisma__hsemployeesClient<$Result.GetResult<Prisma.$hsemployeesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Hsemployees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hsemployeesCountArgs} args - Arguments to filter Hsemployees to count.
     * @example
     * // Count the number of Hsemployees
     * const count = await prisma.hsemployees.count({
     *   where: {
     *     // ... the filter for the Hsemployees we want to count
     *   }
     * })
    **/
    count<T extends hsemployeesCountArgs>(
      args?: Subset<T, hsemployeesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HsemployeesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hsemployees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HsemployeesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HsemployeesAggregateArgs>(args: Subset<T, HsemployeesAggregateArgs>): Prisma.PrismaPromise<GetHsemployeesAggregateType<T>>

    /**
     * Group by Hsemployees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hsemployeesGroupByArgs} args - Group by arguments.
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
      T extends hsemployeesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: hsemployeesGroupByArgs['orderBy'] }
        : { orderBy?: hsemployeesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, hsemployeesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHsemployeesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the hsemployees model
   */
  readonly fields: hsemployeesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for hsemployees.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__hsemployeesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    branch<T extends hsbranchesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, hsbranchesDefaultArgs<ExtArgs>>): Prisma__hsbranchesClient<$Result.GetResult<Prisma.$hsbranchesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sessions<T extends hsemployees$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, hsemployees$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hssessionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    hsusers_permissions<T extends hsemployees$hsusers_permissionsArgs<ExtArgs> = {}>(args?: Subset<T, hsemployees$hsusers_permissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hsusers_permissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    hsusers_roles<T extends hsemployees$hsusers_rolesArgs<ExtArgs> = {}>(args?: Subset<T, hsemployees$hsusers_rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hsusers_rolesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    hsvalidities<T extends hsemployees$hsvaliditiesArgs<ExtArgs> = {}>(args?: Subset<T, hsemployees$hsvaliditiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hsvaliditiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    analystRequests<T extends hsemployees$analystRequestsArgs<ExtArgs> = {}>(args?: Subset<T, hsemployees$analystRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hsvalidity_requestsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    confereeRequests<T extends hsemployees$confereeRequestsArgs<ExtArgs> = {}>(args?: Subset<T, hsemployees$confereeRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hsvalidity_requestsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the hsemployees model
   */
  interface hsemployeesFieldRefs {
    readonly id: FieldRef<"hsemployees", 'Int'>
    readonly branch_id: FieldRef<"hsemployees", 'Int'>
    readonly winthor_id: FieldRef<"hsemployees", 'Int'>
    readonly name: FieldRef<"hsemployees", 'String'>
    readonly username: FieldRef<"hsemployees", 'String'>
    readonly password: FieldRef<"hsemployees", 'String'>
    readonly created_at: FieldRef<"hsemployees", 'DateTime'>
    readonly modified_at: FieldRef<"hsemployees", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * hsemployees findUnique
   */
  export type hsemployeesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsemployees
     */
    select?: hsemployeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsemployees
     */
    omit?: hsemployeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsemployeesInclude<ExtArgs> | null
    /**
     * Filter, which hsemployees to fetch.
     */
    where: hsemployeesWhereUniqueInput
  }

  /**
   * hsemployees findUniqueOrThrow
   */
  export type hsemployeesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsemployees
     */
    select?: hsemployeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsemployees
     */
    omit?: hsemployeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsemployeesInclude<ExtArgs> | null
    /**
     * Filter, which hsemployees to fetch.
     */
    where: hsemployeesWhereUniqueInput
  }

  /**
   * hsemployees findFirst
   */
  export type hsemployeesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsemployees
     */
    select?: hsemployeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsemployees
     */
    omit?: hsemployeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsemployeesInclude<ExtArgs> | null
    /**
     * Filter, which hsemployees to fetch.
     */
    where?: hsemployeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hsemployees to fetch.
     */
    orderBy?: hsemployeesOrderByWithRelationInput | hsemployeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hsemployees.
     */
    cursor?: hsemployeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hsemployees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hsemployees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hsemployees.
     */
    distinct?: HsemployeesScalarFieldEnum | HsemployeesScalarFieldEnum[]
  }

  /**
   * hsemployees findFirstOrThrow
   */
  export type hsemployeesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsemployees
     */
    select?: hsemployeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsemployees
     */
    omit?: hsemployeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsemployeesInclude<ExtArgs> | null
    /**
     * Filter, which hsemployees to fetch.
     */
    where?: hsemployeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hsemployees to fetch.
     */
    orderBy?: hsemployeesOrderByWithRelationInput | hsemployeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hsemployees.
     */
    cursor?: hsemployeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hsemployees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hsemployees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hsemployees.
     */
    distinct?: HsemployeesScalarFieldEnum | HsemployeesScalarFieldEnum[]
  }

  /**
   * hsemployees findMany
   */
  export type hsemployeesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsemployees
     */
    select?: hsemployeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsemployees
     */
    omit?: hsemployeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsemployeesInclude<ExtArgs> | null
    /**
     * Filter, which hsemployees to fetch.
     */
    where?: hsemployeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hsemployees to fetch.
     */
    orderBy?: hsemployeesOrderByWithRelationInput | hsemployeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing hsemployees.
     */
    cursor?: hsemployeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hsemployees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hsemployees.
     */
    skip?: number
    distinct?: HsemployeesScalarFieldEnum | HsemployeesScalarFieldEnum[]
  }

  /**
   * hsemployees create
   */
  export type hsemployeesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsemployees
     */
    select?: hsemployeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsemployees
     */
    omit?: hsemployeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsemployeesInclude<ExtArgs> | null
    /**
     * The data needed to create a hsemployees.
     */
    data: XOR<hsemployeesCreateInput, hsemployeesUncheckedCreateInput>
  }

  /**
   * hsemployees createMany
   */
  export type hsemployeesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many hsemployees.
     */
    data: hsemployeesCreateManyInput | hsemployeesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * hsemployees createManyAndReturn
   */
  export type hsemployeesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsemployees
     */
    select?: hsemployeesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the hsemployees
     */
    omit?: hsemployeesOmit<ExtArgs> | null
    /**
     * The data used to create many hsemployees.
     */
    data: hsemployeesCreateManyInput | hsemployeesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsemployeesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * hsemployees update
   */
  export type hsemployeesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsemployees
     */
    select?: hsemployeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsemployees
     */
    omit?: hsemployeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsemployeesInclude<ExtArgs> | null
    /**
     * The data needed to update a hsemployees.
     */
    data: XOR<hsemployeesUpdateInput, hsemployeesUncheckedUpdateInput>
    /**
     * Choose, which hsemployees to update.
     */
    where: hsemployeesWhereUniqueInput
  }

  /**
   * hsemployees updateMany
   */
  export type hsemployeesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update hsemployees.
     */
    data: XOR<hsemployeesUpdateManyMutationInput, hsemployeesUncheckedUpdateManyInput>
    /**
     * Filter which hsemployees to update
     */
    where?: hsemployeesWhereInput
    /**
     * Limit how many hsemployees to update.
     */
    limit?: number
  }

  /**
   * hsemployees updateManyAndReturn
   */
  export type hsemployeesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsemployees
     */
    select?: hsemployeesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the hsemployees
     */
    omit?: hsemployeesOmit<ExtArgs> | null
    /**
     * The data used to update hsemployees.
     */
    data: XOR<hsemployeesUpdateManyMutationInput, hsemployeesUncheckedUpdateManyInput>
    /**
     * Filter which hsemployees to update
     */
    where?: hsemployeesWhereInput
    /**
     * Limit how many hsemployees to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsemployeesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * hsemployees upsert
   */
  export type hsemployeesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsemployees
     */
    select?: hsemployeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsemployees
     */
    omit?: hsemployeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsemployeesInclude<ExtArgs> | null
    /**
     * The filter to search for the hsemployees to update in case it exists.
     */
    where: hsemployeesWhereUniqueInput
    /**
     * In case the hsemployees found by the `where` argument doesn't exist, create a new hsemployees with this data.
     */
    create: XOR<hsemployeesCreateInput, hsemployeesUncheckedCreateInput>
    /**
     * In case the hsemployees was found with the provided `where` argument, update it with this data.
     */
    update: XOR<hsemployeesUpdateInput, hsemployeesUncheckedUpdateInput>
  }

  /**
   * hsemployees delete
   */
  export type hsemployeesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsemployees
     */
    select?: hsemployeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsemployees
     */
    omit?: hsemployeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsemployeesInclude<ExtArgs> | null
    /**
     * Filter which hsemployees to delete.
     */
    where: hsemployeesWhereUniqueInput
  }

  /**
   * hsemployees deleteMany
   */
  export type hsemployeesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hsemployees to delete
     */
    where?: hsemployeesWhereInput
    /**
     * Limit how many hsemployees to delete.
     */
    limit?: number
  }

  /**
   * hsemployees.sessions
   */
  export type hsemployees$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hssessions
     */
    select?: hssessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hssessions
     */
    omit?: hssessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hssessionsInclude<ExtArgs> | null
    where?: hssessionsWhereInput
    orderBy?: hssessionsOrderByWithRelationInput | hssessionsOrderByWithRelationInput[]
    cursor?: hssessionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HssessionsScalarFieldEnum | HssessionsScalarFieldEnum[]
  }

  /**
   * hsemployees.hsusers_permissions
   */
  export type hsemployees$hsusers_permissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsusers_permissions
     */
    select?: hsusers_permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsusers_permissions
     */
    omit?: hsusers_permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsusers_permissionsInclude<ExtArgs> | null
    where?: hsusers_permissionsWhereInput
    orderBy?: hsusers_permissionsOrderByWithRelationInput | hsusers_permissionsOrderByWithRelationInput[]
    cursor?: hsusers_permissionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Hsusers_permissionsScalarFieldEnum | Hsusers_permissionsScalarFieldEnum[]
  }

  /**
   * hsemployees.hsusers_roles
   */
  export type hsemployees$hsusers_rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsusers_roles
     */
    select?: hsusers_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsusers_roles
     */
    omit?: hsusers_rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsusers_rolesInclude<ExtArgs> | null
    where?: hsusers_rolesWhereInput
    orderBy?: hsusers_rolesOrderByWithRelationInput | hsusers_rolesOrderByWithRelationInput[]
    cursor?: hsusers_rolesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Hsusers_rolesScalarFieldEnum | Hsusers_rolesScalarFieldEnum[]
  }

  /**
   * hsemployees.hsvalidities
   */
  export type hsemployees$hsvaliditiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsvalidities
     */
    select?: hsvaliditiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsvalidities
     */
    omit?: hsvaliditiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsvaliditiesInclude<ExtArgs> | null
    where?: hsvaliditiesWhereInput
    orderBy?: hsvaliditiesOrderByWithRelationInput | hsvaliditiesOrderByWithRelationInput[]
    cursor?: hsvaliditiesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HsvaliditiesScalarFieldEnum | HsvaliditiesScalarFieldEnum[]
  }

  /**
   * hsemployees.analystRequests
   */
  export type hsemployees$analystRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsvalidity_requests
     */
    select?: hsvalidity_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsvalidity_requests
     */
    omit?: hsvalidity_requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsvalidity_requestsInclude<ExtArgs> | null
    where?: hsvalidity_requestsWhereInput
    orderBy?: hsvalidity_requestsOrderByWithRelationInput | hsvalidity_requestsOrderByWithRelationInput[]
    cursor?: hsvalidity_requestsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Hsvalidity_requestsScalarFieldEnum | Hsvalidity_requestsScalarFieldEnum[]
  }

  /**
   * hsemployees.confereeRequests
   */
  export type hsemployees$confereeRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsvalidity_requests
     */
    select?: hsvalidity_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsvalidity_requests
     */
    omit?: hsvalidity_requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsvalidity_requestsInclude<ExtArgs> | null
    where?: hsvalidity_requestsWhereInput
    orderBy?: hsvalidity_requestsOrderByWithRelationInput | hsvalidity_requestsOrderByWithRelationInput[]
    cursor?: hsvalidity_requestsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Hsvalidity_requestsScalarFieldEnum | Hsvalidity_requestsScalarFieldEnum[]
  }

  /**
   * hsemployees without action
   */
  export type hsemployeesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsemployees
     */
    select?: hsemployeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsemployees
     */
    omit?: hsemployeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsemployeesInclude<ExtArgs> | null
  }


  /**
   * Model hsroles
   */

  export type AggregateHsroles = {
    _count: HsrolesCountAggregateOutputType | null
    _avg: HsrolesAvgAggregateOutputType | null
    _sum: HsrolesSumAggregateOutputType | null
    _min: HsrolesMinAggregateOutputType | null
    _max: HsrolesMaxAggregateOutputType | null
  }

  export type HsrolesAvgAggregateOutputType = {
    id: number | null
  }

  export type HsrolesSumAggregateOutputType = {
    id: number | null
  }

  export type HsrolesMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    created_at: Date | null
    modified_at: Date | null
  }

  export type HsrolesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    created_at: Date | null
    modified_at: Date | null
  }

  export type HsrolesCountAggregateOutputType = {
    id: number
    name: number
    description: number
    created_at: number
    modified_at: number
    _all: number
  }


  export type HsrolesAvgAggregateInputType = {
    id?: true
  }

  export type HsrolesSumAggregateInputType = {
    id?: true
  }

  export type HsrolesMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
    modified_at?: true
  }

  export type HsrolesMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
    modified_at?: true
  }

  export type HsrolesCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
    modified_at?: true
    _all?: true
  }

  export type HsrolesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hsroles to aggregate.
     */
    where?: hsrolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hsroles to fetch.
     */
    orderBy?: hsrolesOrderByWithRelationInput | hsrolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: hsrolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hsroles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hsroles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned hsroles
    **/
    _count?: true | HsrolesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HsrolesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HsrolesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HsrolesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HsrolesMaxAggregateInputType
  }

  export type GetHsrolesAggregateType<T extends HsrolesAggregateArgs> = {
        [P in keyof T & keyof AggregateHsroles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHsroles[P]>
      : GetScalarType<T[P], AggregateHsroles[P]>
  }




  export type hsrolesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hsrolesWhereInput
    orderBy?: hsrolesOrderByWithAggregationInput | hsrolesOrderByWithAggregationInput[]
    by: HsrolesScalarFieldEnum[] | HsrolesScalarFieldEnum
    having?: hsrolesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HsrolesCountAggregateInputType | true
    _avg?: HsrolesAvgAggregateInputType
    _sum?: HsrolesSumAggregateInputType
    _min?: HsrolesMinAggregateInputType
    _max?: HsrolesMaxAggregateInputType
  }

  export type HsrolesGroupByOutputType = {
    id: number
    name: string
    description: string
    created_at: Date
    modified_at: Date
    _count: HsrolesCountAggregateOutputType | null
    _avg: HsrolesAvgAggregateOutputType | null
    _sum: HsrolesSumAggregateOutputType | null
    _min: HsrolesMinAggregateOutputType | null
    _max: HsrolesMaxAggregateOutputType | null
  }

  type GetHsrolesGroupByPayload<T extends hsrolesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HsrolesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HsrolesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HsrolesGroupByOutputType[P]>
            : GetScalarType<T[P], HsrolesGroupByOutputType[P]>
        }
      >
    >


  export type hsrolesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    modified_at?: boolean
    hspermissions_roles?: boolean | hsroles$hspermissions_rolesArgs<ExtArgs>
    hsusers_roles?: boolean | hsroles$hsusers_rolesArgs<ExtArgs>
    _count?: boolean | HsrolesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hsroles"]>

  export type hsrolesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    modified_at?: boolean
  }, ExtArgs["result"]["hsroles"]>

  export type hsrolesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    modified_at?: boolean
  }, ExtArgs["result"]["hsroles"]>

  export type hsrolesSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    modified_at?: boolean
  }

  export type hsrolesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "created_at" | "modified_at", ExtArgs["result"]["hsroles"]>
  export type hsrolesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hspermissions_roles?: boolean | hsroles$hspermissions_rolesArgs<ExtArgs>
    hsusers_roles?: boolean | hsroles$hsusers_rolesArgs<ExtArgs>
    _count?: boolean | HsrolesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type hsrolesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type hsrolesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $hsrolesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "hsroles"
    objects: {
      hspermissions_roles: Prisma.$hspermissions_rolesPayload<ExtArgs>[]
      hsusers_roles: Prisma.$hsusers_rolesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      created_at: Date
      modified_at: Date
    }, ExtArgs["result"]["hsroles"]>
    composites: {}
  }

  type hsrolesGetPayload<S extends boolean | null | undefined | hsrolesDefaultArgs> = $Result.GetResult<Prisma.$hsrolesPayload, S>

  type hsrolesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<hsrolesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HsrolesCountAggregateInputType | true
    }

  export interface hsrolesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['hsroles'], meta: { name: 'hsroles' } }
    /**
     * Find zero or one Hsroles that matches the filter.
     * @param {hsrolesFindUniqueArgs} args - Arguments to find a Hsroles
     * @example
     * // Get one Hsroles
     * const hsroles = await prisma.hsroles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends hsrolesFindUniqueArgs>(args: SelectSubset<T, hsrolesFindUniqueArgs<ExtArgs>>): Prisma__hsrolesClient<$Result.GetResult<Prisma.$hsrolesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hsroles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {hsrolesFindUniqueOrThrowArgs} args - Arguments to find a Hsroles
     * @example
     * // Get one Hsroles
     * const hsroles = await prisma.hsroles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends hsrolesFindUniqueOrThrowArgs>(args: SelectSubset<T, hsrolesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__hsrolesClient<$Result.GetResult<Prisma.$hsrolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hsroles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hsrolesFindFirstArgs} args - Arguments to find a Hsroles
     * @example
     * // Get one Hsroles
     * const hsroles = await prisma.hsroles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends hsrolesFindFirstArgs>(args?: SelectSubset<T, hsrolesFindFirstArgs<ExtArgs>>): Prisma__hsrolesClient<$Result.GetResult<Prisma.$hsrolesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hsroles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hsrolesFindFirstOrThrowArgs} args - Arguments to find a Hsroles
     * @example
     * // Get one Hsroles
     * const hsroles = await prisma.hsroles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends hsrolesFindFirstOrThrowArgs>(args?: SelectSubset<T, hsrolesFindFirstOrThrowArgs<ExtArgs>>): Prisma__hsrolesClient<$Result.GetResult<Prisma.$hsrolesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hsroles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hsrolesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hsroles
     * const hsroles = await prisma.hsroles.findMany()
     * 
     * // Get first 10 Hsroles
     * const hsroles = await prisma.hsroles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hsrolesWithIdOnly = await prisma.hsroles.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends hsrolesFindManyArgs>(args?: SelectSubset<T, hsrolesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hsrolesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hsroles.
     * @param {hsrolesCreateArgs} args - Arguments to create a Hsroles.
     * @example
     * // Create one Hsroles
     * const Hsroles = await prisma.hsroles.create({
     *   data: {
     *     // ... data to create a Hsroles
     *   }
     * })
     * 
     */
    create<T extends hsrolesCreateArgs>(args: SelectSubset<T, hsrolesCreateArgs<ExtArgs>>): Prisma__hsrolesClient<$Result.GetResult<Prisma.$hsrolesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hsroles.
     * @param {hsrolesCreateManyArgs} args - Arguments to create many Hsroles.
     * @example
     * // Create many Hsroles
     * const hsroles = await prisma.hsroles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends hsrolesCreateManyArgs>(args?: SelectSubset<T, hsrolesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Hsroles and returns the data saved in the database.
     * @param {hsrolesCreateManyAndReturnArgs} args - Arguments to create many Hsroles.
     * @example
     * // Create many Hsroles
     * const hsroles = await prisma.hsroles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Hsroles and only return the `id`
     * const hsrolesWithIdOnly = await prisma.hsroles.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends hsrolesCreateManyAndReturnArgs>(args?: SelectSubset<T, hsrolesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hsrolesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Hsroles.
     * @param {hsrolesDeleteArgs} args - Arguments to delete one Hsroles.
     * @example
     * // Delete one Hsroles
     * const Hsroles = await prisma.hsroles.delete({
     *   where: {
     *     // ... filter to delete one Hsroles
     *   }
     * })
     * 
     */
    delete<T extends hsrolesDeleteArgs>(args: SelectSubset<T, hsrolesDeleteArgs<ExtArgs>>): Prisma__hsrolesClient<$Result.GetResult<Prisma.$hsrolesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hsroles.
     * @param {hsrolesUpdateArgs} args - Arguments to update one Hsroles.
     * @example
     * // Update one Hsroles
     * const hsroles = await prisma.hsroles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends hsrolesUpdateArgs>(args: SelectSubset<T, hsrolesUpdateArgs<ExtArgs>>): Prisma__hsrolesClient<$Result.GetResult<Prisma.$hsrolesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hsroles.
     * @param {hsrolesDeleteManyArgs} args - Arguments to filter Hsroles to delete.
     * @example
     * // Delete a few Hsroles
     * const { count } = await prisma.hsroles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends hsrolesDeleteManyArgs>(args?: SelectSubset<T, hsrolesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hsroles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hsrolesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hsroles
     * const hsroles = await prisma.hsroles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends hsrolesUpdateManyArgs>(args: SelectSubset<T, hsrolesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hsroles and returns the data updated in the database.
     * @param {hsrolesUpdateManyAndReturnArgs} args - Arguments to update many Hsroles.
     * @example
     * // Update many Hsroles
     * const hsroles = await prisma.hsroles.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Hsroles and only return the `id`
     * const hsrolesWithIdOnly = await prisma.hsroles.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends hsrolesUpdateManyAndReturnArgs>(args: SelectSubset<T, hsrolesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hsrolesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Hsroles.
     * @param {hsrolesUpsertArgs} args - Arguments to update or create a Hsroles.
     * @example
     * // Update or create a Hsroles
     * const hsroles = await prisma.hsroles.upsert({
     *   create: {
     *     // ... data to create a Hsroles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hsroles we want to update
     *   }
     * })
     */
    upsert<T extends hsrolesUpsertArgs>(args: SelectSubset<T, hsrolesUpsertArgs<ExtArgs>>): Prisma__hsrolesClient<$Result.GetResult<Prisma.$hsrolesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Hsroles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hsrolesCountArgs} args - Arguments to filter Hsroles to count.
     * @example
     * // Count the number of Hsroles
     * const count = await prisma.hsroles.count({
     *   where: {
     *     // ... the filter for the Hsroles we want to count
     *   }
     * })
    **/
    count<T extends hsrolesCountArgs>(
      args?: Subset<T, hsrolesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HsrolesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hsroles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HsrolesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HsrolesAggregateArgs>(args: Subset<T, HsrolesAggregateArgs>): Prisma.PrismaPromise<GetHsrolesAggregateType<T>>

    /**
     * Group by Hsroles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hsrolesGroupByArgs} args - Group by arguments.
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
      T extends hsrolesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: hsrolesGroupByArgs['orderBy'] }
        : { orderBy?: hsrolesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, hsrolesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHsrolesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the hsroles model
   */
  readonly fields: hsrolesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for hsroles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__hsrolesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hspermissions_roles<T extends hsroles$hspermissions_rolesArgs<ExtArgs> = {}>(args?: Subset<T, hsroles$hspermissions_rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hspermissions_rolesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    hsusers_roles<T extends hsroles$hsusers_rolesArgs<ExtArgs> = {}>(args?: Subset<T, hsroles$hsusers_rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hsusers_rolesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the hsroles model
   */
  interface hsrolesFieldRefs {
    readonly id: FieldRef<"hsroles", 'Int'>
    readonly name: FieldRef<"hsroles", 'String'>
    readonly description: FieldRef<"hsroles", 'String'>
    readonly created_at: FieldRef<"hsroles", 'DateTime'>
    readonly modified_at: FieldRef<"hsroles", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * hsroles findUnique
   */
  export type hsrolesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsroles
     */
    select?: hsrolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsroles
     */
    omit?: hsrolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsrolesInclude<ExtArgs> | null
    /**
     * Filter, which hsroles to fetch.
     */
    where: hsrolesWhereUniqueInput
  }

  /**
   * hsroles findUniqueOrThrow
   */
  export type hsrolesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsroles
     */
    select?: hsrolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsroles
     */
    omit?: hsrolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsrolesInclude<ExtArgs> | null
    /**
     * Filter, which hsroles to fetch.
     */
    where: hsrolesWhereUniqueInput
  }

  /**
   * hsroles findFirst
   */
  export type hsrolesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsroles
     */
    select?: hsrolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsroles
     */
    omit?: hsrolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsrolesInclude<ExtArgs> | null
    /**
     * Filter, which hsroles to fetch.
     */
    where?: hsrolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hsroles to fetch.
     */
    orderBy?: hsrolesOrderByWithRelationInput | hsrolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hsroles.
     */
    cursor?: hsrolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hsroles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hsroles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hsroles.
     */
    distinct?: HsrolesScalarFieldEnum | HsrolesScalarFieldEnum[]
  }

  /**
   * hsroles findFirstOrThrow
   */
  export type hsrolesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsroles
     */
    select?: hsrolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsroles
     */
    omit?: hsrolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsrolesInclude<ExtArgs> | null
    /**
     * Filter, which hsroles to fetch.
     */
    where?: hsrolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hsroles to fetch.
     */
    orderBy?: hsrolesOrderByWithRelationInput | hsrolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hsroles.
     */
    cursor?: hsrolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hsroles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hsroles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hsroles.
     */
    distinct?: HsrolesScalarFieldEnum | HsrolesScalarFieldEnum[]
  }

  /**
   * hsroles findMany
   */
  export type hsrolesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsroles
     */
    select?: hsrolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsroles
     */
    omit?: hsrolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsrolesInclude<ExtArgs> | null
    /**
     * Filter, which hsroles to fetch.
     */
    where?: hsrolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hsroles to fetch.
     */
    orderBy?: hsrolesOrderByWithRelationInput | hsrolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing hsroles.
     */
    cursor?: hsrolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hsroles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hsroles.
     */
    skip?: number
    distinct?: HsrolesScalarFieldEnum | HsrolesScalarFieldEnum[]
  }

  /**
   * hsroles create
   */
  export type hsrolesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsroles
     */
    select?: hsrolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsroles
     */
    omit?: hsrolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsrolesInclude<ExtArgs> | null
    /**
     * The data needed to create a hsroles.
     */
    data: XOR<hsrolesCreateInput, hsrolesUncheckedCreateInput>
  }

  /**
   * hsroles createMany
   */
  export type hsrolesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many hsroles.
     */
    data: hsrolesCreateManyInput | hsrolesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * hsroles createManyAndReturn
   */
  export type hsrolesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsroles
     */
    select?: hsrolesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the hsroles
     */
    omit?: hsrolesOmit<ExtArgs> | null
    /**
     * The data used to create many hsroles.
     */
    data: hsrolesCreateManyInput | hsrolesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * hsroles update
   */
  export type hsrolesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsroles
     */
    select?: hsrolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsroles
     */
    omit?: hsrolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsrolesInclude<ExtArgs> | null
    /**
     * The data needed to update a hsroles.
     */
    data: XOR<hsrolesUpdateInput, hsrolesUncheckedUpdateInput>
    /**
     * Choose, which hsroles to update.
     */
    where: hsrolesWhereUniqueInput
  }

  /**
   * hsroles updateMany
   */
  export type hsrolesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update hsroles.
     */
    data: XOR<hsrolesUpdateManyMutationInput, hsrolesUncheckedUpdateManyInput>
    /**
     * Filter which hsroles to update
     */
    where?: hsrolesWhereInput
    /**
     * Limit how many hsroles to update.
     */
    limit?: number
  }

  /**
   * hsroles updateManyAndReturn
   */
  export type hsrolesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsroles
     */
    select?: hsrolesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the hsroles
     */
    omit?: hsrolesOmit<ExtArgs> | null
    /**
     * The data used to update hsroles.
     */
    data: XOR<hsrolesUpdateManyMutationInput, hsrolesUncheckedUpdateManyInput>
    /**
     * Filter which hsroles to update
     */
    where?: hsrolesWhereInput
    /**
     * Limit how many hsroles to update.
     */
    limit?: number
  }

  /**
   * hsroles upsert
   */
  export type hsrolesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsroles
     */
    select?: hsrolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsroles
     */
    omit?: hsrolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsrolesInclude<ExtArgs> | null
    /**
     * The filter to search for the hsroles to update in case it exists.
     */
    where: hsrolesWhereUniqueInput
    /**
     * In case the hsroles found by the `where` argument doesn't exist, create a new hsroles with this data.
     */
    create: XOR<hsrolesCreateInput, hsrolesUncheckedCreateInput>
    /**
     * In case the hsroles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<hsrolesUpdateInput, hsrolesUncheckedUpdateInput>
  }

  /**
   * hsroles delete
   */
  export type hsrolesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsroles
     */
    select?: hsrolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsroles
     */
    omit?: hsrolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsrolesInclude<ExtArgs> | null
    /**
     * Filter which hsroles to delete.
     */
    where: hsrolesWhereUniqueInput
  }

  /**
   * hsroles deleteMany
   */
  export type hsrolesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hsroles to delete
     */
    where?: hsrolesWhereInput
    /**
     * Limit how many hsroles to delete.
     */
    limit?: number
  }

  /**
   * hsroles.hspermissions_roles
   */
  export type hsroles$hspermissions_rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hspermissions_roles
     */
    select?: hspermissions_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hspermissions_roles
     */
    omit?: hspermissions_rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hspermissions_rolesInclude<ExtArgs> | null
    where?: hspermissions_rolesWhereInput
    orderBy?: hspermissions_rolesOrderByWithRelationInput | hspermissions_rolesOrderByWithRelationInput[]
    cursor?: hspermissions_rolesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Hspermissions_rolesScalarFieldEnum | Hspermissions_rolesScalarFieldEnum[]
  }

  /**
   * hsroles.hsusers_roles
   */
  export type hsroles$hsusers_rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsusers_roles
     */
    select?: hsusers_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsusers_roles
     */
    omit?: hsusers_rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsusers_rolesInclude<ExtArgs> | null
    where?: hsusers_rolesWhereInput
    orderBy?: hsusers_rolesOrderByWithRelationInput | hsusers_rolesOrderByWithRelationInput[]
    cursor?: hsusers_rolesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Hsusers_rolesScalarFieldEnum | Hsusers_rolesScalarFieldEnum[]
  }

  /**
   * hsroles without action
   */
  export type hsrolesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsroles
     */
    select?: hsrolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsroles
     */
    omit?: hsrolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsrolesInclude<ExtArgs> | null
  }


  /**
   * Model hspermissions
   */

  export type AggregateHspermissions = {
    _count: HspermissionsCountAggregateOutputType | null
    _avg: HspermissionsAvgAggregateOutputType | null
    _sum: HspermissionsSumAggregateOutputType | null
    _min: HspermissionsMinAggregateOutputType | null
    _max: HspermissionsMaxAggregateOutputType | null
  }

  export type HspermissionsAvgAggregateOutputType = {
    id: number | null
  }

  export type HspermissionsSumAggregateOutputType = {
    id: number | null
  }

  export type HspermissionsMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    created_at: Date | null
    modified_at: Date | null
  }

  export type HspermissionsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    created_at: Date | null
    modified_at: Date | null
  }

  export type HspermissionsCountAggregateOutputType = {
    id: number
    name: number
    description: number
    created_at: number
    modified_at: number
    _all: number
  }


  export type HspermissionsAvgAggregateInputType = {
    id?: true
  }

  export type HspermissionsSumAggregateInputType = {
    id?: true
  }

  export type HspermissionsMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
    modified_at?: true
  }

  export type HspermissionsMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
    modified_at?: true
  }

  export type HspermissionsCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
    modified_at?: true
    _all?: true
  }

  export type HspermissionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hspermissions to aggregate.
     */
    where?: hspermissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hspermissions to fetch.
     */
    orderBy?: hspermissionsOrderByWithRelationInput | hspermissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: hspermissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hspermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hspermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned hspermissions
    **/
    _count?: true | HspermissionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HspermissionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HspermissionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HspermissionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HspermissionsMaxAggregateInputType
  }

  export type GetHspermissionsAggregateType<T extends HspermissionsAggregateArgs> = {
        [P in keyof T & keyof AggregateHspermissions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHspermissions[P]>
      : GetScalarType<T[P], AggregateHspermissions[P]>
  }




  export type hspermissionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hspermissionsWhereInput
    orderBy?: hspermissionsOrderByWithAggregationInput | hspermissionsOrderByWithAggregationInput[]
    by: HspermissionsScalarFieldEnum[] | HspermissionsScalarFieldEnum
    having?: hspermissionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HspermissionsCountAggregateInputType | true
    _avg?: HspermissionsAvgAggregateInputType
    _sum?: HspermissionsSumAggregateInputType
    _min?: HspermissionsMinAggregateInputType
    _max?: HspermissionsMaxAggregateInputType
  }

  export type HspermissionsGroupByOutputType = {
    id: number
    name: string
    description: string
    created_at: Date
    modified_at: Date
    _count: HspermissionsCountAggregateOutputType | null
    _avg: HspermissionsAvgAggregateOutputType | null
    _sum: HspermissionsSumAggregateOutputType | null
    _min: HspermissionsMinAggregateOutputType | null
    _max: HspermissionsMaxAggregateOutputType | null
  }

  type GetHspermissionsGroupByPayload<T extends hspermissionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HspermissionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HspermissionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HspermissionsGroupByOutputType[P]>
            : GetScalarType<T[P], HspermissionsGroupByOutputType[P]>
        }
      >
    >


  export type hspermissionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    modified_at?: boolean
    hspermissions_roles?: boolean | hspermissions$hspermissions_rolesArgs<ExtArgs>
    hsusers_permissions?: boolean | hspermissions$hsusers_permissionsArgs<ExtArgs>
    _count?: boolean | HspermissionsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hspermissions"]>

  export type hspermissionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    modified_at?: boolean
  }, ExtArgs["result"]["hspermissions"]>

  export type hspermissionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    modified_at?: boolean
  }, ExtArgs["result"]["hspermissions"]>

  export type hspermissionsSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    modified_at?: boolean
  }

  export type hspermissionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "created_at" | "modified_at", ExtArgs["result"]["hspermissions"]>
  export type hspermissionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hspermissions_roles?: boolean | hspermissions$hspermissions_rolesArgs<ExtArgs>
    hsusers_permissions?: boolean | hspermissions$hsusers_permissionsArgs<ExtArgs>
    _count?: boolean | HspermissionsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type hspermissionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type hspermissionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $hspermissionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "hspermissions"
    objects: {
      hspermissions_roles: Prisma.$hspermissions_rolesPayload<ExtArgs>[]
      hsusers_permissions: Prisma.$hsusers_permissionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      created_at: Date
      modified_at: Date
    }, ExtArgs["result"]["hspermissions"]>
    composites: {}
  }

  type hspermissionsGetPayload<S extends boolean | null | undefined | hspermissionsDefaultArgs> = $Result.GetResult<Prisma.$hspermissionsPayload, S>

  type hspermissionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<hspermissionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HspermissionsCountAggregateInputType | true
    }

  export interface hspermissionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['hspermissions'], meta: { name: 'hspermissions' } }
    /**
     * Find zero or one Hspermissions that matches the filter.
     * @param {hspermissionsFindUniqueArgs} args - Arguments to find a Hspermissions
     * @example
     * // Get one Hspermissions
     * const hspermissions = await prisma.hspermissions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends hspermissionsFindUniqueArgs>(args: SelectSubset<T, hspermissionsFindUniqueArgs<ExtArgs>>): Prisma__hspermissionsClient<$Result.GetResult<Prisma.$hspermissionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hspermissions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {hspermissionsFindUniqueOrThrowArgs} args - Arguments to find a Hspermissions
     * @example
     * // Get one Hspermissions
     * const hspermissions = await prisma.hspermissions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends hspermissionsFindUniqueOrThrowArgs>(args: SelectSubset<T, hspermissionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__hspermissionsClient<$Result.GetResult<Prisma.$hspermissionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hspermissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hspermissionsFindFirstArgs} args - Arguments to find a Hspermissions
     * @example
     * // Get one Hspermissions
     * const hspermissions = await prisma.hspermissions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends hspermissionsFindFirstArgs>(args?: SelectSubset<T, hspermissionsFindFirstArgs<ExtArgs>>): Prisma__hspermissionsClient<$Result.GetResult<Prisma.$hspermissionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hspermissions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hspermissionsFindFirstOrThrowArgs} args - Arguments to find a Hspermissions
     * @example
     * // Get one Hspermissions
     * const hspermissions = await prisma.hspermissions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends hspermissionsFindFirstOrThrowArgs>(args?: SelectSubset<T, hspermissionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__hspermissionsClient<$Result.GetResult<Prisma.$hspermissionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hspermissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hspermissionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hspermissions
     * const hspermissions = await prisma.hspermissions.findMany()
     * 
     * // Get first 10 Hspermissions
     * const hspermissions = await prisma.hspermissions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hspermissionsWithIdOnly = await prisma.hspermissions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends hspermissionsFindManyArgs>(args?: SelectSubset<T, hspermissionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hspermissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hspermissions.
     * @param {hspermissionsCreateArgs} args - Arguments to create a Hspermissions.
     * @example
     * // Create one Hspermissions
     * const Hspermissions = await prisma.hspermissions.create({
     *   data: {
     *     // ... data to create a Hspermissions
     *   }
     * })
     * 
     */
    create<T extends hspermissionsCreateArgs>(args: SelectSubset<T, hspermissionsCreateArgs<ExtArgs>>): Prisma__hspermissionsClient<$Result.GetResult<Prisma.$hspermissionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hspermissions.
     * @param {hspermissionsCreateManyArgs} args - Arguments to create many Hspermissions.
     * @example
     * // Create many Hspermissions
     * const hspermissions = await prisma.hspermissions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends hspermissionsCreateManyArgs>(args?: SelectSubset<T, hspermissionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Hspermissions and returns the data saved in the database.
     * @param {hspermissionsCreateManyAndReturnArgs} args - Arguments to create many Hspermissions.
     * @example
     * // Create many Hspermissions
     * const hspermissions = await prisma.hspermissions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Hspermissions and only return the `id`
     * const hspermissionsWithIdOnly = await prisma.hspermissions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends hspermissionsCreateManyAndReturnArgs>(args?: SelectSubset<T, hspermissionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hspermissionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Hspermissions.
     * @param {hspermissionsDeleteArgs} args - Arguments to delete one Hspermissions.
     * @example
     * // Delete one Hspermissions
     * const Hspermissions = await prisma.hspermissions.delete({
     *   where: {
     *     // ... filter to delete one Hspermissions
     *   }
     * })
     * 
     */
    delete<T extends hspermissionsDeleteArgs>(args: SelectSubset<T, hspermissionsDeleteArgs<ExtArgs>>): Prisma__hspermissionsClient<$Result.GetResult<Prisma.$hspermissionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hspermissions.
     * @param {hspermissionsUpdateArgs} args - Arguments to update one Hspermissions.
     * @example
     * // Update one Hspermissions
     * const hspermissions = await prisma.hspermissions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends hspermissionsUpdateArgs>(args: SelectSubset<T, hspermissionsUpdateArgs<ExtArgs>>): Prisma__hspermissionsClient<$Result.GetResult<Prisma.$hspermissionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hspermissions.
     * @param {hspermissionsDeleteManyArgs} args - Arguments to filter Hspermissions to delete.
     * @example
     * // Delete a few Hspermissions
     * const { count } = await prisma.hspermissions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends hspermissionsDeleteManyArgs>(args?: SelectSubset<T, hspermissionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hspermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hspermissionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hspermissions
     * const hspermissions = await prisma.hspermissions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends hspermissionsUpdateManyArgs>(args: SelectSubset<T, hspermissionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hspermissions and returns the data updated in the database.
     * @param {hspermissionsUpdateManyAndReturnArgs} args - Arguments to update many Hspermissions.
     * @example
     * // Update many Hspermissions
     * const hspermissions = await prisma.hspermissions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Hspermissions and only return the `id`
     * const hspermissionsWithIdOnly = await prisma.hspermissions.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends hspermissionsUpdateManyAndReturnArgs>(args: SelectSubset<T, hspermissionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hspermissionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Hspermissions.
     * @param {hspermissionsUpsertArgs} args - Arguments to update or create a Hspermissions.
     * @example
     * // Update or create a Hspermissions
     * const hspermissions = await prisma.hspermissions.upsert({
     *   create: {
     *     // ... data to create a Hspermissions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hspermissions we want to update
     *   }
     * })
     */
    upsert<T extends hspermissionsUpsertArgs>(args: SelectSubset<T, hspermissionsUpsertArgs<ExtArgs>>): Prisma__hspermissionsClient<$Result.GetResult<Prisma.$hspermissionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Hspermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hspermissionsCountArgs} args - Arguments to filter Hspermissions to count.
     * @example
     * // Count the number of Hspermissions
     * const count = await prisma.hspermissions.count({
     *   where: {
     *     // ... the filter for the Hspermissions we want to count
     *   }
     * })
    **/
    count<T extends hspermissionsCountArgs>(
      args?: Subset<T, hspermissionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HspermissionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hspermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HspermissionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HspermissionsAggregateArgs>(args: Subset<T, HspermissionsAggregateArgs>): Prisma.PrismaPromise<GetHspermissionsAggregateType<T>>

    /**
     * Group by Hspermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hspermissionsGroupByArgs} args - Group by arguments.
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
      T extends hspermissionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: hspermissionsGroupByArgs['orderBy'] }
        : { orderBy?: hspermissionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, hspermissionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHspermissionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the hspermissions model
   */
  readonly fields: hspermissionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for hspermissions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__hspermissionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hspermissions_roles<T extends hspermissions$hspermissions_rolesArgs<ExtArgs> = {}>(args?: Subset<T, hspermissions$hspermissions_rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hspermissions_rolesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    hsusers_permissions<T extends hspermissions$hsusers_permissionsArgs<ExtArgs> = {}>(args?: Subset<T, hspermissions$hsusers_permissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hsusers_permissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the hspermissions model
   */
  interface hspermissionsFieldRefs {
    readonly id: FieldRef<"hspermissions", 'Int'>
    readonly name: FieldRef<"hspermissions", 'String'>
    readonly description: FieldRef<"hspermissions", 'String'>
    readonly created_at: FieldRef<"hspermissions", 'DateTime'>
    readonly modified_at: FieldRef<"hspermissions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * hspermissions findUnique
   */
  export type hspermissionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hspermissions
     */
    select?: hspermissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hspermissions
     */
    omit?: hspermissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hspermissionsInclude<ExtArgs> | null
    /**
     * Filter, which hspermissions to fetch.
     */
    where: hspermissionsWhereUniqueInput
  }

  /**
   * hspermissions findUniqueOrThrow
   */
  export type hspermissionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hspermissions
     */
    select?: hspermissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hspermissions
     */
    omit?: hspermissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hspermissionsInclude<ExtArgs> | null
    /**
     * Filter, which hspermissions to fetch.
     */
    where: hspermissionsWhereUniqueInput
  }

  /**
   * hspermissions findFirst
   */
  export type hspermissionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hspermissions
     */
    select?: hspermissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hspermissions
     */
    omit?: hspermissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hspermissionsInclude<ExtArgs> | null
    /**
     * Filter, which hspermissions to fetch.
     */
    where?: hspermissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hspermissions to fetch.
     */
    orderBy?: hspermissionsOrderByWithRelationInput | hspermissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hspermissions.
     */
    cursor?: hspermissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hspermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hspermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hspermissions.
     */
    distinct?: HspermissionsScalarFieldEnum | HspermissionsScalarFieldEnum[]
  }

  /**
   * hspermissions findFirstOrThrow
   */
  export type hspermissionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hspermissions
     */
    select?: hspermissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hspermissions
     */
    omit?: hspermissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hspermissionsInclude<ExtArgs> | null
    /**
     * Filter, which hspermissions to fetch.
     */
    where?: hspermissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hspermissions to fetch.
     */
    orderBy?: hspermissionsOrderByWithRelationInput | hspermissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hspermissions.
     */
    cursor?: hspermissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hspermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hspermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hspermissions.
     */
    distinct?: HspermissionsScalarFieldEnum | HspermissionsScalarFieldEnum[]
  }

  /**
   * hspermissions findMany
   */
  export type hspermissionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hspermissions
     */
    select?: hspermissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hspermissions
     */
    omit?: hspermissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hspermissionsInclude<ExtArgs> | null
    /**
     * Filter, which hspermissions to fetch.
     */
    where?: hspermissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hspermissions to fetch.
     */
    orderBy?: hspermissionsOrderByWithRelationInput | hspermissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing hspermissions.
     */
    cursor?: hspermissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hspermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hspermissions.
     */
    skip?: number
    distinct?: HspermissionsScalarFieldEnum | HspermissionsScalarFieldEnum[]
  }

  /**
   * hspermissions create
   */
  export type hspermissionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hspermissions
     */
    select?: hspermissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hspermissions
     */
    omit?: hspermissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hspermissionsInclude<ExtArgs> | null
    /**
     * The data needed to create a hspermissions.
     */
    data: XOR<hspermissionsCreateInput, hspermissionsUncheckedCreateInput>
  }

  /**
   * hspermissions createMany
   */
  export type hspermissionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many hspermissions.
     */
    data: hspermissionsCreateManyInput | hspermissionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * hspermissions createManyAndReturn
   */
  export type hspermissionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hspermissions
     */
    select?: hspermissionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the hspermissions
     */
    omit?: hspermissionsOmit<ExtArgs> | null
    /**
     * The data used to create many hspermissions.
     */
    data: hspermissionsCreateManyInput | hspermissionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * hspermissions update
   */
  export type hspermissionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hspermissions
     */
    select?: hspermissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hspermissions
     */
    omit?: hspermissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hspermissionsInclude<ExtArgs> | null
    /**
     * The data needed to update a hspermissions.
     */
    data: XOR<hspermissionsUpdateInput, hspermissionsUncheckedUpdateInput>
    /**
     * Choose, which hspermissions to update.
     */
    where: hspermissionsWhereUniqueInput
  }

  /**
   * hspermissions updateMany
   */
  export type hspermissionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update hspermissions.
     */
    data: XOR<hspermissionsUpdateManyMutationInput, hspermissionsUncheckedUpdateManyInput>
    /**
     * Filter which hspermissions to update
     */
    where?: hspermissionsWhereInput
    /**
     * Limit how many hspermissions to update.
     */
    limit?: number
  }

  /**
   * hspermissions updateManyAndReturn
   */
  export type hspermissionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hspermissions
     */
    select?: hspermissionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the hspermissions
     */
    omit?: hspermissionsOmit<ExtArgs> | null
    /**
     * The data used to update hspermissions.
     */
    data: XOR<hspermissionsUpdateManyMutationInput, hspermissionsUncheckedUpdateManyInput>
    /**
     * Filter which hspermissions to update
     */
    where?: hspermissionsWhereInput
    /**
     * Limit how many hspermissions to update.
     */
    limit?: number
  }

  /**
   * hspermissions upsert
   */
  export type hspermissionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hspermissions
     */
    select?: hspermissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hspermissions
     */
    omit?: hspermissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hspermissionsInclude<ExtArgs> | null
    /**
     * The filter to search for the hspermissions to update in case it exists.
     */
    where: hspermissionsWhereUniqueInput
    /**
     * In case the hspermissions found by the `where` argument doesn't exist, create a new hspermissions with this data.
     */
    create: XOR<hspermissionsCreateInput, hspermissionsUncheckedCreateInput>
    /**
     * In case the hspermissions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<hspermissionsUpdateInput, hspermissionsUncheckedUpdateInput>
  }

  /**
   * hspermissions delete
   */
  export type hspermissionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hspermissions
     */
    select?: hspermissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hspermissions
     */
    omit?: hspermissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hspermissionsInclude<ExtArgs> | null
    /**
     * Filter which hspermissions to delete.
     */
    where: hspermissionsWhereUniqueInput
  }

  /**
   * hspermissions deleteMany
   */
  export type hspermissionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hspermissions to delete
     */
    where?: hspermissionsWhereInput
    /**
     * Limit how many hspermissions to delete.
     */
    limit?: number
  }

  /**
   * hspermissions.hspermissions_roles
   */
  export type hspermissions$hspermissions_rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hspermissions_roles
     */
    select?: hspermissions_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hspermissions_roles
     */
    omit?: hspermissions_rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hspermissions_rolesInclude<ExtArgs> | null
    where?: hspermissions_rolesWhereInput
    orderBy?: hspermissions_rolesOrderByWithRelationInput | hspermissions_rolesOrderByWithRelationInput[]
    cursor?: hspermissions_rolesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Hspermissions_rolesScalarFieldEnum | Hspermissions_rolesScalarFieldEnum[]
  }

  /**
   * hspermissions.hsusers_permissions
   */
  export type hspermissions$hsusers_permissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsusers_permissions
     */
    select?: hsusers_permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsusers_permissions
     */
    omit?: hsusers_permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsusers_permissionsInclude<ExtArgs> | null
    where?: hsusers_permissionsWhereInput
    orderBy?: hsusers_permissionsOrderByWithRelationInput | hsusers_permissionsOrderByWithRelationInput[]
    cursor?: hsusers_permissionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Hsusers_permissionsScalarFieldEnum | Hsusers_permissionsScalarFieldEnum[]
  }

  /**
   * hspermissions without action
   */
  export type hspermissionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hspermissions
     */
    select?: hspermissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hspermissions
     */
    omit?: hspermissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hspermissionsInclude<ExtArgs> | null
  }


  /**
   * Model hspermissions_roles
   */

  export type AggregateHspermissions_roles = {
    _count: Hspermissions_rolesCountAggregateOutputType | null
    _avg: Hspermissions_rolesAvgAggregateOutputType | null
    _sum: Hspermissions_rolesSumAggregateOutputType | null
    _min: Hspermissions_rolesMinAggregateOutputType | null
    _max: Hspermissions_rolesMaxAggregateOutputType | null
  }

  export type Hspermissions_rolesAvgAggregateOutputType = {
    role_id: number | null
    permission_id: number | null
  }

  export type Hspermissions_rolesSumAggregateOutputType = {
    role_id: number | null
    permission_id: number | null
  }

  export type Hspermissions_rolesMinAggregateOutputType = {
    role_id: number | null
    permission_id: number | null
  }

  export type Hspermissions_rolesMaxAggregateOutputType = {
    role_id: number | null
    permission_id: number | null
  }

  export type Hspermissions_rolesCountAggregateOutputType = {
    role_id: number
    permission_id: number
    _all: number
  }


  export type Hspermissions_rolesAvgAggregateInputType = {
    role_id?: true
    permission_id?: true
  }

  export type Hspermissions_rolesSumAggregateInputType = {
    role_id?: true
    permission_id?: true
  }

  export type Hspermissions_rolesMinAggregateInputType = {
    role_id?: true
    permission_id?: true
  }

  export type Hspermissions_rolesMaxAggregateInputType = {
    role_id?: true
    permission_id?: true
  }

  export type Hspermissions_rolesCountAggregateInputType = {
    role_id?: true
    permission_id?: true
    _all?: true
  }

  export type Hspermissions_rolesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hspermissions_roles to aggregate.
     */
    where?: hspermissions_rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hspermissions_roles to fetch.
     */
    orderBy?: hspermissions_rolesOrderByWithRelationInput | hspermissions_rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: hspermissions_rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hspermissions_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hspermissions_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned hspermissions_roles
    **/
    _count?: true | Hspermissions_rolesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Hspermissions_rolesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Hspermissions_rolesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Hspermissions_rolesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Hspermissions_rolesMaxAggregateInputType
  }

  export type GetHspermissions_rolesAggregateType<T extends Hspermissions_rolesAggregateArgs> = {
        [P in keyof T & keyof AggregateHspermissions_roles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHspermissions_roles[P]>
      : GetScalarType<T[P], AggregateHspermissions_roles[P]>
  }




  export type hspermissions_rolesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hspermissions_rolesWhereInput
    orderBy?: hspermissions_rolesOrderByWithAggregationInput | hspermissions_rolesOrderByWithAggregationInput[]
    by: Hspermissions_rolesScalarFieldEnum[] | Hspermissions_rolesScalarFieldEnum
    having?: hspermissions_rolesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Hspermissions_rolesCountAggregateInputType | true
    _avg?: Hspermissions_rolesAvgAggregateInputType
    _sum?: Hspermissions_rolesSumAggregateInputType
    _min?: Hspermissions_rolesMinAggregateInputType
    _max?: Hspermissions_rolesMaxAggregateInputType
  }

  export type Hspermissions_rolesGroupByOutputType = {
    role_id: number
    permission_id: number
    _count: Hspermissions_rolesCountAggregateOutputType | null
    _avg: Hspermissions_rolesAvgAggregateOutputType | null
    _sum: Hspermissions_rolesSumAggregateOutputType | null
    _min: Hspermissions_rolesMinAggregateOutputType | null
    _max: Hspermissions_rolesMaxAggregateOutputType | null
  }

  type GetHspermissions_rolesGroupByPayload<T extends hspermissions_rolesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Hspermissions_rolesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Hspermissions_rolesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Hspermissions_rolesGroupByOutputType[P]>
            : GetScalarType<T[P], Hspermissions_rolesGroupByOutputType[P]>
        }
      >
    >


  export type hspermissions_rolesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    role_id?: boolean
    permission_id?: boolean
    hspermissions?: boolean | hspermissionsDefaultArgs<ExtArgs>
    hsroles?: boolean | hsrolesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hspermissions_roles"]>

  export type hspermissions_rolesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    role_id?: boolean
    permission_id?: boolean
    hspermissions?: boolean | hspermissionsDefaultArgs<ExtArgs>
    hsroles?: boolean | hsrolesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hspermissions_roles"]>

  export type hspermissions_rolesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    role_id?: boolean
    permission_id?: boolean
    hspermissions?: boolean | hspermissionsDefaultArgs<ExtArgs>
    hsroles?: boolean | hsrolesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hspermissions_roles"]>

  export type hspermissions_rolesSelectScalar = {
    role_id?: boolean
    permission_id?: boolean
  }

  export type hspermissions_rolesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"role_id" | "permission_id", ExtArgs["result"]["hspermissions_roles"]>
  export type hspermissions_rolesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hspermissions?: boolean | hspermissionsDefaultArgs<ExtArgs>
    hsroles?: boolean | hsrolesDefaultArgs<ExtArgs>
  }
  export type hspermissions_rolesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hspermissions?: boolean | hspermissionsDefaultArgs<ExtArgs>
    hsroles?: boolean | hsrolesDefaultArgs<ExtArgs>
  }
  export type hspermissions_rolesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hspermissions?: boolean | hspermissionsDefaultArgs<ExtArgs>
    hsroles?: boolean | hsrolesDefaultArgs<ExtArgs>
  }

  export type $hspermissions_rolesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "hspermissions_roles"
    objects: {
      hspermissions: Prisma.$hspermissionsPayload<ExtArgs>
      hsroles: Prisma.$hsrolesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      role_id: number
      permission_id: number
    }, ExtArgs["result"]["hspermissions_roles"]>
    composites: {}
  }

  type hspermissions_rolesGetPayload<S extends boolean | null | undefined | hspermissions_rolesDefaultArgs> = $Result.GetResult<Prisma.$hspermissions_rolesPayload, S>

  type hspermissions_rolesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<hspermissions_rolesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Hspermissions_rolesCountAggregateInputType | true
    }

  export interface hspermissions_rolesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['hspermissions_roles'], meta: { name: 'hspermissions_roles' } }
    /**
     * Find zero or one Hspermissions_roles that matches the filter.
     * @param {hspermissions_rolesFindUniqueArgs} args - Arguments to find a Hspermissions_roles
     * @example
     * // Get one Hspermissions_roles
     * const hspermissions_roles = await prisma.hspermissions_roles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends hspermissions_rolesFindUniqueArgs>(args: SelectSubset<T, hspermissions_rolesFindUniqueArgs<ExtArgs>>): Prisma__hspermissions_rolesClient<$Result.GetResult<Prisma.$hspermissions_rolesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hspermissions_roles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {hspermissions_rolesFindUniqueOrThrowArgs} args - Arguments to find a Hspermissions_roles
     * @example
     * // Get one Hspermissions_roles
     * const hspermissions_roles = await prisma.hspermissions_roles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends hspermissions_rolesFindUniqueOrThrowArgs>(args: SelectSubset<T, hspermissions_rolesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__hspermissions_rolesClient<$Result.GetResult<Prisma.$hspermissions_rolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hspermissions_roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hspermissions_rolesFindFirstArgs} args - Arguments to find a Hspermissions_roles
     * @example
     * // Get one Hspermissions_roles
     * const hspermissions_roles = await prisma.hspermissions_roles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends hspermissions_rolesFindFirstArgs>(args?: SelectSubset<T, hspermissions_rolesFindFirstArgs<ExtArgs>>): Prisma__hspermissions_rolesClient<$Result.GetResult<Prisma.$hspermissions_rolesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hspermissions_roles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hspermissions_rolesFindFirstOrThrowArgs} args - Arguments to find a Hspermissions_roles
     * @example
     * // Get one Hspermissions_roles
     * const hspermissions_roles = await prisma.hspermissions_roles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends hspermissions_rolesFindFirstOrThrowArgs>(args?: SelectSubset<T, hspermissions_rolesFindFirstOrThrowArgs<ExtArgs>>): Prisma__hspermissions_rolesClient<$Result.GetResult<Prisma.$hspermissions_rolesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hspermissions_roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hspermissions_rolesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hspermissions_roles
     * const hspermissions_roles = await prisma.hspermissions_roles.findMany()
     * 
     * // Get first 10 Hspermissions_roles
     * const hspermissions_roles = await prisma.hspermissions_roles.findMany({ take: 10 })
     * 
     * // Only select the `role_id`
     * const hspermissions_rolesWithRole_idOnly = await prisma.hspermissions_roles.findMany({ select: { role_id: true } })
     * 
     */
    findMany<T extends hspermissions_rolesFindManyArgs>(args?: SelectSubset<T, hspermissions_rolesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hspermissions_rolesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hspermissions_roles.
     * @param {hspermissions_rolesCreateArgs} args - Arguments to create a Hspermissions_roles.
     * @example
     * // Create one Hspermissions_roles
     * const Hspermissions_roles = await prisma.hspermissions_roles.create({
     *   data: {
     *     // ... data to create a Hspermissions_roles
     *   }
     * })
     * 
     */
    create<T extends hspermissions_rolesCreateArgs>(args: SelectSubset<T, hspermissions_rolesCreateArgs<ExtArgs>>): Prisma__hspermissions_rolesClient<$Result.GetResult<Prisma.$hspermissions_rolesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hspermissions_roles.
     * @param {hspermissions_rolesCreateManyArgs} args - Arguments to create many Hspermissions_roles.
     * @example
     * // Create many Hspermissions_roles
     * const hspermissions_roles = await prisma.hspermissions_roles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends hspermissions_rolesCreateManyArgs>(args?: SelectSubset<T, hspermissions_rolesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Hspermissions_roles and returns the data saved in the database.
     * @param {hspermissions_rolesCreateManyAndReturnArgs} args - Arguments to create many Hspermissions_roles.
     * @example
     * // Create many Hspermissions_roles
     * const hspermissions_roles = await prisma.hspermissions_roles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Hspermissions_roles and only return the `role_id`
     * const hspermissions_rolesWithRole_idOnly = await prisma.hspermissions_roles.createManyAndReturn({
     *   select: { role_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends hspermissions_rolesCreateManyAndReturnArgs>(args?: SelectSubset<T, hspermissions_rolesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hspermissions_rolesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Hspermissions_roles.
     * @param {hspermissions_rolesDeleteArgs} args - Arguments to delete one Hspermissions_roles.
     * @example
     * // Delete one Hspermissions_roles
     * const Hspermissions_roles = await prisma.hspermissions_roles.delete({
     *   where: {
     *     // ... filter to delete one Hspermissions_roles
     *   }
     * })
     * 
     */
    delete<T extends hspermissions_rolesDeleteArgs>(args: SelectSubset<T, hspermissions_rolesDeleteArgs<ExtArgs>>): Prisma__hspermissions_rolesClient<$Result.GetResult<Prisma.$hspermissions_rolesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hspermissions_roles.
     * @param {hspermissions_rolesUpdateArgs} args - Arguments to update one Hspermissions_roles.
     * @example
     * // Update one Hspermissions_roles
     * const hspermissions_roles = await prisma.hspermissions_roles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends hspermissions_rolesUpdateArgs>(args: SelectSubset<T, hspermissions_rolesUpdateArgs<ExtArgs>>): Prisma__hspermissions_rolesClient<$Result.GetResult<Prisma.$hspermissions_rolesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hspermissions_roles.
     * @param {hspermissions_rolesDeleteManyArgs} args - Arguments to filter Hspermissions_roles to delete.
     * @example
     * // Delete a few Hspermissions_roles
     * const { count } = await prisma.hspermissions_roles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends hspermissions_rolesDeleteManyArgs>(args?: SelectSubset<T, hspermissions_rolesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hspermissions_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hspermissions_rolesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hspermissions_roles
     * const hspermissions_roles = await prisma.hspermissions_roles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends hspermissions_rolesUpdateManyArgs>(args: SelectSubset<T, hspermissions_rolesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hspermissions_roles and returns the data updated in the database.
     * @param {hspermissions_rolesUpdateManyAndReturnArgs} args - Arguments to update many Hspermissions_roles.
     * @example
     * // Update many Hspermissions_roles
     * const hspermissions_roles = await prisma.hspermissions_roles.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Hspermissions_roles and only return the `role_id`
     * const hspermissions_rolesWithRole_idOnly = await prisma.hspermissions_roles.updateManyAndReturn({
     *   select: { role_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends hspermissions_rolesUpdateManyAndReturnArgs>(args: SelectSubset<T, hspermissions_rolesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hspermissions_rolesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Hspermissions_roles.
     * @param {hspermissions_rolesUpsertArgs} args - Arguments to update or create a Hspermissions_roles.
     * @example
     * // Update or create a Hspermissions_roles
     * const hspermissions_roles = await prisma.hspermissions_roles.upsert({
     *   create: {
     *     // ... data to create a Hspermissions_roles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hspermissions_roles we want to update
     *   }
     * })
     */
    upsert<T extends hspermissions_rolesUpsertArgs>(args: SelectSubset<T, hspermissions_rolesUpsertArgs<ExtArgs>>): Prisma__hspermissions_rolesClient<$Result.GetResult<Prisma.$hspermissions_rolesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Hspermissions_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hspermissions_rolesCountArgs} args - Arguments to filter Hspermissions_roles to count.
     * @example
     * // Count the number of Hspermissions_roles
     * const count = await prisma.hspermissions_roles.count({
     *   where: {
     *     // ... the filter for the Hspermissions_roles we want to count
     *   }
     * })
    **/
    count<T extends hspermissions_rolesCountArgs>(
      args?: Subset<T, hspermissions_rolesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Hspermissions_rolesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hspermissions_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Hspermissions_rolesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Hspermissions_rolesAggregateArgs>(args: Subset<T, Hspermissions_rolesAggregateArgs>): Prisma.PrismaPromise<GetHspermissions_rolesAggregateType<T>>

    /**
     * Group by Hspermissions_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hspermissions_rolesGroupByArgs} args - Group by arguments.
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
      T extends hspermissions_rolesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: hspermissions_rolesGroupByArgs['orderBy'] }
        : { orderBy?: hspermissions_rolesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, hspermissions_rolesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHspermissions_rolesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the hspermissions_roles model
   */
  readonly fields: hspermissions_rolesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for hspermissions_roles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__hspermissions_rolesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hspermissions<T extends hspermissionsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, hspermissionsDefaultArgs<ExtArgs>>): Prisma__hspermissionsClient<$Result.GetResult<Prisma.$hspermissionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    hsroles<T extends hsrolesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, hsrolesDefaultArgs<ExtArgs>>): Prisma__hsrolesClient<$Result.GetResult<Prisma.$hsrolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the hspermissions_roles model
   */
  interface hspermissions_rolesFieldRefs {
    readonly role_id: FieldRef<"hspermissions_roles", 'Int'>
    readonly permission_id: FieldRef<"hspermissions_roles", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * hspermissions_roles findUnique
   */
  export type hspermissions_rolesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hspermissions_roles
     */
    select?: hspermissions_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hspermissions_roles
     */
    omit?: hspermissions_rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hspermissions_rolesInclude<ExtArgs> | null
    /**
     * Filter, which hspermissions_roles to fetch.
     */
    where: hspermissions_rolesWhereUniqueInput
  }

  /**
   * hspermissions_roles findUniqueOrThrow
   */
  export type hspermissions_rolesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hspermissions_roles
     */
    select?: hspermissions_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hspermissions_roles
     */
    omit?: hspermissions_rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hspermissions_rolesInclude<ExtArgs> | null
    /**
     * Filter, which hspermissions_roles to fetch.
     */
    where: hspermissions_rolesWhereUniqueInput
  }

  /**
   * hspermissions_roles findFirst
   */
  export type hspermissions_rolesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hspermissions_roles
     */
    select?: hspermissions_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hspermissions_roles
     */
    omit?: hspermissions_rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hspermissions_rolesInclude<ExtArgs> | null
    /**
     * Filter, which hspermissions_roles to fetch.
     */
    where?: hspermissions_rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hspermissions_roles to fetch.
     */
    orderBy?: hspermissions_rolesOrderByWithRelationInput | hspermissions_rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hspermissions_roles.
     */
    cursor?: hspermissions_rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hspermissions_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hspermissions_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hspermissions_roles.
     */
    distinct?: Hspermissions_rolesScalarFieldEnum | Hspermissions_rolesScalarFieldEnum[]
  }

  /**
   * hspermissions_roles findFirstOrThrow
   */
  export type hspermissions_rolesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hspermissions_roles
     */
    select?: hspermissions_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hspermissions_roles
     */
    omit?: hspermissions_rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hspermissions_rolesInclude<ExtArgs> | null
    /**
     * Filter, which hspermissions_roles to fetch.
     */
    where?: hspermissions_rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hspermissions_roles to fetch.
     */
    orderBy?: hspermissions_rolesOrderByWithRelationInput | hspermissions_rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hspermissions_roles.
     */
    cursor?: hspermissions_rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hspermissions_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hspermissions_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hspermissions_roles.
     */
    distinct?: Hspermissions_rolesScalarFieldEnum | Hspermissions_rolesScalarFieldEnum[]
  }

  /**
   * hspermissions_roles findMany
   */
  export type hspermissions_rolesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hspermissions_roles
     */
    select?: hspermissions_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hspermissions_roles
     */
    omit?: hspermissions_rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hspermissions_rolesInclude<ExtArgs> | null
    /**
     * Filter, which hspermissions_roles to fetch.
     */
    where?: hspermissions_rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hspermissions_roles to fetch.
     */
    orderBy?: hspermissions_rolesOrderByWithRelationInput | hspermissions_rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing hspermissions_roles.
     */
    cursor?: hspermissions_rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hspermissions_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hspermissions_roles.
     */
    skip?: number
    distinct?: Hspermissions_rolesScalarFieldEnum | Hspermissions_rolesScalarFieldEnum[]
  }

  /**
   * hspermissions_roles create
   */
  export type hspermissions_rolesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hspermissions_roles
     */
    select?: hspermissions_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hspermissions_roles
     */
    omit?: hspermissions_rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hspermissions_rolesInclude<ExtArgs> | null
    /**
     * The data needed to create a hspermissions_roles.
     */
    data: XOR<hspermissions_rolesCreateInput, hspermissions_rolesUncheckedCreateInput>
  }

  /**
   * hspermissions_roles createMany
   */
  export type hspermissions_rolesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many hspermissions_roles.
     */
    data: hspermissions_rolesCreateManyInput | hspermissions_rolesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * hspermissions_roles createManyAndReturn
   */
  export type hspermissions_rolesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hspermissions_roles
     */
    select?: hspermissions_rolesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the hspermissions_roles
     */
    omit?: hspermissions_rolesOmit<ExtArgs> | null
    /**
     * The data used to create many hspermissions_roles.
     */
    data: hspermissions_rolesCreateManyInput | hspermissions_rolesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hspermissions_rolesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * hspermissions_roles update
   */
  export type hspermissions_rolesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hspermissions_roles
     */
    select?: hspermissions_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hspermissions_roles
     */
    omit?: hspermissions_rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hspermissions_rolesInclude<ExtArgs> | null
    /**
     * The data needed to update a hspermissions_roles.
     */
    data: XOR<hspermissions_rolesUpdateInput, hspermissions_rolesUncheckedUpdateInput>
    /**
     * Choose, which hspermissions_roles to update.
     */
    where: hspermissions_rolesWhereUniqueInput
  }

  /**
   * hspermissions_roles updateMany
   */
  export type hspermissions_rolesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update hspermissions_roles.
     */
    data: XOR<hspermissions_rolesUpdateManyMutationInput, hspermissions_rolesUncheckedUpdateManyInput>
    /**
     * Filter which hspermissions_roles to update
     */
    where?: hspermissions_rolesWhereInput
    /**
     * Limit how many hspermissions_roles to update.
     */
    limit?: number
  }

  /**
   * hspermissions_roles updateManyAndReturn
   */
  export type hspermissions_rolesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hspermissions_roles
     */
    select?: hspermissions_rolesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the hspermissions_roles
     */
    omit?: hspermissions_rolesOmit<ExtArgs> | null
    /**
     * The data used to update hspermissions_roles.
     */
    data: XOR<hspermissions_rolesUpdateManyMutationInput, hspermissions_rolesUncheckedUpdateManyInput>
    /**
     * Filter which hspermissions_roles to update
     */
    where?: hspermissions_rolesWhereInput
    /**
     * Limit how many hspermissions_roles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hspermissions_rolesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * hspermissions_roles upsert
   */
  export type hspermissions_rolesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hspermissions_roles
     */
    select?: hspermissions_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hspermissions_roles
     */
    omit?: hspermissions_rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hspermissions_rolesInclude<ExtArgs> | null
    /**
     * The filter to search for the hspermissions_roles to update in case it exists.
     */
    where: hspermissions_rolesWhereUniqueInput
    /**
     * In case the hspermissions_roles found by the `where` argument doesn't exist, create a new hspermissions_roles with this data.
     */
    create: XOR<hspermissions_rolesCreateInput, hspermissions_rolesUncheckedCreateInput>
    /**
     * In case the hspermissions_roles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<hspermissions_rolesUpdateInput, hspermissions_rolesUncheckedUpdateInput>
  }

  /**
   * hspermissions_roles delete
   */
  export type hspermissions_rolesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hspermissions_roles
     */
    select?: hspermissions_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hspermissions_roles
     */
    omit?: hspermissions_rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hspermissions_rolesInclude<ExtArgs> | null
    /**
     * Filter which hspermissions_roles to delete.
     */
    where: hspermissions_rolesWhereUniqueInput
  }

  /**
   * hspermissions_roles deleteMany
   */
  export type hspermissions_rolesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hspermissions_roles to delete
     */
    where?: hspermissions_rolesWhereInput
    /**
     * Limit how many hspermissions_roles to delete.
     */
    limit?: number
  }

  /**
   * hspermissions_roles without action
   */
  export type hspermissions_rolesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hspermissions_roles
     */
    select?: hspermissions_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hspermissions_roles
     */
    omit?: hspermissions_rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hspermissions_rolesInclude<ExtArgs> | null
  }


  /**
   * Model hsusers_permissions
   */

  export type AggregateHsusers_permissions = {
    _count: Hsusers_permissionsCountAggregateOutputType | null
    _avg: Hsusers_permissionsAvgAggregateOutputType | null
    _sum: Hsusers_permissionsSumAggregateOutputType | null
    _min: Hsusers_permissionsMinAggregateOutputType | null
    _max: Hsusers_permissionsMaxAggregateOutputType | null
  }

  export type Hsusers_permissionsAvgAggregateOutputType = {
    user_id: number | null
    permission_id: number | null
  }

  export type Hsusers_permissionsSumAggregateOutputType = {
    user_id: number | null
    permission_id: number | null
  }

  export type Hsusers_permissionsMinAggregateOutputType = {
    user_id: number | null
    permission_id: number | null
  }

  export type Hsusers_permissionsMaxAggregateOutputType = {
    user_id: number | null
    permission_id: number | null
  }

  export type Hsusers_permissionsCountAggregateOutputType = {
    user_id: number
    permission_id: number
    _all: number
  }


  export type Hsusers_permissionsAvgAggregateInputType = {
    user_id?: true
    permission_id?: true
  }

  export type Hsusers_permissionsSumAggregateInputType = {
    user_id?: true
    permission_id?: true
  }

  export type Hsusers_permissionsMinAggregateInputType = {
    user_id?: true
    permission_id?: true
  }

  export type Hsusers_permissionsMaxAggregateInputType = {
    user_id?: true
    permission_id?: true
  }

  export type Hsusers_permissionsCountAggregateInputType = {
    user_id?: true
    permission_id?: true
    _all?: true
  }

  export type Hsusers_permissionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hsusers_permissions to aggregate.
     */
    where?: hsusers_permissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hsusers_permissions to fetch.
     */
    orderBy?: hsusers_permissionsOrderByWithRelationInput | hsusers_permissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: hsusers_permissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hsusers_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hsusers_permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned hsusers_permissions
    **/
    _count?: true | Hsusers_permissionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Hsusers_permissionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Hsusers_permissionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Hsusers_permissionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Hsusers_permissionsMaxAggregateInputType
  }

  export type GetHsusers_permissionsAggregateType<T extends Hsusers_permissionsAggregateArgs> = {
        [P in keyof T & keyof AggregateHsusers_permissions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHsusers_permissions[P]>
      : GetScalarType<T[P], AggregateHsusers_permissions[P]>
  }




  export type hsusers_permissionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hsusers_permissionsWhereInput
    orderBy?: hsusers_permissionsOrderByWithAggregationInput | hsusers_permissionsOrderByWithAggregationInput[]
    by: Hsusers_permissionsScalarFieldEnum[] | Hsusers_permissionsScalarFieldEnum
    having?: hsusers_permissionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Hsusers_permissionsCountAggregateInputType | true
    _avg?: Hsusers_permissionsAvgAggregateInputType
    _sum?: Hsusers_permissionsSumAggregateInputType
    _min?: Hsusers_permissionsMinAggregateInputType
    _max?: Hsusers_permissionsMaxAggregateInputType
  }

  export type Hsusers_permissionsGroupByOutputType = {
    user_id: number
    permission_id: number
    _count: Hsusers_permissionsCountAggregateOutputType | null
    _avg: Hsusers_permissionsAvgAggregateOutputType | null
    _sum: Hsusers_permissionsSumAggregateOutputType | null
    _min: Hsusers_permissionsMinAggregateOutputType | null
    _max: Hsusers_permissionsMaxAggregateOutputType | null
  }

  type GetHsusers_permissionsGroupByPayload<T extends hsusers_permissionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Hsusers_permissionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Hsusers_permissionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Hsusers_permissionsGroupByOutputType[P]>
            : GetScalarType<T[P], Hsusers_permissionsGroupByOutputType[P]>
        }
      >
    >


  export type hsusers_permissionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    permission_id?: boolean
    hspermissions?: boolean | hspermissionsDefaultArgs<ExtArgs>
    hsemployees?: boolean | hsemployeesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hsusers_permissions"]>

  export type hsusers_permissionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    permission_id?: boolean
    hspermissions?: boolean | hspermissionsDefaultArgs<ExtArgs>
    hsemployees?: boolean | hsemployeesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hsusers_permissions"]>

  export type hsusers_permissionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    permission_id?: boolean
    hspermissions?: boolean | hspermissionsDefaultArgs<ExtArgs>
    hsemployees?: boolean | hsemployeesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hsusers_permissions"]>

  export type hsusers_permissionsSelectScalar = {
    user_id?: boolean
    permission_id?: boolean
  }

  export type hsusers_permissionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "permission_id", ExtArgs["result"]["hsusers_permissions"]>
  export type hsusers_permissionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hspermissions?: boolean | hspermissionsDefaultArgs<ExtArgs>
    hsemployees?: boolean | hsemployeesDefaultArgs<ExtArgs>
  }
  export type hsusers_permissionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hspermissions?: boolean | hspermissionsDefaultArgs<ExtArgs>
    hsemployees?: boolean | hsemployeesDefaultArgs<ExtArgs>
  }
  export type hsusers_permissionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hspermissions?: boolean | hspermissionsDefaultArgs<ExtArgs>
    hsemployees?: boolean | hsemployeesDefaultArgs<ExtArgs>
  }

  export type $hsusers_permissionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "hsusers_permissions"
    objects: {
      hspermissions: Prisma.$hspermissionsPayload<ExtArgs>
      hsemployees: Prisma.$hsemployeesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      permission_id: number
    }, ExtArgs["result"]["hsusers_permissions"]>
    composites: {}
  }

  type hsusers_permissionsGetPayload<S extends boolean | null | undefined | hsusers_permissionsDefaultArgs> = $Result.GetResult<Prisma.$hsusers_permissionsPayload, S>

  type hsusers_permissionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<hsusers_permissionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Hsusers_permissionsCountAggregateInputType | true
    }

  export interface hsusers_permissionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['hsusers_permissions'], meta: { name: 'hsusers_permissions' } }
    /**
     * Find zero or one Hsusers_permissions that matches the filter.
     * @param {hsusers_permissionsFindUniqueArgs} args - Arguments to find a Hsusers_permissions
     * @example
     * // Get one Hsusers_permissions
     * const hsusers_permissions = await prisma.hsusers_permissions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends hsusers_permissionsFindUniqueArgs>(args: SelectSubset<T, hsusers_permissionsFindUniqueArgs<ExtArgs>>): Prisma__hsusers_permissionsClient<$Result.GetResult<Prisma.$hsusers_permissionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hsusers_permissions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {hsusers_permissionsFindUniqueOrThrowArgs} args - Arguments to find a Hsusers_permissions
     * @example
     * // Get one Hsusers_permissions
     * const hsusers_permissions = await prisma.hsusers_permissions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends hsusers_permissionsFindUniqueOrThrowArgs>(args: SelectSubset<T, hsusers_permissionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__hsusers_permissionsClient<$Result.GetResult<Prisma.$hsusers_permissionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hsusers_permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hsusers_permissionsFindFirstArgs} args - Arguments to find a Hsusers_permissions
     * @example
     * // Get one Hsusers_permissions
     * const hsusers_permissions = await prisma.hsusers_permissions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends hsusers_permissionsFindFirstArgs>(args?: SelectSubset<T, hsusers_permissionsFindFirstArgs<ExtArgs>>): Prisma__hsusers_permissionsClient<$Result.GetResult<Prisma.$hsusers_permissionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hsusers_permissions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hsusers_permissionsFindFirstOrThrowArgs} args - Arguments to find a Hsusers_permissions
     * @example
     * // Get one Hsusers_permissions
     * const hsusers_permissions = await prisma.hsusers_permissions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends hsusers_permissionsFindFirstOrThrowArgs>(args?: SelectSubset<T, hsusers_permissionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__hsusers_permissionsClient<$Result.GetResult<Prisma.$hsusers_permissionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hsusers_permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hsusers_permissionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hsusers_permissions
     * const hsusers_permissions = await prisma.hsusers_permissions.findMany()
     * 
     * // Get first 10 Hsusers_permissions
     * const hsusers_permissions = await prisma.hsusers_permissions.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const hsusers_permissionsWithUser_idOnly = await prisma.hsusers_permissions.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends hsusers_permissionsFindManyArgs>(args?: SelectSubset<T, hsusers_permissionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hsusers_permissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hsusers_permissions.
     * @param {hsusers_permissionsCreateArgs} args - Arguments to create a Hsusers_permissions.
     * @example
     * // Create one Hsusers_permissions
     * const Hsusers_permissions = await prisma.hsusers_permissions.create({
     *   data: {
     *     // ... data to create a Hsusers_permissions
     *   }
     * })
     * 
     */
    create<T extends hsusers_permissionsCreateArgs>(args: SelectSubset<T, hsusers_permissionsCreateArgs<ExtArgs>>): Prisma__hsusers_permissionsClient<$Result.GetResult<Prisma.$hsusers_permissionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hsusers_permissions.
     * @param {hsusers_permissionsCreateManyArgs} args - Arguments to create many Hsusers_permissions.
     * @example
     * // Create many Hsusers_permissions
     * const hsusers_permissions = await prisma.hsusers_permissions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends hsusers_permissionsCreateManyArgs>(args?: SelectSubset<T, hsusers_permissionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Hsusers_permissions and returns the data saved in the database.
     * @param {hsusers_permissionsCreateManyAndReturnArgs} args - Arguments to create many Hsusers_permissions.
     * @example
     * // Create many Hsusers_permissions
     * const hsusers_permissions = await prisma.hsusers_permissions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Hsusers_permissions and only return the `user_id`
     * const hsusers_permissionsWithUser_idOnly = await prisma.hsusers_permissions.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends hsusers_permissionsCreateManyAndReturnArgs>(args?: SelectSubset<T, hsusers_permissionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hsusers_permissionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Hsusers_permissions.
     * @param {hsusers_permissionsDeleteArgs} args - Arguments to delete one Hsusers_permissions.
     * @example
     * // Delete one Hsusers_permissions
     * const Hsusers_permissions = await prisma.hsusers_permissions.delete({
     *   where: {
     *     // ... filter to delete one Hsusers_permissions
     *   }
     * })
     * 
     */
    delete<T extends hsusers_permissionsDeleteArgs>(args: SelectSubset<T, hsusers_permissionsDeleteArgs<ExtArgs>>): Prisma__hsusers_permissionsClient<$Result.GetResult<Prisma.$hsusers_permissionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hsusers_permissions.
     * @param {hsusers_permissionsUpdateArgs} args - Arguments to update one Hsusers_permissions.
     * @example
     * // Update one Hsusers_permissions
     * const hsusers_permissions = await prisma.hsusers_permissions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends hsusers_permissionsUpdateArgs>(args: SelectSubset<T, hsusers_permissionsUpdateArgs<ExtArgs>>): Prisma__hsusers_permissionsClient<$Result.GetResult<Prisma.$hsusers_permissionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hsusers_permissions.
     * @param {hsusers_permissionsDeleteManyArgs} args - Arguments to filter Hsusers_permissions to delete.
     * @example
     * // Delete a few Hsusers_permissions
     * const { count } = await prisma.hsusers_permissions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends hsusers_permissionsDeleteManyArgs>(args?: SelectSubset<T, hsusers_permissionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hsusers_permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hsusers_permissionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hsusers_permissions
     * const hsusers_permissions = await prisma.hsusers_permissions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends hsusers_permissionsUpdateManyArgs>(args: SelectSubset<T, hsusers_permissionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hsusers_permissions and returns the data updated in the database.
     * @param {hsusers_permissionsUpdateManyAndReturnArgs} args - Arguments to update many Hsusers_permissions.
     * @example
     * // Update many Hsusers_permissions
     * const hsusers_permissions = await prisma.hsusers_permissions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Hsusers_permissions and only return the `user_id`
     * const hsusers_permissionsWithUser_idOnly = await prisma.hsusers_permissions.updateManyAndReturn({
     *   select: { user_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends hsusers_permissionsUpdateManyAndReturnArgs>(args: SelectSubset<T, hsusers_permissionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hsusers_permissionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Hsusers_permissions.
     * @param {hsusers_permissionsUpsertArgs} args - Arguments to update or create a Hsusers_permissions.
     * @example
     * // Update or create a Hsusers_permissions
     * const hsusers_permissions = await prisma.hsusers_permissions.upsert({
     *   create: {
     *     // ... data to create a Hsusers_permissions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hsusers_permissions we want to update
     *   }
     * })
     */
    upsert<T extends hsusers_permissionsUpsertArgs>(args: SelectSubset<T, hsusers_permissionsUpsertArgs<ExtArgs>>): Prisma__hsusers_permissionsClient<$Result.GetResult<Prisma.$hsusers_permissionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Hsusers_permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hsusers_permissionsCountArgs} args - Arguments to filter Hsusers_permissions to count.
     * @example
     * // Count the number of Hsusers_permissions
     * const count = await prisma.hsusers_permissions.count({
     *   where: {
     *     // ... the filter for the Hsusers_permissions we want to count
     *   }
     * })
    **/
    count<T extends hsusers_permissionsCountArgs>(
      args?: Subset<T, hsusers_permissionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Hsusers_permissionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hsusers_permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Hsusers_permissionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Hsusers_permissionsAggregateArgs>(args: Subset<T, Hsusers_permissionsAggregateArgs>): Prisma.PrismaPromise<GetHsusers_permissionsAggregateType<T>>

    /**
     * Group by Hsusers_permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hsusers_permissionsGroupByArgs} args - Group by arguments.
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
      T extends hsusers_permissionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: hsusers_permissionsGroupByArgs['orderBy'] }
        : { orderBy?: hsusers_permissionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, hsusers_permissionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHsusers_permissionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the hsusers_permissions model
   */
  readonly fields: hsusers_permissionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for hsusers_permissions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__hsusers_permissionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hspermissions<T extends hspermissionsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, hspermissionsDefaultArgs<ExtArgs>>): Prisma__hspermissionsClient<$Result.GetResult<Prisma.$hspermissionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    hsemployees<T extends hsemployeesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, hsemployeesDefaultArgs<ExtArgs>>): Prisma__hsemployeesClient<$Result.GetResult<Prisma.$hsemployeesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the hsusers_permissions model
   */
  interface hsusers_permissionsFieldRefs {
    readonly user_id: FieldRef<"hsusers_permissions", 'Int'>
    readonly permission_id: FieldRef<"hsusers_permissions", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * hsusers_permissions findUnique
   */
  export type hsusers_permissionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsusers_permissions
     */
    select?: hsusers_permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsusers_permissions
     */
    omit?: hsusers_permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsusers_permissionsInclude<ExtArgs> | null
    /**
     * Filter, which hsusers_permissions to fetch.
     */
    where: hsusers_permissionsWhereUniqueInput
  }

  /**
   * hsusers_permissions findUniqueOrThrow
   */
  export type hsusers_permissionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsusers_permissions
     */
    select?: hsusers_permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsusers_permissions
     */
    omit?: hsusers_permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsusers_permissionsInclude<ExtArgs> | null
    /**
     * Filter, which hsusers_permissions to fetch.
     */
    where: hsusers_permissionsWhereUniqueInput
  }

  /**
   * hsusers_permissions findFirst
   */
  export type hsusers_permissionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsusers_permissions
     */
    select?: hsusers_permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsusers_permissions
     */
    omit?: hsusers_permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsusers_permissionsInclude<ExtArgs> | null
    /**
     * Filter, which hsusers_permissions to fetch.
     */
    where?: hsusers_permissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hsusers_permissions to fetch.
     */
    orderBy?: hsusers_permissionsOrderByWithRelationInput | hsusers_permissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hsusers_permissions.
     */
    cursor?: hsusers_permissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hsusers_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hsusers_permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hsusers_permissions.
     */
    distinct?: Hsusers_permissionsScalarFieldEnum | Hsusers_permissionsScalarFieldEnum[]
  }

  /**
   * hsusers_permissions findFirstOrThrow
   */
  export type hsusers_permissionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsusers_permissions
     */
    select?: hsusers_permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsusers_permissions
     */
    omit?: hsusers_permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsusers_permissionsInclude<ExtArgs> | null
    /**
     * Filter, which hsusers_permissions to fetch.
     */
    where?: hsusers_permissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hsusers_permissions to fetch.
     */
    orderBy?: hsusers_permissionsOrderByWithRelationInput | hsusers_permissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hsusers_permissions.
     */
    cursor?: hsusers_permissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hsusers_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hsusers_permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hsusers_permissions.
     */
    distinct?: Hsusers_permissionsScalarFieldEnum | Hsusers_permissionsScalarFieldEnum[]
  }

  /**
   * hsusers_permissions findMany
   */
  export type hsusers_permissionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsusers_permissions
     */
    select?: hsusers_permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsusers_permissions
     */
    omit?: hsusers_permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsusers_permissionsInclude<ExtArgs> | null
    /**
     * Filter, which hsusers_permissions to fetch.
     */
    where?: hsusers_permissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hsusers_permissions to fetch.
     */
    orderBy?: hsusers_permissionsOrderByWithRelationInput | hsusers_permissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing hsusers_permissions.
     */
    cursor?: hsusers_permissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hsusers_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hsusers_permissions.
     */
    skip?: number
    distinct?: Hsusers_permissionsScalarFieldEnum | Hsusers_permissionsScalarFieldEnum[]
  }

  /**
   * hsusers_permissions create
   */
  export type hsusers_permissionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsusers_permissions
     */
    select?: hsusers_permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsusers_permissions
     */
    omit?: hsusers_permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsusers_permissionsInclude<ExtArgs> | null
    /**
     * The data needed to create a hsusers_permissions.
     */
    data: XOR<hsusers_permissionsCreateInput, hsusers_permissionsUncheckedCreateInput>
  }

  /**
   * hsusers_permissions createMany
   */
  export type hsusers_permissionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many hsusers_permissions.
     */
    data: hsusers_permissionsCreateManyInput | hsusers_permissionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * hsusers_permissions createManyAndReturn
   */
  export type hsusers_permissionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsusers_permissions
     */
    select?: hsusers_permissionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the hsusers_permissions
     */
    omit?: hsusers_permissionsOmit<ExtArgs> | null
    /**
     * The data used to create many hsusers_permissions.
     */
    data: hsusers_permissionsCreateManyInput | hsusers_permissionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsusers_permissionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * hsusers_permissions update
   */
  export type hsusers_permissionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsusers_permissions
     */
    select?: hsusers_permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsusers_permissions
     */
    omit?: hsusers_permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsusers_permissionsInclude<ExtArgs> | null
    /**
     * The data needed to update a hsusers_permissions.
     */
    data: XOR<hsusers_permissionsUpdateInput, hsusers_permissionsUncheckedUpdateInput>
    /**
     * Choose, which hsusers_permissions to update.
     */
    where: hsusers_permissionsWhereUniqueInput
  }

  /**
   * hsusers_permissions updateMany
   */
  export type hsusers_permissionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update hsusers_permissions.
     */
    data: XOR<hsusers_permissionsUpdateManyMutationInput, hsusers_permissionsUncheckedUpdateManyInput>
    /**
     * Filter which hsusers_permissions to update
     */
    where?: hsusers_permissionsWhereInput
    /**
     * Limit how many hsusers_permissions to update.
     */
    limit?: number
  }

  /**
   * hsusers_permissions updateManyAndReturn
   */
  export type hsusers_permissionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsusers_permissions
     */
    select?: hsusers_permissionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the hsusers_permissions
     */
    omit?: hsusers_permissionsOmit<ExtArgs> | null
    /**
     * The data used to update hsusers_permissions.
     */
    data: XOR<hsusers_permissionsUpdateManyMutationInput, hsusers_permissionsUncheckedUpdateManyInput>
    /**
     * Filter which hsusers_permissions to update
     */
    where?: hsusers_permissionsWhereInput
    /**
     * Limit how many hsusers_permissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsusers_permissionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * hsusers_permissions upsert
   */
  export type hsusers_permissionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsusers_permissions
     */
    select?: hsusers_permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsusers_permissions
     */
    omit?: hsusers_permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsusers_permissionsInclude<ExtArgs> | null
    /**
     * The filter to search for the hsusers_permissions to update in case it exists.
     */
    where: hsusers_permissionsWhereUniqueInput
    /**
     * In case the hsusers_permissions found by the `where` argument doesn't exist, create a new hsusers_permissions with this data.
     */
    create: XOR<hsusers_permissionsCreateInput, hsusers_permissionsUncheckedCreateInput>
    /**
     * In case the hsusers_permissions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<hsusers_permissionsUpdateInput, hsusers_permissionsUncheckedUpdateInput>
  }

  /**
   * hsusers_permissions delete
   */
  export type hsusers_permissionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsusers_permissions
     */
    select?: hsusers_permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsusers_permissions
     */
    omit?: hsusers_permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsusers_permissionsInclude<ExtArgs> | null
    /**
     * Filter which hsusers_permissions to delete.
     */
    where: hsusers_permissionsWhereUniqueInput
  }

  /**
   * hsusers_permissions deleteMany
   */
  export type hsusers_permissionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hsusers_permissions to delete
     */
    where?: hsusers_permissionsWhereInput
    /**
     * Limit how many hsusers_permissions to delete.
     */
    limit?: number
  }

  /**
   * hsusers_permissions without action
   */
  export type hsusers_permissionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsusers_permissions
     */
    select?: hsusers_permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsusers_permissions
     */
    omit?: hsusers_permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsusers_permissionsInclude<ExtArgs> | null
  }


  /**
   * Model hsusers_roles
   */

  export type AggregateHsusers_roles = {
    _count: Hsusers_rolesCountAggregateOutputType | null
    _avg: Hsusers_rolesAvgAggregateOutputType | null
    _sum: Hsusers_rolesSumAggregateOutputType | null
    _min: Hsusers_rolesMinAggregateOutputType | null
    _max: Hsusers_rolesMaxAggregateOutputType | null
  }

  export type Hsusers_rolesAvgAggregateOutputType = {
    user_id: number | null
    role_id: number | null
  }

  export type Hsusers_rolesSumAggregateOutputType = {
    user_id: number | null
    role_id: number | null
  }

  export type Hsusers_rolesMinAggregateOutputType = {
    user_id: number | null
    role_id: number | null
  }

  export type Hsusers_rolesMaxAggregateOutputType = {
    user_id: number | null
    role_id: number | null
  }

  export type Hsusers_rolesCountAggregateOutputType = {
    user_id: number
    role_id: number
    _all: number
  }


  export type Hsusers_rolesAvgAggregateInputType = {
    user_id?: true
    role_id?: true
  }

  export type Hsusers_rolesSumAggregateInputType = {
    user_id?: true
    role_id?: true
  }

  export type Hsusers_rolesMinAggregateInputType = {
    user_id?: true
    role_id?: true
  }

  export type Hsusers_rolesMaxAggregateInputType = {
    user_id?: true
    role_id?: true
  }

  export type Hsusers_rolesCountAggregateInputType = {
    user_id?: true
    role_id?: true
    _all?: true
  }

  export type Hsusers_rolesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hsusers_roles to aggregate.
     */
    where?: hsusers_rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hsusers_roles to fetch.
     */
    orderBy?: hsusers_rolesOrderByWithRelationInput | hsusers_rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: hsusers_rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hsusers_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hsusers_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned hsusers_roles
    **/
    _count?: true | Hsusers_rolesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Hsusers_rolesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Hsusers_rolesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Hsusers_rolesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Hsusers_rolesMaxAggregateInputType
  }

  export type GetHsusers_rolesAggregateType<T extends Hsusers_rolesAggregateArgs> = {
        [P in keyof T & keyof AggregateHsusers_roles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHsusers_roles[P]>
      : GetScalarType<T[P], AggregateHsusers_roles[P]>
  }




  export type hsusers_rolesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hsusers_rolesWhereInput
    orderBy?: hsusers_rolesOrderByWithAggregationInput | hsusers_rolesOrderByWithAggregationInput[]
    by: Hsusers_rolesScalarFieldEnum[] | Hsusers_rolesScalarFieldEnum
    having?: hsusers_rolesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Hsusers_rolesCountAggregateInputType | true
    _avg?: Hsusers_rolesAvgAggregateInputType
    _sum?: Hsusers_rolesSumAggregateInputType
    _min?: Hsusers_rolesMinAggregateInputType
    _max?: Hsusers_rolesMaxAggregateInputType
  }

  export type Hsusers_rolesGroupByOutputType = {
    user_id: number
    role_id: number
    _count: Hsusers_rolesCountAggregateOutputType | null
    _avg: Hsusers_rolesAvgAggregateOutputType | null
    _sum: Hsusers_rolesSumAggregateOutputType | null
    _min: Hsusers_rolesMinAggregateOutputType | null
    _max: Hsusers_rolesMaxAggregateOutputType | null
  }

  type GetHsusers_rolesGroupByPayload<T extends hsusers_rolesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Hsusers_rolesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Hsusers_rolesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Hsusers_rolesGroupByOutputType[P]>
            : GetScalarType<T[P], Hsusers_rolesGroupByOutputType[P]>
        }
      >
    >


  export type hsusers_rolesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    role_id?: boolean
    hsroles?: boolean | hsrolesDefaultArgs<ExtArgs>
    heemployees?: boolean | hsemployeesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hsusers_roles"]>

  export type hsusers_rolesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    role_id?: boolean
    hsroles?: boolean | hsrolesDefaultArgs<ExtArgs>
    heemployees?: boolean | hsemployeesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hsusers_roles"]>

  export type hsusers_rolesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    role_id?: boolean
    hsroles?: boolean | hsrolesDefaultArgs<ExtArgs>
    heemployees?: boolean | hsemployeesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hsusers_roles"]>

  export type hsusers_rolesSelectScalar = {
    user_id?: boolean
    role_id?: boolean
  }

  export type hsusers_rolesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "role_id", ExtArgs["result"]["hsusers_roles"]>
  export type hsusers_rolesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hsroles?: boolean | hsrolesDefaultArgs<ExtArgs>
    heemployees?: boolean | hsemployeesDefaultArgs<ExtArgs>
  }
  export type hsusers_rolesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hsroles?: boolean | hsrolesDefaultArgs<ExtArgs>
    heemployees?: boolean | hsemployeesDefaultArgs<ExtArgs>
  }
  export type hsusers_rolesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hsroles?: boolean | hsrolesDefaultArgs<ExtArgs>
    heemployees?: boolean | hsemployeesDefaultArgs<ExtArgs>
  }

  export type $hsusers_rolesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "hsusers_roles"
    objects: {
      hsroles: Prisma.$hsrolesPayload<ExtArgs>
      heemployees: Prisma.$hsemployeesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      role_id: number
    }, ExtArgs["result"]["hsusers_roles"]>
    composites: {}
  }

  type hsusers_rolesGetPayload<S extends boolean | null | undefined | hsusers_rolesDefaultArgs> = $Result.GetResult<Prisma.$hsusers_rolesPayload, S>

  type hsusers_rolesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<hsusers_rolesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Hsusers_rolesCountAggregateInputType | true
    }

  export interface hsusers_rolesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['hsusers_roles'], meta: { name: 'hsusers_roles' } }
    /**
     * Find zero or one Hsusers_roles that matches the filter.
     * @param {hsusers_rolesFindUniqueArgs} args - Arguments to find a Hsusers_roles
     * @example
     * // Get one Hsusers_roles
     * const hsusers_roles = await prisma.hsusers_roles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends hsusers_rolesFindUniqueArgs>(args: SelectSubset<T, hsusers_rolesFindUniqueArgs<ExtArgs>>): Prisma__hsusers_rolesClient<$Result.GetResult<Prisma.$hsusers_rolesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hsusers_roles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {hsusers_rolesFindUniqueOrThrowArgs} args - Arguments to find a Hsusers_roles
     * @example
     * // Get one Hsusers_roles
     * const hsusers_roles = await prisma.hsusers_roles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends hsusers_rolesFindUniqueOrThrowArgs>(args: SelectSubset<T, hsusers_rolesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__hsusers_rolesClient<$Result.GetResult<Prisma.$hsusers_rolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hsusers_roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hsusers_rolesFindFirstArgs} args - Arguments to find a Hsusers_roles
     * @example
     * // Get one Hsusers_roles
     * const hsusers_roles = await prisma.hsusers_roles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends hsusers_rolesFindFirstArgs>(args?: SelectSubset<T, hsusers_rolesFindFirstArgs<ExtArgs>>): Prisma__hsusers_rolesClient<$Result.GetResult<Prisma.$hsusers_rolesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hsusers_roles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hsusers_rolesFindFirstOrThrowArgs} args - Arguments to find a Hsusers_roles
     * @example
     * // Get one Hsusers_roles
     * const hsusers_roles = await prisma.hsusers_roles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends hsusers_rolesFindFirstOrThrowArgs>(args?: SelectSubset<T, hsusers_rolesFindFirstOrThrowArgs<ExtArgs>>): Prisma__hsusers_rolesClient<$Result.GetResult<Prisma.$hsusers_rolesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hsusers_roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hsusers_rolesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hsusers_roles
     * const hsusers_roles = await prisma.hsusers_roles.findMany()
     * 
     * // Get first 10 Hsusers_roles
     * const hsusers_roles = await prisma.hsusers_roles.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const hsusers_rolesWithUser_idOnly = await prisma.hsusers_roles.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends hsusers_rolesFindManyArgs>(args?: SelectSubset<T, hsusers_rolesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hsusers_rolesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hsusers_roles.
     * @param {hsusers_rolesCreateArgs} args - Arguments to create a Hsusers_roles.
     * @example
     * // Create one Hsusers_roles
     * const Hsusers_roles = await prisma.hsusers_roles.create({
     *   data: {
     *     // ... data to create a Hsusers_roles
     *   }
     * })
     * 
     */
    create<T extends hsusers_rolesCreateArgs>(args: SelectSubset<T, hsusers_rolesCreateArgs<ExtArgs>>): Prisma__hsusers_rolesClient<$Result.GetResult<Prisma.$hsusers_rolesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hsusers_roles.
     * @param {hsusers_rolesCreateManyArgs} args - Arguments to create many Hsusers_roles.
     * @example
     * // Create many Hsusers_roles
     * const hsusers_roles = await prisma.hsusers_roles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends hsusers_rolesCreateManyArgs>(args?: SelectSubset<T, hsusers_rolesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Hsusers_roles and returns the data saved in the database.
     * @param {hsusers_rolesCreateManyAndReturnArgs} args - Arguments to create many Hsusers_roles.
     * @example
     * // Create many Hsusers_roles
     * const hsusers_roles = await prisma.hsusers_roles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Hsusers_roles and only return the `user_id`
     * const hsusers_rolesWithUser_idOnly = await prisma.hsusers_roles.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends hsusers_rolesCreateManyAndReturnArgs>(args?: SelectSubset<T, hsusers_rolesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hsusers_rolesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Hsusers_roles.
     * @param {hsusers_rolesDeleteArgs} args - Arguments to delete one Hsusers_roles.
     * @example
     * // Delete one Hsusers_roles
     * const Hsusers_roles = await prisma.hsusers_roles.delete({
     *   where: {
     *     // ... filter to delete one Hsusers_roles
     *   }
     * })
     * 
     */
    delete<T extends hsusers_rolesDeleteArgs>(args: SelectSubset<T, hsusers_rolesDeleteArgs<ExtArgs>>): Prisma__hsusers_rolesClient<$Result.GetResult<Prisma.$hsusers_rolesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hsusers_roles.
     * @param {hsusers_rolesUpdateArgs} args - Arguments to update one Hsusers_roles.
     * @example
     * // Update one Hsusers_roles
     * const hsusers_roles = await prisma.hsusers_roles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends hsusers_rolesUpdateArgs>(args: SelectSubset<T, hsusers_rolesUpdateArgs<ExtArgs>>): Prisma__hsusers_rolesClient<$Result.GetResult<Prisma.$hsusers_rolesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hsusers_roles.
     * @param {hsusers_rolesDeleteManyArgs} args - Arguments to filter Hsusers_roles to delete.
     * @example
     * // Delete a few Hsusers_roles
     * const { count } = await prisma.hsusers_roles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends hsusers_rolesDeleteManyArgs>(args?: SelectSubset<T, hsusers_rolesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hsusers_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hsusers_rolesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hsusers_roles
     * const hsusers_roles = await prisma.hsusers_roles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends hsusers_rolesUpdateManyArgs>(args: SelectSubset<T, hsusers_rolesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hsusers_roles and returns the data updated in the database.
     * @param {hsusers_rolesUpdateManyAndReturnArgs} args - Arguments to update many Hsusers_roles.
     * @example
     * // Update many Hsusers_roles
     * const hsusers_roles = await prisma.hsusers_roles.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Hsusers_roles and only return the `user_id`
     * const hsusers_rolesWithUser_idOnly = await prisma.hsusers_roles.updateManyAndReturn({
     *   select: { user_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends hsusers_rolesUpdateManyAndReturnArgs>(args: SelectSubset<T, hsusers_rolesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hsusers_rolesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Hsusers_roles.
     * @param {hsusers_rolesUpsertArgs} args - Arguments to update or create a Hsusers_roles.
     * @example
     * // Update or create a Hsusers_roles
     * const hsusers_roles = await prisma.hsusers_roles.upsert({
     *   create: {
     *     // ... data to create a Hsusers_roles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hsusers_roles we want to update
     *   }
     * })
     */
    upsert<T extends hsusers_rolesUpsertArgs>(args: SelectSubset<T, hsusers_rolesUpsertArgs<ExtArgs>>): Prisma__hsusers_rolesClient<$Result.GetResult<Prisma.$hsusers_rolesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Hsusers_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hsusers_rolesCountArgs} args - Arguments to filter Hsusers_roles to count.
     * @example
     * // Count the number of Hsusers_roles
     * const count = await prisma.hsusers_roles.count({
     *   where: {
     *     // ... the filter for the Hsusers_roles we want to count
     *   }
     * })
    **/
    count<T extends hsusers_rolesCountArgs>(
      args?: Subset<T, hsusers_rolesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Hsusers_rolesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hsusers_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Hsusers_rolesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Hsusers_rolesAggregateArgs>(args: Subset<T, Hsusers_rolesAggregateArgs>): Prisma.PrismaPromise<GetHsusers_rolesAggregateType<T>>

    /**
     * Group by Hsusers_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hsusers_rolesGroupByArgs} args - Group by arguments.
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
      T extends hsusers_rolesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: hsusers_rolesGroupByArgs['orderBy'] }
        : { orderBy?: hsusers_rolesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, hsusers_rolesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHsusers_rolesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the hsusers_roles model
   */
  readonly fields: hsusers_rolesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for hsusers_roles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__hsusers_rolesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hsroles<T extends hsrolesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, hsrolesDefaultArgs<ExtArgs>>): Prisma__hsrolesClient<$Result.GetResult<Prisma.$hsrolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    heemployees<T extends hsemployeesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, hsemployeesDefaultArgs<ExtArgs>>): Prisma__hsemployeesClient<$Result.GetResult<Prisma.$hsemployeesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the hsusers_roles model
   */
  interface hsusers_rolesFieldRefs {
    readonly user_id: FieldRef<"hsusers_roles", 'Int'>
    readonly role_id: FieldRef<"hsusers_roles", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * hsusers_roles findUnique
   */
  export type hsusers_rolesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsusers_roles
     */
    select?: hsusers_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsusers_roles
     */
    omit?: hsusers_rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsusers_rolesInclude<ExtArgs> | null
    /**
     * Filter, which hsusers_roles to fetch.
     */
    where: hsusers_rolesWhereUniqueInput
  }

  /**
   * hsusers_roles findUniqueOrThrow
   */
  export type hsusers_rolesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsusers_roles
     */
    select?: hsusers_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsusers_roles
     */
    omit?: hsusers_rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsusers_rolesInclude<ExtArgs> | null
    /**
     * Filter, which hsusers_roles to fetch.
     */
    where: hsusers_rolesWhereUniqueInput
  }

  /**
   * hsusers_roles findFirst
   */
  export type hsusers_rolesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsusers_roles
     */
    select?: hsusers_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsusers_roles
     */
    omit?: hsusers_rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsusers_rolesInclude<ExtArgs> | null
    /**
     * Filter, which hsusers_roles to fetch.
     */
    where?: hsusers_rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hsusers_roles to fetch.
     */
    orderBy?: hsusers_rolesOrderByWithRelationInput | hsusers_rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hsusers_roles.
     */
    cursor?: hsusers_rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hsusers_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hsusers_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hsusers_roles.
     */
    distinct?: Hsusers_rolesScalarFieldEnum | Hsusers_rolesScalarFieldEnum[]
  }

  /**
   * hsusers_roles findFirstOrThrow
   */
  export type hsusers_rolesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsusers_roles
     */
    select?: hsusers_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsusers_roles
     */
    omit?: hsusers_rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsusers_rolesInclude<ExtArgs> | null
    /**
     * Filter, which hsusers_roles to fetch.
     */
    where?: hsusers_rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hsusers_roles to fetch.
     */
    orderBy?: hsusers_rolesOrderByWithRelationInput | hsusers_rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hsusers_roles.
     */
    cursor?: hsusers_rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hsusers_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hsusers_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hsusers_roles.
     */
    distinct?: Hsusers_rolesScalarFieldEnum | Hsusers_rolesScalarFieldEnum[]
  }

  /**
   * hsusers_roles findMany
   */
  export type hsusers_rolesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsusers_roles
     */
    select?: hsusers_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsusers_roles
     */
    omit?: hsusers_rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsusers_rolesInclude<ExtArgs> | null
    /**
     * Filter, which hsusers_roles to fetch.
     */
    where?: hsusers_rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hsusers_roles to fetch.
     */
    orderBy?: hsusers_rolesOrderByWithRelationInput | hsusers_rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing hsusers_roles.
     */
    cursor?: hsusers_rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hsusers_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hsusers_roles.
     */
    skip?: number
    distinct?: Hsusers_rolesScalarFieldEnum | Hsusers_rolesScalarFieldEnum[]
  }

  /**
   * hsusers_roles create
   */
  export type hsusers_rolesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsusers_roles
     */
    select?: hsusers_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsusers_roles
     */
    omit?: hsusers_rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsusers_rolesInclude<ExtArgs> | null
    /**
     * The data needed to create a hsusers_roles.
     */
    data: XOR<hsusers_rolesCreateInput, hsusers_rolesUncheckedCreateInput>
  }

  /**
   * hsusers_roles createMany
   */
  export type hsusers_rolesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many hsusers_roles.
     */
    data: hsusers_rolesCreateManyInput | hsusers_rolesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * hsusers_roles createManyAndReturn
   */
  export type hsusers_rolesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsusers_roles
     */
    select?: hsusers_rolesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the hsusers_roles
     */
    omit?: hsusers_rolesOmit<ExtArgs> | null
    /**
     * The data used to create many hsusers_roles.
     */
    data: hsusers_rolesCreateManyInput | hsusers_rolesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsusers_rolesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * hsusers_roles update
   */
  export type hsusers_rolesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsusers_roles
     */
    select?: hsusers_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsusers_roles
     */
    omit?: hsusers_rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsusers_rolesInclude<ExtArgs> | null
    /**
     * The data needed to update a hsusers_roles.
     */
    data: XOR<hsusers_rolesUpdateInput, hsusers_rolesUncheckedUpdateInput>
    /**
     * Choose, which hsusers_roles to update.
     */
    where: hsusers_rolesWhereUniqueInput
  }

  /**
   * hsusers_roles updateMany
   */
  export type hsusers_rolesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update hsusers_roles.
     */
    data: XOR<hsusers_rolesUpdateManyMutationInput, hsusers_rolesUncheckedUpdateManyInput>
    /**
     * Filter which hsusers_roles to update
     */
    where?: hsusers_rolesWhereInput
    /**
     * Limit how many hsusers_roles to update.
     */
    limit?: number
  }

  /**
   * hsusers_roles updateManyAndReturn
   */
  export type hsusers_rolesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsusers_roles
     */
    select?: hsusers_rolesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the hsusers_roles
     */
    omit?: hsusers_rolesOmit<ExtArgs> | null
    /**
     * The data used to update hsusers_roles.
     */
    data: XOR<hsusers_rolesUpdateManyMutationInput, hsusers_rolesUncheckedUpdateManyInput>
    /**
     * Filter which hsusers_roles to update
     */
    where?: hsusers_rolesWhereInput
    /**
     * Limit how many hsusers_roles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsusers_rolesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * hsusers_roles upsert
   */
  export type hsusers_rolesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsusers_roles
     */
    select?: hsusers_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsusers_roles
     */
    omit?: hsusers_rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsusers_rolesInclude<ExtArgs> | null
    /**
     * The filter to search for the hsusers_roles to update in case it exists.
     */
    where: hsusers_rolesWhereUniqueInput
    /**
     * In case the hsusers_roles found by the `where` argument doesn't exist, create a new hsusers_roles with this data.
     */
    create: XOR<hsusers_rolesCreateInput, hsusers_rolesUncheckedCreateInput>
    /**
     * In case the hsusers_roles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<hsusers_rolesUpdateInput, hsusers_rolesUncheckedUpdateInput>
  }

  /**
   * hsusers_roles delete
   */
  export type hsusers_rolesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsusers_roles
     */
    select?: hsusers_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsusers_roles
     */
    omit?: hsusers_rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsusers_rolesInclude<ExtArgs> | null
    /**
     * Filter which hsusers_roles to delete.
     */
    where: hsusers_rolesWhereUniqueInput
  }

  /**
   * hsusers_roles deleteMany
   */
  export type hsusers_rolesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hsusers_roles to delete
     */
    where?: hsusers_rolesWhereInput
    /**
     * Limit how many hsusers_roles to delete.
     */
    limit?: number
  }

  /**
   * hsusers_roles without action
   */
  export type hsusers_rolesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsusers_roles
     */
    select?: hsusers_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsusers_roles
     */
    omit?: hsusers_rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsusers_rolesInclude<ExtArgs> | null
  }


  /**
   * Model hsbranches
   */

  export type AggregateHsbranches = {
    _count: HsbranchesCountAggregateOutputType | null
    _avg: HsbranchesAvgAggregateOutputType | null
    _sum: HsbranchesSumAggregateOutputType | null
    _min: HsbranchesMinAggregateOutputType | null
    _max: HsbranchesMaxAggregateOutputType | null
  }

  export type HsbranchesAvgAggregateOutputType = {
    id: number | null
  }

  export type HsbranchesSumAggregateOutputType = {
    id: number | null
  }

  export type HsbranchesMinAggregateOutputType = {
    id: number | null
    description: string | null
  }

  export type HsbranchesMaxAggregateOutputType = {
    id: number | null
    description: string | null
  }

  export type HsbranchesCountAggregateOutputType = {
    id: number
    description: number
    _all: number
  }


  export type HsbranchesAvgAggregateInputType = {
    id?: true
  }

  export type HsbranchesSumAggregateInputType = {
    id?: true
  }

  export type HsbranchesMinAggregateInputType = {
    id?: true
    description?: true
  }

  export type HsbranchesMaxAggregateInputType = {
    id?: true
    description?: true
  }

  export type HsbranchesCountAggregateInputType = {
    id?: true
    description?: true
    _all?: true
  }

  export type HsbranchesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hsbranches to aggregate.
     */
    where?: hsbranchesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hsbranches to fetch.
     */
    orderBy?: hsbranchesOrderByWithRelationInput | hsbranchesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: hsbranchesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hsbranches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hsbranches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned hsbranches
    **/
    _count?: true | HsbranchesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HsbranchesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HsbranchesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HsbranchesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HsbranchesMaxAggregateInputType
  }

  export type GetHsbranchesAggregateType<T extends HsbranchesAggregateArgs> = {
        [P in keyof T & keyof AggregateHsbranches]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHsbranches[P]>
      : GetScalarType<T[P], AggregateHsbranches[P]>
  }




  export type hsbranchesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hsbranchesWhereInput
    orderBy?: hsbranchesOrderByWithAggregationInput | hsbranchesOrderByWithAggregationInput[]
    by: HsbranchesScalarFieldEnum[] | HsbranchesScalarFieldEnum
    having?: hsbranchesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HsbranchesCountAggregateInputType | true
    _avg?: HsbranchesAvgAggregateInputType
    _sum?: HsbranchesSumAggregateInputType
    _min?: HsbranchesMinAggregateInputType
    _max?: HsbranchesMaxAggregateInputType
  }

  export type HsbranchesGroupByOutputType = {
    id: number
    description: string
    _count: HsbranchesCountAggregateOutputType | null
    _avg: HsbranchesAvgAggregateOutputType | null
    _sum: HsbranchesSumAggregateOutputType | null
    _min: HsbranchesMinAggregateOutputType | null
    _max: HsbranchesMaxAggregateOutputType | null
  }

  type GetHsbranchesGroupByPayload<T extends hsbranchesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HsbranchesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HsbranchesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HsbranchesGroupByOutputType[P]>
            : GetScalarType<T[P], HsbranchesGroupByOutputType[P]>
        }
      >
    >


  export type hsbranchesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    hsemployees?: boolean | hsbranches$hsemployeesArgs<ExtArgs>
    hsvalidities?: boolean | hsbranches$hsvaliditiesArgs<ExtArgs>
    hsvalidity_requests?: boolean | hsbranches$hsvalidity_requestsArgs<ExtArgs>
    _count?: boolean | HsbranchesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hsbranches"]>

  export type hsbranchesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
  }, ExtArgs["result"]["hsbranches"]>

  export type hsbranchesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
  }, ExtArgs["result"]["hsbranches"]>

  export type hsbranchesSelectScalar = {
    id?: boolean
    description?: boolean
  }

  export type hsbranchesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "description", ExtArgs["result"]["hsbranches"]>
  export type hsbranchesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hsemployees?: boolean | hsbranches$hsemployeesArgs<ExtArgs>
    hsvalidities?: boolean | hsbranches$hsvaliditiesArgs<ExtArgs>
    hsvalidity_requests?: boolean | hsbranches$hsvalidity_requestsArgs<ExtArgs>
    _count?: boolean | HsbranchesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type hsbranchesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type hsbranchesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $hsbranchesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "hsbranches"
    objects: {
      hsemployees: Prisma.$hsemployeesPayload<ExtArgs>[]
      hsvalidities: Prisma.$hsvaliditiesPayload<ExtArgs>[]
      hsvalidity_requests: Prisma.$hsvalidity_requestsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      description: string
    }, ExtArgs["result"]["hsbranches"]>
    composites: {}
  }

  type hsbranchesGetPayload<S extends boolean | null | undefined | hsbranchesDefaultArgs> = $Result.GetResult<Prisma.$hsbranchesPayload, S>

  type hsbranchesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<hsbranchesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HsbranchesCountAggregateInputType | true
    }

  export interface hsbranchesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['hsbranches'], meta: { name: 'hsbranches' } }
    /**
     * Find zero or one Hsbranches that matches the filter.
     * @param {hsbranchesFindUniqueArgs} args - Arguments to find a Hsbranches
     * @example
     * // Get one Hsbranches
     * const hsbranches = await prisma.hsbranches.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends hsbranchesFindUniqueArgs>(args: SelectSubset<T, hsbranchesFindUniqueArgs<ExtArgs>>): Prisma__hsbranchesClient<$Result.GetResult<Prisma.$hsbranchesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hsbranches that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {hsbranchesFindUniqueOrThrowArgs} args - Arguments to find a Hsbranches
     * @example
     * // Get one Hsbranches
     * const hsbranches = await prisma.hsbranches.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends hsbranchesFindUniqueOrThrowArgs>(args: SelectSubset<T, hsbranchesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__hsbranchesClient<$Result.GetResult<Prisma.$hsbranchesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hsbranches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hsbranchesFindFirstArgs} args - Arguments to find a Hsbranches
     * @example
     * // Get one Hsbranches
     * const hsbranches = await prisma.hsbranches.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends hsbranchesFindFirstArgs>(args?: SelectSubset<T, hsbranchesFindFirstArgs<ExtArgs>>): Prisma__hsbranchesClient<$Result.GetResult<Prisma.$hsbranchesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hsbranches that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hsbranchesFindFirstOrThrowArgs} args - Arguments to find a Hsbranches
     * @example
     * // Get one Hsbranches
     * const hsbranches = await prisma.hsbranches.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends hsbranchesFindFirstOrThrowArgs>(args?: SelectSubset<T, hsbranchesFindFirstOrThrowArgs<ExtArgs>>): Prisma__hsbranchesClient<$Result.GetResult<Prisma.$hsbranchesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hsbranches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hsbranchesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hsbranches
     * const hsbranches = await prisma.hsbranches.findMany()
     * 
     * // Get first 10 Hsbranches
     * const hsbranches = await prisma.hsbranches.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hsbranchesWithIdOnly = await prisma.hsbranches.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends hsbranchesFindManyArgs>(args?: SelectSubset<T, hsbranchesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hsbranchesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hsbranches.
     * @param {hsbranchesCreateArgs} args - Arguments to create a Hsbranches.
     * @example
     * // Create one Hsbranches
     * const Hsbranches = await prisma.hsbranches.create({
     *   data: {
     *     // ... data to create a Hsbranches
     *   }
     * })
     * 
     */
    create<T extends hsbranchesCreateArgs>(args: SelectSubset<T, hsbranchesCreateArgs<ExtArgs>>): Prisma__hsbranchesClient<$Result.GetResult<Prisma.$hsbranchesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hsbranches.
     * @param {hsbranchesCreateManyArgs} args - Arguments to create many Hsbranches.
     * @example
     * // Create many Hsbranches
     * const hsbranches = await prisma.hsbranches.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends hsbranchesCreateManyArgs>(args?: SelectSubset<T, hsbranchesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Hsbranches and returns the data saved in the database.
     * @param {hsbranchesCreateManyAndReturnArgs} args - Arguments to create many Hsbranches.
     * @example
     * // Create many Hsbranches
     * const hsbranches = await prisma.hsbranches.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Hsbranches and only return the `id`
     * const hsbranchesWithIdOnly = await prisma.hsbranches.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends hsbranchesCreateManyAndReturnArgs>(args?: SelectSubset<T, hsbranchesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hsbranchesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Hsbranches.
     * @param {hsbranchesDeleteArgs} args - Arguments to delete one Hsbranches.
     * @example
     * // Delete one Hsbranches
     * const Hsbranches = await prisma.hsbranches.delete({
     *   where: {
     *     // ... filter to delete one Hsbranches
     *   }
     * })
     * 
     */
    delete<T extends hsbranchesDeleteArgs>(args: SelectSubset<T, hsbranchesDeleteArgs<ExtArgs>>): Prisma__hsbranchesClient<$Result.GetResult<Prisma.$hsbranchesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hsbranches.
     * @param {hsbranchesUpdateArgs} args - Arguments to update one Hsbranches.
     * @example
     * // Update one Hsbranches
     * const hsbranches = await prisma.hsbranches.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends hsbranchesUpdateArgs>(args: SelectSubset<T, hsbranchesUpdateArgs<ExtArgs>>): Prisma__hsbranchesClient<$Result.GetResult<Prisma.$hsbranchesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hsbranches.
     * @param {hsbranchesDeleteManyArgs} args - Arguments to filter Hsbranches to delete.
     * @example
     * // Delete a few Hsbranches
     * const { count } = await prisma.hsbranches.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends hsbranchesDeleteManyArgs>(args?: SelectSubset<T, hsbranchesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hsbranches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hsbranchesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hsbranches
     * const hsbranches = await prisma.hsbranches.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends hsbranchesUpdateManyArgs>(args: SelectSubset<T, hsbranchesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hsbranches and returns the data updated in the database.
     * @param {hsbranchesUpdateManyAndReturnArgs} args - Arguments to update many Hsbranches.
     * @example
     * // Update many Hsbranches
     * const hsbranches = await prisma.hsbranches.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Hsbranches and only return the `id`
     * const hsbranchesWithIdOnly = await prisma.hsbranches.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends hsbranchesUpdateManyAndReturnArgs>(args: SelectSubset<T, hsbranchesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hsbranchesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Hsbranches.
     * @param {hsbranchesUpsertArgs} args - Arguments to update or create a Hsbranches.
     * @example
     * // Update or create a Hsbranches
     * const hsbranches = await prisma.hsbranches.upsert({
     *   create: {
     *     // ... data to create a Hsbranches
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hsbranches we want to update
     *   }
     * })
     */
    upsert<T extends hsbranchesUpsertArgs>(args: SelectSubset<T, hsbranchesUpsertArgs<ExtArgs>>): Prisma__hsbranchesClient<$Result.GetResult<Prisma.$hsbranchesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Hsbranches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hsbranchesCountArgs} args - Arguments to filter Hsbranches to count.
     * @example
     * // Count the number of Hsbranches
     * const count = await prisma.hsbranches.count({
     *   where: {
     *     // ... the filter for the Hsbranches we want to count
     *   }
     * })
    **/
    count<T extends hsbranchesCountArgs>(
      args?: Subset<T, hsbranchesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HsbranchesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hsbranches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HsbranchesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HsbranchesAggregateArgs>(args: Subset<T, HsbranchesAggregateArgs>): Prisma.PrismaPromise<GetHsbranchesAggregateType<T>>

    /**
     * Group by Hsbranches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hsbranchesGroupByArgs} args - Group by arguments.
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
      T extends hsbranchesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: hsbranchesGroupByArgs['orderBy'] }
        : { orderBy?: hsbranchesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, hsbranchesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHsbranchesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the hsbranches model
   */
  readonly fields: hsbranchesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for hsbranches.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__hsbranchesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hsemployees<T extends hsbranches$hsemployeesArgs<ExtArgs> = {}>(args?: Subset<T, hsbranches$hsemployeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hsemployeesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    hsvalidities<T extends hsbranches$hsvaliditiesArgs<ExtArgs> = {}>(args?: Subset<T, hsbranches$hsvaliditiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hsvaliditiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    hsvalidity_requests<T extends hsbranches$hsvalidity_requestsArgs<ExtArgs> = {}>(args?: Subset<T, hsbranches$hsvalidity_requestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hsvalidity_requestsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the hsbranches model
   */
  interface hsbranchesFieldRefs {
    readonly id: FieldRef<"hsbranches", 'Int'>
    readonly description: FieldRef<"hsbranches", 'String'>
  }
    

  // Custom InputTypes
  /**
   * hsbranches findUnique
   */
  export type hsbranchesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsbranches
     */
    select?: hsbranchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsbranches
     */
    omit?: hsbranchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsbranchesInclude<ExtArgs> | null
    /**
     * Filter, which hsbranches to fetch.
     */
    where: hsbranchesWhereUniqueInput
  }

  /**
   * hsbranches findUniqueOrThrow
   */
  export type hsbranchesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsbranches
     */
    select?: hsbranchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsbranches
     */
    omit?: hsbranchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsbranchesInclude<ExtArgs> | null
    /**
     * Filter, which hsbranches to fetch.
     */
    where: hsbranchesWhereUniqueInput
  }

  /**
   * hsbranches findFirst
   */
  export type hsbranchesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsbranches
     */
    select?: hsbranchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsbranches
     */
    omit?: hsbranchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsbranchesInclude<ExtArgs> | null
    /**
     * Filter, which hsbranches to fetch.
     */
    where?: hsbranchesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hsbranches to fetch.
     */
    orderBy?: hsbranchesOrderByWithRelationInput | hsbranchesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hsbranches.
     */
    cursor?: hsbranchesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hsbranches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hsbranches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hsbranches.
     */
    distinct?: HsbranchesScalarFieldEnum | HsbranchesScalarFieldEnum[]
  }

  /**
   * hsbranches findFirstOrThrow
   */
  export type hsbranchesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsbranches
     */
    select?: hsbranchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsbranches
     */
    omit?: hsbranchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsbranchesInclude<ExtArgs> | null
    /**
     * Filter, which hsbranches to fetch.
     */
    where?: hsbranchesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hsbranches to fetch.
     */
    orderBy?: hsbranchesOrderByWithRelationInput | hsbranchesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hsbranches.
     */
    cursor?: hsbranchesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hsbranches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hsbranches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hsbranches.
     */
    distinct?: HsbranchesScalarFieldEnum | HsbranchesScalarFieldEnum[]
  }

  /**
   * hsbranches findMany
   */
  export type hsbranchesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsbranches
     */
    select?: hsbranchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsbranches
     */
    omit?: hsbranchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsbranchesInclude<ExtArgs> | null
    /**
     * Filter, which hsbranches to fetch.
     */
    where?: hsbranchesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hsbranches to fetch.
     */
    orderBy?: hsbranchesOrderByWithRelationInput | hsbranchesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing hsbranches.
     */
    cursor?: hsbranchesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hsbranches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hsbranches.
     */
    skip?: number
    distinct?: HsbranchesScalarFieldEnum | HsbranchesScalarFieldEnum[]
  }

  /**
   * hsbranches create
   */
  export type hsbranchesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsbranches
     */
    select?: hsbranchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsbranches
     */
    omit?: hsbranchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsbranchesInclude<ExtArgs> | null
    /**
     * The data needed to create a hsbranches.
     */
    data: XOR<hsbranchesCreateInput, hsbranchesUncheckedCreateInput>
  }

  /**
   * hsbranches createMany
   */
  export type hsbranchesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many hsbranches.
     */
    data: hsbranchesCreateManyInput | hsbranchesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * hsbranches createManyAndReturn
   */
  export type hsbranchesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsbranches
     */
    select?: hsbranchesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the hsbranches
     */
    omit?: hsbranchesOmit<ExtArgs> | null
    /**
     * The data used to create many hsbranches.
     */
    data: hsbranchesCreateManyInput | hsbranchesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * hsbranches update
   */
  export type hsbranchesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsbranches
     */
    select?: hsbranchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsbranches
     */
    omit?: hsbranchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsbranchesInclude<ExtArgs> | null
    /**
     * The data needed to update a hsbranches.
     */
    data: XOR<hsbranchesUpdateInput, hsbranchesUncheckedUpdateInput>
    /**
     * Choose, which hsbranches to update.
     */
    where: hsbranchesWhereUniqueInput
  }

  /**
   * hsbranches updateMany
   */
  export type hsbranchesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update hsbranches.
     */
    data: XOR<hsbranchesUpdateManyMutationInput, hsbranchesUncheckedUpdateManyInput>
    /**
     * Filter which hsbranches to update
     */
    where?: hsbranchesWhereInput
    /**
     * Limit how many hsbranches to update.
     */
    limit?: number
  }

  /**
   * hsbranches updateManyAndReturn
   */
  export type hsbranchesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsbranches
     */
    select?: hsbranchesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the hsbranches
     */
    omit?: hsbranchesOmit<ExtArgs> | null
    /**
     * The data used to update hsbranches.
     */
    data: XOR<hsbranchesUpdateManyMutationInput, hsbranchesUncheckedUpdateManyInput>
    /**
     * Filter which hsbranches to update
     */
    where?: hsbranchesWhereInput
    /**
     * Limit how many hsbranches to update.
     */
    limit?: number
  }

  /**
   * hsbranches upsert
   */
  export type hsbranchesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsbranches
     */
    select?: hsbranchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsbranches
     */
    omit?: hsbranchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsbranchesInclude<ExtArgs> | null
    /**
     * The filter to search for the hsbranches to update in case it exists.
     */
    where: hsbranchesWhereUniqueInput
    /**
     * In case the hsbranches found by the `where` argument doesn't exist, create a new hsbranches with this data.
     */
    create: XOR<hsbranchesCreateInput, hsbranchesUncheckedCreateInput>
    /**
     * In case the hsbranches was found with the provided `where` argument, update it with this data.
     */
    update: XOR<hsbranchesUpdateInput, hsbranchesUncheckedUpdateInput>
  }

  /**
   * hsbranches delete
   */
  export type hsbranchesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsbranches
     */
    select?: hsbranchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsbranches
     */
    omit?: hsbranchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsbranchesInclude<ExtArgs> | null
    /**
     * Filter which hsbranches to delete.
     */
    where: hsbranchesWhereUniqueInput
  }

  /**
   * hsbranches deleteMany
   */
  export type hsbranchesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hsbranches to delete
     */
    where?: hsbranchesWhereInput
    /**
     * Limit how many hsbranches to delete.
     */
    limit?: number
  }

  /**
   * hsbranches.hsemployees
   */
  export type hsbranches$hsemployeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsemployees
     */
    select?: hsemployeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsemployees
     */
    omit?: hsemployeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsemployeesInclude<ExtArgs> | null
    where?: hsemployeesWhereInput
    orderBy?: hsemployeesOrderByWithRelationInput | hsemployeesOrderByWithRelationInput[]
    cursor?: hsemployeesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HsemployeesScalarFieldEnum | HsemployeesScalarFieldEnum[]
  }

  /**
   * hsbranches.hsvalidities
   */
  export type hsbranches$hsvaliditiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsvalidities
     */
    select?: hsvaliditiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsvalidities
     */
    omit?: hsvaliditiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsvaliditiesInclude<ExtArgs> | null
    where?: hsvaliditiesWhereInput
    orderBy?: hsvaliditiesOrderByWithRelationInput | hsvaliditiesOrderByWithRelationInput[]
    cursor?: hsvaliditiesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HsvaliditiesScalarFieldEnum | HsvaliditiesScalarFieldEnum[]
  }

  /**
   * hsbranches.hsvalidity_requests
   */
  export type hsbranches$hsvalidity_requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsvalidity_requests
     */
    select?: hsvalidity_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsvalidity_requests
     */
    omit?: hsvalidity_requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsvalidity_requestsInclude<ExtArgs> | null
    where?: hsvalidity_requestsWhereInput
    orderBy?: hsvalidity_requestsOrderByWithRelationInput | hsvalidity_requestsOrderByWithRelationInput[]
    cursor?: hsvalidity_requestsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Hsvalidity_requestsScalarFieldEnum | Hsvalidity_requestsScalarFieldEnum[]
  }

  /**
   * hsbranches without action
   */
  export type hsbranchesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsbranches
     */
    select?: hsbranchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsbranches
     */
    omit?: hsbranchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsbranchesInclude<ExtArgs> | null
  }


  /**
   * Model hsvalidities
   */

  export type AggregateHsvalidities = {
    _count: HsvaliditiesCountAggregateOutputType | null
    _avg: HsvaliditiesAvgAggregateOutputType | null
    _sum: HsvaliditiesSumAggregateOutputType | null
    _min: HsvaliditiesMinAggregateOutputType | null
    _max: HsvaliditiesMaxAggregateOutputType | null
  }

  export type HsvaliditiesAvgAggregateOutputType = {
    id: number | null
    branch_id: number | null
    employee_id: number | null
    request_id: number | null
  }

  export type HsvaliditiesSumAggregateOutputType = {
    id: number | null
    branch_id: number | null
    employee_id: number | null
    request_id: number | null
  }

  export type HsvaliditiesMinAggregateOutputType = {
    id: number | null
    branch_id: number | null
    employee_id: number | null
    status: $Enums.hsvalidities_status | null
    request_id: number | null
    created_at: Date | null
    modified_at: Date | null
  }

  export type HsvaliditiesMaxAggregateOutputType = {
    id: number | null
    branch_id: number | null
    employee_id: number | null
    status: $Enums.hsvalidities_status | null
    request_id: number | null
    created_at: Date | null
    modified_at: Date | null
  }

  export type HsvaliditiesCountAggregateOutputType = {
    id: number
    branch_id: number
    employee_id: number
    status: number
    request_id: number
    created_at: number
    modified_at: number
    _all: number
  }


  export type HsvaliditiesAvgAggregateInputType = {
    id?: true
    branch_id?: true
    employee_id?: true
    request_id?: true
  }

  export type HsvaliditiesSumAggregateInputType = {
    id?: true
    branch_id?: true
    employee_id?: true
    request_id?: true
  }

  export type HsvaliditiesMinAggregateInputType = {
    id?: true
    branch_id?: true
    employee_id?: true
    status?: true
    request_id?: true
    created_at?: true
    modified_at?: true
  }

  export type HsvaliditiesMaxAggregateInputType = {
    id?: true
    branch_id?: true
    employee_id?: true
    status?: true
    request_id?: true
    created_at?: true
    modified_at?: true
  }

  export type HsvaliditiesCountAggregateInputType = {
    id?: true
    branch_id?: true
    employee_id?: true
    status?: true
    request_id?: true
    created_at?: true
    modified_at?: true
    _all?: true
  }

  export type HsvaliditiesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hsvalidities to aggregate.
     */
    where?: hsvaliditiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hsvalidities to fetch.
     */
    orderBy?: hsvaliditiesOrderByWithRelationInput | hsvaliditiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: hsvaliditiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hsvalidities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hsvalidities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned hsvalidities
    **/
    _count?: true | HsvaliditiesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HsvaliditiesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HsvaliditiesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HsvaliditiesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HsvaliditiesMaxAggregateInputType
  }

  export type GetHsvaliditiesAggregateType<T extends HsvaliditiesAggregateArgs> = {
        [P in keyof T & keyof AggregateHsvalidities]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHsvalidities[P]>
      : GetScalarType<T[P], AggregateHsvalidities[P]>
  }




  export type hsvaliditiesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hsvaliditiesWhereInput
    orderBy?: hsvaliditiesOrderByWithAggregationInput | hsvaliditiesOrderByWithAggregationInput[]
    by: HsvaliditiesScalarFieldEnum[] | HsvaliditiesScalarFieldEnum
    having?: hsvaliditiesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HsvaliditiesCountAggregateInputType | true
    _avg?: HsvaliditiesAvgAggregateInputType
    _sum?: HsvaliditiesSumAggregateInputType
    _min?: HsvaliditiesMinAggregateInputType
    _max?: HsvaliditiesMaxAggregateInputType
  }

  export type HsvaliditiesGroupByOutputType = {
    id: number
    branch_id: number
    employee_id: number
    status: $Enums.hsvalidities_status
    request_id: number | null
    created_at: Date
    modified_at: Date
    _count: HsvaliditiesCountAggregateOutputType | null
    _avg: HsvaliditiesAvgAggregateOutputType | null
    _sum: HsvaliditiesSumAggregateOutputType | null
    _min: HsvaliditiesMinAggregateOutputType | null
    _max: HsvaliditiesMaxAggregateOutputType | null
  }

  type GetHsvaliditiesGroupByPayload<T extends hsvaliditiesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HsvaliditiesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HsvaliditiesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HsvaliditiesGroupByOutputType[P]>
            : GetScalarType<T[P], HsvaliditiesGroupByOutputType[P]>
        }
      >
    >


  export type hsvaliditiesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    branch_id?: boolean
    employee_id?: boolean
    status?: boolean
    request_id?: boolean
    created_at?: boolean
    modified_at?: boolean
    hsbranches?: boolean | hsbranchesDefaultArgs<ExtArgs>
    hsemployees?: boolean | hsemployeesDefaultArgs<ExtArgs>
    hsvalidity_requests?: boolean | hsvalidities$hsvalidity_requestsArgs<ExtArgs>
    hsvalidity_products?: boolean | hsvalidities$hsvalidity_productsArgs<ExtArgs>
    _count?: boolean | HsvaliditiesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hsvalidities"]>

  export type hsvaliditiesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    branch_id?: boolean
    employee_id?: boolean
    status?: boolean
    request_id?: boolean
    created_at?: boolean
    modified_at?: boolean
    hsbranches?: boolean | hsbranchesDefaultArgs<ExtArgs>
    hsemployees?: boolean | hsemployeesDefaultArgs<ExtArgs>
    hsvalidity_requests?: boolean | hsvalidities$hsvalidity_requestsArgs<ExtArgs>
  }, ExtArgs["result"]["hsvalidities"]>

  export type hsvaliditiesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    branch_id?: boolean
    employee_id?: boolean
    status?: boolean
    request_id?: boolean
    created_at?: boolean
    modified_at?: boolean
    hsbranches?: boolean | hsbranchesDefaultArgs<ExtArgs>
    hsemployees?: boolean | hsemployeesDefaultArgs<ExtArgs>
    hsvalidity_requests?: boolean | hsvalidities$hsvalidity_requestsArgs<ExtArgs>
  }, ExtArgs["result"]["hsvalidities"]>

  export type hsvaliditiesSelectScalar = {
    id?: boolean
    branch_id?: boolean
    employee_id?: boolean
    status?: boolean
    request_id?: boolean
    created_at?: boolean
    modified_at?: boolean
  }

  export type hsvaliditiesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "branch_id" | "employee_id" | "status" | "request_id" | "created_at" | "modified_at", ExtArgs["result"]["hsvalidities"]>
  export type hsvaliditiesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hsbranches?: boolean | hsbranchesDefaultArgs<ExtArgs>
    hsemployees?: boolean | hsemployeesDefaultArgs<ExtArgs>
    hsvalidity_requests?: boolean | hsvalidities$hsvalidity_requestsArgs<ExtArgs>
    hsvalidity_products?: boolean | hsvalidities$hsvalidity_productsArgs<ExtArgs>
    _count?: boolean | HsvaliditiesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type hsvaliditiesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hsbranches?: boolean | hsbranchesDefaultArgs<ExtArgs>
    hsemployees?: boolean | hsemployeesDefaultArgs<ExtArgs>
    hsvalidity_requests?: boolean | hsvalidities$hsvalidity_requestsArgs<ExtArgs>
  }
  export type hsvaliditiesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hsbranches?: boolean | hsbranchesDefaultArgs<ExtArgs>
    hsemployees?: boolean | hsemployeesDefaultArgs<ExtArgs>
    hsvalidity_requests?: boolean | hsvalidities$hsvalidity_requestsArgs<ExtArgs>
  }

  export type $hsvaliditiesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "hsvalidities"
    objects: {
      hsbranches: Prisma.$hsbranchesPayload<ExtArgs>
      hsemployees: Prisma.$hsemployeesPayload<ExtArgs>
      hsvalidity_requests: Prisma.$hsvalidity_requestsPayload<ExtArgs> | null
      hsvalidity_products: Prisma.$hsvalidity_productsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      branch_id: number
      employee_id: number
      status: $Enums.hsvalidities_status
      request_id: number | null
      created_at: Date
      modified_at: Date
    }, ExtArgs["result"]["hsvalidities"]>
    composites: {}
  }

  type hsvaliditiesGetPayload<S extends boolean | null | undefined | hsvaliditiesDefaultArgs> = $Result.GetResult<Prisma.$hsvaliditiesPayload, S>

  type hsvaliditiesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<hsvaliditiesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HsvaliditiesCountAggregateInputType | true
    }

  export interface hsvaliditiesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['hsvalidities'], meta: { name: 'hsvalidities' } }
    /**
     * Find zero or one Hsvalidities that matches the filter.
     * @param {hsvaliditiesFindUniqueArgs} args - Arguments to find a Hsvalidities
     * @example
     * // Get one Hsvalidities
     * const hsvalidities = await prisma.hsvalidities.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends hsvaliditiesFindUniqueArgs>(args: SelectSubset<T, hsvaliditiesFindUniqueArgs<ExtArgs>>): Prisma__hsvaliditiesClient<$Result.GetResult<Prisma.$hsvaliditiesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hsvalidities that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {hsvaliditiesFindUniqueOrThrowArgs} args - Arguments to find a Hsvalidities
     * @example
     * // Get one Hsvalidities
     * const hsvalidities = await prisma.hsvalidities.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends hsvaliditiesFindUniqueOrThrowArgs>(args: SelectSubset<T, hsvaliditiesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__hsvaliditiesClient<$Result.GetResult<Prisma.$hsvaliditiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hsvalidities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hsvaliditiesFindFirstArgs} args - Arguments to find a Hsvalidities
     * @example
     * // Get one Hsvalidities
     * const hsvalidities = await prisma.hsvalidities.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends hsvaliditiesFindFirstArgs>(args?: SelectSubset<T, hsvaliditiesFindFirstArgs<ExtArgs>>): Prisma__hsvaliditiesClient<$Result.GetResult<Prisma.$hsvaliditiesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hsvalidities that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hsvaliditiesFindFirstOrThrowArgs} args - Arguments to find a Hsvalidities
     * @example
     * // Get one Hsvalidities
     * const hsvalidities = await prisma.hsvalidities.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends hsvaliditiesFindFirstOrThrowArgs>(args?: SelectSubset<T, hsvaliditiesFindFirstOrThrowArgs<ExtArgs>>): Prisma__hsvaliditiesClient<$Result.GetResult<Prisma.$hsvaliditiesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hsvalidities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hsvaliditiesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hsvalidities
     * const hsvalidities = await prisma.hsvalidities.findMany()
     * 
     * // Get first 10 Hsvalidities
     * const hsvalidities = await prisma.hsvalidities.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hsvaliditiesWithIdOnly = await prisma.hsvalidities.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends hsvaliditiesFindManyArgs>(args?: SelectSubset<T, hsvaliditiesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hsvaliditiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hsvalidities.
     * @param {hsvaliditiesCreateArgs} args - Arguments to create a Hsvalidities.
     * @example
     * // Create one Hsvalidities
     * const Hsvalidities = await prisma.hsvalidities.create({
     *   data: {
     *     // ... data to create a Hsvalidities
     *   }
     * })
     * 
     */
    create<T extends hsvaliditiesCreateArgs>(args: SelectSubset<T, hsvaliditiesCreateArgs<ExtArgs>>): Prisma__hsvaliditiesClient<$Result.GetResult<Prisma.$hsvaliditiesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hsvalidities.
     * @param {hsvaliditiesCreateManyArgs} args - Arguments to create many Hsvalidities.
     * @example
     * // Create many Hsvalidities
     * const hsvalidities = await prisma.hsvalidities.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends hsvaliditiesCreateManyArgs>(args?: SelectSubset<T, hsvaliditiesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Hsvalidities and returns the data saved in the database.
     * @param {hsvaliditiesCreateManyAndReturnArgs} args - Arguments to create many Hsvalidities.
     * @example
     * // Create many Hsvalidities
     * const hsvalidities = await prisma.hsvalidities.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Hsvalidities and only return the `id`
     * const hsvaliditiesWithIdOnly = await prisma.hsvalidities.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends hsvaliditiesCreateManyAndReturnArgs>(args?: SelectSubset<T, hsvaliditiesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hsvaliditiesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Hsvalidities.
     * @param {hsvaliditiesDeleteArgs} args - Arguments to delete one Hsvalidities.
     * @example
     * // Delete one Hsvalidities
     * const Hsvalidities = await prisma.hsvalidities.delete({
     *   where: {
     *     // ... filter to delete one Hsvalidities
     *   }
     * })
     * 
     */
    delete<T extends hsvaliditiesDeleteArgs>(args: SelectSubset<T, hsvaliditiesDeleteArgs<ExtArgs>>): Prisma__hsvaliditiesClient<$Result.GetResult<Prisma.$hsvaliditiesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hsvalidities.
     * @param {hsvaliditiesUpdateArgs} args - Arguments to update one Hsvalidities.
     * @example
     * // Update one Hsvalidities
     * const hsvalidities = await prisma.hsvalidities.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends hsvaliditiesUpdateArgs>(args: SelectSubset<T, hsvaliditiesUpdateArgs<ExtArgs>>): Prisma__hsvaliditiesClient<$Result.GetResult<Prisma.$hsvaliditiesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hsvalidities.
     * @param {hsvaliditiesDeleteManyArgs} args - Arguments to filter Hsvalidities to delete.
     * @example
     * // Delete a few Hsvalidities
     * const { count } = await prisma.hsvalidities.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends hsvaliditiesDeleteManyArgs>(args?: SelectSubset<T, hsvaliditiesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hsvalidities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hsvaliditiesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hsvalidities
     * const hsvalidities = await prisma.hsvalidities.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends hsvaliditiesUpdateManyArgs>(args: SelectSubset<T, hsvaliditiesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hsvalidities and returns the data updated in the database.
     * @param {hsvaliditiesUpdateManyAndReturnArgs} args - Arguments to update many Hsvalidities.
     * @example
     * // Update many Hsvalidities
     * const hsvalidities = await prisma.hsvalidities.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Hsvalidities and only return the `id`
     * const hsvaliditiesWithIdOnly = await prisma.hsvalidities.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends hsvaliditiesUpdateManyAndReturnArgs>(args: SelectSubset<T, hsvaliditiesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hsvaliditiesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Hsvalidities.
     * @param {hsvaliditiesUpsertArgs} args - Arguments to update or create a Hsvalidities.
     * @example
     * // Update or create a Hsvalidities
     * const hsvalidities = await prisma.hsvalidities.upsert({
     *   create: {
     *     // ... data to create a Hsvalidities
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hsvalidities we want to update
     *   }
     * })
     */
    upsert<T extends hsvaliditiesUpsertArgs>(args: SelectSubset<T, hsvaliditiesUpsertArgs<ExtArgs>>): Prisma__hsvaliditiesClient<$Result.GetResult<Prisma.$hsvaliditiesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Hsvalidities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hsvaliditiesCountArgs} args - Arguments to filter Hsvalidities to count.
     * @example
     * // Count the number of Hsvalidities
     * const count = await prisma.hsvalidities.count({
     *   where: {
     *     // ... the filter for the Hsvalidities we want to count
     *   }
     * })
    **/
    count<T extends hsvaliditiesCountArgs>(
      args?: Subset<T, hsvaliditiesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HsvaliditiesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hsvalidities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HsvaliditiesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HsvaliditiesAggregateArgs>(args: Subset<T, HsvaliditiesAggregateArgs>): Prisma.PrismaPromise<GetHsvaliditiesAggregateType<T>>

    /**
     * Group by Hsvalidities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hsvaliditiesGroupByArgs} args - Group by arguments.
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
      T extends hsvaliditiesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: hsvaliditiesGroupByArgs['orderBy'] }
        : { orderBy?: hsvaliditiesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, hsvaliditiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHsvaliditiesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the hsvalidities model
   */
  readonly fields: hsvaliditiesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for hsvalidities.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__hsvaliditiesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hsbranches<T extends hsbranchesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, hsbranchesDefaultArgs<ExtArgs>>): Prisma__hsbranchesClient<$Result.GetResult<Prisma.$hsbranchesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    hsemployees<T extends hsemployeesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, hsemployeesDefaultArgs<ExtArgs>>): Prisma__hsemployeesClient<$Result.GetResult<Prisma.$hsemployeesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    hsvalidity_requests<T extends hsvalidities$hsvalidity_requestsArgs<ExtArgs> = {}>(args?: Subset<T, hsvalidities$hsvalidity_requestsArgs<ExtArgs>>): Prisma__hsvalidity_requestsClient<$Result.GetResult<Prisma.$hsvalidity_requestsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    hsvalidity_products<T extends hsvalidities$hsvalidity_productsArgs<ExtArgs> = {}>(args?: Subset<T, hsvalidities$hsvalidity_productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hsvalidity_productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the hsvalidities model
   */
  interface hsvaliditiesFieldRefs {
    readonly id: FieldRef<"hsvalidities", 'Int'>
    readonly branch_id: FieldRef<"hsvalidities", 'Int'>
    readonly employee_id: FieldRef<"hsvalidities", 'Int'>
    readonly status: FieldRef<"hsvalidities", 'hsvalidities_status'>
    readonly request_id: FieldRef<"hsvalidities", 'Int'>
    readonly created_at: FieldRef<"hsvalidities", 'DateTime'>
    readonly modified_at: FieldRef<"hsvalidities", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * hsvalidities findUnique
   */
  export type hsvaliditiesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsvalidities
     */
    select?: hsvaliditiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsvalidities
     */
    omit?: hsvaliditiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsvaliditiesInclude<ExtArgs> | null
    /**
     * Filter, which hsvalidities to fetch.
     */
    where: hsvaliditiesWhereUniqueInput
  }

  /**
   * hsvalidities findUniqueOrThrow
   */
  export type hsvaliditiesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsvalidities
     */
    select?: hsvaliditiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsvalidities
     */
    omit?: hsvaliditiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsvaliditiesInclude<ExtArgs> | null
    /**
     * Filter, which hsvalidities to fetch.
     */
    where: hsvaliditiesWhereUniqueInput
  }

  /**
   * hsvalidities findFirst
   */
  export type hsvaliditiesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsvalidities
     */
    select?: hsvaliditiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsvalidities
     */
    omit?: hsvaliditiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsvaliditiesInclude<ExtArgs> | null
    /**
     * Filter, which hsvalidities to fetch.
     */
    where?: hsvaliditiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hsvalidities to fetch.
     */
    orderBy?: hsvaliditiesOrderByWithRelationInput | hsvaliditiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hsvalidities.
     */
    cursor?: hsvaliditiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hsvalidities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hsvalidities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hsvalidities.
     */
    distinct?: HsvaliditiesScalarFieldEnum | HsvaliditiesScalarFieldEnum[]
  }

  /**
   * hsvalidities findFirstOrThrow
   */
  export type hsvaliditiesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsvalidities
     */
    select?: hsvaliditiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsvalidities
     */
    omit?: hsvaliditiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsvaliditiesInclude<ExtArgs> | null
    /**
     * Filter, which hsvalidities to fetch.
     */
    where?: hsvaliditiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hsvalidities to fetch.
     */
    orderBy?: hsvaliditiesOrderByWithRelationInput | hsvaliditiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hsvalidities.
     */
    cursor?: hsvaliditiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hsvalidities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hsvalidities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hsvalidities.
     */
    distinct?: HsvaliditiesScalarFieldEnum | HsvaliditiesScalarFieldEnum[]
  }

  /**
   * hsvalidities findMany
   */
  export type hsvaliditiesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsvalidities
     */
    select?: hsvaliditiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsvalidities
     */
    omit?: hsvaliditiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsvaliditiesInclude<ExtArgs> | null
    /**
     * Filter, which hsvalidities to fetch.
     */
    where?: hsvaliditiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hsvalidities to fetch.
     */
    orderBy?: hsvaliditiesOrderByWithRelationInput | hsvaliditiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing hsvalidities.
     */
    cursor?: hsvaliditiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hsvalidities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hsvalidities.
     */
    skip?: number
    distinct?: HsvaliditiesScalarFieldEnum | HsvaliditiesScalarFieldEnum[]
  }

  /**
   * hsvalidities create
   */
  export type hsvaliditiesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsvalidities
     */
    select?: hsvaliditiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsvalidities
     */
    omit?: hsvaliditiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsvaliditiesInclude<ExtArgs> | null
    /**
     * The data needed to create a hsvalidities.
     */
    data: XOR<hsvaliditiesCreateInput, hsvaliditiesUncheckedCreateInput>
  }

  /**
   * hsvalidities createMany
   */
  export type hsvaliditiesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many hsvalidities.
     */
    data: hsvaliditiesCreateManyInput | hsvaliditiesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * hsvalidities createManyAndReturn
   */
  export type hsvaliditiesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsvalidities
     */
    select?: hsvaliditiesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the hsvalidities
     */
    omit?: hsvaliditiesOmit<ExtArgs> | null
    /**
     * The data used to create many hsvalidities.
     */
    data: hsvaliditiesCreateManyInput | hsvaliditiesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsvaliditiesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * hsvalidities update
   */
  export type hsvaliditiesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsvalidities
     */
    select?: hsvaliditiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsvalidities
     */
    omit?: hsvaliditiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsvaliditiesInclude<ExtArgs> | null
    /**
     * The data needed to update a hsvalidities.
     */
    data: XOR<hsvaliditiesUpdateInput, hsvaliditiesUncheckedUpdateInput>
    /**
     * Choose, which hsvalidities to update.
     */
    where: hsvaliditiesWhereUniqueInput
  }

  /**
   * hsvalidities updateMany
   */
  export type hsvaliditiesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update hsvalidities.
     */
    data: XOR<hsvaliditiesUpdateManyMutationInput, hsvaliditiesUncheckedUpdateManyInput>
    /**
     * Filter which hsvalidities to update
     */
    where?: hsvaliditiesWhereInput
    /**
     * Limit how many hsvalidities to update.
     */
    limit?: number
  }

  /**
   * hsvalidities updateManyAndReturn
   */
  export type hsvaliditiesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsvalidities
     */
    select?: hsvaliditiesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the hsvalidities
     */
    omit?: hsvaliditiesOmit<ExtArgs> | null
    /**
     * The data used to update hsvalidities.
     */
    data: XOR<hsvaliditiesUpdateManyMutationInput, hsvaliditiesUncheckedUpdateManyInput>
    /**
     * Filter which hsvalidities to update
     */
    where?: hsvaliditiesWhereInput
    /**
     * Limit how many hsvalidities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsvaliditiesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * hsvalidities upsert
   */
  export type hsvaliditiesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsvalidities
     */
    select?: hsvaliditiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsvalidities
     */
    omit?: hsvaliditiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsvaliditiesInclude<ExtArgs> | null
    /**
     * The filter to search for the hsvalidities to update in case it exists.
     */
    where: hsvaliditiesWhereUniqueInput
    /**
     * In case the hsvalidities found by the `where` argument doesn't exist, create a new hsvalidities with this data.
     */
    create: XOR<hsvaliditiesCreateInput, hsvaliditiesUncheckedCreateInput>
    /**
     * In case the hsvalidities was found with the provided `where` argument, update it with this data.
     */
    update: XOR<hsvaliditiesUpdateInput, hsvaliditiesUncheckedUpdateInput>
  }

  /**
   * hsvalidities delete
   */
  export type hsvaliditiesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsvalidities
     */
    select?: hsvaliditiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsvalidities
     */
    omit?: hsvaliditiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsvaliditiesInclude<ExtArgs> | null
    /**
     * Filter which hsvalidities to delete.
     */
    where: hsvaliditiesWhereUniqueInput
  }

  /**
   * hsvalidities deleteMany
   */
  export type hsvaliditiesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hsvalidities to delete
     */
    where?: hsvaliditiesWhereInput
    /**
     * Limit how many hsvalidities to delete.
     */
    limit?: number
  }

  /**
   * hsvalidities.hsvalidity_requests
   */
  export type hsvalidities$hsvalidity_requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsvalidity_requests
     */
    select?: hsvalidity_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsvalidity_requests
     */
    omit?: hsvalidity_requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsvalidity_requestsInclude<ExtArgs> | null
    where?: hsvalidity_requestsWhereInput
  }

  /**
   * hsvalidities.hsvalidity_products
   */
  export type hsvalidities$hsvalidity_productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsvalidity_products
     */
    select?: hsvalidity_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsvalidity_products
     */
    omit?: hsvalidity_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsvalidity_productsInclude<ExtArgs> | null
    where?: hsvalidity_productsWhereInput
    orderBy?: hsvalidity_productsOrderByWithRelationInput | hsvalidity_productsOrderByWithRelationInput[]
    cursor?: hsvalidity_productsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Hsvalidity_productsScalarFieldEnum | Hsvalidity_productsScalarFieldEnum[]
  }

  /**
   * hsvalidities without action
   */
  export type hsvaliditiesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsvalidities
     */
    select?: hsvaliditiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsvalidities
     */
    omit?: hsvaliditiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsvaliditiesInclude<ExtArgs> | null
  }


  /**
   * Model hsvalidity_products
   */

  export type AggregateHsvalidity_products = {
    _count: Hsvalidity_productsCountAggregateOutputType | null
    _avg: Hsvalidity_productsAvgAggregateOutputType | null
    _sum: Hsvalidity_productsSumAggregateOutputType | null
    _min: Hsvalidity_productsMinAggregateOutputType | null
    _max: Hsvalidity_productsMaxAggregateOutputType | null
  }

  export type Hsvalidity_productsAvgAggregateOutputType = {
    id: number | null
    validity_id: number | null
    product_cod: number | null
    quantity: number | null
    treat_id: number | null
  }

  export type Hsvalidity_productsSumAggregateOutputType = {
    id: number | null
    validity_id: number | null
    product_cod: number | null
    quantity: number | null
    treat_id: number | null
  }

  export type Hsvalidity_productsMinAggregateOutputType = {
    id: number | null
    validity_id: number | null
    product_cod: number | null
    quantity: number | null
    validity_date: Date | null
    treat_id: number | null
    auxiliary_code: string | null
  }

  export type Hsvalidity_productsMaxAggregateOutputType = {
    id: number | null
    validity_id: number | null
    product_cod: number | null
    quantity: number | null
    validity_date: Date | null
    treat_id: number | null
    auxiliary_code: string | null
  }

  export type Hsvalidity_productsCountAggregateOutputType = {
    id: number
    validity_id: number
    product_cod: number
    quantity: number
    validity_date: number
    treat_id: number
    auxiliary_code: number
    _all: number
  }


  export type Hsvalidity_productsAvgAggregateInputType = {
    id?: true
    validity_id?: true
    product_cod?: true
    quantity?: true
    treat_id?: true
  }

  export type Hsvalidity_productsSumAggregateInputType = {
    id?: true
    validity_id?: true
    product_cod?: true
    quantity?: true
    treat_id?: true
  }

  export type Hsvalidity_productsMinAggregateInputType = {
    id?: true
    validity_id?: true
    product_cod?: true
    quantity?: true
    validity_date?: true
    treat_id?: true
    auxiliary_code?: true
  }

  export type Hsvalidity_productsMaxAggregateInputType = {
    id?: true
    validity_id?: true
    product_cod?: true
    quantity?: true
    validity_date?: true
    treat_id?: true
    auxiliary_code?: true
  }

  export type Hsvalidity_productsCountAggregateInputType = {
    id?: true
    validity_id?: true
    product_cod?: true
    quantity?: true
    validity_date?: true
    treat_id?: true
    auxiliary_code?: true
    _all?: true
  }

  export type Hsvalidity_productsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hsvalidity_products to aggregate.
     */
    where?: hsvalidity_productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hsvalidity_products to fetch.
     */
    orderBy?: hsvalidity_productsOrderByWithRelationInput | hsvalidity_productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: hsvalidity_productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hsvalidity_products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hsvalidity_products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned hsvalidity_products
    **/
    _count?: true | Hsvalidity_productsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Hsvalidity_productsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Hsvalidity_productsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Hsvalidity_productsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Hsvalidity_productsMaxAggregateInputType
  }

  export type GetHsvalidity_productsAggregateType<T extends Hsvalidity_productsAggregateArgs> = {
        [P in keyof T & keyof AggregateHsvalidity_products]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHsvalidity_products[P]>
      : GetScalarType<T[P], AggregateHsvalidity_products[P]>
  }




  export type hsvalidity_productsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hsvalidity_productsWhereInput
    orderBy?: hsvalidity_productsOrderByWithAggregationInput | hsvalidity_productsOrderByWithAggregationInput[]
    by: Hsvalidity_productsScalarFieldEnum[] | Hsvalidity_productsScalarFieldEnum
    having?: hsvalidity_productsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Hsvalidity_productsCountAggregateInputType | true
    _avg?: Hsvalidity_productsAvgAggregateInputType
    _sum?: Hsvalidity_productsSumAggregateInputType
    _min?: Hsvalidity_productsMinAggregateInputType
    _max?: Hsvalidity_productsMaxAggregateInputType
  }

  export type Hsvalidity_productsGroupByOutputType = {
    id: number
    validity_id: number
    product_cod: number
    quantity: number
    validity_date: Date
    treat_id: number
    auxiliary_code: string
    _count: Hsvalidity_productsCountAggregateOutputType | null
    _avg: Hsvalidity_productsAvgAggregateOutputType | null
    _sum: Hsvalidity_productsSumAggregateOutputType | null
    _min: Hsvalidity_productsMinAggregateOutputType | null
    _max: Hsvalidity_productsMaxAggregateOutputType | null
  }

  type GetHsvalidity_productsGroupByPayload<T extends hsvalidity_productsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Hsvalidity_productsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Hsvalidity_productsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Hsvalidity_productsGroupByOutputType[P]>
            : GetScalarType<T[P], Hsvalidity_productsGroupByOutputType[P]>
        }
      >
    >


  export type hsvalidity_productsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    validity_id?: boolean
    product_cod?: boolean
    quantity?: boolean
    validity_date?: boolean
    treat_id?: boolean
    auxiliary_code?: boolean
    hsvalidity_treatments?: boolean | hsvalidity_treatmentsDefaultArgs<ExtArgs>
    hsvalidities?: boolean | hsvaliditiesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hsvalidity_products"]>

  export type hsvalidity_productsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    validity_id?: boolean
    product_cod?: boolean
    quantity?: boolean
    validity_date?: boolean
    treat_id?: boolean
    auxiliary_code?: boolean
    hsvalidity_treatments?: boolean | hsvalidity_treatmentsDefaultArgs<ExtArgs>
    hsvalidities?: boolean | hsvaliditiesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hsvalidity_products"]>

  export type hsvalidity_productsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    validity_id?: boolean
    product_cod?: boolean
    quantity?: boolean
    validity_date?: boolean
    treat_id?: boolean
    auxiliary_code?: boolean
    hsvalidity_treatments?: boolean | hsvalidity_treatmentsDefaultArgs<ExtArgs>
    hsvalidities?: boolean | hsvaliditiesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hsvalidity_products"]>

  export type hsvalidity_productsSelectScalar = {
    id?: boolean
    validity_id?: boolean
    product_cod?: boolean
    quantity?: boolean
    validity_date?: boolean
    treat_id?: boolean
    auxiliary_code?: boolean
  }

  export type hsvalidity_productsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "validity_id" | "product_cod" | "quantity" | "validity_date" | "treat_id" | "auxiliary_code", ExtArgs["result"]["hsvalidity_products"]>
  export type hsvalidity_productsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hsvalidity_treatments?: boolean | hsvalidity_treatmentsDefaultArgs<ExtArgs>
    hsvalidities?: boolean | hsvaliditiesDefaultArgs<ExtArgs>
  }
  export type hsvalidity_productsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hsvalidity_treatments?: boolean | hsvalidity_treatmentsDefaultArgs<ExtArgs>
    hsvalidities?: boolean | hsvaliditiesDefaultArgs<ExtArgs>
  }
  export type hsvalidity_productsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hsvalidity_treatments?: boolean | hsvalidity_treatmentsDefaultArgs<ExtArgs>
    hsvalidities?: boolean | hsvaliditiesDefaultArgs<ExtArgs>
  }

  export type $hsvalidity_productsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "hsvalidity_products"
    objects: {
      hsvalidity_treatments: Prisma.$hsvalidity_treatmentsPayload<ExtArgs>
      hsvalidities: Prisma.$hsvaliditiesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      validity_id: number
      product_cod: number
      quantity: number
      validity_date: Date
      treat_id: number
      auxiliary_code: string
    }, ExtArgs["result"]["hsvalidity_products"]>
    composites: {}
  }

  type hsvalidity_productsGetPayload<S extends boolean | null | undefined | hsvalidity_productsDefaultArgs> = $Result.GetResult<Prisma.$hsvalidity_productsPayload, S>

  type hsvalidity_productsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<hsvalidity_productsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Hsvalidity_productsCountAggregateInputType | true
    }

  export interface hsvalidity_productsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['hsvalidity_products'], meta: { name: 'hsvalidity_products' } }
    /**
     * Find zero or one Hsvalidity_products that matches the filter.
     * @param {hsvalidity_productsFindUniqueArgs} args - Arguments to find a Hsvalidity_products
     * @example
     * // Get one Hsvalidity_products
     * const hsvalidity_products = await prisma.hsvalidity_products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends hsvalidity_productsFindUniqueArgs>(args: SelectSubset<T, hsvalidity_productsFindUniqueArgs<ExtArgs>>): Prisma__hsvalidity_productsClient<$Result.GetResult<Prisma.$hsvalidity_productsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hsvalidity_products that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {hsvalidity_productsFindUniqueOrThrowArgs} args - Arguments to find a Hsvalidity_products
     * @example
     * // Get one Hsvalidity_products
     * const hsvalidity_products = await prisma.hsvalidity_products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends hsvalidity_productsFindUniqueOrThrowArgs>(args: SelectSubset<T, hsvalidity_productsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__hsvalidity_productsClient<$Result.GetResult<Prisma.$hsvalidity_productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hsvalidity_products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hsvalidity_productsFindFirstArgs} args - Arguments to find a Hsvalidity_products
     * @example
     * // Get one Hsvalidity_products
     * const hsvalidity_products = await prisma.hsvalidity_products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends hsvalidity_productsFindFirstArgs>(args?: SelectSubset<T, hsvalidity_productsFindFirstArgs<ExtArgs>>): Prisma__hsvalidity_productsClient<$Result.GetResult<Prisma.$hsvalidity_productsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hsvalidity_products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hsvalidity_productsFindFirstOrThrowArgs} args - Arguments to find a Hsvalidity_products
     * @example
     * // Get one Hsvalidity_products
     * const hsvalidity_products = await prisma.hsvalidity_products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends hsvalidity_productsFindFirstOrThrowArgs>(args?: SelectSubset<T, hsvalidity_productsFindFirstOrThrowArgs<ExtArgs>>): Prisma__hsvalidity_productsClient<$Result.GetResult<Prisma.$hsvalidity_productsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hsvalidity_products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hsvalidity_productsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hsvalidity_products
     * const hsvalidity_products = await prisma.hsvalidity_products.findMany()
     * 
     * // Get first 10 Hsvalidity_products
     * const hsvalidity_products = await prisma.hsvalidity_products.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hsvalidity_productsWithIdOnly = await prisma.hsvalidity_products.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends hsvalidity_productsFindManyArgs>(args?: SelectSubset<T, hsvalidity_productsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hsvalidity_productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hsvalidity_products.
     * @param {hsvalidity_productsCreateArgs} args - Arguments to create a Hsvalidity_products.
     * @example
     * // Create one Hsvalidity_products
     * const Hsvalidity_products = await prisma.hsvalidity_products.create({
     *   data: {
     *     // ... data to create a Hsvalidity_products
     *   }
     * })
     * 
     */
    create<T extends hsvalidity_productsCreateArgs>(args: SelectSubset<T, hsvalidity_productsCreateArgs<ExtArgs>>): Prisma__hsvalidity_productsClient<$Result.GetResult<Prisma.$hsvalidity_productsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hsvalidity_products.
     * @param {hsvalidity_productsCreateManyArgs} args - Arguments to create many Hsvalidity_products.
     * @example
     * // Create many Hsvalidity_products
     * const hsvalidity_products = await prisma.hsvalidity_products.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends hsvalidity_productsCreateManyArgs>(args?: SelectSubset<T, hsvalidity_productsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Hsvalidity_products and returns the data saved in the database.
     * @param {hsvalidity_productsCreateManyAndReturnArgs} args - Arguments to create many Hsvalidity_products.
     * @example
     * // Create many Hsvalidity_products
     * const hsvalidity_products = await prisma.hsvalidity_products.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Hsvalidity_products and only return the `id`
     * const hsvalidity_productsWithIdOnly = await prisma.hsvalidity_products.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends hsvalidity_productsCreateManyAndReturnArgs>(args?: SelectSubset<T, hsvalidity_productsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hsvalidity_productsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Hsvalidity_products.
     * @param {hsvalidity_productsDeleteArgs} args - Arguments to delete one Hsvalidity_products.
     * @example
     * // Delete one Hsvalidity_products
     * const Hsvalidity_products = await prisma.hsvalidity_products.delete({
     *   where: {
     *     // ... filter to delete one Hsvalidity_products
     *   }
     * })
     * 
     */
    delete<T extends hsvalidity_productsDeleteArgs>(args: SelectSubset<T, hsvalidity_productsDeleteArgs<ExtArgs>>): Prisma__hsvalidity_productsClient<$Result.GetResult<Prisma.$hsvalidity_productsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hsvalidity_products.
     * @param {hsvalidity_productsUpdateArgs} args - Arguments to update one Hsvalidity_products.
     * @example
     * // Update one Hsvalidity_products
     * const hsvalidity_products = await prisma.hsvalidity_products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends hsvalidity_productsUpdateArgs>(args: SelectSubset<T, hsvalidity_productsUpdateArgs<ExtArgs>>): Prisma__hsvalidity_productsClient<$Result.GetResult<Prisma.$hsvalidity_productsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hsvalidity_products.
     * @param {hsvalidity_productsDeleteManyArgs} args - Arguments to filter Hsvalidity_products to delete.
     * @example
     * // Delete a few Hsvalidity_products
     * const { count } = await prisma.hsvalidity_products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends hsvalidity_productsDeleteManyArgs>(args?: SelectSubset<T, hsvalidity_productsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hsvalidity_products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hsvalidity_productsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hsvalidity_products
     * const hsvalidity_products = await prisma.hsvalidity_products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends hsvalidity_productsUpdateManyArgs>(args: SelectSubset<T, hsvalidity_productsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hsvalidity_products and returns the data updated in the database.
     * @param {hsvalidity_productsUpdateManyAndReturnArgs} args - Arguments to update many Hsvalidity_products.
     * @example
     * // Update many Hsvalidity_products
     * const hsvalidity_products = await prisma.hsvalidity_products.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Hsvalidity_products and only return the `id`
     * const hsvalidity_productsWithIdOnly = await prisma.hsvalidity_products.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends hsvalidity_productsUpdateManyAndReturnArgs>(args: SelectSubset<T, hsvalidity_productsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hsvalidity_productsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Hsvalidity_products.
     * @param {hsvalidity_productsUpsertArgs} args - Arguments to update or create a Hsvalidity_products.
     * @example
     * // Update or create a Hsvalidity_products
     * const hsvalidity_products = await prisma.hsvalidity_products.upsert({
     *   create: {
     *     // ... data to create a Hsvalidity_products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hsvalidity_products we want to update
     *   }
     * })
     */
    upsert<T extends hsvalidity_productsUpsertArgs>(args: SelectSubset<T, hsvalidity_productsUpsertArgs<ExtArgs>>): Prisma__hsvalidity_productsClient<$Result.GetResult<Prisma.$hsvalidity_productsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Hsvalidity_products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hsvalidity_productsCountArgs} args - Arguments to filter Hsvalidity_products to count.
     * @example
     * // Count the number of Hsvalidity_products
     * const count = await prisma.hsvalidity_products.count({
     *   where: {
     *     // ... the filter for the Hsvalidity_products we want to count
     *   }
     * })
    **/
    count<T extends hsvalidity_productsCountArgs>(
      args?: Subset<T, hsvalidity_productsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Hsvalidity_productsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hsvalidity_products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Hsvalidity_productsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Hsvalidity_productsAggregateArgs>(args: Subset<T, Hsvalidity_productsAggregateArgs>): Prisma.PrismaPromise<GetHsvalidity_productsAggregateType<T>>

    /**
     * Group by Hsvalidity_products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hsvalidity_productsGroupByArgs} args - Group by arguments.
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
      T extends hsvalidity_productsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: hsvalidity_productsGroupByArgs['orderBy'] }
        : { orderBy?: hsvalidity_productsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, hsvalidity_productsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHsvalidity_productsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the hsvalidity_products model
   */
  readonly fields: hsvalidity_productsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for hsvalidity_products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__hsvalidity_productsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hsvalidity_treatments<T extends hsvalidity_treatmentsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, hsvalidity_treatmentsDefaultArgs<ExtArgs>>): Prisma__hsvalidity_treatmentsClient<$Result.GetResult<Prisma.$hsvalidity_treatmentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    hsvalidities<T extends hsvaliditiesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, hsvaliditiesDefaultArgs<ExtArgs>>): Prisma__hsvaliditiesClient<$Result.GetResult<Prisma.$hsvaliditiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the hsvalidity_products model
   */
  interface hsvalidity_productsFieldRefs {
    readonly id: FieldRef<"hsvalidity_products", 'Int'>
    readonly validity_id: FieldRef<"hsvalidity_products", 'Int'>
    readonly product_cod: FieldRef<"hsvalidity_products", 'Int'>
    readonly quantity: FieldRef<"hsvalidity_products", 'Int'>
    readonly validity_date: FieldRef<"hsvalidity_products", 'DateTime'>
    readonly treat_id: FieldRef<"hsvalidity_products", 'Int'>
    readonly auxiliary_code: FieldRef<"hsvalidity_products", 'String'>
  }
    

  // Custom InputTypes
  /**
   * hsvalidity_products findUnique
   */
  export type hsvalidity_productsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsvalidity_products
     */
    select?: hsvalidity_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsvalidity_products
     */
    omit?: hsvalidity_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsvalidity_productsInclude<ExtArgs> | null
    /**
     * Filter, which hsvalidity_products to fetch.
     */
    where: hsvalidity_productsWhereUniqueInput
  }

  /**
   * hsvalidity_products findUniqueOrThrow
   */
  export type hsvalidity_productsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsvalidity_products
     */
    select?: hsvalidity_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsvalidity_products
     */
    omit?: hsvalidity_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsvalidity_productsInclude<ExtArgs> | null
    /**
     * Filter, which hsvalidity_products to fetch.
     */
    where: hsvalidity_productsWhereUniqueInput
  }

  /**
   * hsvalidity_products findFirst
   */
  export type hsvalidity_productsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsvalidity_products
     */
    select?: hsvalidity_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsvalidity_products
     */
    omit?: hsvalidity_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsvalidity_productsInclude<ExtArgs> | null
    /**
     * Filter, which hsvalidity_products to fetch.
     */
    where?: hsvalidity_productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hsvalidity_products to fetch.
     */
    orderBy?: hsvalidity_productsOrderByWithRelationInput | hsvalidity_productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hsvalidity_products.
     */
    cursor?: hsvalidity_productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hsvalidity_products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hsvalidity_products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hsvalidity_products.
     */
    distinct?: Hsvalidity_productsScalarFieldEnum | Hsvalidity_productsScalarFieldEnum[]
  }

  /**
   * hsvalidity_products findFirstOrThrow
   */
  export type hsvalidity_productsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsvalidity_products
     */
    select?: hsvalidity_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsvalidity_products
     */
    omit?: hsvalidity_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsvalidity_productsInclude<ExtArgs> | null
    /**
     * Filter, which hsvalidity_products to fetch.
     */
    where?: hsvalidity_productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hsvalidity_products to fetch.
     */
    orderBy?: hsvalidity_productsOrderByWithRelationInput | hsvalidity_productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hsvalidity_products.
     */
    cursor?: hsvalidity_productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hsvalidity_products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hsvalidity_products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hsvalidity_products.
     */
    distinct?: Hsvalidity_productsScalarFieldEnum | Hsvalidity_productsScalarFieldEnum[]
  }

  /**
   * hsvalidity_products findMany
   */
  export type hsvalidity_productsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsvalidity_products
     */
    select?: hsvalidity_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsvalidity_products
     */
    omit?: hsvalidity_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsvalidity_productsInclude<ExtArgs> | null
    /**
     * Filter, which hsvalidity_products to fetch.
     */
    where?: hsvalidity_productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hsvalidity_products to fetch.
     */
    orderBy?: hsvalidity_productsOrderByWithRelationInput | hsvalidity_productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing hsvalidity_products.
     */
    cursor?: hsvalidity_productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hsvalidity_products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hsvalidity_products.
     */
    skip?: number
    distinct?: Hsvalidity_productsScalarFieldEnum | Hsvalidity_productsScalarFieldEnum[]
  }

  /**
   * hsvalidity_products create
   */
  export type hsvalidity_productsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsvalidity_products
     */
    select?: hsvalidity_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsvalidity_products
     */
    omit?: hsvalidity_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsvalidity_productsInclude<ExtArgs> | null
    /**
     * The data needed to create a hsvalidity_products.
     */
    data: XOR<hsvalidity_productsCreateInput, hsvalidity_productsUncheckedCreateInput>
  }

  /**
   * hsvalidity_products createMany
   */
  export type hsvalidity_productsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many hsvalidity_products.
     */
    data: hsvalidity_productsCreateManyInput | hsvalidity_productsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * hsvalidity_products createManyAndReturn
   */
  export type hsvalidity_productsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsvalidity_products
     */
    select?: hsvalidity_productsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the hsvalidity_products
     */
    omit?: hsvalidity_productsOmit<ExtArgs> | null
    /**
     * The data used to create many hsvalidity_products.
     */
    data: hsvalidity_productsCreateManyInput | hsvalidity_productsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsvalidity_productsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * hsvalidity_products update
   */
  export type hsvalidity_productsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsvalidity_products
     */
    select?: hsvalidity_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsvalidity_products
     */
    omit?: hsvalidity_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsvalidity_productsInclude<ExtArgs> | null
    /**
     * The data needed to update a hsvalidity_products.
     */
    data: XOR<hsvalidity_productsUpdateInput, hsvalidity_productsUncheckedUpdateInput>
    /**
     * Choose, which hsvalidity_products to update.
     */
    where: hsvalidity_productsWhereUniqueInput
  }

  /**
   * hsvalidity_products updateMany
   */
  export type hsvalidity_productsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update hsvalidity_products.
     */
    data: XOR<hsvalidity_productsUpdateManyMutationInput, hsvalidity_productsUncheckedUpdateManyInput>
    /**
     * Filter which hsvalidity_products to update
     */
    where?: hsvalidity_productsWhereInput
    /**
     * Limit how many hsvalidity_products to update.
     */
    limit?: number
  }

  /**
   * hsvalidity_products updateManyAndReturn
   */
  export type hsvalidity_productsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsvalidity_products
     */
    select?: hsvalidity_productsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the hsvalidity_products
     */
    omit?: hsvalidity_productsOmit<ExtArgs> | null
    /**
     * The data used to update hsvalidity_products.
     */
    data: XOR<hsvalidity_productsUpdateManyMutationInput, hsvalidity_productsUncheckedUpdateManyInput>
    /**
     * Filter which hsvalidity_products to update
     */
    where?: hsvalidity_productsWhereInput
    /**
     * Limit how many hsvalidity_products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsvalidity_productsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * hsvalidity_products upsert
   */
  export type hsvalidity_productsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsvalidity_products
     */
    select?: hsvalidity_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsvalidity_products
     */
    omit?: hsvalidity_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsvalidity_productsInclude<ExtArgs> | null
    /**
     * The filter to search for the hsvalidity_products to update in case it exists.
     */
    where: hsvalidity_productsWhereUniqueInput
    /**
     * In case the hsvalidity_products found by the `where` argument doesn't exist, create a new hsvalidity_products with this data.
     */
    create: XOR<hsvalidity_productsCreateInput, hsvalidity_productsUncheckedCreateInput>
    /**
     * In case the hsvalidity_products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<hsvalidity_productsUpdateInput, hsvalidity_productsUncheckedUpdateInput>
  }

  /**
   * hsvalidity_products delete
   */
  export type hsvalidity_productsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsvalidity_products
     */
    select?: hsvalidity_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsvalidity_products
     */
    omit?: hsvalidity_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsvalidity_productsInclude<ExtArgs> | null
    /**
     * Filter which hsvalidity_products to delete.
     */
    where: hsvalidity_productsWhereUniqueInput
  }

  /**
   * hsvalidity_products deleteMany
   */
  export type hsvalidity_productsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hsvalidity_products to delete
     */
    where?: hsvalidity_productsWhereInput
    /**
     * Limit how many hsvalidity_products to delete.
     */
    limit?: number
  }

  /**
   * hsvalidity_products without action
   */
  export type hsvalidity_productsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsvalidity_products
     */
    select?: hsvalidity_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsvalidity_products
     */
    omit?: hsvalidity_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsvalidity_productsInclude<ExtArgs> | null
  }


  /**
   * Model hsvalidity_requests
   */

  export type AggregateHsvalidity_requests = {
    _count: Hsvalidity_requestsCountAggregateOutputType | null
    _avg: Hsvalidity_requestsAvgAggregateOutputType | null
    _sum: Hsvalidity_requestsSumAggregateOutputType | null
    _min: Hsvalidity_requestsMinAggregateOutputType | null
    _max: Hsvalidity_requestsMaxAggregateOutputType | null
  }

  export type Hsvalidity_requestsAvgAggregateOutputType = {
    id: number | null
    branch_id: number | null
    analyst_id: number | null
    conferee_id: number | null
  }

  export type Hsvalidity_requestsSumAggregateOutputType = {
    id: number | null
    branch_id: number | null
    analyst_id: number | null
    conferee_id: number | null
  }

  export type Hsvalidity_requestsMinAggregateOutputType = {
    id: number | null
    branch_id: number | null
    analyst_id: number | null
    conferee_id: number | null
    status: $Enums.hsvalidity_requests_status | null
    created_at: Date | null
    modified_at: Date | null
  }

  export type Hsvalidity_requestsMaxAggregateOutputType = {
    id: number | null
    branch_id: number | null
    analyst_id: number | null
    conferee_id: number | null
    status: $Enums.hsvalidity_requests_status | null
    created_at: Date | null
    modified_at: Date | null
  }

  export type Hsvalidity_requestsCountAggregateOutputType = {
    id: number
    branch_id: number
    analyst_id: number
    conferee_id: number
    status: number
    created_at: number
    modified_at: number
    _all: number
  }


  export type Hsvalidity_requestsAvgAggregateInputType = {
    id?: true
    branch_id?: true
    analyst_id?: true
    conferee_id?: true
  }

  export type Hsvalidity_requestsSumAggregateInputType = {
    id?: true
    branch_id?: true
    analyst_id?: true
    conferee_id?: true
  }

  export type Hsvalidity_requestsMinAggregateInputType = {
    id?: true
    branch_id?: true
    analyst_id?: true
    conferee_id?: true
    status?: true
    created_at?: true
    modified_at?: true
  }

  export type Hsvalidity_requestsMaxAggregateInputType = {
    id?: true
    branch_id?: true
    analyst_id?: true
    conferee_id?: true
    status?: true
    created_at?: true
    modified_at?: true
  }

  export type Hsvalidity_requestsCountAggregateInputType = {
    id?: true
    branch_id?: true
    analyst_id?: true
    conferee_id?: true
    status?: true
    created_at?: true
    modified_at?: true
    _all?: true
  }

  export type Hsvalidity_requestsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hsvalidity_requests to aggregate.
     */
    where?: hsvalidity_requestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hsvalidity_requests to fetch.
     */
    orderBy?: hsvalidity_requestsOrderByWithRelationInput | hsvalidity_requestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: hsvalidity_requestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hsvalidity_requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hsvalidity_requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned hsvalidity_requests
    **/
    _count?: true | Hsvalidity_requestsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Hsvalidity_requestsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Hsvalidity_requestsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Hsvalidity_requestsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Hsvalidity_requestsMaxAggregateInputType
  }

  export type GetHsvalidity_requestsAggregateType<T extends Hsvalidity_requestsAggregateArgs> = {
        [P in keyof T & keyof AggregateHsvalidity_requests]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHsvalidity_requests[P]>
      : GetScalarType<T[P], AggregateHsvalidity_requests[P]>
  }




  export type hsvalidity_requestsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hsvalidity_requestsWhereInput
    orderBy?: hsvalidity_requestsOrderByWithAggregationInput | hsvalidity_requestsOrderByWithAggregationInput[]
    by: Hsvalidity_requestsScalarFieldEnum[] | Hsvalidity_requestsScalarFieldEnum
    having?: hsvalidity_requestsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Hsvalidity_requestsCountAggregateInputType | true
    _avg?: Hsvalidity_requestsAvgAggregateInputType
    _sum?: Hsvalidity_requestsSumAggregateInputType
    _min?: Hsvalidity_requestsMinAggregateInputType
    _max?: Hsvalidity_requestsMaxAggregateInputType
  }

  export type Hsvalidity_requestsGroupByOutputType = {
    id: number
    branch_id: number
    analyst_id: number
    conferee_id: number
    status: $Enums.hsvalidity_requests_status
    created_at: Date
    modified_at: Date
    _count: Hsvalidity_requestsCountAggregateOutputType | null
    _avg: Hsvalidity_requestsAvgAggregateOutputType | null
    _sum: Hsvalidity_requestsSumAggregateOutputType | null
    _min: Hsvalidity_requestsMinAggregateOutputType | null
    _max: Hsvalidity_requestsMaxAggregateOutputType | null
  }

  type GetHsvalidity_requestsGroupByPayload<T extends hsvalidity_requestsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Hsvalidity_requestsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Hsvalidity_requestsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Hsvalidity_requestsGroupByOutputType[P]>
            : GetScalarType<T[P], Hsvalidity_requestsGroupByOutputType[P]>
        }
      >
    >


  export type hsvalidity_requestsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    branch_id?: boolean
    analyst_id?: boolean
    conferee_id?: boolean
    status?: boolean
    created_at?: boolean
    modified_at?: boolean
    hsvalidities?: boolean | hsvalidity_requests$hsvaliditiesArgs<ExtArgs>
    hsvalidity_request_products?: boolean | hsvalidity_requests$hsvalidity_request_productsArgs<ExtArgs>
    analyst?: boolean | hsemployeesDefaultArgs<ExtArgs>
    hsbranches?: boolean | hsbranchesDefaultArgs<ExtArgs>
    conferee?: boolean | hsemployeesDefaultArgs<ExtArgs>
    _count?: boolean | Hsvalidity_requestsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hsvalidity_requests"]>

  export type hsvalidity_requestsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    branch_id?: boolean
    analyst_id?: boolean
    conferee_id?: boolean
    status?: boolean
    created_at?: boolean
    modified_at?: boolean
    analyst?: boolean | hsemployeesDefaultArgs<ExtArgs>
    hsbranches?: boolean | hsbranchesDefaultArgs<ExtArgs>
    conferee?: boolean | hsemployeesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hsvalidity_requests"]>

  export type hsvalidity_requestsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    branch_id?: boolean
    analyst_id?: boolean
    conferee_id?: boolean
    status?: boolean
    created_at?: boolean
    modified_at?: boolean
    analyst?: boolean | hsemployeesDefaultArgs<ExtArgs>
    hsbranches?: boolean | hsbranchesDefaultArgs<ExtArgs>
    conferee?: boolean | hsemployeesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hsvalidity_requests"]>

  export type hsvalidity_requestsSelectScalar = {
    id?: boolean
    branch_id?: boolean
    analyst_id?: boolean
    conferee_id?: boolean
    status?: boolean
    created_at?: boolean
    modified_at?: boolean
  }

  export type hsvalidity_requestsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "branch_id" | "analyst_id" | "conferee_id" | "status" | "created_at" | "modified_at", ExtArgs["result"]["hsvalidity_requests"]>
  export type hsvalidity_requestsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hsvalidities?: boolean | hsvalidity_requests$hsvaliditiesArgs<ExtArgs>
    hsvalidity_request_products?: boolean | hsvalidity_requests$hsvalidity_request_productsArgs<ExtArgs>
    analyst?: boolean | hsemployeesDefaultArgs<ExtArgs>
    hsbranches?: boolean | hsbranchesDefaultArgs<ExtArgs>
    conferee?: boolean | hsemployeesDefaultArgs<ExtArgs>
    _count?: boolean | Hsvalidity_requestsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type hsvalidity_requestsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    analyst?: boolean | hsemployeesDefaultArgs<ExtArgs>
    hsbranches?: boolean | hsbranchesDefaultArgs<ExtArgs>
    conferee?: boolean | hsemployeesDefaultArgs<ExtArgs>
  }
  export type hsvalidity_requestsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    analyst?: boolean | hsemployeesDefaultArgs<ExtArgs>
    hsbranches?: boolean | hsbranchesDefaultArgs<ExtArgs>
    conferee?: boolean | hsemployeesDefaultArgs<ExtArgs>
  }

  export type $hsvalidity_requestsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "hsvalidity_requests"
    objects: {
      hsvalidities: Prisma.$hsvaliditiesPayload<ExtArgs>[]
      hsvalidity_request_products: Prisma.$hsvalidity_request_productsPayload<ExtArgs>[]
      analyst: Prisma.$hsemployeesPayload<ExtArgs>
      hsbranches: Prisma.$hsbranchesPayload<ExtArgs>
      conferee: Prisma.$hsemployeesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      branch_id: number
      analyst_id: number
      conferee_id: number
      status: $Enums.hsvalidity_requests_status
      created_at: Date
      modified_at: Date
    }, ExtArgs["result"]["hsvalidity_requests"]>
    composites: {}
  }

  type hsvalidity_requestsGetPayload<S extends boolean | null | undefined | hsvalidity_requestsDefaultArgs> = $Result.GetResult<Prisma.$hsvalidity_requestsPayload, S>

  type hsvalidity_requestsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<hsvalidity_requestsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Hsvalidity_requestsCountAggregateInputType | true
    }

  export interface hsvalidity_requestsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['hsvalidity_requests'], meta: { name: 'hsvalidity_requests' } }
    /**
     * Find zero or one Hsvalidity_requests that matches the filter.
     * @param {hsvalidity_requestsFindUniqueArgs} args - Arguments to find a Hsvalidity_requests
     * @example
     * // Get one Hsvalidity_requests
     * const hsvalidity_requests = await prisma.hsvalidity_requests.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends hsvalidity_requestsFindUniqueArgs>(args: SelectSubset<T, hsvalidity_requestsFindUniqueArgs<ExtArgs>>): Prisma__hsvalidity_requestsClient<$Result.GetResult<Prisma.$hsvalidity_requestsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hsvalidity_requests that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {hsvalidity_requestsFindUniqueOrThrowArgs} args - Arguments to find a Hsvalidity_requests
     * @example
     * // Get one Hsvalidity_requests
     * const hsvalidity_requests = await prisma.hsvalidity_requests.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends hsvalidity_requestsFindUniqueOrThrowArgs>(args: SelectSubset<T, hsvalidity_requestsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__hsvalidity_requestsClient<$Result.GetResult<Prisma.$hsvalidity_requestsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hsvalidity_requests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hsvalidity_requestsFindFirstArgs} args - Arguments to find a Hsvalidity_requests
     * @example
     * // Get one Hsvalidity_requests
     * const hsvalidity_requests = await prisma.hsvalidity_requests.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends hsvalidity_requestsFindFirstArgs>(args?: SelectSubset<T, hsvalidity_requestsFindFirstArgs<ExtArgs>>): Prisma__hsvalidity_requestsClient<$Result.GetResult<Prisma.$hsvalidity_requestsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hsvalidity_requests that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hsvalidity_requestsFindFirstOrThrowArgs} args - Arguments to find a Hsvalidity_requests
     * @example
     * // Get one Hsvalidity_requests
     * const hsvalidity_requests = await prisma.hsvalidity_requests.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends hsvalidity_requestsFindFirstOrThrowArgs>(args?: SelectSubset<T, hsvalidity_requestsFindFirstOrThrowArgs<ExtArgs>>): Prisma__hsvalidity_requestsClient<$Result.GetResult<Prisma.$hsvalidity_requestsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hsvalidity_requests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hsvalidity_requestsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hsvalidity_requests
     * const hsvalidity_requests = await prisma.hsvalidity_requests.findMany()
     * 
     * // Get first 10 Hsvalidity_requests
     * const hsvalidity_requests = await prisma.hsvalidity_requests.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hsvalidity_requestsWithIdOnly = await prisma.hsvalidity_requests.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends hsvalidity_requestsFindManyArgs>(args?: SelectSubset<T, hsvalidity_requestsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hsvalidity_requestsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hsvalidity_requests.
     * @param {hsvalidity_requestsCreateArgs} args - Arguments to create a Hsvalidity_requests.
     * @example
     * // Create one Hsvalidity_requests
     * const Hsvalidity_requests = await prisma.hsvalidity_requests.create({
     *   data: {
     *     // ... data to create a Hsvalidity_requests
     *   }
     * })
     * 
     */
    create<T extends hsvalidity_requestsCreateArgs>(args: SelectSubset<T, hsvalidity_requestsCreateArgs<ExtArgs>>): Prisma__hsvalidity_requestsClient<$Result.GetResult<Prisma.$hsvalidity_requestsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hsvalidity_requests.
     * @param {hsvalidity_requestsCreateManyArgs} args - Arguments to create many Hsvalidity_requests.
     * @example
     * // Create many Hsvalidity_requests
     * const hsvalidity_requests = await prisma.hsvalidity_requests.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends hsvalidity_requestsCreateManyArgs>(args?: SelectSubset<T, hsvalidity_requestsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Hsvalidity_requests and returns the data saved in the database.
     * @param {hsvalidity_requestsCreateManyAndReturnArgs} args - Arguments to create many Hsvalidity_requests.
     * @example
     * // Create many Hsvalidity_requests
     * const hsvalidity_requests = await prisma.hsvalidity_requests.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Hsvalidity_requests and only return the `id`
     * const hsvalidity_requestsWithIdOnly = await prisma.hsvalidity_requests.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends hsvalidity_requestsCreateManyAndReturnArgs>(args?: SelectSubset<T, hsvalidity_requestsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hsvalidity_requestsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Hsvalidity_requests.
     * @param {hsvalidity_requestsDeleteArgs} args - Arguments to delete one Hsvalidity_requests.
     * @example
     * // Delete one Hsvalidity_requests
     * const Hsvalidity_requests = await prisma.hsvalidity_requests.delete({
     *   where: {
     *     // ... filter to delete one Hsvalidity_requests
     *   }
     * })
     * 
     */
    delete<T extends hsvalidity_requestsDeleteArgs>(args: SelectSubset<T, hsvalidity_requestsDeleteArgs<ExtArgs>>): Prisma__hsvalidity_requestsClient<$Result.GetResult<Prisma.$hsvalidity_requestsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hsvalidity_requests.
     * @param {hsvalidity_requestsUpdateArgs} args - Arguments to update one Hsvalidity_requests.
     * @example
     * // Update one Hsvalidity_requests
     * const hsvalidity_requests = await prisma.hsvalidity_requests.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends hsvalidity_requestsUpdateArgs>(args: SelectSubset<T, hsvalidity_requestsUpdateArgs<ExtArgs>>): Prisma__hsvalidity_requestsClient<$Result.GetResult<Prisma.$hsvalidity_requestsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hsvalidity_requests.
     * @param {hsvalidity_requestsDeleteManyArgs} args - Arguments to filter Hsvalidity_requests to delete.
     * @example
     * // Delete a few Hsvalidity_requests
     * const { count } = await prisma.hsvalidity_requests.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends hsvalidity_requestsDeleteManyArgs>(args?: SelectSubset<T, hsvalidity_requestsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hsvalidity_requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hsvalidity_requestsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hsvalidity_requests
     * const hsvalidity_requests = await prisma.hsvalidity_requests.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends hsvalidity_requestsUpdateManyArgs>(args: SelectSubset<T, hsvalidity_requestsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hsvalidity_requests and returns the data updated in the database.
     * @param {hsvalidity_requestsUpdateManyAndReturnArgs} args - Arguments to update many Hsvalidity_requests.
     * @example
     * // Update many Hsvalidity_requests
     * const hsvalidity_requests = await prisma.hsvalidity_requests.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Hsvalidity_requests and only return the `id`
     * const hsvalidity_requestsWithIdOnly = await prisma.hsvalidity_requests.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends hsvalidity_requestsUpdateManyAndReturnArgs>(args: SelectSubset<T, hsvalidity_requestsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hsvalidity_requestsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Hsvalidity_requests.
     * @param {hsvalidity_requestsUpsertArgs} args - Arguments to update or create a Hsvalidity_requests.
     * @example
     * // Update or create a Hsvalidity_requests
     * const hsvalidity_requests = await prisma.hsvalidity_requests.upsert({
     *   create: {
     *     // ... data to create a Hsvalidity_requests
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hsvalidity_requests we want to update
     *   }
     * })
     */
    upsert<T extends hsvalidity_requestsUpsertArgs>(args: SelectSubset<T, hsvalidity_requestsUpsertArgs<ExtArgs>>): Prisma__hsvalidity_requestsClient<$Result.GetResult<Prisma.$hsvalidity_requestsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Hsvalidity_requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hsvalidity_requestsCountArgs} args - Arguments to filter Hsvalidity_requests to count.
     * @example
     * // Count the number of Hsvalidity_requests
     * const count = await prisma.hsvalidity_requests.count({
     *   where: {
     *     // ... the filter for the Hsvalidity_requests we want to count
     *   }
     * })
    **/
    count<T extends hsvalidity_requestsCountArgs>(
      args?: Subset<T, hsvalidity_requestsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Hsvalidity_requestsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hsvalidity_requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Hsvalidity_requestsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Hsvalidity_requestsAggregateArgs>(args: Subset<T, Hsvalidity_requestsAggregateArgs>): Prisma.PrismaPromise<GetHsvalidity_requestsAggregateType<T>>

    /**
     * Group by Hsvalidity_requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hsvalidity_requestsGroupByArgs} args - Group by arguments.
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
      T extends hsvalidity_requestsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: hsvalidity_requestsGroupByArgs['orderBy'] }
        : { orderBy?: hsvalidity_requestsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, hsvalidity_requestsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHsvalidity_requestsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the hsvalidity_requests model
   */
  readonly fields: hsvalidity_requestsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for hsvalidity_requests.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__hsvalidity_requestsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hsvalidities<T extends hsvalidity_requests$hsvaliditiesArgs<ExtArgs> = {}>(args?: Subset<T, hsvalidity_requests$hsvaliditiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hsvaliditiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    hsvalidity_request_products<T extends hsvalidity_requests$hsvalidity_request_productsArgs<ExtArgs> = {}>(args?: Subset<T, hsvalidity_requests$hsvalidity_request_productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hsvalidity_request_productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    analyst<T extends hsemployeesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, hsemployeesDefaultArgs<ExtArgs>>): Prisma__hsemployeesClient<$Result.GetResult<Prisma.$hsemployeesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    hsbranches<T extends hsbranchesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, hsbranchesDefaultArgs<ExtArgs>>): Prisma__hsbranchesClient<$Result.GetResult<Prisma.$hsbranchesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    conferee<T extends hsemployeesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, hsemployeesDefaultArgs<ExtArgs>>): Prisma__hsemployeesClient<$Result.GetResult<Prisma.$hsemployeesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the hsvalidity_requests model
   */
  interface hsvalidity_requestsFieldRefs {
    readonly id: FieldRef<"hsvalidity_requests", 'Int'>
    readonly branch_id: FieldRef<"hsvalidity_requests", 'Int'>
    readonly analyst_id: FieldRef<"hsvalidity_requests", 'Int'>
    readonly conferee_id: FieldRef<"hsvalidity_requests", 'Int'>
    readonly status: FieldRef<"hsvalidity_requests", 'hsvalidity_requests_status'>
    readonly created_at: FieldRef<"hsvalidity_requests", 'DateTime'>
    readonly modified_at: FieldRef<"hsvalidity_requests", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * hsvalidity_requests findUnique
   */
  export type hsvalidity_requestsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsvalidity_requests
     */
    select?: hsvalidity_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsvalidity_requests
     */
    omit?: hsvalidity_requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsvalidity_requestsInclude<ExtArgs> | null
    /**
     * Filter, which hsvalidity_requests to fetch.
     */
    where: hsvalidity_requestsWhereUniqueInput
  }

  /**
   * hsvalidity_requests findUniqueOrThrow
   */
  export type hsvalidity_requestsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsvalidity_requests
     */
    select?: hsvalidity_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsvalidity_requests
     */
    omit?: hsvalidity_requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsvalidity_requestsInclude<ExtArgs> | null
    /**
     * Filter, which hsvalidity_requests to fetch.
     */
    where: hsvalidity_requestsWhereUniqueInput
  }

  /**
   * hsvalidity_requests findFirst
   */
  export type hsvalidity_requestsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsvalidity_requests
     */
    select?: hsvalidity_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsvalidity_requests
     */
    omit?: hsvalidity_requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsvalidity_requestsInclude<ExtArgs> | null
    /**
     * Filter, which hsvalidity_requests to fetch.
     */
    where?: hsvalidity_requestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hsvalidity_requests to fetch.
     */
    orderBy?: hsvalidity_requestsOrderByWithRelationInput | hsvalidity_requestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hsvalidity_requests.
     */
    cursor?: hsvalidity_requestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hsvalidity_requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hsvalidity_requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hsvalidity_requests.
     */
    distinct?: Hsvalidity_requestsScalarFieldEnum | Hsvalidity_requestsScalarFieldEnum[]
  }

  /**
   * hsvalidity_requests findFirstOrThrow
   */
  export type hsvalidity_requestsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsvalidity_requests
     */
    select?: hsvalidity_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsvalidity_requests
     */
    omit?: hsvalidity_requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsvalidity_requestsInclude<ExtArgs> | null
    /**
     * Filter, which hsvalidity_requests to fetch.
     */
    where?: hsvalidity_requestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hsvalidity_requests to fetch.
     */
    orderBy?: hsvalidity_requestsOrderByWithRelationInput | hsvalidity_requestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hsvalidity_requests.
     */
    cursor?: hsvalidity_requestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hsvalidity_requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hsvalidity_requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hsvalidity_requests.
     */
    distinct?: Hsvalidity_requestsScalarFieldEnum | Hsvalidity_requestsScalarFieldEnum[]
  }

  /**
   * hsvalidity_requests findMany
   */
  export type hsvalidity_requestsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsvalidity_requests
     */
    select?: hsvalidity_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsvalidity_requests
     */
    omit?: hsvalidity_requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsvalidity_requestsInclude<ExtArgs> | null
    /**
     * Filter, which hsvalidity_requests to fetch.
     */
    where?: hsvalidity_requestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hsvalidity_requests to fetch.
     */
    orderBy?: hsvalidity_requestsOrderByWithRelationInput | hsvalidity_requestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing hsvalidity_requests.
     */
    cursor?: hsvalidity_requestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hsvalidity_requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hsvalidity_requests.
     */
    skip?: number
    distinct?: Hsvalidity_requestsScalarFieldEnum | Hsvalidity_requestsScalarFieldEnum[]
  }

  /**
   * hsvalidity_requests create
   */
  export type hsvalidity_requestsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsvalidity_requests
     */
    select?: hsvalidity_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsvalidity_requests
     */
    omit?: hsvalidity_requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsvalidity_requestsInclude<ExtArgs> | null
    /**
     * The data needed to create a hsvalidity_requests.
     */
    data: XOR<hsvalidity_requestsCreateInput, hsvalidity_requestsUncheckedCreateInput>
  }

  /**
   * hsvalidity_requests createMany
   */
  export type hsvalidity_requestsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many hsvalidity_requests.
     */
    data: hsvalidity_requestsCreateManyInput | hsvalidity_requestsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * hsvalidity_requests createManyAndReturn
   */
  export type hsvalidity_requestsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsvalidity_requests
     */
    select?: hsvalidity_requestsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the hsvalidity_requests
     */
    omit?: hsvalidity_requestsOmit<ExtArgs> | null
    /**
     * The data used to create many hsvalidity_requests.
     */
    data: hsvalidity_requestsCreateManyInput | hsvalidity_requestsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsvalidity_requestsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * hsvalidity_requests update
   */
  export type hsvalidity_requestsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsvalidity_requests
     */
    select?: hsvalidity_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsvalidity_requests
     */
    omit?: hsvalidity_requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsvalidity_requestsInclude<ExtArgs> | null
    /**
     * The data needed to update a hsvalidity_requests.
     */
    data: XOR<hsvalidity_requestsUpdateInput, hsvalidity_requestsUncheckedUpdateInput>
    /**
     * Choose, which hsvalidity_requests to update.
     */
    where: hsvalidity_requestsWhereUniqueInput
  }

  /**
   * hsvalidity_requests updateMany
   */
  export type hsvalidity_requestsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update hsvalidity_requests.
     */
    data: XOR<hsvalidity_requestsUpdateManyMutationInput, hsvalidity_requestsUncheckedUpdateManyInput>
    /**
     * Filter which hsvalidity_requests to update
     */
    where?: hsvalidity_requestsWhereInput
    /**
     * Limit how many hsvalidity_requests to update.
     */
    limit?: number
  }

  /**
   * hsvalidity_requests updateManyAndReturn
   */
  export type hsvalidity_requestsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsvalidity_requests
     */
    select?: hsvalidity_requestsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the hsvalidity_requests
     */
    omit?: hsvalidity_requestsOmit<ExtArgs> | null
    /**
     * The data used to update hsvalidity_requests.
     */
    data: XOR<hsvalidity_requestsUpdateManyMutationInput, hsvalidity_requestsUncheckedUpdateManyInput>
    /**
     * Filter which hsvalidity_requests to update
     */
    where?: hsvalidity_requestsWhereInput
    /**
     * Limit how many hsvalidity_requests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsvalidity_requestsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * hsvalidity_requests upsert
   */
  export type hsvalidity_requestsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsvalidity_requests
     */
    select?: hsvalidity_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsvalidity_requests
     */
    omit?: hsvalidity_requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsvalidity_requestsInclude<ExtArgs> | null
    /**
     * The filter to search for the hsvalidity_requests to update in case it exists.
     */
    where: hsvalidity_requestsWhereUniqueInput
    /**
     * In case the hsvalidity_requests found by the `where` argument doesn't exist, create a new hsvalidity_requests with this data.
     */
    create: XOR<hsvalidity_requestsCreateInput, hsvalidity_requestsUncheckedCreateInput>
    /**
     * In case the hsvalidity_requests was found with the provided `where` argument, update it with this data.
     */
    update: XOR<hsvalidity_requestsUpdateInput, hsvalidity_requestsUncheckedUpdateInput>
  }

  /**
   * hsvalidity_requests delete
   */
  export type hsvalidity_requestsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsvalidity_requests
     */
    select?: hsvalidity_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsvalidity_requests
     */
    omit?: hsvalidity_requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsvalidity_requestsInclude<ExtArgs> | null
    /**
     * Filter which hsvalidity_requests to delete.
     */
    where: hsvalidity_requestsWhereUniqueInput
  }

  /**
   * hsvalidity_requests deleteMany
   */
  export type hsvalidity_requestsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hsvalidity_requests to delete
     */
    where?: hsvalidity_requestsWhereInput
    /**
     * Limit how many hsvalidity_requests to delete.
     */
    limit?: number
  }

  /**
   * hsvalidity_requests.hsvalidities
   */
  export type hsvalidity_requests$hsvaliditiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsvalidities
     */
    select?: hsvaliditiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsvalidities
     */
    omit?: hsvaliditiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsvaliditiesInclude<ExtArgs> | null
    where?: hsvaliditiesWhereInput
    orderBy?: hsvaliditiesOrderByWithRelationInput | hsvaliditiesOrderByWithRelationInput[]
    cursor?: hsvaliditiesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HsvaliditiesScalarFieldEnum | HsvaliditiesScalarFieldEnum[]
  }

  /**
   * hsvalidity_requests.hsvalidity_request_products
   */
  export type hsvalidity_requests$hsvalidity_request_productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsvalidity_request_products
     */
    select?: hsvalidity_request_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsvalidity_request_products
     */
    omit?: hsvalidity_request_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsvalidity_request_productsInclude<ExtArgs> | null
    where?: hsvalidity_request_productsWhereInput
    orderBy?: hsvalidity_request_productsOrderByWithRelationInput | hsvalidity_request_productsOrderByWithRelationInput[]
    cursor?: hsvalidity_request_productsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Hsvalidity_request_productsScalarFieldEnum | Hsvalidity_request_productsScalarFieldEnum[]
  }

  /**
   * hsvalidity_requests without action
   */
  export type hsvalidity_requestsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsvalidity_requests
     */
    select?: hsvalidity_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsvalidity_requests
     */
    omit?: hsvalidity_requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsvalidity_requestsInclude<ExtArgs> | null
  }


  /**
   * Model hsvalidity_request_products
   */

  export type AggregateHsvalidity_request_products = {
    _count: Hsvalidity_request_productsCountAggregateOutputType | null
    _avg: Hsvalidity_request_productsAvgAggregateOutputType | null
    _sum: Hsvalidity_request_productsSumAggregateOutputType | null
    _min: Hsvalidity_request_productsMinAggregateOutputType | null
    _max: Hsvalidity_request_productsMaxAggregateOutputType | null
  }

  export type Hsvalidity_request_productsAvgAggregateOutputType = {
    id: number | null
    request_id: number | null
    product_cod: number | null
  }

  export type Hsvalidity_request_productsSumAggregateOutputType = {
    id: number | null
    request_id: number | null
    product_cod: number | null
  }

  export type Hsvalidity_request_productsMinAggregateOutputType = {
    id: number | null
    request_id: number | null
    status: $Enums.hsvalidity_request_products_status | null
    product_cod: number | null
    validity_date: Date | null
    auxiliary_code: string | null
  }

  export type Hsvalidity_request_productsMaxAggregateOutputType = {
    id: number | null
    request_id: number | null
    status: $Enums.hsvalidity_request_products_status | null
    product_cod: number | null
    validity_date: Date | null
    auxiliary_code: string | null
  }

  export type Hsvalidity_request_productsCountAggregateOutputType = {
    id: number
    request_id: number
    status: number
    product_cod: number
    validity_date: number
    auxiliary_code: number
    _all: number
  }


  export type Hsvalidity_request_productsAvgAggregateInputType = {
    id?: true
    request_id?: true
    product_cod?: true
  }

  export type Hsvalidity_request_productsSumAggregateInputType = {
    id?: true
    request_id?: true
    product_cod?: true
  }

  export type Hsvalidity_request_productsMinAggregateInputType = {
    id?: true
    request_id?: true
    status?: true
    product_cod?: true
    validity_date?: true
    auxiliary_code?: true
  }

  export type Hsvalidity_request_productsMaxAggregateInputType = {
    id?: true
    request_id?: true
    status?: true
    product_cod?: true
    validity_date?: true
    auxiliary_code?: true
  }

  export type Hsvalidity_request_productsCountAggregateInputType = {
    id?: true
    request_id?: true
    status?: true
    product_cod?: true
    validity_date?: true
    auxiliary_code?: true
    _all?: true
  }

  export type Hsvalidity_request_productsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hsvalidity_request_products to aggregate.
     */
    where?: hsvalidity_request_productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hsvalidity_request_products to fetch.
     */
    orderBy?: hsvalidity_request_productsOrderByWithRelationInput | hsvalidity_request_productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: hsvalidity_request_productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hsvalidity_request_products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hsvalidity_request_products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned hsvalidity_request_products
    **/
    _count?: true | Hsvalidity_request_productsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Hsvalidity_request_productsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Hsvalidity_request_productsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Hsvalidity_request_productsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Hsvalidity_request_productsMaxAggregateInputType
  }

  export type GetHsvalidity_request_productsAggregateType<T extends Hsvalidity_request_productsAggregateArgs> = {
        [P in keyof T & keyof AggregateHsvalidity_request_products]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHsvalidity_request_products[P]>
      : GetScalarType<T[P], AggregateHsvalidity_request_products[P]>
  }




  export type hsvalidity_request_productsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hsvalidity_request_productsWhereInput
    orderBy?: hsvalidity_request_productsOrderByWithAggregationInput | hsvalidity_request_productsOrderByWithAggregationInput[]
    by: Hsvalidity_request_productsScalarFieldEnum[] | Hsvalidity_request_productsScalarFieldEnum
    having?: hsvalidity_request_productsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Hsvalidity_request_productsCountAggregateInputType | true
    _avg?: Hsvalidity_request_productsAvgAggregateInputType
    _sum?: Hsvalidity_request_productsSumAggregateInputType
    _min?: Hsvalidity_request_productsMinAggregateInputType
    _max?: Hsvalidity_request_productsMaxAggregateInputType
  }

  export type Hsvalidity_request_productsGroupByOutputType = {
    id: number
    request_id: number
    status: $Enums.hsvalidity_request_products_status
    product_cod: number
    validity_date: Date
    auxiliary_code: string
    _count: Hsvalidity_request_productsCountAggregateOutputType | null
    _avg: Hsvalidity_request_productsAvgAggregateOutputType | null
    _sum: Hsvalidity_request_productsSumAggregateOutputType | null
    _min: Hsvalidity_request_productsMinAggregateOutputType | null
    _max: Hsvalidity_request_productsMaxAggregateOutputType | null
  }

  type GetHsvalidity_request_productsGroupByPayload<T extends hsvalidity_request_productsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Hsvalidity_request_productsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Hsvalidity_request_productsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Hsvalidity_request_productsGroupByOutputType[P]>
            : GetScalarType<T[P], Hsvalidity_request_productsGroupByOutputType[P]>
        }
      >
    >


  export type hsvalidity_request_productsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    request_id?: boolean
    status?: boolean
    product_cod?: boolean
    validity_date?: boolean
    auxiliary_code?: boolean
    hsvalidity_requests?: boolean | hsvalidity_requestsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hsvalidity_request_products"]>

  export type hsvalidity_request_productsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    request_id?: boolean
    status?: boolean
    product_cod?: boolean
    validity_date?: boolean
    auxiliary_code?: boolean
    hsvalidity_requests?: boolean | hsvalidity_requestsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hsvalidity_request_products"]>

  export type hsvalidity_request_productsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    request_id?: boolean
    status?: boolean
    product_cod?: boolean
    validity_date?: boolean
    auxiliary_code?: boolean
    hsvalidity_requests?: boolean | hsvalidity_requestsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hsvalidity_request_products"]>

  export type hsvalidity_request_productsSelectScalar = {
    id?: boolean
    request_id?: boolean
    status?: boolean
    product_cod?: boolean
    validity_date?: boolean
    auxiliary_code?: boolean
  }

  export type hsvalidity_request_productsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "request_id" | "status" | "product_cod" | "validity_date" | "auxiliary_code", ExtArgs["result"]["hsvalidity_request_products"]>
  export type hsvalidity_request_productsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hsvalidity_requests?: boolean | hsvalidity_requestsDefaultArgs<ExtArgs>
  }
  export type hsvalidity_request_productsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hsvalidity_requests?: boolean | hsvalidity_requestsDefaultArgs<ExtArgs>
  }
  export type hsvalidity_request_productsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hsvalidity_requests?: boolean | hsvalidity_requestsDefaultArgs<ExtArgs>
  }

  export type $hsvalidity_request_productsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "hsvalidity_request_products"
    objects: {
      hsvalidity_requests: Prisma.$hsvalidity_requestsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      request_id: number
      status: $Enums.hsvalidity_request_products_status
      product_cod: number
      validity_date: Date
      auxiliary_code: string
    }, ExtArgs["result"]["hsvalidity_request_products"]>
    composites: {}
  }

  type hsvalidity_request_productsGetPayload<S extends boolean | null | undefined | hsvalidity_request_productsDefaultArgs> = $Result.GetResult<Prisma.$hsvalidity_request_productsPayload, S>

  type hsvalidity_request_productsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<hsvalidity_request_productsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Hsvalidity_request_productsCountAggregateInputType | true
    }

  export interface hsvalidity_request_productsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['hsvalidity_request_products'], meta: { name: 'hsvalidity_request_products' } }
    /**
     * Find zero or one Hsvalidity_request_products that matches the filter.
     * @param {hsvalidity_request_productsFindUniqueArgs} args - Arguments to find a Hsvalidity_request_products
     * @example
     * // Get one Hsvalidity_request_products
     * const hsvalidity_request_products = await prisma.hsvalidity_request_products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends hsvalidity_request_productsFindUniqueArgs>(args: SelectSubset<T, hsvalidity_request_productsFindUniqueArgs<ExtArgs>>): Prisma__hsvalidity_request_productsClient<$Result.GetResult<Prisma.$hsvalidity_request_productsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hsvalidity_request_products that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {hsvalidity_request_productsFindUniqueOrThrowArgs} args - Arguments to find a Hsvalidity_request_products
     * @example
     * // Get one Hsvalidity_request_products
     * const hsvalidity_request_products = await prisma.hsvalidity_request_products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends hsvalidity_request_productsFindUniqueOrThrowArgs>(args: SelectSubset<T, hsvalidity_request_productsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__hsvalidity_request_productsClient<$Result.GetResult<Prisma.$hsvalidity_request_productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hsvalidity_request_products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hsvalidity_request_productsFindFirstArgs} args - Arguments to find a Hsvalidity_request_products
     * @example
     * // Get one Hsvalidity_request_products
     * const hsvalidity_request_products = await prisma.hsvalidity_request_products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends hsvalidity_request_productsFindFirstArgs>(args?: SelectSubset<T, hsvalidity_request_productsFindFirstArgs<ExtArgs>>): Prisma__hsvalidity_request_productsClient<$Result.GetResult<Prisma.$hsvalidity_request_productsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hsvalidity_request_products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hsvalidity_request_productsFindFirstOrThrowArgs} args - Arguments to find a Hsvalidity_request_products
     * @example
     * // Get one Hsvalidity_request_products
     * const hsvalidity_request_products = await prisma.hsvalidity_request_products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends hsvalidity_request_productsFindFirstOrThrowArgs>(args?: SelectSubset<T, hsvalidity_request_productsFindFirstOrThrowArgs<ExtArgs>>): Prisma__hsvalidity_request_productsClient<$Result.GetResult<Prisma.$hsvalidity_request_productsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hsvalidity_request_products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hsvalidity_request_productsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hsvalidity_request_products
     * const hsvalidity_request_products = await prisma.hsvalidity_request_products.findMany()
     * 
     * // Get first 10 Hsvalidity_request_products
     * const hsvalidity_request_products = await prisma.hsvalidity_request_products.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hsvalidity_request_productsWithIdOnly = await prisma.hsvalidity_request_products.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends hsvalidity_request_productsFindManyArgs>(args?: SelectSubset<T, hsvalidity_request_productsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hsvalidity_request_productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hsvalidity_request_products.
     * @param {hsvalidity_request_productsCreateArgs} args - Arguments to create a Hsvalidity_request_products.
     * @example
     * // Create one Hsvalidity_request_products
     * const Hsvalidity_request_products = await prisma.hsvalidity_request_products.create({
     *   data: {
     *     // ... data to create a Hsvalidity_request_products
     *   }
     * })
     * 
     */
    create<T extends hsvalidity_request_productsCreateArgs>(args: SelectSubset<T, hsvalidity_request_productsCreateArgs<ExtArgs>>): Prisma__hsvalidity_request_productsClient<$Result.GetResult<Prisma.$hsvalidity_request_productsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hsvalidity_request_products.
     * @param {hsvalidity_request_productsCreateManyArgs} args - Arguments to create many Hsvalidity_request_products.
     * @example
     * // Create many Hsvalidity_request_products
     * const hsvalidity_request_products = await prisma.hsvalidity_request_products.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends hsvalidity_request_productsCreateManyArgs>(args?: SelectSubset<T, hsvalidity_request_productsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Hsvalidity_request_products and returns the data saved in the database.
     * @param {hsvalidity_request_productsCreateManyAndReturnArgs} args - Arguments to create many Hsvalidity_request_products.
     * @example
     * // Create many Hsvalidity_request_products
     * const hsvalidity_request_products = await prisma.hsvalidity_request_products.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Hsvalidity_request_products and only return the `id`
     * const hsvalidity_request_productsWithIdOnly = await prisma.hsvalidity_request_products.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends hsvalidity_request_productsCreateManyAndReturnArgs>(args?: SelectSubset<T, hsvalidity_request_productsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hsvalidity_request_productsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Hsvalidity_request_products.
     * @param {hsvalidity_request_productsDeleteArgs} args - Arguments to delete one Hsvalidity_request_products.
     * @example
     * // Delete one Hsvalidity_request_products
     * const Hsvalidity_request_products = await prisma.hsvalidity_request_products.delete({
     *   where: {
     *     // ... filter to delete one Hsvalidity_request_products
     *   }
     * })
     * 
     */
    delete<T extends hsvalidity_request_productsDeleteArgs>(args: SelectSubset<T, hsvalidity_request_productsDeleteArgs<ExtArgs>>): Prisma__hsvalidity_request_productsClient<$Result.GetResult<Prisma.$hsvalidity_request_productsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hsvalidity_request_products.
     * @param {hsvalidity_request_productsUpdateArgs} args - Arguments to update one Hsvalidity_request_products.
     * @example
     * // Update one Hsvalidity_request_products
     * const hsvalidity_request_products = await prisma.hsvalidity_request_products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends hsvalidity_request_productsUpdateArgs>(args: SelectSubset<T, hsvalidity_request_productsUpdateArgs<ExtArgs>>): Prisma__hsvalidity_request_productsClient<$Result.GetResult<Prisma.$hsvalidity_request_productsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hsvalidity_request_products.
     * @param {hsvalidity_request_productsDeleteManyArgs} args - Arguments to filter Hsvalidity_request_products to delete.
     * @example
     * // Delete a few Hsvalidity_request_products
     * const { count } = await prisma.hsvalidity_request_products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends hsvalidity_request_productsDeleteManyArgs>(args?: SelectSubset<T, hsvalidity_request_productsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hsvalidity_request_products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hsvalidity_request_productsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hsvalidity_request_products
     * const hsvalidity_request_products = await prisma.hsvalidity_request_products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends hsvalidity_request_productsUpdateManyArgs>(args: SelectSubset<T, hsvalidity_request_productsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hsvalidity_request_products and returns the data updated in the database.
     * @param {hsvalidity_request_productsUpdateManyAndReturnArgs} args - Arguments to update many Hsvalidity_request_products.
     * @example
     * // Update many Hsvalidity_request_products
     * const hsvalidity_request_products = await prisma.hsvalidity_request_products.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Hsvalidity_request_products and only return the `id`
     * const hsvalidity_request_productsWithIdOnly = await prisma.hsvalidity_request_products.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends hsvalidity_request_productsUpdateManyAndReturnArgs>(args: SelectSubset<T, hsvalidity_request_productsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hsvalidity_request_productsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Hsvalidity_request_products.
     * @param {hsvalidity_request_productsUpsertArgs} args - Arguments to update or create a Hsvalidity_request_products.
     * @example
     * // Update or create a Hsvalidity_request_products
     * const hsvalidity_request_products = await prisma.hsvalidity_request_products.upsert({
     *   create: {
     *     // ... data to create a Hsvalidity_request_products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hsvalidity_request_products we want to update
     *   }
     * })
     */
    upsert<T extends hsvalidity_request_productsUpsertArgs>(args: SelectSubset<T, hsvalidity_request_productsUpsertArgs<ExtArgs>>): Prisma__hsvalidity_request_productsClient<$Result.GetResult<Prisma.$hsvalidity_request_productsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Hsvalidity_request_products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hsvalidity_request_productsCountArgs} args - Arguments to filter Hsvalidity_request_products to count.
     * @example
     * // Count the number of Hsvalidity_request_products
     * const count = await prisma.hsvalidity_request_products.count({
     *   where: {
     *     // ... the filter for the Hsvalidity_request_products we want to count
     *   }
     * })
    **/
    count<T extends hsvalidity_request_productsCountArgs>(
      args?: Subset<T, hsvalidity_request_productsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Hsvalidity_request_productsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hsvalidity_request_products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Hsvalidity_request_productsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Hsvalidity_request_productsAggregateArgs>(args: Subset<T, Hsvalidity_request_productsAggregateArgs>): Prisma.PrismaPromise<GetHsvalidity_request_productsAggregateType<T>>

    /**
     * Group by Hsvalidity_request_products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hsvalidity_request_productsGroupByArgs} args - Group by arguments.
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
      T extends hsvalidity_request_productsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: hsvalidity_request_productsGroupByArgs['orderBy'] }
        : { orderBy?: hsvalidity_request_productsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, hsvalidity_request_productsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHsvalidity_request_productsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the hsvalidity_request_products model
   */
  readonly fields: hsvalidity_request_productsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for hsvalidity_request_products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__hsvalidity_request_productsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hsvalidity_requests<T extends hsvalidity_requestsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, hsvalidity_requestsDefaultArgs<ExtArgs>>): Prisma__hsvalidity_requestsClient<$Result.GetResult<Prisma.$hsvalidity_requestsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the hsvalidity_request_products model
   */
  interface hsvalidity_request_productsFieldRefs {
    readonly id: FieldRef<"hsvalidity_request_products", 'Int'>
    readonly request_id: FieldRef<"hsvalidity_request_products", 'Int'>
    readonly status: FieldRef<"hsvalidity_request_products", 'hsvalidity_request_products_status'>
    readonly product_cod: FieldRef<"hsvalidity_request_products", 'Int'>
    readonly validity_date: FieldRef<"hsvalidity_request_products", 'DateTime'>
    readonly auxiliary_code: FieldRef<"hsvalidity_request_products", 'String'>
  }
    

  // Custom InputTypes
  /**
   * hsvalidity_request_products findUnique
   */
  export type hsvalidity_request_productsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsvalidity_request_products
     */
    select?: hsvalidity_request_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsvalidity_request_products
     */
    omit?: hsvalidity_request_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsvalidity_request_productsInclude<ExtArgs> | null
    /**
     * Filter, which hsvalidity_request_products to fetch.
     */
    where: hsvalidity_request_productsWhereUniqueInput
  }

  /**
   * hsvalidity_request_products findUniqueOrThrow
   */
  export type hsvalidity_request_productsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsvalidity_request_products
     */
    select?: hsvalidity_request_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsvalidity_request_products
     */
    omit?: hsvalidity_request_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsvalidity_request_productsInclude<ExtArgs> | null
    /**
     * Filter, which hsvalidity_request_products to fetch.
     */
    where: hsvalidity_request_productsWhereUniqueInput
  }

  /**
   * hsvalidity_request_products findFirst
   */
  export type hsvalidity_request_productsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsvalidity_request_products
     */
    select?: hsvalidity_request_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsvalidity_request_products
     */
    omit?: hsvalidity_request_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsvalidity_request_productsInclude<ExtArgs> | null
    /**
     * Filter, which hsvalidity_request_products to fetch.
     */
    where?: hsvalidity_request_productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hsvalidity_request_products to fetch.
     */
    orderBy?: hsvalidity_request_productsOrderByWithRelationInput | hsvalidity_request_productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hsvalidity_request_products.
     */
    cursor?: hsvalidity_request_productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hsvalidity_request_products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hsvalidity_request_products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hsvalidity_request_products.
     */
    distinct?: Hsvalidity_request_productsScalarFieldEnum | Hsvalidity_request_productsScalarFieldEnum[]
  }

  /**
   * hsvalidity_request_products findFirstOrThrow
   */
  export type hsvalidity_request_productsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsvalidity_request_products
     */
    select?: hsvalidity_request_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsvalidity_request_products
     */
    omit?: hsvalidity_request_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsvalidity_request_productsInclude<ExtArgs> | null
    /**
     * Filter, which hsvalidity_request_products to fetch.
     */
    where?: hsvalidity_request_productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hsvalidity_request_products to fetch.
     */
    orderBy?: hsvalidity_request_productsOrderByWithRelationInput | hsvalidity_request_productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hsvalidity_request_products.
     */
    cursor?: hsvalidity_request_productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hsvalidity_request_products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hsvalidity_request_products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hsvalidity_request_products.
     */
    distinct?: Hsvalidity_request_productsScalarFieldEnum | Hsvalidity_request_productsScalarFieldEnum[]
  }

  /**
   * hsvalidity_request_products findMany
   */
  export type hsvalidity_request_productsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsvalidity_request_products
     */
    select?: hsvalidity_request_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsvalidity_request_products
     */
    omit?: hsvalidity_request_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsvalidity_request_productsInclude<ExtArgs> | null
    /**
     * Filter, which hsvalidity_request_products to fetch.
     */
    where?: hsvalidity_request_productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hsvalidity_request_products to fetch.
     */
    orderBy?: hsvalidity_request_productsOrderByWithRelationInput | hsvalidity_request_productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing hsvalidity_request_products.
     */
    cursor?: hsvalidity_request_productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hsvalidity_request_products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hsvalidity_request_products.
     */
    skip?: number
    distinct?: Hsvalidity_request_productsScalarFieldEnum | Hsvalidity_request_productsScalarFieldEnum[]
  }

  /**
   * hsvalidity_request_products create
   */
  export type hsvalidity_request_productsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsvalidity_request_products
     */
    select?: hsvalidity_request_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsvalidity_request_products
     */
    omit?: hsvalidity_request_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsvalidity_request_productsInclude<ExtArgs> | null
    /**
     * The data needed to create a hsvalidity_request_products.
     */
    data: XOR<hsvalidity_request_productsCreateInput, hsvalidity_request_productsUncheckedCreateInput>
  }

  /**
   * hsvalidity_request_products createMany
   */
  export type hsvalidity_request_productsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many hsvalidity_request_products.
     */
    data: hsvalidity_request_productsCreateManyInput | hsvalidity_request_productsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * hsvalidity_request_products createManyAndReturn
   */
  export type hsvalidity_request_productsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsvalidity_request_products
     */
    select?: hsvalidity_request_productsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the hsvalidity_request_products
     */
    omit?: hsvalidity_request_productsOmit<ExtArgs> | null
    /**
     * The data used to create many hsvalidity_request_products.
     */
    data: hsvalidity_request_productsCreateManyInput | hsvalidity_request_productsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsvalidity_request_productsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * hsvalidity_request_products update
   */
  export type hsvalidity_request_productsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsvalidity_request_products
     */
    select?: hsvalidity_request_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsvalidity_request_products
     */
    omit?: hsvalidity_request_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsvalidity_request_productsInclude<ExtArgs> | null
    /**
     * The data needed to update a hsvalidity_request_products.
     */
    data: XOR<hsvalidity_request_productsUpdateInput, hsvalidity_request_productsUncheckedUpdateInput>
    /**
     * Choose, which hsvalidity_request_products to update.
     */
    where: hsvalidity_request_productsWhereUniqueInput
  }

  /**
   * hsvalidity_request_products updateMany
   */
  export type hsvalidity_request_productsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update hsvalidity_request_products.
     */
    data: XOR<hsvalidity_request_productsUpdateManyMutationInput, hsvalidity_request_productsUncheckedUpdateManyInput>
    /**
     * Filter which hsvalidity_request_products to update
     */
    where?: hsvalidity_request_productsWhereInput
    /**
     * Limit how many hsvalidity_request_products to update.
     */
    limit?: number
  }

  /**
   * hsvalidity_request_products updateManyAndReturn
   */
  export type hsvalidity_request_productsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsvalidity_request_products
     */
    select?: hsvalidity_request_productsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the hsvalidity_request_products
     */
    omit?: hsvalidity_request_productsOmit<ExtArgs> | null
    /**
     * The data used to update hsvalidity_request_products.
     */
    data: XOR<hsvalidity_request_productsUpdateManyMutationInput, hsvalidity_request_productsUncheckedUpdateManyInput>
    /**
     * Filter which hsvalidity_request_products to update
     */
    where?: hsvalidity_request_productsWhereInput
    /**
     * Limit how many hsvalidity_request_products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsvalidity_request_productsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * hsvalidity_request_products upsert
   */
  export type hsvalidity_request_productsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsvalidity_request_products
     */
    select?: hsvalidity_request_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsvalidity_request_products
     */
    omit?: hsvalidity_request_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsvalidity_request_productsInclude<ExtArgs> | null
    /**
     * The filter to search for the hsvalidity_request_products to update in case it exists.
     */
    where: hsvalidity_request_productsWhereUniqueInput
    /**
     * In case the hsvalidity_request_products found by the `where` argument doesn't exist, create a new hsvalidity_request_products with this data.
     */
    create: XOR<hsvalidity_request_productsCreateInput, hsvalidity_request_productsUncheckedCreateInput>
    /**
     * In case the hsvalidity_request_products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<hsvalidity_request_productsUpdateInput, hsvalidity_request_productsUncheckedUpdateInput>
  }

  /**
   * hsvalidity_request_products delete
   */
  export type hsvalidity_request_productsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsvalidity_request_products
     */
    select?: hsvalidity_request_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsvalidity_request_products
     */
    omit?: hsvalidity_request_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsvalidity_request_productsInclude<ExtArgs> | null
    /**
     * Filter which hsvalidity_request_products to delete.
     */
    where: hsvalidity_request_productsWhereUniqueInput
  }

  /**
   * hsvalidity_request_products deleteMany
   */
  export type hsvalidity_request_productsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hsvalidity_request_products to delete
     */
    where?: hsvalidity_request_productsWhereInput
    /**
     * Limit how many hsvalidity_request_products to delete.
     */
    limit?: number
  }

  /**
   * hsvalidity_request_products without action
   */
  export type hsvalidity_request_productsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsvalidity_request_products
     */
    select?: hsvalidity_request_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsvalidity_request_products
     */
    omit?: hsvalidity_request_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsvalidity_request_productsInclude<ExtArgs> | null
  }


  /**
   * Model hsvalidity_treatments
   */

  export type AggregateHsvalidity_treatments = {
    _count: Hsvalidity_treatmentsCountAggregateOutputType | null
    _avg: Hsvalidity_treatmentsAvgAggregateOutputType | null
    _sum: Hsvalidity_treatmentsSumAggregateOutputType | null
    _min: Hsvalidity_treatmentsMinAggregateOutputType | null
    _max: Hsvalidity_treatmentsMaxAggregateOutputType | null
  }

  export type Hsvalidity_treatmentsAvgAggregateOutputType = {
    id: number | null
  }

  export type Hsvalidity_treatmentsSumAggregateOutputType = {
    id: number | null
  }

  export type Hsvalidity_treatmentsMinAggregateOutputType = {
    id: number | null
    description: string | null
  }

  export type Hsvalidity_treatmentsMaxAggregateOutputType = {
    id: number | null
    description: string | null
  }

  export type Hsvalidity_treatmentsCountAggregateOutputType = {
    id: number
    description: number
    _all: number
  }


  export type Hsvalidity_treatmentsAvgAggregateInputType = {
    id?: true
  }

  export type Hsvalidity_treatmentsSumAggregateInputType = {
    id?: true
  }

  export type Hsvalidity_treatmentsMinAggregateInputType = {
    id?: true
    description?: true
  }

  export type Hsvalidity_treatmentsMaxAggregateInputType = {
    id?: true
    description?: true
  }

  export type Hsvalidity_treatmentsCountAggregateInputType = {
    id?: true
    description?: true
    _all?: true
  }

  export type Hsvalidity_treatmentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hsvalidity_treatments to aggregate.
     */
    where?: hsvalidity_treatmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hsvalidity_treatments to fetch.
     */
    orderBy?: hsvalidity_treatmentsOrderByWithRelationInput | hsvalidity_treatmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: hsvalidity_treatmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hsvalidity_treatments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hsvalidity_treatments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned hsvalidity_treatments
    **/
    _count?: true | Hsvalidity_treatmentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Hsvalidity_treatmentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Hsvalidity_treatmentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Hsvalidity_treatmentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Hsvalidity_treatmentsMaxAggregateInputType
  }

  export type GetHsvalidity_treatmentsAggregateType<T extends Hsvalidity_treatmentsAggregateArgs> = {
        [P in keyof T & keyof AggregateHsvalidity_treatments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHsvalidity_treatments[P]>
      : GetScalarType<T[P], AggregateHsvalidity_treatments[P]>
  }




  export type hsvalidity_treatmentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hsvalidity_treatmentsWhereInput
    orderBy?: hsvalidity_treatmentsOrderByWithAggregationInput | hsvalidity_treatmentsOrderByWithAggregationInput[]
    by: Hsvalidity_treatmentsScalarFieldEnum[] | Hsvalidity_treatmentsScalarFieldEnum
    having?: hsvalidity_treatmentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Hsvalidity_treatmentsCountAggregateInputType | true
    _avg?: Hsvalidity_treatmentsAvgAggregateInputType
    _sum?: Hsvalidity_treatmentsSumAggregateInputType
    _min?: Hsvalidity_treatmentsMinAggregateInputType
    _max?: Hsvalidity_treatmentsMaxAggregateInputType
  }

  export type Hsvalidity_treatmentsGroupByOutputType = {
    id: number
    description: string
    _count: Hsvalidity_treatmentsCountAggregateOutputType | null
    _avg: Hsvalidity_treatmentsAvgAggregateOutputType | null
    _sum: Hsvalidity_treatmentsSumAggregateOutputType | null
    _min: Hsvalidity_treatmentsMinAggregateOutputType | null
    _max: Hsvalidity_treatmentsMaxAggregateOutputType | null
  }

  type GetHsvalidity_treatmentsGroupByPayload<T extends hsvalidity_treatmentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Hsvalidity_treatmentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Hsvalidity_treatmentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Hsvalidity_treatmentsGroupByOutputType[P]>
            : GetScalarType<T[P], Hsvalidity_treatmentsGroupByOutputType[P]>
        }
      >
    >


  export type hsvalidity_treatmentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    hsvalidity_products?: boolean | hsvalidity_treatments$hsvalidity_productsArgs<ExtArgs>
    _count?: boolean | Hsvalidity_treatmentsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hsvalidity_treatments"]>

  export type hsvalidity_treatmentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
  }, ExtArgs["result"]["hsvalidity_treatments"]>

  export type hsvalidity_treatmentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
  }, ExtArgs["result"]["hsvalidity_treatments"]>

  export type hsvalidity_treatmentsSelectScalar = {
    id?: boolean
    description?: boolean
  }

  export type hsvalidity_treatmentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "description", ExtArgs["result"]["hsvalidity_treatments"]>
  export type hsvalidity_treatmentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hsvalidity_products?: boolean | hsvalidity_treatments$hsvalidity_productsArgs<ExtArgs>
    _count?: boolean | Hsvalidity_treatmentsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type hsvalidity_treatmentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type hsvalidity_treatmentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $hsvalidity_treatmentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "hsvalidity_treatments"
    objects: {
      hsvalidity_products: Prisma.$hsvalidity_productsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      description: string
    }, ExtArgs["result"]["hsvalidity_treatments"]>
    composites: {}
  }

  type hsvalidity_treatmentsGetPayload<S extends boolean | null | undefined | hsvalidity_treatmentsDefaultArgs> = $Result.GetResult<Prisma.$hsvalidity_treatmentsPayload, S>

  type hsvalidity_treatmentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<hsvalidity_treatmentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Hsvalidity_treatmentsCountAggregateInputType | true
    }

  export interface hsvalidity_treatmentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['hsvalidity_treatments'], meta: { name: 'hsvalidity_treatments' } }
    /**
     * Find zero or one Hsvalidity_treatments that matches the filter.
     * @param {hsvalidity_treatmentsFindUniqueArgs} args - Arguments to find a Hsvalidity_treatments
     * @example
     * // Get one Hsvalidity_treatments
     * const hsvalidity_treatments = await prisma.hsvalidity_treatments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends hsvalidity_treatmentsFindUniqueArgs>(args: SelectSubset<T, hsvalidity_treatmentsFindUniqueArgs<ExtArgs>>): Prisma__hsvalidity_treatmentsClient<$Result.GetResult<Prisma.$hsvalidity_treatmentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hsvalidity_treatments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {hsvalidity_treatmentsFindUniqueOrThrowArgs} args - Arguments to find a Hsvalidity_treatments
     * @example
     * // Get one Hsvalidity_treatments
     * const hsvalidity_treatments = await prisma.hsvalidity_treatments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends hsvalidity_treatmentsFindUniqueOrThrowArgs>(args: SelectSubset<T, hsvalidity_treatmentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__hsvalidity_treatmentsClient<$Result.GetResult<Prisma.$hsvalidity_treatmentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hsvalidity_treatments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hsvalidity_treatmentsFindFirstArgs} args - Arguments to find a Hsvalidity_treatments
     * @example
     * // Get one Hsvalidity_treatments
     * const hsvalidity_treatments = await prisma.hsvalidity_treatments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends hsvalidity_treatmentsFindFirstArgs>(args?: SelectSubset<T, hsvalidity_treatmentsFindFirstArgs<ExtArgs>>): Prisma__hsvalidity_treatmentsClient<$Result.GetResult<Prisma.$hsvalidity_treatmentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hsvalidity_treatments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hsvalidity_treatmentsFindFirstOrThrowArgs} args - Arguments to find a Hsvalidity_treatments
     * @example
     * // Get one Hsvalidity_treatments
     * const hsvalidity_treatments = await prisma.hsvalidity_treatments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends hsvalidity_treatmentsFindFirstOrThrowArgs>(args?: SelectSubset<T, hsvalidity_treatmentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__hsvalidity_treatmentsClient<$Result.GetResult<Prisma.$hsvalidity_treatmentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hsvalidity_treatments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hsvalidity_treatmentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hsvalidity_treatments
     * const hsvalidity_treatments = await prisma.hsvalidity_treatments.findMany()
     * 
     * // Get first 10 Hsvalidity_treatments
     * const hsvalidity_treatments = await prisma.hsvalidity_treatments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hsvalidity_treatmentsWithIdOnly = await prisma.hsvalidity_treatments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends hsvalidity_treatmentsFindManyArgs>(args?: SelectSubset<T, hsvalidity_treatmentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hsvalidity_treatmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hsvalidity_treatments.
     * @param {hsvalidity_treatmentsCreateArgs} args - Arguments to create a Hsvalidity_treatments.
     * @example
     * // Create one Hsvalidity_treatments
     * const Hsvalidity_treatments = await prisma.hsvalidity_treatments.create({
     *   data: {
     *     // ... data to create a Hsvalidity_treatments
     *   }
     * })
     * 
     */
    create<T extends hsvalidity_treatmentsCreateArgs>(args: SelectSubset<T, hsvalidity_treatmentsCreateArgs<ExtArgs>>): Prisma__hsvalidity_treatmentsClient<$Result.GetResult<Prisma.$hsvalidity_treatmentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hsvalidity_treatments.
     * @param {hsvalidity_treatmentsCreateManyArgs} args - Arguments to create many Hsvalidity_treatments.
     * @example
     * // Create many Hsvalidity_treatments
     * const hsvalidity_treatments = await prisma.hsvalidity_treatments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends hsvalidity_treatmentsCreateManyArgs>(args?: SelectSubset<T, hsvalidity_treatmentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Hsvalidity_treatments and returns the data saved in the database.
     * @param {hsvalidity_treatmentsCreateManyAndReturnArgs} args - Arguments to create many Hsvalidity_treatments.
     * @example
     * // Create many Hsvalidity_treatments
     * const hsvalidity_treatments = await prisma.hsvalidity_treatments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Hsvalidity_treatments and only return the `id`
     * const hsvalidity_treatmentsWithIdOnly = await prisma.hsvalidity_treatments.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends hsvalidity_treatmentsCreateManyAndReturnArgs>(args?: SelectSubset<T, hsvalidity_treatmentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hsvalidity_treatmentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Hsvalidity_treatments.
     * @param {hsvalidity_treatmentsDeleteArgs} args - Arguments to delete one Hsvalidity_treatments.
     * @example
     * // Delete one Hsvalidity_treatments
     * const Hsvalidity_treatments = await prisma.hsvalidity_treatments.delete({
     *   where: {
     *     // ... filter to delete one Hsvalidity_treatments
     *   }
     * })
     * 
     */
    delete<T extends hsvalidity_treatmentsDeleteArgs>(args: SelectSubset<T, hsvalidity_treatmentsDeleteArgs<ExtArgs>>): Prisma__hsvalidity_treatmentsClient<$Result.GetResult<Prisma.$hsvalidity_treatmentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hsvalidity_treatments.
     * @param {hsvalidity_treatmentsUpdateArgs} args - Arguments to update one Hsvalidity_treatments.
     * @example
     * // Update one Hsvalidity_treatments
     * const hsvalidity_treatments = await prisma.hsvalidity_treatments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends hsvalidity_treatmentsUpdateArgs>(args: SelectSubset<T, hsvalidity_treatmentsUpdateArgs<ExtArgs>>): Prisma__hsvalidity_treatmentsClient<$Result.GetResult<Prisma.$hsvalidity_treatmentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hsvalidity_treatments.
     * @param {hsvalidity_treatmentsDeleteManyArgs} args - Arguments to filter Hsvalidity_treatments to delete.
     * @example
     * // Delete a few Hsvalidity_treatments
     * const { count } = await prisma.hsvalidity_treatments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends hsvalidity_treatmentsDeleteManyArgs>(args?: SelectSubset<T, hsvalidity_treatmentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hsvalidity_treatments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hsvalidity_treatmentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hsvalidity_treatments
     * const hsvalidity_treatments = await prisma.hsvalidity_treatments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends hsvalidity_treatmentsUpdateManyArgs>(args: SelectSubset<T, hsvalidity_treatmentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hsvalidity_treatments and returns the data updated in the database.
     * @param {hsvalidity_treatmentsUpdateManyAndReturnArgs} args - Arguments to update many Hsvalidity_treatments.
     * @example
     * // Update many Hsvalidity_treatments
     * const hsvalidity_treatments = await prisma.hsvalidity_treatments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Hsvalidity_treatments and only return the `id`
     * const hsvalidity_treatmentsWithIdOnly = await prisma.hsvalidity_treatments.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends hsvalidity_treatmentsUpdateManyAndReturnArgs>(args: SelectSubset<T, hsvalidity_treatmentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hsvalidity_treatmentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Hsvalidity_treatments.
     * @param {hsvalidity_treatmentsUpsertArgs} args - Arguments to update or create a Hsvalidity_treatments.
     * @example
     * // Update or create a Hsvalidity_treatments
     * const hsvalidity_treatments = await prisma.hsvalidity_treatments.upsert({
     *   create: {
     *     // ... data to create a Hsvalidity_treatments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hsvalidity_treatments we want to update
     *   }
     * })
     */
    upsert<T extends hsvalidity_treatmentsUpsertArgs>(args: SelectSubset<T, hsvalidity_treatmentsUpsertArgs<ExtArgs>>): Prisma__hsvalidity_treatmentsClient<$Result.GetResult<Prisma.$hsvalidity_treatmentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Hsvalidity_treatments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hsvalidity_treatmentsCountArgs} args - Arguments to filter Hsvalidity_treatments to count.
     * @example
     * // Count the number of Hsvalidity_treatments
     * const count = await prisma.hsvalidity_treatments.count({
     *   where: {
     *     // ... the filter for the Hsvalidity_treatments we want to count
     *   }
     * })
    **/
    count<T extends hsvalidity_treatmentsCountArgs>(
      args?: Subset<T, hsvalidity_treatmentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Hsvalidity_treatmentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hsvalidity_treatments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Hsvalidity_treatmentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Hsvalidity_treatmentsAggregateArgs>(args: Subset<T, Hsvalidity_treatmentsAggregateArgs>): Prisma.PrismaPromise<GetHsvalidity_treatmentsAggregateType<T>>

    /**
     * Group by Hsvalidity_treatments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hsvalidity_treatmentsGroupByArgs} args - Group by arguments.
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
      T extends hsvalidity_treatmentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: hsvalidity_treatmentsGroupByArgs['orderBy'] }
        : { orderBy?: hsvalidity_treatmentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, hsvalidity_treatmentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHsvalidity_treatmentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the hsvalidity_treatments model
   */
  readonly fields: hsvalidity_treatmentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for hsvalidity_treatments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__hsvalidity_treatmentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hsvalidity_products<T extends hsvalidity_treatments$hsvalidity_productsArgs<ExtArgs> = {}>(args?: Subset<T, hsvalidity_treatments$hsvalidity_productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hsvalidity_productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the hsvalidity_treatments model
   */
  interface hsvalidity_treatmentsFieldRefs {
    readonly id: FieldRef<"hsvalidity_treatments", 'Int'>
    readonly description: FieldRef<"hsvalidity_treatments", 'String'>
  }
    

  // Custom InputTypes
  /**
   * hsvalidity_treatments findUnique
   */
  export type hsvalidity_treatmentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsvalidity_treatments
     */
    select?: hsvalidity_treatmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsvalidity_treatments
     */
    omit?: hsvalidity_treatmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsvalidity_treatmentsInclude<ExtArgs> | null
    /**
     * Filter, which hsvalidity_treatments to fetch.
     */
    where: hsvalidity_treatmentsWhereUniqueInput
  }

  /**
   * hsvalidity_treatments findUniqueOrThrow
   */
  export type hsvalidity_treatmentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsvalidity_treatments
     */
    select?: hsvalidity_treatmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsvalidity_treatments
     */
    omit?: hsvalidity_treatmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsvalidity_treatmentsInclude<ExtArgs> | null
    /**
     * Filter, which hsvalidity_treatments to fetch.
     */
    where: hsvalidity_treatmentsWhereUniqueInput
  }

  /**
   * hsvalidity_treatments findFirst
   */
  export type hsvalidity_treatmentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsvalidity_treatments
     */
    select?: hsvalidity_treatmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsvalidity_treatments
     */
    omit?: hsvalidity_treatmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsvalidity_treatmentsInclude<ExtArgs> | null
    /**
     * Filter, which hsvalidity_treatments to fetch.
     */
    where?: hsvalidity_treatmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hsvalidity_treatments to fetch.
     */
    orderBy?: hsvalidity_treatmentsOrderByWithRelationInput | hsvalidity_treatmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hsvalidity_treatments.
     */
    cursor?: hsvalidity_treatmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hsvalidity_treatments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hsvalidity_treatments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hsvalidity_treatments.
     */
    distinct?: Hsvalidity_treatmentsScalarFieldEnum | Hsvalidity_treatmentsScalarFieldEnum[]
  }

  /**
   * hsvalidity_treatments findFirstOrThrow
   */
  export type hsvalidity_treatmentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsvalidity_treatments
     */
    select?: hsvalidity_treatmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsvalidity_treatments
     */
    omit?: hsvalidity_treatmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsvalidity_treatmentsInclude<ExtArgs> | null
    /**
     * Filter, which hsvalidity_treatments to fetch.
     */
    where?: hsvalidity_treatmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hsvalidity_treatments to fetch.
     */
    orderBy?: hsvalidity_treatmentsOrderByWithRelationInput | hsvalidity_treatmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hsvalidity_treatments.
     */
    cursor?: hsvalidity_treatmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hsvalidity_treatments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hsvalidity_treatments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hsvalidity_treatments.
     */
    distinct?: Hsvalidity_treatmentsScalarFieldEnum | Hsvalidity_treatmentsScalarFieldEnum[]
  }

  /**
   * hsvalidity_treatments findMany
   */
  export type hsvalidity_treatmentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsvalidity_treatments
     */
    select?: hsvalidity_treatmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsvalidity_treatments
     */
    omit?: hsvalidity_treatmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsvalidity_treatmentsInclude<ExtArgs> | null
    /**
     * Filter, which hsvalidity_treatments to fetch.
     */
    where?: hsvalidity_treatmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hsvalidity_treatments to fetch.
     */
    orderBy?: hsvalidity_treatmentsOrderByWithRelationInput | hsvalidity_treatmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing hsvalidity_treatments.
     */
    cursor?: hsvalidity_treatmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hsvalidity_treatments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hsvalidity_treatments.
     */
    skip?: number
    distinct?: Hsvalidity_treatmentsScalarFieldEnum | Hsvalidity_treatmentsScalarFieldEnum[]
  }

  /**
   * hsvalidity_treatments create
   */
  export type hsvalidity_treatmentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsvalidity_treatments
     */
    select?: hsvalidity_treatmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsvalidity_treatments
     */
    omit?: hsvalidity_treatmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsvalidity_treatmentsInclude<ExtArgs> | null
    /**
     * The data needed to create a hsvalidity_treatments.
     */
    data: XOR<hsvalidity_treatmentsCreateInput, hsvalidity_treatmentsUncheckedCreateInput>
  }

  /**
   * hsvalidity_treatments createMany
   */
  export type hsvalidity_treatmentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many hsvalidity_treatments.
     */
    data: hsvalidity_treatmentsCreateManyInput | hsvalidity_treatmentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * hsvalidity_treatments createManyAndReturn
   */
  export type hsvalidity_treatmentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsvalidity_treatments
     */
    select?: hsvalidity_treatmentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the hsvalidity_treatments
     */
    omit?: hsvalidity_treatmentsOmit<ExtArgs> | null
    /**
     * The data used to create many hsvalidity_treatments.
     */
    data: hsvalidity_treatmentsCreateManyInput | hsvalidity_treatmentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * hsvalidity_treatments update
   */
  export type hsvalidity_treatmentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsvalidity_treatments
     */
    select?: hsvalidity_treatmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsvalidity_treatments
     */
    omit?: hsvalidity_treatmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsvalidity_treatmentsInclude<ExtArgs> | null
    /**
     * The data needed to update a hsvalidity_treatments.
     */
    data: XOR<hsvalidity_treatmentsUpdateInput, hsvalidity_treatmentsUncheckedUpdateInput>
    /**
     * Choose, which hsvalidity_treatments to update.
     */
    where: hsvalidity_treatmentsWhereUniqueInput
  }

  /**
   * hsvalidity_treatments updateMany
   */
  export type hsvalidity_treatmentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update hsvalidity_treatments.
     */
    data: XOR<hsvalidity_treatmentsUpdateManyMutationInput, hsvalidity_treatmentsUncheckedUpdateManyInput>
    /**
     * Filter which hsvalidity_treatments to update
     */
    where?: hsvalidity_treatmentsWhereInput
    /**
     * Limit how many hsvalidity_treatments to update.
     */
    limit?: number
  }

  /**
   * hsvalidity_treatments updateManyAndReturn
   */
  export type hsvalidity_treatmentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsvalidity_treatments
     */
    select?: hsvalidity_treatmentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the hsvalidity_treatments
     */
    omit?: hsvalidity_treatmentsOmit<ExtArgs> | null
    /**
     * The data used to update hsvalidity_treatments.
     */
    data: XOR<hsvalidity_treatmentsUpdateManyMutationInput, hsvalidity_treatmentsUncheckedUpdateManyInput>
    /**
     * Filter which hsvalidity_treatments to update
     */
    where?: hsvalidity_treatmentsWhereInput
    /**
     * Limit how many hsvalidity_treatments to update.
     */
    limit?: number
  }

  /**
   * hsvalidity_treatments upsert
   */
  export type hsvalidity_treatmentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsvalidity_treatments
     */
    select?: hsvalidity_treatmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsvalidity_treatments
     */
    omit?: hsvalidity_treatmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsvalidity_treatmentsInclude<ExtArgs> | null
    /**
     * The filter to search for the hsvalidity_treatments to update in case it exists.
     */
    where: hsvalidity_treatmentsWhereUniqueInput
    /**
     * In case the hsvalidity_treatments found by the `where` argument doesn't exist, create a new hsvalidity_treatments with this data.
     */
    create: XOR<hsvalidity_treatmentsCreateInput, hsvalidity_treatmentsUncheckedCreateInput>
    /**
     * In case the hsvalidity_treatments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<hsvalidity_treatmentsUpdateInput, hsvalidity_treatmentsUncheckedUpdateInput>
  }

  /**
   * hsvalidity_treatments delete
   */
  export type hsvalidity_treatmentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsvalidity_treatments
     */
    select?: hsvalidity_treatmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsvalidity_treatments
     */
    omit?: hsvalidity_treatmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsvalidity_treatmentsInclude<ExtArgs> | null
    /**
     * Filter which hsvalidity_treatments to delete.
     */
    where: hsvalidity_treatmentsWhereUniqueInput
  }

  /**
   * hsvalidity_treatments deleteMany
   */
  export type hsvalidity_treatmentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hsvalidity_treatments to delete
     */
    where?: hsvalidity_treatmentsWhereInput
    /**
     * Limit how many hsvalidity_treatments to delete.
     */
    limit?: number
  }

  /**
   * hsvalidity_treatments.hsvalidity_products
   */
  export type hsvalidity_treatments$hsvalidity_productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsvalidity_products
     */
    select?: hsvalidity_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsvalidity_products
     */
    omit?: hsvalidity_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsvalidity_productsInclude<ExtArgs> | null
    where?: hsvalidity_productsWhereInput
    orderBy?: hsvalidity_productsOrderByWithRelationInput | hsvalidity_productsOrderByWithRelationInput[]
    cursor?: hsvalidity_productsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Hsvalidity_productsScalarFieldEnum | Hsvalidity_productsScalarFieldEnum[]
  }

  /**
   * hsvalidity_treatments without action
   */
  export type hsvalidity_treatmentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsvalidity_treatments
     */
    select?: hsvalidity_treatmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsvalidity_treatments
     */
    omit?: hsvalidity_treatmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsvalidity_treatmentsInclude<ExtArgs> | null
  }


  /**
   * Model hssessions
   */

  export type AggregateHssessions = {
    _count: HssessionsCountAggregateOutputType | null
    _avg: HssessionsAvgAggregateOutputType | null
    _sum: HssessionsSumAggregateOutputType | null
    _min: HssessionsMinAggregateOutputType | null
    _max: HssessionsMaxAggregateOutputType | null
  }

  export type HssessionsAvgAggregateOutputType = {
    user_id: number | null
  }

  export type HssessionsSumAggregateOutputType = {
    user_id: number | null
  }

  export type HssessionsMinAggregateOutputType = {
    id: string | null
    user_id: number | null
    token: string | null
    created_at: Date | null
    expires_at: Date | null
  }

  export type HssessionsMaxAggregateOutputType = {
    id: string | null
    user_id: number | null
    token: string | null
    created_at: Date | null
    expires_at: Date | null
  }

  export type HssessionsCountAggregateOutputType = {
    id: number
    user_id: number
    token: number
    created_at: number
    expires_at: number
    _all: number
  }


  export type HssessionsAvgAggregateInputType = {
    user_id?: true
  }

  export type HssessionsSumAggregateInputType = {
    user_id?: true
  }

  export type HssessionsMinAggregateInputType = {
    id?: true
    user_id?: true
    token?: true
    created_at?: true
    expires_at?: true
  }

  export type HssessionsMaxAggregateInputType = {
    id?: true
    user_id?: true
    token?: true
    created_at?: true
    expires_at?: true
  }

  export type HssessionsCountAggregateInputType = {
    id?: true
    user_id?: true
    token?: true
    created_at?: true
    expires_at?: true
    _all?: true
  }

  export type HssessionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hssessions to aggregate.
     */
    where?: hssessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hssessions to fetch.
     */
    orderBy?: hssessionsOrderByWithRelationInput | hssessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: hssessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hssessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hssessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned hssessions
    **/
    _count?: true | HssessionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HssessionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HssessionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HssessionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HssessionsMaxAggregateInputType
  }

  export type GetHssessionsAggregateType<T extends HssessionsAggregateArgs> = {
        [P in keyof T & keyof AggregateHssessions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHssessions[P]>
      : GetScalarType<T[P], AggregateHssessions[P]>
  }




  export type hssessionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hssessionsWhereInput
    orderBy?: hssessionsOrderByWithAggregationInput | hssessionsOrderByWithAggregationInput[]
    by: HssessionsScalarFieldEnum[] | HssessionsScalarFieldEnum
    having?: hssessionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HssessionsCountAggregateInputType | true
    _avg?: HssessionsAvgAggregateInputType
    _sum?: HssessionsSumAggregateInputType
    _min?: HssessionsMinAggregateInputType
    _max?: HssessionsMaxAggregateInputType
  }

  export type HssessionsGroupByOutputType = {
    id: string
    user_id: number
    token: string
    created_at: Date
    expires_at: Date | null
    _count: HssessionsCountAggregateOutputType | null
    _avg: HssessionsAvgAggregateOutputType | null
    _sum: HssessionsSumAggregateOutputType | null
    _min: HssessionsMinAggregateOutputType | null
    _max: HssessionsMaxAggregateOutputType | null
  }

  type GetHssessionsGroupByPayload<T extends hssessionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HssessionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HssessionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HssessionsGroupByOutputType[P]>
            : GetScalarType<T[P], HssessionsGroupByOutputType[P]>
        }
      >
    >


  export type hssessionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    token?: boolean
    created_at?: boolean
    expires_at?: boolean
    user?: boolean | hsemployeesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hssessions"]>

  export type hssessionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    token?: boolean
    created_at?: boolean
    expires_at?: boolean
    user?: boolean | hsemployeesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hssessions"]>

  export type hssessionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    token?: boolean
    created_at?: boolean
    expires_at?: boolean
    user?: boolean | hsemployeesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hssessions"]>

  export type hssessionsSelectScalar = {
    id?: boolean
    user_id?: boolean
    token?: boolean
    created_at?: boolean
    expires_at?: boolean
  }

  export type hssessionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "token" | "created_at" | "expires_at", ExtArgs["result"]["hssessions"]>
  export type hssessionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | hsemployeesDefaultArgs<ExtArgs>
  }
  export type hssessionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | hsemployeesDefaultArgs<ExtArgs>
  }
  export type hssessionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | hsemployeesDefaultArgs<ExtArgs>
  }

  export type $hssessionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "hssessions"
    objects: {
      user: Prisma.$hsemployeesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: number
      token: string
      created_at: Date
      expires_at: Date | null
    }, ExtArgs["result"]["hssessions"]>
    composites: {}
  }

  type hssessionsGetPayload<S extends boolean | null | undefined | hssessionsDefaultArgs> = $Result.GetResult<Prisma.$hssessionsPayload, S>

  type hssessionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<hssessionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HssessionsCountAggregateInputType | true
    }

  export interface hssessionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['hssessions'], meta: { name: 'hssessions' } }
    /**
     * Find zero or one Hssessions that matches the filter.
     * @param {hssessionsFindUniqueArgs} args - Arguments to find a Hssessions
     * @example
     * // Get one Hssessions
     * const hssessions = await prisma.hssessions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends hssessionsFindUniqueArgs>(args: SelectSubset<T, hssessionsFindUniqueArgs<ExtArgs>>): Prisma__hssessionsClient<$Result.GetResult<Prisma.$hssessionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hssessions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {hssessionsFindUniqueOrThrowArgs} args - Arguments to find a Hssessions
     * @example
     * // Get one Hssessions
     * const hssessions = await prisma.hssessions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends hssessionsFindUniqueOrThrowArgs>(args: SelectSubset<T, hssessionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__hssessionsClient<$Result.GetResult<Prisma.$hssessionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hssessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hssessionsFindFirstArgs} args - Arguments to find a Hssessions
     * @example
     * // Get one Hssessions
     * const hssessions = await prisma.hssessions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends hssessionsFindFirstArgs>(args?: SelectSubset<T, hssessionsFindFirstArgs<ExtArgs>>): Prisma__hssessionsClient<$Result.GetResult<Prisma.$hssessionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hssessions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hssessionsFindFirstOrThrowArgs} args - Arguments to find a Hssessions
     * @example
     * // Get one Hssessions
     * const hssessions = await prisma.hssessions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends hssessionsFindFirstOrThrowArgs>(args?: SelectSubset<T, hssessionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__hssessionsClient<$Result.GetResult<Prisma.$hssessionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hssessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hssessionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hssessions
     * const hssessions = await prisma.hssessions.findMany()
     * 
     * // Get first 10 Hssessions
     * const hssessions = await prisma.hssessions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hssessionsWithIdOnly = await prisma.hssessions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends hssessionsFindManyArgs>(args?: SelectSubset<T, hssessionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hssessionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hssessions.
     * @param {hssessionsCreateArgs} args - Arguments to create a Hssessions.
     * @example
     * // Create one Hssessions
     * const Hssessions = await prisma.hssessions.create({
     *   data: {
     *     // ... data to create a Hssessions
     *   }
     * })
     * 
     */
    create<T extends hssessionsCreateArgs>(args: SelectSubset<T, hssessionsCreateArgs<ExtArgs>>): Prisma__hssessionsClient<$Result.GetResult<Prisma.$hssessionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hssessions.
     * @param {hssessionsCreateManyArgs} args - Arguments to create many Hssessions.
     * @example
     * // Create many Hssessions
     * const hssessions = await prisma.hssessions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends hssessionsCreateManyArgs>(args?: SelectSubset<T, hssessionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Hssessions and returns the data saved in the database.
     * @param {hssessionsCreateManyAndReturnArgs} args - Arguments to create many Hssessions.
     * @example
     * // Create many Hssessions
     * const hssessions = await prisma.hssessions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Hssessions and only return the `id`
     * const hssessionsWithIdOnly = await prisma.hssessions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends hssessionsCreateManyAndReturnArgs>(args?: SelectSubset<T, hssessionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hssessionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Hssessions.
     * @param {hssessionsDeleteArgs} args - Arguments to delete one Hssessions.
     * @example
     * // Delete one Hssessions
     * const Hssessions = await prisma.hssessions.delete({
     *   where: {
     *     // ... filter to delete one Hssessions
     *   }
     * })
     * 
     */
    delete<T extends hssessionsDeleteArgs>(args: SelectSubset<T, hssessionsDeleteArgs<ExtArgs>>): Prisma__hssessionsClient<$Result.GetResult<Prisma.$hssessionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hssessions.
     * @param {hssessionsUpdateArgs} args - Arguments to update one Hssessions.
     * @example
     * // Update one Hssessions
     * const hssessions = await prisma.hssessions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends hssessionsUpdateArgs>(args: SelectSubset<T, hssessionsUpdateArgs<ExtArgs>>): Prisma__hssessionsClient<$Result.GetResult<Prisma.$hssessionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hssessions.
     * @param {hssessionsDeleteManyArgs} args - Arguments to filter Hssessions to delete.
     * @example
     * // Delete a few Hssessions
     * const { count } = await prisma.hssessions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends hssessionsDeleteManyArgs>(args?: SelectSubset<T, hssessionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hssessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hssessionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hssessions
     * const hssessions = await prisma.hssessions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends hssessionsUpdateManyArgs>(args: SelectSubset<T, hssessionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hssessions and returns the data updated in the database.
     * @param {hssessionsUpdateManyAndReturnArgs} args - Arguments to update many Hssessions.
     * @example
     * // Update many Hssessions
     * const hssessions = await prisma.hssessions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Hssessions and only return the `id`
     * const hssessionsWithIdOnly = await prisma.hssessions.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends hssessionsUpdateManyAndReturnArgs>(args: SelectSubset<T, hssessionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hssessionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Hssessions.
     * @param {hssessionsUpsertArgs} args - Arguments to update or create a Hssessions.
     * @example
     * // Update or create a Hssessions
     * const hssessions = await prisma.hssessions.upsert({
     *   create: {
     *     // ... data to create a Hssessions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hssessions we want to update
     *   }
     * })
     */
    upsert<T extends hssessionsUpsertArgs>(args: SelectSubset<T, hssessionsUpsertArgs<ExtArgs>>): Prisma__hssessionsClient<$Result.GetResult<Prisma.$hssessionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Hssessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hssessionsCountArgs} args - Arguments to filter Hssessions to count.
     * @example
     * // Count the number of Hssessions
     * const count = await prisma.hssessions.count({
     *   where: {
     *     // ... the filter for the Hssessions we want to count
     *   }
     * })
    **/
    count<T extends hssessionsCountArgs>(
      args?: Subset<T, hssessionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HssessionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hssessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HssessionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HssessionsAggregateArgs>(args: Subset<T, HssessionsAggregateArgs>): Prisma.PrismaPromise<GetHssessionsAggregateType<T>>

    /**
     * Group by Hssessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hssessionsGroupByArgs} args - Group by arguments.
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
      T extends hssessionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: hssessionsGroupByArgs['orderBy'] }
        : { orderBy?: hssessionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, hssessionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHssessionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the hssessions model
   */
  readonly fields: hssessionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for hssessions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__hssessionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends hsemployeesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, hsemployeesDefaultArgs<ExtArgs>>): Prisma__hsemployeesClient<$Result.GetResult<Prisma.$hsemployeesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the hssessions model
   */
  interface hssessionsFieldRefs {
    readonly id: FieldRef<"hssessions", 'String'>
    readonly user_id: FieldRef<"hssessions", 'Int'>
    readonly token: FieldRef<"hssessions", 'String'>
    readonly created_at: FieldRef<"hssessions", 'DateTime'>
    readonly expires_at: FieldRef<"hssessions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * hssessions findUnique
   */
  export type hssessionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hssessions
     */
    select?: hssessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hssessions
     */
    omit?: hssessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hssessionsInclude<ExtArgs> | null
    /**
     * Filter, which hssessions to fetch.
     */
    where: hssessionsWhereUniqueInput
  }

  /**
   * hssessions findUniqueOrThrow
   */
  export type hssessionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hssessions
     */
    select?: hssessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hssessions
     */
    omit?: hssessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hssessionsInclude<ExtArgs> | null
    /**
     * Filter, which hssessions to fetch.
     */
    where: hssessionsWhereUniqueInput
  }

  /**
   * hssessions findFirst
   */
  export type hssessionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hssessions
     */
    select?: hssessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hssessions
     */
    omit?: hssessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hssessionsInclude<ExtArgs> | null
    /**
     * Filter, which hssessions to fetch.
     */
    where?: hssessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hssessions to fetch.
     */
    orderBy?: hssessionsOrderByWithRelationInput | hssessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hssessions.
     */
    cursor?: hssessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hssessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hssessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hssessions.
     */
    distinct?: HssessionsScalarFieldEnum | HssessionsScalarFieldEnum[]
  }

  /**
   * hssessions findFirstOrThrow
   */
  export type hssessionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hssessions
     */
    select?: hssessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hssessions
     */
    omit?: hssessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hssessionsInclude<ExtArgs> | null
    /**
     * Filter, which hssessions to fetch.
     */
    where?: hssessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hssessions to fetch.
     */
    orderBy?: hssessionsOrderByWithRelationInput | hssessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hssessions.
     */
    cursor?: hssessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hssessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hssessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hssessions.
     */
    distinct?: HssessionsScalarFieldEnum | HssessionsScalarFieldEnum[]
  }

  /**
   * hssessions findMany
   */
  export type hssessionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hssessions
     */
    select?: hssessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hssessions
     */
    omit?: hssessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hssessionsInclude<ExtArgs> | null
    /**
     * Filter, which hssessions to fetch.
     */
    where?: hssessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hssessions to fetch.
     */
    orderBy?: hssessionsOrderByWithRelationInput | hssessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing hssessions.
     */
    cursor?: hssessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hssessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hssessions.
     */
    skip?: number
    distinct?: HssessionsScalarFieldEnum | HssessionsScalarFieldEnum[]
  }

  /**
   * hssessions create
   */
  export type hssessionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hssessions
     */
    select?: hssessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hssessions
     */
    omit?: hssessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hssessionsInclude<ExtArgs> | null
    /**
     * The data needed to create a hssessions.
     */
    data: XOR<hssessionsCreateInput, hssessionsUncheckedCreateInput>
  }

  /**
   * hssessions createMany
   */
  export type hssessionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many hssessions.
     */
    data: hssessionsCreateManyInput | hssessionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * hssessions createManyAndReturn
   */
  export type hssessionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hssessions
     */
    select?: hssessionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the hssessions
     */
    omit?: hssessionsOmit<ExtArgs> | null
    /**
     * The data used to create many hssessions.
     */
    data: hssessionsCreateManyInput | hssessionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hssessionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * hssessions update
   */
  export type hssessionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hssessions
     */
    select?: hssessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hssessions
     */
    omit?: hssessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hssessionsInclude<ExtArgs> | null
    /**
     * The data needed to update a hssessions.
     */
    data: XOR<hssessionsUpdateInput, hssessionsUncheckedUpdateInput>
    /**
     * Choose, which hssessions to update.
     */
    where: hssessionsWhereUniqueInput
  }

  /**
   * hssessions updateMany
   */
  export type hssessionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update hssessions.
     */
    data: XOR<hssessionsUpdateManyMutationInput, hssessionsUncheckedUpdateManyInput>
    /**
     * Filter which hssessions to update
     */
    where?: hssessionsWhereInput
    /**
     * Limit how many hssessions to update.
     */
    limit?: number
  }

  /**
   * hssessions updateManyAndReturn
   */
  export type hssessionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hssessions
     */
    select?: hssessionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the hssessions
     */
    omit?: hssessionsOmit<ExtArgs> | null
    /**
     * The data used to update hssessions.
     */
    data: XOR<hssessionsUpdateManyMutationInput, hssessionsUncheckedUpdateManyInput>
    /**
     * Filter which hssessions to update
     */
    where?: hssessionsWhereInput
    /**
     * Limit how many hssessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hssessionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * hssessions upsert
   */
  export type hssessionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hssessions
     */
    select?: hssessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hssessions
     */
    omit?: hssessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hssessionsInclude<ExtArgs> | null
    /**
     * The filter to search for the hssessions to update in case it exists.
     */
    where: hssessionsWhereUniqueInput
    /**
     * In case the hssessions found by the `where` argument doesn't exist, create a new hssessions with this data.
     */
    create: XOR<hssessionsCreateInput, hssessionsUncheckedCreateInput>
    /**
     * In case the hssessions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<hssessionsUpdateInput, hssessionsUncheckedUpdateInput>
  }

  /**
   * hssessions delete
   */
  export type hssessionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hssessions
     */
    select?: hssessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hssessions
     */
    omit?: hssessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hssessionsInclude<ExtArgs> | null
    /**
     * Filter which hssessions to delete.
     */
    where: hssessionsWhereUniqueInput
  }

  /**
   * hssessions deleteMany
   */
  export type hssessionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hssessions to delete
     */
    where?: hssessionsWhereInput
    /**
     * Limit how many hssessions to delete.
     */
    limit?: number
  }

  /**
   * hssessions without action
   */
  export type hssessionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hssessions
     */
    select?: hssessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hssessions
     */
    omit?: hssessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hssessionsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const HsemployeesScalarFieldEnum: {
    id: 'id',
    branch_id: 'branch_id',
    winthor_id: 'winthor_id',
    name: 'name',
    username: 'username',
    password: 'password',
    created_at: 'created_at',
    modified_at: 'modified_at'
  };

  export type HsemployeesScalarFieldEnum = (typeof HsemployeesScalarFieldEnum)[keyof typeof HsemployeesScalarFieldEnum]


  export const HsrolesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    created_at: 'created_at',
    modified_at: 'modified_at'
  };

  export type HsrolesScalarFieldEnum = (typeof HsrolesScalarFieldEnum)[keyof typeof HsrolesScalarFieldEnum]


  export const HspermissionsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    created_at: 'created_at',
    modified_at: 'modified_at'
  };

  export type HspermissionsScalarFieldEnum = (typeof HspermissionsScalarFieldEnum)[keyof typeof HspermissionsScalarFieldEnum]


  export const Hspermissions_rolesScalarFieldEnum: {
    role_id: 'role_id',
    permission_id: 'permission_id'
  };

  export type Hspermissions_rolesScalarFieldEnum = (typeof Hspermissions_rolesScalarFieldEnum)[keyof typeof Hspermissions_rolesScalarFieldEnum]


  export const Hsusers_permissionsScalarFieldEnum: {
    user_id: 'user_id',
    permission_id: 'permission_id'
  };

  export type Hsusers_permissionsScalarFieldEnum = (typeof Hsusers_permissionsScalarFieldEnum)[keyof typeof Hsusers_permissionsScalarFieldEnum]


  export const Hsusers_rolesScalarFieldEnum: {
    user_id: 'user_id',
    role_id: 'role_id'
  };

  export type Hsusers_rolesScalarFieldEnum = (typeof Hsusers_rolesScalarFieldEnum)[keyof typeof Hsusers_rolesScalarFieldEnum]


  export const HsbranchesScalarFieldEnum: {
    id: 'id',
    description: 'description'
  };

  export type HsbranchesScalarFieldEnum = (typeof HsbranchesScalarFieldEnum)[keyof typeof HsbranchesScalarFieldEnum]


  export const HsvaliditiesScalarFieldEnum: {
    id: 'id',
    branch_id: 'branch_id',
    employee_id: 'employee_id',
    status: 'status',
    request_id: 'request_id',
    created_at: 'created_at',
    modified_at: 'modified_at'
  };

  export type HsvaliditiesScalarFieldEnum = (typeof HsvaliditiesScalarFieldEnum)[keyof typeof HsvaliditiesScalarFieldEnum]


  export const Hsvalidity_productsScalarFieldEnum: {
    id: 'id',
    validity_id: 'validity_id',
    product_cod: 'product_cod',
    quantity: 'quantity',
    validity_date: 'validity_date',
    treat_id: 'treat_id',
    auxiliary_code: 'auxiliary_code'
  };

  export type Hsvalidity_productsScalarFieldEnum = (typeof Hsvalidity_productsScalarFieldEnum)[keyof typeof Hsvalidity_productsScalarFieldEnum]


  export const Hsvalidity_requestsScalarFieldEnum: {
    id: 'id',
    branch_id: 'branch_id',
    analyst_id: 'analyst_id',
    conferee_id: 'conferee_id',
    status: 'status',
    created_at: 'created_at',
    modified_at: 'modified_at'
  };

  export type Hsvalidity_requestsScalarFieldEnum = (typeof Hsvalidity_requestsScalarFieldEnum)[keyof typeof Hsvalidity_requestsScalarFieldEnum]


  export const Hsvalidity_request_productsScalarFieldEnum: {
    id: 'id',
    request_id: 'request_id',
    status: 'status',
    product_cod: 'product_cod',
    validity_date: 'validity_date',
    auxiliary_code: 'auxiliary_code'
  };

  export type Hsvalidity_request_productsScalarFieldEnum = (typeof Hsvalidity_request_productsScalarFieldEnum)[keyof typeof Hsvalidity_request_productsScalarFieldEnum]


  export const Hsvalidity_treatmentsScalarFieldEnum: {
    id: 'id',
    description: 'description'
  };

  export type Hsvalidity_treatmentsScalarFieldEnum = (typeof Hsvalidity_treatmentsScalarFieldEnum)[keyof typeof Hsvalidity_treatmentsScalarFieldEnum]


  export const HssessionsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    token: 'token',
    created_at: 'created_at',
    expires_at: 'expires_at'
  };

  export type HssessionsScalarFieldEnum = (typeof HssessionsScalarFieldEnum)[keyof typeof HssessionsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'hsvalidities_status'
   */
  export type Enumhsvalidities_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'hsvalidities_status'>
    


  /**
   * Reference to a field of type 'hsvalidities_status[]'
   */
  export type ListEnumhsvalidities_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'hsvalidities_status[]'>
    


  /**
   * Reference to a field of type 'hsvalidity_requests_status'
   */
  export type Enumhsvalidity_requests_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'hsvalidity_requests_status'>
    


  /**
   * Reference to a field of type 'hsvalidity_requests_status[]'
   */
  export type ListEnumhsvalidity_requests_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'hsvalidity_requests_status[]'>
    


  /**
   * Reference to a field of type 'hsvalidity_request_products_status'
   */
  export type Enumhsvalidity_request_products_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'hsvalidity_request_products_status'>
    


  /**
   * Reference to a field of type 'hsvalidity_request_products_status[]'
   */
  export type ListEnumhsvalidity_request_products_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'hsvalidity_request_products_status[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type hsemployeesWhereInput = {
    AND?: hsemployeesWhereInput | hsemployeesWhereInput[]
    OR?: hsemployeesWhereInput[]
    NOT?: hsemployeesWhereInput | hsemployeesWhereInput[]
    id?: IntFilter<"hsemployees"> | number
    branch_id?: IntFilter<"hsemployees"> | number
    winthor_id?: IntFilter<"hsemployees"> | number
    name?: StringFilter<"hsemployees"> | string
    username?: StringFilter<"hsemployees"> | string
    password?: StringFilter<"hsemployees"> | string
    created_at?: DateTimeFilter<"hsemployees"> | Date | string
    modified_at?: DateTimeFilter<"hsemployees"> | Date | string
    branch?: XOR<HsbranchesScalarRelationFilter, hsbranchesWhereInput>
    sessions?: HssessionsListRelationFilter
    hsusers_permissions?: Hsusers_permissionsListRelationFilter
    hsusers_roles?: Hsusers_rolesListRelationFilter
    hsvalidities?: HsvaliditiesListRelationFilter
    analystRequests?: Hsvalidity_requestsListRelationFilter
    confereeRequests?: Hsvalidity_requestsListRelationFilter
  }

  export type hsemployeesOrderByWithRelationInput = {
    id?: SortOrder
    branch_id?: SortOrder
    winthor_id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
    branch?: hsbranchesOrderByWithRelationInput
    sessions?: hssessionsOrderByRelationAggregateInput
    hsusers_permissions?: hsusers_permissionsOrderByRelationAggregateInput
    hsusers_roles?: hsusers_rolesOrderByRelationAggregateInput
    hsvalidities?: hsvaliditiesOrderByRelationAggregateInput
    analystRequests?: hsvalidity_requestsOrderByRelationAggregateInput
    confereeRequests?: hsvalidity_requestsOrderByRelationAggregateInput
  }

  export type hsemployeesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    winthor_id?: number
    username?: string
    AND?: hsemployeesWhereInput | hsemployeesWhereInput[]
    OR?: hsemployeesWhereInput[]
    NOT?: hsemployeesWhereInput | hsemployeesWhereInput[]
    branch_id?: IntFilter<"hsemployees"> | number
    name?: StringFilter<"hsemployees"> | string
    password?: StringFilter<"hsemployees"> | string
    created_at?: DateTimeFilter<"hsemployees"> | Date | string
    modified_at?: DateTimeFilter<"hsemployees"> | Date | string
    branch?: XOR<HsbranchesScalarRelationFilter, hsbranchesWhereInput>
    sessions?: HssessionsListRelationFilter
    hsusers_permissions?: Hsusers_permissionsListRelationFilter
    hsusers_roles?: Hsusers_rolesListRelationFilter
    hsvalidities?: HsvaliditiesListRelationFilter
    analystRequests?: Hsvalidity_requestsListRelationFilter
    confereeRequests?: Hsvalidity_requestsListRelationFilter
  }, "id" | "winthor_id" | "username">

  export type hsemployeesOrderByWithAggregationInput = {
    id?: SortOrder
    branch_id?: SortOrder
    winthor_id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
    _count?: hsemployeesCountOrderByAggregateInput
    _avg?: hsemployeesAvgOrderByAggregateInput
    _max?: hsemployeesMaxOrderByAggregateInput
    _min?: hsemployeesMinOrderByAggregateInput
    _sum?: hsemployeesSumOrderByAggregateInput
  }

  export type hsemployeesScalarWhereWithAggregatesInput = {
    AND?: hsemployeesScalarWhereWithAggregatesInput | hsemployeesScalarWhereWithAggregatesInput[]
    OR?: hsemployeesScalarWhereWithAggregatesInput[]
    NOT?: hsemployeesScalarWhereWithAggregatesInput | hsemployeesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"hsemployees"> | number
    branch_id?: IntWithAggregatesFilter<"hsemployees"> | number
    winthor_id?: IntWithAggregatesFilter<"hsemployees"> | number
    name?: StringWithAggregatesFilter<"hsemployees"> | string
    username?: StringWithAggregatesFilter<"hsemployees"> | string
    password?: StringWithAggregatesFilter<"hsemployees"> | string
    created_at?: DateTimeWithAggregatesFilter<"hsemployees"> | Date | string
    modified_at?: DateTimeWithAggregatesFilter<"hsemployees"> | Date | string
  }

  export type hsrolesWhereInput = {
    AND?: hsrolesWhereInput | hsrolesWhereInput[]
    OR?: hsrolesWhereInput[]
    NOT?: hsrolesWhereInput | hsrolesWhereInput[]
    id?: IntFilter<"hsroles"> | number
    name?: StringFilter<"hsroles"> | string
    description?: StringFilter<"hsroles"> | string
    created_at?: DateTimeFilter<"hsroles"> | Date | string
    modified_at?: DateTimeFilter<"hsroles"> | Date | string
    hspermissions_roles?: Hspermissions_rolesListRelationFilter
    hsusers_roles?: Hsusers_rolesListRelationFilter
  }

  export type hsrolesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
    hspermissions_roles?: hspermissions_rolesOrderByRelationAggregateInput
    hsusers_roles?: hsusers_rolesOrderByRelationAggregateInput
  }

  export type hsrolesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: hsrolesWhereInput | hsrolesWhereInput[]
    OR?: hsrolesWhereInput[]
    NOT?: hsrolesWhereInput | hsrolesWhereInput[]
    description?: StringFilter<"hsroles"> | string
    created_at?: DateTimeFilter<"hsroles"> | Date | string
    modified_at?: DateTimeFilter<"hsroles"> | Date | string
    hspermissions_roles?: Hspermissions_rolesListRelationFilter
    hsusers_roles?: Hsusers_rolesListRelationFilter
  }, "id" | "name">

  export type hsrolesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
    _count?: hsrolesCountOrderByAggregateInput
    _avg?: hsrolesAvgOrderByAggregateInput
    _max?: hsrolesMaxOrderByAggregateInput
    _min?: hsrolesMinOrderByAggregateInput
    _sum?: hsrolesSumOrderByAggregateInput
  }

  export type hsrolesScalarWhereWithAggregatesInput = {
    AND?: hsrolesScalarWhereWithAggregatesInput | hsrolesScalarWhereWithAggregatesInput[]
    OR?: hsrolesScalarWhereWithAggregatesInput[]
    NOT?: hsrolesScalarWhereWithAggregatesInput | hsrolesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"hsroles"> | number
    name?: StringWithAggregatesFilter<"hsroles"> | string
    description?: StringWithAggregatesFilter<"hsroles"> | string
    created_at?: DateTimeWithAggregatesFilter<"hsroles"> | Date | string
    modified_at?: DateTimeWithAggregatesFilter<"hsroles"> | Date | string
  }

  export type hspermissionsWhereInput = {
    AND?: hspermissionsWhereInput | hspermissionsWhereInput[]
    OR?: hspermissionsWhereInput[]
    NOT?: hspermissionsWhereInput | hspermissionsWhereInput[]
    id?: IntFilter<"hspermissions"> | number
    name?: StringFilter<"hspermissions"> | string
    description?: StringFilter<"hspermissions"> | string
    created_at?: DateTimeFilter<"hspermissions"> | Date | string
    modified_at?: DateTimeFilter<"hspermissions"> | Date | string
    hspermissions_roles?: Hspermissions_rolesListRelationFilter
    hsusers_permissions?: Hsusers_permissionsListRelationFilter
  }

  export type hspermissionsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
    hspermissions_roles?: hspermissions_rolesOrderByRelationAggregateInput
    hsusers_permissions?: hsusers_permissionsOrderByRelationAggregateInput
  }

  export type hspermissionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: hspermissionsWhereInput | hspermissionsWhereInput[]
    OR?: hspermissionsWhereInput[]
    NOT?: hspermissionsWhereInput | hspermissionsWhereInput[]
    description?: StringFilter<"hspermissions"> | string
    created_at?: DateTimeFilter<"hspermissions"> | Date | string
    modified_at?: DateTimeFilter<"hspermissions"> | Date | string
    hspermissions_roles?: Hspermissions_rolesListRelationFilter
    hsusers_permissions?: Hsusers_permissionsListRelationFilter
  }, "id" | "name">

  export type hspermissionsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
    _count?: hspermissionsCountOrderByAggregateInput
    _avg?: hspermissionsAvgOrderByAggregateInput
    _max?: hspermissionsMaxOrderByAggregateInput
    _min?: hspermissionsMinOrderByAggregateInput
    _sum?: hspermissionsSumOrderByAggregateInput
  }

  export type hspermissionsScalarWhereWithAggregatesInput = {
    AND?: hspermissionsScalarWhereWithAggregatesInput | hspermissionsScalarWhereWithAggregatesInput[]
    OR?: hspermissionsScalarWhereWithAggregatesInput[]
    NOT?: hspermissionsScalarWhereWithAggregatesInput | hspermissionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"hspermissions"> | number
    name?: StringWithAggregatesFilter<"hspermissions"> | string
    description?: StringWithAggregatesFilter<"hspermissions"> | string
    created_at?: DateTimeWithAggregatesFilter<"hspermissions"> | Date | string
    modified_at?: DateTimeWithAggregatesFilter<"hspermissions"> | Date | string
  }

  export type hspermissions_rolesWhereInput = {
    AND?: hspermissions_rolesWhereInput | hspermissions_rolesWhereInput[]
    OR?: hspermissions_rolesWhereInput[]
    NOT?: hspermissions_rolesWhereInput | hspermissions_rolesWhereInput[]
    role_id?: IntFilter<"hspermissions_roles"> | number
    permission_id?: IntFilter<"hspermissions_roles"> | number
    hspermissions?: XOR<HspermissionsScalarRelationFilter, hspermissionsWhereInput>
    hsroles?: XOR<HsrolesScalarRelationFilter, hsrolesWhereInput>
  }

  export type hspermissions_rolesOrderByWithRelationInput = {
    role_id?: SortOrder
    permission_id?: SortOrder
    hspermissions?: hspermissionsOrderByWithRelationInput
    hsroles?: hsrolesOrderByWithRelationInput
  }

  export type hspermissions_rolesWhereUniqueInput = Prisma.AtLeast<{
    role_id_permission_id?: hspermissions_rolesRole_idPermission_idCompoundUniqueInput
    AND?: hspermissions_rolesWhereInput | hspermissions_rolesWhereInput[]
    OR?: hspermissions_rolesWhereInput[]
    NOT?: hspermissions_rolesWhereInput | hspermissions_rolesWhereInput[]
    role_id?: IntFilter<"hspermissions_roles"> | number
    permission_id?: IntFilter<"hspermissions_roles"> | number
    hspermissions?: XOR<HspermissionsScalarRelationFilter, hspermissionsWhereInput>
    hsroles?: XOR<HsrolesScalarRelationFilter, hsrolesWhereInput>
  }, "role_id_permission_id">

  export type hspermissions_rolesOrderByWithAggregationInput = {
    role_id?: SortOrder
    permission_id?: SortOrder
    _count?: hspermissions_rolesCountOrderByAggregateInput
    _avg?: hspermissions_rolesAvgOrderByAggregateInput
    _max?: hspermissions_rolesMaxOrderByAggregateInput
    _min?: hspermissions_rolesMinOrderByAggregateInput
    _sum?: hspermissions_rolesSumOrderByAggregateInput
  }

  export type hspermissions_rolesScalarWhereWithAggregatesInput = {
    AND?: hspermissions_rolesScalarWhereWithAggregatesInput | hspermissions_rolesScalarWhereWithAggregatesInput[]
    OR?: hspermissions_rolesScalarWhereWithAggregatesInput[]
    NOT?: hspermissions_rolesScalarWhereWithAggregatesInput | hspermissions_rolesScalarWhereWithAggregatesInput[]
    role_id?: IntWithAggregatesFilter<"hspermissions_roles"> | number
    permission_id?: IntWithAggregatesFilter<"hspermissions_roles"> | number
  }

  export type hsusers_permissionsWhereInput = {
    AND?: hsusers_permissionsWhereInput | hsusers_permissionsWhereInput[]
    OR?: hsusers_permissionsWhereInput[]
    NOT?: hsusers_permissionsWhereInput | hsusers_permissionsWhereInput[]
    user_id?: IntFilter<"hsusers_permissions"> | number
    permission_id?: IntFilter<"hsusers_permissions"> | number
    hspermissions?: XOR<HspermissionsScalarRelationFilter, hspermissionsWhereInput>
    hsemployees?: XOR<HsemployeesScalarRelationFilter, hsemployeesWhereInput>
  }

  export type hsusers_permissionsOrderByWithRelationInput = {
    user_id?: SortOrder
    permission_id?: SortOrder
    hspermissions?: hspermissionsOrderByWithRelationInput
    hsemployees?: hsemployeesOrderByWithRelationInput
  }

  export type hsusers_permissionsWhereUniqueInput = Prisma.AtLeast<{
    user_id_permission_id?: hsusers_permissionsUser_idPermission_idCompoundUniqueInput
    AND?: hsusers_permissionsWhereInput | hsusers_permissionsWhereInput[]
    OR?: hsusers_permissionsWhereInput[]
    NOT?: hsusers_permissionsWhereInput | hsusers_permissionsWhereInput[]
    user_id?: IntFilter<"hsusers_permissions"> | number
    permission_id?: IntFilter<"hsusers_permissions"> | number
    hspermissions?: XOR<HspermissionsScalarRelationFilter, hspermissionsWhereInput>
    hsemployees?: XOR<HsemployeesScalarRelationFilter, hsemployeesWhereInput>
  }, "user_id_permission_id">

  export type hsusers_permissionsOrderByWithAggregationInput = {
    user_id?: SortOrder
    permission_id?: SortOrder
    _count?: hsusers_permissionsCountOrderByAggregateInput
    _avg?: hsusers_permissionsAvgOrderByAggregateInput
    _max?: hsusers_permissionsMaxOrderByAggregateInput
    _min?: hsusers_permissionsMinOrderByAggregateInput
    _sum?: hsusers_permissionsSumOrderByAggregateInput
  }

  export type hsusers_permissionsScalarWhereWithAggregatesInput = {
    AND?: hsusers_permissionsScalarWhereWithAggregatesInput | hsusers_permissionsScalarWhereWithAggregatesInput[]
    OR?: hsusers_permissionsScalarWhereWithAggregatesInput[]
    NOT?: hsusers_permissionsScalarWhereWithAggregatesInput | hsusers_permissionsScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"hsusers_permissions"> | number
    permission_id?: IntWithAggregatesFilter<"hsusers_permissions"> | number
  }

  export type hsusers_rolesWhereInput = {
    AND?: hsusers_rolesWhereInput | hsusers_rolesWhereInput[]
    OR?: hsusers_rolesWhereInput[]
    NOT?: hsusers_rolesWhereInput | hsusers_rolesWhereInput[]
    user_id?: IntFilter<"hsusers_roles"> | number
    role_id?: IntFilter<"hsusers_roles"> | number
    hsroles?: XOR<HsrolesScalarRelationFilter, hsrolesWhereInput>
    heemployees?: XOR<HsemployeesScalarRelationFilter, hsemployeesWhereInput>
  }

  export type hsusers_rolesOrderByWithRelationInput = {
    user_id?: SortOrder
    role_id?: SortOrder
    hsroles?: hsrolesOrderByWithRelationInput
    heemployees?: hsemployeesOrderByWithRelationInput
  }

  export type hsusers_rolesWhereUniqueInput = Prisma.AtLeast<{
    user_id_role_id?: hsusers_rolesUser_idRole_idCompoundUniqueInput
    AND?: hsusers_rolesWhereInput | hsusers_rolesWhereInput[]
    OR?: hsusers_rolesWhereInput[]
    NOT?: hsusers_rolesWhereInput | hsusers_rolesWhereInput[]
    user_id?: IntFilter<"hsusers_roles"> | number
    role_id?: IntFilter<"hsusers_roles"> | number
    hsroles?: XOR<HsrolesScalarRelationFilter, hsrolesWhereInput>
    heemployees?: XOR<HsemployeesScalarRelationFilter, hsemployeesWhereInput>
  }, "user_id_role_id">

  export type hsusers_rolesOrderByWithAggregationInput = {
    user_id?: SortOrder
    role_id?: SortOrder
    _count?: hsusers_rolesCountOrderByAggregateInput
    _avg?: hsusers_rolesAvgOrderByAggregateInput
    _max?: hsusers_rolesMaxOrderByAggregateInput
    _min?: hsusers_rolesMinOrderByAggregateInput
    _sum?: hsusers_rolesSumOrderByAggregateInput
  }

  export type hsusers_rolesScalarWhereWithAggregatesInput = {
    AND?: hsusers_rolesScalarWhereWithAggregatesInput | hsusers_rolesScalarWhereWithAggregatesInput[]
    OR?: hsusers_rolesScalarWhereWithAggregatesInput[]
    NOT?: hsusers_rolesScalarWhereWithAggregatesInput | hsusers_rolesScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"hsusers_roles"> | number
    role_id?: IntWithAggregatesFilter<"hsusers_roles"> | number
  }

  export type hsbranchesWhereInput = {
    AND?: hsbranchesWhereInput | hsbranchesWhereInput[]
    OR?: hsbranchesWhereInput[]
    NOT?: hsbranchesWhereInput | hsbranchesWhereInput[]
    id?: IntFilter<"hsbranches"> | number
    description?: StringFilter<"hsbranches"> | string
    hsemployees?: HsemployeesListRelationFilter
    hsvalidities?: HsvaliditiesListRelationFilter
    hsvalidity_requests?: Hsvalidity_requestsListRelationFilter
  }

  export type hsbranchesOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrder
    hsemployees?: hsemployeesOrderByRelationAggregateInput
    hsvalidities?: hsvaliditiesOrderByRelationAggregateInput
    hsvalidity_requests?: hsvalidity_requestsOrderByRelationAggregateInput
  }

  export type hsbranchesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: hsbranchesWhereInput | hsbranchesWhereInput[]
    OR?: hsbranchesWhereInput[]
    NOT?: hsbranchesWhereInput | hsbranchesWhereInput[]
    description?: StringFilter<"hsbranches"> | string
    hsemployees?: HsemployeesListRelationFilter
    hsvalidities?: HsvaliditiesListRelationFilter
    hsvalidity_requests?: Hsvalidity_requestsListRelationFilter
  }, "id">

  export type hsbranchesOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrder
    _count?: hsbranchesCountOrderByAggregateInput
    _avg?: hsbranchesAvgOrderByAggregateInput
    _max?: hsbranchesMaxOrderByAggregateInput
    _min?: hsbranchesMinOrderByAggregateInput
    _sum?: hsbranchesSumOrderByAggregateInput
  }

  export type hsbranchesScalarWhereWithAggregatesInput = {
    AND?: hsbranchesScalarWhereWithAggregatesInput | hsbranchesScalarWhereWithAggregatesInput[]
    OR?: hsbranchesScalarWhereWithAggregatesInput[]
    NOT?: hsbranchesScalarWhereWithAggregatesInput | hsbranchesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"hsbranches"> | number
    description?: StringWithAggregatesFilter<"hsbranches"> | string
  }

  export type hsvaliditiesWhereInput = {
    AND?: hsvaliditiesWhereInput | hsvaliditiesWhereInput[]
    OR?: hsvaliditiesWhereInput[]
    NOT?: hsvaliditiesWhereInput | hsvaliditiesWhereInput[]
    id?: IntFilter<"hsvalidities"> | number
    branch_id?: IntFilter<"hsvalidities"> | number
    employee_id?: IntFilter<"hsvalidities"> | number
    status?: Enumhsvalidities_statusFilter<"hsvalidities"> | $Enums.hsvalidities_status
    request_id?: IntNullableFilter<"hsvalidities"> | number | null
    created_at?: DateTimeFilter<"hsvalidities"> | Date | string
    modified_at?: DateTimeFilter<"hsvalidities"> | Date | string
    hsbranches?: XOR<HsbranchesScalarRelationFilter, hsbranchesWhereInput>
    hsemployees?: XOR<HsemployeesScalarRelationFilter, hsemployeesWhereInput>
    hsvalidity_requests?: XOR<Hsvalidity_requestsNullableScalarRelationFilter, hsvalidity_requestsWhereInput> | null
    hsvalidity_products?: Hsvalidity_productsListRelationFilter
  }

  export type hsvaliditiesOrderByWithRelationInput = {
    id?: SortOrder
    branch_id?: SortOrder
    employee_id?: SortOrder
    status?: SortOrder
    request_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
    hsbranches?: hsbranchesOrderByWithRelationInput
    hsemployees?: hsemployeesOrderByWithRelationInput
    hsvalidity_requests?: hsvalidity_requestsOrderByWithRelationInput
    hsvalidity_products?: hsvalidity_productsOrderByRelationAggregateInput
  }

  export type hsvaliditiesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: hsvaliditiesWhereInput | hsvaliditiesWhereInput[]
    OR?: hsvaliditiesWhereInput[]
    NOT?: hsvaliditiesWhereInput | hsvaliditiesWhereInput[]
    branch_id?: IntFilter<"hsvalidities"> | number
    employee_id?: IntFilter<"hsvalidities"> | number
    status?: Enumhsvalidities_statusFilter<"hsvalidities"> | $Enums.hsvalidities_status
    request_id?: IntNullableFilter<"hsvalidities"> | number | null
    created_at?: DateTimeFilter<"hsvalidities"> | Date | string
    modified_at?: DateTimeFilter<"hsvalidities"> | Date | string
    hsbranches?: XOR<HsbranchesScalarRelationFilter, hsbranchesWhereInput>
    hsemployees?: XOR<HsemployeesScalarRelationFilter, hsemployeesWhereInput>
    hsvalidity_requests?: XOR<Hsvalidity_requestsNullableScalarRelationFilter, hsvalidity_requestsWhereInput> | null
    hsvalidity_products?: Hsvalidity_productsListRelationFilter
  }, "id">

  export type hsvaliditiesOrderByWithAggregationInput = {
    id?: SortOrder
    branch_id?: SortOrder
    employee_id?: SortOrder
    status?: SortOrder
    request_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
    _count?: hsvaliditiesCountOrderByAggregateInput
    _avg?: hsvaliditiesAvgOrderByAggregateInput
    _max?: hsvaliditiesMaxOrderByAggregateInput
    _min?: hsvaliditiesMinOrderByAggregateInput
    _sum?: hsvaliditiesSumOrderByAggregateInput
  }

  export type hsvaliditiesScalarWhereWithAggregatesInput = {
    AND?: hsvaliditiesScalarWhereWithAggregatesInput | hsvaliditiesScalarWhereWithAggregatesInput[]
    OR?: hsvaliditiesScalarWhereWithAggregatesInput[]
    NOT?: hsvaliditiesScalarWhereWithAggregatesInput | hsvaliditiesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"hsvalidities"> | number
    branch_id?: IntWithAggregatesFilter<"hsvalidities"> | number
    employee_id?: IntWithAggregatesFilter<"hsvalidities"> | number
    status?: Enumhsvalidities_statusWithAggregatesFilter<"hsvalidities"> | $Enums.hsvalidities_status
    request_id?: IntNullableWithAggregatesFilter<"hsvalidities"> | number | null
    created_at?: DateTimeWithAggregatesFilter<"hsvalidities"> | Date | string
    modified_at?: DateTimeWithAggregatesFilter<"hsvalidities"> | Date | string
  }

  export type hsvalidity_productsWhereInput = {
    AND?: hsvalidity_productsWhereInput | hsvalidity_productsWhereInput[]
    OR?: hsvalidity_productsWhereInput[]
    NOT?: hsvalidity_productsWhereInput | hsvalidity_productsWhereInput[]
    id?: IntFilter<"hsvalidity_products"> | number
    validity_id?: IntFilter<"hsvalidity_products"> | number
    product_cod?: IntFilter<"hsvalidity_products"> | number
    quantity?: IntFilter<"hsvalidity_products"> | number
    validity_date?: DateTimeFilter<"hsvalidity_products"> | Date | string
    treat_id?: IntFilter<"hsvalidity_products"> | number
    auxiliary_code?: StringFilter<"hsvalidity_products"> | string
    hsvalidity_treatments?: XOR<Hsvalidity_treatmentsScalarRelationFilter, hsvalidity_treatmentsWhereInput>
    hsvalidities?: XOR<HsvaliditiesScalarRelationFilter, hsvaliditiesWhereInput>
  }

  export type hsvalidity_productsOrderByWithRelationInput = {
    id?: SortOrder
    validity_id?: SortOrder
    product_cod?: SortOrder
    quantity?: SortOrder
    validity_date?: SortOrder
    treat_id?: SortOrder
    auxiliary_code?: SortOrder
    hsvalidity_treatments?: hsvalidity_treatmentsOrderByWithRelationInput
    hsvalidities?: hsvaliditiesOrderByWithRelationInput
  }

  export type hsvalidity_productsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: hsvalidity_productsWhereInput | hsvalidity_productsWhereInput[]
    OR?: hsvalidity_productsWhereInput[]
    NOT?: hsvalidity_productsWhereInput | hsvalidity_productsWhereInput[]
    validity_id?: IntFilter<"hsvalidity_products"> | number
    product_cod?: IntFilter<"hsvalidity_products"> | number
    quantity?: IntFilter<"hsvalidity_products"> | number
    validity_date?: DateTimeFilter<"hsvalidity_products"> | Date | string
    treat_id?: IntFilter<"hsvalidity_products"> | number
    auxiliary_code?: StringFilter<"hsvalidity_products"> | string
    hsvalidity_treatments?: XOR<Hsvalidity_treatmentsScalarRelationFilter, hsvalidity_treatmentsWhereInput>
    hsvalidities?: XOR<HsvaliditiesScalarRelationFilter, hsvaliditiesWhereInput>
  }, "id">

  export type hsvalidity_productsOrderByWithAggregationInput = {
    id?: SortOrder
    validity_id?: SortOrder
    product_cod?: SortOrder
    quantity?: SortOrder
    validity_date?: SortOrder
    treat_id?: SortOrder
    auxiliary_code?: SortOrder
    _count?: hsvalidity_productsCountOrderByAggregateInput
    _avg?: hsvalidity_productsAvgOrderByAggregateInput
    _max?: hsvalidity_productsMaxOrderByAggregateInput
    _min?: hsvalidity_productsMinOrderByAggregateInput
    _sum?: hsvalidity_productsSumOrderByAggregateInput
  }

  export type hsvalidity_productsScalarWhereWithAggregatesInput = {
    AND?: hsvalidity_productsScalarWhereWithAggregatesInput | hsvalidity_productsScalarWhereWithAggregatesInput[]
    OR?: hsvalidity_productsScalarWhereWithAggregatesInput[]
    NOT?: hsvalidity_productsScalarWhereWithAggregatesInput | hsvalidity_productsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"hsvalidity_products"> | number
    validity_id?: IntWithAggregatesFilter<"hsvalidity_products"> | number
    product_cod?: IntWithAggregatesFilter<"hsvalidity_products"> | number
    quantity?: IntWithAggregatesFilter<"hsvalidity_products"> | number
    validity_date?: DateTimeWithAggregatesFilter<"hsvalidity_products"> | Date | string
    treat_id?: IntWithAggregatesFilter<"hsvalidity_products"> | number
    auxiliary_code?: StringWithAggregatesFilter<"hsvalidity_products"> | string
  }

  export type hsvalidity_requestsWhereInput = {
    AND?: hsvalidity_requestsWhereInput | hsvalidity_requestsWhereInput[]
    OR?: hsvalidity_requestsWhereInput[]
    NOT?: hsvalidity_requestsWhereInput | hsvalidity_requestsWhereInput[]
    id?: IntFilter<"hsvalidity_requests"> | number
    branch_id?: IntFilter<"hsvalidity_requests"> | number
    analyst_id?: IntFilter<"hsvalidity_requests"> | number
    conferee_id?: IntFilter<"hsvalidity_requests"> | number
    status?: Enumhsvalidity_requests_statusFilter<"hsvalidity_requests"> | $Enums.hsvalidity_requests_status
    created_at?: DateTimeFilter<"hsvalidity_requests"> | Date | string
    modified_at?: DateTimeFilter<"hsvalidity_requests"> | Date | string
    hsvalidities?: HsvaliditiesListRelationFilter
    hsvalidity_request_products?: Hsvalidity_request_productsListRelationFilter
    analyst?: XOR<HsemployeesScalarRelationFilter, hsemployeesWhereInput>
    hsbranches?: XOR<HsbranchesScalarRelationFilter, hsbranchesWhereInput>
    conferee?: XOR<HsemployeesScalarRelationFilter, hsemployeesWhereInput>
  }

  export type hsvalidity_requestsOrderByWithRelationInput = {
    id?: SortOrder
    branch_id?: SortOrder
    analyst_id?: SortOrder
    conferee_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
    hsvalidities?: hsvaliditiesOrderByRelationAggregateInput
    hsvalidity_request_products?: hsvalidity_request_productsOrderByRelationAggregateInput
    analyst?: hsemployeesOrderByWithRelationInput
    hsbranches?: hsbranchesOrderByWithRelationInput
    conferee?: hsemployeesOrderByWithRelationInput
  }

  export type hsvalidity_requestsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: hsvalidity_requestsWhereInput | hsvalidity_requestsWhereInput[]
    OR?: hsvalidity_requestsWhereInput[]
    NOT?: hsvalidity_requestsWhereInput | hsvalidity_requestsWhereInput[]
    branch_id?: IntFilter<"hsvalidity_requests"> | number
    analyst_id?: IntFilter<"hsvalidity_requests"> | number
    conferee_id?: IntFilter<"hsvalidity_requests"> | number
    status?: Enumhsvalidity_requests_statusFilter<"hsvalidity_requests"> | $Enums.hsvalidity_requests_status
    created_at?: DateTimeFilter<"hsvalidity_requests"> | Date | string
    modified_at?: DateTimeFilter<"hsvalidity_requests"> | Date | string
    hsvalidities?: HsvaliditiesListRelationFilter
    hsvalidity_request_products?: Hsvalidity_request_productsListRelationFilter
    analyst?: XOR<HsemployeesScalarRelationFilter, hsemployeesWhereInput>
    hsbranches?: XOR<HsbranchesScalarRelationFilter, hsbranchesWhereInput>
    conferee?: XOR<HsemployeesScalarRelationFilter, hsemployeesWhereInput>
  }, "id">

  export type hsvalidity_requestsOrderByWithAggregationInput = {
    id?: SortOrder
    branch_id?: SortOrder
    analyst_id?: SortOrder
    conferee_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
    _count?: hsvalidity_requestsCountOrderByAggregateInput
    _avg?: hsvalidity_requestsAvgOrderByAggregateInput
    _max?: hsvalidity_requestsMaxOrderByAggregateInput
    _min?: hsvalidity_requestsMinOrderByAggregateInput
    _sum?: hsvalidity_requestsSumOrderByAggregateInput
  }

  export type hsvalidity_requestsScalarWhereWithAggregatesInput = {
    AND?: hsvalidity_requestsScalarWhereWithAggregatesInput | hsvalidity_requestsScalarWhereWithAggregatesInput[]
    OR?: hsvalidity_requestsScalarWhereWithAggregatesInput[]
    NOT?: hsvalidity_requestsScalarWhereWithAggregatesInput | hsvalidity_requestsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"hsvalidity_requests"> | number
    branch_id?: IntWithAggregatesFilter<"hsvalidity_requests"> | number
    analyst_id?: IntWithAggregatesFilter<"hsvalidity_requests"> | number
    conferee_id?: IntWithAggregatesFilter<"hsvalidity_requests"> | number
    status?: Enumhsvalidity_requests_statusWithAggregatesFilter<"hsvalidity_requests"> | $Enums.hsvalidity_requests_status
    created_at?: DateTimeWithAggregatesFilter<"hsvalidity_requests"> | Date | string
    modified_at?: DateTimeWithAggregatesFilter<"hsvalidity_requests"> | Date | string
  }

  export type hsvalidity_request_productsWhereInput = {
    AND?: hsvalidity_request_productsWhereInput | hsvalidity_request_productsWhereInput[]
    OR?: hsvalidity_request_productsWhereInput[]
    NOT?: hsvalidity_request_productsWhereInput | hsvalidity_request_productsWhereInput[]
    id?: IntFilter<"hsvalidity_request_products"> | number
    request_id?: IntFilter<"hsvalidity_request_products"> | number
    status?: Enumhsvalidity_request_products_statusFilter<"hsvalidity_request_products"> | $Enums.hsvalidity_request_products_status
    product_cod?: IntFilter<"hsvalidity_request_products"> | number
    validity_date?: DateTimeFilter<"hsvalidity_request_products"> | Date | string
    auxiliary_code?: StringFilter<"hsvalidity_request_products"> | string
    hsvalidity_requests?: XOR<Hsvalidity_requestsScalarRelationFilter, hsvalidity_requestsWhereInput>
  }

  export type hsvalidity_request_productsOrderByWithRelationInput = {
    id?: SortOrder
    request_id?: SortOrder
    status?: SortOrder
    product_cod?: SortOrder
    validity_date?: SortOrder
    auxiliary_code?: SortOrder
    hsvalidity_requests?: hsvalidity_requestsOrderByWithRelationInput
  }

  export type hsvalidity_request_productsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: hsvalidity_request_productsWhereInput | hsvalidity_request_productsWhereInput[]
    OR?: hsvalidity_request_productsWhereInput[]
    NOT?: hsvalidity_request_productsWhereInput | hsvalidity_request_productsWhereInput[]
    request_id?: IntFilter<"hsvalidity_request_products"> | number
    status?: Enumhsvalidity_request_products_statusFilter<"hsvalidity_request_products"> | $Enums.hsvalidity_request_products_status
    product_cod?: IntFilter<"hsvalidity_request_products"> | number
    validity_date?: DateTimeFilter<"hsvalidity_request_products"> | Date | string
    auxiliary_code?: StringFilter<"hsvalidity_request_products"> | string
    hsvalidity_requests?: XOR<Hsvalidity_requestsScalarRelationFilter, hsvalidity_requestsWhereInput>
  }, "id">

  export type hsvalidity_request_productsOrderByWithAggregationInput = {
    id?: SortOrder
    request_id?: SortOrder
    status?: SortOrder
    product_cod?: SortOrder
    validity_date?: SortOrder
    auxiliary_code?: SortOrder
    _count?: hsvalidity_request_productsCountOrderByAggregateInput
    _avg?: hsvalidity_request_productsAvgOrderByAggregateInput
    _max?: hsvalidity_request_productsMaxOrderByAggregateInput
    _min?: hsvalidity_request_productsMinOrderByAggregateInput
    _sum?: hsvalidity_request_productsSumOrderByAggregateInput
  }

  export type hsvalidity_request_productsScalarWhereWithAggregatesInput = {
    AND?: hsvalidity_request_productsScalarWhereWithAggregatesInput | hsvalidity_request_productsScalarWhereWithAggregatesInput[]
    OR?: hsvalidity_request_productsScalarWhereWithAggregatesInput[]
    NOT?: hsvalidity_request_productsScalarWhereWithAggregatesInput | hsvalidity_request_productsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"hsvalidity_request_products"> | number
    request_id?: IntWithAggregatesFilter<"hsvalidity_request_products"> | number
    status?: Enumhsvalidity_request_products_statusWithAggregatesFilter<"hsvalidity_request_products"> | $Enums.hsvalidity_request_products_status
    product_cod?: IntWithAggregatesFilter<"hsvalidity_request_products"> | number
    validity_date?: DateTimeWithAggregatesFilter<"hsvalidity_request_products"> | Date | string
    auxiliary_code?: StringWithAggregatesFilter<"hsvalidity_request_products"> | string
  }

  export type hsvalidity_treatmentsWhereInput = {
    AND?: hsvalidity_treatmentsWhereInput | hsvalidity_treatmentsWhereInput[]
    OR?: hsvalidity_treatmentsWhereInput[]
    NOT?: hsvalidity_treatmentsWhereInput | hsvalidity_treatmentsWhereInput[]
    id?: IntFilter<"hsvalidity_treatments"> | number
    description?: StringFilter<"hsvalidity_treatments"> | string
    hsvalidity_products?: Hsvalidity_productsListRelationFilter
  }

  export type hsvalidity_treatmentsOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrder
    hsvalidity_products?: hsvalidity_productsOrderByRelationAggregateInput
  }

  export type hsvalidity_treatmentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: hsvalidity_treatmentsWhereInput | hsvalidity_treatmentsWhereInput[]
    OR?: hsvalidity_treatmentsWhereInput[]
    NOT?: hsvalidity_treatmentsWhereInput | hsvalidity_treatmentsWhereInput[]
    description?: StringFilter<"hsvalidity_treatments"> | string
    hsvalidity_products?: Hsvalidity_productsListRelationFilter
  }, "id">

  export type hsvalidity_treatmentsOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrder
    _count?: hsvalidity_treatmentsCountOrderByAggregateInput
    _avg?: hsvalidity_treatmentsAvgOrderByAggregateInput
    _max?: hsvalidity_treatmentsMaxOrderByAggregateInput
    _min?: hsvalidity_treatmentsMinOrderByAggregateInput
    _sum?: hsvalidity_treatmentsSumOrderByAggregateInput
  }

  export type hsvalidity_treatmentsScalarWhereWithAggregatesInput = {
    AND?: hsvalidity_treatmentsScalarWhereWithAggregatesInput | hsvalidity_treatmentsScalarWhereWithAggregatesInput[]
    OR?: hsvalidity_treatmentsScalarWhereWithAggregatesInput[]
    NOT?: hsvalidity_treatmentsScalarWhereWithAggregatesInput | hsvalidity_treatmentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"hsvalidity_treatments"> | number
    description?: StringWithAggregatesFilter<"hsvalidity_treatments"> | string
  }

  export type hssessionsWhereInput = {
    AND?: hssessionsWhereInput | hssessionsWhereInput[]
    OR?: hssessionsWhereInput[]
    NOT?: hssessionsWhereInput | hssessionsWhereInput[]
    id?: UuidFilter<"hssessions"> | string
    user_id?: IntFilter<"hssessions"> | number
    token?: StringFilter<"hssessions"> | string
    created_at?: DateTimeFilter<"hssessions"> | Date | string
    expires_at?: DateTimeNullableFilter<"hssessions"> | Date | string | null
    user?: XOR<HsemployeesScalarRelationFilter, hsemployeesWhereInput>
  }

  export type hssessionsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    token?: SortOrder
    created_at?: SortOrder
    expires_at?: SortOrderInput | SortOrder
    user?: hsemployeesOrderByWithRelationInput
  }

  export type hssessionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: hssessionsWhereInput | hssessionsWhereInput[]
    OR?: hssessionsWhereInput[]
    NOT?: hssessionsWhereInput | hssessionsWhereInput[]
    user_id?: IntFilter<"hssessions"> | number
    created_at?: DateTimeFilter<"hssessions"> | Date | string
    expires_at?: DateTimeNullableFilter<"hssessions"> | Date | string | null
    user?: XOR<HsemployeesScalarRelationFilter, hsemployeesWhereInput>
  }, "id" | "token">

  export type hssessionsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    token?: SortOrder
    created_at?: SortOrder
    expires_at?: SortOrderInput | SortOrder
    _count?: hssessionsCountOrderByAggregateInput
    _avg?: hssessionsAvgOrderByAggregateInput
    _max?: hssessionsMaxOrderByAggregateInput
    _min?: hssessionsMinOrderByAggregateInput
    _sum?: hssessionsSumOrderByAggregateInput
  }

  export type hssessionsScalarWhereWithAggregatesInput = {
    AND?: hssessionsScalarWhereWithAggregatesInput | hssessionsScalarWhereWithAggregatesInput[]
    OR?: hssessionsScalarWhereWithAggregatesInput[]
    NOT?: hssessionsScalarWhereWithAggregatesInput | hssessionsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"hssessions"> | string
    user_id?: IntWithAggregatesFilter<"hssessions"> | number
    token?: StringWithAggregatesFilter<"hssessions"> | string
    created_at?: DateTimeWithAggregatesFilter<"hssessions"> | Date | string
    expires_at?: DateTimeNullableWithAggregatesFilter<"hssessions"> | Date | string | null
  }

  export type hsemployeesCreateInput = {
    winthor_id?: number
    name: string
    username: string
    password: string
    created_at?: Date | string
    modified_at?: Date | string
    branch: hsbranchesCreateNestedOneWithoutHsemployeesInput
    sessions?: hssessionsCreateNestedManyWithoutUserInput
    hsusers_permissions?: hsusers_permissionsCreateNestedManyWithoutHsemployeesInput
    hsusers_roles?: hsusers_rolesCreateNestedManyWithoutHeemployeesInput
    hsvalidities?: hsvaliditiesCreateNestedManyWithoutHsemployeesInput
    analystRequests?: hsvalidity_requestsCreateNestedManyWithoutAnalystInput
    confereeRequests?: hsvalidity_requestsCreateNestedManyWithoutConfereeInput
  }

  export type hsemployeesUncheckedCreateInput = {
    id?: number
    branch_id: number
    winthor_id?: number
    name: string
    username: string
    password: string
    created_at?: Date | string
    modified_at?: Date | string
    sessions?: hssessionsUncheckedCreateNestedManyWithoutUserInput
    hsusers_permissions?: hsusers_permissionsUncheckedCreateNestedManyWithoutHsemployeesInput
    hsusers_roles?: hsusers_rolesUncheckedCreateNestedManyWithoutHeemployeesInput
    hsvalidities?: hsvaliditiesUncheckedCreateNestedManyWithoutHsemployeesInput
    analystRequests?: hsvalidity_requestsUncheckedCreateNestedManyWithoutAnalystInput
    confereeRequests?: hsvalidity_requestsUncheckedCreateNestedManyWithoutConfereeInput
  }

  export type hsemployeesUpdateInput = {
    winthor_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: hsbranchesUpdateOneRequiredWithoutHsemployeesNestedInput
    sessions?: hssessionsUpdateManyWithoutUserNestedInput
    hsusers_permissions?: hsusers_permissionsUpdateManyWithoutHsemployeesNestedInput
    hsusers_roles?: hsusers_rolesUpdateManyWithoutHeemployeesNestedInput
    hsvalidities?: hsvaliditiesUpdateManyWithoutHsemployeesNestedInput
    analystRequests?: hsvalidity_requestsUpdateManyWithoutAnalystNestedInput
    confereeRequests?: hsvalidity_requestsUpdateManyWithoutConfereeNestedInput
  }

  export type hsemployeesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    branch_id?: IntFieldUpdateOperationsInput | number
    winthor_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: hssessionsUncheckedUpdateManyWithoutUserNestedInput
    hsusers_permissions?: hsusers_permissionsUncheckedUpdateManyWithoutHsemployeesNestedInput
    hsusers_roles?: hsusers_rolesUncheckedUpdateManyWithoutHeemployeesNestedInput
    hsvalidities?: hsvaliditiesUncheckedUpdateManyWithoutHsemployeesNestedInput
    analystRequests?: hsvalidity_requestsUncheckedUpdateManyWithoutAnalystNestedInput
    confereeRequests?: hsvalidity_requestsUncheckedUpdateManyWithoutConfereeNestedInput
  }

  export type hsemployeesCreateManyInput = {
    id?: number
    branch_id: number
    winthor_id?: number
    name: string
    username: string
    password: string
    created_at?: Date | string
    modified_at?: Date | string
  }

  export type hsemployeesUpdateManyMutationInput = {
    winthor_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type hsemployeesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    branch_id?: IntFieldUpdateOperationsInput | number
    winthor_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type hsrolesCreateInput = {
    name: string
    description: string
    created_at?: Date | string
    modified_at?: Date | string
    hspermissions_roles?: hspermissions_rolesCreateNestedManyWithoutHsrolesInput
    hsusers_roles?: hsusers_rolesCreateNestedManyWithoutHsrolesInput
  }

  export type hsrolesUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    created_at?: Date | string
    modified_at?: Date | string
    hspermissions_roles?: hspermissions_rolesUncheckedCreateNestedManyWithoutHsrolesInput
    hsusers_roles?: hsusers_rolesUncheckedCreateNestedManyWithoutHsrolesInput
  }

  export type hsrolesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    hspermissions_roles?: hspermissions_rolesUpdateManyWithoutHsrolesNestedInput
    hsusers_roles?: hsusers_rolesUpdateManyWithoutHsrolesNestedInput
  }

  export type hsrolesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    hspermissions_roles?: hspermissions_rolesUncheckedUpdateManyWithoutHsrolesNestedInput
    hsusers_roles?: hsusers_rolesUncheckedUpdateManyWithoutHsrolesNestedInput
  }

  export type hsrolesCreateManyInput = {
    id?: number
    name: string
    description: string
    created_at?: Date | string
    modified_at?: Date | string
  }

  export type hsrolesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type hsrolesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type hspermissionsCreateInput = {
    name: string
    description: string
    created_at?: Date | string
    modified_at?: Date | string
    hspermissions_roles?: hspermissions_rolesCreateNestedManyWithoutHspermissionsInput
    hsusers_permissions?: hsusers_permissionsCreateNestedManyWithoutHspermissionsInput
  }

  export type hspermissionsUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    created_at?: Date | string
    modified_at?: Date | string
    hspermissions_roles?: hspermissions_rolesUncheckedCreateNestedManyWithoutHspermissionsInput
    hsusers_permissions?: hsusers_permissionsUncheckedCreateNestedManyWithoutHspermissionsInput
  }

  export type hspermissionsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    hspermissions_roles?: hspermissions_rolesUpdateManyWithoutHspermissionsNestedInput
    hsusers_permissions?: hsusers_permissionsUpdateManyWithoutHspermissionsNestedInput
  }

  export type hspermissionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    hspermissions_roles?: hspermissions_rolesUncheckedUpdateManyWithoutHspermissionsNestedInput
    hsusers_permissions?: hsusers_permissionsUncheckedUpdateManyWithoutHspermissionsNestedInput
  }

  export type hspermissionsCreateManyInput = {
    id?: number
    name: string
    description: string
    created_at?: Date | string
    modified_at?: Date | string
  }

  export type hspermissionsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type hspermissionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type hspermissions_rolesCreateInput = {
    hspermissions: hspermissionsCreateNestedOneWithoutHspermissions_rolesInput
    hsroles: hsrolesCreateNestedOneWithoutHspermissions_rolesInput
  }

  export type hspermissions_rolesUncheckedCreateInput = {
    role_id: number
    permission_id: number
  }

  export type hspermissions_rolesUpdateInput = {
    hspermissions?: hspermissionsUpdateOneRequiredWithoutHspermissions_rolesNestedInput
    hsroles?: hsrolesUpdateOneRequiredWithoutHspermissions_rolesNestedInput
  }

  export type hspermissions_rolesUncheckedUpdateInput = {
    role_id?: IntFieldUpdateOperationsInput | number
    permission_id?: IntFieldUpdateOperationsInput | number
  }

  export type hspermissions_rolesCreateManyInput = {
    role_id: number
    permission_id: number
  }

  export type hspermissions_rolesUpdateManyMutationInput = {

  }

  export type hspermissions_rolesUncheckedUpdateManyInput = {
    role_id?: IntFieldUpdateOperationsInput | number
    permission_id?: IntFieldUpdateOperationsInput | number
  }

  export type hsusers_permissionsCreateInput = {
    hspermissions: hspermissionsCreateNestedOneWithoutHsusers_permissionsInput
    hsemployees: hsemployeesCreateNestedOneWithoutHsusers_permissionsInput
  }

  export type hsusers_permissionsUncheckedCreateInput = {
    user_id: number
    permission_id: number
  }

  export type hsusers_permissionsUpdateInput = {
    hspermissions?: hspermissionsUpdateOneRequiredWithoutHsusers_permissionsNestedInput
    hsemployees?: hsemployeesUpdateOneRequiredWithoutHsusers_permissionsNestedInput
  }

  export type hsusers_permissionsUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    permission_id?: IntFieldUpdateOperationsInput | number
  }

  export type hsusers_permissionsCreateManyInput = {
    user_id: number
    permission_id: number
  }

  export type hsusers_permissionsUpdateManyMutationInput = {

  }

  export type hsusers_permissionsUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    permission_id?: IntFieldUpdateOperationsInput | number
  }

  export type hsusers_rolesCreateInput = {
    hsroles: hsrolesCreateNestedOneWithoutHsusers_rolesInput
    heemployees: hsemployeesCreateNestedOneWithoutHsusers_rolesInput
  }

  export type hsusers_rolesUncheckedCreateInput = {
    user_id: number
    role_id: number
  }

  export type hsusers_rolesUpdateInput = {
    hsroles?: hsrolesUpdateOneRequiredWithoutHsusers_rolesNestedInput
    heemployees?: hsemployeesUpdateOneRequiredWithoutHsusers_rolesNestedInput
  }

  export type hsusers_rolesUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    role_id?: IntFieldUpdateOperationsInput | number
  }

  export type hsusers_rolesCreateManyInput = {
    user_id: number
    role_id: number
  }

  export type hsusers_rolesUpdateManyMutationInput = {

  }

  export type hsusers_rolesUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    role_id?: IntFieldUpdateOperationsInput | number
  }

  export type hsbranchesCreateInput = {
    description: string
    hsemployees?: hsemployeesCreateNestedManyWithoutBranchInput
    hsvalidities?: hsvaliditiesCreateNestedManyWithoutHsbranchesInput
    hsvalidity_requests?: hsvalidity_requestsCreateNestedManyWithoutHsbranchesInput
  }

  export type hsbranchesUncheckedCreateInput = {
    id?: number
    description: string
    hsemployees?: hsemployeesUncheckedCreateNestedManyWithoutBranchInput
    hsvalidities?: hsvaliditiesUncheckedCreateNestedManyWithoutHsbranchesInput
    hsvalidity_requests?: hsvalidity_requestsUncheckedCreateNestedManyWithoutHsbranchesInput
  }

  export type hsbranchesUpdateInput = {
    description?: StringFieldUpdateOperationsInput | string
    hsemployees?: hsemployeesUpdateManyWithoutBranchNestedInput
    hsvalidities?: hsvaliditiesUpdateManyWithoutHsbranchesNestedInput
    hsvalidity_requests?: hsvalidity_requestsUpdateManyWithoutHsbranchesNestedInput
  }

  export type hsbranchesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    hsemployees?: hsemployeesUncheckedUpdateManyWithoutBranchNestedInput
    hsvalidities?: hsvaliditiesUncheckedUpdateManyWithoutHsbranchesNestedInput
    hsvalidity_requests?: hsvalidity_requestsUncheckedUpdateManyWithoutHsbranchesNestedInput
  }

  export type hsbranchesCreateManyInput = {
    id?: number
    description: string
  }

  export type hsbranchesUpdateManyMutationInput = {
    description?: StringFieldUpdateOperationsInput | string
  }

  export type hsbranchesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type hsvaliditiesCreateInput = {
    status?: $Enums.hsvalidities_status
    created_at?: Date | string
    modified_at?: Date | string
    hsbranches: hsbranchesCreateNestedOneWithoutHsvaliditiesInput
    hsemployees: hsemployeesCreateNestedOneWithoutHsvaliditiesInput
    hsvalidity_requests?: hsvalidity_requestsCreateNestedOneWithoutHsvaliditiesInput
    hsvalidity_products?: hsvalidity_productsCreateNestedManyWithoutHsvaliditiesInput
  }

  export type hsvaliditiesUncheckedCreateInput = {
    id?: number
    branch_id: number
    employee_id: number
    status?: $Enums.hsvalidities_status
    request_id?: number | null
    created_at?: Date | string
    modified_at?: Date | string
    hsvalidity_products?: hsvalidity_productsUncheckedCreateNestedManyWithoutHsvaliditiesInput
  }

  export type hsvaliditiesUpdateInput = {
    status?: Enumhsvalidities_statusFieldUpdateOperationsInput | $Enums.hsvalidities_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    hsbranches?: hsbranchesUpdateOneRequiredWithoutHsvaliditiesNestedInput
    hsemployees?: hsemployeesUpdateOneRequiredWithoutHsvaliditiesNestedInput
    hsvalidity_requests?: hsvalidity_requestsUpdateOneWithoutHsvaliditiesNestedInput
    hsvalidity_products?: hsvalidity_productsUpdateManyWithoutHsvaliditiesNestedInput
  }

  export type hsvaliditiesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    branch_id?: IntFieldUpdateOperationsInput | number
    employee_id?: IntFieldUpdateOperationsInput | number
    status?: Enumhsvalidities_statusFieldUpdateOperationsInput | $Enums.hsvalidities_status
    request_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    hsvalidity_products?: hsvalidity_productsUncheckedUpdateManyWithoutHsvaliditiesNestedInput
  }

  export type hsvaliditiesCreateManyInput = {
    id?: number
    branch_id: number
    employee_id: number
    status?: $Enums.hsvalidities_status
    request_id?: number | null
    created_at?: Date | string
    modified_at?: Date | string
  }

  export type hsvaliditiesUpdateManyMutationInput = {
    status?: Enumhsvalidities_statusFieldUpdateOperationsInput | $Enums.hsvalidities_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type hsvaliditiesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    branch_id?: IntFieldUpdateOperationsInput | number
    employee_id?: IntFieldUpdateOperationsInput | number
    status?: Enumhsvalidities_statusFieldUpdateOperationsInput | $Enums.hsvalidities_status
    request_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type hsvalidity_productsCreateInput = {
    product_cod: number
    quantity: number
    validity_date: Date | string
    auxiliary_code: string
    hsvalidity_treatments?: hsvalidity_treatmentsCreateNestedOneWithoutHsvalidity_productsInput
    hsvalidities: hsvaliditiesCreateNestedOneWithoutHsvalidity_productsInput
  }

  export type hsvalidity_productsUncheckedCreateInput = {
    id?: number
    validity_id: number
    product_cod: number
    quantity: number
    validity_date: Date | string
    treat_id?: number
    auxiliary_code: string
  }

  export type hsvalidity_productsUpdateInput = {
    product_cod?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    validity_date?: DateTimeFieldUpdateOperationsInput | Date | string
    auxiliary_code?: StringFieldUpdateOperationsInput | string
    hsvalidity_treatments?: hsvalidity_treatmentsUpdateOneRequiredWithoutHsvalidity_productsNestedInput
    hsvalidities?: hsvaliditiesUpdateOneRequiredWithoutHsvalidity_productsNestedInput
  }

  export type hsvalidity_productsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    validity_id?: IntFieldUpdateOperationsInput | number
    product_cod?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    validity_date?: DateTimeFieldUpdateOperationsInput | Date | string
    treat_id?: IntFieldUpdateOperationsInput | number
    auxiliary_code?: StringFieldUpdateOperationsInput | string
  }

  export type hsvalidity_productsCreateManyInput = {
    id?: number
    validity_id: number
    product_cod: number
    quantity: number
    validity_date: Date | string
    treat_id?: number
    auxiliary_code: string
  }

  export type hsvalidity_productsUpdateManyMutationInput = {
    product_cod?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    validity_date?: DateTimeFieldUpdateOperationsInput | Date | string
    auxiliary_code?: StringFieldUpdateOperationsInput | string
  }

  export type hsvalidity_productsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    validity_id?: IntFieldUpdateOperationsInput | number
    product_cod?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    validity_date?: DateTimeFieldUpdateOperationsInput | Date | string
    treat_id?: IntFieldUpdateOperationsInput | number
    auxiliary_code?: StringFieldUpdateOperationsInput | string
  }

  export type hsvalidity_requestsCreateInput = {
    status?: $Enums.hsvalidity_requests_status
    created_at?: Date | string
    modified_at?: Date | string
    hsvalidities?: hsvaliditiesCreateNestedManyWithoutHsvalidity_requestsInput
    hsvalidity_request_products?: hsvalidity_request_productsCreateNestedManyWithoutHsvalidity_requestsInput
    analyst: hsemployeesCreateNestedOneWithoutAnalystRequestsInput
    hsbranches: hsbranchesCreateNestedOneWithoutHsvalidity_requestsInput
    conferee: hsemployeesCreateNestedOneWithoutConfereeRequestsInput
  }

  export type hsvalidity_requestsUncheckedCreateInput = {
    id?: number
    branch_id: number
    analyst_id: number
    conferee_id: number
    status?: $Enums.hsvalidity_requests_status
    created_at?: Date | string
    modified_at?: Date | string
    hsvalidities?: hsvaliditiesUncheckedCreateNestedManyWithoutHsvalidity_requestsInput
    hsvalidity_request_products?: hsvalidity_request_productsUncheckedCreateNestedManyWithoutHsvalidity_requestsInput
  }

  export type hsvalidity_requestsUpdateInput = {
    status?: Enumhsvalidity_requests_statusFieldUpdateOperationsInput | $Enums.hsvalidity_requests_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    hsvalidities?: hsvaliditiesUpdateManyWithoutHsvalidity_requestsNestedInput
    hsvalidity_request_products?: hsvalidity_request_productsUpdateManyWithoutHsvalidity_requestsNestedInput
    analyst?: hsemployeesUpdateOneRequiredWithoutAnalystRequestsNestedInput
    hsbranches?: hsbranchesUpdateOneRequiredWithoutHsvalidity_requestsNestedInput
    conferee?: hsemployeesUpdateOneRequiredWithoutConfereeRequestsNestedInput
  }

  export type hsvalidity_requestsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    branch_id?: IntFieldUpdateOperationsInput | number
    analyst_id?: IntFieldUpdateOperationsInput | number
    conferee_id?: IntFieldUpdateOperationsInput | number
    status?: Enumhsvalidity_requests_statusFieldUpdateOperationsInput | $Enums.hsvalidity_requests_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    hsvalidities?: hsvaliditiesUncheckedUpdateManyWithoutHsvalidity_requestsNestedInput
    hsvalidity_request_products?: hsvalidity_request_productsUncheckedUpdateManyWithoutHsvalidity_requestsNestedInput
  }

  export type hsvalidity_requestsCreateManyInput = {
    id?: number
    branch_id: number
    analyst_id: number
    conferee_id: number
    status?: $Enums.hsvalidity_requests_status
    created_at?: Date | string
    modified_at?: Date | string
  }

  export type hsvalidity_requestsUpdateManyMutationInput = {
    status?: Enumhsvalidity_requests_statusFieldUpdateOperationsInput | $Enums.hsvalidity_requests_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type hsvalidity_requestsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    branch_id?: IntFieldUpdateOperationsInput | number
    analyst_id?: IntFieldUpdateOperationsInput | number
    conferee_id?: IntFieldUpdateOperationsInput | number
    status?: Enumhsvalidity_requests_statusFieldUpdateOperationsInput | $Enums.hsvalidity_requests_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type hsvalidity_request_productsCreateInput = {
    status?: $Enums.hsvalidity_request_products_status
    product_cod: number
    validity_date: Date | string
    auxiliary_code: string
    hsvalidity_requests: hsvalidity_requestsCreateNestedOneWithoutHsvalidity_request_productsInput
  }

  export type hsvalidity_request_productsUncheckedCreateInput = {
    id?: number
    request_id: number
    status?: $Enums.hsvalidity_request_products_status
    product_cod: number
    validity_date: Date | string
    auxiliary_code: string
  }

  export type hsvalidity_request_productsUpdateInput = {
    status?: Enumhsvalidity_request_products_statusFieldUpdateOperationsInput | $Enums.hsvalidity_request_products_status
    product_cod?: IntFieldUpdateOperationsInput | number
    validity_date?: DateTimeFieldUpdateOperationsInput | Date | string
    auxiliary_code?: StringFieldUpdateOperationsInput | string
    hsvalidity_requests?: hsvalidity_requestsUpdateOneRequiredWithoutHsvalidity_request_productsNestedInput
  }

  export type hsvalidity_request_productsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    request_id?: IntFieldUpdateOperationsInput | number
    status?: Enumhsvalidity_request_products_statusFieldUpdateOperationsInput | $Enums.hsvalidity_request_products_status
    product_cod?: IntFieldUpdateOperationsInput | number
    validity_date?: DateTimeFieldUpdateOperationsInput | Date | string
    auxiliary_code?: StringFieldUpdateOperationsInput | string
  }

  export type hsvalidity_request_productsCreateManyInput = {
    id?: number
    request_id: number
    status?: $Enums.hsvalidity_request_products_status
    product_cod: number
    validity_date: Date | string
    auxiliary_code: string
  }

  export type hsvalidity_request_productsUpdateManyMutationInput = {
    status?: Enumhsvalidity_request_products_statusFieldUpdateOperationsInput | $Enums.hsvalidity_request_products_status
    product_cod?: IntFieldUpdateOperationsInput | number
    validity_date?: DateTimeFieldUpdateOperationsInput | Date | string
    auxiliary_code?: StringFieldUpdateOperationsInput | string
  }

  export type hsvalidity_request_productsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    request_id?: IntFieldUpdateOperationsInput | number
    status?: Enumhsvalidity_request_products_statusFieldUpdateOperationsInput | $Enums.hsvalidity_request_products_status
    product_cod?: IntFieldUpdateOperationsInput | number
    validity_date?: DateTimeFieldUpdateOperationsInput | Date | string
    auxiliary_code?: StringFieldUpdateOperationsInput | string
  }

  export type hsvalidity_treatmentsCreateInput = {
    description: string
    hsvalidity_products?: hsvalidity_productsCreateNestedManyWithoutHsvalidity_treatmentsInput
  }

  export type hsvalidity_treatmentsUncheckedCreateInput = {
    id?: number
    description: string
    hsvalidity_products?: hsvalidity_productsUncheckedCreateNestedManyWithoutHsvalidity_treatmentsInput
  }

  export type hsvalidity_treatmentsUpdateInput = {
    description?: StringFieldUpdateOperationsInput | string
    hsvalidity_products?: hsvalidity_productsUpdateManyWithoutHsvalidity_treatmentsNestedInput
  }

  export type hsvalidity_treatmentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    hsvalidity_products?: hsvalidity_productsUncheckedUpdateManyWithoutHsvalidity_treatmentsNestedInput
  }

  export type hsvalidity_treatmentsCreateManyInput = {
    id?: number
    description: string
  }

  export type hsvalidity_treatmentsUpdateManyMutationInput = {
    description?: StringFieldUpdateOperationsInput | string
  }

  export type hsvalidity_treatmentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type hssessionsCreateInput = {
    id?: string
    token: string
    created_at?: Date | string
    expires_at?: Date | string | null
    user: hsemployeesCreateNestedOneWithoutSessionsInput
  }

  export type hssessionsUncheckedCreateInput = {
    id?: string
    user_id: number
    token: string
    created_at?: Date | string
    expires_at?: Date | string | null
  }

  export type hssessionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: hsemployeesUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type hssessionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type hssessionsCreateManyInput = {
    id?: string
    user_id: number
    token: string
    created_at?: Date | string
    expires_at?: Date | string | null
  }

  export type hssessionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type hssessionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type HsbranchesScalarRelationFilter = {
    is?: hsbranchesWhereInput
    isNot?: hsbranchesWhereInput
  }

  export type HssessionsListRelationFilter = {
    every?: hssessionsWhereInput
    some?: hssessionsWhereInput
    none?: hssessionsWhereInput
  }

  export type Hsusers_permissionsListRelationFilter = {
    every?: hsusers_permissionsWhereInput
    some?: hsusers_permissionsWhereInput
    none?: hsusers_permissionsWhereInput
  }

  export type Hsusers_rolesListRelationFilter = {
    every?: hsusers_rolesWhereInput
    some?: hsusers_rolesWhereInput
    none?: hsusers_rolesWhereInput
  }

  export type HsvaliditiesListRelationFilter = {
    every?: hsvaliditiesWhereInput
    some?: hsvaliditiesWhereInput
    none?: hsvaliditiesWhereInput
  }

  export type Hsvalidity_requestsListRelationFilter = {
    every?: hsvalidity_requestsWhereInput
    some?: hsvalidity_requestsWhereInput
    none?: hsvalidity_requestsWhereInput
  }

  export type hssessionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type hsusers_permissionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type hsusers_rolesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type hsvaliditiesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type hsvalidity_requestsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type hsemployeesCountOrderByAggregateInput = {
    id?: SortOrder
    branch_id?: SortOrder
    winthor_id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
  }

  export type hsemployeesAvgOrderByAggregateInput = {
    id?: SortOrder
    branch_id?: SortOrder
    winthor_id?: SortOrder
  }

  export type hsemployeesMaxOrderByAggregateInput = {
    id?: SortOrder
    branch_id?: SortOrder
    winthor_id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
  }

  export type hsemployeesMinOrderByAggregateInput = {
    id?: SortOrder
    branch_id?: SortOrder
    winthor_id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
  }

  export type hsemployeesSumOrderByAggregateInput = {
    id?: SortOrder
    branch_id?: SortOrder
    winthor_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type Hspermissions_rolesListRelationFilter = {
    every?: hspermissions_rolesWhereInput
    some?: hspermissions_rolesWhereInput
    none?: hspermissions_rolesWhereInput
  }

  export type hspermissions_rolesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type hsrolesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
  }

  export type hsrolesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type hsrolesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
  }

  export type hsrolesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
  }

  export type hsrolesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type hspermissionsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
  }

  export type hspermissionsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type hspermissionsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
  }

  export type hspermissionsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
  }

  export type hspermissionsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type HspermissionsScalarRelationFilter = {
    is?: hspermissionsWhereInput
    isNot?: hspermissionsWhereInput
  }

  export type HsrolesScalarRelationFilter = {
    is?: hsrolesWhereInput
    isNot?: hsrolesWhereInput
  }

  export type hspermissions_rolesRole_idPermission_idCompoundUniqueInput = {
    role_id: number
    permission_id: number
  }

  export type hspermissions_rolesCountOrderByAggregateInput = {
    role_id?: SortOrder
    permission_id?: SortOrder
  }

  export type hspermissions_rolesAvgOrderByAggregateInput = {
    role_id?: SortOrder
    permission_id?: SortOrder
  }

  export type hspermissions_rolesMaxOrderByAggregateInput = {
    role_id?: SortOrder
    permission_id?: SortOrder
  }

  export type hspermissions_rolesMinOrderByAggregateInput = {
    role_id?: SortOrder
    permission_id?: SortOrder
  }

  export type hspermissions_rolesSumOrderByAggregateInput = {
    role_id?: SortOrder
    permission_id?: SortOrder
  }

  export type HsemployeesScalarRelationFilter = {
    is?: hsemployeesWhereInput
    isNot?: hsemployeesWhereInput
  }

  export type hsusers_permissionsUser_idPermission_idCompoundUniqueInput = {
    user_id: number
    permission_id: number
  }

  export type hsusers_permissionsCountOrderByAggregateInput = {
    user_id?: SortOrder
    permission_id?: SortOrder
  }

  export type hsusers_permissionsAvgOrderByAggregateInput = {
    user_id?: SortOrder
    permission_id?: SortOrder
  }

  export type hsusers_permissionsMaxOrderByAggregateInput = {
    user_id?: SortOrder
    permission_id?: SortOrder
  }

  export type hsusers_permissionsMinOrderByAggregateInput = {
    user_id?: SortOrder
    permission_id?: SortOrder
  }

  export type hsusers_permissionsSumOrderByAggregateInput = {
    user_id?: SortOrder
    permission_id?: SortOrder
  }

  export type hsusers_rolesUser_idRole_idCompoundUniqueInput = {
    user_id: number
    role_id: number
  }

  export type hsusers_rolesCountOrderByAggregateInput = {
    user_id?: SortOrder
    role_id?: SortOrder
  }

  export type hsusers_rolesAvgOrderByAggregateInput = {
    user_id?: SortOrder
    role_id?: SortOrder
  }

  export type hsusers_rolesMaxOrderByAggregateInput = {
    user_id?: SortOrder
    role_id?: SortOrder
  }

  export type hsusers_rolesMinOrderByAggregateInput = {
    user_id?: SortOrder
    role_id?: SortOrder
  }

  export type hsusers_rolesSumOrderByAggregateInput = {
    user_id?: SortOrder
    role_id?: SortOrder
  }

  export type HsemployeesListRelationFilter = {
    every?: hsemployeesWhereInput
    some?: hsemployeesWhereInput
    none?: hsemployeesWhereInput
  }

  export type hsemployeesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type hsbranchesCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
  }

  export type hsbranchesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type hsbranchesMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
  }

  export type hsbranchesMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
  }

  export type hsbranchesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Enumhsvalidities_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.hsvalidities_status | Enumhsvalidities_statusFieldRefInput<$PrismaModel>
    in?: $Enums.hsvalidities_status[] | ListEnumhsvalidities_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.hsvalidities_status[] | ListEnumhsvalidities_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumhsvalidities_statusFilter<$PrismaModel> | $Enums.hsvalidities_status
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type Hsvalidity_requestsNullableScalarRelationFilter = {
    is?: hsvalidity_requestsWhereInput | null
    isNot?: hsvalidity_requestsWhereInput | null
  }

  export type Hsvalidity_productsListRelationFilter = {
    every?: hsvalidity_productsWhereInput
    some?: hsvalidity_productsWhereInput
    none?: hsvalidity_productsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type hsvalidity_productsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type hsvaliditiesCountOrderByAggregateInput = {
    id?: SortOrder
    branch_id?: SortOrder
    employee_id?: SortOrder
    status?: SortOrder
    request_id?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
  }

  export type hsvaliditiesAvgOrderByAggregateInput = {
    id?: SortOrder
    branch_id?: SortOrder
    employee_id?: SortOrder
    request_id?: SortOrder
  }

  export type hsvaliditiesMaxOrderByAggregateInput = {
    id?: SortOrder
    branch_id?: SortOrder
    employee_id?: SortOrder
    status?: SortOrder
    request_id?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
  }

  export type hsvaliditiesMinOrderByAggregateInput = {
    id?: SortOrder
    branch_id?: SortOrder
    employee_id?: SortOrder
    status?: SortOrder
    request_id?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
  }

  export type hsvaliditiesSumOrderByAggregateInput = {
    id?: SortOrder
    branch_id?: SortOrder
    employee_id?: SortOrder
    request_id?: SortOrder
  }

  export type Enumhsvalidities_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.hsvalidities_status | Enumhsvalidities_statusFieldRefInput<$PrismaModel>
    in?: $Enums.hsvalidities_status[] | ListEnumhsvalidities_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.hsvalidities_status[] | ListEnumhsvalidities_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumhsvalidities_statusWithAggregatesFilter<$PrismaModel> | $Enums.hsvalidities_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumhsvalidities_statusFilter<$PrismaModel>
    _max?: NestedEnumhsvalidities_statusFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type Hsvalidity_treatmentsScalarRelationFilter = {
    is?: hsvalidity_treatmentsWhereInput
    isNot?: hsvalidity_treatmentsWhereInput
  }

  export type HsvaliditiesScalarRelationFilter = {
    is?: hsvaliditiesWhereInput
    isNot?: hsvaliditiesWhereInput
  }

  export type hsvalidity_productsCountOrderByAggregateInput = {
    id?: SortOrder
    validity_id?: SortOrder
    product_cod?: SortOrder
    quantity?: SortOrder
    validity_date?: SortOrder
    treat_id?: SortOrder
    auxiliary_code?: SortOrder
  }

  export type hsvalidity_productsAvgOrderByAggregateInput = {
    id?: SortOrder
    validity_id?: SortOrder
    product_cod?: SortOrder
    quantity?: SortOrder
    treat_id?: SortOrder
  }

  export type hsvalidity_productsMaxOrderByAggregateInput = {
    id?: SortOrder
    validity_id?: SortOrder
    product_cod?: SortOrder
    quantity?: SortOrder
    validity_date?: SortOrder
    treat_id?: SortOrder
    auxiliary_code?: SortOrder
  }

  export type hsvalidity_productsMinOrderByAggregateInput = {
    id?: SortOrder
    validity_id?: SortOrder
    product_cod?: SortOrder
    quantity?: SortOrder
    validity_date?: SortOrder
    treat_id?: SortOrder
    auxiliary_code?: SortOrder
  }

  export type hsvalidity_productsSumOrderByAggregateInput = {
    id?: SortOrder
    validity_id?: SortOrder
    product_cod?: SortOrder
    quantity?: SortOrder
    treat_id?: SortOrder
  }

  export type Enumhsvalidity_requests_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.hsvalidity_requests_status | Enumhsvalidity_requests_statusFieldRefInput<$PrismaModel>
    in?: $Enums.hsvalidity_requests_status[] | ListEnumhsvalidity_requests_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.hsvalidity_requests_status[] | ListEnumhsvalidity_requests_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumhsvalidity_requests_statusFilter<$PrismaModel> | $Enums.hsvalidity_requests_status
  }

  export type Hsvalidity_request_productsListRelationFilter = {
    every?: hsvalidity_request_productsWhereInput
    some?: hsvalidity_request_productsWhereInput
    none?: hsvalidity_request_productsWhereInput
  }

  export type hsvalidity_request_productsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type hsvalidity_requestsCountOrderByAggregateInput = {
    id?: SortOrder
    branch_id?: SortOrder
    analyst_id?: SortOrder
    conferee_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
  }

  export type hsvalidity_requestsAvgOrderByAggregateInput = {
    id?: SortOrder
    branch_id?: SortOrder
    analyst_id?: SortOrder
    conferee_id?: SortOrder
  }

  export type hsvalidity_requestsMaxOrderByAggregateInput = {
    id?: SortOrder
    branch_id?: SortOrder
    analyst_id?: SortOrder
    conferee_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
  }

  export type hsvalidity_requestsMinOrderByAggregateInput = {
    id?: SortOrder
    branch_id?: SortOrder
    analyst_id?: SortOrder
    conferee_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
  }

  export type hsvalidity_requestsSumOrderByAggregateInput = {
    id?: SortOrder
    branch_id?: SortOrder
    analyst_id?: SortOrder
    conferee_id?: SortOrder
  }

  export type Enumhsvalidity_requests_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.hsvalidity_requests_status | Enumhsvalidity_requests_statusFieldRefInput<$PrismaModel>
    in?: $Enums.hsvalidity_requests_status[] | ListEnumhsvalidity_requests_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.hsvalidity_requests_status[] | ListEnumhsvalidity_requests_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumhsvalidity_requests_statusWithAggregatesFilter<$PrismaModel> | $Enums.hsvalidity_requests_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumhsvalidity_requests_statusFilter<$PrismaModel>
    _max?: NestedEnumhsvalidity_requests_statusFilter<$PrismaModel>
  }

  export type Enumhsvalidity_request_products_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.hsvalidity_request_products_status | Enumhsvalidity_request_products_statusFieldRefInput<$PrismaModel>
    in?: $Enums.hsvalidity_request_products_status[] | ListEnumhsvalidity_request_products_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.hsvalidity_request_products_status[] | ListEnumhsvalidity_request_products_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumhsvalidity_request_products_statusFilter<$PrismaModel> | $Enums.hsvalidity_request_products_status
  }

  export type Hsvalidity_requestsScalarRelationFilter = {
    is?: hsvalidity_requestsWhereInput
    isNot?: hsvalidity_requestsWhereInput
  }

  export type hsvalidity_request_productsCountOrderByAggregateInput = {
    id?: SortOrder
    request_id?: SortOrder
    status?: SortOrder
    product_cod?: SortOrder
    validity_date?: SortOrder
    auxiliary_code?: SortOrder
  }

  export type hsvalidity_request_productsAvgOrderByAggregateInput = {
    id?: SortOrder
    request_id?: SortOrder
    product_cod?: SortOrder
  }

  export type hsvalidity_request_productsMaxOrderByAggregateInput = {
    id?: SortOrder
    request_id?: SortOrder
    status?: SortOrder
    product_cod?: SortOrder
    validity_date?: SortOrder
    auxiliary_code?: SortOrder
  }

  export type hsvalidity_request_productsMinOrderByAggregateInput = {
    id?: SortOrder
    request_id?: SortOrder
    status?: SortOrder
    product_cod?: SortOrder
    validity_date?: SortOrder
    auxiliary_code?: SortOrder
  }

  export type hsvalidity_request_productsSumOrderByAggregateInput = {
    id?: SortOrder
    request_id?: SortOrder
    product_cod?: SortOrder
  }

  export type Enumhsvalidity_request_products_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.hsvalidity_request_products_status | Enumhsvalidity_request_products_statusFieldRefInput<$PrismaModel>
    in?: $Enums.hsvalidity_request_products_status[] | ListEnumhsvalidity_request_products_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.hsvalidity_request_products_status[] | ListEnumhsvalidity_request_products_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumhsvalidity_request_products_statusWithAggregatesFilter<$PrismaModel> | $Enums.hsvalidity_request_products_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumhsvalidity_request_products_statusFilter<$PrismaModel>
    _max?: NestedEnumhsvalidity_request_products_statusFilter<$PrismaModel>
  }

  export type hsvalidity_treatmentsCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
  }

  export type hsvalidity_treatmentsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type hsvalidity_treatmentsMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
  }

  export type hsvalidity_treatmentsMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
  }

  export type hsvalidity_treatmentsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type hssessionsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    token?: SortOrder
    created_at?: SortOrder
    expires_at?: SortOrder
  }

  export type hssessionsAvgOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type hssessionsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    token?: SortOrder
    created_at?: SortOrder
    expires_at?: SortOrder
  }

  export type hssessionsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    token?: SortOrder
    created_at?: SortOrder
    expires_at?: SortOrder
  }

  export type hssessionsSumOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type hsbranchesCreateNestedOneWithoutHsemployeesInput = {
    create?: XOR<hsbranchesCreateWithoutHsemployeesInput, hsbranchesUncheckedCreateWithoutHsemployeesInput>
    connectOrCreate?: hsbranchesCreateOrConnectWithoutHsemployeesInput
    connect?: hsbranchesWhereUniqueInput
  }

  export type hssessionsCreateNestedManyWithoutUserInput = {
    create?: XOR<hssessionsCreateWithoutUserInput, hssessionsUncheckedCreateWithoutUserInput> | hssessionsCreateWithoutUserInput[] | hssessionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: hssessionsCreateOrConnectWithoutUserInput | hssessionsCreateOrConnectWithoutUserInput[]
    createMany?: hssessionsCreateManyUserInputEnvelope
    connect?: hssessionsWhereUniqueInput | hssessionsWhereUniqueInput[]
  }

  export type hsusers_permissionsCreateNestedManyWithoutHsemployeesInput = {
    create?: XOR<hsusers_permissionsCreateWithoutHsemployeesInput, hsusers_permissionsUncheckedCreateWithoutHsemployeesInput> | hsusers_permissionsCreateWithoutHsemployeesInput[] | hsusers_permissionsUncheckedCreateWithoutHsemployeesInput[]
    connectOrCreate?: hsusers_permissionsCreateOrConnectWithoutHsemployeesInput | hsusers_permissionsCreateOrConnectWithoutHsemployeesInput[]
    createMany?: hsusers_permissionsCreateManyHsemployeesInputEnvelope
    connect?: hsusers_permissionsWhereUniqueInput | hsusers_permissionsWhereUniqueInput[]
  }

  export type hsusers_rolesCreateNestedManyWithoutHeemployeesInput = {
    create?: XOR<hsusers_rolesCreateWithoutHeemployeesInput, hsusers_rolesUncheckedCreateWithoutHeemployeesInput> | hsusers_rolesCreateWithoutHeemployeesInput[] | hsusers_rolesUncheckedCreateWithoutHeemployeesInput[]
    connectOrCreate?: hsusers_rolesCreateOrConnectWithoutHeemployeesInput | hsusers_rolesCreateOrConnectWithoutHeemployeesInput[]
    createMany?: hsusers_rolesCreateManyHeemployeesInputEnvelope
    connect?: hsusers_rolesWhereUniqueInput | hsusers_rolesWhereUniqueInput[]
  }

  export type hsvaliditiesCreateNestedManyWithoutHsemployeesInput = {
    create?: XOR<hsvaliditiesCreateWithoutHsemployeesInput, hsvaliditiesUncheckedCreateWithoutHsemployeesInput> | hsvaliditiesCreateWithoutHsemployeesInput[] | hsvaliditiesUncheckedCreateWithoutHsemployeesInput[]
    connectOrCreate?: hsvaliditiesCreateOrConnectWithoutHsemployeesInput | hsvaliditiesCreateOrConnectWithoutHsemployeesInput[]
    createMany?: hsvaliditiesCreateManyHsemployeesInputEnvelope
    connect?: hsvaliditiesWhereUniqueInput | hsvaliditiesWhereUniqueInput[]
  }

  export type hsvalidity_requestsCreateNestedManyWithoutAnalystInput = {
    create?: XOR<hsvalidity_requestsCreateWithoutAnalystInput, hsvalidity_requestsUncheckedCreateWithoutAnalystInput> | hsvalidity_requestsCreateWithoutAnalystInput[] | hsvalidity_requestsUncheckedCreateWithoutAnalystInput[]
    connectOrCreate?: hsvalidity_requestsCreateOrConnectWithoutAnalystInput | hsvalidity_requestsCreateOrConnectWithoutAnalystInput[]
    createMany?: hsvalidity_requestsCreateManyAnalystInputEnvelope
    connect?: hsvalidity_requestsWhereUniqueInput | hsvalidity_requestsWhereUniqueInput[]
  }

  export type hsvalidity_requestsCreateNestedManyWithoutConfereeInput = {
    create?: XOR<hsvalidity_requestsCreateWithoutConfereeInput, hsvalidity_requestsUncheckedCreateWithoutConfereeInput> | hsvalidity_requestsCreateWithoutConfereeInput[] | hsvalidity_requestsUncheckedCreateWithoutConfereeInput[]
    connectOrCreate?: hsvalidity_requestsCreateOrConnectWithoutConfereeInput | hsvalidity_requestsCreateOrConnectWithoutConfereeInput[]
    createMany?: hsvalidity_requestsCreateManyConfereeInputEnvelope
    connect?: hsvalidity_requestsWhereUniqueInput | hsvalidity_requestsWhereUniqueInput[]
  }

  export type hssessionsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<hssessionsCreateWithoutUserInput, hssessionsUncheckedCreateWithoutUserInput> | hssessionsCreateWithoutUserInput[] | hssessionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: hssessionsCreateOrConnectWithoutUserInput | hssessionsCreateOrConnectWithoutUserInput[]
    createMany?: hssessionsCreateManyUserInputEnvelope
    connect?: hssessionsWhereUniqueInput | hssessionsWhereUniqueInput[]
  }

  export type hsusers_permissionsUncheckedCreateNestedManyWithoutHsemployeesInput = {
    create?: XOR<hsusers_permissionsCreateWithoutHsemployeesInput, hsusers_permissionsUncheckedCreateWithoutHsemployeesInput> | hsusers_permissionsCreateWithoutHsemployeesInput[] | hsusers_permissionsUncheckedCreateWithoutHsemployeesInput[]
    connectOrCreate?: hsusers_permissionsCreateOrConnectWithoutHsemployeesInput | hsusers_permissionsCreateOrConnectWithoutHsemployeesInput[]
    createMany?: hsusers_permissionsCreateManyHsemployeesInputEnvelope
    connect?: hsusers_permissionsWhereUniqueInput | hsusers_permissionsWhereUniqueInput[]
  }

  export type hsusers_rolesUncheckedCreateNestedManyWithoutHeemployeesInput = {
    create?: XOR<hsusers_rolesCreateWithoutHeemployeesInput, hsusers_rolesUncheckedCreateWithoutHeemployeesInput> | hsusers_rolesCreateWithoutHeemployeesInput[] | hsusers_rolesUncheckedCreateWithoutHeemployeesInput[]
    connectOrCreate?: hsusers_rolesCreateOrConnectWithoutHeemployeesInput | hsusers_rolesCreateOrConnectWithoutHeemployeesInput[]
    createMany?: hsusers_rolesCreateManyHeemployeesInputEnvelope
    connect?: hsusers_rolesWhereUniqueInput | hsusers_rolesWhereUniqueInput[]
  }

  export type hsvaliditiesUncheckedCreateNestedManyWithoutHsemployeesInput = {
    create?: XOR<hsvaliditiesCreateWithoutHsemployeesInput, hsvaliditiesUncheckedCreateWithoutHsemployeesInput> | hsvaliditiesCreateWithoutHsemployeesInput[] | hsvaliditiesUncheckedCreateWithoutHsemployeesInput[]
    connectOrCreate?: hsvaliditiesCreateOrConnectWithoutHsemployeesInput | hsvaliditiesCreateOrConnectWithoutHsemployeesInput[]
    createMany?: hsvaliditiesCreateManyHsemployeesInputEnvelope
    connect?: hsvaliditiesWhereUniqueInput | hsvaliditiesWhereUniqueInput[]
  }

  export type hsvalidity_requestsUncheckedCreateNestedManyWithoutAnalystInput = {
    create?: XOR<hsvalidity_requestsCreateWithoutAnalystInput, hsvalidity_requestsUncheckedCreateWithoutAnalystInput> | hsvalidity_requestsCreateWithoutAnalystInput[] | hsvalidity_requestsUncheckedCreateWithoutAnalystInput[]
    connectOrCreate?: hsvalidity_requestsCreateOrConnectWithoutAnalystInput | hsvalidity_requestsCreateOrConnectWithoutAnalystInput[]
    createMany?: hsvalidity_requestsCreateManyAnalystInputEnvelope
    connect?: hsvalidity_requestsWhereUniqueInput | hsvalidity_requestsWhereUniqueInput[]
  }

  export type hsvalidity_requestsUncheckedCreateNestedManyWithoutConfereeInput = {
    create?: XOR<hsvalidity_requestsCreateWithoutConfereeInput, hsvalidity_requestsUncheckedCreateWithoutConfereeInput> | hsvalidity_requestsCreateWithoutConfereeInput[] | hsvalidity_requestsUncheckedCreateWithoutConfereeInput[]
    connectOrCreate?: hsvalidity_requestsCreateOrConnectWithoutConfereeInput | hsvalidity_requestsCreateOrConnectWithoutConfereeInput[]
    createMany?: hsvalidity_requestsCreateManyConfereeInputEnvelope
    connect?: hsvalidity_requestsWhereUniqueInput | hsvalidity_requestsWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type hsbranchesUpdateOneRequiredWithoutHsemployeesNestedInput = {
    create?: XOR<hsbranchesCreateWithoutHsemployeesInput, hsbranchesUncheckedCreateWithoutHsemployeesInput>
    connectOrCreate?: hsbranchesCreateOrConnectWithoutHsemployeesInput
    upsert?: hsbranchesUpsertWithoutHsemployeesInput
    connect?: hsbranchesWhereUniqueInput
    update?: XOR<XOR<hsbranchesUpdateToOneWithWhereWithoutHsemployeesInput, hsbranchesUpdateWithoutHsemployeesInput>, hsbranchesUncheckedUpdateWithoutHsemployeesInput>
  }

  export type hssessionsUpdateManyWithoutUserNestedInput = {
    create?: XOR<hssessionsCreateWithoutUserInput, hssessionsUncheckedCreateWithoutUserInput> | hssessionsCreateWithoutUserInput[] | hssessionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: hssessionsCreateOrConnectWithoutUserInput | hssessionsCreateOrConnectWithoutUserInput[]
    upsert?: hssessionsUpsertWithWhereUniqueWithoutUserInput | hssessionsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: hssessionsCreateManyUserInputEnvelope
    set?: hssessionsWhereUniqueInput | hssessionsWhereUniqueInput[]
    disconnect?: hssessionsWhereUniqueInput | hssessionsWhereUniqueInput[]
    delete?: hssessionsWhereUniqueInput | hssessionsWhereUniqueInput[]
    connect?: hssessionsWhereUniqueInput | hssessionsWhereUniqueInput[]
    update?: hssessionsUpdateWithWhereUniqueWithoutUserInput | hssessionsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: hssessionsUpdateManyWithWhereWithoutUserInput | hssessionsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: hssessionsScalarWhereInput | hssessionsScalarWhereInput[]
  }

  export type hsusers_permissionsUpdateManyWithoutHsemployeesNestedInput = {
    create?: XOR<hsusers_permissionsCreateWithoutHsemployeesInput, hsusers_permissionsUncheckedCreateWithoutHsemployeesInput> | hsusers_permissionsCreateWithoutHsemployeesInput[] | hsusers_permissionsUncheckedCreateWithoutHsemployeesInput[]
    connectOrCreate?: hsusers_permissionsCreateOrConnectWithoutHsemployeesInput | hsusers_permissionsCreateOrConnectWithoutHsemployeesInput[]
    upsert?: hsusers_permissionsUpsertWithWhereUniqueWithoutHsemployeesInput | hsusers_permissionsUpsertWithWhereUniqueWithoutHsemployeesInput[]
    createMany?: hsusers_permissionsCreateManyHsemployeesInputEnvelope
    set?: hsusers_permissionsWhereUniqueInput | hsusers_permissionsWhereUniqueInput[]
    disconnect?: hsusers_permissionsWhereUniqueInput | hsusers_permissionsWhereUniqueInput[]
    delete?: hsusers_permissionsWhereUniqueInput | hsusers_permissionsWhereUniqueInput[]
    connect?: hsusers_permissionsWhereUniqueInput | hsusers_permissionsWhereUniqueInput[]
    update?: hsusers_permissionsUpdateWithWhereUniqueWithoutHsemployeesInput | hsusers_permissionsUpdateWithWhereUniqueWithoutHsemployeesInput[]
    updateMany?: hsusers_permissionsUpdateManyWithWhereWithoutHsemployeesInput | hsusers_permissionsUpdateManyWithWhereWithoutHsemployeesInput[]
    deleteMany?: hsusers_permissionsScalarWhereInput | hsusers_permissionsScalarWhereInput[]
  }

  export type hsusers_rolesUpdateManyWithoutHeemployeesNestedInput = {
    create?: XOR<hsusers_rolesCreateWithoutHeemployeesInput, hsusers_rolesUncheckedCreateWithoutHeemployeesInput> | hsusers_rolesCreateWithoutHeemployeesInput[] | hsusers_rolesUncheckedCreateWithoutHeemployeesInput[]
    connectOrCreate?: hsusers_rolesCreateOrConnectWithoutHeemployeesInput | hsusers_rolesCreateOrConnectWithoutHeemployeesInput[]
    upsert?: hsusers_rolesUpsertWithWhereUniqueWithoutHeemployeesInput | hsusers_rolesUpsertWithWhereUniqueWithoutHeemployeesInput[]
    createMany?: hsusers_rolesCreateManyHeemployeesInputEnvelope
    set?: hsusers_rolesWhereUniqueInput | hsusers_rolesWhereUniqueInput[]
    disconnect?: hsusers_rolesWhereUniqueInput | hsusers_rolesWhereUniqueInput[]
    delete?: hsusers_rolesWhereUniqueInput | hsusers_rolesWhereUniqueInput[]
    connect?: hsusers_rolesWhereUniqueInput | hsusers_rolesWhereUniqueInput[]
    update?: hsusers_rolesUpdateWithWhereUniqueWithoutHeemployeesInput | hsusers_rolesUpdateWithWhereUniqueWithoutHeemployeesInput[]
    updateMany?: hsusers_rolesUpdateManyWithWhereWithoutHeemployeesInput | hsusers_rolesUpdateManyWithWhereWithoutHeemployeesInput[]
    deleteMany?: hsusers_rolesScalarWhereInput | hsusers_rolesScalarWhereInput[]
  }

  export type hsvaliditiesUpdateManyWithoutHsemployeesNestedInput = {
    create?: XOR<hsvaliditiesCreateWithoutHsemployeesInput, hsvaliditiesUncheckedCreateWithoutHsemployeesInput> | hsvaliditiesCreateWithoutHsemployeesInput[] | hsvaliditiesUncheckedCreateWithoutHsemployeesInput[]
    connectOrCreate?: hsvaliditiesCreateOrConnectWithoutHsemployeesInput | hsvaliditiesCreateOrConnectWithoutHsemployeesInput[]
    upsert?: hsvaliditiesUpsertWithWhereUniqueWithoutHsemployeesInput | hsvaliditiesUpsertWithWhereUniqueWithoutHsemployeesInput[]
    createMany?: hsvaliditiesCreateManyHsemployeesInputEnvelope
    set?: hsvaliditiesWhereUniqueInput | hsvaliditiesWhereUniqueInput[]
    disconnect?: hsvaliditiesWhereUniqueInput | hsvaliditiesWhereUniqueInput[]
    delete?: hsvaliditiesWhereUniqueInput | hsvaliditiesWhereUniqueInput[]
    connect?: hsvaliditiesWhereUniqueInput | hsvaliditiesWhereUniqueInput[]
    update?: hsvaliditiesUpdateWithWhereUniqueWithoutHsemployeesInput | hsvaliditiesUpdateWithWhereUniqueWithoutHsemployeesInput[]
    updateMany?: hsvaliditiesUpdateManyWithWhereWithoutHsemployeesInput | hsvaliditiesUpdateManyWithWhereWithoutHsemployeesInput[]
    deleteMany?: hsvaliditiesScalarWhereInput | hsvaliditiesScalarWhereInput[]
  }

  export type hsvalidity_requestsUpdateManyWithoutAnalystNestedInput = {
    create?: XOR<hsvalidity_requestsCreateWithoutAnalystInput, hsvalidity_requestsUncheckedCreateWithoutAnalystInput> | hsvalidity_requestsCreateWithoutAnalystInput[] | hsvalidity_requestsUncheckedCreateWithoutAnalystInput[]
    connectOrCreate?: hsvalidity_requestsCreateOrConnectWithoutAnalystInput | hsvalidity_requestsCreateOrConnectWithoutAnalystInput[]
    upsert?: hsvalidity_requestsUpsertWithWhereUniqueWithoutAnalystInput | hsvalidity_requestsUpsertWithWhereUniqueWithoutAnalystInput[]
    createMany?: hsvalidity_requestsCreateManyAnalystInputEnvelope
    set?: hsvalidity_requestsWhereUniqueInput | hsvalidity_requestsWhereUniqueInput[]
    disconnect?: hsvalidity_requestsWhereUniqueInput | hsvalidity_requestsWhereUniqueInput[]
    delete?: hsvalidity_requestsWhereUniqueInput | hsvalidity_requestsWhereUniqueInput[]
    connect?: hsvalidity_requestsWhereUniqueInput | hsvalidity_requestsWhereUniqueInput[]
    update?: hsvalidity_requestsUpdateWithWhereUniqueWithoutAnalystInput | hsvalidity_requestsUpdateWithWhereUniqueWithoutAnalystInput[]
    updateMany?: hsvalidity_requestsUpdateManyWithWhereWithoutAnalystInput | hsvalidity_requestsUpdateManyWithWhereWithoutAnalystInput[]
    deleteMany?: hsvalidity_requestsScalarWhereInput | hsvalidity_requestsScalarWhereInput[]
  }

  export type hsvalidity_requestsUpdateManyWithoutConfereeNestedInput = {
    create?: XOR<hsvalidity_requestsCreateWithoutConfereeInput, hsvalidity_requestsUncheckedCreateWithoutConfereeInput> | hsvalidity_requestsCreateWithoutConfereeInput[] | hsvalidity_requestsUncheckedCreateWithoutConfereeInput[]
    connectOrCreate?: hsvalidity_requestsCreateOrConnectWithoutConfereeInput | hsvalidity_requestsCreateOrConnectWithoutConfereeInput[]
    upsert?: hsvalidity_requestsUpsertWithWhereUniqueWithoutConfereeInput | hsvalidity_requestsUpsertWithWhereUniqueWithoutConfereeInput[]
    createMany?: hsvalidity_requestsCreateManyConfereeInputEnvelope
    set?: hsvalidity_requestsWhereUniqueInput | hsvalidity_requestsWhereUniqueInput[]
    disconnect?: hsvalidity_requestsWhereUniqueInput | hsvalidity_requestsWhereUniqueInput[]
    delete?: hsvalidity_requestsWhereUniqueInput | hsvalidity_requestsWhereUniqueInput[]
    connect?: hsvalidity_requestsWhereUniqueInput | hsvalidity_requestsWhereUniqueInput[]
    update?: hsvalidity_requestsUpdateWithWhereUniqueWithoutConfereeInput | hsvalidity_requestsUpdateWithWhereUniqueWithoutConfereeInput[]
    updateMany?: hsvalidity_requestsUpdateManyWithWhereWithoutConfereeInput | hsvalidity_requestsUpdateManyWithWhereWithoutConfereeInput[]
    deleteMany?: hsvalidity_requestsScalarWhereInput | hsvalidity_requestsScalarWhereInput[]
  }

  export type hssessionsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<hssessionsCreateWithoutUserInput, hssessionsUncheckedCreateWithoutUserInput> | hssessionsCreateWithoutUserInput[] | hssessionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: hssessionsCreateOrConnectWithoutUserInput | hssessionsCreateOrConnectWithoutUserInput[]
    upsert?: hssessionsUpsertWithWhereUniqueWithoutUserInput | hssessionsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: hssessionsCreateManyUserInputEnvelope
    set?: hssessionsWhereUniqueInput | hssessionsWhereUniqueInput[]
    disconnect?: hssessionsWhereUniqueInput | hssessionsWhereUniqueInput[]
    delete?: hssessionsWhereUniqueInput | hssessionsWhereUniqueInput[]
    connect?: hssessionsWhereUniqueInput | hssessionsWhereUniqueInput[]
    update?: hssessionsUpdateWithWhereUniqueWithoutUserInput | hssessionsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: hssessionsUpdateManyWithWhereWithoutUserInput | hssessionsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: hssessionsScalarWhereInput | hssessionsScalarWhereInput[]
  }

  export type hsusers_permissionsUncheckedUpdateManyWithoutHsemployeesNestedInput = {
    create?: XOR<hsusers_permissionsCreateWithoutHsemployeesInput, hsusers_permissionsUncheckedCreateWithoutHsemployeesInput> | hsusers_permissionsCreateWithoutHsemployeesInput[] | hsusers_permissionsUncheckedCreateWithoutHsemployeesInput[]
    connectOrCreate?: hsusers_permissionsCreateOrConnectWithoutHsemployeesInput | hsusers_permissionsCreateOrConnectWithoutHsemployeesInput[]
    upsert?: hsusers_permissionsUpsertWithWhereUniqueWithoutHsemployeesInput | hsusers_permissionsUpsertWithWhereUniqueWithoutHsemployeesInput[]
    createMany?: hsusers_permissionsCreateManyHsemployeesInputEnvelope
    set?: hsusers_permissionsWhereUniqueInput | hsusers_permissionsWhereUniqueInput[]
    disconnect?: hsusers_permissionsWhereUniqueInput | hsusers_permissionsWhereUniqueInput[]
    delete?: hsusers_permissionsWhereUniqueInput | hsusers_permissionsWhereUniqueInput[]
    connect?: hsusers_permissionsWhereUniqueInput | hsusers_permissionsWhereUniqueInput[]
    update?: hsusers_permissionsUpdateWithWhereUniqueWithoutHsemployeesInput | hsusers_permissionsUpdateWithWhereUniqueWithoutHsemployeesInput[]
    updateMany?: hsusers_permissionsUpdateManyWithWhereWithoutHsemployeesInput | hsusers_permissionsUpdateManyWithWhereWithoutHsemployeesInput[]
    deleteMany?: hsusers_permissionsScalarWhereInput | hsusers_permissionsScalarWhereInput[]
  }

  export type hsusers_rolesUncheckedUpdateManyWithoutHeemployeesNestedInput = {
    create?: XOR<hsusers_rolesCreateWithoutHeemployeesInput, hsusers_rolesUncheckedCreateWithoutHeemployeesInput> | hsusers_rolesCreateWithoutHeemployeesInput[] | hsusers_rolesUncheckedCreateWithoutHeemployeesInput[]
    connectOrCreate?: hsusers_rolesCreateOrConnectWithoutHeemployeesInput | hsusers_rolesCreateOrConnectWithoutHeemployeesInput[]
    upsert?: hsusers_rolesUpsertWithWhereUniqueWithoutHeemployeesInput | hsusers_rolesUpsertWithWhereUniqueWithoutHeemployeesInput[]
    createMany?: hsusers_rolesCreateManyHeemployeesInputEnvelope
    set?: hsusers_rolesWhereUniqueInput | hsusers_rolesWhereUniqueInput[]
    disconnect?: hsusers_rolesWhereUniqueInput | hsusers_rolesWhereUniqueInput[]
    delete?: hsusers_rolesWhereUniqueInput | hsusers_rolesWhereUniqueInput[]
    connect?: hsusers_rolesWhereUniqueInput | hsusers_rolesWhereUniqueInput[]
    update?: hsusers_rolesUpdateWithWhereUniqueWithoutHeemployeesInput | hsusers_rolesUpdateWithWhereUniqueWithoutHeemployeesInput[]
    updateMany?: hsusers_rolesUpdateManyWithWhereWithoutHeemployeesInput | hsusers_rolesUpdateManyWithWhereWithoutHeemployeesInput[]
    deleteMany?: hsusers_rolesScalarWhereInput | hsusers_rolesScalarWhereInput[]
  }

  export type hsvaliditiesUncheckedUpdateManyWithoutHsemployeesNestedInput = {
    create?: XOR<hsvaliditiesCreateWithoutHsemployeesInput, hsvaliditiesUncheckedCreateWithoutHsemployeesInput> | hsvaliditiesCreateWithoutHsemployeesInput[] | hsvaliditiesUncheckedCreateWithoutHsemployeesInput[]
    connectOrCreate?: hsvaliditiesCreateOrConnectWithoutHsemployeesInput | hsvaliditiesCreateOrConnectWithoutHsemployeesInput[]
    upsert?: hsvaliditiesUpsertWithWhereUniqueWithoutHsemployeesInput | hsvaliditiesUpsertWithWhereUniqueWithoutHsemployeesInput[]
    createMany?: hsvaliditiesCreateManyHsemployeesInputEnvelope
    set?: hsvaliditiesWhereUniqueInput | hsvaliditiesWhereUniqueInput[]
    disconnect?: hsvaliditiesWhereUniqueInput | hsvaliditiesWhereUniqueInput[]
    delete?: hsvaliditiesWhereUniqueInput | hsvaliditiesWhereUniqueInput[]
    connect?: hsvaliditiesWhereUniqueInput | hsvaliditiesWhereUniqueInput[]
    update?: hsvaliditiesUpdateWithWhereUniqueWithoutHsemployeesInput | hsvaliditiesUpdateWithWhereUniqueWithoutHsemployeesInput[]
    updateMany?: hsvaliditiesUpdateManyWithWhereWithoutHsemployeesInput | hsvaliditiesUpdateManyWithWhereWithoutHsemployeesInput[]
    deleteMany?: hsvaliditiesScalarWhereInput | hsvaliditiesScalarWhereInput[]
  }

  export type hsvalidity_requestsUncheckedUpdateManyWithoutAnalystNestedInput = {
    create?: XOR<hsvalidity_requestsCreateWithoutAnalystInput, hsvalidity_requestsUncheckedCreateWithoutAnalystInput> | hsvalidity_requestsCreateWithoutAnalystInput[] | hsvalidity_requestsUncheckedCreateWithoutAnalystInput[]
    connectOrCreate?: hsvalidity_requestsCreateOrConnectWithoutAnalystInput | hsvalidity_requestsCreateOrConnectWithoutAnalystInput[]
    upsert?: hsvalidity_requestsUpsertWithWhereUniqueWithoutAnalystInput | hsvalidity_requestsUpsertWithWhereUniqueWithoutAnalystInput[]
    createMany?: hsvalidity_requestsCreateManyAnalystInputEnvelope
    set?: hsvalidity_requestsWhereUniqueInput | hsvalidity_requestsWhereUniqueInput[]
    disconnect?: hsvalidity_requestsWhereUniqueInput | hsvalidity_requestsWhereUniqueInput[]
    delete?: hsvalidity_requestsWhereUniqueInput | hsvalidity_requestsWhereUniqueInput[]
    connect?: hsvalidity_requestsWhereUniqueInput | hsvalidity_requestsWhereUniqueInput[]
    update?: hsvalidity_requestsUpdateWithWhereUniqueWithoutAnalystInput | hsvalidity_requestsUpdateWithWhereUniqueWithoutAnalystInput[]
    updateMany?: hsvalidity_requestsUpdateManyWithWhereWithoutAnalystInput | hsvalidity_requestsUpdateManyWithWhereWithoutAnalystInput[]
    deleteMany?: hsvalidity_requestsScalarWhereInput | hsvalidity_requestsScalarWhereInput[]
  }

  export type hsvalidity_requestsUncheckedUpdateManyWithoutConfereeNestedInput = {
    create?: XOR<hsvalidity_requestsCreateWithoutConfereeInput, hsvalidity_requestsUncheckedCreateWithoutConfereeInput> | hsvalidity_requestsCreateWithoutConfereeInput[] | hsvalidity_requestsUncheckedCreateWithoutConfereeInput[]
    connectOrCreate?: hsvalidity_requestsCreateOrConnectWithoutConfereeInput | hsvalidity_requestsCreateOrConnectWithoutConfereeInput[]
    upsert?: hsvalidity_requestsUpsertWithWhereUniqueWithoutConfereeInput | hsvalidity_requestsUpsertWithWhereUniqueWithoutConfereeInput[]
    createMany?: hsvalidity_requestsCreateManyConfereeInputEnvelope
    set?: hsvalidity_requestsWhereUniqueInput | hsvalidity_requestsWhereUniqueInput[]
    disconnect?: hsvalidity_requestsWhereUniqueInput | hsvalidity_requestsWhereUniqueInput[]
    delete?: hsvalidity_requestsWhereUniqueInput | hsvalidity_requestsWhereUniqueInput[]
    connect?: hsvalidity_requestsWhereUniqueInput | hsvalidity_requestsWhereUniqueInput[]
    update?: hsvalidity_requestsUpdateWithWhereUniqueWithoutConfereeInput | hsvalidity_requestsUpdateWithWhereUniqueWithoutConfereeInput[]
    updateMany?: hsvalidity_requestsUpdateManyWithWhereWithoutConfereeInput | hsvalidity_requestsUpdateManyWithWhereWithoutConfereeInput[]
    deleteMany?: hsvalidity_requestsScalarWhereInput | hsvalidity_requestsScalarWhereInput[]
  }

  export type hspermissions_rolesCreateNestedManyWithoutHsrolesInput = {
    create?: XOR<hspermissions_rolesCreateWithoutHsrolesInput, hspermissions_rolesUncheckedCreateWithoutHsrolesInput> | hspermissions_rolesCreateWithoutHsrolesInput[] | hspermissions_rolesUncheckedCreateWithoutHsrolesInput[]
    connectOrCreate?: hspermissions_rolesCreateOrConnectWithoutHsrolesInput | hspermissions_rolesCreateOrConnectWithoutHsrolesInput[]
    createMany?: hspermissions_rolesCreateManyHsrolesInputEnvelope
    connect?: hspermissions_rolesWhereUniqueInput | hspermissions_rolesWhereUniqueInput[]
  }

  export type hsusers_rolesCreateNestedManyWithoutHsrolesInput = {
    create?: XOR<hsusers_rolesCreateWithoutHsrolesInput, hsusers_rolesUncheckedCreateWithoutHsrolesInput> | hsusers_rolesCreateWithoutHsrolesInput[] | hsusers_rolesUncheckedCreateWithoutHsrolesInput[]
    connectOrCreate?: hsusers_rolesCreateOrConnectWithoutHsrolesInput | hsusers_rolesCreateOrConnectWithoutHsrolesInput[]
    createMany?: hsusers_rolesCreateManyHsrolesInputEnvelope
    connect?: hsusers_rolesWhereUniqueInput | hsusers_rolesWhereUniqueInput[]
  }

  export type hspermissions_rolesUncheckedCreateNestedManyWithoutHsrolesInput = {
    create?: XOR<hspermissions_rolesCreateWithoutHsrolesInput, hspermissions_rolesUncheckedCreateWithoutHsrolesInput> | hspermissions_rolesCreateWithoutHsrolesInput[] | hspermissions_rolesUncheckedCreateWithoutHsrolesInput[]
    connectOrCreate?: hspermissions_rolesCreateOrConnectWithoutHsrolesInput | hspermissions_rolesCreateOrConnectWithoutHsrolesInput[]
    createMany?: hspermissions_rolesCreateManyHsrolesInputEnvelope
    connect?: hspermissions_rolesWhereUniqueInput | hspermissions_rolesWhereUniqueInput[]
  }

  export type hsusers_rolesUncheckedCreateNestedManyWithoutHsrolesInput = {
    create?: XOR<hsusers_rolesCreateWithoutHsrolesInput, hsusers_rolesUncheckedCreateWithoutHsrolesInput> | hsusers_rolesCreateWithoutHsrolesInput[] | hsusers_rolesUncheckedCreateWithoutHsrolesInput[]
    connectOrCreate?: hsusers_rolesCreateOrConnectWithoutHsrolesInput | hsusers_rolesCreateOrConnectWithoutHsrolesInput[]
    createMany?: hsusers_rolesCreateManyHsrolesInputEnvelope
    connect?: hsusers_rolesWhereUniqueInput | hsusers_rolesWhereUniqueInput[]
  }

  export type hspermissions_rolesUpdateManyWithoutHsrolesNestedInput = {
    create?: XOR<hspermissions_rolesCreateWithoutHsrolesInput, hspermissions_rolesUncheckedCreateWithoutHsrolesInput> | hspermissions_rolesCreateWithoutHsrolesInput[] | hspermissions_rolesUncheckedCreateWithoutHsrolesInput[]
    connectOrCreate?: hspermissions_rolesCreateOrConnectWithoutHsrolesInput | hspermissions_rolesCreateOrConnectWithoutHsrolesInput[]
    upsert?: hspermissions_rolesUpsertWithWhereUniqueWithoutHsrolesInput | hspermissions_rolesUpsertWithWhereUniqueWithoutHsrolesInput[]
    createMany?: hspermissions_rolesCreateManyHsrolesInputEnvelope
    set?: hspermissions_rolesWhereUniqueInput | hspermissions_rolesWhereUniqueInput[]
    disconnect?: hspermissions_rolesWhereUniqueInput | hspermissions_rolesWhereUniqueInput[]
    delete?: hspermissions_rolesWhereUniqueInput | hspermissions_rolesWhereUniqueInput[]
    connect?: hspermissions_rolesWhereUniqueInput | hspermissions_rolesWhereUniqueInput[]
    update?: hspermissions_rolesUpdateWithWhereUniqueWithoutHsrolesInput | hspermissions_rolesUpdateWithWhereUniqueWithoutHsrolesInput[]
    updateMany?: hspermissions_rolesUpdateManyWithWhereWithoutHsrolesInput | hspermissions_rolesUpdateManyWithWhereWithoutHsrolesInput[]
    deleteMany?: hspermissions_rolesScalarWhereInput | hspermissions_rolesScalarWhereInput[]
  }

  export type hsusers_rolesUpdateManyWithoutHsrolesNestedInput = {
    create?: XOR<hsusers_rolesCreateWithoutHsrolesInput, hsusers_rolesUncheckedCreateWithoutHsrolesInput> | hsusers_rolesCreateWithoutHsrolesInput[] | hsusers_rolesUncheckedCreateWithoutHsrolesInput[]
    connectOrCreate?: hsusers_rolesCreateOrConnectWithoutHsrolesInput | hsusers_rolesCreateOrConnectWithoutHsrolesInput[]
    upsert?: hsusers_rolesUpsertWithWhereUniqueWithoutHsrolesInput | hsusers_rolesUpsertWithWhereUniqueWithoutHsrolesInput[]
    createMany?: hsusers_rolesCreateManyHsrolesInputEnvelope
    set?: hsusers_rolesWhereUniqueInput | hsusers_rolesWhereUniqueInput[]
    disconnect?: hsusers_rolesWhereUniqueInput | hsusers_rolesWhereUniqueInput[]
    delete?: hsusers_rolesWhereUniqueInput | hsusers_rolesWhereUniqueInput[]
    connect?: hsusers_rolesWhereUniqueInput | hsusers_rolesWhereUniqueInput[]
    update?: hsusers_rolesUpdateWithWhereUniqueWithoutHsrolesInput | hsusers_rolesUpdateWithWhereUniqueWithoutHsrolesInput[]
    updateMany?: hsusers_rolesUpdateManyWithWhereWithoutHsrolesInput | hsusers_rolesUpdateManyWithWhereWithoutHsrolesInput[]
    deleteMany?: hsusers_rolesScalarWhereInput | hsusers_rolesScalarWhereInput[]
  }

  export type hspermissions_rolesUncheckedUpdateManyWithoutHsrolesNestedInput = {
    create?: XOR<hspermissions_rolesCreateWithoutHsrolesInput, hspermissions_rolesUncheckedCreateWithoutHsrolesInput> | hspermissions_rolesCreateWithoutHsrolesInput[] | hspermissions_rolesUncheckedCreateWithoutHsrolesInput[]
    connectOrCreate?: hspermissions_rolesCreateOrConnectWithoutHsrolesInput | hspermissions_rolesCreateOrConnectWithoutHsrolesInput[]
    upsert?: hspermissions_rolesUpsertWithWhereUniqueWithoutHsrolesInput | hspermissions_rolesUpsertWithWhereUniqueWithoutHsrolesInput[]
    createMany?: hspermissions_rolesCreateManyHsrolesInputEnvelope
    set?: hspermissions_rolesWhereUniqueInput | hspermissions_rolesWhereUniqueInput[]
    disconnect?: hspermissions_rolesWhereUniqueInput | hspermissions_rolesWhereUniqueInput[]
    delete?: hspermissions_rolesWhereUniqueInput | hspermissions_rolesWhereUniqueInput[]
    connect?: hspermissions_rolesWhereUniqueInput | hspermissions_rolesWhereUniqueInput[]
    update?: hspermissions_rolesUpdateWithWhereUniqueWithoutHsrolesInput | hspermissions_rolesUpdateWithWhereUniqueWithoutHsrolesInput[]
    updateMany?: hspermissions_rolesUpdateManyWithWhereWithoutHsrolesInput | hspermissions_rolesUpdateManyWithWhereWithoutHsrolesInput[]
    deleteMany?: hspermissions_rolesScalarWhereInput | hspermissions_rolesScalarWhereInput[]
  }

  export type hsusers_rolesUncheckedUpdateManyWithoutHsrolesNestedInput = {
    create?: XOR<hsusers_rolesCreateWithoutHsrolesInput, hsusers_rolesUncheckedCreateWithoutHsrolesInput> | hsusers_rolesCreateWithoutHsrolesInput[] | hsusers_rolesUncheckedCreateWithoutHsrolesInput[]
    connectOrCreate?: hsusers_rolesCreateOrConnectWithoutHsrolesInput | hsusers_rolesCreateOrConnectWithoutHsrolesInput[]
    upsert?: hsusers_rolesUpsertWithWhereUniqueWithoutHsrolesInput | hsusers_rolesUpsertWithWhereUniqueWithoutHsrolesInput[]
    createMany?: hsusers_rolesCreateManyHsrolesInputEnvelope
    set?: hsusers_rolesWhereUniqueInput | hsusers_rolesWhereUniqueInput[]
    disconnect?: hsusers_rolesWhereUniqueInput | hsusers_rolesWhereUniqueInput[]
    delete?: hsusers_rolesWhereUniqueInput | hsusers_rolesWhereUniqueInput[]
    connect?: hsusers_rolesWhereUniqueInput | hsusers_rolesWhereUniqueInput[]
    update?: hsusers_rolesUpdateWithWhereUniqueWithoutHsrolesInput | hsusers_rolesUpdateWithWhereUniqueWithoutHsrolesInput[]
    updateMany?: hsusers_rolesUpdateManyWithWhereWithoutHsrolesInput | hsusers_rolesUpdateManyWithWhereWithoutHsrolesInput[]
    deleteMany?: hsusers_rolesScalarWhereInput | hsusers_rolesScalarWhereInput[]
  }

  export type hspermissions_rolesCreateNestedManyWithoutHspermissionsInput = {
    create?: XOR<hspermissions_rolesCreateWithoutHspermissionsInput, hspermissions_rolesUncheckedCreateWithoutHspermissionsInput> | hspermissions_rolesCreateWithoutHspermissionsInput[] | hspermissions_rolesUncheckedCreateWithoutHspermissionsInput[]
    connectOrCreate?: hspermissions_rolesCreateOrConnectWithoutHspermissionsInput | hspermissions_rolesCreateOrConnectWithoutHspermissionsInput[]
    createMany?: hspermissions_rolesCreateManyHspermissionsInputEnvelope
    connect?: hspermissions_rolesWhereUniqueInput | hspermissions_rolesWhereUniqueInput[]
  }

  export type hsusers_permissionsCreateNestedManyWithoutHspermissionsInput = {
    create?: XOR<hsusers_permissionsCreateWithoutHspermissionsInput, hsusers_permissionsUncheckedCreateWithoutHspermissionsInput> | hsusers_permissionsCreateWithoutHspermissionsInput[] | hsusers_permissionsUncheckedCreateWithoutHspermissionsInput[]
    connectOrCreate?: hsusers_permissionsCreateOrConnectWithoutHspermissionsInput | hsusers_permissionsCreateOrConnectWithoutHspermissionsInput[]
    createMany?: hsusers_permissionsCreateManyHspermissionsInputEnvelope
    connect?: hsusers_permissionsWhereUniqueInput | hsusers_permissionsWhereUniqueInput[]
  }

  export type hspermissions_rolesUncheckedCreateNestedManyWithoutHspermissionsInput = {
    create?: XOR<hspermissions_rolesCreateWithoutHspermissionsInput, hspermissions_rolesUncheckedCreateWithoutHspermissionsInput> | hspermissions_rolesCreateWithoutHspermissionsInput[] | hspermissions_rolesUncheckedCreateWithoutHspermissionsInput[]
    connectOrCreate?: hspermissions_rolesCreateOrConnectWithoutHspermissionsInput | hspermissions_rolesCreateOrConnectWithoutHspermissionsInput[]
    createMany?: hspermissions_rolesCreateManyHspermissionsInputEnvelope
    connect?: hspermissions_rolesWhereUniqueInput | hspermissions_rolesWhereUniqueInput[]
  }

  export type hsusers_permissionsUncheckedCreateNestedManyWithoutHspermissionsInput = {
    create?: XOR<hsusers_permissionsCreateWithoutHspermissionsInput, hsusers_permissionsUncheckedCreateWithoutHspermissionsInput> | hsusers_permissionsCreateWithoutHspermissionsInput[] | hsusers_permissionsUncheckedCreateWithoutHspermissionsInput[]
    connectOrCreate?: hsusers_permissionsCreateOrConnectWithoutHspermissionsInput | hsusers_permissionsCreateOrConnectWithoutHspermissionsInput[]
    createMany?: hsusers_permissionsCreateManyHspermissionsInputEnvelope
    connect?: hsusers_permissionsWhereUniqueInput | hsusers_permissionsWhereUniqueInput[]
  }

  export type hspermissions_rolesUpdateManyWithoutHspermissionsNestedInput = {
    create?: XOR<hspermissions_rolesCreateWithoutHspermissionsInput, hspermissions_rolesUncheckedCreateWithoutHspermissionsInput> | hspermissions_rolesCreateWithoutHspermissionsInput[] | hspermissions_rolesUncheckedCreateWithoutHspermissionsInput[]
    connectOrCreate?: hspermissions_rolesCreateOrConnectWithoutHspermissionsInput | hspermissions_rolesCreateOrConnectWithoutHspermissionsInput[]
    upsert?: hspermissions_rolesUpsertWithWhereUniqueWithoutHspermissionsInput | hspermissions_rolesUpsertWithWhereUniqueWithoutHspermissionsInput[]
    createMany?: hspermissions_rolesCreateManyHspermissionsInputEnvelope
    set?: hspermissions_rolesWhereUniqueInput | hspermissions_rolesWhereUniqueInput[]
    disconnect?: hspermissions_rolesWhereUniqueInput | hspermissions_rolesWhereUniqueInput[]
    delete?: hspermissions_rolesWhereUniqueInput | hspermissions_rolesWhereUniqueInput[]
    connect?: hspermissions_rolesWhereUniqueInput | hspermissions_rolesWhereUniqueInput[]
    update?: hspermissions_rolesUpdateWithWhereUniqueWithoutHspermissionsInput | hspermissions_rolesUpdateWithWhereUniqueWithoutHspermissionsInput[]
    updateMany?: hspermissions_rolesUpdateManyWithWhereWithoutHspermissionsInput | hspermissions_rolesUpdateManyWithWhereWithoutHspermissionsInput[]
    deleteMany?: hspermissions_rolesScalarWhereInput | hspermissions_rolesScalarWhereInput[]
  }

  export type hsusers_permissionsUpdateManyWithoutHspermissionsNestedInput = {
    create?: XOR<hsusers_permissionsCreateWithoutHspermissionsInput, hsusers_permissionsUncheckedCreateWithoutHspermissionsInput> | hsusers_permissionsCreateWithoutHspermissionsInput[] | hsusers_permissionsUncheckedCreateWithoutHspermissionsInput[]
    connectOrCreate?: hsusers_permissionsCreateOrConnectWithoutHspermissionsInput | hsusers_permissionsCreateOrConnectWithoutHspermissionsInput[]
    upsert?: hsusers_permissionsUpsertWithWhereUniqueWithoutHspermissionsInput | hsusers_permissionsUpsertWithWhereUniqueWithoutHspermissionsInput[]
    createMany?: hsusers_permissionsCreateManyHspermissionsInputEnvelope
    set?: hsusers_permissionsWhereUniqueInput | hsusers_permissionsWhereUniqueInput[]
    disconnect?: hsusers_permissionsWhereUniqueInput | hsusers_permissionsWhereUniqueInput[]
    delete?: hsusers_permissionsWhereUniqueInput | hsusers_permissionsWhereUniqueInput[]
    connect?: hsusers_permissionsWhereUniqueInput | hsusers_permissionsWhereUniqueInput[]
    update?: hsusers_permissionsUpdateWithWhereUniqueWithoutHspermissionsInput | hsusers_permissionsUpdateWithWhereUniqueWithoutHspermissionsInput[]
    updateMany?: hsusers_permissionsUpdateManyWithWhereWithoutHspermissionsInput | hsusers_permissionsUpdateManyWithWhereWithoutHspermissionsInput[]
    deleteMany?: hsusers_permissionsScalarWhereInput | hsusers_permissionsScalarWhereInput[]
  }

  export type hspermissions_rolesUncheckedUpdateManyWithoutHspermissionsNestedInput = {
    create?: XOR<hspermissions_rolesCreateWithoutHspermissionsInput, hspermissions_rolesUncheckedCreateWithoutHspermissionsInput> | hspermissions_rolesCreateWithoutHspermissionsInput[] | hspermissions_rolesUncheckedCreateWithoutHspermissionsInput[]
    connectOrCreate?: hspermissions_rolesCreateOrConnectWithoutHspermissionsInput | hspermissions_rolesCreateOrConnectWithoutHspermissionsInput[]
    upsert?: hspermissions_rolesUpsertWithWhereUniqueWithoutHspermissionsInput | hspermissions_rolesUpsertWithWhereUniqueWithoutHspermissionsInput[]
    createMany?: hspermissions_rolesCreateManyHspermissionsInputEnvelope
    set?: hspermissions_rolesWhereUniqueInput | hspermissions_rolesWhereUniqueInput[]
    disconnect?: hspermissions_rolesWhereUniqueInput | hspermissions_rolesWhereUniqueInput[]
    delete?: hspermissions_rolesWhereUniqueInput | hspermissions_rolesWhereUniqueInput[]
    connect?: hspermissions_rolesWhereUniqueInput | hspermissions_rolesWhereUniqueInput[]
    update?: hspermissions_rolesUpdateWithWhereUniqueWithoutHspermissionsInput | hspermissions_rolesUpdateWithWhereUniqueWithoutHspermissionsInput[]
    updateMany?: hspermissions_rolesUpdateManyWithWhereWithoutHspermissionsInput | hspermissions_rolesUpdateManyWithWhereWithoutHspermissionsInput[]
    deleteMany?: hspermissions_rolesScalarWhereInput | hspermissions_rolesScalarWhereInput[]
  }

  export type hsusers_permissionsUncheckedUpdateManyWithoutHspermissionsNestedInput = {
    create?: XOR<hsusers_permissionsCreateWithoutHspermissionsInput, hsusers_permissionsUncheckedCreateWithoutHspermissionsInput> | hsusers_permissionsCreateWithoutHspermissionsInput[] | hsusers_permissionsUncheckedCreateWithoutHspermissionsInput[]
    connectOrCreate?: hsusers_permissionsCreateOrConnectWithoutHspermissionsInput | hsusers_permissionsCreateOrConnectWithoutHspermissionsInput[]
    upsert?: hsusers_permissionsUpsertWithWhereUniqueWithoutHspermissionsInput | hsusers_permissionsUpsertWithWhereUniqueWithoutHspermissionsInput[]
    createMany?: hsusers_permissionsCreateManyHspermissionsInputEnvelope
    set?: hsusers_permissionsWhereUniqueInput | hsusers_permissionsWhereUniqueInput[]
    disconnect?: hsusers_permissionsWhereUniqueInput | hsusers_permissionsWhereUniqueInput[]
    delete?: hsusers_permissionsWhereUniqueInput | hsusers_permissionsWhereUniqueInput[]
    connect?: hsusers_permissionsWhereUniqueInput | hsusers_permissionsWhereUniqueInput[]
    update?: hsusers_permissionsUpdateWithWhereUniqueWithoutHspermissionsInput | hsusers_permissionsUpdateWithWhereUniqueWithoutHspermissionsInput[]
    updateMany?: hsusers_permissionsUpdateManyWithWhereWithoutHspermissionsInput | hsusers_permissionsUpdateManyWithWhereWithoutHspermissionsInput[]
    deleteMany?: hsusers_permissionsScalarWhereInput | hsusers_permissionsScalarWhereInput[]
  }

  export type hspermissionsCreateNestedOneWithoutHspermissions_rolesInput = {
    create?: XOR<hspermissionsCreateWithoutHspermissions_rolesInput, hspermissionsUncheckedCreateWithoutHspermissions_rolesInput>
    connectOrCreate?: hspermissionsCreateOrConnectWithoutHspermissions_rolesInput
    connect?: hspermissionsWhereUniqueInput
  }

  export type hsrolesCreateNestedOneWithoutHspermissions_rolesInput = {
    create?: XOR<hsrolesCreateWithoutHspermissions_rolesInput, hsrolesUncheckedCreateWithoutHspermissions_rolesInput>
    connectOrCreate?: hsrolesCreateOrConnectWithoutHspermissions_rolesInput
    connect?: hsrolesWhereUniqueInput
  }

  export type hspermissionsUpdateOneRequiredWithoutHspermissions_rolesNestedInput = {
    create?: XOR<hspermissionsCreateWithoutHspermissions_rolesInput, hspermissionsUncheckedCreateWithoutHspermissions_rolesInput>
    connectOrCreate?: hspermissionsCreateOrConnectWithoutHspermissions_rolesInput
    upsert?: hspermissionsUpsertWithoutHspermissions_rolesInput
    connect?: hspermissionsWhereUniqueInput
    update?: XOR<XOR<hspermissionsUpdateToOneWithWhereWithoutHspermissions_rolesInput, hspermissionsUpdateWithoutHspermissions_rolesInput>, hspermissionsUncheckedUpdateWithoutHspermissions_rolesInput>
  }

  export type hsrolesUpdateOneRequiredWithoutHspermissions_rolesNestedInput = {
    create?: XOR<hsrolesCreateWithoutHspermissions_rolesInput, hsrolesUncheckedCreateWithoutHspermissions_rolesInput>
    connectOrCreate?: hsrolesCreateOrConnectWithoutHspermissions_rolesInput
    upsert?: hsrolesUpsertWithoutHspermissions_rolesInput
    connect?: hsrolesWhereUniqueInput
    update?: XOR<XOR<hsrolesUpdateToOneWithWhereWithoutHspermissions_rolesInput, hsrolesUpdateWithoutHspermissions_rolesInput>, hsrolesUncheckedUpdateWithoutHspermissions_rolesInput>
  }

  export type hspermissionsCreateNestedOneWithoutHsusers_permissionsInput = {
    create?: XOR<hspermissionsCreateWithoutHsusers_permissionsInput, hspermissionsUncheckedCreateWithoutHsusers_permissionsInput>
    connectOrCreate?: hspermissionsCreateOrConnectWithoutHsusers_permissionsInput
    connect?: hspermissionsWhereUniqueInput
  }

  export type hsemployeesCreateNestedOneWithoutHsusers_permissionsInput = {
    create?: XOR<hsemployeesCreateWithoutHsusers_permissionsInput, hsemployeesUncheckedCreateWithoutHsusers_permissionsInput>
    connectOrCreate?: hsemployeesCreateOrConnectWithoutHsusers_permissionsInput
    connect?: hsemployeesWhereUniqueInput
  }

  export type hspermissionsUpdateOneRequiredWithoutHsusers_permissionsNestedInput = {
    create?: XOR<hspermissionsCreateWithoutHsusers_permissionsInput, hspermissionsUncheckedCreateWithoutHsusers_permissionsInput>
    connectOrCreate?: hspermissionsCreateOrConnectWithoutHsusers_permissionsInput
    upsert?: hspermissionsUpsertWithoutHsusers_permissionsInput
    connect?: hspermissionsWhereUniqueInput
    update?: XOR<XOR<hspermissionsUpdateToOneWithWhereWithoutHsusers_permissionsInput, hspermissionsUpdateWithoutHsusers_permissionsInput>, hspermissionsUncheckedUpdateWithoutHsusers_permissionsInput>
  }

  export type hsemployeesUpdateOneRequiredWithoutHsusers_permissionsNestedInput = {
    create?: XOR<hsemployeesCreateWithoutHsusers_permissionsInput, hsemployeesUncheckedCreateWithoutHsusers_permissionsInput>
    connectOrCreate?: hsemployeesCreateOrConnectWithoutHsusers_permissionsInput
    upsert?: hsemployeesUpsertWithoutHsusers_permissionsInput
    connect?: hsemployeesWhereUniqueInput
    update?: XOR<XOR<hsemployeesUpdateToOneWithWhereWithoutHsusers_permissionsInput, hsemployeesUpdateWithoutHsusers_permissionsInput>, hsemployeesUncheckedUpdateWithoutHsusers_permissionsInput>
  }

  export type hsrolesCreateNestedOneWithoutHsusers_rolesInput = {
    create?: XOR<hsrolesCreateWithoutHsusers_rolesInput, hsrolesUncheckedCreateWithoutHsusers_rolesInput>
    connectOrCreate?: hsrolesCreateOrConnectWithoutHsusers_rolesInput
    connect?: hsrolesWhereUniqueInput
  }

  export type hsemployeesCreateNestedOneWithoutHsusers_rolesInput = {
    create?: XOR<hsemployeesCreateWithoutHsusers_rolesInput, hsemployeesUncheckedCreateWithoutHsusers_rolesInput>
    connectOrCreate?: hsemployeesCreateOrConnectWithoutHsusers_rolesInput
    connect?: hsemployeesWhereUniqueInput
  }

  export type hsrolesUpdateOneRequiredWithoutHsusers_rolesNestedInput = {
    create?: XOR<hsrolesCreateWithoutHsusers_rolesInput, hsrolesUncheckedCreateWithoutHsusers_rolesInput>
    connectOrCreate?: hsrolesCreateOrConnectWithoutHsusers_rolesInput
    upsert?: hsrolesUpsertWithoutHsusers_rolesInput
    connect?: hsrolesWhereUniqueInput
    update?: XOR<XOR<hsrolesUpdateToOneWithWhereWithoutHsusers_rolesInput, hsrolesUpdateWithoutHsusers_rolesInput>, hsrolesUncheckedUpdateWithoutHsusers_rolesInput>
  }

  export type hsemployeesUpdateOneRequiredWithoutHsusers_rolesNestedInput = {
    create?: XOR<hsemployeesCreateWithoutHsusers_rolesInput, hsemployeesUncheckedCreateWithoutHsusers_rolesInput>
    connectOrCreate?: hsemployeesCreateOrConnectWithoutHsusers_rolesInput
    upsert?: hsemployeesUpsertWithoutHsusers_rolesInput
    connect?: hsemployeesWhereUniqueInput
    update?: XOR<XOR<hsemployeesUpdateToOneWithWhereWithoutHsusers_rolesInput, hsemployeesUpdateWithoutHsusers_rolesInput>, hsemployeesUncheckedUpdateWithoutHsusers_rolesInput>
  }

  export type hsemployeesCreateNestedManyWithoutBranchInput = {
    create?: XOR<hsemployeesCreateWithoutBranchInput, hsemployeesUncheckedCreateWithoutBranchInput> | hsemployeesCreateWithoutBranchInput[] | hsemployeesUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: hsemployeesCreateOrConnectWithoutBranchInput | hsemployeesCreateOrConnectWithoutBranchInput[]
    createMany?: hsemployeesCreateManyBranchInputEnvelope
    connect?: hsemployeesWhereUniqueInput | hsemployeesWhereUniqueInput[]
  }

  export type hsvaliditiesCreateNestedManyWithoutHsbranchesInput = {
    create?: XOR<hsvaliditiesCreateWithoutHsbranchesInput, hsvaliditiesUncheckedCreateWithoutHsbranchesInput> | hsvaliditiesCreateWithoutHsbranchesInput[] | hsvaliditiesUncheckedCreateWithoutHsbranchesInput[]
    connectOrCreate?: hsvaliditiesCreateOrConnectWithoutHsbranchesInput | hsvaliditiesCreateOrConnectWithoutHsbranchesInput[]
    createMany?: hsvaliditiesCreateManyHsbranchesInputEnvelope
    connect?: hsvaliditiesWhereUniqueInput | hsvaliditiesWhereUniqueInput[]
  }

  export type hsvalidity_requestsCreateNestedManyWithoutHsbranchesInput = {
    create?: XOR<hsvalidity_requestsCreateWithoutHsbranchesInput, hsvalidity_requestsUncheckedCreateWithoutHsbranchesInput> | hsvalidity_requestsCreateWithoutHsbranchesInput[] | hsvalidity_requestsUncheckedCreateWithoutHsbranchesInput[]
    connectOrCreate?: hsvalidity_requestsCreateOrConnectWithoutHsbranchesInput | hsvalidity_requestsCreateOrConnectWithoutHsbranchesInput[]
    createMany?: hsvalidity_requestsCreateManyHsbranchesInputEnvelope
    connect?: hsvalidity_requestsWhereUniqueInput | hsvalidity_requestsWhereUniqueInput[]
  }

  export type hsemployeesUncheckedCreateNestedManyWithoutBranchInput = {
    create?: XOR<hsemployeesCreateWithoutBranchInput, hsemployeesUncheckedCreateWithoutBranchInput> | hsemployeesCreateWithoutBranchInput[] | hsemployeesUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: hsemployeesCreateOrConnectWithoutBranchInput | hsemployeesCreateOrConnectWithoutBranchInput[]
    createMany?: hsemployeesCreateManyBranchInputEnvelope
    connect?: hsemployeesWhereUniqueInput | hsemployeesWhereUniqueInput[]
  }

  export type hsvaliditiesUncheckedCreateNestedManyWithoutHsbranchesInput = {
    create?: XOR<hsvaliditiesCreateWithoutHsbranchesInput, hsvaliditiesUncheckedCreateWithoutHsbranchesInput> | hsvaliditiesCreateWithoutHsbranchesInput[] | hsvaliditiesUncheckedCreateWithoutHsbranchesInput[]
    connectOrCreate?: hsvaliditiesCreateOrConnectWithoutHsbranchesInput | hsvaliditiesCreateOrConnectWithoutHsbranchesInput[]
    createMany?: hsvaliditiesCreateManyHsbranchesInputEnvelope
    connect?: hsvaliditiesWhereUniqueInput | hsvaliditiesWhereUniqueInput[]
  }

  export type hsvalidity_requestsUncheckedCreateNestedManyWithoutHsbranchesInput = {
    create?: XOR<hsvalidity_requestsCreateWithoutHsbranchesInput, hsvalidity_requestsUncheckedCreateWithoutHsbranchesInput> | hsvalidity_requestsCreateWithoutHsbranchesInput[] | hsvalidity_requestsUncheckedCreateWithoutHsbranchesInput[]
    connectOrCreate?: hsvalidity_requestsCreateOrConnectWithoutHsbranchesInput | hsvalidity_requestsCreateOrConnectWithoutHsbranchesInput[]
    createMany?: hsvalidity_requestsCreateManyHsbranchesInputEnvelope
    connect?: hsvalidity_requestsWhereUniqueInput | hsvalidity_requestsWhereUniqueInput[]
  }

  export type hsemployeesUpdateManyWithoutBranchNestedInput = {
    create?: XOR<hsemployeesCreateWithoutBranchInput, hsemployeesUncheckedCreateWithoutBranchInput> | hsemployeesCreateWithoutBranchInput[] | hsemployeesUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: hsemployeesCreateOrConnectWithoutBranchInput | hsemployeesCreateOrConnectWithoutBranchInput[]
    upsert?: hsemployeesUpsertWithWhereUniqueWithoutBranchInput | hsemployeesUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: hsemployeesCreateManyBranchInputEnvelope
    set?: hsemployeesWhereUniqueInput | hsemployeesWhereUniqueInput[]
    disconnect?: hsemployeesWhereUniqueInput | hsemployeesWhereUniqueInput[]
    delete?: hsemployeesWhereUniqueInput | hsemployeesWhereUniqueInput[]
    connect?: hsemployeesWhereUniqueInput | hsemployeesWhereUniqueInput[]
    update?: hsemployeesUpdateWithWhereUniqueWithoutBranchInput | hsemployeesUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: hsemployeesUpdateManyWithWhereWithoutBranchInput | hsemployeesUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: hsemployeesScalarWhereInput | hsemployeesScalarWhereInput[]
  }

  export type hsvaliditiesUpdateManyWithoutHsbranchesNestedInput = {
    create?: XOR<hsvaliditiesCreateWithoutHsbranchesInput, hsvaliditiesUncheckedCreateWithoutHsbranchesInput> | hsvaliditiesCreateWithoutHsbranchesInput[] | hsvaliditiesUncheckedCreateWithoutHsbranchesInput[]
    connectOrCreate?: hsvaliditiesCreateOrConnectWithoutHsbranchesInput | hsvaliditiesCreateOrConnectWithoutHsbranchesInput[]
    upsert?: hsvaliditiesUpsertWithWhereUniqueWithoutHsbranchesInput | hsvaliditiesUpsertWithWhereUniqueWithoutHsbranchesInput[]
    createMany?: hsvaliditiesCreateManyHsbranchesInputEnvelope
    set?: hsvaliditiesWhereUniqueInput | hsvaliditiesWhereUniqueInput[]
    disconnect?: hsvaliditiesWhereUniqueInput | hsvaliditiesWhereUniqueInput[]
    delete?: hsvaliditiesWhereUniqueInput | hsvaliditiesWhereUniqueInput[]
    connect?: hsvaliditiesWhereUniqueInput | hsvaliditiesWhereUniqueInput[]
    update?: hsvaliditiesUpdateWithWhereUniqueWithoutHsbranchesInput | hsvaliditiesUpdateWithWhereUniqueWithoutHsbranchesInput[]
    updateMany?: hsvaliditiesUpdateManyWithWhereWithoutHsbranchesInput | hsvaliditiesUpdateManyWithWhereWithoutHsbranchesInput[]
    deleteMany?: hsvaliditiesScalarWhereInput | hsvaliditiesScalarWhereInput[]
  }

  export type hsvalidity_requestsUpdateManyWithoutHsbranchesNestedInput = {
    create?: XOR<hsvalidity_requestsCreateWithoutHsbranchesInput, hsvalidity_requestsUncheckedCreateWithoutHsbranchesInput> | hsvalidity_requestsCreateWithoutHsbranchesInput[] | hsvalidity_requestsUncheckedCreateWithoutHsbranchesInput[]
    connectOrCreate?: hsvalidity_requestsCreateOrConnectWithoutHsbranchesInput | hsvalidity_requestsCreateOrConnectWithoutHsbranchesInput[]
    upsert?: hsvalidity_requestsUpsertWithWhereUniqueWithoutHsbranchesInput | hsvalidity_requestsUpsertWithWhereUniqueWithoutHsbranchesInput[]
    createMany?: hsvalidity_requestsCreateManyHsbranchesInputEnvelope
    set?: hsvalidity_requestsWhereUniqueInput | hsvalidity_requestsWhereUniqueInput[]
    disconnect?: hsvalidity_requestsWhereUniqueInput | hsvalidity_requestsWhereUniqueInput[]
    delete?: hsvalidity_requestsWhereUniqueInput | hsvalidity_requestsWhereUniqueInput[]
    connect?: hsvalidity_requestsWhereUniqueInput | hsvalidity_requestsWhereUniqueInput[]
    update?: hsvalidity_requestsUpdateWithWhereUniqueWithoutHsbranchesInput | hsvalidity_requestsUpdateWithWhereUniqueWithoutHsbranchesInput[]
    updateMany?: hsvalidity_requestsUpdateManyWithWhereWithoutHsbranchesInput | hsvalidity_requestsUpdateManyWithWhereWithoutHsbranchesInput[]
    deleteMany?: hsvalidity_requestsScalarWhereInput | hsvalidity_requestsScalarWhereInput[]
  }

  export type hsemployeesUncheckedUpdateManyWithoutBranchNestedInput = {
    create?: XOR<hsemployeesCreateWithoutBranchInput, hsemployeesUncheckedCreateWithoutBranchInput> | hsemployeesCreateWithoutBranchInput[] | hsemployeesUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: hsemployeesCreateOrConnectWithoutBranchInput | hsemployeesCreateOrConnectWithoutBranchInput[]
    upsert?: hsemployeesUpsertWithWhereUniqueWithoutBranchInput | hsemployeesUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: hsemployeesCreateManyBranchInputEnvelope
    set?: hsemployeesWhereUniqueInput | hsemployeesWhereUniqueInput[]
    disconnect?: hsemployeesWhereUniqueInput | hsemployeesWhereUniqueInput[]
    delete?: hsemployeesWhereUniqueInput | hsemployeesWhereUniqueInput[]
    connect?: hsemployeesWhereUniqueInput | hsemployeesWhereUniqueInput[]
    update?: hsemployeesUpdateWithWhereUniqueWithoutBranchInput | hsemployeesUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: hsemployeesUpdateManyWithWhereWithoutBranchInput | hsemployeesUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: hsemployeesScalarWhereInput | hsemployeesScalarWhereInput[]
  }

  export type hsvaliditiesUncheckedUpdateManyWithoutHsbranchesNestedInput = {
    create?: XOR<hsvaliditiesCreateWithoutHsbranchesInput, hsvaliditiesUncheckedCreateWithoutHsbranchesInput> | hsvaliditiesCreateWithoutHsbranchesInput[] | hsvaliditiesUncheckedCreateWithoutHsbranchesInput[]
    connectOrCreate?: hsvaliditiesCreateOrConnectWithoutHsbranchesInput | hsvaliditiesCreateOrConnectWithoutHsbranchesInput[]
    upsert?: hsvaliditiesUpsertWithWhereUniqueWithoutHsbranchesInput | hsvaliditiesUpsertWithWhereUniqueWithoutHsbranchesInput[]
    createMany?: hsvaliditiesCreateManyHsbranchesInputEnvelope
    set?: hsvaliditiesWhereUniqueInput | hsvaliditiesWhereUniqueInput[]
    disconnect?: hsvaliditiesWhereUniqueInput | hsvaliditiesWhereUniqueInput[]
    delete?: hsvaliditiesWhereUniqueInput | hsvaliditiesWhereUniqueInput[]
    connect?: hsvaliditiesWhereUniqueInput | hsvaliditiesWhereUniqueInput[]
    update?: hsvaliditiesUpdateWithWhereUniqueWithoutHsbranchesInput | hsvaliditiesUpdateWithWhereUniqueWithoutHsbranchesInput[]
    updateMany?: hsvaliditiesUpdateManyWithWhereWithoutHsbranchesInput | hsvaliditiesUpdateManyWithWhereWithoutHsbranchesInput[]
    deleteMany?: hsvaliditiesScalarWhereInput | hsvaliditiesScalarWhereInput[]
  }

  export type hsvalidity_requestsUncheckedUpdateManyWithoutHsbranchesNestedInput = {
    create?: XOR<hsvalidity_requestsCreateWithoutHsbranchesInput, hsvalidity_requestsUncheckedCreateWithoutHsbranchesInput> | hsvalidity_requestsCreateWithoutHsbranchesInput[] | hsvalidity_requestsUncheckedCreateWithoutHsbranchesInput[]
    connectOrCreate?: hsvalidity_requestsCreateOrConnectWithoutHsbranchesInput | hsvalidity_requestsCreateOrConnectWithoutHsbranchesInput[]
    upsert?: hsvalidity_requestsUpsertWithWhereUniqueWithoutHsbranchesInput | hsvalidity_requestsUpsertWithWhereUniqueWithoutHsbranchesInput[]
    createMany?: hsvalidity_requestsCreateManyHsbranchesInputEnvelope
    set?: hsvalidity_requestsWhereUniqueInput | hsvalidity_requestsWhereUniqueInput[]
    disconnect?: hsvalidity_requestsWhereUniqueInput | hsvalidity_requestsWhereUniqueInput[]
    delete?: hsvalidity_requestsWhereUniqueInput | hsvalidity_requestsWhereUniqueInput[]
    connect?: hsvalidity_requestsWhereUniqueInput | hsvalidity_requestsWhereUniqueInput[]
    update?: hsvalidity_requestsUpdateWithWhereUniqueWithoutHsbranchesInput | hsvalidity_requestsUpdateWithWhereUniqueWithoutHsbranchesInput[]
    updateMany?: hsvalidity_requestsUpdateManyWithWhereWithoutHsbranchesInput | hsvalidity_requestsUpdateManyWithWhereWithoutHsbranchesInput[]
    deleteMany?: hsvalidity_requestsScalarWhereInput | hsvalidity_requestsScalarWhereInput[]
  }

  export type hsbranchesCreateNestedOneWithoutHsvaliditiesInput = {
    create?: XOR<hsbranchesCreateWithoutHsvaliditiesInput, hsbranchesUncheckedCreateWithoutHsvaliditiesInput>
    connectOrCreate?: hsbranchesCreateOrConnectWithoutHsvaliditiesInput
    connect?: hsbranchesWhereUniqueInput
  }

  export type hsemployeesCreateNestedOneWithoutHsvaliditiesInput = {
    create?: XOR<hsemployeesCreateWithoutHsvaliditiesInput, hsemployeesUncheckedCreateWithoutHsvaliditiesInput>
    connectOrCreate?: hsemployeesCreateOrConnectWithoutHsvaliditiesInput
    connect?: hsemployeesWhereUniqueInput
  }

  export type hsvalidity_requestsCreateNestedOneWithoutHsvaliditiesInput = {
    create?: XOR<hsvalidity_requestsCreateWithoutHsvaliditiesInput, hsvalidity_requestsUncheckedCreateWithoutHsvaliditiesInput>
    connectOrCreate?: hsvalidity_requestsCreateOrConnectWithoutHsvaliditiesInput
    connect?: hsvalidity_requestsWhereUniqueInput
  }

  export type hsvalidity_productsCreateNestedManyWithoutHsvaliditiesInput = {
    create?: XOR<hsvalidity_productsCreateWithoutHsvaliditiesInput, hsvalidity_productsUncheckedCreateWithoutHsvaliditiesInput> | hsvalidity_productsCreateWithoutHsvaliditiesInput[] | hsvalidity_productsUncheckedCreateWithoutHsvaliditiesInput[]
    connectOrCreate?: hsvalidity_productsCreateOrConnectWithoutHsvaliditiesInput | hsvalidity_productsCreateOrConnectWithoutHsvaliditiesInput[]
    createMany?: hsvalidity_productsCreateManyHsvaliditiesInputEnvelope
    connect?: hsvalidity_productsWhereUniqueInput | hsvalidity_productsWhereUniqueInput[]
  }

  export type hsvalidity_productsUncheckedCreateNestedManyWithoutHsvaliditiesInput = {
    create?: XOR<hsvalidity_productsCreateWithoutHsvaliditiesInput, hsvalidity_productsUncheckedCreateWithoutHsvaliditiesInput> | hsvalidity_productsCreateWithoutHsvaliditiesInput[] | hsvalidity_productsUncheckedCreateWithoutHsvaliditiesInput[]
    connectOrCreate?: hsvalidity_productsCreateOrConnectWithoutHsvaliditiesInput | hsvalidity_productsCreateOrConnectWithoutHsvaliditiesInput[]
    createMany?: hsvalidity_productsCreateManyHsvaliditiesInputEnvelope
    connect?: hsvalidity_productsWhereUniqueInput | hsvalidity_productsWhereUniqueInput[]
  }

  export type Enumhsvalidities_statusFieldUpdateOperationsInput = {
    set?: $Enums.hsvalidities_status
  }

  export type hsbranchesUpdateOneRequiredWithoutHsvaliditiesNestedInput = {
    create?: XOR<hsbranchesCreateWithoutHsvaliditiesInput, hsbranchesUncheckedCreateWithoutHsvaliditiesInput>
    connectOrCreate?: hsbranchesCreateOrConnectWithoutHsvaliditiesInput
    upsert?: hsbranchesUpsertWithoutHsvaliditiesInput
    connect?: hsbranchesWhereUniqueInput
    update?: XOR<XOR<hsbranchesUpdateToOneWithWhereWithoutHsvaliditiesInput, hsbranchesUpdateWithoutHsvaliditiesInput>, hsbranchesUncheckedUpdateWithoutHsvaliditiesInput>
  }

  export type hsemployeesUpdateOneRequiredWithoutHsvaliditiesNestedInput = {
    create?: XOR<hsemployeesCreateWithoutHsvaliditiesInput, hsemployeesUncheckedCreateWithoutHsvaliditiesInput>
    connectOrCreate?: hsemployeesCreateOrConnectWithoutHsvaliditiesInput
    upsert?: hsemployeesUpsertWithoutHsvaliditiesInput
    connect?: hsemployeesWhereUniqueInput
    update?: XOR<XOR<hsemployeesUpdateToOneWithWhereWithoutHsvaliditiesInput, hsemployeesUpdateWithoutHsvaliditiesInput>, hsemployeesUncheckedUpdateWithoutHsvaliditiesInput>
  }

  export type hsvalidity_requestsUpdateOneWithoutHsvaliditiesNestedInput = {
    create?: XOR<hsvalidity_requestsCreateWithoutHsvaliditiesInput, hsvalidity_requestsUncheckedCreateWithoutHsvaliditiesInput>
    connectOrCreate?: hsvalidity_requestsCreateOrConnectWithoutHsvaliditiesInput
    upsert?: hsvalidity_requestsUpsertWithoutHsvaliditiesInput
    disconnect?: hsvalidity_requestsWhereInput | boolean
    delete?: hsvalidity_requestsWhereInput | boolean
    connect?: hsvalidity_requestsWhereUniqueInput
    update?: XOR<XOR<hsvalidity_requestsUpdateToOneWithWhereWithoutHsvaliditiesInput, hsvalidity_requestsUpdateWithoutHsvaliditiesInput>, hsvalidity_requestsUncheckedUpdateWithoutHsvaliditiesInput>
  }

  export type hsvalidity_productsUpdateManyWithoutHsvaliditiesNestedInput = {
    create?: XOR<hsvalidity_productsCreateWithoutHsvaliditiesInput, hsvalidity_productsUncheckedCreateWithoutHsvaliditiesInput> | hsvalidity_productsCreateWithoutHsvaliditiesInput[] | hsvalidity_productsUncheckedCreateWithoutHsvaliditiesInput[]
    connectOrCreate?: hsvalidity_productsCreateOrConnectWithoutHsvaliditiesInput | hsvalidity_productsCreateOrConnectWithoutHsvaliditiesInput[]
    upsert?: hsvalidity_productsUpsertWithWhereUniqueWithoutHsvaliditiesInput | hsvalidity_productsUpsertWithWhereUniqueWithoutHsvaliditiesInput[]
    createMany?: hsvalidity_productsCreateManyHsvaliditiesInputEnvelope
    set?: hsvalidity_productsWhereUniqueInput | hsvalidity_productsWhereUniqueInput[]
    disconnect?: hsvalidity_productsWhereUniqueInput | hsvalidity_productsWhereUniqueInput[]
    delete?: hsvalidity_productsWhereUniqueInput | hsvalidity_productsWhereUniqueInput[]
    connect?: hsvalidity_productsWhereUniqueInput | hsvalidity_productsWhereUniqueInput[]
    update?: hsvalidity_productsUpdateWithWhereUniqueWithoutHsvaliditiesInput | hsvalidity_productsUpdateWithWhereUniqueWithoutHsvaliditiesInput[]
    updateMany?: hsvalidity_productsUpdateManyWithWhereWithoutHsvaliditiesInput | hsvalidity_productsUpdateManyWithWhereWithoutHsvaliditiesInput[]
    deleteMany?: hsvalidity_productsScalarWhereInput | hsvalidity_productsScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type hsvalidity_productsUncheckedUpdateManyWithoutHsvaliditiesNestedInput = {
    create?: XOR<hsvalidity_productsCreateWithoutHsvaliditiesInput, hsvalidity_productsUncheckedCreateWithoutHsvaliditiesInput> | hsvalidity_productsCreateWithoutHsvaliditiesInput[] | hsvalidity_productsUncheckedCreateWithoutHsvaliditiesInput[]
    connectOrCreate?: hsvalidity_productsCreateOrConnectWithoutHsvaliditiesInput | hsvalidity_productsCreateOrConnectWithoutHsvaliditiesInput[]
    upsert?: hsvalidity_productsUpsertWithWhereUniqueWithoutHsvaliditiesInput | hsvalidity_productsUpsertWithWhereUniqueWithoutHsvaliditiesInput[]
    createMany?: hsvalidity_productsCreateManyHsvaliditiesInputEnvelope
    set?: hsvalidity_productsWhereUniqueInput | hsvalidity_productsWhereUniqueInput[]
    disconnect?: hsvalidity_productsWhereUniqueInput | hsvalidity_productsWhereUniqueInput[]
    delete?: hsvalidity_productsWhereUniqueInput | hsvalidity_productsWhereUniqueInput[]
    connect?: hsvalidity_productsWhereUniqueInput | hsvalidity_productsWhereUniqueInput[]
    update?: hsvalidity_productsUpdateWithWhereUniqueWithoutHsvaliditiesInput | hsvalidity_productsUpdateWithWhereUniqueWithoutHsvaliditiesInput[]
    updateMany?: hsvalidity_productsUpdateManyWithWhereWithoutHsvaliditiesInput | hsvalidity_productsUpdateManyWithWhereWithoutHsvaliditiesInput[]
    deleteMany?: hsvalidity_productsScalarWhereInput | hsvalidity_productsScalarWhereInput[]
  }

  export type hsvalidity_treatmentsCreateNestedOneWithoutHsvalidity_productsInput = {
    create?: XOR<hsvalidity_treatmentsCreateWithoutHsvalidity_productsInput, hsvalidity_treatmentsUncheckedCreateWithoutHsvalidity_productsInput>
    connectOrCreate?: hsvalidity_treatmentsCreateOrConnectWithoutHsvalidity_productsInput
    connect?: hsvalidity_treatmentsWhereUniqueInput
  }

  export type hsvaliditiesCreateNestedOneWithoutHsvalidity_productsInput = {
    create?: XOR<hsvaliditiesCreateWithoutHsvalidity_productsInput, hsvaliditiesUncheckedCreateWithoutHsvalidity_productsInput>
    connectOrCreate?: hsvaliditiesCreateOrConnectWithoutHsvalidity_productsInput
    connect?: hsvaliditiesWhereUniqueInput
  }

  export type hsvalidity_treatmentsUpdateOneRequiredWithoutHsvalidity_productsNestedInput = {
    create?: XOR<hsvalidity_treatmentsCreateWithoutHsvalidity_productsInput, hsvalidity_treatmentsUncheckedCreateWithoutHsvalidity_productsInput>
    connectOrCreate?: hsvalidity_treatmentsCreateOrConnectWithoutHsvalidity_productsInput
    upsert?: hsvalidity_treatmentsUpsertWithoutHsvalidity_productsInput
    connect?: hsvalidity_treatmentsWhereUniqueInput
    update?: XOR<XOR<hsvalidity_treatmentsUpdateToOneWithWhereWithoutHsvalidity_productsInput, hsvalidity_treatmentsUpdateWithoutHsvalidity_productsInput>, hsvalidity_treatmentsUncheckedUpdateWithoutHsvalidity_productsInput>
  }

  export type hsvaliditiesUpdateOneRequiredWithoutHsvalidity_productsNestedInput = {
    create?: XOR<hsvaliditiesCreateWithoutHsvalidity_productsInput, hsvaliditiesUncheckedCreateWithoutHsvalidity_productsInput>
    connectOrCreate?: hsvaliditiesCreateOrConnectWithoutHsvalidity_productsInput
    upsert?: hsvaliditiesUpsertWithoutHsvalidity_productsInput
    connect?: hsvaliditiesWhereUniqueInput
    update?: XOR<XOR<hsvaliditiesUpdateToOneWithWhereWithoutHsvalidity_productsInput, hsvaliditiesUpdateWithoutHsvalidity_productsInput>, hsvaliditiesUncheckedUpdateWithoutHsvalidity_productsInput>
  }

  export type hsvaliditiesCreateNestedManyWithoutHsvalidity_requestsInput = {
    create?: XOR<hsvaliditiesCreateWithoutHsvalidity_requestsInput, hsvaliditiesUncheckedCreateWithoutHsvalidity_requestsInput> | hsvaliditiesCreateWithoutHsvalidity_requestsInput[] | hsvaliditiesUncheckedCreateWithoutHsvalidity_requestsInput[]
    connectOrCreate?: hsvaliditiesCreateOrConnectWithoutHsvalidity_requestsInput | hsvaliditiesCreateOrConnectWithoutHsvalidity_requestsInput[]
    createMany?: hsvaliditiesCreateManyHsvalidity_requestsInputEnvelope
    connect?: hsvaliditiesWhereUniqueInput | hsvaliditiesWhereUniqueInput[]
  }

  export type hsvalidity_request_productsCreateNestedManyWithoutHsvalidity_requestsInput = {
    create?: XOR<hsvalidity_request_productsCreateWithoutHsvalidity_requestsInput, hsvalidity_request_productsUncheckedCreateWithoutHsvalidity_requestsInput> | hsvalidity_request_productsCreateWithoutHsvalidity_requestsInput[] | hsvalidity_request_productsUncheckedCreateWithoutHsvalidity_requestsInput[]
    connectOrCreate?: hsvalidity_request_productsCreateOrConnectWithoutHsvalidity_requestsInput | hsvalidity_request_productsCreateOrConnectWithoutHsvalidity_requestsInput[]
    createMany?: hsvalidity_request_productsCreateManyHsvalidity_requestsInputEnvelope
    connect?: hsvalidity_request_productsWhereUniqueInput | hsvalidity_request_productsWhereUniqueInput[]
  }

  export type hsemployeesCreateNestedOneWithoutAnalystRequestsInput = {
    create?: XOR<hsemployeesCreateWithoutAnalystRequestsInput, hsemployeesUncheckedCreateWithoutAnalystRequestsInput>
    connectOrCreate?: hsemployeesCreateOrConnectWithoutAnalystRequestsInput
    connect?: hsemployeesWhereUniqueInput
  }

  export type hsbranchesCreateNestedOneWithoutHsvalidity_requestsInput = {
    create?: XOR<hsbranchesCreateWithoutHsvalidity_requestsInput, hsbranchesUncheckedCreateWithoutHsvalidity_requestsInput>
    connectOrCreate?: hsbranchesCreateOrConnectWithoutHsvalidity_requestsInput
    connect?: hsbranchesWhereUniqueInput
  }

  export type hsemployeesCreateNestedOneWithoutConfereeRequestsInput = {
    create?: XOR<hsemployeesCreateWithoutConfereeRequestsInput, hsemployeesUncheckedCreateWithoutConfereeRequestsInput>
    connectOrCreate?: hsemployeesCreateOrConnectWithoutConfereeRequestsInput
    connect?: hsemployeesWhereUniqueInput
  }

  export type hsvaliditiesUncheckedCreateNestedManyWithoutHsvalidity_requestsInput = {
    create?: XOR<hsvaliditiesCreateWithoutHsvalidity_requestsInput, hsvaliditiesUncheckedCreateWithoutHsvalidity_requestsInput> | hsvaliditiesCreateWithoutHsvalidity_requestsInput[] | hsvaliditiesUncheckedCreateWithoutHsvalidity_requestsInput[]
    connectOrCreate?: hsvaliditiesCreateOrConnectWithoutHsvalidity_requestsInput | hsvaliditiesCreateOrConnectWithoutHsvalidity_requestsInput[]
    createMany?: hsvaliditiesCreateManyHsvalidity_requestsInputEnvelope
    connect?: hsvaliditiesWhereUniqueInput | hsvaliditiesWhereUniqueInput[]
  }

  export type hsvalidity_request_productsUncheckedCreateNestedManyWithoutHsvalidity_requestsInput = {
    create?: XOR<hsvalidity_request_productsCreateWithoutHsvalidity_requestsInput, hsvalidity_request_productsUncheckedCreateWithoutHsvalidity_requestsInput> | hsvalidity_request_productsCreateWithoutHsvalidity_requestsInput[] | hsvalidity_request_productsUncheckedCreateWithoutHsvalidity_requestsInput[]
    connectOrCreate?: hsvalidity_request_productsCreateOrConnectWithoutHsvalidity_requestsInput | hsvalidity_request_productsCreateOrConnectWithoutHsvalidity_requestsInput[]
    createMany?: hsvalidity_request_productsCreateManyHsvalidity_requestsInputEnvelope
    connect?: hsvalidity_request_productsWhereUniqueInput | hsvalidity_request_productsWhereUniqueInput[]
  }

  export type Enumhsvalidity_requests_statusFieldUpdateOperationsInput = {
    set?: $Enums.hsvalidity_requests_status
  }

  export type hsvaliditiesUpdateManyWithoutHsvalidity_requestsNestedInput = {
    create?: XOR<hsvaliditiesCreateWithoutHsvalidity_requestsInput, hsvaliditiesUncheckedCreateWithoutHsvalidity_requestsInput> | hsvaliditiesCreateWithoutHsvalidity_requestsInput[] | hsvaliditiesUncheckedCreateWithoutHsvalidity_requestsInput[]
    connectOrCreate?: hsvaliditiesCreateOrConnectWithoutHsvalidity_requestsInput | hsvaliditiesCreateOrConnectWithoutHsvalidity_requestsInput[]
    upsert?: hsvaliditiesUpsertWithWhereUniqueWithoutHsvalidity_requestsInput | hsvaliditiesUpsertWithWhereUniqueWithoutHsvalidity_requestsInput[]
    createMany?: hsvaliditiesCreateManyHsvalidity_requestsInputEnvelope
    set?: hsvaliditiesWhereUniqueInput | hsvaliditiesWhereUniqueInput[]
    disconnect?: hsvaliditiesWhereUniqueInput | hsvaliditiesWhereUniqueInput[]
    delete?: hsvaliditiesWhereUniqueInput | hsvaliditiesWhereUniqueInput[]
    connect?: hsvaliditiesWhereUniqueInput | hsvaliditiesWhereUniqueInput[]
    update?: hsvaliditiesUpdateWithWhereUniqueWithoutHsvalidity_requestsInput | hsvaliditiesUpdateWithWhereUniqueWithoutHsvalidity_requestsInput[]
    updateMany?: hsvaliditiesUpdateManyWithWhereWithoutHsvalidity_requestsInput | hsvaliditiesUpdateManyWithWhereWithoutHsvalidity_requestsInput[]
    deleteMany?: hsvaliditiesScalarWhereInput | hsvaliditiesScalarWhereInput[]
  }

  export type hsvalidity_request_productsUpdateManyWithoutHsvalidity_requestsNestedInput = {
    create?: XOR<hsvalidity_request_productsCreateWithoutHsvalidity_requestsInput, hsvalidity_request_productsUncheckedCreateWithoutHsvalidity_requestsInput> | hsvalidity_request_productsCreateWithoutHsvalidity_requestsInput[] | hsvalidity_request_productsUncheckedCreateWithoutHsvalidity_requestsInput[]
    connectOrCreate?: hsvalidity_request_productsCreateOrConnectWithoutHsvalidity_requestsInput | hsvalidity_request_productsCreateOrConnectWithoutHsvalidity_requestsInput[]
    upsert?: hsvalidity_request_productsUpsertWithWhereUniqueWithoutHsvalidity_requestsInput | hsvalidity_request_productsUpsertWithWhereUniqueWithoutHsvalidity_requestsInput[]
    createMany?: hsvalidity_request_productsCreateManyHsvalidity_requestsInputEnvelope
    set?: hsvalidity_request_productsWhereUniqueInput | hsvalidity_request_productsWhereUniqueInput[]
    disconnect?: hsvalidity_request_productsWhereUniqueInput | hsvalidity_request_productsWhereUniqueInput[]
    delete?: hsvalidity_request_productsWhereUniqueInput | hsvalidity_request_productsWhereUniqueInput[]
    connect?: hsvalidity_request_productsWhereUniqueInput | hsvalidity_request_productsWhereUniqueInput[]
    update?: hsvalidity_request_productsUpdateWithWhereUniqueWithoutHsvalidity_requestsInput | hsvalidity_request_productsUpdateWithWhereUniqueWithoutHsvalidity_requestsInput[]
    updateMany?: hsvalidity_request_productsUpdateManyWithWhereWithoutHsvalidity_requestsInput | hsvalidity_request_productsUpdateManyWithWhereWithoutHsvalidity_requestsInput[]
    deleteMany?: hsvalidity_request_productsScalarWhereInput | hsvalidity_request_productsScalarWhereInput[]
  }

  export type hsemployeesUpdateOneRequiredWithoutAnalystRequestsNestedInput = {
    create?: XOR<hsemployeesCreateWithoutAnalystRequestsInput, hsemployeesUncheckedCreateWithoutAnalystRequestsInput>
    connectOrCreate?: hsemployeesCreateOrConnectWithoutAnalystRequestsInput
    upsert?: hsemployeesUpsertWithoutAnalystRequestsInput
    connect?: hsemployeesWhereUniqueInput
    update?: XOR<XOR<hsemployeesUpdateToOneWithWhereWithoutAnalystRequestsInput, hsemployeesUpdateWithoutAnalystRequestsInput>, hsemployeesUncheckedUpdateWithoutAnalystRequestsInput>
  }

  export type hsbranchesUpdateOneRequiredWithoutHsvalidity_requestsNestedInput = {
    create?: XOR<hsbranchesCreateWithoutHsvalidity_requestsInput, hsbranchesUncheckedCreateWithoutHsvalidity_requestsInput>
    connectOrCreate?: hsbranchesCreateOrConnectWithoutHsvalidity_requestsInput
    upsert?: hsbranchesUpsertWithoutHsvalidity_requestsInput
    connect?: hsbranchesWhereUniqueInput
    update?: XOR<XOR<hsbranchesUpdateToOneWithWhereWithoutHsvalidity_requestsInput, hsbranchesUpdateWithoutHsvalidity_requestsInput>, hsbranchesUncheckedUpdateWithoutHsvalidity_requestsInput>
  }

  export type hsemployeesUpdateOneRequiredWithoutConfereeRequestsNestedInput = {
    create?: XOR<hsemployeesCreateWithoutConfereeRequestsInput, hsemployeesUncheckedCreateWithoutConfereeRequestsInput>
    connectOrCreate?: hsemployeesCreateOrConnectWithoutConfereeRequestsInput
    upsert?: hsemployeesUpsertWithoutConfereeRequestsInput
    connect?: hsemployeesWhereUniqueInput
    update?: XOR<XOR<hsemployeesUpdateToOneWithWhereWithoutConfereeRequestsInput, hsemployeesUpdateWithoutConfereeRequestsInput>, hsemployeesUncheckedUpdateWithoutConfereeRequestsInput>
  }

  export type hsvaliditiesUncheckedUpdateManyWithoutHsvalidity_requestsNestedInput = {
    create?: XOR<hsvaliditiesCreateWithoutHsvalidity_requestsInput, hsvaliditiesUncheckedCreateWithoutHsvalidity_requestsInput> | hsvaliditiesCreateWithoutHsvalidity_requestsInput[] | hsvaliditiesUncheckedCreateWithoutHsvalidity_requestsInput[]
    connectOrCreate?: hsvaliditiesCreateOrConnectWithoutHsvalidity_requestsInput | hsvaliditiesCreateOrConnectWithoutHsvalidity_requestsInput[]
    upsert?: hsvaliditiesUpsertWithWhereUniqueWithoutHsvalidity_requestsInput | hsvaliditiesUpsertWithWhereUniqueWithoutHsvalidity_requestsInput[]
    createMany?: hsvaliditiesCreateManyHsvalidity_requestsInputEnvelope
    set?: hsvaliditiesWhereUniqueInput | hsvaliditiesWhereUniqueInput[]
    disconnect?: hsvaliditiesWhereUniqueInput | hsvaliditiesWhereUniqueInput[]
    delete?: hsvaliditiesWhereUniqueInput | hsvaliditiesWhereUniqueInput[]
    connect?: hsvaliditiesWhereUniqueInput | hsvaliditiesWhereUniqueInput[]
    update?: hsvaliditiesUpdateWithWhereUniqueWithoutHsvalidity_requestsInput | hsvaliditiesUpdateWithWhereUniqueWithoutHsvalidity_requestsInput[]
    updateMany?: hsvaliditiesUpdateManyWithWhereWithoutHsvalidity_requestsInput | hsvaliditiesUpdateManyWithWhereWithoutHsvalidity_requestsInput[]
    deleteMany?: hsvaliditiesScalarWhereInput | hsvaliditiesScalarWhereInput[]
  }

  export type hsvalidity_request_productsUncheckedUpdateManyWithoutHsvalidity_requestsNestedInput = {
    create?: XOR<hsvalidity_request_productsCreateWithoutHsvalidity_requestsInput, hsvalidity_request_productsUncheckedCreateWithoutHsvalidity_requestsInput> | hsvalidity_request_productsCreateWithoutHsvalidity_requestsInput[] | hsvalidity_request_productsUncheckedCreateWithoutHsvalidity_requestsInput[]
    connectOrCreate?: hsvalidity_request_productsCreateOrConnectWithoutHsvalidity_requestsInput | hsvalidity_request_productsCreateOrConnectWithoutHsvalidity_requestsInput[]
    upsert?: hsvalidity_request_productsUpsertWithWhereUniqueWithoutHsvalidity_requestsInput | hsvalidity_request_productsUpsertWithWhereUniqueWithoutHsvalidity_requestsInput[]
    createMany?: hsvalidity_request_productsCreateManyHsvalidity_requestsInputEnvelope
    set?: hsvalidity_request_productsWhereUniqueInput | hsvalidity_request_productsWhereUniqueInput[]
    disconnect?: hsvalidity_request_productsWhereUniqueInput | hsvalidity_request_productsWhereUniqueInput[]
    delete?: hsvalidity_request_productsWhereUniqueInput | hsvalidity_request_productsWhereUniqueInput[]
    connect?: hsvalidity_request_productsWhereUniqueInput | hsvalidity_request_productsWhereUniqueInput[]
    update?: hsvalidity_request_productsUpdateWithWhereUniqueWithoutHsvalidity_requestsInput | hsvalidity_request_productsUpdateWithWhereUniqueWithoutHsvalidity_requestsInput[]
    updateMany?: hsvalidity_request_productsUpdateManyWithWhereWithoutHsvalidity_requestsInput | hsvalidity_request_productsUpdateManyWithWhereWithoutHsvalidity_requestsInput[]
    deleteMany?: hsvalidity_request_productsScalarWhereInput | hsvalidity_request_productsScalarWhereInput[]
  }

  export type hsvalidity_requestsCreateNestedOneWithoutHsvalidity_request_productsInput = {
    create?: XOR<hsvalidity_requestsCreateWithoutHsvalidity_request_productsInput, hsvalidity_requestsUncheckedCreateWithoutHsvalidity_request_productsInput>
    connectOrCreate?: hsvalidity_requestsCreateOrConnectWithoutHsvalidity_request_productsInput
    connect?: hsvalidity_requestsWhereUniqueInput
  }

  export type Enumhsvalidity_request_products_statusFieldUpdateOperationsInput = {
    set?: $Enums.hsvalidity_request_products_status
  }

  export type hsvalidity_requestsUpdateOneRequiredWithoutHsvalidity_request_productsNestedInput = {
    create?: XOR<hsvalidity_requestsCreateWithoutHsvalidity_request_productsInput, hsvalidity_requestsUncheckedCreateWithoutHsvalidity_request_productsInput>
    connectOrCreate?: hsvalidity_requestsCreateOrConnectWithoutHsvalidity_request_productsInput
    upsert?: hsvalidity_requestsUpsertWithoutHsvalidity_request_productsInput
    connect?: hsvalidity_requestsWhereUniqueInput
    update?: XOR<XOR<hsvalidity_requestsUpdateToOneWithWhereWithoutHsvalidity_request_productsInput, hsvalidity_requestsUpdateWithoutHsvalidity_request_productsInput>, hsvalidity_requestsUncheckedUpdateWithoutHsvalidity_request_productsInput>
  }

  export type hsvalidity_productsCreateNestedManyWithoutHsvalidity_treatmentsInput = {
    create?: XOR<hsvalidity_productsCreateWithoutHsvalidity_treatmentsInput, hsvalidity_productsUncheckedCreateWithoutHsvalidity_treatmentsInput> | hsvalidity_productsCreateWithoutHsvalidity_treatmentsInput[] | hsvalidity_productsUncheckedCreateWithoutHsvalidity_treatmentsInput[]
    connectOrCreate?: hsvalidity_productsCreateOrConnectWithoutHsvalidity_treatmentsInput | hsvalidity_productsCreateOrConnectWithoutHsvalidity_treatmentsInput[]
    createMany?: hsvalidity_productsCreateManyHsvalidity_treatmentsInputEnvelope
    connect?: hsvalidity_productsWhereUniqueInput | hsvalidity_productsWhereUniqueInput[]
  }

  export type hsvalidity_productsUncheckedCreateNestedManyWithoutHsvalidity_treatmentsInput = {
    create?: XOR<hsvalidity_productsCreateWithoutHsvalidity_treatmentsInput, hsvalidity_productsUncheckedCreateWithoutHsvalidity_treatmentsInput> | hsvalidity_productsCreateWithoutHsvalidity_treatmentsInput[] | hsvalidity_productsUncheckedCreateWithoutHsvalidity_treatmentsInput[]
    connectOrCreate?: hsvalidity_productsCreateOrConnectWithoutHsvalidity_treatmentsInput | hsvalidity_productsCreateOrConnectWithoutHsvalidity_treatmentsInput[]
    createMany?: hsvalidity_productsCreateManyHsvalidity_treatmentsInputEnvelope
    connect?: hsvalidity_productsWhereUniqueInput | hsvalidity_productsWhereUniqueInput[]
  }

  export type hsvalidity_productsUpdateManyWithoutHsvalidity_treatmentsNestedInput = {
    create?: XOR<hsvalidity_productsCreateWithoutHsvalidity_treatmentsInput, hsvalidity_productsUncheckedCreateWithoutHsvalidity_treatmentsInput> | hsvalidity_productsCreateWithoutHsvalidity_treatmentsInput[] | hsvalidity_productsUncheckedCreateWithoutHsvalidity_treatmentsInput[]
    connectOrCreate?: hsvalidity_productsCreateOrConnectWithoutHsvalidity_treatmentsInput | hsvalidity_productsCreateOrConnectWithoutHsvalidity_treatmentsInput[]
    upsert?: hsvalidity_productsUpsertWithWhereUniqueWithoutHsvalidity_treatmentsInput | hsvalidity_productsUpsertWithWhereUniqueWithoutHsvalidity_treatmentsInput[]
    createMany?: hsvalidity_productsCreateManyHsvalidity_treatmentsInputEnvelope
    set?: hsvalidity_productsWhereUniqueInput | hsvalidity_productsWhereUniqueInput[]
    disconnect?: hsvalidity_productsWhereUniqueInput | hsvalidity_productsWhereUniqueInput[]
    delete?: hsvalidity_productsWhereUniqueInput | hsvalidity_productsWhereUniqueInput[]
    connect?: hsvalidity_productsWhereUniqueInput | hsvalidity_productsWhereUniqueInput[]
    update?: hsvalidity_productsUpdateWithWhereUniqueWithoutHsvalidity_treatmentsInput | hsvalidity_productsUpdateWithWhereUniqueWithoutHsvalidity_treatmentsInput[]
    updateMany?: hsvalidity_productsUpdateManyWithWhereWithoutHsvalidity_treatmentsInput | hsvalidity_productsUpdateManyWithWhereWithoutHsvalidity_treatmentsInput[]
    deleteMany?: hsvalidity_productsScalarWhereInput | hsvalidity_productsScalarWhereInput[]
  }

  export type hsvalidity_productsUncheckedUpdateManyWithoutHsvalidity_treatmentsNestedInput = {
    create?: XOR<hsvalidity_productsCreateWithoutHsvalidity_treatmentsInput, hsvalidity_productsUncheckedCreateWithoutHsvalidity_treatmentsInput> | hsvalidity_productsCreateWithoutHsvalidity_treatmentsInput[] | hsvalidity_productsUncheckedCreateWithoutHsvalidity_treatmentsInput[]
    connectOrCreate?: hsvalidity_productsCreateOrConnectWithoutHsvalidity_treatmentsInput | hsvalidity_productsCreateOrConnectWithoutHsvalidity_treatmentsInput[]
    upsert?: hsvalidity_productsUpsertWithWhereUniqueWithoutHsvalidity_treatmentsInput | hsvalidity_productsUpsertWithWhereUniqueWithoutHsvalidity_treatmentsInput[]
    createMany?: hsvalidity_productsCreateManyHsvalidity_treatmentsInputEnvelope
    set?: hsvalidity_productsWhereUniqueInput | hsvalidity_productsWhereUniqueInput[]
    disconnect?: hsvalidity_productsWhereUniqueInput | hsvalidity_productsWhereUniqueInput[]
    delete?: hsvalidity_productsWhereUniqueInput | hsvalidity_productsWhereUniqueInput[]
    connect?: hsvalidity_productsWhereUniqueInput | hsvalidity_productsWhereUniqueInput[]
    update?: hsvalidity_productsUpdateWithWhereUniqueWithoutHsvalidity_treatmentsInput | hsvalidity_productsUpdateWithWhereUniqueWithoutHsvalidity_treatmentsInput[]
    updateMany?: hsvalidity_productsUpdateManyWithWhereWithoutHsvalidity_treatmentsInput | hsvalidity_productsUpdateManyWithWhereWithoutHsvalidity_treatmentsInput[]
    deleteMany?: hsvalidity_productsScalarWhereInput | hsvalidity_productsScalarWhereInput[]
  }

  export type hsemployeesCreateNestedOneWithoutSessionsInput = {
    create?: XOR<hsemployeesCreateWithoutSessionsInput, hsemployeesUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: hsemployeesCreateOrConnectWithoutSessionsInput
    connect?: hsemployeesWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type hsemployeesUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<hsemployeesCreateWithoutSessionsInput, hsemployeesUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: hsemployeesCreateOrConnectWithoutSessionsInput
    upsert?: hsemployeesUpsertWithoutSessionsInput
    connect?: hsemployeesWhereUniqueInput
    update?: XOR<XOR<hsemployeesUpdateToOneWithWhereWithoutSessionsInput, hsemployeesUpdateWithoutSessionsInput>, hsemployeesUncheckedUpdateWithoutSessionsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumhsvalidities_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.hsvalidities_status | Enumhsvalidities_statusFieldRefInput<$PrismaModel>
    in?: $Enums.hsvalidities_status[] | ListEnumhsvalidities_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.hsvalidities_status[] | ListEnumhsvalidities_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumhsvalidities_statusFilter<$PrismaModel> | $Enums.hsvalidities_status
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumhsvalidities_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.hsvalidities_status | Enumhsvalidities_statusFieldRefInput<$PrismaModel>
    in?: $Enums.hsvalidities_status[] | ListEnumhsvalidities_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.hsvalidities_status[] | ListEnumhsvalidities_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumhsvalidities_statusWithAggregatesFilter<$PrismaModel> | $Enums.hsvalidities_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumhsvalidities_statusFilter<$PrismaModel>
    _max?: NestedEnumhsvalidities_statusFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumhsvalidity_requests_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.hsvalidity_requests_status | Enumhsvalidity_requests_statusFieldRefInput<$PrismaModel>
    in?: $Enums.hsvalidity_requests_status[] | ListEnumhsvalidity_requests_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.hsvalidity_requests_status[] | ListEnumhsvalidity_requests_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumhsvalidity_requests_statusFilter<$PrismaModel> | $Enums.hsvalidity_requests_status
  }

  export type NestedEnumhsvalidity_requests_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.hsvalidity_requests_status | Enumhsvalidity_requests_statusFieldRefInput<$PrismaModel>
    in?: $Enums.hsvalidity_requests_status[] | ListEnumhsvalidity_requests_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.hsvalidity_requests_status[] | ListEnumhsvalidity_requests_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumhsvalidity_requests_statusWithAggregatesFilter<$PrismaModel> | $Enums.hsvalidity_requests_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumhsvalidity_requests_statusFilter<$PrismaModel>
    _max?: NestedEnumhsvalidity_requests_statusFilter<$PrismaModel>
  }

  export type NestedEnumhsvalidity_request_products_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.hsvalidity_request_products_status | Enumhsvalidity_request_products_statusFieldRefInput<$PrismaModel>
    in?: $Enums.hsvalidity_request_products_status[] | ListEnumhsvalidity_request_products_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.hsvalidity_request_products_status[] | ListEnumhsvalidity_request_products_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumhsvalidity_request_products_statusFilter<$PrismaModel> | $Enums.hsvalidity_request_products_status
  }

  export type NestedEnumhsvalidity_request_products_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.hsvalidity_request_products_status | Enumhsvalidity_request_products_statusFieldRefInput<$PrismaModel>
    in?: $Enums.hsvalidity_request_products_status[] | ListEnumhsvalidity_request_products_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.hsvalidity_request_products_status[] | ListEnumhsvalidity_request_products_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumhsvalidity_request_products_statusWithAggregatesFilter<$PrismaModel> | $Enums.hsvalidity_request_products_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumhsvalidity_request_products_statusFilter<$PrismaModel>
    _max?: NestedEnumhsvalidity_request_products_statusFilter<$PrismaModel>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type hsbranchesCreateWithoutHsemployeesInput = {
    description: string
    hsvalidities?: hsvaliditiesCreateNestedManyWithoutHsbranchesInput
    hsvalidity_requests?: hsvalidity_requestsCreateNestedManyWithoutHsbranchesInput
  }

  export type hsbranchesUncheckedCreateWithoutHsemployeesInput = {
    id?: number
    description: string
    hsvalidities?: hsvaliditiesUncheckedCreateNestedManyWithoutHsbranchesInput
    hsvalidity_requests?: hsvalidity_requestsUncheckedCreateNestedManyWithoutHsbranchesInput
  }

  export type hsbranchesCreateOrConnectWithoutHsemployeesInput = {
    where: hsbranchesWhereUniqueInput
    create: XOR<hsbranchesCreateWithoutHsemployeesInput, hsbranchesUncheckedCreateWithoutHsemployeesInput>
  }

  export type hssessionsCreateWithoutUserInput = {
    id?: string
    token: string
    created_at?: Date | string
    expires_at?: Date | string | null
  }

  export type hssessionsUncheckedCreateWithoutUserInput = {
    id?: string
    token: string
    created_at?: Date | string
    expires_at?: Date | string | null
  }

  export type hssessionsCreateOrConnectWithoutUserInput = {
    where: hssessionsWhereUniqueInput
    create: XOR<hssessionsCreateWithoutUserInput, hssessionsUncheckedCreateWithoutUserInput>
  }

  export type hssessionsCreateManyUserInputEnvelope = {
    data: hssessionsCreateManyUserInput | hssessionsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type hsusers_permissionsCreateWithoutHsemployeesInput = {
    hspermissions: hspermissionsCreateNestedOneWithoutHsusers_permissionsInput
  }

  export type hsusers_permissionsUncheckedCreateWithoutHsemployeesInput = {
    permission_id: number
  }

  export type hsusers_permissionsCreateOrConnectWithoutHsemployeesInput = {
    where: hsusers_permissionsWhereUniqueInput
    create: XOR<hsusers_permissionsCreateWithoutHsemployeesInput, hsusers_permissionsUncheckedCreateWithoutHsemployeesInput>
  }

  export type hsusers_permissionsCreateManyHsemployeesInputEnvelope = {
    data: hsusers_permissionsCreateManyHsemployeesInput | hsusers_permissionsCreateManyHsemployeesInput[]
    skipDuplicates?: boolean
  }

  export type hsusers_rolesCreateWithoutHeemployeesInput = {
    hsroles: hsrolesCreateNestedOneWithoutHsusers_rolesInput
  }

  export type hsusers_rolesUncheckedCreateWithoutHeemployeesInput = {
    role_id: number
  }

  export type hsusers_rolesCreateOrConnectWithoutHeemployeesInput = {
    where: hsusers_rolesWhereUniqueInput
    create: XOR<hsusers_rolesCreateWithoutHeemployeesInput, hsusers_rolesUncheckedCreateWithoutHeemployeesInput>
  }

  export type hsusers_rolesCreateManyHeemployeesInputEnvelope = {
    data: hsusers_rolesCreateManyHeemployeesInput | hsusers_rolesCreateManyHeemployeesInput[]
    skipDuplicates?: boolean
  }

  export type hsvaliditiesCreateWithoutHsemployeesInput = {
    status?: $Enums.hsvalidities_status
    created_at?: Date | string
    modified_at?: Date | string
    hsbranches: hsbranchesCreateNestedOneWithoutHsvaliditiesInput
    hsvalidity_requests?: hsvalidity_requestsCreateNestedOneWithoutHsvaliditiesInput
    hsvalidity_products?: hsvalidity_productsCreateNestedManyWithoutHsvaliditiesInput
  }

  export type hsvaliditiesUncheckedCreateWithoutHsemployeesInput = {
    id?: number
    branch_id: number
    status?: $Enums.hsvalidities_status
    request_id?: number | null
    created_at?: Date | string
    modified_at?: Date | string
    hsvalidity_products?: hsvalidity_productsUncheckedCreateNestedManyWithoutHsvaliditiesInput
  }

  export type hsvaliditiesCreateOrConnectWithoutHsemployeesInput = {
    where: hsvaliditiesWhereUniqueInput
    create: XOR<hsvaliditiesCreateWithoutHsemployeesInput, hsvaliditiesUncheckedCreateWithoutHsemployeesInput>
  }

  export type hsvaliditiesCreateManyHsemployeesInputEnvelope = {
    data: hsvaliditiesCreateManyHsemployeesInput | hsvaliditiesCreateManyHsemployeesInput[]
    skipDuplicates?: boolean
  }

  export type hsvalidity_requestsCreateWithoutAnalystInput = {
    status?: $Enums.hsvalidity_requests_status
    created_at?: Date | string
    modified_at?: Date | string
    hsvalidities?: hsvaliditiesCreateNestedManyWithoutHsvalidity_requestsInput
    hsvalidity_request_products?: hsvalidity_request_productsCreateNestedManyWithoutHsvalidity_requestsInput
    hsbranches: hsbranchesCreateNestedOneWithoutHsvalidity_requestsInput
    conferee: hsemployeesCreateNestedOneWithoutConfereeRequestsInput
  }

  export type hsvalidity_requestsUncheckedCreateWithoutAnalystInput = {
    id?: number
    branch_id: number
    conferee_id: number
    status?: $Enums.hsvalidity_requests_status
    created_at?: Date | string
    modified_at?: Date | string
    hsvalidities?: hsvaliditiesUncheckedCreateNestedManyWithoutHsvalidity_requestsInput
    hsvalidity_request_products?: hsvalidity_request_productsUncheckedCreateNestedManyWithoutHsvalidity_requestsInput
  }

  export type hsvalidity_requestsCreateOrConnectWithoutAnalystInput = {
    where: hsvalidity_requestsWhereUniqueInput
    create: XOR<hsvalidity_requestsCreateWithoutAnalystInput, hsvalidity_requestsUncheckedCreateWithoutAnalystInput>
  }

  export type hsvalidity_requestsCreateManyAnalystInputEnvelope = {
    data: hsvalidity_requestsCreateManyAnalystInput | hsvalidity_requestsCreateManyAnalystInput[]
    skipDuplicates?: boolean
  }

  export type hsvalidity_requestsCreateWithoutConfereeInput = {
    status?: $Enums.hsvalidity_requests_status
    created_at?: Date | string
    modified_at?: Date | string
    hsvalidities?: hsvaliditiesCreateNestedManyWithoutHsvalidity_requestsInput
    hsvalidity_request_products?: hsvalidity_request_productsCreateNestedManyWithoutHsvalidity_requestsInput
    analyst: hsemployeesCreateNestedOneWithoutAnalystRequestsInput
    hsbranches: hsbranchesCreateNestedOneWithoutHsvalidity_requestsInput
  }

  export type hsvalidity_requestsUncheckedCreateWithoutConfereeInput = {
    id?: number
    branch_id: number
    analyst_id: number
    status?: $Enums.hsvalidity_requests_status
    created_at?: Date | string
    modified_at?: Date | string
    hsvalidities?: hsvaliditiesUncheckedCreateNestedManyWithoutHsvalidity_requestsInput
    hsvalidity_request_products?: hsvalidity_request_productsUncheckedCreateNestedManyWithoutHsvalidity_requestsInput
  }

  export type hsvalidity_requestsCreateOrConnectWithoutConfereeInput = {
    where: hsvalidity_requestsWhereUniqueInput
    create: XOR<hsvalidity_requestsCreateWithoutConfereeInput, hsvalidity_requestsUncheckedCreateWithoutConfereeInput>
  }

  export type hsvalidity_requestsCreateManyConfereeInputEnvelope = {
    data: hsvalidity_requestsCreateManyConfereeInput | hsvalidity_requestsCreateManyConfereeInput[]
    skipDuplicates?: boolean
  }

  export type hsbranchesUpsertWithoutHsemployeesInput = {
    update: XOR<hsbranchesUpdateWithoutHsemployeesInput, hsbranchesUncheckedUpdateWithoutHsemployeesInput>
    create: XOR<hsbranchesCreateWithoutHsemployeesInput, hsbranchesUncheckedCreateWithoutHsemployeesInput>
    where?: hsbranchesWhereInput
  }

  export type hsbranchesUpdateToOneWithWhereWithoutHsemployeesInput = {
    where?: hsbranchesWhereInput
    data: XOR<hsbranchesUpdateWithoutHsemployeesInput, hsbranchesUncheckedUpdateWithoutHsemployeesInput>
  }

  export type hsbranchesUpdateWithoutHsemployeesInput = {
    description?: StringFieldUpdateOperationsInput | string
    hsvalidities?: hsvaliditiesUpdateManyWithoutHsbranchesNestedInput
    hsvalidity_requests?: hsvalidity_requestsUpdateManyWithoutHsbranchesNestedInput
  }

  export type hsbranchesUncheckedUpdateWithoutHsemployeesInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    hsvalidities?: hsvaliditiesUncheckedUpdateManyWithoutHsbranchesNestedInput
    hsvalidity_requests?: hsvalidity_requestsUncheckedUpdateManyWithoutHsbranchesNestedInput
  }

  export type hssessionsUpsertWithWhereUniqueWithoutUserInput = {
    where: hssessionsWhereUniqueInput
    update: XOR<hssessionsUpdateWithoutUserInput, hssessionsUncheckedUpdateWithoutUserInput>
    create: XOR<hssessionsCreateWithoutUserInput, hssessionsUncheckedCreateWithoutUserInput>
  }

  export type hssessionsUpdateWithWhereUniqueWithoutUserInput = {
    where: hssessionsWhereUniqueInput
    data: XOR<hssessionsUpdateWithoutUserInput, hssessionsUncheckedUpdateWithoutUserInput>
  }

  export type hssessionsUpdateManyWithWhereWithoutUserInput = {
    where: hssessionsScalarWhereInput
    data: XOR<hssessionsUpdateManyMutationInput, hssessionsUncheckedUpdateManyWithoutUserInput>
  }

  export type hssessionsScalarWhereInput = {
    AND?: hssessionsScalarWhereInput | hssessionsScalarWhereInput[]
    OR?: hssessionsScalarWhereInput[]
    NOT?: hssessionsScalarWhereInput | hssessionsScalarWhereInput[]
    id?: UuidFilter<"hssessions"> | string
    user_id?: IntFilter<"hssessions"> | number
    token?: StringFilter<"hssessions"> | string
    created_at?: DateTimeFilter<"hssessions"> | Date | string
    expires_at?: DateTimeNullableFilter<"hssessions"> | Date | string | null
  }

  export type hsusers_permissionsUpsertWithWhereUniqueWithoutHsemployeesInput = {
    where: hsusers_permissionsWhereUniqueInput
    update: XOR<hsusers_permissionsUpdateWithoutHsemployeesInput, hsusers_permissionsUncheckedUpdateWithoutHsemployeesInput>
    create: XOR<hsusers_permissionsCreateWithoutHsemployeesInput, hsusers_permissionsUncheckedCreateWithoutHsemployeesInput>
  }

  export type hsusers_permissionsUpdateWithWhereUniqueWithoutHsemployeesInput = {
    where: hsusers_permissionsWhereUniqueInput
    data: XOR<hsusers_permissionsUpdateWithoutHsemployeesInput, hsusers_permissionsUncheckedUpdateWithoutHsemployeesInput>
  }

  export type hsusers_permissionsUpdateManyWithWhereWithoutHsemployeesInput = {
    where: hsusers_permissionsScalarWhereInput
    data: XOR<hsusers_permissionsUpdateManyMutationInput, hsusers_permissionsUncheckedUpdateManyWithoutHsemployeesInput>
  }

  export type hsusers_permissionsScalarWhereInput = {
    AND?: hsusers_permissionsScalarWhereInput | hsusers_permissionsScalarWhereInput[]
    OR?: hsusers_permissionsScalarWhereInput[]
    NOT?: hsusers_permissionsScalarWhereInput | hsusers_permissionsScalarWhereInput[]
    user_id?: IntFilter<"hsusers_permissions"> | number
    permission_id?: IntFilter<"hsusers_permissions"> | number
  }

  export type hsusers_rolesUpsertWithWhereUniqueWithoutHeemployeesInput = {
    where: hsusers_rolesWhereUniqueInput
    update: XOR<hsusers_rolesUpdateWithoutHeemployeesInput, hsusers_rolesUncheckedUpdateWithoutHeemployeesInput>
    create: XOR<hsusers_rolesCreateWithoutHeemployeesInput, hsusers_rolesUncheckedCreateWithoutHeemployeesInput>
  }

  export type hsusers_rolesUpdateWithWhereUniqueWithoutHeemployeesInput = {
    where: hsusers_rolesWhereUniqueInput
    data: XOR<hsusers_rolesUpdateWithoutHeemployeesInput, hsusers_rolesUncheckedUpdateWithoutHeemployeesInput>
  }

  export type hsusers_rolesUpdateManyWithWhereWithoutHeemployeesInput = {
    where: hsusers_rolesScalarWhereInput
    data: XOR<hsusers_rolesUpdateManyMutationInput, hsusers_rolesUncheckedUpdateManyWithoutHeemployeesInput>
  }

  export type hsusers_rolesScalarWhereInput = {
    AND?: hsusers_rolesScalarWhereInput | hsusers_rolesScalarWhereInput[]
    OR?: hsusers_rolesScalarWhereInput[]
    NOT?: hsusers_rolesScalarWhereInput | hsusers_rolesScalarWhereInput[]
    user_id?: IntFilter<"hsusers_roles"> | number
    role_id?: IntFilter<"hsusers_roles"> | number
  }

  export type hsvaliditiesUpsertWithWhereUniqueWithoutHsemployeesInput = {
    where: hsvaliditiesWhereUniqueInput
    update: XOR<hsvaliditiesUpdateWithoutHsemployeesInput, hsvaliditiesUncheckedUpdateWithoutHsemployeesInput>
    create: XOR<hsvaliditiesCreateWithoutHsemployeesInput, hsvaliditiesUncheckedCreateWithoutHsemployeesInput>
  }

  export type hsvaliditiesUpdateWithWhereUniqueWithoutHsemployeesInput = {
    where: hsvaliditiesWhereUniqueInput
    data: XOR<hsvaliditiesUpdateWithoutHsemployeesInput, hsvaliditiesUncheckedUpdateWithoutHsemployeesInput>
  }

  export type hsvaliditiesUpdateManyWithWhereWithoutHsemployeesInput = {
    where: hsvaliditiesScalarWhereInput
    data: XOR<hsvaliditiesUpdateManyMutationInput, hsvaliditiesUncheckedUpdateManyWithoutHsemployeesInput>
  }

  export type hsvaliditiesScalarWhereInput = {
    AND?: hsvaliditiesScalarWhereInput | hsvaliditiesScalarWhereInput[]
    OR?: hsvaliditiesScalarWhereInput[]
    NOT?: hsvaliditiesScalarWhereInput | hsvaliditiesScalarWhereInput[]
    id?: IntFilter<"hsvalidities"> | number
    branch_id?: IntFilter<"hsvalidities"> | number
    employee_id?: IntFilter<"hsvalidities"> | number
    status?: Enumhsvalidities_statusFilter<"hsvalidities"> | $Enums.hsvalidities_status
    request_id?: IntNullableFilter<"hsvalidities"> | number | null
    created_at?: DateTimeFilter<"hsvalidities"> | Date | string
    modified_at?: DateTimeFilter<"hsvalidities"> | Date | string
  }

  export type hsvalidity_requestsUpsertWithWhereUniqueWithoutAnalystInput = {
    where: hsvalidity_requestsWhereUniqueInput
    update: XOR<hsvalidity_requestsUpdateWithoutAnalystInput, hsvalidity_requestsUncheckedUpdateWithoutAnalystInput>
    create: XOR<hsvalidity_requestsCreateWithoutAnalystInput, hsvalidity_requestsUncheckedCreateWithoutAnalystInput>
  }

  export type hsvalidity_requestsUpdateWithWhereUniqueWithoutAnalystInput = {
    where: hsvalidity_requestsWhereUniqueInput
    data: XOR<hsvalidity_requestsUpdateWithoutAnalystInput, hsvalidity_requestsUncheckedUpdateWithoutAnalystInput>
  }

  export type hsvalidity_requestsUpdateManyWithWhereWithoutAnalystInput = {
    where: hsvalidity_requestsScalarWhereInput
    data: XOR<hsvalidity_requestsUpdateManyMutationInput, hsvalidity_requestsUncheckedUpdateManyWithoutAnalystInput>
  }

  export type hsvalidity_requestsScalarWhereInput = {
    AND?: hsvalidity_requestsScalarWhereInput | hsvalidity_requestsScalarWhereInput[]
    OR?: hsvalidity_requestsScalarWhereInput[]
    NOT?: hsvalidity_requestsScalarWhereInput | hsvalidity_requestsScalarWhereInput[]
    id?: IntFilter<"hsvalidity_requests"> | number
    branch_id?: IntFilter<"hsvalidity_requests"> | number
    analyst_id?: IntFilter<"hsvalidity_requests"> | number
    conferee_id?: IntFilter<"hsvalidity_requests"> | number
    status?: Enumhsvalidity_requests_statusFilter<"hsvalidity_requests"> | $Enums.hsvalidity_requests_status
    created_at?: DateTimeFilter<"hsvalidity_requests"> | Date | string
    modified_at?: DateTimeFilter<"hsvalidity_requests"> | Date | string
  }

  export type hsvalidity_requestsUpsertWithWhereUniqueWithoutConfereeInput = {
    where: hsvalidity_requestsWhereUniqueInput
    update: XOR<hsvalidity_requestsUpdateWithoutConfereeInput, hsvalidity_requestsUncheckedUpdateWithoutConfereeInput>
    create: XOR<hsvalidity_requestsCreateWithoutConfereeInput, hsvalidity_requestsUncheckedCreateWithoutConfereeInput>
  }

  export type hsvalidity_requestsUpdateWithWhereUniqueWithoutConfereeInput = {
    where: hsvalidity_requestsWhereUniqueInput
    data: XOR<hsvalidity_requestsUpdateWithoutConfereeInput, hsvalidity_requestsUncheckedUpdateWithoutConfereeInput>
  }

  export type hsvalidity_requestsUpdateManyWithWhereWithoutConfereeInput = {
    where: hsvalidity_requestsScalarWhereInput
    data: XOR<hsvalidity_requestsUpdateManyMutationInput, hsvalidity_requestsUncheckedUpdateManyWithoutConfereeInput>
  }

  export type hspermissions_rolesCreateWithoutHsrolesInput = {
    hspermissions: hspermissionsCreateNestedOneWithoutHspermissions_rolesInput
  }

  export type hspermissions_rolesUncheckedCreateWithoutHsrolesInput = {
    permission_id: number
  }

  export type hspermissions_rolesCreateOrConnectWithoutHsrolesInput = {
    where: hspermissions_rolesWhereUniqueInput
    create: XOR<hspermissions_rolesCreateWithoutHsrolesInput, hspermissions_rolesUncheckedCreateWithoutHsrolesInput>
  }

  export type hspermissions_rolesCreateManyHsrolesInputEnvelope = {
    data: hspermissions_rolesCreateManyHsrolesInput | hspermissions_rolesCreateManyHsrolesInput[]
    skipDuplicates?: boolean
  }

  export type hsusers_rolesCreateWithoutHsrolesInput = {
    heemployees: hsemployeesCreateNestedOneWithoutHsusers_rolesInput
  }

  export type hsusers_rolesUncheckedCreateWithoutHsrolesInput = {
    user_id: number
  }

  export type hsusers_rolesCreateOrConnectWithoutHsrolesInput = {
    where: hsusers_rolesWhereUniqueInput
    create: XOR<hsusers_rolesCreateWithoutHsrolesInput, hsusers_rolesUncheckedCreateWithoutHsrolesInput>
  }

  export type hsusers_rolesCreateManyHsrolesInputEnvelope = {
    data: hsusers_rolesCreateManyHsrolesInput | hsusers_rolesCreateManyHsrolesInput[]
    skipDuplicates?: boolean
  }

  export type hspermissions_rolesUpsertWithWhereUniqueWithoutHsrolesInput = {
    where: hspermissions_rolesWhereUniqueInput
    update: XOR<hspermissions_rolesUpdateWithoutHsrolesInput, hspermissions_rolesUncheckedUpdateWithoutHsrolesInput>
    create: XOR<hspermissions_rolesCreateWithoutHsrolesInput, hspermissions_rolesUncheckedCreateWithoutHsrolesInput>
  }

  export type hspermissions_rolesUpdateWithWhereUniqueWithoutHsrolesInput = {
    where: hspermissions_rolesWhereUniqueInput
    data: XOR<hspermissions_rolesUpdateWithoutHsrolesInput, hspermissions_rolesUncheckedUpdateWithoutHsrolesInput>
  }

  export type hspermissions_rolesUpdateManyWithWhereWithoutHsrolesInput = {
    where: hspermissions_rolesScalarWhereInput
    data: XOR<hspermissions_rolesUpdateManyMutationInput, hspermissions_rolesUncheckedUpdateManyWithoutHsrolesInput>
  }

  export type hspermissions_rolesScalarWhereInput = {
    AND?: hspermissions_rolesScalarWhereInput | hspermissions_rolesScalarWhereInput[]
    OR?: hspermissions_rolesScalarWhereInput[]
    NOT?: hspermissions_rolesScalarWhereInput | hspermissions_rolesScalarWhereInput[]
    role_id?: IntFilter<"hspermissions_roles"> | number
    permission_id?: IntFilter<"hspermissions_roles"> | number
  }

  export type hsusers_rolesUpsertWithWhereUniqueWithoutHsrolesInput = {
    where: hsusers_rolesWhereUniqueInput
    update: XOR<hsusers_rolesUpdateWithoutHsrolesInput, hsusers_rolesUncheckedUpdateWithoutHsrolesInput>
    create: XOR<hsusers_rolesCreateWithoutHsrolesInput, hsusers_rolesUncheckedCreateWithoutHsrolesInput>
  }

  export type hsusers_rolesUpdateWithWhereUniqueWithoutHsrolesInput = {
    where: hsusers_rolesWhereUniqueInput
    data: XOR<hsusers_rolesUpdateWithoutHsrolesInput, hsusers_rolesUncheckedUpdateWithoutHsrolesInput>
  }

  export type hsusers_rolesUpdateManyWithWhereWithoutHsrolesInput = {
    where: hsusers_rolesScalarWhereInput
    data: XOR<hsusers_rolesUpdateManyMutationInput, hsusers_rolesUncheckedUpdateManyWithoutHsrolesInput>
  }

  export type hspermissions_rolesCreateWithoutHspermissionsInput = {
    hsroles: hsrolesCreateNestedOneWithoutHspermissions_rolesInput
  }

  export type hspermissions_rolesUncheckedCreateWithoutHspermissionsInput = {
    role_id: number
  }

  export type hspermissions_rolesCreateOrConnectWithoutHspermissionsInput = {
    where: hspermissions_rolesWhereUniqueInput
    create: XOR<hspermissions_rolesCreateWithoutHspermissionsInput, hspermissions_rolesUncheckedCreateWithoutHspermissionsInput>
  }

  export type hspermissions_rolesCreateManyHspermissionsInputEnvelope = {
    data: hspermissions_rolesCreateManyHspermissionsInput | hspermissions_rolesCreateManyHspermissionsInput[]
    skipDuplicates?: boolean
  }

  export type hsusers_permissionsCreateWithoutHspermissionsInput = {
    hsemployees: hsemployeesCreateNestedOneWithoutHsusers_permissionsInput
  }

  export type hsusers_permissionsUncheckedCreateWithoutHspermissionsInput = {
    user_id: number
  }

  export type hsusers_permissionsCreateOrConnectWithoutHspermissionsInput = {
    where: hsusers_permissionsWhereUniqueInput
    create: XOR<hsusers_permissionsCreateWithoutHspermissionsInput, hsusers_permissionsUncheckedCreateWithoutHspermissionsInput>
  }

  export type hsusers_permissionsCreateManyHspermissionsInputEnvelope = {
    data: hsusers_permissionsCreateManyHspermissionsInput | hsusers_permissionsCreateManyHspermissionsInput[]
    skipDuplicates?: boolean
  }

  export type hspermissions_rolesUpsertWithWhereUniqueWithoutHspermissionsInput = {
    where: hspermissions_rolesWhereUniqueInput
    update: XOR<hspermissions_rolesUpdateWithoutHspermissionsInput, hspermissions_rolesUncheckedUpdateWithoutHspermissionsInput>
    create: XOR<hspermissions_rolesCreateWithoutHspermissionsInput, hspermissions_rolesUncheckedCreateWithoutHspermissionsInput>
  }

  export type hspermissions_rolesUpdateWithWhereUniqueWithoutHspermissionsInput = {
    where: hspermissions_rolesWhereUniqueInput
    data: XOR<hspermissions_rolesUpdateWithoutHspermissionsInput, hspermissions_rolesUncheckedUpdateWithoutHspermissionsInput>
  }

  export type hspermissions_rolesUpdateManyWithWhereWithoutHspermissionsInput = {
    where: hspermissions_rolesScalarWhereInput
    data: XOR<hspermissions_rolesUpdateManyMutationInput, hspermissions_rolesUncheckedUpdateManyWithoutHspermissionsInput>
  }

  export type hsusers_permissionsUpsertWithWhereUniqueWithoutHspermissionsInput = {
    where: hsusers_permissionsWhereUniqueInput
    update: XOR<hsusers_permissionsUpdateWithoutHspermissionsInput, hsusers_permissionsUncheckedUpdateWithoutHspermissionsInput>
    create: XOR<hsusers_permissionsCreateWithoutHspermissionsInput, hsusers_permissionsUncheckedCreateWithoutHspermissionsInput>
  }

  export type hsusers_permissionsUpdateWithWhereUniqueWithoutHspermissionsInput = {
    where: hsusers_permissionsWhereUniqueInput
    data: XOR<hsusers_permissionsUpdateWithoutHspermissionsInput, hsusers_permissionsUncheckedUpdateWithoutHspermissionsInput>
  }

  export type hsusers_permissionsUpdateManyWithWhereWithoutHspermissionsInput = {
    where: hsusers_permissionsScalarWhereInput
    data: XOR<hsusers_permissionsUpdateManyMutationInput, hsusers_permissionsUncheckedUpdateManyWithoutHspermissionsInput>
  }

  export type hspermissionsCreateWithoutHspermissions_rolesInput = {
    name: string
    description: string
    created_at?: Date | string
    modified_at?: Date | string
    hsusers_permissions?: hsusers_permissionsCreateNestedManyWithoutHspermissionsInput
  }

  export type hspermissionsUncheckedCreateWithoutHspermissions_rolesInput = {
    id?: number
    name: string
    description: string
    created_at?: Date | string
    modified_at?: Date | string
    hsusers_permissions?: hsusers_permissionsUncheckedCreateNestedManyWithoutHspermissionsInput
  }

  export type hspermissionsCreateOrConnectWithoutHspermissions_rolesInput = {
    where: hspermissionsWhereUniqueInput
    create: XOR<hspermissionsCreateWithoutHspermissions_rolesInput, hspermissionsUncheckedCreateWithoutHspermissions_rolesInput>
  }

  export type hsrolesCreateWithoutHspermissions_rolesInput = {
    name: string
    description: string
    created_at?: Date | string
    modified_at?: Date | string
    hsusers_roles?: hsusers_rolesCreateNestedManyWithoutHsrolesInput
  }

  export type hsrolesUncheckedCreateWithoutHspermissions_rolesInput = {
    id?: number
    name: string
    description: string
    created_at?: Date | string
    modified_at?: Date | string
    hsusers_roles?: hsusers_rolesUncheckedCreateNestedManyWithoutHsrolesInput
  }

  export type hsrolesCreateOrConnectWithoutHspermissions_rolesInput = {
    where: hsrolesWhereUniqueInput
    create: XOR<hsrolesCreateWithoutHspermissions_rolesInput, hsrolesUncheckedCreateWithoutHspermissions_rolesInput>
  }

  export type hspermissionsUpsertWithoutHspermissions_rolesInput = {
    update: XOR<hspermissionsUpdateWithoutHspermissions_rolesInput, hspermissionsUncheckedUpdateWithoutHspermissions_rolesInput>
    create: XOR<hspermissionsCreateWithoutHspermissions_rolesInput, hspermissionsUncheckedCreateWithoutHspermissions_rolesInput>
    where?: hspermissionsWhereInput
  }

  export type hspermissionsUpdateToOneWithWhereWithoutHspermissions_rolesInput = {
    where?: hspermissionsWhereInput
    data: XOR<hspermissionsUpdateWithoutHspermissions_rolesInput, hspermissionsUncheckedUpdateWithoutHspermissions_rolesInput>
  }

  export type hspermissionsUpdateWithoutHspermissions_rolesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    hsusers_permissions?: hsusers_permissionsUpdateManyWithoutHspermissionsNestedInput
  }

  export type hspermissionsUncheckedUpdateWithoutHspermissions_rolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    hsusers_permissions?: hsusers_permissionsUncheckedUpdateManyWithoutHspermissionsNestedInput
  }

  export type hsrolesUpsertWithoutHspermissions_rolesInput = {
    update: XOR<hsrolesUpdateWithoutHspermissions_rolesInput, hsrolesUncheckedUpdateWithoutHspermissions_rolesInput>
    create: XOR<hsrolesCreateWithoutHspermissions_rolesInput, hsrolesUncheckedCreateWithoutHspermissions_rolesInput>
    where?: hsrolesWhereInput
  }

  export type hsrolesUpdateToOneWithWhereWithoutHspermissions_rolesInput = {
    where?: hsrolesWhereInput
    data: XOR<hsrolesUpdateWithoutHspermissions_rolesInput, hsrolesUncheckedUpdateWithoutHspermissions_rolesInput>
  }

  export type hsrolesUpdateWithoutHspermissions_rolesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    hsusers_roles?: hsusers_rolesUpdateManyWithoutHsrolesNestedInput
  }

  export type hsrolesUncheckedUpdateWithoutHspermissions_rolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    hsusers_roles?: hsusers_rolesUncheckedUpdateManyWithoutHsrolesNestedInput
  }

  export type hspermissionsCreateWithoutHsusers_permissionsInput = {
    name: string
    description: string
    created_at?: Date | string
    modified_at?: Date | string
    hspermissions_roles?: hspermissions_rolesCreateNestedManyWithoutHspermissionsInput
  }

  export type hspermissionsUncheckedCreateWithoutHsusers_permissionsInput = {
    id?: number
    name: string
    description: string
    created_at?: Date | string
    modified_at?: Date | string
    hspermissions_roles?: hspermissions_rolesUncheckedCreateNestedManyWithoutHspermissionsInput
  }

  export type hspermissionsCreateOrConnectWithoutHsusers_permissionsInput = {
    where: hspermissionsWhereUniqueInput
    create: XOR<hspermissionsCreateWithoutHsusers_permissionsInput, hspermissionsUncheckedCreateWithoutHsusers_permissionsInput>
  }

  export type hsemployeesCreateWithoutHsusers_permissionsInput = {
    winthor_id?: number
    name: string
    username: string
    password: string
    created_at?: Date | string
    modified_at?: Date | string
    branch: hsbranchesCreateNestedOneWithoutHsemployeesInput
    sessions?: hssessionsCreateNestedManyWithoutUserInput
    hsusers_roles?: hsusers_rolesCreateNestedManyWithoutHeemployeesInput
    hsvalidities?: hsvaliditiesCreateNestedManyWithoutHsemployeesInput
    analystRequests?: hsvalidity_requestsCreateNestedManyWithoutAnalystInput
    confereeRequests?: hsvalidity_requestsCreateNestedManyWithoutConfereeInput
  }

  export type hsemployeesUncheckedCreateWithoutHsusers_permissionsInput = {
    id?: number
    branch_id: number
    winthor_id?: number
    name: string
    username: string
    password: string
    created_at?: Date | string
    modified_at?: Date | string
    sessions?: hssessionsUncheckedCreateNestedManyWithoutUserInput
    hsusers_roles?: hsusers_rolesUncheckedCreateNestedManyWithoutHeemployeesInput
    hsvalidities?: hsvaliditiesUncheckedCreateNestedManyWithoutHsemployeesInput
    analystRequests?: hsvalidity_requestsUncheckedCreateNestedManyWithoutAnalystInput
    confereeRequests?: hsvalidity_requestsUncheckedCreateNestedManyWithoutConfereeInput
  }

  export type hsemployeesCreateOrConnectWithoutHsusers_permissionsInput = {
    where: hsemployeesWhereUniqueInput
    create: XOR<hsemployeesCreateWithoutHsusers_permissionsInput, hsemployeesUncheckedCreateWithoutHsusers_permissionsInput>
  }

  export type hspermissionsUpsertWithoutHsusers_permissionsInput = {
    update: XOR<hspermissionsUpdateWithoutHsusers_permissionsInput, hspermissionsUncheckedUpdateWithoutHsusers_permissionsInput>
    create: XOR<hspermissionsCreateWithoutHsusers_permissionsInput, hspermissionsUncheckedCreateWithoutHsusers_permissionsInput>
    where?: hspermissionsWhereInput
  }

  export type hspermissionsUpdateToOneWithWhereWithoutHsusers_permissionsInput = {
    where?: hspermissionsWhereInput
    data: XOR<hspermissionsUpdateWithoutHsusers_permissionsInput, hspermissionsUncheckedUpdateWithoutHsusers_permissionsInput>
  }

  export type hspermissionsUpdateWithoutHsusers_permissionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    hspermissions_roles?: hspermissions_rolesUpdateManyWithoutHspermissionsNestedInput
  }

  export type hspermissionsUncheckedUpdateWithoutHsusers_permissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    hspermissions_roles?: hspermissions_rolesUncheckedUpdateManyWithoutHspermissionsNestedInput
  }

  export type hsemployeesUpsertWithoutHsusers_permissionsInput = {
    update: XOR<hsemployeesUpdateWithoutHsusers_permissionsInput, hsemployeesUncheckedUpdateWithoutHsusers_permissionsInput>
    create: XOR<hsemployeesCreateWithoutHsusers_permissionsInput, hsemployeesUncheckedCreateWithoutHsusers_permissionsInput>
    where?: hsemployeesWhereInput
  }

  export type hsemployeesUpdateToOneWithWhereWithoutHsusers_permissionsInput = {
    where?: hsemployeesWhereInput
    data: XOR<hsemployeesUpdateWithoutHsusers_permissionsInput, hsemployeesUncheckedUpdateWithoutHsusers_permissionsInput>
  }

  export type hsemployeesUpdateWithoutHsusers_permissionsInput = {
    winthor_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: hsbranchesUpdateOneRequiredWithoutHsemployeesNestedInput
    sessions?: hssessionsUpdateManyWithoutUserNestedInput
    hsusers_roles?: hsusers_rolesUpdateManyWithoutHeemployeesNestedInput
    hsvalidities?: hsvaliditiesUpdateManyWithoutHsemployeesNestedInput
    analystRequests?: hsvalidity_requestsUpdateManyWithoutAnalystNestedInput
    confereeRequests?: hsvalidity_requestsUpdateManyWithoutConfereeNestedInput
  }

  export type hsemployeesUncheckedUpdateWithoutHsusers_permissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    branch_id?: IntFieldUpdateOperationsInput | number
    winthor_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: hssessionsUncheckedUpdateManyWithoutUserNestedInput
    hsusers_roles?: hsusers_rolesUncheckedUpdateManyWithoutHeemployeesNestedInput
    hsvalidities?: hsvaliditiesUncheckedUpdateManyWithoutHsemployeesNestedInput
    analystRequests?: hsvalidity_requestsUncheckedUpdateManyWithoutAnalystNestedInput
    confereeRequests?: hsvalidity_requestsUncheckedUpdateManyWithoutConfereeNestedInput
  }

  export type hsrolesCreateWithoutHsusers_rolesInput = {
    name: string
    description: string
    created_at?: Date | string
    modified_at?: Date | string
    hspermissions_roles?: hspermissions_rolesCreateNestedManyWithoutHsrolesInput
  }

  export type hsrolesUncheckedCreateWithoutHsusers_rolesInput = {
    id?: number
    name: string
    description: string
    created_at?: Date | string
    modified_at?: Date | string
    hspermissions_roles?: hspermissions_rolesUncheckedCreateNestedManyWithoutHsrolesInput
  }

  export type hsrolesCreateOrConnectWithoutHsusers_rolesInput = {
    where: hsrolesWhereUniqueInput
    create: XOR<hsrolesCreateWithoutHsusers_rolesInput, hsrolesUncheckedCreateWithoutHsusers_rolesInput>
  }

  export type hsemployeesCreateWithoutHsusers_rolesInput = {
    winthor_id?: number
    name: string
    username: string
    password: string
    created_at?: Date | string
    modified_at?: Date | string
    branch: hsbranchesCreateNestedOneWithoutHsemployeesInput
    sessions?: hssessionsCreateNestedManyWithoutUserInput
    hsusers_permissions?: hsusers_permissionsCreateNestedManyWithoutHsemployeesInput
    hsvalidities?: hsvaliditiesCreateNestedManyWithoutHsemployeesInput
    analystRequests?: hsvalidity_requestsCreateNestedManyWithoutAnalystInput
    confereeRequests?: hsvalidity_requestsCreateNestedManyWithoutConfereeInput
  }

  export type hsemployeesUncheckedCreateWithoutHsusers_rolesInput = {
    id?: number
    branch_id: number
    winthor_id?: number
    name: string
    username: string
    password: string
    created_at?: Date | string
    modified_at?: Date | string
    sessions?: hssessionsUncheckedCreateNestedManyWithoutUserInput
    hsusers_permissions?: hsusers_permissionsUncheckedCreateNestedManyWithoutHsemployeesInput
    hsvalidities?: hsvaliditiesUncheckedCreateNestedManyWithoutHsemployeesInput
    analystRequests?: hsvalidity_requestsUncheckedCreateNestedManyWithoutAnalystInput
    confereeRequests?: hsvalidity_requestsUncheckedCreateNestedManyWithoutConfereeInput
  }

  export type hsemployeesCreateOrConnectWithoutHsusers_rolesInput = {
    where: hsemployeesWhereUniqueInput
    create: XOR<hsemployeesCreateWithoutHsusers_rolesInput, hsemployeesUncheckedCreateWithoutHsusers_rolesInput>
  }

  export type hsrolesUpsertWithoutHsusers_rolesInput = {
    update: XOR<hsrolesUpdateWithoutHsusers_rolesInput, hsrolesUncheckedUpdateWithoutHsusers_rolesInput>
    create: XOR<hsrolesCreateWithoutHsusers_rolesInput, hsrolesUncheckedCreateWithoutHsusers_rolesInput>
    where?: hsrolesWhereInput
  }

  export type hsrolesUpdateToOneWithWhereWithoutHsusers_rolesInput = {
    where?: hsrolesWhereInput
    data: XOR<hsrolesUpdateWithoutHsusers_rolesInput, hsrolesUncheckedUpdateWithoutHsusers_rolesInput>
  }

  export type hsrolesUpdateWithoutHsusers_rolesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    hspermissions_roles?: hspermissions_rolesUpdateManyWithoutHsrolesNestedInput
  }

  export type hsrolesUncheckedUpdateWithoutHsusers_rolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    hspermissions_roles?: hspermissions_rolesUncheckedUpdateManyWithoutHsrolesNestedInput
  }

  export type hsemployeesUpsertWithoutHsusers_rolesInput = {
    update: XOR<hsemployeesUpdateWithoutHsusers_rolesInput, hsemployeesUncheckedUpdateWithoutHsusers_rolesInput>
    create: XOR<hsemployeesCreateWithoutHsusers_rolesInput, hsemployeesUncheckedCreateWithoutHsusers_rolesInput>
    where?: hsemployeesWhereInput
  }

  export type hsemployeesUpdateToOneWithWhereWithoutHsusers_rolesInput = {
    where?: hsemployeesWhereInput
    data: XOR<hsemployeesUpdateWithoutHsusers_rolesInput, hsemployeesUncheckedUpdateWithoutHsusers_rolesInput>
  }

  export type hsemployeesUpdateWithoutHsusers_rolesInput = {
    winthor_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: hsbranchesUpdateOneRequiredWithoutHsemployeesNestedInput
    sessions?: hssessionsUpdateManyWithoutUserNestedInput
    hsusers_permissions?: hsusers_permissionsUpdateManyWithoutHsemployeesNestedInput
    hsvalidities?: hsvaliditiesUpdateManyWithoutHsemployeesNestedInput
    analystRequests?: hsvalidity_requestsUpdateManyWithoutAnalystNestedInput
    confereeRequests?: hsvalidity_requestsUpdateManyWithoutConfereeNestedInput
  }

  export type hsemployeesUncheckedUpdateWithoutHsusers_rolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    branch_id?: IntFieldUpdateOperationsInput | number
    winthor_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: hssessionsUncheckedUpdateManyWithoutUserNestedInput
    hsusers_permissions?: hsusers_permissionsUncheckedUpdateManyWithoutHsemployeesNestedInput
    hsvalidities?: hsvaliditiesUncheckedUpdateManyWithoutHsemployeesNestedInput
    analystRequests?: hsvalidity_requestsUncheckedUpdateManyWithoutAnalystNestedInput
    confereeRequests?: hsvalidity_requestsUncheckedUpdateManyWithoutConfereeNestedInput
  }

  export type hsemployeesCreateWithoutBranchInput = {
    winthor_id?: number
    name: string
    username: string
    password: string
    created_at?: Date | string
    modified_at?: Date | string
    sessions?: hssessionsCreateNestedManyWithoutUserInput
    hsusers_permissions?: hsusers_permissionsCreateNestedManyWithoutHsemployeesInput
    hsusers_roles?: hsusers_rolesCreateNestedManyWithoutHeemployeesInput
    hsvalidities?: hsvaliditiesCreateNestedManyWithoutHsemployeesInput
    analystRequests?: hsvalidity_requestsCreateNestedManyWithoutAnalystInput
    confereeRequests?: hsvalidity_requestsCreateNestedManyWithoutConfereeInput
  }

  export type hsemployeesUncheckedCreateWithoutBranchInput = {
    id?: number
    winthor_id?: number
    name: string
    username: string
    password: string
    created_at?: Date | string
    modified_at?: Date | string
    sessions?: hssessionsUncheckedCreateNestedManyWithoutUserInput
    hsusers_permissions?: hsusers_permissionsUncheckedCreateNestedManyWithoutHsemployeesInput
    hsusers_roles?: hsusers_rolesUncheckedCreateNestedManyWithoutHeemployeesInput
    hsvalidities?: hsvaliditiesUncheckedCreateNestedManyWithoutHsemployeesInput
    analystRequests?: hsvalidity_requestsUncheckedCreateNestedManyWithoutAnalystInput
    confereeRequests?: hsvalidity_requestsUncheckedCreateNestedManyWithoutConfereeInput
  }

  export type hsemployeesCreateOrConnectWithoutBranchInput = {
    where: hsemployeesWhereUniqueInput
    create: XOR<hsemployeesCreateWithoutBranchInput, hsemployeesUncheckedCreateWithoutBranchInput>
  }

  export type hsemployeesCreateManyBranchInputEnvelope = {
    data: hsemployeesCreateManyBranchInput | hsemployeesCreateManyBranchInput[]
    skipDuplicates?: boolean
  }

  export type hsvaliditiesCreateWithoutHsbranchesInput = {
    status?: $Enums.hsvalidities_status
    created_at?: Date | string
    modified_at?: Date | string
    hsemployees: hsemployeesCreateNestedOneWithoutHsvaliditiesInput
    hsvalidity_requests?: hsvalidity_requestsCreateNestedOneWithoutHsvaliditiesInput
    hsvalidity_products?: hsvalidity_productsCreateNestedManyWithoutHsvaliditiesInput
  }

  export type hsvaliditiesUncheckedCreateWithoutHsbranchesInput = {
    id?: number
    employee_id: number
    status?: $Enums.hsvalidities_status
    request_id?: number | null
    created_at?: Date | string
    modified_at?: Date | string
    hsvalidity_products?: hsvalidity_productsUncheckedCreateNestedManyWithoutHsvaliditiesInput
  }

  export type hsvaliditiesCreateOrConnectWithoutHsbranchesInput = {
    where: hsvaliditiesWhereUniqueInput
    create: XOR<hsvaliditiesCreateWithoutHsbranchesInput, hsvaliditiesUncheckedCreateWithoutHsbranchesInput>
  }

  export type hsvaliditiesCreateManyHsbranchesInputEnvelope = {
    data: hsvaliditiesCreateManyHsbranchesInput | hsvaliditiesCreateManyHsbranchesInput[]
    skipDuplicates?: boolean
  }

  export type hsvalidity_requestsCreateWithoutHsbranchesInput = {
    status?: $Enums.hsvalidity_requests_status
    created_at?: Date | string
    modified_at?: Date | string
    hsvalidities?: hsvaliditiesCreateNestedManyWithoutHsvalidity_requestsInput
    hsvalidity_request_products?: hsvalidity_request_productsCreateNestedManyWithoutHsvalidity_requestsInput
    analyst: hsemployeesCreateNestedOneWithoutAnalystRequestsInput
    conferee: hsemployeesCreateNestedOneWithoutConfereeRequestsInput
  }

  export type hsvalidity_requestsUncheckedCreateWithoutHsbranchesInput = {
    id?: number
    analyst_id: number
    conferee_id: number
    status?: $Enums.hsvalidity_requests_status
    created_at?: Date | string
    modified_at?: Date | string
    hsvalidities?: hsvaliditiesUncheckedCreateNestedManyWithoutHsvalidity_requestsInput
    hsvalidity_request_products?: hsvalidity_request_productsUncheckedCreateNestedManyWithoutHsvalidity_requestsInput
  }

  export type hsvalidity_requestsCreateOrConnectWithoutHsbranchesInput = {
    where: hsvalidity_requestsWhereUniqueInput
    create: XOR<hsvalidity_requestsCreateWithoutHsbranchesInput, hsvalidity_requestsUncheckedCreateWithoutHsbranchesInput>
  }

  export type hsvalidity_requestsCreateManyHsbranchesInputEnvelope = {
    data: hsvalidity_requestsCreateManyHsbranchesInput | hsvalidity_requestsCreateManyHsbranchesInput[]
    skipDuplicates?: boolean
  }

  export type hsemployeesUpsertWithWhereUniqueWithoutBranchInput = {
    where: hsemployeesWhereUniqueInput
    update: XOR<hsemployeesUpdateWithoutBranchInput, hsemployeesUncheckedUpdateWithoutBranchInput>
    create: XOR<hsemployeesCreateWithoutBranchInput, hsemployeesUncheckedCreateWithoutBranchInput>
  }

  export type hsemployeesUpdateWithWhereUniqueWithoutBranchInput = {
    where: hsemployeesWhereUniqueInput
    data: XOR<hsemployeesUpdateWithoutBranchInput, hsemployeesUncheckedUpdateWithoutBranchInput>
  }

  export type hsemployeesUpdateManyWithWhereWithoutBranchInput = {
    where: hsemployeesScalarWhereInput
    data: XOR<hsemployeesUpdateManyMutationInput, hsemployeesUncheckedUpdateManyWithoutBranchInput>
  }

  export type hsemployeesScalarWhereInput = {
    AND?: hsemployeesScalarWhereInput | hsemployeesScalarWhereInput[]
    OR?: hsemployeesScalarWhereInput[]
    NOT?: hsemployeesScalarWhereInput | hsemployeesScalarWhereInput[]
    id?: IntFilter<"hsemployees"> | number
    branch_id?: IntFilter<"hsemployees"> | number
    winthor_id?: IntFilter<"hsemployees"> | number
    name?: StringFilter<"hsemployees"> | string
    username?: StringFilter<"hsemployees"> | string
    password?: StringFilter<"hsemployees"> | string
    created_at?: DateTimeFilter<"hsemployees"> | Date | string
    modified_at?: DateTimeFilter<"hsemployees"> | Date | string
  }

  export type hsvaliditiesUpsertWithWhereUniqueWithoutHsbranchesInput = {
    where: hsvaliditiesWhereUniqueInput
    update: XOR<hsvaliditiesUpdateWithoutHsbranchesInput, hsvaliditiesUncheckedUpdateWithoutHsbranchesInput>
    create: XOR<hsvaliditiesCreateWithoutHsbranchesInput, hsvaliditiesUncheckedCreateWithoutHsbranchesInput>
  }

  export type hsvaliditiesUpdateWithWhereUniqueWithoutHsbranchesInput = {
    where: hsvaliditiesWhereUniqueInput
    data: XOR<hsvaliditiesUpdateWithoutHsbranchesInput, hsvaliditiesUncheckedUpdateWithoutHsbranchesInput>
  }

  export type hsvaliditiesUpdateManyWithWhereWithoutHsbranchesInput = {
    where: hsvaliditiesScalarWhereInput
    data: XOR<hsvaliditiesUpdateManyMutationInput, hsvaliditiesUncheckedUpdateManyWithoutHsbranchesInput>
  }

  export type hsvalidity_requestsUpsertWithWhereUniqueWithoutHsbranchesInput = {
    where: hsvalidity_requestsWhereUniqueInput
    update: XOR<hsvalidity_requestsUpdateWithoutHsbranchesInput, hsvalidity_requestsUncheckedUpdateWithoutHsbranchesInput>
    create: XOR<hsvalidity_requestsCreateWithoutHsbranchesInput, hsvalidity_requestsUncheckedCreateWithoutHsbranchesInput>
  }

  export type hsvalidity_requestsUpdateWithWhereUniqueWithoutHsbranchesInput = {
    where: hsvalidity_requestsWhereUniqueInput
    data: XOR<hsvalidity_requestsUpdateWithoutHsbranchesInput, hsvalidity_requestsUncheckedUpdateWithoutHsbranchesInput>
  }

  export type hsvalidity_requestsUpdateManyWithWhereWithoutHsbranchesInput = {
    where: hsvalidity_requestsScalarWhereInput
    data: XOR<hsvalidity_requestsUpdateManyMutationInput, hsvalidity_requestsUncheckedUpdateManyWithoutHsbranchesInput>
  }

  export type hsbranchesCreateWithoutHsvaliditiesInput = {
    description: string
    hsemployees?: hsemployeesCreateNestedManyWithoutBranchInput
    hsvalidity_requests?: hsvalidity_requestsCreateNestedManyWithoutHsbranchesInput
  }

  export type hsbranchesUncheckedCreateWithoutHsvaliditiesInput = {
    id?: number
    description: string
    hsemployees?: hsemployeesUncheckedCreateNestedManyWithoutBranchInput
    hsvalidity_requests?: hsvalidity_requestsUncheckedCreateNestedManyWithoutHsbranchesInput
  }

  export type hsbranchesCreateOrConnectWithoutHsvaliditiesInput = {
    where: hsbranchesWhereUniqueInput
    create: XOR<hsbranchesCreateWithoutHsvaliditiesInput, hsbranchesUncheckedCreateWithoutHsvaliditiesInput>
  }

  export type hsemployeesCreateWithoutHsvaliditiesInput = {
    winthor_id?: number
    name: string
    username: string
    password: string
    created_at?: Date | string
    modified_at?: Date | string
    branch: hsbranchesCreateNestedOneWithoutHsemployeesInput
    sessions?: hssessionsCreateNestedManyWithoutUserInput
    hsusers_permissions?: hsusers_permissionsCreateNestedManyWithoutHsemployeesInput
    hsusers_roles?: hsusers_rolesCreateNestedManyWithoutHeemployeesInput
    analystRequests?: hsvalidity_requestsCreateNestedManyWithoutAnalystInput
    confereeRequests?: hsvalidity_requestsCreateNestedManyWithoutConfereeInput
  }

  export type hsemployeesUncheckedCreateWithoutHsvaliditiesInput = {
    id?: number
    branch_id: number
    winthor_id?: number
    name: string
    username: string
    password: string
    created_at?: Date | string
    modified_at?: Date | string
    sessions?: hssessionsUncheckedCreateNestedManyWithoutUserInput
    hsusers_permissions?: hsusers_permissionsUncheckedCreateNestedManyWithoutHsemployeesInput
    hsusers_roles?: hsusers_rolesUncheckedCreateNestedManyWithoutHeemployeesInput
    analystRequests?: hsvalidity_requestsUncheckedCreateNestedManyWithoutAnalystInput
    confereeRequests?: hsvalidity_requestsUncheckedCreateNestedManyWithoutConfereeInput
  }

  export type hsemployeesCreateOrConnectWithoutHsvaliditiesInput = {
    where: hsemployeesWhereUniqueInput
    create: XOR<hsemployeesCreateWithoutHsvaliditiesInput, hsemployeesUncheckedCreateWithoutHsvaliditiesInput>
  }

  export type hsvalidity_requestsCreateWithoutHsvaliditiesInput = {
    status?: $Enums.hsvalidity_requests_status
    created_at?: Date | string
    modified_at?: Date | string
    hsvalidity_request_products?: hsvalidity_request_productsCreateNestedManyWithoutHsvalidity_requestsInput
    analyst: hsemployeesCreateNestedOneWithoutAnalystRequestsInput
    hsbranches: hsbranchesCreateNestedOneWithoutHsvalidity_requestsInput
    conferee: hsemployeesCreateNestedOneWithoutConfereeRequestsInput
  }

  export type hsvalidity_requestsUncheckedCreateWithoutHsvaliditiesInput = {
    id?: number
    branch_id: number
    analyst_id: number
    conferee_id: number
    status?: $Enums.hsvalidity_requests_status
    created_at?: Date | string
    modified_at?: Date | string
    hsvalidity_request_products?: hsvalidity_request_productsUncheckedCreateNestedManyWithoutHsvalidity_requestsInput
  }

  export type hsvalidity_requestsCreateOrConnectWithoutHsvaliditiesInput = {
    where: hsvalidity_requestsWhereUniqueInput
    create: XOR<hsvalidity_requestsCreateWithoutHsvaliditiesInput, hsvalidity_requestsUncheckedCreateWithoutHsvaliditiesInput>
  }

  export type hsvalidity_productsCreateWithoutHsvaliditiesInput = {
    product_cod: number
    quantity: number
    validity_date: Date | string
    auxiliary_code: string
    hsvalidity_treatments?: hsvalidity_treatmentsCreateNestedOneWithoutHsvalidity_productsInput
  }

  export type hsvalidity_productsUncheckedCreateWithoutHsvaliditiesInput = {
    id?: number
    product_cod: number
    quantity: number
    validity_date: Date | string
    treat_id?: number
    auxiliary_code: string
  }

  export type hsvalidity_productsCreateOrConnectWithoutHsvaliditiesInput = {
    where: hsvalidity_productsWhereUniqueInput
    create: XOR<hsvalidity_productsCreateWithoutHsvaliditiesInput, hsvalidity_productsUncheckedCreateWithoutHsvaliditiesInput>
  }

  export type hsvalidity_productsCreateManyHsvaliditiesInputEnvelope = {
    data: hsvalidity_productsCreateManyHsvaliditiesInput | hsvalidity_productsCreateManyHsvaliditiesInput[]
    skipDuplicates?: boolean
  }

  export type hsbranchesUpsertWithoutHsvaliditiesInput = {
    update: XOR<hsbranchesUpdateWithoutHsvaliditiesInput, hsbranchesUncheckedUpdateWithoutHsvaliditiesInput>
    create: XOR<hsbranchesCreateWithoutHsvaliditiesInput, hsbranchesUncheckedCreateWithoutHsvaliditiesInput>
    where?: hsbranchesWhereInput
  }

  export type hsbranchesUpdateToOneWithWhereWithoutHsvaliditiesInput = {
    where?: hsbranchesWhereInput
    data: XOR<hsbranchesUpdateWithoutHsvaliditiesInput, hsbranchesUncheckedUpdateWithoutHsvaliditiesInput>
  }

  export type hsbranchesUpdateWithoutHsvaliditiesInput = {
    description?: StringFieldUpdateOperationsInput | string
    hsemployees?: hsemployeesUpdateManyWithoutBranchNestedInput
    hsvalidity_requests?: hsvalidity_requestsUpdateManyWithoutHsbranchesNestedInput
  }

  export type hsbranchesUncheckedUpdateWithoutHsvaliditiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    hsemployees?: hsemployeesUncheckedUpdateManyWithoutBranchNestedInput
    hsvalidity_requests?: hsvalidity_requestsUncheckedUpdateManyWithoutHsbranchesNestedInput
  }

  export type hsemployeesUpsertWithoutHsvaliditiesInput = {
    update: XOR<hsemployeesUpdateWithoutHsvaliditiesInput, hsemployeesUncheckedUpdateWithoutHsvaliditiesInput>
    create: XOR<hsemployeesCreateWithoutHsvaliditiesInput, hsemployeesUncheckedCreateWithoutHsvaliditiesInput>
    where?: hsemployeesWhereInput
  }

  export type hsemployeesUpdateToOneWithWhereWithoutHsvaliditiesInput = {
    where?: hsemployeesWhereInput
    data: XOR<hsemployeesUpdateWithoutHsvaliditiesInput, hsemployeesUncheckedUpdateWithoutHsvaliditiesInput>
  }

  export type hsemployeesUpdateWithoutHsvaliditiesInput = {
    winthor_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: hsbranchesUpdateOneRequiredWithoutHsemployeesNestedInput
    sessions?: hssessionsUpdateManyWithoutUserNestedInput
    hsusers_permissions?: hsusers_permissionsUpdateManyWithoutHsemployeesNestedInput
    hsusers_roles?: hsusers_rolesUpdateManyWithoutHeemployeesNestedInput
    analystRequests?: hsvalidity_requestsUpdateManyWithoutAnalystNestedInput
    confereeRequests?: hsvalidity_requestsUpdateManyWithoutConfereeNestedInput
  }

  export type hsemployeesUncheckedUpdateWithoutHsvaliditiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    branch_id?: IntFieldUpdateOperationsInput | number
    winthor_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: hssessionsUncheckedUpdateManyWithoutUserNestedInput
    hsusers_permissions?: hsusers_permissionsUncheckedUpdateManyWithoutHsemployeesNestedInput
    hsusers_roles?: hsusers_rolesUncheckedUpdateManyWithoutHeemployeesNestedInput
    analystRequests?: hsvalidity_requestsUncheckedUpdateManyWithoutAnalystNestedInput
    confereeRequests?: hsvalidity_requestsUncheckedUpdateManyWithoutConfereeNestedInput
  }

  export type hsvalidity_requestsUpsertWithoutHsvaliditiesInput = {
    update: XOR<hsvalidity_requestsUpdateWithoutHsvaliditiesInput, hsvalidity_requestsUncheckedUpdateWithoutHsvaliditiesInput>
    create: XOR<hsvalidity_requestsCreateWithoutHsvaliditiesInput, hsvalidity_requestsUncheckedCreateWithoutHsvaliditiesInput>
    where?: hsvalidity_requestsWhereInput
  }

  export type hsvalidity_requestsUpdateToOneWithWhereWithoutHsvaliditiesInput = {
    where?: hsvalidity_requestsWhereInput
    data: XOR<hsvalidity_requestsUpdateWithoutHsvaliditiesInput, hsvalidity_requestsUncheckedUpdateWithoutHsvaliditiesInput>
  }

  export type hsvalidity_requestsUpdateWithoutHsvaliditiesInput = {
    status?: Enumhsvalidity_requests_statusFieldUpdateOperationsInput | $Enums.hsvalidity_requests_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    hsvalidity_request_products?: hsvalidity_request_productsUpdateManyWithoutHsvalidity_requestsNestedInput
    analyst?: hsemployeesUpdateOneRequiredWithoutAnalystRequestsNestedInput
    hsbranches?: hsbranchesUpdateOneRequiredWithoutHsvalidity_requestsNestedInput
    conferee?: hsemployeesUpdateOneRequiredWithoutConfereeRequestsNestedInput
  }

  export type hsvalidity_requestsUncheckedUpdateWithoutHsvaliditiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    branch_id?: IntFieldUpdateOperationsInput | number
    analyst_id?: IntFieldUpdateOperationsInput | number
    conferee_id?: IntFieldUpdateOperationsInput | number
    status?: Enumhsvalidity_requests_statusFieldUpdateOperationsInput | $Enums.hsvalidity_requests_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    hsvalidity_request_products?: hsvalidity_request_productsUncheckedUpdateManyWithoutHsvalidity_requestsNestedInput
  }

  export type hsvalidity_productsUpsertWithWhereUniqueWithoutHsvaliditiesInput = {
    where: hsvalidity_productsWhereUniqueInput
    update: XOR<hsvalidity_productsUpdateWithoutHsvaliditiesInput, hsvalidity_productsUncheckedUpdateWithoutHsvaliditiesInput>
    create: XOR<hsvalidity_productsCreateWithoutHsvaliditiesInput, hsvalidity_productsUncheckedCreateWithoutHsvaliditiesInput>
  }

  export type hsvalidity_productsUpdateWithWhereUniqueWithoutHsvaliditiesInput = {
    where: hsvalidity_productsWhereUniqueInput
    data: XOR<hsvalidity_productsUpdateWithoutHsvaliditiesInput, hsvalidity_productsUncheckedUpdateWithoutHsvaliditiesInput>
  }

  export type hsvalidity_productsUpdateManyWithWhereWithoutHsvaliditiesInput = {
    where: hsvalidity_productsScalarWhereInput
    data: XOR<hsvalidity_productsUpdateManyMutationInput, hsvalidity_productsUncheckedUpdateManyWithoutHsvaliditiesInput>
  }

  export type hsvalidity_productsScalarWhereInput = {
    AND?: hsvalidity_productsScalarWhereInput | hsvalidity_productsScalarWhereInput[]
    OR?: hsvalidity_productsScalarWhereInput[]
    NOT?: hsvalidity_productsScalarWhereInput | hsvalidity_productsScalarWhereInput[]
    id?: IntFilter<"hsvalidity_products"> | number
    validity_id?: IntFilter<"hsvalidity_products"> | number
    product_cod?: IntFilter<"hsvalidity_products"> | number
    quantity?: IntFilter<"hsvalidity_products"> | number
    validity_date?: DateTimeFilter<"hsvalidity_products"> | Date | string
    treat_id?: IntFilter<"hsvalidity_products"> | number
    auxiliary_code?: StringFilter<"hsvalidity_products"> | string
  }

  export type hsvalidity_treatmentsCreateWithoutHsvalidity_productsInput = {
    description: string
  }

  export type hsvalidity_treatmentsUncheckedCreateWithoutHsvalidity_productsInput = {
    id?: number
    description: string
  }

  export type hsvalidity_treatmentsCreateOrConnectWithoutHsvalidity_productsInput = {
    where: hsvalidity_treatmentsWhereUniqueInput
    create: XOR<hsvalidity_treatmentsCreateWithoutHsvalidity_productsInput, hsvalidity_treatmentsUncheckedCreateWithoutHsvalidity_productsInput>
  }

  export type hsvaliditiesCreateWithoutHsvalidity_productsInput = {
    status?: $Enums.hsvalidities_status
    created_at?: Date | string
    modified_at?: Date | string
    hsbranches: hsbranchesCreateNestedOneWithoutHsvaliditiesInput
    hsemployees: hsemployeesCreateNestedOneWithoutHsvaliditiesInput
    hsvalidity_requests?: hsvalidity_requestsCreateNestedOneWithoutHsvaliditiesInput
  }

  export type hsvaliditiesUncheckedCreateWithoutHsvalidity_productsInput = {
    id?: number
    branch_id: number
    employee_id: number
    status?: $Enums.hsvalidities_status
    request_id?: number | null
    created_at?: Date | string
    modified_at?: Date | string
  }

  export type hsvaliditiesCreateOrConnectWithoutHsvalidity_productsInput = {
    where: hsvaliditiesWhereUniqueInput
    create: XOR<hsvaliditiesCreateWithoutHsvalidity_productsInput, hsvaliditiesUncheckedCreateWithoutHsvalidity_productsInput>
  }

  export type hsvalidity_treatmentsUpsertWithoutHsvalidity_productsInput = {
    update: XOR<hsvalidity_treatmentsUpdateWithoutHsvalidity_productsInput, hsvalidity_treatmentsUncheckedUpdateWithoutHsvalidity_productsInput>
    create: XOR<hsvalidity_treatmentsCreateWithoutHsvalidity_productsInput, hsvalidity_treatmentsUncheckedCreateWithoutHsvalidity_productsInput>
    where?: hsvalidity_treatmentsWhereInput
  }

  export type hsvalidity_treatmentsUpdateToOneWithWhereWithoutHsvalidity_productsInput = {
    where?: hsvalidity_treatmentsWhereInput
    data: XOR<hsvalidity_treatmentsUpdateWithoutHsvalidity_productsInput, hsvalidity_treatmentsUncheckedUpdateWithoutHsvalidity_productsInput>
  }

  export type hsvalidity_treatmentsUpdateWithoutHsvalidity_productsInput = {
    description?: StringFieldUpdateOperationsInput | string
  }

  export type hsvalidity_treatmentsUncheckedUpdateWithoutHsvalidity_productsInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type hsvaliditiesUpsertWithoutHsvalidity_productsInput = {
    update: XOR<hsvaliditiesUpdateWithoutHsvalidity_productsInput, hsvaliditiesUncheckedUpdateWithoutHsvalidity_productsInput>
    create: XOR<hsvaliditiesCreateWithoutHsvalidity_productsInput, hsvaliditiesUncheckedCreateWithoutHsvalidity_productsInput>
    where?: hsvaliditiesWhereInput
  }

  export type hsvaliditiesUpdateToOneWithWhereWithoutHsvalidity_productsInput = {
    where?: hsvaliditiesWhereInput
    data: XOR<hsvaliditiesUpdateWithoutHsvalidity_productsInput, hsvaliditiesUncheckedUpdateWithoutHsvalidity_productsInput>
  }

  export type hsvaliditiesUpdateWithoutHsvalidity_productsInput = {
    status?: Enumhsvalidities_statusFieldUpdateOperationsInput | $Enums.hsvalidities_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    hsbranches?: hsbranchesUpdateOneRequiredWithoutHsvaliditiesNestedInput
    hsemployees?: hsemployeesUpdateOneRequiredWithoutHsvaliditiesNestedInput
    hsvalidity_requests?: hsvalidity_requestsUpdateOneWithoutHsvaliditiesNestedInput
  }

  export type hsvaliditiesUncheckedUpdateWithoutHsvalidity_productsInput = {
    id?: IntFieldUpdateOperationsInput | number
    branch_id?: IntFieldUpdateOperationsInput | number
    employee_id?: IntFieldUpdateOperationsInput | number
    status?: Enumhsvalidities_statusFieldUpdateOperationsInput | $Enums.hsvalidities_status
    request_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type hsvaliditiesCreateWithoutHsvalidity_requestsInput = {
    status?: $Enums.hsvalidities_status
    created_at?: Date | string
    modified_at?: Date | string
    hsbranches: hsbranchesCreateNestedOneWithoutHsvaliditiesInput
    hsemployees: hsemployeesCreateNestedOneWithoutHsvaliditiesInput
    hsvalidity_products?: hsvalidity_productsCreateNestedManyWithoutHsvaliditiesInput
  }

  export type hsvaliditiesUncheckedCreateWithoutHsvalidity_requestsInput = {
    id?: number
    branch_id: number
    employee_id: number
    status?: $Enums.hsvalidities_status
    created_at?: Date | string
    modified_at?: Date | string
    hsvalidity_products?: hsvalidity_productsUncheckedCreateNestedManyWithoutHsvaliditiesInput
  }

  export type hsvaliditiesCreateOrConnectWithoutHsvalidity_requestsInput = {
    where: hsvaliditiesWhereUniqueInput
    create: XOR<hsvaliditiesCreateWithoutHsvalidity_requestsInput, hsvaliditiesUncheckedCreateWithoutHsvalidity_requestsInput>
  }

  export type hsvaliditiesCreateManyHsvalidity_requestsInputEnvelope = {
    data: hsvaliditiesCreateManyHsvalidity_requestsInput | hsvaliditiesCreateManyHsvalidity_requestsInput[]
    skipDuplicates?: boolean
  }

  export type hsvalidity_request_productsCreateWithoutHsvalidity_requestsInput = {
    status?: $Enums.hsvalidity_request_products_status
    product_cod: number
    validity_date: Date | string
    auxiliary_code: string
  }

  export type hsvalidity_request_productsUncheckedCreateWithoutHsvalidity_requestsInput = {
    id?: number
    status?: $Enums.hsvalidity_request_products_status
    product_cod: number
    validity_date: Date | string
    auxiliary_code: string
  }

  export type hsvalidity_request_productsCreateOrConnectWithoutHsvalidity_requestsInput = {
    where: hsvalidity_request_productsWhereUniqueInput
    create: XOR<hsvalidity_request_productsCreateWithoutHsvalidity_requestsInput, hsvalidity_request_productsUncheckedCreateWithoutHsvalidity_requestsInput>
  }

  export type hsvalidity_request_productsCreateManyHsvalidity_requestsInputEnvelope = {
    data: hsvalidity_request_productsCreateManyHsvalidity_requestsInput | hsvalidity_request_productsCreateManyHsvalidity_requestsInput[]
    skipDuplicates?: boolean
  }

  export type hsemployeesCreateWithoutAnalystRequestsInput = {
    winthor_id?: number
    name: string
    username: string
    password: string
    created_at?: Date | string
    modified_at?: Date | string
    branch: hsbranchesCreateNestedOneWithoutHsemployeesInput
    sessions?: hssessionsCreateNestedManyWithoutUserInput
    hsusers_permissions?: hsusers_permissionsCreateNestedManyWithoutHsemployeesInput
    hsusers_roles?: hsusers_rolesCreateNestedManyWithoutHeemployeesInput
    hsvalidities?: hsvaliditiesCreateNestedManyWithoutHsemployeesInput
    confereeRequests?: hsvalidity_requestsCreateNestedManyWithoutConfereeInput
  }

  export type hsemployeesUncheckedCreateWithoutAnalystRequestsInput = {
    id?: number
    branch_id: number
    winthor_id?: number
    name: string
    username: string
    password: string
    created_at?: Date | string
    modified_at?: Date | string
    sessions?: hssessionsUncheckedCreateNestedManyWithoutUserInput
    hsusers_permissions?: hsusers_permissionsUncheckedCreateNestedManyWithoutHsemployeesInput
    hsusers_roles?: hsusers_rolesUncheckedCreateNestedManyWithoutHeemployeesInput
    hsvalidities?: hsvaliditiesUncheckedCreateNestedManyWithoutHsemployeesInput
    confereeRequests?: hsvalidity_requestsUncheckedCreateNestedManyWithoutConfereeInput
  }

  export type hsemployeesCreateOrConnectWithoutAnalystRequestsInput = {
    where: hsemployeesWhereUniqueInput
    create: XOR<hsemployeesCreateWithoutAnalystRequestsInput, hsemployeesUncheckedCreateWithoutAnalystRequestsInput>
  }

  export type hsbranchesCreateWithoutHsvalidity_requestsInput = {
    description: string
    hsemployees?: hsemployeesCreateNestedManyWithoutBranchInput
    hsvalidities?: hsvaliditiesCreateNestedManyWithoutHsbranchesInput
  }

  export type hsbranchesUncheckedCreateWithoutHsvalidity_requestsInput = {
    id?: number
    description: string
    hsemployees?: hsemployeesUncheckedCreateNestedManyWithoutBranchInput
    hsvalidities?: hsvaliditiesUncheckedCreateNestedManyWithoutHsbranchesInput
  }

  export type hsbranchesCreateOrConnectWithoutHsvalidity_requestsInput = {
    where: hsbranchesWhereUniqueInput
    create: XOR<hsbranchesCreateWithoutHsvalidity_requestsInput, hsbranchesUncheckedCreateWithoutHsvalidity_requestsInput>
  }

  export type hsemployeesCreateWithoutConfereeRequestsInput = {
    winthor_id?: number
    name: string
    username: string
    password: string
    created_at?: Date | string
    modified_at?: Date | string
    branch: hsbranchesCreateNestedOneWithoutHsemployeesInput
    sessions?: hssessionsCreateNestedManyWithoutUserInput
    hsusers_permissions?: hsusers_permissionsCreateNestedManyWithoutHsemployeesInput
    hsusers_roles?: hsusers_rolesCreateNestedManyWithoutHeemployeesInput
    hsvalidities?: hsvaliditiesCreateNestedManyWithoutHsemployeesInput
    analystRequests?: hsvalidity_requestsCreateNestedManyWithoutAnalystInput
  }

  export type hsemployeesUncheckedCreateWithoutConfereeRequestsInput = {
    id?: number
    branch_id: number
    winthor_id?: number
    name: string
    username: string
    password: string
    created_at?: Date | string
    modified_at?: Date | string
    sessions?: hssessionsUncheckedCreateNestedManyWithoutUserInput
    hsusers_permissions?: hsusers_permissionsUncheckedCreateNestedManyWithoutHsemployeesInput
    hsusers_roles?: hsusers_rolesUncheckedCreateNestedManyWithoutHeemployeesInput
    hsvalidities?: hsvaliditiesUncheckedCreateNestedManyWithoutHsemployeesInput
    analystRequests?: hsvalidity_requestsUncheckedCreateNestedManyWithoutAnalystInput
  }

  export type hsemployeesCreateOrConnectWithoutConfereeRequestsInput = {
    where: hsemployeesWhereUniqueInput
    create: XOR<hsemployeesCreateWithoutConfereeRequestsInput, hsemployeesUncheckedCreateWithoutConfereeRequestsInput>
  }

  export type hsvaliditiesUpsertWithWhereUniqueWithoutHsvalidity_requestsInput = {
    where: hsvaliditiesWhereUniqueInput
    update: XOR<hsvaliditiesUpdateWithoutHsvalidity_requestsInput, hsvaliditiesUncheckedUpdateWithoutHsvalidity_requestsInput>
    create: XOR<hsvaliditiesCreateWithoutHsvalidity_requestsInput, hsvaliditiesUncheckedCreateWithoutHsvalidity_requestsInput>
  }

  export type hsvaliditiesUpdateWithWhereUniqueWithoutHsvalidity_requestsInput = {
    where: hsvaliditiesWhereUniqueInput
    data: XOR<hsvaliditiesUpdateWithoutHsvalidity_requestsInput, hsvaliditiesUncheckedUpdateWithoutHsvalidity_requestsInput>
  }

  export type hsvaliditiesUpdateManyWithWhereWithoutHsvalidity_requestsInput = {
    where: hsvaliditiesScalarWhereInput
    data: XOR<hsvaliditiesUpdateManyMutationInput, hsvaliditiesUncheckedUpdateManyWithoutHsvalidity_requestsInput>
  }

  export type hsvalidity_request_productsUpsertWithWhereUniqueWithoutHsvalidity_requestsInput = {
    where: hsvalidity_request_productsWhereUniqueInput
    update: XOR<hsvalidity_request_productsUpdateWithoutHsvalidity_requestsInput, hsvalidity_request_productsUncheckedUpdateWithoutHsvalidity_requestsInput>
    create: XOR<hsvalidity_request_productsCreateWithoutHsvalidity_requestsInput, hsvalidity_request_productsUncheckedCreateWithoutHsvalidity_requestsInput>
  }

  export type hsvalidity_request_productsUpdateWithWhereUniqueWithoutHsvalidity_requestsInput = {
    where: hsvalidity_request_productsWhereUniqueInput
    data: XOR<hsvalidity_request_productsUpdateWithoutHsvalidity_requestsInput, hsvalidity_request_productsUncheckedUpdateWithoutHsvalidity_requestsInput>
  }

  export type hsvalidity_request_productsUpdateManyWithWhereWithoutHsvalidity_requestsInput = {
    where: hsvalidity_request_productsScalarWhereInput
    data: XOR<hsvalidity_request_productsUpdateManyMutationInput, hsvalidity_request_productsUncheckedUpdateManyWithoutHsvalidity_requestsInput>
  }

  export type hsvalidity_request_productsScalarWhereInput = {
    AND?: hsvalidity_request_productsScalarWhereInput | hsvalidity_request_productsScalarWhereInput[]
    OR?: hsvalidity_request_productsScalarWhereInput[]
    NOT?: hsvalidity_request_productsScalarWhereInput | hsvalidity_request_productsScalarWhereInput[]
    id?: IntFilter<"hsvalidity_request_products"> | number
    request_id?: IntFilter<"hsvalidity_request_products"> | number
    status?: Enumhsvalidity_request_products_statusFilter<"hsvalidity_request_products"> | $Enums.hsvalidity_request_products_status
    product_cod?: IntFilter<"hsvalidity_request_products"> | number
    validity_date?: DateTimeFilter<"hsvalidity_request_products"> | Date | string
    auxiliary_code?: StringFilter<"hsvalidity_request_products"> | string
  }

  export type hsemployeesUpsertWithoutAnalystRequestsInput = {
    update: XOR<hsemployeesUpdateWithoutAnalystRequestsInput, hsemployeesUncheckedUpdateWithoutAnalystRequestsInput>
    create: XOR<hsemployeesCreateWithoutAnalystRequestsInput, hsemployeesUncheckedCreateWithoutAnalystRequestsInput>
    where?: hsemployeesWhereInput
  }

  export type hsemployeesUpdateToOneWithWhereWithoutAnalystRequestsInput = {
    where?: hsemployeesWhereInput
    data: XOR<hsemployeesUpdateWithoutAnalystRequestsInput, hsemployeesUncheckedUpdateWithoutAnalystRequestsInput>
  }

  export type hsemployeesUpdateWithoutAnalystRequestsInput = {
    winthor_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: hsbranchesUpdateOneRequiredWithoutHsemployeesNestedInput
    sessions?: hssessionsUpdateManyWithoutUserNestedInput
    hsusers_permissions?: hsusers_permissionsUpdateManyWithoutHsemployeesNestedInput
    hsusers_roles?: hsusers_rolesUpdateManyWithoutHeemployeesNestedInput
    hsvalidities?: hsvaliditiesUpdateManyWithoutHsemployeesNestedInput
    confereeRequests?: hsvalidity_requestsUpdateManyWithoutConfereeNestedInput
  }

  export type hsemployeesUncheckedUpdateWithoutAnalystRequestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    branch_id?: IntFieldUpdateOperationsInput | number
    winthor_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: hssessionsUncheckedUpdateManyWithoutUserNestedInput
    hsusers_permissions?: hsusers_permissionsUncheckedUpdateManyWithoutHsemployeesNestedInput
    hsusers_roles?: hsusers_rolesUncheckedUpdateManyWithoutHeemployeesNestedInput
    hsvalidities?: hsvaliditiesUncheckedUpdateManyWithoutHsemployeesNestedInput
    confereeRequests?: hsvalidity_requestsUncheckedUpdateManyWithoutConfereeNestedInput
  }

  export type hsbranchesUpsertWithoutHsvalidity_requestsInput = {
    update: XOR<hsbranchesUpdateWithoutHsvalidity_requestsInput, hsbranchesUncheckedUpdateWithoutHsvalidity_requestsInput>
    create: XOR<hsbranchesCreateWithoutHsvalidity_requestsInput, hsbranchesUncheckedCreateWithoutHsvalidity_requestsInput>
    where?: hsbranchesWhereInput
  }

  export type hsbranchesUpdateToOneWithWhereWithoutHsvalidity_requestsInput = {
    where?: hsbranchesWhereInput
    data: XOR<hsbranchesUpdateWithoutHsvalidity_requestsInput, hsbranchesUncheckedUpdateWithoutHsvalidity_requestsInput>
  }

  export type hsbranchesUpdateWithoutHsvalidity_requestsInput = {
    description?: StringFieldUpdateOperationsInput | string
    hsemployees?: hsemployeesUpdateManyWithoutBranchNestedInput
    hsvalidities?: hsvaliditiesUpdateManyWithoutHsbranchesNestedInput
  }

  export type hsbranchesUncheckedUpdateWithoutHsvalidity_requestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    hsemployees?: hsemployeesUncheckedUpdateManyWithoutBranchNestedInput
    hsvalidities?: hsvaliditiesUncheckedUpdateManyWithoutHsbranchesNestedInput
  }

  export type hsemployeesUpsertWithoutConfereeRequestsInput = {
    update: XOR<hsemployeesUpdateWithoutConfereeRequestsInput, hsemployeesUncheckedUpdateWithoutConfereeRequestsInput>
    create: XOR<hsemployeesCreateWithoutConfereeRequestsInput, hsemployeesUncheckedCreateWithoutConfereeRequestsInput>
    where?: hsemployeesWhereInput
  }

  export type hsemployeesUpdateToOneWithWhereWithoutConfereeRequestsInput = {
    where?: hsemployeesWhereInput
    data: XOR<hsemployeesUpdateWithoutConfereeRequestsInput, hsemployeesUncheckedUpdateWithoutConfereeRequestsInput>
  }

  export type hsemployeesUpdateWithoutConfereeRequestsInput = {
    winthor_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: hsbranchesUpdateOneRequiredWithoutHsemployeesNestedInput
    sessions?: hssessionsUpdateManyWithoutUserNestedInput
    hsusers_permissions?: hsusers_permissionsUpdateManyWithoutHsemployeesNestedInput
    hsusers_roles?: hsusers_rolesUpdateManyWithoutHeemployeesNestedInput
    hsvalidities?: hsvaliditiesUpdateManyWithoutHsemployeesNestedInput
    analystRequests?: hsvalidity_requestsUpdateManyWithoutAnalystNestedInput
  }

  export type hsemployeesUncheckedUpdateWithoutConfereeRequestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    branch_id?: IntFieldUpdateOperationsInput | number
    winthor_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: hssessionsUncheckedUpdateManyWithoutUserNestedInput
    hsusers_permissions?: hsusers_permissionsUncheckedUpdateManyWithoutHsemployeesNestedInput
    hsusers_roles?: hsusers_rolesUncheckedUpdateManyWithoutHeemployeesNestedInput
    hsvalidities?: hsvaliditiesUncheckedUpdateManyWithoutHsemployeesNestedInput
    analystRequests?: hsvalidity_requestsUncheckedUpdateManyWithoutAnalystNestedInput
  }

  export type hsvalidity_requestsCreateWithoutHsvalidity_request_productsInput = {
    status?: $Enums.hsvalidity_requests_status
    created_at?: Date | string
    modified_at?: Date | string
    hsvalidities?: hsvaliditiesCreateNestedManyWithoutHsvalidity_requestsInput
    analyst: hsemployeesCreateNestedOneWithoutAnalystRequestsInput
    hsbranches: hsbranchesCreateNestedOneWithoutHsvalidity_requestsInput
    conferee: hsemployeesCreateNestedOneWithoutConfereeRequestsInput
  }

  export type hsvalidity_requestsUncheckedCreateWithoutHsvalidity_request_productsInput = {
    id?: number
    branch_id: number
    analyst_id: number
    conferee_id: number
    status?: $Enums.hsvalidity_requests_status
    created_at?: Date | string
    modified_at?: Date | string
    hsvalidities?: hsvaliditiesUncheckedCreateNestedManyWithoutHsvalidity_requestsInput
  }

  export type hsvalidity_requestsCreateOrConnectWithoutHsvalidity_request_productsInput = {
    where: hsvalidity_requestsWhereUniqueInput
    create: XOR<hsvalidity_requestsCreateWithoutHsvalidity_request_productsInput, hsvalidity_requestsUncheckedCreateWithoutHsvalidity_request_productsInput>
  }

  export type hsvalidity_requestsUpsertWithoutHsvalidity_request_productsInput = {
    update: XOR<hsvalidity_requestsUpdateWithoutHsvalidity_request_productsInput, hsvalidity_requestsUncheckedUpdateWithoutHsvalidity_request_productsInput>
    create: XOR<hsvalidity_requestsCreateWithoutHsvalidity_request_productsInput, hsvalidity_requestsUncheckedCreateWithoutHsvalidity_request_productsInput>
    where?: hsvalidity_requestsWhereInput
  }

  export type hsvalidity_requestsUpdateToOneWithWhereWithoutHsvalidity_request_productsInput = {
    where?: hsvalidity_requestsWhereInput
    data: XOR<hsvalidity_requestsUpdateWithoutHsvalidity_request_productsInput, hsvalidity_requestsUncheckedUpdateWithoutHsvalidity_request_productsInput>
  }

  export type hsvalidity_requestsUpdateWithoutHsvalidity_request_productsInput = {
    status?: Enumhsvalidity_requests_statusFieldUpdateOperationsInput | $Enums.hsvalidity_requests_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    hsvalidities?: hsvaliditiesUpdateManyWithoutHsvalidity_requestsNestedInput
    analyst?: hsemployeesUpdateOneRequiredWithoutAnalystRequestsNestedInput
    hsbranches?: hsbranchesUpdateOneRequiredWithoutHsvalidity_requestsNestedInput
    conferee?: hsemployeesUpdateOneRequiredWithoutConfereeRequestsNestedInput
  }

  export type hsvalidity_requestsUncheckedUpdateWithoutHsvalidity_request_productsInput = {
    id?: IntFieldUpdateOperationsInput | number
    branch_id?: IntFieldUpdateOperationsInput | number
    analyst_id?: IntFieldUpdateOperationsInput | number
    conferee_id?: IntFieldUpdateOperationsInput | number
    status?: Enumhsvalidity_requests_statusFieldUpdateOperationsInput | $Enums.hsvalidity_requests_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    hsvalidities?: hsvaliditiesUncheckedUpdateManyWithoutHsvalidity_requestsNestedInput
  }

  export type hsvalidity_productsCreateWithoutHsvalidity_treatmentsInput = {
    product_cod: number
    quantity: number
    validity_date: Date | string
    auxiliary_code: string
    hsvalidities: hsvaliditiesCreateNestedOneWithoutHsvalidity_productsInput
  }

  export type hsvalidity_productsUncheckedCreateWithoutHsvalidity_treatmentsInput = {
    id?: number
    validity_id: number
    product_cod: number
    quantity: number
    validity_date: Date | string
    auxiliary_code: string
  }

  export type hsvalidity_productsCreateOrConnectWithoutHsvalidity_treatmentsInput = {
    where: hsvalidity_productsWhereUniqueInput
    create: XOR<hsvalidity_productsCreateWithoutHsvalidity_treatmentsInput, hsvalidity_productsUncheckedCreateWithoutHsvalidity_treatmentsInput>
  }

  export type hsvalidity_productsCreateManyHsvalidity_treatmentsInputEnvelope = {
    data: hsvalidity_productsCreateManyHsvalidity_treatmentsInput | hsvalidity_productsCreateManyHsvalidity_treatmentsInput[]
    skipDuplicates?: boolean
  }

  export type hsvalidity_productsUpsertWithWhereUniqueWithoutHsvalidity_treatmentsInput = {
    where: hsvalidity_productsWhereUniqueInput
    update: XOR<hsvalidity_productsUpdateWithoutHsvalidity_treatmentsInput, hsvalidity_productsUncheckedUpdateWithoutHsvalidity_treatmentsInput>
    create: XOR<hsvalidity_productsCreateWithoutHsvalidity_treatmentsInput, hsvalidity_productsUncheckedCreateWithoutHsvalidity_treatmentsInput>
  }

  export type hsvalidity_productsUpdateWithWhereUniqueWithoutHsvalidity_treatmentsInput = {
    where: hsvalidity_productsWhereUniqueInput
    data: XOR<hsvalidity_productsUpdateWithoutHsvalidity_treatmentsInput, hsvalidity_productsUncheckedUpdateWithoutHsvalidity_treatmentsInput>
  }

  export type hsvalidity_productsUpdateManyWithWhereWithoutHsvalidity_treatmentsInput = {
    where: hsvalidity_productsScalarWhereInput
    data: XOR<hsvalidity_productsUpdateManyMutationInput, hsvalidity_productsUncheckedUpdateManyWithoutHsvalidity_treatmentsInput>
  }

  export type hsemployeesCreateWithoutSessionsInput = {
    winthor_id?: number
    name: string
    username: string
    password: string
    created_at?: Date | string
    modified_at?: Date | string
    branch: hsbranchesCreateNestedOneWithoutHsemployeesInput
    hsusers_permissions?: hsusers_permissionsCreateNestedManyWithoutHsemployeesInput
    hsusers_roles?: hsusers_rolesCreateNestedManyWithoutHeemployeesInput
    hsvalidities?: hsvaliditiesCreateNestedManyWithoutHsemployeesInput
    analystRequests?: hsvalidity_requestsCreateNestedManyWithoutAnalystInput
    confereeRequests?: hsvalidity_requestsCreateNestedManyWithoutConfereeInput
  }

  export type hsemployeesUncheckedCreateWithoutSessionsInput = {
    id?: number
    branch_id: number
    winthor_id?: number
    name: string
    username: string
    password: string
    created_at?: Date | string
    modified_at?: Date | string
    hsusers_permissions?: hsusers_permissionsUncheckedCreateNestedManyWithoutHsemployeesInput
    hsusers_roles?: hsusers_rolesUncheckedCreateNestedManyWithoutHeemployeesInput
    hsvalidities?: hsvaliditiesUncheckedCreateNestedManyWithoutHsemployeesInput
    analystRequests?: hsvalidity_requestsUncheckedCreateNestedManyWithoutAnalystInput
    confereeRequests?: hsvalidity_requestsUncheckedCreateNestedManyWithoutConfereeInput
  }

  export type hsemployeesCreateOrConnectWithoutSessionsInput = {
    where: hsemployeesWhereUniqueInput
    create: XOR<hsemployeesCreateWithoutSessionsInput, hsemployeesUncheckedCreateWithoutSessionsInput>
  }

  export type hsemployeesUpsertWithoutSessionsInput = {
    update: XOR<hsemployeesUpdateWithoutSessionsInput, hsemployeesUncheckedUpdateWithoutSessionsInput>
    create: XOR<hsemployeesCreateWithoutSessionsInput, hsemployeesUncheckedCreateWithoutSessionsInput>
    where?: hsemployeesWhereInput
  }

  export type hsemployeesUpdateToOneWithWhereWithoutSessionsInput = {
    where?: hsemployeesWhereInput
    data: XOR<hsemployeesUpdateWithoutSessionsInput, hsemployeesUncheckedUpdateWithoutSessionsInput>
  }

  export type hsemployeesUpdateWithoutSessionsInput = {
    winthor_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: hsbranchesUpdateOneRequiredWithoutHsemployeesNestedInput
    hsusers_permissions?: hsusers_permissionsUpdateManyWithoutHsemployeesNestedInput
    hsusers_roles?: hsusers_rolesUpdateManyWithoutHeemployeesNestedInput
    hsvalidities?: hsvaliditiesUpdateManyWithoutHsemployeesNestedInput
    analystRequests?: hsvalidity_requestsUpdateManyWithoutAnalystNestedInput
    confereeRequests?: hsvalidity_requestsUpdateManyWithoutConfereeNestedInput
  }

  export type hsemployeesUncheckedUpdateWithoutSessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    branch_id?: IntFieldUpdateOperationsInput | number
    winthor_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    hsusers_permissions?: hsusers_permissionsUncheckedUpdateManyWithoutHsemployeesNestedInput
    hsusers_roles?: hsusers_rolesUncheckedUpdateManyWithoutHeemployeesNestedInput
    hsvalidities?: hsvaliditiesUncheckedUpdateManyWithoutHsemployeesNestedInput
    analystRequests?: hsvalidity_requestsUncheckedUpdateManyWithoutAnalystNestedInput
    confereeRequests?: hsvalidity_requestsUncheckedUpdateManyWithoutConfereeNestedInput
  }

  export type hssessionsCreateManyUserInput = {
    id?: string
    token: string
    created_at?: Date | string
    expires_at?: Date | string | null
  }

  export type hsusers_permissionsCreateManyHsemployeesInput = {
    permission_id: number
  }

  export type hsusers_rolesCreateManyHeemployeesInput = {
    role_id: number
  }

  export type hsvaliditiesCreateManyHsemployeesInput = {
    id?: number
    branch_id: number
    status?: $Enums.hsvalidities_status
    request_id?: number | null
    created_at?: Date | string
    modified_at?: Date | string
  }

  export type hsvalidity_requestsCreateManyAnalystInput = {
    id?: number
    branch_id: number
    conferee_id: number
    status?: $Enums.hsvalidity_requests_status
    created_at?: Date | string
    modified_at?: Date | string
  }

  export type hsvalidity_requestsCreateManyConfereeInput = {
    id?: number
    branch_id: number
    analyst_id: number
    status?: $Enums.hsvalidity_requests_status
    created_at?: Date | string
    modified_at?: Date | string
  }

  export type hssessionsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type hssessionsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type hssessionsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type hsusers_permissionsUpdateWithoutHsemployeesInput = {
    hspermissions?: hspermissionsUpdateOneRequiredWithoutHsusers_permissionsNestedInput
  }

  export type hsusers_permissionsUncheckedUpdateWithoutHsemployeesInput = {
    permission_id?: IntFieldUpdateOperationsInput | number
  }

  export type hsusers_permissionsUncheckedUpdateManyWithoutHsemployeesInput = {
    permission_id?: IntFieldUpdateOperationsInput | number
  }

  export type hsusers_rolesUpdateWithoutHeemployeesInput = {
    hsroles?: hsrolesUpdateOneRequiredWithoutHsusers_rolesNestedInput
  }

  export type hsusers_rolesUncheckedUpdateWithoutHeemployeesInput = {
    role_id?: IntFieldUpdateOperationsInput | number
  }

  export type hsusers_rolesUncheckedUpdateManyWithoutHeemployeesInput = {
    role_id?: IntFieldUpdateOperationsInput | number
  }

  export type hsvaliditiesUpdateWithoutHsemployeesInput = {
    status?: Enumhsvalidities_statusFieldUpdateOperationsInput | $Enums.hsvalidities_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    hsbranches?: hsbranchesUpdateOneRequiredWithoutHsvaliditiesNestedInput
    hsvalidity_requests?: hsvalidity_requestsUpdateOneWithoutHsvaliditiesNestedInput
    hsvalidity_products?: hsvalidity_productsUpdateManyWithoutHsvaliditiesNestedInput
  }

  export type hsvaliditiesUncheckedUpdateWithoutHsemployeesInput = {
    id?: IntFieldUpdateOperationsInput | number
    branch_id?: IntFieldUpdateOperationsInput | number
    status?: Enumhsvalidities_statusFieldUpdateOperationsInput | $Enums.hsvalidities_status
    request_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    hsvalidity_products?: hsvalidity_productsUncheckedUpdateManyWithoutHsvaliditiesNestedInput
  }

  export type hsvaliditiesUncheckedUpdateManyWithoutHsemployeesInput = {
    id?: IntFieldUpdateOperationsInput | number
    branch_id?: IntFieldUpdateOperationsInput | number
    status?: Enumhsvalidities_statusFieldUpdateOperationsInput | $Enums.hsvalidities_status
    request_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type hsvalidity_requestsUpdateWithoutAnalystInput = {
    status?: Enumhsvalidity_requests_statusFieldUpdateOperationsInput | $Enums.hsvalidity_requests_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    hsvalidities?: hsvaliditiesUpdateManyWithoutHsvalidity_requestsNestedInput
    hsvalidity_request_products?: hsvalidity_request_productsUpdateManyWithoutHsvalidity_requestsNestedInput
    hsbranches?: hsbranchesUpdateOneRequiredWithoutHsvalidity_requestsNestedInput
    conferee?: hsemployeesUpdateOneRequiredWithoutConfereeRequestsNestedInput
  }

  export type hsvalidity_requestsUncheckedUpdateWithoutAnalystInput = {
    id?: IntFieldUpdateOperationsInput | number
    branch_id?: IntFieldUpdateOperationsInput | number
    conferee_id?: IntFieldUpdateOperationsInput | number
    status?: Enumhsvalidity_requests_statusFieldUpdateOperationsInput | $Enums.hsvalidity_requests_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    hsvalidities?: hsvaliditiesUncheckedUpdateManyWithoutHsvalidity_requestsNestedInput
    hsvalidity_request_products?: hsvalidity_request_productsUncheckedUpdateManyWithoutHsvalidity_requestsNestedInput
  }

  export type hsvalidity_requestsUncheckedUpdateManyWithoutAnalystInput = {
    id?: IntFieldUpdateOperationsInput | number
    branch_id?: IntFieldUpdateOperationsInput | number
    conferee_id?: IntFieldUpdateOperationsInput | number
    status?: Enumhsvalidity_requests_statusFieldUpdateOperationsInput | $Enums.hsvalidity_requests_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type hsvalidity_requestsUpdateWithoutConfereeInput = {
    status?: Enumhsvalidity_requests_statusFieldUpdateOperationsInput | $Enums.hsvalidity_requests_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    hsvalidities?: hsvaliditiesUpdateManyWithoutHsvalidity_requestsNestedInput
    hsvalidity_request_products?: hsvalidity_request_productsUpdateManyWithoutHsvalidity_requestsNestedInput
    analyst?: hsemployeesUpdateOneRequiredWithoutAnalystRequestsNestedInput
    hsbranches?: hsbranchesUpdateOneRequiredWithoutHsvalidity_requestsNestedInput
  }

  export type hsvalidity_requestsUncheckedUpdateWithoutConfereeInput = {
    id?: IntFieldUpdateOperationsInput | number
    branch_id?: IntFieldUpdateOperationsInput | number
    analyst_id?: IntFieldUpdateOperationsInput | number
    status?: Enumhsvalidity_requests_statusFieldUpdateOperationsInput | $Enums.hsvalidity_requests_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    hsvalidities?: hsvaliditiesUncheckedUpdateManyWithoutHsvalidity_requestsNestedInput
    hsvalidity_request_products?: hsvalidity_request_productsUncheckedUpdateManyWithoutHsvalidity_requestsNestedInput
  }

  export type hsvalidity_requestsUncheckedUpdateManyWithoutConfereeInput = {
    id?: IntFieldUpdateOperationsInput | number
    branch_id?: IntFieldUpdateOperationsInput | number
    analyst_id?: IntFieldUpdateOperationsInput | number
    status?: Enumhsvalidity_requests_statusFieldUpdateOperationsInput | $Enums.hsvalidity_requests_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type hspermissions_rolesCreateManyHsrolesInput = {
    permission_id: number
  }

  export type hsusers_rolesCreateManyHsrolesInput = {
    user_id: number
  }

  export type hspermissions_rolesUpdateWithoutHsrolesInput = {
    hspermissions?: hspermissionsUpdateOneRequiredWithoutHspermissions_rolesNestedInput
  }

  export type hspermissions_rolesUncheckedUpdateWithoutHsrolesInput = {
    permission_id?: IntFieldUpdateOperationsInput | number
  }

  export type hspermissions_rolesUncheckedUpdateManyWithoutHsrolesInput = {
    permission_id?: IntFieldUpdateOperationsInput | number
  }

  export type hsusers_rolesUpdateWithoutHsrolesInput = {
    heemployees?: hsemployeesUpdateOneRequiredWithoutHsusers_rolesNestedInput
  }

  export type hsusers_rolesUncheckedUpdateWithoutHsrolesInput = {
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type hsusers_rolesUncheckedUpdateManyWithoutHsrolesInput = {
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type hspermissions_rolesCreateManyHspermissionsInput = {
    role_id: number
  }

  export type hsusers_permissionsCreateManyHspermissionsInput = {
    user_id: number
  }

  export type hspermissions_rolesUpdateWithoutHspermissionsInput = {
    hsroles?: hsrolesUpdateOneRequiredWithoutHspermissions_rolesNestedInput
  }

  export type hspermissions_rolesUncheckedUpdateWithoutHspermissionsInput = {
    role_id?: IntFieldUpdateOperationsInput | number
  }

  export type hspermissions_rolesUncheckedUpdateManyWithoutHspermissionsInput = {
    role_id?: IntFieldUpdateOperationsInput | number
  }

  export type hsusers_permissionsUpdateWithoutHspermissionsInput = {
    hsemployees?: hsemployeesUpdateOneRequiredWithoutHsusers_permissionsNestedInput
  }

  export type hsusers_permissionsUncheckedUpdateWithoutHspermissionsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type hsusers_permissionsUncheckedUpdateManyWithoutHspermissionsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type hsemployeesCreateManyBranchInput = {
    id?: number
    winthor_id?: number
    name: string
    username: string
    password: string
    created_at?: Date | string
    modified_at?: Date | string
  }

  export type hsvaliditiesCreateManyHsbranchesInput = {
    id?: number
    employee_id: number
    status?: $Enums.hsvalidities_status
    request_id?: number | null
    created_at?: Date | string
    modified_at?: Date | string
  }

  export type hsvalidity_requestsCreateManyHsbranchesInput = {
    id?: number
    analyst_id: number
    conferee_id: number
    status?: $Enums.hsvalidity_requests_status
    created_at?: Date | string
    modified_at?: Date | string
  }

  export type hsemployeesUpdateWithoutBranchInput = {
    winthor_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: hssessionsUpdateManyWithoutUserNestedInput
    hsusers_permissions?: hsusers_permissionsUpdateManyWithoutHsemployeesNestedInput
    hsusers_roles?: hsusers_rolesUpdateManyWithoutHeemployeesNestedInput
    hsvalidities?: hsvaliditiesUpdateManyWithoutHsemployeesNestedInput
    analystRequests?: hsvalidity_requestsUpdateManyWithoutAnalystNestedInput
    confereeRequests?: hsvalidity_requestsUpdateManyWithoutConfereeNestedInput
  }

  export type hsemployeesUncheckedUpdateWithoutBranchInput = {
    id?: IntFieldUpdateOperationsInput | number
    winthor_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: hssessionsUncheckedUpdateManyWithoutUserNestedInput
    hsusers_permissions?: hsusers_permissionsUncheckedUpdateManyWithoutHsemployeesNestedInput
    hsusers_roles?: hsusers_rolesUncheckedUpdateManyWithoutHeemployeesNestedInput
    hsvalidities?: hsvaliditiesUncheckedUpdateManyWithoutHsemployeesNestedInput
    analystRequests?: hsvalidity_requestsUncheckedUpdateManyWithoutAnalystNestedInput
    confereeRequests?: hsvalidity_requestsUncheckedUpdateManyWithoutConfereeNestedInput
  }

  export type hsemployeesUncheckedUpdateManyWithoutBranchInput = {
    id?: IntFieldUpdateOperationsInput | number
    winthor_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type hsvaliditiesUpdateWithoutHsbranchesInput = {
    status?: Enumhsvalidities_statusFieldUpdateOperationsInput | $Enums.hsvalidities_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    hsemployees?: hsemployeesUpdateOneRequiredWithoutHsvaliditiesNestedInput
    hsvalidity_requests?: hsvalidity_requestsUpdateOneWithoutHsvaliditiesNestedInput
    hsvalidity_products?: hsvalidity_productsUpdateManyWithoutHsvaliditiesNestedInput
  }

  export type hsvaliditiesUncheckedUpdateWithoutHsbranchesInput = {
    id?: IntFieldUpdateOperationsInput | number
    employee_id?: IntFieldUpdateOperationsInput | number
    status?: Enumhsvalidities_statusFieldUpdateOperationsInput | $Enums.hsvalidities_status
    request_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    hsvalidity_products?: hsvalidity_productsUncheckedUpdateManyWithoutHsvaliditiesNestedInput
  }

  export type hsvaliditiesUncheckedUpdateManyWithoutHsbranchesInput = {
    id?: IntFieldUpdateOperationsInput | number
    employee_id?: IntFieldUpdateOperationsInput | number
    status?: Enumhsvalidities_statusFieldUpdateOperationsInput | $Enums.hsvalidities_status
    request_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type hsvalidity_requestsUpdateWithoutHsbranchesInput = {
    status?: Enumhsvalidity_requests_statusFieldUpdateOperationsInput | $Enums.hsvalidity_requests_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    hsvalidities?: hsvaliditiesUpdateManyWithoutHsvalidity_requestsNestedInput
    hsvalidity_request_products?: hsvalidity_request_productsUpdateManyWithoutHsvalidity_requestsNestedInput
    analyst?: hsemployeesUpdateOneRequiredWithoutAnalystRequestsNestedInput
    conferee?: hsemployeesUpdateOneRequiredWithoutConfereeRequestsNestedInput
  }

  export type hsvalidity_requestsUncheckedUpdateWithoutHsbranchesInput = {
    id?: IntFieldUpdateOperationsInput | number
    analyst_id?: IntFieldUpdateOperationsInput | number
    conferee_id?: IntFieldUpdateOperationsInput | number
    status?: Enumhsvalidity_requests_statusFieldUpdateOperationsInput | $Enums.hsvalidity_requests_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    hsvalidities?: hsvaliditiesUncheckedUpdateManyWithoutHsvalidity_requestsNestedInput
    hsvalidity_request_products?: hsvalidity_request_productsUncheckedUpdateManyWithoutHsvalidity_requestsNestedInput
  }

  export type hsvalidity_requestsUncheckedUpdateManyWithoutHsbranchesInput = {
    id?: IntFieldUpdateOperationsInput | number
    analyst_id?: IntFieldUpdateOperationsInput | number
    conferee_id?: IntFieldUpdateOperationsInput | number
    status?: Enumhsvalidity_requests_statusFieldUpdateOperationsInput | $Enums.hsvalidity_requests_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type hsvalidity_productsCreateManyHsvaliditiesInput = {
    id?: number
    product_cod: number
    quantity: number
    validity_date: Date | string
    treat_id?: number
    auxiliary_code: string
  }

  export type hsvalidity_productsUpdateWithoutHsvaliditiesInput = {
    product_cod?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    validity_date?: DateTimeFieldUpdateOperationsInput | Date | string
    auxiliary_code?: StringFieldUpdateOperationsInput | string
    hsvalidity_treatments?: hsvalidity_treatmentsUpdateOneRequiredWithoutHsvalidity_productsNestedInput
  }

  export type hsvalidity_productsUncheckedUpdateWithoutHsvaliditiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_cod?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    validity_date?: DateTimeFieldUpdateOperationsInput | Date | string
    treat_id?: IntFieldUpdateOperationsInput | number
    auxiliary_code?: StringFieldUpdateOperationsInput | string
  }

  export type hsvalidity_productsUncheckedUpdateManyWithoutHsvaliditiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_cod?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    validity_date?: DateTimeFieldUpdateOperationsInput | Date | string
    treat_id?: IntFieldUpdateOperationsInput | number
    auxiliary_code?: StringFieldUpdateOperationsInput | string
  }

  export type hsvaliditiesCreateManyHsvalidity_requestsInput = {
    id?: number
    branch_id: number
    employee_id: number
    status?: $Enums.hsvalidities_status
    created_at?: Date | string
    modified_at?: Date | string
  }

  export type hsvalidity_request_productsCreateManyHsvalidity_requestsInput = {
    id?: number
    status?: $Enums.hsvalidity_request_products_status
    product_cod: number
    validity_date: Date | string
    auxiliary_code: string
  }

  export type hsvaliditiesUpdateWithoutHsvalidity_requestsInput = {
    status?: Enumhsvalidities_statusFieldUpdateOperationsInput | $Enums.hsvalidities_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    hsbranches?: hsbranchesUpdateOneRequiredWithoutHsvaliditiesNestedInput
    hsemployees?: hsemployeesUpdateOneRequiredWithoutHsvaliditiesNestedInput
    hsvalidity_products?: hsvalidity_productsUpdateManyWithoutHsvaliditiesNestedInput
  }

  export type hsvaliditiesUncheckedUpdateWithoutHsvalidity_requestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    branch_id?: IntFieldUpdateOperationsInput | number
    employee_id?: IntFieldUpdateOperationsInput | number
    status?: Enumhsvalidities_statusFieldUpdateOperationsInput | $Enums.hsvalidities_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    hsvalidity_products?: hsvalidity_productsUncheckedUpdateManyWithoutHsvaliditiesNestedInput
  }

  export type hsvaliditiesUncheckedUpdateManyWithoutHsvalidity_requestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    branch_id?: IntFieldUpdateOperationsInput | number
    employee_id?: IntFieldUpdateOperationsInput | number
    status?: Enumhsvalidities_statusFieldUpdateOperationsInput | $Enums.hsvalidities_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type hsvalidity_request_productsUpdateWithoutHsvalidity_requestsInput = {
    status?: Enumhsvalidity_request_products_statusFieldUpdateOperationsInput | $Enums.hsvalidity_request_products_status
    product_cod?: IntFieldUpdateOperationsInput | number
    validity_date?: DateTimeFieldUpdateOperationsInput | Date | string
    auxiliary_code?: StringFieldUpdateOperationsInput | string
  }

  export type hsvalidity_request_productsUncheckedUpdateWithoutHsvalidity_requestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: Enumhsvalidity_request_products_statusFieldUpdateOperationsInput | $Enums.hsvalidity_request_products_status
    product_cod?: IntFieldUpdateOperationsInput | number
    validity_date?: DateTimeFieldUpdateOperationsInput | Date | string
    auxiliary_code?: StringFieldUpdateOperationsInput | string
  }

  export type hsvalidity_request_productsUncheckedUpdateManyWithoutHsvalidity_requestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: Enumhsvalidity_request_products_statusFieldUpdateOperationsInput | $Enums.hsvalidity_request_products_status
    product_cod?: IntFieldUpdateOperationsInput | number
    validity_date?: DateTimeFieldUpdateOperationsInput | Date | string
    auxiliary_code?: StringFieldUpdateOperationsInput | string
  }

  export type hsvalidity_productsCreateManyHsvalidity_treatmentsInput = {
    id?: number
    validity_id: number
    product_cod: number
    quantity: number
    validity_date: Date | string
    auxiliary_code: string
  }

  export type hsvalidity_productsUpdateWithoutHsvalidity_treatmentsInput = {
    product_cod?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    validity_date?: DateTimeFieldUpdateOperationsInput | Date | string
    auxiliary_code?: StringFieldUpdateOperationsInput | string
    hsvalidities?: hsvaliditiesUpdateOneRequiredWithoutHsvalidity_productsNestedInput
  }

  export type hsvalidity_productsUncheckedUpdateWithoutHsvalidity_treatmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    validity_id?: IntFieldUpdateOperationsInput | number
    product_cod?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    validity_date?: DateTimeFieldUpdateOperationsInput | Date | string
    auxiliary_code?: StringFieldUpdateOperationsInput | string
  }

  export type hsvalidity_productsUncheckedUpdateManyWithoutHsvalidity_treatmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    validity_id?: IntFieldUpdateOperationsInput | number
    product_cod?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    validity_date?: DateTimeFieldUpdateOperationsInput | Date | string
    auxiliary_code?: StringFieldUpdateOperationsInput | string
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