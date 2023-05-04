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
  var toolbox: Toolbox;
  var player: Player;

  var __package: PluginInfo;
  var __cwd: string;
  var __plugins: string;

  var Logger: LoggerClass;

  var registerPlugin: (plugin: PluginInfo) => void;
  var registerCommand: (command: Command) => void;
  var registerPlayerModule: (module: PlayerModule) => void;
  var requireModule: (module: string) => any;

  var dirFetch: typeof fetch;
  var axios: Axios;
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
