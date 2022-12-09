import {get, set} from "./storage.js";

var workouts = ["Fit Test","Plyometric Cardio Circuit","Cardio Power & Resistance","Cardio Recovery","Pure Cardio","Plyometric Cardio Circuit","Rest","Cardio Power & Resistance","Pure Cardio","Plyometric Cardio Circuit","Cardio Recovery","Cardio Power & Resistance","Pure Cardio & Cardio Abs","Rest","Fit Test","Plyometric Cardio Circuit","Pure Cardio & Cardio Abs","Cardio Recovery","Cardio Power & Resistance","Plyometric Cardio Circuit","Rest","Pure Cardio & Cardio Abs","Cardio Power & Resistance","Plyometric Cardio Circuit","Cardio Recovery","Pure Cardio & Cardio Abs","Plyometric Cardio Circuit","Rest","Core Cardio & Balance","Core Cardio & Balance","Core Cardio & Balance","Core Cardio & Balance","Core Cardio & Balance","Core Cardio & Balance","Core Cardio & Balance","Fit Test & Max Interval Circuit","Max Interval Plyo","Max Cardio Conditioning","Max Recovery","Max Interval Circuit","Max Interval Plyo","Rest","Max Cardio Conditioning","Max Interval Circuit","Max Interval Plyo","Max Recovery","Max Cardio Conditioning & Cardio Abs","Core Cardio & Balance","Rest","Fit Test & Max Interval Circuit","Max Interval Plyo","Max Cardio Conditioning & Cardio Abs","Max Recovery","Max Interval Circuit","Core Cardio & Balance","Rest","Max Interval Plyo","Max Cardio Conditioning & Cardio Abs","Max Interval Circuit","Core Cardio & Balance","Max Interval Plyo","Max Cardio Conditioning & Cardio Abs"]
export function calculateWorkoutDays(startDate) {
  var nextDate = new Date(startDate)
  var workoutWithDates = {}
  workouts.forEach(workout => {
    workoutWithDates[`${nextDate.getMonth()}${nextDate.getDate()}${nextDate.getFullYear()}`] = {
      workout,
      completed: false
    }
    nextDate.setDate(nextDate.getDate() + 1)
  })
  return workoutWithDates;
}

export async function setWorkouts(workoutsStore) {
  var workouts = await get("workouts")
  if (workouts.value != null) {
    workoutsStore.set(JSON.parse(workouts.value));
  }

  workoutsStore.subscribe(async function updateStartDate(value) {
    await set("workouts", JSON.stringify(value))
  })
}