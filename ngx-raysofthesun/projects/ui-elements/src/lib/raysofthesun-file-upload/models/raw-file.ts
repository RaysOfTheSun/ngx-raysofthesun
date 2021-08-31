export interface RawFile {
  name: string;
  type: string;
  size: number;
  base64: string;
  invalid?: boolean;
  rejected?: boolean;
}
