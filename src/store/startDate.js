import {get, set} from "./storage.js";

export async function setStartDate(startDateStore) {
  var startDateValue = await get("startDate")
  if (startDateValue.value != null) {
    startDateStore.set(new Date(startDateValue.value));
  }
  startDateStore.subscribe(async function updateStartDate(value) {
    await set("startDate", value)
  })
}