<script>
  import {startDate} from "../store/stores.js";
  import {Calendar} from "./calendar.js";
  var calendar = Calendar(startDate);

  $: weekCalendar = calendar.getWeekCalendar()
  $: month = calendar.getMonth()
  $: year = calendar.getYear()

  function next() {
    weekCalendar = calendar.getNextWeekCalendar();
    month = calendar.getMonth();
    year = calendar.getYear();
  }
</script>

<h2 class="text-center">{month.long}, {year}</h2>
<div class="flex justify-between mt-2 -mx-3">
  {#each weekCalendar as week}
    <div class="{week.isToday ? 'font-bold bg-[#F5F6FA]': ''} flex flex-col items-center py-5 px-3 rounded-lg text-[#283140]">
      <p>{week.day}</p>
      <p>{week.weekday}</p>
    </div>
  {/each}
</div>
<button class="mt-10 border-4 px-5 py-2 bg-[#DFECF5] border-transparent rounded-lg" on:click={next}>Prev</button>
<button class="mt-10 border-4 px-5 py-2 bg-[#EDE5F2] border-transparent rounded-lg ml-3" on:click={next}>Next</button>


