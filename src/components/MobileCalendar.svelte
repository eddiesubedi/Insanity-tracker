<script>
  import { swipe } from 'svelte-gestures';
  import {startDate} from "../store/stores.js";
  import {Calendar} from "./calendar.js";

  var calendar = Calendar(startDate);

  $: weekCalendar = calendar.getWeekCalendar()
  $: month = calendar.getMonth()
  $: year = calendar.getYear()
  $: translateX = 0

  function next() {
    // weekCalendar = calendar.getNextWeekCalendar();
    // month = calendar.getMonth();
    // year = calendar.getYear();
    handler({
      detail: {
        direction: 'left'
      }
    })
  }

  function prev() {
    // weekCalendar = calendar.getPrevWeekCalendar();
    // month = calendar.getMonth();
    // year = calendar.getYear();
    handler({
      detail: {
        direction: 'right'
      }
    })
  }

  function handler({detail}) {
    var {direction} = detail;
    console.log(direction)
    if(direction=='left') {
      translateX = -50
    } else {
      translateX = 0
    }
  }
</script>

<h2 class="text-center">{month.long}, {year}</h2>
<div class="flex w-[200%] -mx-3 select-none transition-transform" style="transform:translateX({translateX}%)">
  <div use:swipe={{ timeframe: 1000, minSwipeDistance: 60 }} on:swipe={handler}
       class="flex justify-between mt-2 w-full">
    {#each weekCalendar as week}
      <div class="{week.isToday ? 'font-bold bg-[#F5F6FA]': ''} flex flex-col items-center py-5 px-3 rounded-lg text-[#283140]">
        <p>{week.day}</p>
        <p>{week.weekday}</p>
      </div>
    {/each}
  </div>
  <div class="flex justify-between mt-2 w-full">
    {#each weekCalendar as week}
      <div class="{week.isToday ? 'font-bold bg-red-500': ''} flex flex-col items-center py-5 px-3 rounded-lg text-[#283140]">
        <p>{week.day}</p>
        <p>{week.weekday}</p>
      </div>
    {/each}
  </div>
</div>
<button class="mt-10 border-4 px-5 py-2 bg-[#DFECF5] border-transparent rounded-lg" on:click={prev}>Prev</button>
<button class="mt-10 border-4 px-5 py-2 bg-[#EDE5F2] border-transparent rounded-lg ml-3" on:click={next}>Next</button>


