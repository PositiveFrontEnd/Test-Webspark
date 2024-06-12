import flatpickr from "flatpickr";
import moment from "moment";

document.addEventListener("DOMContentLoaded", () => {
  const dateInputs = document.querySelectorAll(".date__input");
  const calendarImgs = document.querySelectorAll(".calender__img__calender");
  const closeImgs = document.querySelectorAll(".calender__img__close");
  dateInputs.forEach((input, index) => {
    const fp = flatpickr(input, {
      altInput: true,
      dateFormat: "YYYY-MM-DD",
      altFormat: "DD-MM-YYYY",
      allowInput: true,
      parseDate: (datestr, format) => {
        return moment(datestr, format, true).toDate();
      },
      formatDate: (date, format, locale) => {
        return moment(date).format(format);
      },
    });
    const imgClose = closeImgs[index];
    if (imgClose) {
      imgClose.addEventListener("click", () => {
        fp.clear();
      });
    }
    const imgCalender = calendarImgs[index];
    if (imgCalender) {
      imgCalender.addEventListener("click", () => {
        fp.open();
      });
    }
  });
});
