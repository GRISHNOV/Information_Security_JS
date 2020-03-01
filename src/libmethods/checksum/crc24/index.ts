import { crc24 } from 'crc';
import { TypesCheckSum } from 'libmethods/checksum';

export function getCRC24(text: string): TypesCheckSum {
  return { 'CRC-24': crc24(text) };
}
