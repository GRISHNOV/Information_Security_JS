import { crc16, crc16ccitt, crc16kermit, crc16modbus, crc16xmodem } from 'crc';
import { TypesCheckSum } from 'libmethods/checksum';

function getCRC16_ARC(text: string): number {
  return crc16(text);
}

function getCRC16_CCITT_FALSE(text: string): number {
  return crc16ccitt(text);
}

function getCRC16_KERMIT(text: string): number {
  return crc16kermit(text);
}

function getCRC16_MODBUS(text: string): number {
  return crc16modbus(text);
}

function getCRC16_XMODEM(text: string): number {
  return crc16xmodem(text);
}

export function getCRC16(text: string): TypesCheckSum[] {
  return [
    { name: 'CRC-16', version: 'MODBUS', value: getCRC16_MODBUS(text) },
    { name: 'CRC-16', version: 'ARC', value: getCRC16_ARC(text) },
    { name: 'CRC-16', version: 'CCITT-FALSE', value: getCRC16_CCITT_FALSE(text) },
    { name: 'CRC-16', version: 'KERMIT', value: getCRC16_KERMIT(text) },
    { name: 'CRC-16', version: 'XMODEM', value: getCRC16_XMODEM(text) },
  ];
}
