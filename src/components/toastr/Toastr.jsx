import toastr from "toastr";

toastr.options = {
  "closeButton": false,
  "debug": false,
  "newestOnTop": false,
  "progressBar": false,
  "positionClass": "toast-top-right",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
};

export function showMessage(message, type) {
  toastr[type](message);
}

export function showErrorMessage(message) {
  showMessage(message, "error");
}

export function showWarningMessage(message) {
  showMessage(message, "warning");
}

export function showSuccessMessage(message) {
  showMessage(message, "success");
}