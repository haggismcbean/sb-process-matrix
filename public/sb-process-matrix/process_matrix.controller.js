/**
 * Main component controller
 */
class ProcessMatrixController {

  constructor (sbDeliverables) {
    this.sbDeliverables = sbDeliverables;
    this.progressChange = this.getProgressChangeCallback();
  }

  /**
   * input bindings are ready
   *
   * @return {undefined} undefined
   */
  $onInit () {
    // console.log('input bindings are defined!', this.sbModel);
  }

  getProgressChangeCallback() {
    return function(activity) {
      return this.sbDeliverables
        .changeTaskProgress(activity, activity.progress)
      }.bind(this)
  }
}

ProcessMatrixController.$inject = ['sbDeliverables'];

export { ProcessMatrixController }