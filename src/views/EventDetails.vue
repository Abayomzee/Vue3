<template>
  <div>
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>

<script>
import EventService from "@/services/EventServices.js";

export default {
  name: "EventDetails",
  props: ["id"],
  data() {
    return {
      event: Object,
    };
  },
  created() {
    EventService.getEvent(this.id).then((response) => {
      this.event = response.data;
    });
  },
};
</script>

<style scoped></style>
