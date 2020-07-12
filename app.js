new Vue({
  el: '#app',
  data: {
    name: 'hai',
    website : 'https://www.google.com',
    typed : '',
    data : '',
    result : '',
    score : '0',
    total : '1',
    max : 20,
    flag : true,
    startTime : '',
    finishTime : ''
  },

  methods : {
    hello : function(data){
      return 'hiiiBye'+' '+data;
    },

    start : function(){
      var d = new Date();
      this.startTime = d.getTime();
      this.random();
    },

    get : function(){
      if(this.typed == this.data){
        this.result = 'success';
        this.score++;
      }else{
        this.result = 'Expected : '+this.data+'\nU have entered : '+this.typed;
      }
      if(this.total <= this.max){
        this.random();
    }else{
      var d = new Date();
      this.finishTime = d.getTime();
      this.flag = false;
      console.log(this.flag);
      var diff = Math.round((this.finishTime - this.startTime)/ (1000));
      this.result = 'Game is completed U have scored '+this.score+' out of '+this.max+'\nTotal TIme taken : '+diff+' seconds';
    }
  },

  random : function(){
    //ABCDEFGHIJKLMNOPQRSTUVWXYZ
  var characters       = 'abcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  var len = Math.random() * charactersLength;
  this.data = characters.charAt(len);
  this.typed = '';
  this.total++;
  }
}
});
