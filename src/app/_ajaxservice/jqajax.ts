function deleteQueueList() {
  $.ajax({
    type: 'POST',
    datatype: 'json',
    contentType: 'application/json; charset=utf-8',
    url: 'http://linebootaward.azurewebsites.net/api/Queue/GetWaitList',
    data: {'user_id': this.list[0].user_id , 'queue_id': this.locationId },
    success: function(data) {
       alert('s-delete');
    }
  });
}

export {  deleteQueueList };
