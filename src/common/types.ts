export type LineRange = {
  start: number
  end: number
  // When true, this range represents pure deletions (content was removed)
  isPureDeletion?: boolean
}

export type ReviewFile = {
  fileName: string
  fileContent: string
  changedLines: LineRange[]
}

export enum PlatformOptions {
  GITHUB = 'github',
  GITLAB = 'gitlab',
  AZDEV = 'azdev',
  LOCAL = 'local',
}

// Base arguments provided by yargs and global options
type BaseArgs = {
  ci?: PlatformOptions | string | undefined // Allow string initially, will be validated
  debug?: boolean
  _?: (string | number)[]
  $0?: string
}

// Arguments for the configure command
export type ConfigureArgs = BaseArgs & {
  setupTarget?: PlatformOptions | string // Allow string initially
}

// Arguments for the review command
export type ReviewArgs = BaseArgs & {
  modelString: string
  reviewLanguage: string
  platform: PlatformOptions | string
  maxSteps: number
  baseUrl?: string
}

export type ParsedArgs = ConfigureArgs | ReviewArgs
