import * as migration_20250929_111647 from './20250929_111647';
import * as migration_20251219_020137 from './20251219_020137';
import * as migration_20251231_184638 from './20251231_184638';

export const migrations = [
  {
    up: migration_20250929_111647.up,
    down: migration_20250929_111647.down,
    name: '20250929_111647',
  },
  {
    up: migration_20251219_020137.up,
    down: migration_20251219_020137.down,
    name: '20251219_020137',
  },
  {
    up: migration_20251231_184638.up,
    down: migration_20251231_184638.down,
    name: '20251231_184638'
  },
];
