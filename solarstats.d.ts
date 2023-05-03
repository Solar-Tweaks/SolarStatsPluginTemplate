import Command from './SolarStats/src/Classes/Command';
import PlayerModule from './SolarStats/src/player/PlayerModule';
import { Axios } from 'axios';
import LoggerClass from './SolarStats/src/Classes/Logger';
import { PluginInfo } from './SolarStats/src/utils/plugins';
import Inventory from './SolarStats/src/Classes/Inventory';
import { InventoryType } from './SolarStats/src/Types';
import Item from './SolarStats/src/Classes/Item';
import { getConfig, getConfigAsync } from './SolarStats/src/utils/config';
import Player from './SolarStats/src/player/Player';
import { StringComponentBuilder } from '@minecraft-js/chat';

export {};

declare global {
  const toolbox: Toolbox;
  const player: Player;

  const __package: PluginInfo;
  const __cwd: string;
  const __plugins: string;

  const Logger: LoggerClass;

  function registerPlugin(plugin: PluginInfo): void;
  function registerCommand(command: Command): void;
  function registerPlayerModule(module: PlayerModule): void;
  function requireModule(module: string): any;

  const dirFetch: typeof fetch;
  const axios: Axios;
}

interface Toolbox {
  Command: typeof Command;
  PlayerModule: typeof PlayerModule;
  Inventory: typeof Inventory;
  InventoryType: InventoryType;
  Item: typeof Item;
  Message: typeof StringComponentBuilder;
  getConfig: typeof getConfigAsync;
  getConfigSync: typeof getConfig;
  parseNBTData: (
    data: Buffer | string,
    nbtType?: 'big' | 'little' | 'littleVarint'
  ) => Promise<{
    parsed: {
      type: 'compound';
      value: any;
      name: string;
    };
    type: 'big' | 'little' | 'littleVarint';
    metadata: {
      buffer: Buffer;
      size: number;
    };
  }>;
}
