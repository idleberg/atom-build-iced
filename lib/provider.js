'use babel';

import {exec} from 'child_process';

// Package settings
import meta from '../package.json';
const debug = atom.config.get(`${meta.name}.debug`);
const notEligible = `**${meta.name}**: \`coffee\` is not in your PATH`;

// This package depends on build, make sure it's installed
module.exports = {
  activate() {
    require('atom-package-deps').install(meta.name);
  }
};

export function provideBuilder() {
  return class IcedCoffeeProvider {
    constructor(cwd) {
      this.cwd = cwd;
    }

    getNiceName() {
      return 'IcedCoffeeScript';
    }

    isEligible() {
      exec('iced --version', function (error, stdout, stderr) {
        if (error !== null) {
          // No IcedCoffeeScript installed
          if (debug === true) atom.notifications.addError(notEligible, { detail: error, dismissable: true });
          return false;
        }
        if (debug === true) atom.notifications.addInfo(`**${meta.name}**`, { detail: stdout, dismissable: false });
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
