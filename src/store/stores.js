import { writable, get } from "svelte/store";
import {browser} from "$app/environment";
import {setStartDate} from "./startDate.js";
import {calculateWorkoutDays, setWorkouts} from "./workouts.js";

export var startDate = writable(new Date());
export var loading = writable(true);
export var workouts = writable(calculateWorkoutDays(get(startDate)));
export var months = writable( ["January","February","March","April","May","June","July","August","September","October","November","December" ]);

(async function iffie() {
  if(browser) {
    await setStartDate(startDate)
    await setWorkouts(workouts)
    loading.set(false);
  }
})();