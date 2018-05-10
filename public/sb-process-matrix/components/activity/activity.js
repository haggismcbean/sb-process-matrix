import componentTemplate from './activity.html'
import componentStyle from './activity.less'

import {ActivityController} from './activity.controller.js'

const bindings = {
  data: '<',
};

export const activityComponent = {
  controller: ActivityController,
  template: componentTemplate,
  bindings: bindings
};