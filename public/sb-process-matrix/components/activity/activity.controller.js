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
    this.onProgressChange(this.data)
      .then((response) => {
        this.data.lastProgress = this.data.progress;
      })
      .catch((error) => {
        this.data.progress = this.data.lastProgress;
      });
  }
}

export { ActivityController }