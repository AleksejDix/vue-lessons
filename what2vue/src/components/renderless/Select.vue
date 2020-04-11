<script>
export default {
  data() {
    return {
      selected: 0
    }
  },
  methods: {
    select(value) {
      this.selected = value
    }
  },
  render() {
    return this.$scopedSlots.default({
      selected: this.selected,
      select: this.select
    })
  }
}
</script>
