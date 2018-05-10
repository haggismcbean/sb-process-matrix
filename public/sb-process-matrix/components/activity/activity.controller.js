/**
 * Activity component controller
 */
class ActivityController {

  constructor () {
    console.log('Activity Controller is alive');
  }

  /**
   * input bindings are ready
   *
   * @return {undefined} undefined
   */
  $onInit () {
    console.log('input bindings are defined!', this.data);
  }
}

export { ActivityController }