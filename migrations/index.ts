import * as migration_20261013_233435_initial from './20261013_233435_initial';
import * as migration_20261117_010559_add_reset_password_requested_at from './20261117_010559_add_reset_password_requested_at';
import * as migration_20261117_012733_add_media_objectkey from './20261117_012733_add_media_objectkey';

export const migrations = [
  {
    up: migration_20261013_233435_initial.up,
    down: migration_20261013_233435_initial.down,
    name: '20261013_233435_initial',
  },
  {
    up: migration_20261117_010559_add_reset_password_requested_at.up,
    down: migration_20261117_010559_add_reset_password_requested_at.down,
    name: '20261117_010559_add_reset_password_requested_at',
  },
  {
    up: migration_20261117_012733_add_media_objectkey.up,
    down: migration_20261117_012733_add_media_objectkey.down,
    name: '20261117_012733_add_media_objectkey'
  },
];
