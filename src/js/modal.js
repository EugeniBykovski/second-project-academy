// const modal = document.getElementById("#myModal");
// modal.on("shown.bs.modal", () => modal.trigger("focus"));

$("#myModal").on("shown.bs.modal", function () {
  $("#myInput").trigger("focus");
});
