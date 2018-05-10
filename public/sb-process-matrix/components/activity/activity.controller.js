/**
 * Activity component controller
 */
class ActivityController {

  constructor () {
  }

  /**
   * input bindings are ready
   *
   * @return {undefined} undefined
   */
  $onInit () {
    this.data.lastProgress = this.data.progress
  }

  onChange() {
    this.onProgressChange(this.data);
  }

  resetProgress(activity) {
    activity.progress = lastChangedProgress;
  }
}

export { ActivityController }