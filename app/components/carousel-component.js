import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  // passed in
  selectedData: null,
  selectedIndex: 0,
  goRight: null,

  disableToRight: computed('selectedIndex', function() {
    return (this.get('model').length - 1) == this.get('selectedIndex');
  }),

  disableToLeft: computed('selectedIndex', function() {
    return 0 == this.get('selectedIndex');
  }),

  init() {
    this.set('selectedData', this.get('model').firstObject);
    this._super(...arguments);
  },

  actions: {
    changeIsEditing() {
      this.set('isEditing', !this.get('isEditing'));
    },

    next() {
      this.set('selectedIndex', this.get('selectedIndex') + 1);
      this.set('selectedData', this.get('model')[this.get('selectedIndex')]);
      this.set('goRight', true);
    },

    previous() {
      this.set('selectedIndex', this.get('selectedIndex') - 1);
      this.set('selectedData', this.get('model')[this.get('selectedIndex')]);
      this.set('goRight', false);
    }
  }
});
