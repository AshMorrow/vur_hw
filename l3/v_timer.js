Vue.directive('timer', {
   bind(el, options) {
       var delay = options.arg,
           repeatQuantity = null,
           run = false,
           fontSize = 25;

       for (var modifiere in options.modifiers ) {
           if (parseInt(modifiere)) {
               repeatQuantity = modifiere;
           } else if (modifiere == 'run') {
               run = true;
           }
       }

       if (run) {
           fontSize += fontSize * 0.05;
           options.value.call(this, el, fontSize);
       }

       var intervalHandler = setInterval(function () {
           if (repeatQuantity != null && repeatQuantity == 0) {
               clearInterval(intervalHandler);
           } else if (repeatQuantity != null && repeatQuantity > 0) {
               repeatQuantity--;
           }
           fontSize += fontSize * 0.05;
           options.value.call(this, el, fontSize);
       }, delay);

   }
});

var timer = new Vue({
   el: '#l3_timer',
    methods: {
      onTimer: function (el, fontSize) {
          el.style = 'font-size: ' + fontSize + 'px';
      }
    }
});