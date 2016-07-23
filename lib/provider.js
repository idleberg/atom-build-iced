'use babel';

const self = '[build-iced] ';
const debug = atom.config.get('build-iced.debug');

import {exec} from 'child_process';

export function provideBuilder() {
  return class CoffeeProvider {
    constructor(cwd) {
      this.cwd = cwd;
    }

    getNiceName() {
      return 'IcedCoffeeScript';
    }

    isEligible() {
      exec('iced --version', function (error, stdout, stderr) {
        if (error !== null) {
          if (debug === true) console.log(self + error);
          // No IcedCoffeeScript installed
          return false;
        }
        if (debug === true) console.log(self + stdout);
      });

      return true;
    }

    settings() {
      const errorMatch = [
        '(?<file>([^:]+)):(?<line>\\d+):(?<col>\\d+): error: (?<message>.+)'
      ];

      const warningMatch = [
        '(?<file>([^:]+)):(?<line>\\d+):(?<col>\\d+): warning: (?<message>.+)'
      ];

      return [
        {
          name: 'IcedCoffeeScript',
          exec: 'iced',
          args: [ '--compile', '{FILE_ACTIVE}' ],
          cwd: '{FILE_ACTIVE_PATH}',
          sh: false,
          keymap: 'cmd-alt-b',
          atomCommandName: 'iced-coffeescript:compile',
          errorMatch: errorMatch,
          warningMatch: warningMatch
        },
        {
          name: 'IcedCoffeeScript --bare',
          exec: 'iced',
          args: [ '--compile', '--bare', '{FILE_ACTIVE}' ],
          cwd: '{FILE_ACTIVE_PATH}',
          sh: false,
          keymap: 'cmd-alt-shift-b',
          atomCommandName: 'iced-coffeescript:compile-bare',
          errorMatch: errorMatch,
          warningMatch: warningMatch
        },
        {
          name: 'IcedCoffeeScript --map',
          exec: 'iced',
          args: [ '--compile', '--map', '{FILE_ACTIVE}' ],
          cwd: '{FILE_ACTIVE_PATH}',
          sh: false,
          keymap: 'cmd-alt-cmd-b',
          atomCommandName: 'iced-coffeescript:compile-and-create-map',
          errorMatch: errorMatch,
          warningMatch: warningMatch
        }
      ];
    }
  };
}
