import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  subrouteLowercased: computed('subroute', function() {
    return this.get('subroute').toLowerCase();
  })
});
