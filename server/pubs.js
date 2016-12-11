import { Meteor } from 'meteor/meteor';
import { Messages } from '/collections/msg';

Meteor.publish('showMessages', ()=> {
	return Messages.find();
});
