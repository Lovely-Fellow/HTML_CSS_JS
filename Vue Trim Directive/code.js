Vue.directive("trim", {
  inserted: function(el) {
    var str = el.innerHTML;
    var resultString = str.split(' ').slice(0, 5).join(" ") + "...";
    el.innerHTML = resultString
  }
});

Vue.component("news-content", {
  template: '<p>{{content}}</p>',
  props: ['content']
});

var myApp = new Vue({
  el: "#app",
  data: function(){
    return {
       newsItems: [
        {
          title: "A News Item",
          content: "Some very interesting content that is really long and should be a lot shorter than it currently is."
        },
         
        {
          title: "A News Item",
          content: "Some very interesting content, that is really long and should be a lot shorter than it currently is."
        },
         
        {
          title: "A News Item",
          content: "Some very interesting content, that is really long and should be a lot shorter than it currently is."
        }
      ]
    }
  }
});
