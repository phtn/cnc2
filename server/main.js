import { Meteor } from 'meteor/meteor';
import { Messages } from '/collections/msg';

Meteor.startup(() => {
  Meteor.methods({
    insertMsg(num){
      var d = new Date()
      var m = Messages.insert({
        text: num,
        createAt: d.toLocaleString()
      });
      return m;
    },
    removeAll() {
      Messages.remove({})
    }
  })
});

/*


  */
