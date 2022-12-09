import {Preferences} from '@capacitor/preferences';

export async function set (key, value) {
  await Preferences.set({
    key, value
  });
}

export async function get(key) {
  return await Preferences.get({key})
}

export async function remove(key) {
  await Preferences.remove({key})
}
