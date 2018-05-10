/**
 * Main component controller
 */
class ProcessMatrixController {

  constructor (sbDeliverables) {
    this.sbDeliverables = sbDeliverables;
  }

  /**
   * input bindings are ready
   *
   * @return {undefined} undefined
   */
  $onInit () {
    // console.log('input bindings are defined!', this.sbModel);
  }

  progressChange(activity) {
    this.sbDeliverables
      .changeTaskProgress(activity, activity.progress)
      .then( response => {
        console.log('response');
      })
      .catch( response => {
        //todo - reset progress
      });
  }
}

ProcessMatrixController.$inject = ['sbDeliverables'];

export { ProcessMatrixController }