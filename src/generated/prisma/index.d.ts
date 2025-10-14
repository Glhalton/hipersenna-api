
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
 * Model hsaccess_levels
 * 
 */
export type hsaccess_levels = $Result.DefaultSelection<Prisma.$hsaccess_levelsPayload>
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
 * Model hsemployees
 * 
 */
export type hsemployees = $Result.DefaultSelection<Prisma.$hsemployeesPayload>
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
 * // Fetch zero or more Hsaccess_levels
 * const hsaccess_levels = await prisma.hsaccess_levels.findMany()
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
   * // Fetch zero or more Hsaccess_levels
   * const hsaccess_levels = await prisma.hsaccess_levels.findMany()
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
   * `prisma.hsaccess_levels`: Exposes CRUD operations for the **hsaccess_levels** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hsaccess_levels
    * const hsaccess_levels = await prisma.hsaccess_levels.findMany()
    * ```
    */
  get hsaccess_levels(): Prisma.hsaccess_levelsDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.hsemployees`: Exposes CRUD operations for the **hsemployees** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hsemployees
    * const hsemployees = await prisma.hsemployees.findMany()
    * ```
    */
  get hsemployees(): Prisma.hsemployeesDelegate<ExtArgs, ClientOptions>;

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
    hsaccess_levels: 'hsaccess_levels',
    hsbranches: 'hsbranches',
    hsvalidities: 'hsvalidities',
    hsvalidity_products: 'hsvalidity_products',
    hsvalidity_requests: 'hsvalidity_requests',
    hsvalidity_request_products: 'hsvalidity_request_products',
    hsvalidity_treatments: 'hsvalidity_treatments',
    hsemployees: 'hsemployees',
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
      modelProps: "hsaccess_levels" | "hsbranches" | "hsvalidities" | "hsvalidity_products" | "hsvalidity_requests" | "hsvalidity_request_products" | "hsvalidity_treatments" | "hsemployees" | "hssessions"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      hsaccess_levels: {
        payload: Prisma.$hsaccess_levelsPayload<ExtArgs>
        fields: Prisma.hsaccess_levelsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.hsaccess_levelsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsaccess_levelsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.hsaccess_levelsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsaccess_levelsPayload>
          }
          findFirst: {
            args: Prisma.hsaccess_levelsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsaccess_levelsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.hsaccess_levelsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsaccess_levelsPayload>
          }
          findMany: {
            args: Prisma.hsaccess_levelsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsaccess_levelsPayload>[]
          }
          create: {
            args: Prisma.hsaccess_levelsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsaccess_levelsPayload>
          }
          createMany: {
            args: Prisma.hsaccess_levelsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.hsaccess_levelsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsaccess_levelsPayload>[]
          }
          delete: {
            args: Prisma.hsaccess_levelsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsaccess_levelsPayload>
          }
          update: {
            args: Prisma.hsaccess_levelsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsaccess_levelsPayload>
          }
          deleteMany: {
            args: Prisma.hsaccess_levelsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.hsaccess_levelsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.hsaccess_levelsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsaccess_levelsPayload>[]
          }
          upsert: {
            args: Prisma.hsaccess_levelsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hsaccess_levelsPayload>
          }
          aggregate: {
            args: Prisma.Hsaccess_levelsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHsaccess_levels>
          }
          groupBy: {
            args: Prisma.hsaccess_levelsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Hsaccess_levelsGroupByOutputType>[]
          }
          count: {
            args: Prisma.hsaccess_levelsCountArgs<ExtArgs>
            result: $Utils.Optional<Hsaccess_levelsCountAggregateOutputType> | number
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
    hsaccess_levels?: hsaccess_levelsOmit
    hsbranches?: hsbranchesOmit
    hsvalidities?: hsvaliditiesOmit
    hsvalidity_products?: hsvalidity_productsOmit
    hsvalidity_requests?: hsvalidity_requestsOmit
    hsvalidity_request_products?: hsvalidity_request_productsOmit
    hsvalidity_treatments?: hsvalidity_treatmentsOmit
    hsemployees?: hsemployeesOmit
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
   * Count Type Hsaccess_levelsCountOutputType
   */

  export type Hsaccess_levelsCountOutputType = {
    hsemployees: number
  }

  export type Hsaccess_levelsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hsemployees?: boolean | Hsaccess_levelsCountOutputTypeCountHsemployeesArgs
  }

  // Custom InputTypes
  /**
   * Hsaccess_levelsCountOutputType without action
   */
  export type Hsaccess_levelsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hsaccess_levelsCountOutputType
     */
    select?: Hsaccess_levelsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Hsaccess_levelsCountOutputType without action
   */
  export type Hsaccess_levelsCountOutputTypeCountHsemployeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hsemployeesWhereInput
  }


  /**
   * Count Type HsbranchesCountOutputType
   */

  export type HsbranchesCountOutputType = {
    hsvalidities: number
    hsvalidity_requests: number
    hsemployees: number
  }

  export type HsbranchesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hsvalidities?: boolean | HsbranchesCountOutputTypeCountHsvaliditiesArgs
    hsvalidity_requests?: boolean | HsbranchesCountOutputTypeCountHsvalidity_requestsArgs
    hsemployees?: boolean | HsbranchesCountOutputTypeCountHsemployeesArgs
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
   * HsbranchesCountOutputType without action
   */
  export type HsbranchesCountOutputTypeCountHsemployeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hsemployeesWhereInput
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
   * Count Type HsemployeesCountOutputType
   */

  export type HsemployeesCountOutputType = {
    analystRequests: number
    confereeRequests: number
    sessions: number
    hsvalidities: number
  }

  export type HsemployeesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    analystRequests?: boolean | HsemployeesCountOutputTypeCountAnalystRequestsArgs
    confereeRequests?: boolean | HsemployeesCountOutputTypeCountConfereeRequestsArgs
    sessions?: boolean | HsemployeesCountOutputTypeCountSessionsArgs
    hsvalidities?: boolean | HsemployeesCountOutputTypeCountHsvaliditiesArgs
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
   * HsemployeesCountOutputType without action
   */
  export type HsemployeesCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hssessionsWhereInput
  }

  /**
   * HsemployeesCountOutputType without action
   */
  export type HsemployeesCountOutputTypeCountHsvaliditiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hsvaliditiesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model hsaccess_levels
   */

  export type AggregateHsaccess_levels = {
    _count: Hsaccess_levelsCountAggregateOutputType | null
    _avg: Hsaccess_levelsAvgAggregateOutputType | null
    _sum: Hsaccess_levelsSumAggregateOutputType | null
    _min: Hsaccess_levelsMinAggregateOutputType | null
    _max: Hsaccess_levelsMaxAggregateOutputType | null
  }

  export type Hsaccess_levelsAvgAggregateOutputType = {
    id: number | null
  }

  export type Hsaccess_levelsSumAggregateOutputType = {
    id: number | null
  }

  export type Hsaccess_levelsMinAggregateOutputType = {
    id: number | null
    description: string | null
  }

  export type Hsaccess_levelsMaxAggregateOutputType = {
    id: number | null
    description: string | null
  }

  export type Hsaccess_levelsCountAggregateOutputType = {
    id: number
    description: number
    _all: number
  }


  export type Hsaccess_levelsAvgAggregateInputType = {
    id?: true
  }

  export type Hsaccess_levelsSumAggregateInputType = {
    id?: true
  }

  export type Hsaccess_levelsMinAggregateInputType = {
    id?: true
    description?: true
  }

  export type Hsaccess_levelsMaxAggregateInputType = {
    id?: true
    description?: true
  }

  export type Hsaccess_levelsCountAggregateInputType = {
    id?: true
    description?: true
    _all?: true
  }

  export type Hsaccess_levelsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hsaccess_levels to aggregate.
     */
    where?: hsaccess_levelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hsaccess_levels to fetch.
     */
    orderBy?: hsaccess_levelsOrderByWithRelationInput | hsaccess_levelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: hsaccess_levelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hsaccess_levels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hsaccess_levels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned hsaccess_levels
    **/
    _count?: true | Hsaccess_levelsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Hsaccess_levelsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Hsaccess_levelsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Hsaccess_levelsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Hsaccess_levelsMaxAggregateInputType
  }

  export type GetHsaccess_levelsAggregateType<T extends Hsaccess_levelsAggregateArgs> = {
        [P in keyof T & keyof AggregateHsaccess_levels]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHsaccess_levels[P]>
      : GetScalarType<T[P], AggregateHsaccess_levels[P]>
  }




  export type hsaccess_levelsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hsaccess_levelsWhereInput
    orderBy?: hsaccess_levelsOrderByWithAggregationInput | hsaccess_levelsOrderByWithAggregationInput[]
    by: Hsaccess_levelsScalarFieldEnum[] | Hsaccess_levelsScalarFieldEnum
    having?: hsaccess_levelsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Hsaccess_levelsCountAggregateInputType | true
    _avg?: Hsaccess_levelsAvgAggregateInputType
    _sum?: Hsaccess_levelsSumAggregateInputType
    _min?: Hsaccess_levelsMinAggregateInputType
    _max?: Hsaccess_levelsMaxAggregateInputType
  }

  export type Hsaccess_levelsGroupByOutputType = {
    id: number
    description: string
    _count: Hsaccess_levelsCountAggregateOutputType | null
    _avg: Hsaccess_levelsAvgAggregateOutputType | null
    _sum: Hsaccess_levelsSumAggregateOutputType | null
    _min: Hsaccess_levelsMinAggregateOutputType | null
    _max: Hsaccess_levelsMaxAggregateOutputType | null
  }

  type GetHsaccess_levelsGroupByPayload<T extends hsaccess_levelsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Hsaccess_levelsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Hsaccess_levelsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Hsaccess_levelsGroupByOutputType[P]>
            : GetScalarType<T[P], Hsaccess_levelsGroupByOutputType[P]>
        }
      >
    >


  export type hsaccess_levelsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    hsemployees?: boolean | hsaccess_levels$hsemployeesArgs<ExtArgs>
    _count?: boolean | Hsaccess_levelsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hsaccess_levels"]>

  export type hsaccess_levelsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
  }, ExtArgs["result"]["hsaccess_levels"]>

  export type hsaccess_levelsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
  }, ExtArgs["result"]["hsaccess_levels"]>

  export type hsaccess_levelsSelectScalar = {
    id?: boolean
    description?: boolean
  }

  export type hsaccess_levelsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "description", ExtArgs["result"]["hsaccess_levels"]>
  export type hsaccess_levelsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hsemployees?: boolean | hsaccess_levels$hsemployeesArgs<ExtArgs>
    _count?: boolean | Hsaccess_levelsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type hsaccess_levelsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type hsaccess_levelsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $hsaccess_levelsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "hsaccess_levels"
    objects: {
      hsemployees: Prisma.$hsemployeesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      description: string
    }, ExtArgs["result"]["hsaccess_levels"]>
    composites: {}
  }

  type hsaccess_levelsGetPayload<S extends boolean | null | undefined | hsaccess_levelsDefaultArgs> = $Result.GetResult<Prisma.$hsaccess_levelsPayload, S>

  type hsaccess_levelsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<hsaccess_levelsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Hsaccess_levelsCountAggregateInputType | true
    }

  export interface hsaccess_levelsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['hsaccess_levels'], meta: { name: 'hsaccess_levels' } }
    /**
     * Find zero or one Hsaccess_levels that matches the filter.
     * @param {hsaccess_levelsFindUniqueArgs} args - Arguments to find a Hsaccess_levels
     * @example
     * // Get one Hsaccess_levels
     * const hsaccess_levels = await prisma.hsaccess_levels.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends hsaccess_levelsFindUniqueArgs>(args: SelectSubset<T, hsaccess_levelsFindUniqueArgs<ExtArgs>>): Prisma__hsaccess_levelsClient<$Result.GetResult<Prisma.$hsaccess_levelsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hsaccess_levels that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {hsaccess_levelsFindUniqueOrThrowArgs} args - Arguments to find a Hsaccess_levels
     * @example
     * // Get one Hsaccess_levels
     * const hsaccess_levels = await prisma.hsaccess_levels.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends hsaccess_levelsFindUniqueOrThrowArgs>(args: SelectSubset<T, hsaccess_levelsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__hsaccess_levelsClient<$Result.GetResult<Prisma.$hsaccess_levelsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hsaccess_levels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hsaccess_levelsFindFirstArgs} args - Arguments to find a Hsaccess_levels
     * @example
     * // Get one Hsaccess_levels
     * const hsaccess_levels = await prisma.hsaccess_levels.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends hsaccess_levelsFindFirstArgs>(args?: SelectSubset<T, hsaccess_levelsFindFirstArgs<ExtArgs>>): Prisma__hsaccess_levelsClient<$Result.GetResult<Prisma.$hsaccess_levelsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hsaccess_levels that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hsaccess_levelsFindFirstOrThrowArgs} args - Arguments to find a Hsaccess_levels
     * @example
     * // Get one Hsaccess_levels
     * const hsaccess_levels = await prisma.hsaccess_levels.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends hsaccess_levelsFindFirstOrThrowArgs>(args?: SelectSubset<T, hsaccess_levelsFindFirstOrThrowArgs<ExtArgs>>): Prisma__hsaccess_levelsClient<$Result.GetResult<Prisma.$hsaccess_levelsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hsaccess_levels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hsaccess_levelsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hsaccess_levels
     * const hsaccess_levels = await prisma.hsaccess_levels.findMany()
     * 
     * // Get first 10 Hsaccess_levels
     * const hsaccess_levels = await prisma.hsaccess_levels.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hsaccess_levelsWithIdOnly = await prisma.hsaccess_levels.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends hsaccess_levelsFindManyArgs>(args?: SelectSubset<T, hsaccess_levelsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hsaccess_levelsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hsaccess_levels.
     * @param {hsaccess_levelsCreateArgs} args - Arguments to create a Hsaccess_levels.
     * @example
     * // Create one Hsaccess_levels
     * const Hsaccess_levels = await prisma.hsaccess_levels.create({
     *   data: {
     *     // ... data to create a Hsaccess_levels
     *   }
     * })
     * 
     */
    create<T extends hsaccess_levelsCreateArgs>(args: SelectSubset<T, hsaccess_levelsCreateArgs<ExtArgs>>): Prisma__hsaccess_levelsClient<$Result.GetResult<Prisma.$hsaccess_levelsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hsaccess_levels.
     * @param {hsaccess_levelsCreateManyArgs} args - Arguments to create many Hsaccess_levels.
     * @example
     * // Create many Hsaccess_levels
     * const hsaccess_levels = await prisma.hsaccess_levels.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends hsaccess_levelsCreateManyArgs>(args?: SelectSubset<T, hsaccess_levelsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Hsaccess_levels and returns the data saved in the database.
     * @param {hsaccess_levelsCreateManyAndReturnArgs} args - Arguments to create many Hsaccess_levels.
     * @example
     * // Create many Hsaccess_levels
     * const hsaccess_levels = await prisma.hsaccess_levels.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Hsaccess_levels and only return the `id`
     * const hsaccess_levelsWithIdOnly = await prisma.hsaccess_levels.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends hsaccess_levelsCreateManyAndReturnArgs>(args?: SelectSubset<T, hsaccess_levelsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hsaccess_levelsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Hsaccess_levels.
     * @param {hsaccess_levelsDeleteArgs} args - Arguments to delete one Hsaccess_levels.
     * @example
     * // Delete one Hsaccess_levels
     * const Hsaccess_levels = await prisma.hsaccess_levels.delete({
     *   where: {
     *     // ... filter to delete one Hsaccess_levels
     *   }
     * })
     * 
     */
    delete<T extends hsaccess_levelsDeleteArgs>(args: SelectSubset<T, hsaccess_levelsDeleteArgs<ExtArgs>>): Prisma__hsaccess_levelsClient<$Result.GetResult<Prisma.$hsaccess_levelsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hsaccess_levels.
     * @param {hsaccess_levelsUpdateArgs} args - Arguments to update one Hsaccess_levels.
     * @example
     * // Update one Hsaccess_levels
     * const hsaccess_levels = await prisma.hsaccess_levels.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends hsaccess_levelsUpdateArgs>(args: SelectSubset<T, hsaccess_levelsUpdateArgs<ExtArgs>>): Prisma__hsaccess_levelsClient<$Result.GetResult<Prisma.$hsaccess_levelsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hsaccess_levels.
     * @param {hsaccess_levelsDeleteManyArgs} args - Arguments to filter Hsaccess_levels to delete.
     * @example
     * // Delete a few Hsaccess_levels
     * const { count } = await prisma.hsaccess_levels.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends hsaccess_levelsDeleteManyArgs>(args?: SelectSubset<T, hsaccess_levelsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hsaccess_levels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hsaccess_levelsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hsaccess_levels
     * const hsaccess_levels = await prisma.hsaccess_levels.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends hsaccess_levelsUpdateManyArgs>(args: SelectSubset<T, hsaccess_levelsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hsaccess_levels and returns the data updated in the database.
     * @param {hsaccess_levelsUpdateManyAndReturnArgs} args - Arguments to update many Hsaccess_levels.
     * @example
     * // Update many Hsaccess_levels
     * const hsaccess_levels = await prisma.hsaccess_levels.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Hsaccess_levels and only return the `id`
     * const hsaccess_levelsWithIdOnly = await prisma.hsaccess_levels.updateManyAndReturn({
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
    updateManyAndReturn<T extends hsaccess_levelsUpdateManyAndReturnArgs>(args: SelectSubset<T, hsaccess_levelsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hsaccess_levelsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Hsaccess_levels.
     * @param {hsaccess_levelsUpsertArgs} args - Arguments to update or create a Hsaccess_levels.
     * @example
     * // Update or create a Hsaccess_levels
     * const hsaccess_levels = await prisma.hsaccess_levels.upsert({
     *   create: {
     *     // ... data to create a Hsaccess_levels
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hsaccess_levels we want to update
     *   }
     * })
     */
    upsert<T extends hsaccess_levelsUpsertArgs>(args: SelectSubset<T, hsaccess_levelsUpsertArgs<ExtArgs>>): Prisma__hsaccess_levelsClient<$Result.GetResult<Prisma.$hsaccess_levelsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Hsaccess_levels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hsaccess_levelsCountArgs} args - Arguments to filter Hsaccess_levels to count.
     * @example
     * // Count the number of Hsaccess_levels
     * const count = await prisma.hsaccess_levels.count({
     *   where: {
     *     // ... the filter for the Hsaccess_levels we want to count
     *   }
     * })
    **/
    count<T extends hsaccess_levelsCountArgs>(
      args?: Subset<T, hsaccess_levelsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Hsaccess_levelsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hsaccess_levels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Hsaccess_levelsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Hsaccess_levelsAggregateArgs>(args: Subset<T, Hsaccess_levelsAggregateArgs>): Prisma.PrismaPromise<GetHsaccess_levelsAggregateType<T>>

    /**
     * Group by Hsaccess_levels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hsaccess_levelsGroupByArgs} args - Group by arguments.
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
      T extends hsaccess_levelsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: hsaccess_levelsGroupByArgs['orderBy'] }
        : { orderBy?: hsaccess_levelsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, hsaccess_levelsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHsaccess_levelsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the hsaccess_levels model
   */
  readonly fields: hsaccess_levelsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for hsaccess_levels.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__hsaccess_levelsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hsemployees<T extends hsaccess_levels$hsemployeesArgs<ExtArgs> = {}>(args?: Subset<T, hsaccess_levels$hsemployeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hsemployeesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the hsaccess_levels model
   */
  interface hsaccess_levelsFieldRefs {
    readonly id: FieldRef<"hsaccess_levels", 'Int'>
    readonly description: FieldRef<"hsaccess_levels", 'String'>
  }
    

  // Custom InputTypes
  /**
   * hsaccess_levels findUnique
   */
  export type hsaccess_levelsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsaccess_levels
     */
    select?: hsaccess_levelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsaccess_levels
     */
    omit?: hsaccess_levelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsaccess_levelsInclude<ExtArgs> | null
    /**
     * Filter, which hsaccess_levels to fetch.
     */
    where: hsaccess_levelsWhereUniqueInput
  }

  /**
   * hsaccess_levels findUniqueOrThrow
   */
  export type hsaccess_levelsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsaccess_levels
     */
    select?: hsaccess_levelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsaccess_levels
     */
    omit?: hsaccess_levelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsaccess_levelsInclude<ExtArgs> | null
    /**
     * Filter, which hsaccess_levels to fetch.
     */
    where: hsaccess_levelsWhereUniqueInput
  }

  /**
   * hsaccess_levels findFirst
   */
  export type hsaccess_levelsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsaccess_levels
     */
    select?: hsaccess_levelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsaccess_levels
     */
    omit?: hsaccess_levelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsaccess_levelsInclude<ExtArgs> | null
    /**
     * Filter, which hsaccess_levels to fetch.
     */
    where?: hsaccess_levelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hsaccess_levels to fetch.
     */
    orderBy?: hsaccess_levelsOrderByWithRelationInput | hsaccess_levelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hsaccess_levels.
     */
    cursor?: hsaccess_levelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hsaccess_levels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hsaccess_levels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hsaccess_levels.
     */
    distinct?: Hsaccess_levelsScalarFieldEnum | Hsaccess_levelsScalarFieldEnum[]
  }

  /**
   * hsaccess_levels findFirstOrThrow
   */
  export type hsaccess_levelsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsaccess_levels
     */
    select?: hsaccess_levelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsaccess_levels
     */
    omit?: hsaccess_levelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsaccess_levelsInclude<ExtArgs> | null
    /**
     * Filter, which hsaccess_levels to fetch.
     */
    where?: hsaccess_levelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hsaccess_levels to fetch.
     */
    orderBy?: hsaccess_levelsOrderByWithRelationInput | hsaccess_levelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hsaccess_levels.
     */
    cursor?: hsaccess_levelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hsaccess_levels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hsaccess_levels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hsaccess_levels.
     */
    distinct?: Hsaccess_levelsScalarFieldEnum | Hsaccess_levelsScalarFieldEnum[]
  }

  /**
   * hsaccess_levels findMany
   */
  export type hsaccess_levelsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsaccess_levels
     */
    select?: hsaccess_levelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsaccess_levels
     */
    omit?: hsaccess_levelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsaccess_levelsInclude<ExtArgs> | null
    /**
     * Filter, which hsaccess_levels to fetch.
     */
    where?: hsaccess_levelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hsaccess_levels to fetch.
     */
    orderBy?: hsaccess_levelsOrderByWithRelationInput | hsaccess_levelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing hsaccess_levels.
     */
    cursor?: hsaccess_levelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hsaccess_levels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hsaccess_levels.
     */
    skip?: number
    distinct?: Hsaccess_levelsScalarFieldEnum | Hsaccess_levelsScalarFieldEnum[]
  }

  /**
   * hsaccess_levels create
   */
  export type hsaccess_levelsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsaccess_levels
     */
    select?: hsaccess_levelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsaccess_levels
     */
    omit?: hsaccess_levelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsaccess_levelsInclude<ExtArgs> | null
    /**
     * The data needed to create a hsaccess_levels.
     */
    data: XOR<hsaccess_levelsCreateInput, hsaccess_levelsUncheckedCreateInput>
  }

  /**
   * hsaccess_levels createMany
   */
  export type hsaccess_levelsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many hsaccess_levels.
     */
    data: hsaccess_levelsCreateManyInput | hsaccess_levelsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * hsaccess_levels createManyAndReturn
   */
  export type hsaccess_levelsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsaccess_levels
     */
    select?: hsaccess_levelsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the hsaccess_levels
     */
    omit?: hsaccess_levelsOmit<ExtArgs> | null
    /**
     * The data used to create many hsaccess_levels.
     */
    data: hsaccess_levelsCreateManyInput | hsaccess_levelsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * hsaccess_levels update
   */
  export type hsaccess_levelsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsaccess_levels
     */
    select?: hsaccess_levelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsaccess_levels
     */
    omit?: hsaccess_levelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsaccess_levelsInclude<ExtArgs> | null
    /**
     * The data needed to update a hsaccess_levels.
     */
    data: XOR<hsaccess_levelsUpdateInput, hsaccess_levelsUncheckedUpdateInput>
    /**
     * Choose, which hsaccess_levels to update.
     */
    where: hsaccess_levelsWhereUniqueInput
  }

  /**
   * hsaccess_levels updateMany
   */
  export type hsaccess_levelsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update hsaccess_levels.
     */
    data: XOR<hsaccess_levelsUpdateManyMutationInput, hsaccess_levelsUncheckedUpdateManyInput>
    /**
     * Filter which hsaccess_levels to update
     */
    where?: hsaccess_levelsWhereInput
    /**
     * Limit how many hsaccess_levels to update.
     */
    limit?: number
  }

  /**
   * hsaccess_levels updateManyAndReturn
   */
  export type hsaccess_levelsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsaccess_levels
     */
    select?: hsaccess_levelsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the hsaccess_levels
     */
    omit?: hsaccess_levelsOmit<ExtArgs> | null
    /**
     * The data used to update hsaccess_levels.
     */
    data: XOR<hsaccess_levelsUpdateManyMutationInput, hsaccess_levelsUncheckedUpdateManyInput>
    /**
     * Filter which hsaccess_levels to update
     */
    where?: hsaccess_levelsWhereInput
    /**
     * Limit how many hsaccess_levels to update.
     */
    limit?: number
  }

  /**
   * hsaccess_levels upsert
   */
  export type hsaccess_levelsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsaccess_levels
     */
    select?: hsaccess_levelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsaccess_levels
     */
    omit?: hsaccess_levelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsaccess_levelsInclude<ExtArgs> | null
    /**
     * The filter to search for the hsaccess_levels to update in case it exists.
     */
    where: hsaccess_levelsWhereUniqueInput
    /**
     * In case the hsaccess_levels found by the `where` argument doesn't exist, create a new hsaccess_levels with this data.
     */
    create: XOR<hsaccess_levelsCreateInput, hsaccess_levelsUncheckedCreateInput>
    /**
     * In case the hsaccess_levels was found with the provided `where` argument, update it with this data.
     */
    update: XOR<hsaccess_levelsUpdateInput, hsaccess_levelsUncheckedUpdateInput>
  }

  /**
   * hsaccess_levels delete
   */
  export type hsaccess_levelsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsaccess_levels
     */
    select?: hsaccess_levelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsaccess_levels
     */
    omit?: hsaccess_levelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsaccess_levelsInclude<ExtArgs> | null
    /**
     * Filter which hsaccess_levels to delete.
     */
    where: hsaccess_levelsWhereUniqueInput
  }

  /**
   * hsaccess_levels deleteMany
   */
  export type hsaccess_levelsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hsaccess_levels to delete
     */
    where?: hsaccess_levelsWhereInput
    /**
     * Limit how many hsaccess_levels to delete.
     */
    limit?: number
  }

  /**
   * hsaccess_levels.hsemployees
   */
  export type hsaccess_levels$hsemployeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * hsaccess_levels without action
   */
  export type hsaccess_levelsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hsaccess_levels
     */
    select?: hsaccess_levelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hsaccess_levels
     */
    omit?: hsaccess_levelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hsaccess_levelsInclude<ExtArgs> | null
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
    hsvalidities?: boolean | hsbranches$hsvaliditiesArgs<ExtArgs>
    hsvalidity_requests?: boolean | hsbranches$hsvalidity_requestsArgs<ExtArgs>
    hsemployees?: boolean | hsbranches$hsemployeesArgs<ExtArgs>
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
    hsvalidities?: boolean | hsbranches$hsvaliditiesArgs<ExtArgs>
    hsvalidity_requests?: boolean | hsbranches$hsvalidity_requestsArgs<ExtArgs>
    hsemployees?: boolean | hsbranches$hsemployeesArgs<ExtArgs>
    _count?: boolean | HsbranchesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type hsbranchesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type hsbranchesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $hsbranchesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "hsbranches"
    objects: {
      hsvalidities: Prisma.$hsvaliditiesPayload<ExtArgs>[]
      hsvalidity_requests: Prisma.$hsvalidity_requestsPayload<ExtArgs>[]
      hsemployees: Prisma.$hsemployeesPayload<ExtArgs>[]
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
    hsvalidities<T extends hsbranches$hsvaliditiesArgs<ExtArgs> = {}>(args?: Subset<T, hsbranches$hsvaliditiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hsvaliditiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    hsvalidity_requests<T extends hsbranches$hsvalidity_requestsArgs<ExtArgs> = {}>(args?: Subset<T, hsbranches$hsvalidity_requestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hsvalidity_requestsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    hsemployees<T extends hsbranches$hsemployeesArgs<ExtArgs> = {}>(args?: Subset<T, hsbranches$hsemployeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hsemployeesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
  }

  export type Hsvalidity_productsMaxAggregateOutputType = {
    id: number | null
    validity_id: number | null
    product_cod: number | null
    quantity: number | null
    validity_date: Date | null
    treat_id: number | null
  }

  export type Hsvalidity_productsCountAggregateOutputType = {
    id: number
    validity_id: number
    product_cod: number
    quantity: number
    validity_date: number
    treat_id: number
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
  }

  export type Hsvalidity_productsMaxAggregateInputType = {
    id?: true
    validity_id?: true
    product_cod?: true
    quantity?: true
    validity_date?: true
    treat_id?: true
  }

  export type Hsvalidity_productsCountAggregateInputType = {
    id?: true
    validity_id?: true
    product_cod?: true
    quantity?: true
    validity_date?: true
    treat_id?: true
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
  }

  export type hsvalidity_productsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "validity_id" | "product_cod" | "quantity" | "validity_date" | "treat_id", ExtArgs["result"]["hsvalidity_products"]>
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
    conferee?: boolean | hsemployeesDefaultArgs<ExtArgs>
    hsbranches?: boolean | hsbranchesDefaultArgs<ExtArgs>
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
    conferee?: boolean | hsemployeesDefaultArgs<ExtArgs>
    hsbranches?: boolean | hsbranchesDefaultArgs<ExtArgs>
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
    conferee?: boolean | hsemployeesDefaultArgs<ExtArgs>
    hsbranches?: boolean | hsbranchesDefaultArgs<ExtArgs>
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
    conferee?: boolean | hsemployeesDefaultArgs<ExtArgs>
    hsbranches?: boolean | hsbranchesDefaultArgs<ExtArgs>
    _count?: boolean | Hsvalidity_requestsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type hsvalidity_requestsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    analyst?: boolean | hsemployeesDefaultArgs<ExtArgs>
    conferee?: boolean | hsemployeesDefaultArgs<ExtArgs>
    hsbranches?: boolean | hsbranchesDefaultArgs<ExtArgs>
  }
  export type hsvalidity_requestsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    analyst?: boolean | hsemployeesDefaultArgs<ExtArgs>
    conferee?: boolean | hsemployeesDefaultArgs<ExtArgs>
    hsbranches?: boolean | hsbranchesDefaultArgs<ExtArgs>
  }

  export type $hsvalidity_requestsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "hsvalidity_requests"
    objects: {
      hsvalidities: Prisma.$hsvaliditiesPayload<ExtArgs>[]
      hsvalidity_request_products: Prisma.$hsvalidity_request_productsPayload<ExtArgs>[]
      analyst: Prisma.$hsemployeesPayload<ExtArgs>
      conferee: Prisma.$hsemployeesPayload<ExtArgs>
      hsbranches: Prisma.$hsbranchesPayload<ExtArgs>
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
    conferee<T extends hsemployeesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, hsemployeesDefaultArgs<ExtArgs>>): Prisma__hsemployeesClient<$Result.GetResult<Prisma.$hsemployeesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    hsbranches<T extends hsbranchesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, hsbranchesDefaultArgs<ExtArgs>>): Prisma__hsbranchesClient<$Result.GetResult<Prisma.$hsbranchesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
  }

  export type Hsvalidity_request_productsMaxAggregateOutputType = {
    id: number | null
    request_id: number | null
    status: $Enums.hsvalidity_request_products_status | null
    product_cod: number | null
    validity_date: Date | null
  }

  export type Hsvalidity_request_productsCountAggregateOutputType = {
    id: number
    request_id: number
    status: number
    product_cod: number
    validity_date: number
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
  }

  export type Hsvalidity_request_productsMaxAggregateInputType = {
    id?: true
    request_id?: true
    status?: true
    product_cod?: true
    validity_date?: true
  }

  export type Hsvalidity_request_productsCountAggregateInputType = {
    id?: true
    request_id?: true
    status?: true
    product_cod?: true
    validity_date?: true
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
    hsvalidity_requests?: boolean | hsvalidity_requestsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hsvalidity_request_products"]>

  export type hsvalidity_request_productsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    request_id?: boolean
    status?: boolean
    product_cod?: boolean
    validity_date?: boolean
    hsvalidity_requests?: boolean | hsvalidity_requestsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hsvalidity_request_products"]>

  export type hsvalidity_request_productsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    request_id?: boolean
    status?: boolean
    product_cod?: boolean
    validity_date?: boolean
    hsvalidity_requests?: boolean | hsvalidity_requestsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hsvalidity_request_products"]>

  export type hsvalidity_request_productsSelectScalar = {
    id?: boolean
    request_id?: boolean
    status?: boolean
    product_cod?: boolean
    validity_date?: boolean
  }

  export type hsvalidity_request_productsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "request_id" | "status" | "product_cod" | "validity_date", ExtArgs["result"]["hsvalidity_request_products"]>
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
    access_level: number | null
    winthor_id: number | null
  }

  export type HsemployeesSumAggregateOutputType = {
    id: number | null
    branch_id: number | null
    access_level: number | null
    winthor_id: number | null
  }

  export type HsemployeesMinAggregateOutputType = {
    id: number | null
    branch_id: number | null
    access_level: number | null
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
    access_level: number | null
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
    access_level: number
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
    access_level?: true
    winthor_id?: true
  }

  export type HsemployeesSumAggregateInputType = {
    id?: true
    branch_id?: true
    access_level?: true
    winthor_id?: true
  }

  export type HsemployeesMinAggregateInputType = {
    id?: true
    branch_id?: true
    access_level?: true
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
    access_level?: true
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
    access_level?: true
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
    access_level: number
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
    access_level?: boolean
    winthor_id?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    created_at?: boolean
    modified_at?: boolean
    branch?: boolean | hsbranchesDefaultArgs<ExtArgs>
    hsaccess_level?: boolean | hsaccess_levelsDefaultArgs<ExtArgs>
    analystRequests?: boolean | hsemployees$analystRequestsArgs<ExtArgs>
    confereeRequests?: boolean | hsemployees$confereeRequestsArgs<ExtArgs>
    sessions?: boolean | hsemployees$sessionsArgs<ExtArgs>
    hsvalidities?: boolean | hsemployees$hsvaliditiesArgs<ExtArgs>
    _count?: boolean | HsemployeesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hsemployees"]>

  export type hsemployeesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    branch_id?: boolean
    access_level?: boolean
    winthor_id?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    created_at?: boolean
    modified_at?: boolean
    branch?: boolean | hsbranchesDefaultArgs<ExtArgs>
    hsaccess_level?: boolean | hsaccess_levelsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hsemployees"]>

  export type hsemployeesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    branch_id?: boolean
    access_level?: boolean
    winthor_id?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    created_at?: boolean
    modified_at?: boolean
    branch?: boolean | hsbranchesDefaultArgs<ExtArgs>
    hsaccess_level?: boolean | hsaccess_levelsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hsemployees"]>

  export type hsemployeesSelectScalar = {
    id?: boolean
    branch_id?: boolean
    access_level?: boolean
    winthor_id?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    created_at?: boolean
    modified_at?: boolean
  }

  export type hsemployeesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "branch_id" | "access_level" | "winthor_id" | "name" | "username" | "password" | "created_at" | "modified_at", ExtArgs["result"]["hsemployees"]>
  export type hsemployeesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | hsbranchesDefaultArgs<ExtArgs>
    hsaccess_level?: boolean | hsaccess_levelsDefaultArgs<ExtArgs>
    analystRequests?: boolean | hsemployees$analystRequestsArgs<ExtArgs>
    confereeRequests?: boolean | hsemployees$confereeRequestsArgs<ExtArgs>
    sessions?: boolean | hsemployees$sessionsArgs<ExtArgs>
    hsvalidities?: boolean | hsemployees$hsvaliditiesArgs<ExtArgs>
    _count?: boolean | HsemployeesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type hsemployeesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | hsbranchesDefaultArgs<ExtArgs>
    hsaccess_level?: boolean | hsaccess_levelsDefaultArgs<ExtArgs>
  }
  export type hsemployeesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | hsbranchesDefaultArgs<ExtArgs>
    hsaccess_level?: boolean | hsaccess_levelsDefaultArgs<ExtArgs>
  }

  export type $hsemployeesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "hsemployees"
    objects: {
      branch: Prisma.$hsbranchesPayload<ExtArgs>
      hsaccess_level: Prisma.$hsaccess_levelsPayload<ExtArgs>
      analystRequests: Prisma.$hsvalidity_requestsPayload<ExtArgs>[]
      confereeRequests: Prisma.$hsvalidity_requestsPayload<ExtArgs>[]
      sessions: Prisma.$hssessionsPayload<ExtArgs>[]
      hsvalidities: Prisma.$hsvaliditiesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      branch_id: number
      access_level: number
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
    hsaccess_level<T extends hsaccess_levelsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, hsaccess_levelsDefaultArgs<ExtArgs>>): Prisma__hsaccess_levelsClient<$Result.GetResult<Prisma.$hsaccess_levelsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    analystRequests<T extends hsemployees$analystRequestsArgs<ExtArgs> = {}>(args?: Subset<T, hsemployees$analystRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hsvalidity_requestsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    confereeRequests<T extends hsemployees$confereeRequestsArgs<ExtArgs> = {}>(args?: Subset<T, hsemployees$confereeRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hsvalidity_requestsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends hsemployees$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, hsemployees$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hssessionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    hsvalidities<T extends hsemployees$hsvaliditiesArgs<ExtArgs> = {}>(args?: Subset<T, hsemployees$hsvaliditiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hsvaliditiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly access_level: FieldRef<"hsemployees", 'Int'>
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


  export const Hsaccess_levelsScalarFieldEnum: {
    id: 'id',
    description: 'description'
  };

  export type Hsaccess_levelsScalarFieldEnum = (typeof Hsaccess_levelsScalarFieldEnum)[keyof typeof Hsaccess_levelsScalarFieldEnum]


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
    treat_id: 'treat_id'
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
    validity_date: 'validity_date'
  };

  export type Hsvalidity_request_productsScalarFieldEnum = (typeof Hsvalidity_request_productsScalarFieldEnum)[keyof typeof Hsvalidity_request_productsScalarFieldEnum]


  export const Hsvalidity_treatmentsScalarFieldEnum: {
    id: 'id',
    description: 'description'
  };

  export type Hsvalidity_treatmentsScalarFieldEnum = (typeof Hsvalidity_treatmentsScalarFieldEnum)[keyof typeof Hsvalidity_treatmentsScalarFieldEnum]


  export const HsemployeesScalarFieldEnum: {
    id: 'id',
    branch_id: 'branch_id',
    access_level: 'access_level',
    winthor_id: 'winthor_id',
    name: 'name',
    username: 'username',
    password: 'password',
    created_at: 'created_at',
    modified_at: 'modified_at'
  };

  export type HsemployeesScalarFieldEnum = (typeof HsemployeesScalarFieldEnum)[keyof typeof HsemployeesScalarFieldEnum]


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
   * Reference to a field of type 'hsvalidities_status'
   */
  export type Enumhsvalidities_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'hsvalidities_status'>
    


  /**
   * Reference to a field of type 'hsvalidities_status[]'
   */
  export type ListEnumhsvalidities_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'hsvalidities_status[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type hsaccess_levelsWhereInput = {
    AND?: hsaccess_levelsWhereInput | hsaccess_levelsWhereInput[]
    OR?: hsaccess_levelsWhereInput[]
    NOT?: hsaccess_levelsWhereInput | hsaccess_levelsWhereInput[]
    id?: IntFilter<"hsaccess_levels"> | number
    description?: StringFilter<"hsaccess_levels"> | string
    hsemployees?: HsemployeesListRelationFilter
  }

  export type hsaccess_levelsOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrder
    hsemployees?: hsemployeesOrderByRelationAggregateInput
  }

  export type hsaccess_levelsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: hsaccess_levelsWhereInput | hsaccess_levelsWhereInput[]
    OR?: hsaccess_levelsWhereInput[]
    NOT?: hsaccess_levelsWhereInput | hsaccess_levelsWhereInput[]
    description?: StringFilter<"hsaccess_levels"> | string
    hsemployees?: HsemployeesListRelationFilter
  }, "id">

  export type hsaccess_levelsOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrder
    _count?: hsaccess_levelsCountOrderByAggregateInput
    _avg?: hsaccess_levelsAvgOrderByAggregateInput
    _max?: hsaccess_levelsMaxOrderByAggregateInput
    _min?: hsaccess_levelsMinOrderByAggregateInput
    _sum?: hsaccess_levelsSumOrderByAggregateInput
  }

  export type hsaccess_levelsScalarWhereWithAggregatesInput = {
    AND?: hsaccess_levelsScalarWhereWithAggregatesInput | hsaccess_levelsScalarWhereWithAggregatesInput[]
    OR?: hsaccess_levelsScalarWhereWithAggregatesInput[]
    NOT?: hsaccess_levelsScalarWhereWithAggregatesInput | hsaccess_levelsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"hsaccess_levels"> | number
    description?: StringWithAggregatesFilter<"hsaccess_levels"> | string
  }

  export type hsbranchesWhereInput = {
    AND?: hsbranchesWhereInput | hsbranchesWhereInput[]
    OR?: hsbranchesWhereInput[]
    NOT?: hsbranchesWhereInput | hsbranchesWhereInput[]
    id?: IntFilter<"hsbranches"> | number
    description?: StringFilter<"hsbranches"> | string
    hsvalidities?: HsvaliditiesListRelationFilter
    hsvalidity_requests?: Hsvalidity_requestsListRelationFilter
    hsemployees?: HsemployeesListRelationFilter
  }

  export type hsbranchesOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrder
    hsvalidities?: hsvaliditiesOrderByRelationAggregateInput
    hsvalidity_requests?: hsvalidity_requestsOrderByRelationAggregateInput
    hsemployees?: hsemployeesOrderByRelationAggregateInput
  }

  export type hsbranchesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: hsbranchesWhereInput | hsbranchesWhereInput[]
    OR?: hsbranchesWhereInput[]
    NOT?: hsbranchesWhereInput | hsbranchesWhereInput[]
    description?: StringFilter<"hsbranches"> | string
    hsvalidities?: HsvaliditiesListRelationFilter
    hsvalidity_requests?: Hsvalidity_requestsListRelationFilter
    hsemployees?: HsemployeesListRelationFilter
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
    conferee?: XOR<HsemployeesScalarRelationFilter, hsemployeesWhereInput>
    hsbranches?: XOR<HsbranchesScalarRelationFilter, hsbranchesWhereInput>
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
    conferee?: hsemployeesOrderByWithRelationInput
    hsbranches?: hsbranchesOrderByWithRelationInput
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
    conferee?: XOR<HsemployeesScalarRelationFilter, hsemployeesWhereInput>
    hsbranches?: XOR<HsbranchesScalarRelationFilter, hsbranchesWhereInput>
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
    hsvalidity_requests?: XOR<Hsvalidity_requestsScalarRelationFilter, hsvalidity_requestsWhereInput>
  }

  export type hsvalidity_request_productsOrderByWithRelationInput = {
    id?: SortOrder
    request_id?: SortOrder
    status?: SortOrder
    product_cod?: SortOrder
    validity_date?: SortOrder
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
    hsvalidity_requests?: XOR<Hsvalidity_requestsScalarRelationFilter, hsvalidity_requestsWhereInput>
  }, "id">

  export type hsvalidity_request_productsOrderByWithAggregationInput = {
    id?: SortOrder
    request_id?: SortOrder
    status?: SortOrder
    product_cod?: SortOrder
    validity_date?: SortOrder
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

  export type hsemployeesWhereInput = {
    AND?: hsemployeesWhereInput | hsemployeesWhereInput[]
    OR?: hsemployeesWhereInput[]
    NOT?: hsemployeesWhereInput | hsemployeesWhereInput[]
    id?: IntFilter<"hsemployees"> | number
    branch_id?: IntFilter<"hsemployees"> | number
    access_level?: IntFilter<"hsemployees"> | number
    winthor_id?: IntFilter<"hsemployees"> | number
    name?: StringFilter<"hsemployees"> | string
    username?: StringFilter<"hsemployees"> | string
    password?: StringFilter<"hsemployees"> | string
    created_at?: DateTimeFilter<"hsemployees"> | Date | string
    modified_at?: DateTimeFilter<"hsemployees"> | Date | string
    branch?: XOR<HsbranchesScalarRelationFilter, hsbranchesWhereInput>
    hsaccess_level?: XOR<Hsaccess_levelsScalarRelationFilter, hsaccess_levelsWhereInput>
    analystRequests?: Hsvalidity_requestsListRelationFilter
    confereeRequests?: Hsvalidity_requestsListRelationFilter
    sessions?: HssessionsListRelationFilter
    hsvalidities?: HsvaliditiesListRelationFilter
  }

  export type hsemployeesOrderByWithRelationInput = {
    id?: SortOrder
    branch_id?: SortOrder
    access_level?: SortOrder
    winthor_id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
    branch?: hsbranchesOrderByWithRelationInput
    hsaccess_level?: hsaccess_levelsOrderByWithRelationInput
    analystRequests?: hsvalidity_requestsOrderByRelationAggregateInput
    confereeRequests?: hsvalidity_requestsOrderByRelationAggregateInput
    sessions?: hssessionsOrderByRelationAggregateInput
    hsvalidities?: hsvaliditiesOrderByRelationAggregateInput
  }

  export type hsemployeesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    winthor_id?: number
    username?: string
    AND?: hsemployeesWhereInput | hsemployeesWhereInput[]
    OR?: hsemployeesWhereInput[]
    NOT?: hsemployeesWhereInput | hsemployeesWhereInput[]
    branch_id?: IntFilter<"hsemployees"> | number
    access_level?: IntFilter<"hsemployees"> | number
    name?: StringFilter<"hsemployees"> | string
    password?: StringFilter<"hsemployees"> | string
    created_at?: DateTimeFilter<"hsemployees"> | Date | string
    modified_at?: DateTimeFilter<"hsemployees"> | Date | string
    branch?: XOR<HsbranchesScalarRelationFilter, hsbranchesWhereInput>
    hsaccess_level?: XOR<Hsaccess_levelsScalarRelationFilter, hsaccess_levelsWhereInput>
    analystRequests?: Hsvalidity_requestsListRelationFilter
    confereeRequests?: Hsvalidity_requestsListRelationFilter
    sessions?: HssessionsListRelationFilter
    hsvalidities?: HsvaliditiesListRelationFilter
  }, "id" | "winthor_id" | "username">

  export type hsemployeesOrderByWithAggregationInput = {
    id?: SortOrder
    branch_id?: SortOrder
    access_level?: SortOrder
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
    access_level?: IntWithAggregatesFilter<"hsemployees"> | number
    winthor_id?: IntWithAggregatesFilter<"hsemployees"> | number
    name?: StringWithAggregatesFilter<"hsemployees"> | string
    username?: StringWithAggregatesFilter<"hsemployees"> | string
    password?: StringWithAggregatesFilter<"hsemployees"> | string
    created_at?: DateTimeWithAggregatesFilter<"hsemployees"> | Date | string
    modified_at?: DateTimeWithAggregatesFilter<"hsemployees"> | Date | string
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

  export type hsaccess_levelsCreateInput = {
    description: string
    hsemployees?: hsemployeesCreateNestedManyWithoutHsaccess_levelInput
  }

  export type hsaccess_levelsUncheckedCreateInput = {
    id?: number
    description: string
    hsemployees?: hsemployeesUncheckedCreateNestedManyWithoutHsaccess_levelInput
  }

  export type hsaccess_levelsUpdateInput = {
    description?: StringFieldUpdateOperationsInput | string
    hsemployees?: hsemployeesUpdateManyWithoutHsaccess_levelNestedInput
  }

  export type hsaccess_levelsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    hsemployees?: hsemployeesUncheckedUpdateManyWithoutHsaccess_levelNestedInput
  }

  export type hsaccess_levelsCreateManyInput = {
    id?: number
    description: string
  }

  export type hsaccess_levelsUpdateManyMutationInput = {
    description?: StringFieldUpdateOperationsInput | string
  }

  export type hsaccess_levelsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type hsbranchesCreateInput = {
    description: string
    hsvalidities?: hsvaliditiesCreateNestedManyWithoutHsbranchesInput
    hsvalidity_requests?: hsvalidity_requestsCreateNestedManyWithoutHsbranchesInput
    hsemployees?: hsemployeesCreateNestedManyWithoutBranchInput
  }

  export type hsbranchesUncheckedCreateInput = {
    id?: number
    description: string
    hsvalidities?: hsvaliditiesUncheckedCreateNestedManyWithoutHsbranchesInput
    hsvalidity_requests?: hsvalidity_requestsUncheckedCreateNestedManyWithoutHsbranchesInput
    hsemployees?: hsemployeesUncheckedCreateNestedManyWithoutBranchInput
  }

  export type hsbranchesUpdateInput = {
    description?: StringFieldUpdateOperationsInput | string
    hsvalidities?: hsvaliditiesUpdateManyWithoutHsbranchesNestedInput
    hsvalidity_requests?: hsvalidity_requestsUpdateManyWithoutHsbranchesNestedInput
    hsemployees?: hsemployeesUpdateManyWithoutBranchNestedInput
  }

  export type hsbranchesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    hsvalidities?: hsvaliditiesUncheckedUpdateManyWithoutHsbranchesNestedInput
    hsvalidity_requests?: hsvalidity_requestsUncheckedUpdateManyWithoutHsbranchesNestedInput
    hsemployees?: hsemployeesUncheckedUpdateManyWithoutBranchNestedInput
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
  }

  export type hsvalidity_productsUpdateInput = {
    product_cod?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    validity_date?: DateTimeFieldUpdateOperationsInput | Date | string
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
  }

  export type hsvalidity_productsCreateManyInput = {
    id?: number
    validity_id: number
    product_cod: number
    quantity: number
    validity_date: Date | string
    treat_id?: number
  }

  export type hsvalidity_productsUpdateManyMutationInput = {
    product_cod?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    validity_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type hsvalidity_productsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    validity_id?: IntFieldUpdateOperationsInput | number
    product_cod?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    validity_date?: DateTimeFieldUpdateOperationsInput | Date | string
    treat_id?: IntFieldUpdateOperationsInput | number
  }

  export type hsvalidity_requestsCreateInput = {
    status?: $Enums.hsvalidity_requests_status
    created_at?: Date | string
    modified_at?: Date | string
    hsvalidities?: hsvaliditiesCreateNestedManyWithoutHsvalidity_requestsInput
    hsvalidity_request_products?: hsvalidity_request_productsCreateNestedManyWithoutHsvalidity_requestsInput
    analyst: hsemployeesCreateNestedOneWithoutAnalystRequestsInput
    conferee: hsemployeesCreateNestedOneWithoutConfereeRequestsInput
    hsbranches: hsbranchesCreateNestedOneWithoutHsvalidity_requestsInput
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
    conferee?: hsemployeesUpdateOneRequiredWithoutConfereeRequestsNestedInput
    hsbranches?: hsbranchesUpdateOneRequiredWithoutHsvalidity_requestsNestedInput
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
    hsvalidity_requests: hsvalidity_requestsCreateNestedOneWithoutHsvalidity_request_productsInput
  }

  export type hsvalidity_request_productsUncheckedCreateInput = {
    id?: number
    request_id: number
    status?: $Enums.hsvalidity_request_products_status
    product_cod: number
    validity_date: Date | string
  }

  export type hsvalidity_request_productsUpdateInput = {
    status?: Enumhsvalidity_request_products_statusFieldUpdateOperationsInput | $Enums.hsvalidity_request_products_status
    product_cod?: IntFieldUpdateOperationsInput | number
    validity_date?: DateTimeFieldUpdateOperationsInput | Date | string
    hsvalidity_requests?: hsvalidity_requestsUpdateOneRequiredWithoutHsvalidity_request_productsNestedInput
  }

  export type hsvalidity_request_productsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    request_id?: IntFieldUpdateOperationsInput | number
    status?: Enumhsvalidity_request_products_statusFieldUpdateOperationsInput | $Enums.hsvalidity_request_products_status
    product_cod?: IntFieldUpdateOperationsInput | number
    validity_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type hsvalidity_request_productsCreateManyInput = {
    id?: number
    request_id: number
    status?: $Enums.hsvalidity_request_products_status
    product_cod: number
    validity_date: Date | string
  }

  export type hsvalidity_request_productsUpdateManyMutationInput = {
    status?: Enumhsvalidity_request_products_statusFieldUpdateOperationsInput | $Enums.hsvalidity_request_products_status
    product_cod?: IntFieldUpdateOperationsInput | number
    validity_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type hsvalidity_request_productsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    request_id?: IntFieldUpdateOperationsInput | number
    status?: Enumhsvalidity_request_products_statusFieldUpdateOperationsInput | $Enums.hsvalidity_request_products_status
    product_cod?: IntFieldUpdateOperationsInput | number
    validity_date?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type hsemployeesCreateInput = {
    winthor_id?: number
    name: string
    username: string
    password: string
    created_at?: Date | string
    modified_at?: Date | string
    branch: hsbranchesCreateNestedOneWithoutHsemployeesInput
    hsaccess_level: hsaccess_levelsCreateNestedOneWithoutHsemployeesInput
    analystRequests?: hsvalidity_requestsCreateNestedManyWithoutAnalystInput
    confereeRequests?: hsvalidity_requestsCreateNestedManyWithoutConfereeInput
    sessions?: hssessionsCreateNestedManyWithoutUserInput
    hsvalidities?: hsvaliditiesCreateNestedManyWithoutHsemployeesInput
  }

  export type hsemployeesUncheckedCreateInput = {
    id?: number
    branch_id: number
    access_level: number
    winthor_id?: number
    name: string
    username: string
    password: string
    created_at?: Date | string
    modified_at?: Date | string
    analystRequests?: hsvalidity_requestsUncheckedCreateNestedManyWithoutAnalystInput
    confereeRequests?: hsvalidity_requestsUncheckedCreateNestedManyWithoutConfereeInput
    sessions?: hssessionsUncheckedCreateNestedManyWithoutUserInput
    hsvalidities?: hsvaliditiesUncheckedCreateNestedManyWithoutHsemployeesInput
  }

  export type hsemployeesUpdateInput = {
    winthor_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: hsbranchesUpdateOneRequiredWithoutHsemployeesNestedInput
    hsaccess_level?: hsaccess_levelsUpdateOneRequiredWithoutHsemployeesNestedInput
    analystRequests?: hsvalidity_requestsUpdateManyWithoutAnalystNestedInput
    confereeRequests?: hsvalidity_requestsUpdateManyWithoutConfereeNestedInput
    sessions?: hssessionsUpdateManyWithoutUserNestedInput
    hsvalidities?: hsvaliditiesUpdateManyWithoutHsemployeesNestedInput
  }

  export type hsemployeesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    branch_id?: IntFieldUpdateOperationsInput | number
    access_level?: IntFieldUpdateOperationsInput | number
    winthor_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    analystRequests?: hsvalidity_requestsUncheckedUpdateManyWithoutAnalystNestedInput
    confereeRequests?: hsvalidity_requestsUncheckedUpdateManyWithoutConfereeNestedInput
    sessions?: hssessionsUncheckedUpdateManyWithoutUserNestedInput
    hsvalidities?: hsvaliditiesUncheckedUpdateManyWithoutHsemployeesNestedInput
  }

  export type hsemployeesCreateManyInput = {
    id?: number
    branch_id: number
    access_level: number
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
    access_level?: IntFieldUpdateOperationsInput | number
    winthor_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type HsemployeesListRelationFilter = {
    every?: hsemployeesWhereInput
    some?: hsemployeesWhereInput
    none?: hsemployeesWhereInput
  }

  export type hsemployeesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type hsaccess_levelsCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
  }

  export type hsaccess_levelsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type hsaccess_levelsMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
  }

  export type hsaccess_levelsMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
  }

  export type hsaccess_levelsSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type hsvaliditiesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type hsvalidity_requestsOrderByRelationAggregateInput = {
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

  export type HsemployeesScalarRelationFilter = {
    is?: hsemployeesWhereInput
    isNot?: hsemployeesWhereInput
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
  }

  export type hsvalidity_productsMinOrderByAggregateInput = {
    id?: SortOrder
    validity_id?: SortOrder
    product_cod?: SortOrder
    quantity?: SortOrder
    validity_date?: SortOrder
    treat_id?: SortOrder
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
  }

  export type hsvalidity_request_productsMinOrderByAggregateInput = {
    id?: SortOrder
    request_id?: SortOrder
    status?: SortOrder
    product_cod?: SortOrder
    validity_date?: SortOrder
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

  export type Hsaccess_levelsScalarRelationFilter = {
    is?: hsaccess_levelsWhereInput
    isNot?: hsaccess_levelsWhereInput
  }

  export type HssessionsListRelationFilter = {
    every?: hssessionsWhereInput
    some?: hssessionsWhereInput
    none?: hssessionsWhereInput
  }

  export type hssessionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type hsemployeesCountOrderByAggregateInput = {
    id?: SortOrder
    branch_id?: SortOrder
    access_level?: SortOrder
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
    access_level?: SortOrder
    winthor_id?: SortOrder
  }

  export type hsemployeesMaxOrderByAggregateInput = {
    id?: SortOrder
    branch_id?: SortOrder
    access_level?: SortOrder
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
    access_level?: SortOrder
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
    access_level?: SortOrder
    winthor_id?: SortOrder
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

  export type hsemployeesCreateNestedManyWithoutHsaccess_levelInput = {
    create?: XOR<hsemployeesCreateWithoutHsaccess_levelInput, hsemployeesUncheckedCreateWithoutHsaccess_levelInput> | hsemployeesCreateWithoutHsaccess_levelInput[] | hsemployeesUncheckedCreateWithoutHsaccess_levelInput[]
    connectOrCreate?: hsemployeesCreateOrConnectWithoutHsaccess_levelInput | hsemployeesCreateOrConnectWithoutHsaccess_levelInput[]
    createMany?: hsemployeesCreateManyHsaccess_levelInputEnvelope
    connect?: hsemployeesWhereUniqueInput | hsemployeesWhereUniqueInput[]
  }

  export type hsemployeesUncheckedCreateNestedManyWithoutHsaccess_levelInput = {
    create?: XOR<hsemployeesCreateWithoutHsaccess_levelInput, hsemployeesUncheckedCreateWithoutHsaccess_levelInput> | hsemployeesCreateWithoutHsaccess_levelInput[] | hsemployeesUncheckedCreateWithoutHsaccess_levelInput[]
    connectOrCreate?: hsemployeesCreateOrConnectWithoutHsaccess_levelInput | hsemployeesCreateOrConnectWithoutHsaccess_levelInput[]
    createMany?: hsemployeesCreateManyHsaccess_levelInputEnvelope
    connect?: hsemployeesWhereUniqueInput | hsemployeesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type hsemployeesUpdateManyWithoutHsaccess_levelNestedInput = {
    create?: XOR<hsemployeesCreateWithoutHsaccess_levelInput, hsemployeesUncheckedCreateWithoutHsaccess_levelInput> | hsemployeesCreateWithoutHsaccess_levelInput[] | hsemployeesUncheckedCreateWithoutHsaccess_levelInput[]
    connectOrCreate?: hsemployeesCreateOrConnectWithoutHsaccess_levelInput | hsemployeesCreateOrConnectWithoutHsaccess_levelInput[]
    upsert?: hsemployeesUpsertWithWhereUniqueWithoutHsaccess_levelInput | hsemployeesUpsertWithWhereUniqueWithoutHsaccess_levelInput[]
    createMany?: hsemployeesCreateManyHsaccess_levelInputEnvelope
    set?: hsemployeesWhereUniqueInput | hsemployeesWhereUniqueInput[]
    disconnect?: hsemployeesWhereUniqueInput | hsemployeesWhereUniqueInput[]
    delete?: hsemployeesWhereUniqueInput | hsemployeesWhereUniqueInput[]
    connect?: hsemployeesWhereUniqueInput | hsemployeesWhereUniqueInput[]
    update?: hsemployeesUpdateWithWhereUniqueWithoutHsaccess_levelInput | hsemployeesUpdateWithWhereUniqueWithoutHsaccess_levelInput[]
    updateMany?: hsemployeesUpdateManyWithWhereWithoutHsaccess_levelInput | hsemployeesUpdateManyWithWhereWithoutHsaccess_levelInput[]
    deleteMany?: hsemployeesScalarWhereInput | hsemployeesScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type hsemployeesUncheckedUpdateManyWithoutHsaccess_levelNestedInput = {
    create?: XOR<hsemployeesCreateWithoutHsaccess_levelInput, hsemployeesUncheckedCreateWithoutHsaccess_levelInput> | hsemployeesCreateWithoutHsaccess_levelInput[] | hsemployeesUncheckedCreateWithoutHsaccess_levelInput[]
    connectOrCreate?: hsemployeesCreateOrConnectWithoutHsaccess_levelInput | hsemployeesCreateOrConnectWithoutHsaccess_levelInput[]
    upsert?: hsemployeesUpsertWithWhereUniqueWithoutHsaccess_levelInput | hsemployeesUpsertWithWhereUniqueWithoutHsaccess_levelInput[]
    createMany?: hsemployeesCreateManyHsaccess_levelInputEnvelope
    set?: hsemployeesWhereUniqueInput | hsemployeesWhereUniqueInput[]
    disconnect?: hsemployeesWhereUniqueInput | hsemployeesWhereUniqueInput[]
    delete?: hsemployeesWhereUniqueInput | hsemployeesWhereUniqueInput[]
    connect?: hsemployeesWhereUniqueInput | hsemployeesWhereUniqueInput[]
    update?: hsemployeesUpdateWithWhereUniqueWithoutHsaccess_levelInput | hsemployeesUpdateWithWhereUniqueWithoutHsaccess_levelInput[]
    updateMany?: hsemployeesUpdateManyWithWhereWithoutHsaccess_levelInput | hsemployeesUpdateManyWithWhereWithoutHsaccess_levelInput[]
    deleteMany?: hsemployeesScalarWhereInput | hsemployeesScalarWhereInput[]
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

  export type hsemployeesCreateNestedManyWithoutBranchInput = {
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

  export type hsemployeesUncheckedCreateNestedManyWithoutBranchInput = {
    create?: XOR<hsemployeesCreateWithoutBranchInput, hsemployeesUncheckedCreateWithoutBranchInput> | hsemployeesCreateWithoutBranchInput[] | hsemployeesUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: hsemployeesCreateOrConnectWithoutBranchInput | hsemployeesCreateOrConnectWithoutBranchInput[]
    createMany?: hsemployeesCreateManyBranchInputEnvelope
    connect?: hsemployeesWhereUniqueInput | hsemployeesWhereUniqueInput[]
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

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
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

  export type hsemployeesCreateNestedOneWithoutConfereeRequestsInput = {
    create?: XOR<hsemployeesCreateWithoutConfereeRequestsInput, hsemployeesUncheckedCreateWithoutConfereeRequestsInput>
    connectOrCreate?: hsemployeesCreateOrConnectWithoutConfereeRequestsInput
    connect?: hsemployeesWhereUniqueInput
  }

  export type hsbranchesCreateNestedOneWithoutHsvalidity_requestsInput = {
    create?: XOR<hsbranchesCreateWithoutHsvalidity_requestsInput, hsbranchesUncheckedCreateWithoutHsvalidity_requestsInput>
    connectOrCreate?: hsbranchesCreateOrConnectWithoutHsvalidity_requestsInput
    connect?: hsbranchesWhereUniqueInput
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

  export type hsemployeesUpdateOneRequiredWithoutConfereeRequestsNestedInput = {
    create?: XOR<hsemployeesCreateWithoutConfereeRequestsInput, hsemployeesUncheckedCreateWithoutConfereeRequestsInput>
    connectOrCreate?: hsemployeesCreateOrConnectWithoutConfereeRequestsInput
    upsert?: hsemployeesUpsertWithoutConfereeRequestsInput
    connect?: hsemployeesWhereUniqueInput
    update?: XOR<XOR<hsemployeesUpdateToOneWithWhereWithoutConfereeRequestsInput, hsemployeesUpdateWithoutConfereeRequestsInput>, hsemployeesUncheckedUpdateWithoutConfereeRequestsInput>
  }

  export type hsbranchesUpdateOneRequiredWithoutHsvalidity_requestsNestedInput = {
    create?: XOR<hsbranchesCreateWithoutHsvalidity_requestsInput, hsbranchesUncheckedCreateWithoutHsvalidity_requestsInput>
    connectOrCreate?: hsbranchesCreateOrConnectWithoutHsvalidity_requestsInput
    upsert?: hsbranchesUpsertWithoutHsvalidity_requestsInput
    connect?: hsbranchesWhereUniqueInput
    update?: XOR<XOR<hsbranchesUpdateToOneWithWhereWithoutHsvalidity_requestsInput, hsbranchesUpdateWithoutHsvalidity_requestsInput>, hsbranchesUncheckedUpdateWithoutHsvalidity_requestsInput>
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

  export type hsbranchesCreateNestedOneWithoutHsemployeesInput = {
    create?: XOR<hsbranchesCreateWithoutHsemployeesInput, hsbranchesUncheckedCreateWithoutHsemployeesInput>
    connectOrCreate?: hsbranchesCreateOrConnectWithoutHsemployeesInput
    connect?: hsbranchesWhereUniqueInput
  }

  export type hsaccess_levelsCreateNestedOneWithoutHsemployeesInput = {
    create?: XOR<hsaccess_levelsCreateWithoutHsemployeesInput, hsaccess_levelsUncheckedCreateWithoutHsemployeesInput>
    connectOrCreate?: hsaccess_levelsCreateOrConnectWithoutHsemployeesInput
    connect?: hsaccess_levelsWhereUniqueInput
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

  export type hssessionsCreateNestedManyWithoutUserInput = {
    create?: XOR<hssessionsCreateWithoutUserInput, hssessionsUncheckedCreateWithoutUserInput> | hssessionsCreateWithoutUserInput[] | hssessionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: hssessionsCreateOrConnectWithoutUserInput | hssessionsCreateOrConnectWithoutUserInput[]
    createMany?: hssessionsCreateManyUserInputEnvelope
    connect?: hssessionsWhereUniqueInput | hssessionsWhereUniqueInput[]
  }

  export type hsvaliditiesCreateNestedManyWithoutHsemployeesInput = {
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

  export type hssessionsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<hssessionsCreateWithoutUserInput, hssessionsUncheckedCreateWithoutUserInput> | hssessionsCreateWithoutUserInput[] | hssessionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: hssessionsCreateOrConnectWithoutUserInput | hssessionsCreateOrConnectWithoutUserInput[]
    createMany?: hssessionsCreateManyUserInputEnvelope
    connect?: hssessionsWhereUniqueInput | hssessionsWhereUniqueInput[]
  }

  export type hsvaliditiesUncheckedCreateNestedManyWithoutHsemployeesInput = {
    create?: XOR<hsvaliditiesCreateWithoutHsemployeesInput, hsvaliditiesUncheckedCreateWithoutHsemployeesInput> | hsvaliditiesCreateWithoutHsemployeesInput[] | hsvaliditiesUncheckedCreateWithoutHsemployeesInput[]
    connectOrCreate?: hsvaliditiesCreateOrConnectWithoutHsemployeesInput | hsvaliditiesCreateOrConnectWithoutHsemployeesInput[]
    createMany?: hsvaliditiesCreateManyHsemployeesInputEnvelope
    connect?: hsvaliditiesWhereUniqueInput | hsvaliditiesWhereUniqueInput[]
  }

  export type hsbranchesUpdateOneRequiredWithoutHsemployeesNestedInput = {
    create?: XOR<hsbranchesCreateWithoutHsemployeesInput, hsbranchesUncheckedCreateWithoutHsemployeesInput>
    connectOrCreate?: hsbranchesCreateOrConnectWithoutHsemployeesInput
    upsert?: hsbranchesUpsertWithoutHsemployeesInput
    connect?: hsbranchesWhereUniqueInput
    update?: XOR<XOR<hsbranchesUpdateToOneWithWhereWithoutHsemployeesInput, hsbranchesUpdateWithoutHsemployeesInput>, hsbranchesUncheckedUpdateWithoutHsemployeesInput>
  }

  export type hsaccess_levelsUpdateOneRequiredWithoutHsemployeesNestedInput = {
    create?: XOR<hsaccess_levelsCreateWithoutHsemployeesInput, hsaccess_levelsUncheckedCreateWithoutHsemployeesInput>
    connectOrCreate?: hsaccess_levelsCreateOrConnectWithoutHsemployeesInput
    upsert?: hsaccess_levelsUpsertWithoutHsemployeesInput
    connect?: hsaccess_levelsWhereUniqueInput
    update?: XOR<XOR<hsaccess_levelsUpdateToOneWithWhereWithoutHsemployeesInput, hsaccess_levelsUpdateWithoutHsemployeesInput>, hsaccess_levelsUncheckedUpdateWithoutHsemployeesInput>
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

  export type hsemployeesCreateWithoutHsaccess_levelInput = {
    winthor_id?: number
    name: string
    username: string
    password: string
    created_at?: Date | string
    modified_at?: Date | string
    branch: hsbranchesCreateNestedOneWithoutHsemployeesInput
    analystRequests?: hsvalidity_requestsCreateNestedManyWithoutAnalystInput
    confereeRequests?: hsvalidity_requestsCreateNestedManyWithoutConfereeInput
    sessions?: hssessionsCreateNestedManyWithoutUserInput
    hsvalidities?: hsvaliditiesCreateNestedManyWithoutHsemployeesInput
  }

  export type hsemployeesUncheckedCreateWithoutHsaccess_levelInput = {
    id?: number
    branch_id: number
    winthor_id?: number
    name: string
    username: string
    password: string
    created_at?: Date | string
    modified_at?: Date | string
    analystRequests?: hsvalidity_requestsUncheckedCreateNestedManyWithoutAnalystInput
    confereeRequests?: hsvalidity_requestsUncheckedCreateNestedManyWithoutConfereeInput
    sessions?: hssessionsUncheckedCreateNestedManyWithoutUserInput
    hsvalidities?: hsvaliditiesUncheckedCreateNestedManyWithoutHsemployeesInput
  }

  export type hsemployeesCreateOrConnectWithoutHsaccess_levelInput = {
    where: hsemployeesWhereUniqueInput
    create: XOR<hsemployeesCreateWithoutHsaccess_levelInput, hsemployeesUncheckedCreateWithoutHsaccess_levelInput>
  }

  export type hsemployeesCreateManyHsaccess_levelInputEnvelope = {
    data: hsemployeesCreateManyHsaccess_levelInput | hsemployeesCreateManyHsaccess_levelInput[]
    skipDuplicates?: boolean
  }

  export type hsemployeesUpsertWithWhereUniqueWithoutHsaccess_levelInput = {
    where: hsemployeesWhereUniqueInput
    update: XOR<hsemployeesUpdateWithoutHsaccess_levelInput, hsemployeesUncheckedUpdateWithoutHsaccess_levelInput>
    create: XOR<hsemployeesCreateWithoutHsaccess_levelInput, hsemployeesUncheckedCreateWithoutHsaccess_levelInput>
  }

  export type hsemployeesUpdateWithWhereUniqueWithoutHsaccess_levelInput = {
    where: hsemployeesWhereUniqueInput
    data: XOR<hsemployeesUpdateWithoutHsaccess_levelInput, hsemployeesUncheckedUpdateWithoutHsaccess_levelInput>
  }

  export type hsemployeesUpdateManyWithWhereWithoutHsaccess_levelInput = {
    where: hsemployeesScalarWhereInput
    data: XOR<hsemployeesUpdateManyMutationInput, hsemployeesUncheckedUpdateManyWithoutHsaccess_levelInput>
  }

  export type hsemployeesScalarWhereInput = {
    AND?: hsemployeesScalarWhereInput | hsemployeesScalarWhereInput[]
    OR?: hsemployeesScalarWhereInput[]
    NOT?: hsemployeesScalarWhereInput | hsemployeesScalarWhereInput[]
    id?: IntFilter<"hsemployees"> | number
    branch_id?: IntFilter<"hsemployees"> | number
    access_level?: IntFilter<"hsemployees"> | number
    winthor_id?: IntFilter<"hsemployees"> | number
    name?: StringFilter<"hsemployees"> | string
    username?: StringFilter<"hsemployees"> | string
    password?: StringFilter<"hsemployees"> | string
    created_at?: DateTimeFilter<"hsemployees"> | Date | string
    modified_at?: DateTimeFilter<"hsemployees"> | Date | string
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

  export type hsemployeesCreateWithoutBranchInput = {
    winthor_id?: number
    name: string
    username: string
    password: string
    created_at?: Date | string
    modified_at?: Date | string
    hsaccess_level: hsaccess_levelsCreateNestedOneWithoutHsemployeesInput
    analystRequests?: hsvalidity_requestsCreateNestedManyWithoutAnalystInput
    confereeRequests?: hsvalidity_requestsCreateNestedManyWithoutConfereeInput
    sessions?: hssessionsCreateNestedManyWithoutUserInput
    hsvalidities?: hsvaliditiesCreateNestedManyWithoutHsemployeesInput
  }

  export type hsemployeesUncheckedCreateWithoutBranchInput = {
    id?: number
    access_level: number
    winthor_id?: number
    name: string
    username: string
    password: string
    created_at?: Date | string
    modified_at?: Date | string
    analystRequests?: hsvalidity_requestsUncheckedCreateNestedManyWithoutAnalystInput
    confereeRequests?: hsvalidity_requestsUncheckedCreateNestedManyWithoutConfereeInput
    sessions?: hssessionsUncheckedCreateNestedManyWithoutUserInput
    hsvalidities?: hsvaliditiesUncheckedCreateNestedManyWithoutHsemployeesInput
  }

  export type hsemployeesCreateOrConnectWithoutBranchInput = {
    where: hsemployeesWhereUniqueInput
    create: XOR<hsemployeesCreateWithoutBranchInput, hsemployeesUncheckedCreateWithoutBranchInput>
  }

  export type hsemployeesCreateManyBranchInputEnvelope = {
    data: hsemployeesCreateManyBranchInput | hsemployeesCreateManyBranchInput[]
    skipDuplicates?: boolean
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

  export type hsbranchesCreateWithoutHsvaliditiesInput = {
    description: string
    hsvalidity_requests?: hsvalidity_requestsCreateNestedManyWithoutHsbranchesInput
    hsemployees?: hsemployeesCreateNestedManyWithoutBranchInput
  }

  export type hsbranchesUncheckedCreateWithoutHsvaliditiesInput = {
    id?: number
    description: string
    hsvalidity_requests?: hsvalidity_requestsUncheckedCreateNestedManyWithoutHsbranchesInput
    hsemployees?: hsemployeesUncheckedCreateNestedManyWithoutBranchInput
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
    hsaccess_level: hsaccess_levelsCreateNestedOneWithoutHsemployeesInput
    analystRequests?: hsvalidity_requestsCreateNestedManyWithoutAnalystInput
    confereeRequests?: hsvalidity_requestsCreateNestedManyWithoutConfereeInput
    sessions?: hssessionsCreateNestedManyWithoutUserInput
  }

  export type hsemployeesUncheckedCreateWithoutHsvaliditiesInput = {
    id?: number
    branch_id: number
    access_level: number
    winthor_id?: number
    name: string
    username: string
    password: string
    created_at?: Date | string
    modified_at?: Date | string
    analystRequests?: hsvalidity_requestsUncheckedCreateNestedManyWithoutAnalystInput
    confereeRequests?: hsvalidity_requestsUncheckedCreateNestedManyWithoutConfereeInput
    sessions?: hssessionsUncheckedCreateNestedManyWithoutUserInput
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
    conferee: hsemployeesCreateNestedOneWithoutConfereeRequestsInput
    hsbranches: hsbranchesCreateNestedOneWithoutHsvalidity_requestsInput
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
    hsvalidity_treatments?: hsvalidity_treatmentsCreateNestedOneWithoutHsvalidity_productsInput
  }

  export type hsvalidity_productsUncheckedCreateWithoutHsvaliditiesInput = {
    id?: number
    product_cod: number
    quantity: number
    validity_date: Date | string
    treat_id?: number
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
    hsvalidity_requests?: hsvalidity_requestsUpdateManyWithoutHsbranchesNestedInput
    hsemployees?: hsemployeesUpdateManyWithoutBranchNestedInput
  }

  export type hsbranchesUncheckedUpdateWithoutHsvaliditiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    hsvalidity_requests?: hsvalidity_requestsUncheckedUpdateManyWithoutHsbranchesNestedInput
    hsemployees?: hsemployeesUncheckedUpdateManyWithoutBranchNestedInput
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
    hsaccess_level?: hsaccess_levelsUpdateOneRequiredWithoutHsemployeesNestedInput
    analystRequests?: hsvalidity_requestsUpdateManyWithoutAnalystNestedInput
    confereeRequests?: hsvalidity_requestsUpdateManyWithoutConfereeNestedInput
    sessions?: hssessionsUpdateManyWithoutUserNestedInput
  }

  export type hsemployeesUncheckedUpdateWithoutHsvaliditiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    branch_id?: IntFieldUpdateOperationsInput | number
    access_level?: IntFieldUpdateOperationsInput | number
    winthor_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    analystRequests?: hsvalidity_requestsUncheckedUpdateManyWithoutAnalystNestedInput
    confereeRequests?: hsvalidity_requestsUncheckedUpdateManyWithoutConfereeNestedInput
    sessions?: hssessionsUncheckedUpdateManyWithoutUserNestedInput
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
    conferee?: hsemployeesUpdateOneRequiredWithoutConfereeRequestsNestedInput
    hsbranches?: hsbranchesUpdateOneRequiredWithoutHsvalidity_requestsNestedInput
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
  }

  export type hsvalidity_request_productsUncheckedCreateWithoutHsvalidity_requestsInput = {
    id?: number
    status?: $Enums.hsvalidity_request_products_status
    product_cod: number
    validity_date: Date | string
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
    hsaccess_level: hsaccess_levelsCreateNestedOneWithoutHsemployeesInput
    confereeRequests?: hsvalidity_requestsCreateNestedManyWithoutConfereeInput
    sessions?: hssessionsCreateNestedManyWithoutUserInput
    hsvalidities?: hsvaliditiesCreateNestedManyWithoutHsemployeesInput
  }

  export type hsemployeesUncheckedCreateWithoutAnalystRequestsInput = {
    id?: number
    branch_id: number
    access_level: number
    winthor_id?: number
    name: string
    username: string
    password: string
    created_at?: Date | string
    modified_at?: Date | string
    confereeRequests?: hsvalidity_requestsUncheckedCreateNestedManyWithoutConfereeInput
    sessions?: hssessionsUncheckedCreateNestedManyWithoutUserInput
    hsvalidities?: hsvaliditiesUncheckedCreateNestedManyWithoutHsemployeesInput
  }

  export type hsemployeesCreateOrConnectWithoutAnalystRequestsInput = {
    where: hsemployeesWhereUniqueInput
    create: XOR<hsemployeesCreateWithoutAnalystRequestsInput, hsemployeesUncheckedCreateWithoutAnalystRequestsInput>
  }

  export type hsemployeesCreateWithoutConfereeRequestsInput = {
    winthor_id?: number
    name: string
    username: string
    password: string
    created_at?: Date | string
    modified_at?: Date | string
    branch: hsbranchesCreateNestedOneWithoutHsemployeesInput
    hsaccess_level: hsaccess_levelsCreateNestedOneWithoutHsemployeesInput
    analystRequests?: hsvalidity_requestsCreateNestedManyWithoutAnalystInput
    sessions?: hssessionsCreateNestedManyWithoutUserInput
    hsvalidities?: hsvaliditiesCreateNestedManyWithoutHsemployeesInput
  }

  export type hsemployeesUncheckedCreateWithoutConfereeRequestsInput = {
    id?: number
    branch_id: number
    access_level: number
    winthor_id?: number
    name: string
    username: string
    password: string
    created_at?: Date | string
    modified_at?: Date | string
    analystRequests?: hsvalidity_requestsUncheckedCreateNestedManyWithoutAnalystInput
    sessions?: hssessionsUncheckedCreateNestedManyWithoutUserInput
    hsvalidities?: hsvaliditiesUncheckedCreateNestedManyWithoutHsemployeesInput
  }

  export type hsemployeesCreateOrConnectWithoutConfereeRequestsInput = {
    where: hsemployeesWhereUniqueInput
    create: XOR<hsemployeesCreateWithoutConfereeRequestsInput, hsemployeesUncheckedCreateWithoutConfereeRequestsInput>
  }

  export type hsbranchesCreateWithoutHsvalidity_requestsInput = {
    description: string
    hsvalidities?: hsvaliditiesCreateNestedManyWithoutHsbranchesInput
    hsemployees?: hsemployeesCreateNestedManyWithoutBranchInput
  }

  export type hsbranchesUncheckedCreateWithoutHsvalidity_requestsInput = {
    id?: number
    description: string
    hsvalidities?: hsvaliditiesUncheckedCreateNestedManyWithoutHsbranchesInput
    hsemployees?: hsemployeesUncheckedCreateNestedManyWithoutBranchInput
  }

  export type hsbranchesCreateOrConnectWithoutHsvalidity_requestsInput = {
    where: hsbranchesWhereUniqueInput
    create: XOR<hsbranchesCreateWithoutHsvalidity_requestsInput, hsbranchesUncheckedCreateWithoutHsvalidity_requestsInput>
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
    hsaccess_level?: hsaccess_levelsUpdateOneRequiredWithoutHsemployeesNestedInput
    confereeRequests?: hsvalidity_requestsUpdateManyWithoutConfereeNestedInput
    sessions?: hssessionsUpdateManyWithoutUserNestedInput
    hsvalidities?: hsvaliditiesUpdateManyWithoutHsemployeesNestedInput
  }

  export type hsemployeesUncheckedUpdateWithoutAnalystRequestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    branch_id?: IntFieldUpdateOperationsInput | number
    access_level?: IntFieldUpdateOperationsInput | number
    winthor_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    confereeRequests?: hsvalidity_requestsUncheckedUpdateManyWithoutConfereeNestedInput
    sessions?: hssessionsUncheckedUpdateManyWithoutUserNestedInput
    hsvalidities?: hsvaliditiesUncheckedUpdateManyWithoutHsemployeesNestedInput
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
    hsaccess_level?: hsaccess_levelsUpdateOneRequiredWithoutHsemployeesNestedInput
    analystRequests?: hsvalidity_requestsUpdateManyWithoutAnalystNestedInput
    sessions?: hssessionsUpdateManyWithoutUserNestedInput
    hsvalidities?: hsvaliditiesUpdateManyWithoutHsemployeesNestedInput
  }

  export type hsemployeesUncheckedUpdateWithoutConfereeRequestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    branch_id?: IntFieldUpdateOperationsInput | number
    access_level?: IntFieldUpdateOperationsInput | number
    winthor_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    analystRequests?: hsvalidity_requestsUncheckedUpdateManyWithoutAnalystNestedInput
    sessions?: hssessionsUncheckedUpdateManyWithoutUserNestedInput
    hsvalidities?: hsvaliditiesUncheckedUpdateManyWithoutHsemployeesNestedInput
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
    hsvalidities?: hsvaliditiesUpdateManyWithoutHsbranchesNestedInput
    hsemployees?: hsemployeesUpdateManyWithoutBranchNestedInput
  }

  export type hsbranchesUncheckedUpdateWithoutHsvalidity_requestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    hsvalidities?: hsvaliditiesUncheckedUpdateManyWithoutHsbranchesNestedInput
    hsemployees?: hsemployeesUncheckedUpdateManyWithoutBranchNestedInput
  }

  export type hsvalidity_requestsCreateWithoutHsvalidity_request_productsInput = {
    status?: $Enums.hsvalidity_requests_status
    created_at?: Date | string
    modified_at?: Date | string
    hsvalidities?: hsvaliditiesCreateNestedManyWithoutHsvalidity_requestsInput
    analyst: hsemployeesCreateNestedOneWithoutAnalystRequestsInput
    conferee: hsemployeesCreateNestedOneWithoutConfereeRequestsInput
    hsbranches: hsbranchesCreateNestedOneWithoutHsvalidity_requestsInput
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
    conferee?: hsemployeesUpdateOneRequiredWithoutConfereeRequestsNestedInput
    hsbranches?: hsbranchesUpdateOneRequiredWithoutHsvalidity_requestsNestedInput
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
    hsvalidities: hsvaliditiesCreateNestedOneWithoutHsvalidity_productsInput
  }

  export type hsvalidity_productsUncheckedCreateWithoutHsvalidity_treatmentsInput = {
    id?: number
    validity_id: number
    product_cod: number
    quantity: number
    validity_date: Date | string
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

  export type hsaccess_levelsCreateWithoutHsemployeesInput = {
    description: string
  }

  export type hsaccess_levelsUncheckedCreateWithoutHsemployeesInput = {
    id?: number
    description: string
  }

  export type hsaccess_levelsCreateOrConnectWithoutHsemployeesInput = {
    where: hsaccess_levelsWhereUniqueInput
    create: XOR<hsaccess_levelsCreateWithoutHsemployeesInput, hsaccess_levelsUncheckedCreateWithoutHsemployeesInput>
  }

  export type hsvalidity_requestsCreateWithoutAnalystInput = {
    status?: $Enums.hsvalidity_requests_status
    created_at?: Date | string
    modified_at?: Date | string
    hsvalidities?: hsvaliditiesCreateNestedManyWithoutHsvalidity_requestsInput
    hsvalidity_request_products?: hsvalidity_request_productsCreateNestedManyWithoutHsvalidity_requestsInput
    conferee: hsemployeesCreateNestedOneWithoutConfereeRequestsInput
    hsbranches: hsbranchesCreateNestedOneWithoutHsvalidity_requestsInput
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

  export type hsaccess_levelsUpsertWithoutHsemployeesInput = {
    update: XOR<hsaccess_levelsUpdateWithoutHsemployeesInput, hsaccess_levelsUncheckedUpdateWithoutHsemployeesInput>
    create: XOR<hsaccess_levelsCreateWithoutHsemployeesInput, hsaccess_levelsUncheckedCreateWithoutHsemployeesInput>
    where?: hsaccess_levelsWhereInput
  }

  export type hsaccess_levelsUpdateToOneWithWhereWithoutHsemployeesInput = {
    where?: hsaccess_levelsWhereInput
    data: XOR<hsaccess_levelsUpdateWithoutHsemployeesInput, hsaccess_levelsUncheckedUpdateWithoutHsemployeesInput>
  }

  export type hsaccess_levelsUpdateWithoutHsemployeesInput = {
    description?: StringFieldUpdateOperationsInput | string
  }

  export type hsaccess_levelsUncheckedUpdateWithoutHsemployeesInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
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

  export type hsemployeesCreateWithoutSessionsInput = {
    winthor_id?: number
    name: string
    username: string
    password: string
    created_at?: Date | string
    modified_at?: Date | string
    branch: hsbranchesCreateNestedOneWithoutHsemployeesInput
    hsaccess_level: hsaccess_levelsCreateNestedOneWithoutHsemployeesInput
    analystRequests?: hsvalidity_requestsCreateNestedManyWithoutAnalystInput
    confereeRequests?: hsvalidity_requestsCreateNestedManyWithoutConfereeInput
    hsvalidities?: hsvaliditiesCreateNestedManyWithoutHsemployeesInput
  }

  export type hsemployeesUncheckedCreateWithoutSessionsInput = {
    id?: number
    branch_id: number
    access_level: number
    winthor_id?: number
    name: string
    username: string
    password: string
    created_at?: Date | string
    modified_at?: Date | string
    analystRequests?: hsvalidity_requestsUncheckedCreateNestedManyWithoutAnalystInput
    confereeRequests?: hsvalidity_requestsUncheckedCreateNestedManyWithoutConfereeInput
    hsvalidities?: hsvaliditiesUncheckedCreateNestedManyWithoutHsemployeesInput
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
    hsaccess_level?: hsaccess_levelsUpdateOneRequiredWithoutHsemployeesNestedInput
    analystRequests?: hsvalidity_requestsUpdateManyWithoutAnalystNestedInput
    confereeRequests?: hsvalidity_requestsUpdateManyWithoutConfereeNestedInput
    hsvalidities?: hsvaliditiesUpdateManyWithoutHsemployeesNestedInput
  }

  export type hsemployeesUncheckedUpdateWithoutSessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    branch_id?: IntFieldUpdateOperationsInput | number
    access_level?: IntFieldUpdateOperationsInput | number
    winthor_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    analystRequests?: hsvalidity_requestsUncheckedUpdateManyWithoutAnalystNestedInput
    confereeRequests?: hsvalidity_requestsUncheckedUpdateManyWithoutConfereeNestedInput
    hsvalidities?: hsvaliditiesUncheckedUpdateManyWithoutHsemployeesNestedInput
  }

  export type hsemployeesCreateManyHsaccess_levelInput = {
    id?: number
    branch_id: number
    winthor_id?: number
    name: string
    username: string
    password: string
    created_at?: Date | string
    modified_at?: Date | string
  }

  export type hsemployeesUpdateWithoutHsaccess_levelInput = {
    winthor_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: hsbranchesUpdateOneRequiredWithoutHsemployeesNestedInput
    analystRequests?: hsvalidity_requestsUpdateManyWithoutAnalystNestedInput
    confereeRequests?: hsvalidity_requestsUpdateManyWithoutConfereeNestedInput
    sessions?: hssessionsUpdateManyWithoutUserNestedInput
    hsvalidities?: hsvaliditiesUpdateManyWithoutHsemployeesNestedInput
  }

  export type hsemployeesUncheckedUpdateWithoutHsaccess_levelInput = {
    id?: IntFieldUpdateOperationsInput | number
    branch_id?: IntFieldUpdateOperationsInput | number
    winthor_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    analystRequests?: hsvalidity_requestsUncheckedUpdateManyWithoutAnalystNestedInput
    confereeRequests?: hsvalidity_requestsUncheckedUpdateManyWithoutConfereeNestedInput
    sessions?: hssessionsUncheckedUpdateManyWithoutUserNestedInput
    hsvalidities?: hsvaliditiesUncheckedUpdateManyWithoutHsemployeesNestedInput
  }

  export type hsemployeesUncheckedUpdateManyWithoutHsaccess_levelInput = {
    id?: IntFieldUpdateOperationsInput | number
    branch_id?: IntFieldUpdateOperationsInput | number
    winthor_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type hsemployeesCreateManyBranchInput = {
    id?: number
    access_level: number
    winthor_id?: number
    name: string
    username: string
    password: string
    created_at?: Date | string
    modified_at?: Date | string
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

  export type hsemployeesUpdateWithoutBranchInput = {
    winthor_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    hsaccess_level?: hsaccess_levelsUpdateOneRequiredWithoutHsemployeesNestedInput
    analystRequests?: hsvalidity_requestsUpdateManyWithoutAnalystNestedInput
    confereeRequests?: hsvalidity_requestsUpdateManyWithoutConfereeNestedInput
    sessions?: hssessionsUpdateManyWithoutUserNestedInput
    hsvalidities?: hsvaliditiesUpdateManyWithoutHsemployeesNestedInput
  }

  export type hsemployeesUncheckedUpdateWithoutBranchInput = {
    id?: IntFieldUpdateOperationsInput | number
    access_level?: IntFieldUpdateOperationsInput | number
    winthor_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    analystRequests?: hsvalidity_requestsUncheckedUpdateManyWithoutAnalystNestedInput
    confereeRequests?: hsvalidity_requestsUncheckedUpdateManyWithoutConfereeNestedInput
    sessions?: hssessionsUncheckedUpdateManyWithoutUserNestedInput
    hsvalidities?: hsvaliditiesUncheckedUpdateManyWithoutHsemployeesNestedInput
  }

  export type hsemployeesUncheckedUpdateManyWithoutBranchInput = {
    id?: IntFieldUpdateOperationsInput | number
    access_level?: IntFieldUpdateOperationsInput | number
    winthor_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type hsvalidity_productsCreateManyHsvaliditiesInput = {
    id?: number
    product_cod: number
    quantity: number
    validity_date: Date | string
    treat_id?: number
  }

  export type hsvalidity_productsUpdateWithoutHsvaliditiesInput = {
    product_cod?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    validity_date?: DateTimeFieldUpdateOperationsInput | Date | string
    hsvalidity_treatments?: hsvalidity_treatmentsUpdateOneRequiredWithoutHsvalidity_productsNestedInput
  }

  export type hsvalidity_productsUncheckedUpdateWithoutHsvaliditiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_cod?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    validity_date?: DateTimeFieldUpdateOperationsInput | Date | string
    treat_id?: IntFieldUpdateOperationsInput | number
  }

  export type hsvalidity_productsUncheckedUpdateManyWithoutHsvaliditiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_cod?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    validity_date?: DateTimeFieldUpdateOperationsInput | Date | string
    treat_id?: IntFieldUpdateOperationsInput | number
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
  }

  export type hsvalidity_request_productsUncheckedUpdateWithoutHsvalidity_requestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: Enumhsvalidity_request_products_statusFieldUpdateOperationsInput | $Enums.hsvalidity_request_products_status
    product_cod?: IntFieldUpdateOperationsInput | number
    validity_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type hsvalidity_request_productsUncheckedUpdateManyWithoutHsvalidity_requestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: Enumhsvalidity_request_products_statusFieldUpdateOperationsInput | $Enums.hsvalidity_request_products_status
    product_cod?: IntFieldUpdateOperationsInput | number
    validity_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type hsvalidity_productsCreateManyHsvalidity_treatmentsInput = {
    id?: number
    validity_id: number
    product_cod: number
    quantity: number
    validity_date: Date | string
  }

  export type hsvalidity_productsUpdateWithoutHsvalidity_treatmentsInput = {
    product_cod?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    validity_date?: DateTimeFieldUpdateOperationsInput | Date | string
    hsvalidities?: hsvaliditiesUpdateOneRequiredWithoutHsvalidity_productsNestedInput
  }

  export type hsvalidity_productsUncheckedUpdateWithoutHsvalidity_treatmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    validity_id?: IntFieldUpdateOperationsInput | number
    product_cod?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    validity_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type hsvalidity_productsUncheckedUpdateManyWithoutHsvalidity_treatmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    validity_id?: IntFieldUpdateOperationsInput | number
    product_cod?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    validity_date?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type hssessionsCreateManyUserInput = {
    id?: string
    token: string
    created_at?: Date | string
    expires_at?: Date | string | null
  }

  export type hsvaliditiesCreateManyHsemployeesInput = {
    id?: number
    branch_id: number
    status?: $Enums.hsvalidities_status
    request_id?: number | null
    created_at?: Date | string
    modified_at?: Date | string
  }

  export type hsvalidity_requestsUpdateWithoutAnalystInput = {
    status?: Enumhsvalidity_requests_statusFieldUpdateOperationsInput | $Enums.hsvalidity_requests_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    hsvalidities?: hsvaliditiesUpdateManyWithoutHsvalidity_requestsNestedInput
    hsvalidity_request_products?: hsvalidity_request_productsUpdateManyWithoutHsvalidity_requestsNestedInput
    conferee?: hsemployeesUpdateOneRequiredWithoutConfereeRequestsNestedInput
    hsbranches?: hsbranchesUpdateOneRequiredWithoutHsvalidity_requestsNestedInput
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