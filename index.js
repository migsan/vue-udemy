console.log('hello');

new Vue({
  el: '#app',
  data: {
    counter: 0,
    text: 'hello',
    attachRed: false
  },
  watch: {
    counter: function() {
      console.log('watch!');
      let vm = this;
      setTimeout(() => {
        vm.counter = 0;
      }, 1000);
    }
  }
});